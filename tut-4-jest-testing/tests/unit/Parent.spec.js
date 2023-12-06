import { mount, shallowMount } from "@vue/test-utils";
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  it('has parent component', () => {
    const wrapper = mount(Parent)

    expect(wrapper.text()).toMatch("parent")
  })
})