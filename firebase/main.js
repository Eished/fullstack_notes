// import Notify from '@wcjiang/notify'

// const notify = new Notify({
//   message: 'There is message.', // page title.
//   effect: 'flash', // flash | scroll, Flashing or scrolling
//   openurl: 'https://github.com/jaywcjlove/iNotify', // Click on the pop-up window to open the connection address
//   onclick: () => {
//     // Click on the pop-up window trip event
//     // Programmatically closes a notification.
//     notify.close()
//     console.log('---')
//   },
//   // Optional playback sound
//   audio: {
//     // You can use arrays to pass sound files in multiple formats.
//     file: ['msg.mp4', 'msg.mp3', 'msg.wav'],
//     // The following is also work.
//     // file: 'msg.mp4'
//   },
//   // Title flashing, or scrolling speed
//   interval: 1000,
//   // Optional, default green background white text. Favicon
//   updateFavicon: {
//     // favicon font color
//     textColor: '#fff',
//     // Background color, set the background color to be transparent, set the value to "transparent"
//     backgroundColor: '#2F9A00',
//   },
//   // Optional chrome browser notifications，
//   // The default is not to fill in the following content
//   notification: {
//     title: 'Notification!', // Set notification title
//     icon: '', // Set notification icon, The default is Favicon
//     body: 'You have a new message!', // Set message content
//   },
// })

var notify = new Notify({
  effect: 'flash',
  interval: 500,
})
notify.notify({
  title: 'New notice',
  body: 'Thunder, it’s raining...',
  openurl: 'https://jaywcjlove.github.io',
  onclick: function () {
    console.log('on click')
  },
  onshow: function () {
    console.log('on show')
  },
})

// notify.isPermission()
// notify.setFavicon('1')
// notify.player()
// notify.setTitle(true)
// notify.setTitle('New title')

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

const publicVapidKey = '-TK_KCIHgNlGHRxQ_VJv1LZwlqig_aKF0'

const triggerPush = document.querySelector('.trigger-push')

async function triggerPushNotification() {
  if ('serviceWorker' in navigator) {
    const register = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    })

    console.log('waiting for acceptance')
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    })
    console.log('acceptance complete')

    await fetch('/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } else {
    console.error('Service workers are not supported in this browser')
  }
}

triggerPush.addEventListener('click', () => {
  triggerPushNotification().catch((error) => console.error(error))
})
