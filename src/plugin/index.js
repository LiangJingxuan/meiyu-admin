import mixin from './mixin'
import filter from './filter'
import directive from './directive'
import component from './components'
export default {
  install(Vue) {
    Vue.mixin(mixin);
    for (const key in directive) {
      Vue.directive(key, directive[key])
    }
    for (const key in filter) {
      Vue.filter(key, filter[key])
    }
    for (const key in component) {
      Vue.component(key, component[key])
    }
  }
}