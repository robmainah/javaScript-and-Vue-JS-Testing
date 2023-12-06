import { describe, expect, it } from "vitest";
import View from "../View.vue";
import { render, screen } from "@testing-library/vue";

describe('View', () => {
  const viewText = "Hello from view component"
  it('renders span', async () => {
    const viewId = "viewId"
    render(View, {
      props: { element: 'span', id: viewId },
      slots: {default: viewText}
    })

    const view = await screen.findByText(viewText)
    expect(view.id).toBe(viewId)
    expect(view.innerHTML).toBe(viewText)
  })
  it('snapshot matches', () => {
    const wrapper = render(View, {
      props: {element: 'div'}
    })
    expect(wrapper).toMatchSnapshot()
  })
})