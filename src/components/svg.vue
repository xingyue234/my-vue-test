<template>
 <div>
   <h4>svg-sprite-loader配置svg图片</h4>
   <svg class="my-svg">
    <use xlink:href="#icon-User Secret" />
  </svg>
  <svg class="my-svg">
    <use xlink:href="#icon-User select" />
  </svg>
 </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
.my-svg{
  width: 100px;
}
</style>