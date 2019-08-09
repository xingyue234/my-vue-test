// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

function add (num1, num2) {
  return num1 + num2
}
describe('add function', () => {
  it('测试add函数', () => {
    expect(add(1, 3)).toBe(4)
    expect(add(1, -3)).toBe(-2)
  })
})
