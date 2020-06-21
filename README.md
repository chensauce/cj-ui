# cj-ui

一个基于vue，模拟elementui搭建的ui组件库，仅用于学习交流使用。

## 使用方法

```js
import Vue from 'vue'
import CjUI from '../packages'
Vue.use(CjUI)
```

## button

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|type|类型|String|primary/success/info/warning/danger|-|
|plain|是否朴素按钮|boolean|-|false|
|round|是否圆角按钮|boolean|-|false|
|circle|是否圆形按钮|boolean|-|false|
|disabled|是否禁用|Boolean|-|false|

```html
<cj-button type="primary">登录</cj-button>
<cj-button plain type="success">登录</cj-button>
<cj-button circle type="info">登录</cj-button>
<cj-button round type="warning">登录</cj-button>
<cj-button disabled type="danger">登录</cj-button>
```

## dialog

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|visible|是否显示|boolean|-|false|
|title|dialog的标题|string|-|-|
|width|dialog的宽度|string|-|50%|
|top|dialog距顶部的距离|string|-|15vh|

### Slot

|name|说明|
|:--:|:--:|
|-|dialog的内容|
|title|dialog的标题|
|footer|dialog页脚区内容|

```html
<cj-dialog width="60%" :visiable.sync="visiable">
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
```

## form

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|model|表单数据对象|object|-|-|
|label-width|表单区域宽度|string|-|-|

### Form-Item Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|label|标签文本|string|-|-|

```html
<cj-form :model="model" label-width="200px">
  <cj-form-item label="用户名">
    <cj-input placeholder="请输入用户名" v-model="model.username"></cj-input>
  </cj-form-item>
  <cj-form-item label="选择">
    <cj-switch v-model="model.select"></cj-switch>
  </cj-form-item>
</cj-form>
```

## Input

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|type|类型|string|原生input的type值|text|
|placeholder|输入框站位文本|string|-|-|
|showPassword|是否显示切换密码图标|boolean|-|false|
|clearable|是否可清空|boolean|-|false|
|disabled|是否禁用|boolean|-|false|

```html
<cj-input placeholder="请输入" type="password" name="cj" showPassword v-model="username"></cj-input>
```

## Switch

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|v-model|绑定值|boolean|-|false|
|activeColor|switch打开时的颜色|string|-|-|
|inactiveColor|switch关闭时的颜色|string|-|-|

```html
 <cj-switch v-model="active" active-color="red" inactive-color="green" name="check"></cj-switch>
```

## Radio

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|v-model|绑定值|string,number,boolean|-|-|
|label|radio的value|string,number,boolean|-|-|

### Input-Group Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|v-model|绑定值|string,number,boolean|-|-|

```html
<cj-radio label="1" v-model="gender">男</cj-radio>
<cj-radio label="2" v-model="gender">女</cj-radio>

<cj-radio-group v-model="gender">
  <cj-radio label="1" >男</cj-radio>
  <cj-radio label="2" >女</cj-radio>
</cj-radio-group>
```

## Checkbox

### Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|v-model|绑定值|string,number,boolean|-|-|
|label|选中状态的值|string,number,boolean|-|-|

### Checkbox-Group Attributes

|参数|说明|类型|可选值|默认值|
|:--:|:--:|:--:|:--:|:--:|
|v-model|绑定值|string,number,boolean|-|-|

```html
<cj-checkbox label="复选框" v-model="checkboxactive"></cj-checkbox>
<cj-checkbox-group v-model="hobby">
  <cj-checkbox label="抽烟"></cj-checkbox>
  <cj-checkbox label="喝酒"></cj-checkbox>
  <cj-checkbox label="烫头"></cj-checkbox>
</cj-checkbox-group>
```
