<template>
  <div class="check">
    <h2>结账</h2>
    <template v-if="show">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          {{ item.name }}-{{ item.url }}-{{ item.type }}-{{ item.price }}
          <button @click="minus(index)">-</button>
          {{ item.num }}
          <button @click="add(index)">+</button>
        </li>
      </ul>
      <div>
        <h4>总计: {{ totle }} 元</h4>
      </div>
      <button @click="pay">支付</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data() {
    return {
      list: [],
      show: false,
    }
  },
  methods: {
    pay() {
      if (prompt('输入支付密码:')) {
        alert('支付成功')
      }
    },
    minus(index) {
      this.list[index].num-- // 修改数组中的对象,无需set方法
      // this.$set(this.list, index, this.list[index])
    },
    add(index) {
      this.list[index].num++
    },
  },
  computed: {
    totle() {
      let totle = 0
      this.list.forEach((e) => {
        totle += e.num * e.price
      })
      return totle
    },
  },
  mounted() {
    // console.log(this.$root.state.message)
    if (!this.$root.state.message) {
      return
    }
    this.list = this.$root.state.message
    this.show = true
  },
}
</script>
