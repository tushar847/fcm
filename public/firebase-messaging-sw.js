importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyACLMVkKK3WCqpiiXoBMZZkx8IJsKF8jmE",
    authDomain: "fcmnotif-97c13.firebaseapp.com",
    projectId: "fcmnotif-97c13",
    storageBucket: "fcmnotif-97c13.appspot.com",
    messagingSenderId: "52873516336",
    appId: "1:52873516336:web:eb345da727d477b42724f5"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});