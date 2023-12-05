import TodoApp from '@/components/TodoApp.vue'
import { mount } from '@vue/test-utils'

describe('TodoApp', () => {
  it('test rendering list of todos', () => {
    const wrapper = mount(TodoApp);
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe("Learn vue testing")
  })
})