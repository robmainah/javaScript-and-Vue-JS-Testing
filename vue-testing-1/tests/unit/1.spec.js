import { mount } from "@vue/test-utils"

const App = {
  data () {
    return {
      count: 0
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

const factory = ({ data }) => {
  return mount(App, {
    data() {
      return data
    }
  })
}

describe('App', () => {
  it('test for odd', () => {
    const wrapper = factory({ 
      data: {
        count: 1
      }
    })
    expect(wrapper.html()).toContain('Count: 1. Count is odd')
  })

  it('test for even', () => {
    const wrapper = factory({ 
      data: {
        count: 2
      }
    })
    expect(wrapper.html()).toContain('Count: 2. Count is even')
  })
})
