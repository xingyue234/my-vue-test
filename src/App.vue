<template>
  <div id="app">
    <svgs />
    
    <kaikeba />

    <Input v-model="value" placeholder="请输入您的手机号码" type="text" />
    <!-- 相当于 -->
    <!-- <Input :val="value" @input="value = $event" placeholder="请输入您的手机号码" type="text" /> -->
    <router-view />
  </div>
</template>

<script>
import kaikeba from '@/components/kaikeba'
import svgs from '@/components/svg'
import Input from '@/components/Input'
export default {
  name: 'app',
  data () {
    return {
      value: '你好'
    }
  },
  methods: {
  },
  components: {
    kaikeba,
    svgs,
    Input
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
