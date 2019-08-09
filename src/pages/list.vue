<template>
  <div>
    <p v-for="item in num" :key="item">列表{{num}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 10
    }
  }
}
</script>
<style>
</style>