<template>
  <div class="Firebase">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from "firebase/messaging"
// import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
  measurementId: process.env.VUE_APP_measurementId,
}

const app = initializeApp(firebaseConfig);

const messaging = getMessaging();


getToken(messaging, { vapidKey: process.env.VUE_APP_PublicVapidKey }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken, 'currentToken')
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

// messaging.getToken().then(currentToken => {
//   console.log(currentToken);
// });

// messaging.onMessage(function (payload) {
//   console.log('on Message', payload);
// });

console.log(app);

export default {
  name: 'Firebase',
  data () {
    return {
      file: {}
    }
  },
  methods: {
    Firebase () {

    },
  },
}
</script>
