importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js')

// Your web app's Firebase configuration
const firebaseConfig = {}
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()
messaging.usePublicVapidKey('BM604NGUHv4I3Wj4YH28BwiHkHzSwM_YSLnP1PonQIyGtlLcWjKNzVw6YWTH0O_xnn6oWU_X4tciegLgmV4vSng')
messaging.onBackgroundMessage(function (payload) {
  console.log(payload)
  // const notificationTitle = 'Title'
  // const notificationOptions = {
  //   body: payload.data.message,
  //   icon: 'PATH TO ICON IF ANY',
  //   data: { url: payload.data.onClick }, //the url which we gonna use later
  // }
  // return self.registration.showNotification(notificationTitle, notificationOptions)
})

//Code for adding event on click of notification
// self.addEventListener('notificationclick', function (event) {
//   let url = event.notification.data.url
//   event.notification.close()
//   event.waitUntil(
//     clients.matchAll({ type: 'window' }).then((windowClients) => {
//       // Check if there is already a window/tab open with the target URL
//       for (var i = 0; i < windowClients.length; i++) {
//         var client = windowClients[i]
//         // If so, just focus it.
//         if (client.url === url && 'focus' in client) {
//           return client.focus()
//         }
//       }
//       // If not, then open the target URL in a new window/tab.
//       if (clients.openWindow) {
//         return clients.openWindow(url)
//       }
//     })
//   )
// })
