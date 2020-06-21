<template>
<transition name="dialog-fade">
<!-- 遮罩层 点击关闭dialog 可以用.self 处理 只点击自己触发，或者是阻止事件冒泡 在下一行添加@click.stop-->
  <div class="cj-dialog__wrapper" v-show="visiable" @click.self="handleClose">
    <!-- 对话框 -->
    <div class="cj-dialog" :style="{width,marginTop:top}">
      <div class="cj-dialog__header">
        <!-- 如果传了 slot 整个slot会替换掉，如果没传slot 则显示原有的slot -->
        <slot name="title">
          <span class="cj-dialog__title">{{title}}</span>
        </slot>
        <button class="cj-dialog__headerbtn" @click="handleClose">
          <i class="cj-icon-close"></i>
        </button>
      </div>
      <div class="cj-dialog__body">
        <!-- 默认插槽 -->
        <slot></slot>
      </div>
      <!-- 传了slot就显示，没传就不显示 -->
      <div class="cj-dialog__footer" v-if="$slots.default">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: "CjDialog",
  props:{
    title:{
      type:String,
      default:'提示'
    },
    width:{
      type:String,
      default:"50%"
    },
    top:{
      type:String,
      default:"15vh"
    },
    visiable:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleClose(){
      //配合sync修饰符固定写法  更新 props的数据
      this.$emit("update:visiable",false)
    }
  },
};
</script>
<style lang="scss">
.cj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .cj-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .cj-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .cj-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .cj-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //添加scoped后，如果想影响子组件的组件样式，可以使用深度选择器来解决这个问题 scss的深度选择器为 ::v-deep
      // ::v-deep .cj-button:first-child {
      .cj-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
// vue的动画通常只需要这两个类，动过过程用css3动画实现
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out 0.4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>