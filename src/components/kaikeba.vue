<template>
  <div class="kaikeba">
    <h4>测试组件</h4>
    <button @click="showMe">toggle</button>
    <p v-show="show">今天天气好热</p>
    <button @click="btnClick">测试按钮</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      loading: false
    }
  },
  methods: {
    showMe () {
      this.show = !this.show
    },
    btnClick () {
      if (!this.loading) {
        this.loading = true
      }
    }
  }
}
</script>

