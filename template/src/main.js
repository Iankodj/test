// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import '@progress/kendo-ui'
import { KendoNumericTextBox, KendoColorPicker, KendoColorPalette, KendoFlatColorPicker, KendoMaskedTextBox, KendoInputsInstaller, KendoSlider, KendoSwitch } from '@progress/kendo-inputs-vue-wrapper'
import { KendoWindow, KendoWindowInstaller } from '@progress/kendo-window-vue-wrapper'

Vue.config.productionTip = false

Vue.use(KendoInputsInstaller)
Vue.use(KendoWindowInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, KendoNumericTextBox, KendoColorPicker, KendoColorPalette, KendoFlatColorPicker, KendoMaskedTextBox, KendoSlider, KendoSwitch, KendoWindow }
})
