// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage
} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACLMVkKK3WCqpiiXoBMZZkx8IJsKF8jmE",
  authDomain: "fcmnotif-97c13.firebaseapp.com",
  projectId: "fcmnotif-97c13",
  storageBucket: "fcmnotif-97c13.appspot.com",
  messagingSenderId: "52873516336",
  appId: "1:52873516336:web:eb345da727d477b42724f5"
};

// Initialize Firebase
const vapid_key = "BKCf_K6iZJwD7CVxc99bQ9Pr1EV-M1425m3cOGu2ZJqlZalNDPghxQ0fVFNkJqfRgD40Il-pjvuzO2bydFil9hE";
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const x = function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}();

getToken(messaging, {
  vapidKey: 'BKCf_K6iZJwD7CVxc99bQ9Pr1EV-M1425m3cOGu2ZJqlZalNDPghxQ0fVFNkJqfRgD40Il-pjvuzO2bydFil9hE'
}).then((currentToken) => {
  if (currentToken) {
    console.log('token ', currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});


onMessage(messaging, (payload) => {
  console.log('hi')
  console.log('Message received. ', payload);
});


export default {messaging}