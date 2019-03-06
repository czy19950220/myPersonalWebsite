// 导入自己需要的组件
import { Select, Option, OptionGroup, Input, Dialog, Row, Col, Button, ButtonGroup, } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)//Select 选择器
    Vue.use(Option)//Select 选择器
    Vue.use(OptionGroup)//Select 选择器
    Vue.use(Input)//输入框
    Vue.use(Dialog)//Dialog 对话框
    Vue.use(Row)//Layout 布局
    Vue.use(Col)//Layout 布局
    Vue.use(Button)//Button 按钮
    Vue.use(ButtonGroup)//按钮组
  }
}
export default element

