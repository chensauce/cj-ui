<template>
  <div class="cj-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CjRadioGroup",
  //使用provide可以向子孙节点发送消息
  provide(){
    return{
      RadioGroup:this
    }
  },
  props: {
    value: null
  }
};
</script>

<style lang="scss">
</style>