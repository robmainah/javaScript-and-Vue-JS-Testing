import App from "./App.vue"
import { mount } from "@vue/test-utils"
import { nextTick } from "vue"
import { createStore } from "vuex"

const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 0
      }
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  })
}

const factory = () => {
  const store = createVuexStore()

  return mount(App, {
    global: {
      plugins: [store]
    }
  })
}

describe('App', () => {
  it('test for odd', async () => {
    const wrapper = factory()
    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.html()).toContain('Count: 1. Count is odd')
  })

  it('test for even', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 2. Count is even')
  })
})
