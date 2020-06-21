<template>
  <label class="cj-radio" :class="{'is-checked':label===model}">
    <!-- 小圆 -->
    <span class="cj-radio__input">
      <span class="cj-radio__inner"></span>
      <input class="cj-radio__original" type="radio" :value="label" v-model="model" :name="name" />
    </span>
    <span class="cj-radio__label">
      <!-- 如果没有插槽，就显示label -->
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "CjRadio",
  //接受来自父组件的数据
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        //如果使用group包装了 就返回group的value
        return this.isGroup?this.RadioGroup.value:this.value
      },
      set(value) {
         //如果使用group包装了 就调用group的input
        this.isGroup?this.RadioGroup.$emit('input',value):this.$emit("input", value);
      }
    },
    isGroup(){
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.cj-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .cj-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cj-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .cj-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cj-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.cj-radio.is-checked {
  .cj-radio__input {
    .cj-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        content: "";
        display: block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #fff;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .cj-radio__label {
    color: #409eff;
  }
}
</style>