import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const localVue = createLocalVue()

/**
 * An alternative to vue-test-util's mount function which in addition to creating a component wrapper also
 * performs app-specific initialisation.
 *
 * @param component
 * @returns {Wrapper<Vue>}
 */
export const mountComponent = (component) => {
  const mountOptions = {
    localVue,
    vuetify: new Vuetify()
  }

  mountOptions.vuetify = new Vuetify()
  return mount(component, mountOptions)
}


