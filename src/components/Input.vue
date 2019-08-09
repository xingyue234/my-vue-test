<template>
  <div>
    <input :value="val" @input="handleInput" v-bind="$attrs"/>
    <p>{{val}}</p>
    <button @click="showNotice">showNotice</button>
  </div>
</template>
<script>
import Notice from './notice/kNotice'
export default {
  props: {
    val: {
      type: String,
      default: ''
    },
  },
  model: {
    prop: 'val',
    event: 'input'
  },
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
    showNotice () {
      this.$create(Notice, {
        title: '标题',
        message: '这是message',
        duration: 2000
      })
    },
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

