<template>
  <div class="order">
    <div class="left">
      <h2>点菜</h2>
      <div v-if="check">
        <div>菜名: <input type="text" v-model="unit.name" /></div>
        <div>
          图片:
          <input type="text" v-model="unit.url" />
        </div>
        <div>
          分类:
          <input type="text" v-model="unit.type" />
        </div>
        <div>
          单价:
          <input type="text" v-model="unit.price" />
        </div>
        <button @click="handleCheck">确认</button>
      </div>
      <div v-else>
        <div>{{ unit.name }}-{{ unit.url }}-{{ unit.type }}-{{ unit.price }}</div>
        <button @click="handleSubmit">确认添加</button>
        <button @click="handleCancel">取消</button>
      </div>
    </div>
    <div class="right">
      <h2>预览</h2>
      <ul v-if="show">
        <li v-for="(item, index) in list" :key="index">
          {{ item.name }}-{{ item.url }}-{{ item.type }}-{{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      msg: 'hello',
      unit: {
        name: '',
        url: '',
        type: '',
        price: '',
        num: 1,
      },
      check: true,
      show: false,
      list: [],
    }
  },
  methods: {
    handleCheck() {
      this.check = false
    },
    handleSubmit() {
      this.list.push({ ...this.unit }) // 深复制
      this.show = true
      this.handleCancel()
      this.clean()
      this.$root.setMessage(this.list)
      // console.log(this.$root.state.message)
    },
    handleCancel() {
      this.check = true
    },
    clean() {
      this.unit.name = ''
      this.unit.url = ''
      this.unit.type = ''
      this.unit.price = ''
    },
  },
}
</script>

<style>
.left {
  width: 40%;
  float: left;
  background: lightblue;
}
.right {
  width: 60%;
  float: left;
  background: lemonchiffon;
}
</style>