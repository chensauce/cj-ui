<template>
  <label class="cj-checkbox" :class="{'is-checked':isChecked}">
    <span class="cj-checkbox__input">
      <span class="cj-checkbox__inner"></span>
      <input
        type="checkbox"
        :name="name"
        v-model="model"
        :value="label"
        class="cj-checkbox__original"
      />
    </span>
    <span class="cj-checkbox__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "CjCheckbox",
  inject: {
    CheckboxGroup: {
      default: ""
    }
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup;
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isChecked() {
      //如果是group包裹，判断label是否在model中
      //如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    }
  }
};
</script>

<style lang="scss">
.cj-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .cj-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cj-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .cj-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .cj-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
    color:#000;
    transition: color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }
}
.cj-checkbox.is-checked {
  .cj-checkbox__input {
    .cj-checkbox__inner {
      background: #409eff;
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .cj-checkbox__label {
    color: #409eff;
  }
}
</style>