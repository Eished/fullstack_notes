import { getMessaging } from 'firebase/messaging'
import { onBackgroundMessage } from 'firebase/messaging/sw'

const messaging = getMessaging()
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
  measurementId: process.env.VUE_APP_measurementId,
}
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()
messaging.usePublicVapidKey(process.env.VUE_APP_PublicVapidKey)
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.data.title
  const notificationOptions = {
    body: payload.data.message,
    icon: 'PATH TO ICON IF ANY',
    data: { url: payload.data.onClick }, //the url which we gonna use later
  }
  return self.registration.showNotification(notificationTitle, notificationOptions)
})
//Code for adding event on click of notification
self.addEventListener('notificationclick', function (event) {
  let url = event.notification.data.url
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i]
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus()
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url)
      }
    })
  )
})
