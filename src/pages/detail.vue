<template>
  <div>
    <h3>列表详情{{id}}和{{$route.params.id}}</h3>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>
<style>
</style>