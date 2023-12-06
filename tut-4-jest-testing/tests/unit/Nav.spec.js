import Nav from '@/components/Nav.vue'
import { mount } from '@vue/test-utils'

describe('Nav.vue', () => {
  it('test render profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLogged: true
        }
      },
    })

    const profileLink = wrapper.get('#profile')
    expect(profileLink.text()).toEqual('Profile')
  })

  it('should not render profile link', () => {
    const wrapper = mount(Nav, {
      data() {
        return {
          isLogged: false
        }
      },
    })

    const profileLink = wrapper.find('#profile')
    expect(profileLink.exists()).toBe(false)
  })
})