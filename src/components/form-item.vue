<template>
  <div class="cj-form-item" :style="{width:this.Form.labelWidth}">
    <label class="cj-form-item__label">{{label}}</label>
    <div class="cj-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CjFormItem",
  inject: {
    Form: {
      required: true
    }
  },
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.cj-form-item {
  margin-bottom: 25px;
  .cj-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .cj-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>