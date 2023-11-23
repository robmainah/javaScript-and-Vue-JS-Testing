import { mount } from "@vue/test-utils"

const App = {
  props: {
    count: {
      type: Number
    }
  },
  template: `
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even
    </div>
    <div v-else>
      Count: {{ count }}. Count is odd
    </div>
  `
}

const factory = (props) => {
  return mount(App, {
    props
  })
}

describe('App', () => {
  it('test for odd', () => {
    const wrapper = factory({ count: 1 })
    expect(wrapper.html()).toContain('Count: 1. Count is odd')
  })
  
  it('test for even', () => {
    const wrapper = factory({ count: 2})
    expect(wrapper.html()).toContain('Count: 2. Count is even')
  })
})
