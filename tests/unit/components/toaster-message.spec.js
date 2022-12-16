import ToasterMessage from '@/components/toaster-message.vue'
import { mountComponent } from './component-test-utils'

describe('Toaster Message Tests', () => {

  it('test close button', () => {
    const wrapper = mountComponent(ToasterMessage)
    expect(wrapper.find('#close-btn').text()).toEqual('Close')
  })
})
