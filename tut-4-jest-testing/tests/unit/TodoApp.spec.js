import TodoApp from '@/components/TodoApp.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue';

describe('TodoApp', () => {
  it('test rendering list of todos', () => {
    const wrapper = mount(TodoApp);
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe("Learn vue testing")
  })

  it('should add new todo', async () => {
    const wrapper = mount(TodoApp)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    // await wrapper.get('[data-test="new-todo"]').setValue("New todo")
    // await wrapper.get('[data-test="form"]').trigger('submit')
    
    wrapper.get('[data-test="new-todo"]').setValue("New todo")
    wrapper.get('[data-test="form"]').trigger('submit')
    await nextTick()
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
    expect(wrapper.get('[data-test="new-todo"]').element.value).toBe("")
  })
})