<template>
  <div class="cj-input" :class="[{'cj-input--suffix':showSuffix}]">
    <!-- 如果传了showPassword，判断是否需要切换密码显示没传就直接使用传过来的type -->
    <input
      :placeholder="placeholder"
      :type="showPassword?(passwordVisiable?'text':'password'):type"
      :name="name"
      :disabled="disabled"
      class="cj-input__inner"
      :class="[{'is-disabled':disabled}]"
      :value="value"
      @input="handleInput"
    />
    <span class="cj-input__suffix" v-if="showSuffix">
      <i
        class="cj-input__icon cj-icon-circle-close cj-input__clear"
        v-if="clearable && value"
        @click="handleClear"
      ></i>
      <i
        class="cj-input__icon cj-icon-view cj-input__clear"
        :class="[{'cj-icon-view-active':passwordVisiable}]"
        v-if="showPassword"
        @click="handleShowPassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "CjInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //v-model的语法糖，接受v-model的值
    value: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisiable: false
    };
  },
  methods: {
    //双向绑定，修改父组件的值
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleClear() {
      this.$emit("input", "");
    },
    //禁止直接修改props的参数
    handleShowPassword() {
      this.passwordVisiable = !this.passwordVisiable;
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  }
};
</script>

<style lang="scss">
.cj-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .cj-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.cj-input--suffix {
  .cj-input__inner {
    padding-right: 30px;
  }
  .cj-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .cj-icon-view-active {
      color: #409eff;
      transition: all 0.3s;
    }
  }
}
</style>