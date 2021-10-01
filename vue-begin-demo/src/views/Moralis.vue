<template>
  <div class="Moralis">
    <h2>Moralis</h2>
    <button @click="pay">支付</button>
  </div>
</template>

<script>
import Moralis from 'moralis'

// const user = Moralis.User.current()
// console.log(user)

export default {
  name: 'Moralis',
  data() {
    return {
      list: [],
      show: false,
    }
  },
  methods: {
    async pay() {
      if (prompt('输入支付密码:')) {
        Moralis.initialize('En00KLYtbhiHjzsmuW1KDcmtutxcBVq7q6yLZrOW')

        Moralis.serverURL = 'https://exftlyecqh3c.moralishost.com:2053/server'

        await Moralis.authenticate().then(function (user) {
          console.log(user.get('ethAddress'))
          console.log(user)
        })
        alert('支付成功')
      }
    },
  },
}
</script>
