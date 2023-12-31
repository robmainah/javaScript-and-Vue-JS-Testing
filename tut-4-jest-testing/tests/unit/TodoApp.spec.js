import TodoApp from '@/components/TodoApp.vue'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue';

describe('TodoApp', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(TodoApp);
  })

  it('test rendering list of todos', () => {
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe("Learn vue testing")
  })

  it('should add new todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    // await wrapper.get('[data-test="new-todo"]').setValue("New todo")
    // await wrapper.get('[data-test="form"]').trigger('submit')
    
    wrapper.get('[data-test="new-todo"]').setValue("New todo")
    wrapper.get('[data-test="form"]').trigger('submit')
    await nextTick()
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
    expect(wrapper.get('[data-test="new-todo"]').element.value).toBe("")
  })

  it('test show completed', async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed")
  })
})