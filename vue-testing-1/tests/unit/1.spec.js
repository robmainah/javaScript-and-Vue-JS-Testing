import App from "./App.vue"
import { mount } from "@vue/test-utils"
import { nextTick, reactive } from "vue"
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
  // const store = createVuexStore()
  const state = reactive({ count: 0 })

  return mount(App, {
    global: {
      // plugins: [store]
      provide: {
        store: {
          state: state,
          commit: () => {
            state.count++
          }
        }
      }
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
