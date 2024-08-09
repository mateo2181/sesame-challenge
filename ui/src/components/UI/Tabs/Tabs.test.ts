import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';

describe('Tabs and Tab components', () => {
  it('Should renders tabs and displays the correct content on selection', async () => {
    const wrapper = await mount(Tabs, {
      slots: {
        default: `
          <Tab title="Tab 1"><div>Content 1</div></Tab>
          <Tab title="Tab 2"><div>Content 2</div></Tab>
          <Tab title="Tab 3"><div>Content 3</div></Tab>
        `,
      },
      global: {
        components: {
          Tab,
        },
      },
    });

    // The first tab should be selected by default
    const tabTitles = wrapper.findAll('li');
    expect(tabTitles[0].classes()).toContain('text-primary');
    expect(tabTitles[0].classes()).toContain('border-b-2');
    expect(wrapper.html()).toContain('Content 1');

    // Click on the second tab and verify content
    await tabTitles[1].trigger('click');
    expect(tabTitles[1].classes()).toContain('text-primary');
    expect(wrapper.html()).toContain('Content 2');

    // Click on the third tab and verify content
    await tabTitles[2].trigger('click');
    expect(tabTitles[2].classes()).toContain('text-primary');
    expect(wrapper.html()).toContain('Content 3');
  });

  it('Should render the first tab by default', async () => {
    const wrapper = await mount(Tabs, {
      slots: {
        default: `
          <Tab title="Tab 1"><div>Content 1</div></Tab>
          <Tab title="Tab 2"><div>Content 2</div></Tab>
          <Tab title="Tab 3"><div>Content 3</div></Tab>
        `,
      },
      global: {
        components: {
          Tab,
        },
      },
    });

    // Verify that the first tab is selected by default
    const tabTitles = wrapper.findAll('li');
    expect(tabTitles[0].classes()).toContain('text-primary');
    expect(wrapper.html()).toContain('Content 1');
  });
});