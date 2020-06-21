<template>
  <div id="app">
    <div>
      <cj-button @click="a('123')" disabled></cj-button>
      <cj-button disabled type="primary">登录</cj-button>
      <cj-button disabled type="success">登录</cj-button>
      <cj-button disabled type="info">登录</cj-button>
      <cj-button disabled type="warning">登录</cj-button>
      <cj-button disabled type="danger">登录</cj-button>
      <cj-button @click="visiable=true" type="danger">打开对话框</cj-button>
    </div>
    <!-- sync修饰符，代替子组件向父组件通信的模式来修改父组件的值 -->
    <cj-dialog width="60%" :visiable.sync="visiable">
      <!-- v-slot 缩写为 # -->
      <template #title>
        <h3>
          这是标题
        </h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template #footer>
        <cj-button plain @click="visiable=false">取消</cj-button>
        <cj-button type="primary" @click="visiable=false">确定</cj-button>
      </template>
    </cj-dialog>
    <!-- v-model等价于:value='a'+@input='a=$event.target.value',可以使用这个思想实现对组件进行v-model绑定 -->
    <cj-input placeholder="请输入" type="password" name="cj" showPassword v-model="username"></cj-input>
    <cj-switch v-model="active" active-color="red" inactive-color="green" name="check"></cj-switch>
    <!-- <cj-radio label="1" v-model="gender">男</cj-radio>
    <cj-radio label="2" v-model="gender">女</cj-radio>
    <cj-radio label="3" v-model="gender"></cj-radio>
    <cj-radio label="4" v-model="gender"></cj-radio> -->
    <cj-radio-group v-model="gender">
    <cj-radio label="1" >男</cj-radio>
    <cj-radio label="2" >女</cj-radio>
    </cj-radio-group>
    <cj-checkbox label="复选框" v-model="checkboxactive"></cj-checkbox>
    <cj-checkbox-group v-model="hobby">
    <cj-checkbox label="抽烟"></cj-checkbox>
    <cj-checkbox label="喝酒"></cj-checkbox>
    <cj-checkbox label="烫头"></cj-checkbox>
    </cj-checkbox-group>
    <cj-form :model="model" label-width="200px">
      <cj-form-item label="用户名">
        <cj-input placeholder="请输入用户名" type="textarea" v-model="model.username"></cj-input>
      </cj-form-item>
      <cj-form-item label="选择">
        <cj-switch v-model="model.select"></cj-switch>
      </cj-form-item>
    </cj-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visiable:false,
      username:'cj',
      active:false,
      gender:'1',
      checkboxactive:false,
      hobby:['抽烟','喝酒','烫头'],
      model:{
        username:'',
        select:false
      }
    }
  },
  methods: {
    a(e){
      console.log(e)
    }
  },
};
</script>

<style lang="scss">
</style>
