import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { formatDate } from '@/utils/dates';
import CandidateComp from './Candidate.vue';

const IconMock = () => (`<svg data-testid="test-icon-mocked"></svg>`);

describe('Candidate component', () => {
  const candidate = {
    id: '1',
    firstName: 'Mateo',
    lastName: 'Tamberi',
    email: 'mateot@gmail.com',
    creatorEmployee: 'Marc Zarate',
    updatedAt: new Date(),
    statusId: 'status-1'
  };

  it('Should render candidate information correctly', () => {
    const wrapper = mount(CandidateComp, {
      props: {
        candidate,
      },
      global: {
        stubs: {
            'v-icon': IconMock
        }
    },
    });

    expect(wrapper.text()).toContain('Mateo Tamberi');
    expect(wrapper.text()).toContain('Añadido por Marc Zarate');
    expect(wrapper.text()).toContain(formatDate(candidate.updatedAt));
  });

  it('Should toggles menu visibility when the button is clicked', async () => {
    const wrapper = mount(CandidateComp, {
      props: {
        candidate,
      },
      global: {
        stubs: {
            'v-icon': IconMock
        }
    },
    });

    const button = wrapper.find('button');
    expect(wrapper.find('ul').exists()).toBe(false);

    await button.trigger('click');
    expect(wrapper.find('ul').exists()).toBe(true);

    await button.trigger('click');
    expect(wrapper.find('ul').exists()).toBe(false);
  });

  it('Should renders the correct menu options', async () => {
    const wrapper = mount(CandidateComp, {
      props: {
        candidate,
      },
      global: {
        stubs: {
            'v-icon': IconMock
        }
    },
    });

    await wrapper.find('button').trigger('click');

    const menuItems = wrapper.findAll('ul li a');
    expect(menuItems.length).toBe(1);
    expect(menuItems[0].text()).toBe('Editar candidato');
  });
});