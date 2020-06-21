<template>
  <div class="cj-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CjCheckboxGroup",
  props: {
    value: {
      type: Array
    }
  },
  provide(){
    return {
      CheckboxGroup:this
    }
  }
};
</script>

<style lang="scss">
</style>