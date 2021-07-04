import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import * as originalRules from 'vee-validate/dist/rules'
import ja from 'vee-validate/dist/locale/ja.json'

let rule
for (rule in originalRules) {
  extend(rule, {
    ...(originalRules as any)[rule],
  })
}

const kana = /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/
const isKana = {
  message: '"カタカナ"で入力してください',
  validate(value: any) {
    return kana.test(value)
  },
}
extend('isKana', isKana)
localize('ja', ja)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
