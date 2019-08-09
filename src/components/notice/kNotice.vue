<template>
  <div class="k-notice" v-if="isShow">
    <h4>{{title}}</h4>
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  created () {
    this.show()
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(() => {this.hide()}, this.duration)
    },
    hide () {
      this.isShow = false
      this.remove()
    }
  }

}
</script>
<style>
.k-notice{
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 1px 5px #ccc;
  min-width: 200px;
}
  .k-notice h4 {
    padding: 10px;
    font-size: 20px;
  }
  .k-notice p{
    margin: 8px 16px;
    font-size: 14px;
  }
</style>
