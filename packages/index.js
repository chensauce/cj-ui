//整个包的入口
import CjButton from './button'
import CjDialog from './dialog'
import CjInput from './input'
import CjSwitch from './switch'
import CjRadio from './radio'
import CjRadioGroup from './radio-group'
import CjCheckbox from './checkbox'
import CjCheckboxGroup from './checkbox-group'
import CjForm from './form'
import CjFormItem from './form-item'
import './fonts/font.scss'
const components = [CjButton, CjDialog, CjInput, CjSwitch, CjRadio, CjRadioGroup, CjCheckbox, CjCheckboxGroup, CjForm, CjFormItem]
const install=function(Vue){
  components.forEach(item=>{
    Vue.component(item.name,item)
  })
}
export default {
  install
}