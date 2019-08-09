
import { shallowMount } from '@vue/test-utils'
import kaikeba from '@/components/kaikeba.vue'

describe('kaikeba.vue', () => {

  it('renders kaikeba', () => {
    const defaultData = kaikeba.data()
    expect(defaultData.show).toBe(false)
  })

  it('测试按钮点击后', () => {
    const wrapper = shallowMount(kaikeba)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.show).toBe(true)
  })
})
