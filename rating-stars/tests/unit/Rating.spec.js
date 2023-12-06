import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Rating, {
    props: {
      maxStars: 5,
      initialActive: 2,
    }
  })
})

afterEach(() => {
  wrapper.unmount()
})

describe('Rating', () => {
  it('renders the stars', () => {
    const stars = wrapper.findAll('.star')
    expect(stars.length).toBe(5)
  })
  it('renders the active stars', () => {
    const active = wrapper.findAll('.star.active')
    expect(active.length).toBe(2)
  })
  it('renders summary', () => {
    const summary = wrapper.find('.summary')
    expect(summary.text()).toBe("2 of 5")
  })
})
