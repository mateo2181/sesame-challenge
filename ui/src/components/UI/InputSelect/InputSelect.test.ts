import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import InputSelect from './InputSelect.vue';

describe('InputSelect Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('Should render the label and placeholder correctly', () => {
    const wrapper = mount(InputSelect, {
      props: {
        label: 'Select an Option',
        name: 'select-name',
        placeholder: 'Please select an option',
        options,
      },
    });

    expect(wrapper.find('label').text()).toBe('Select an Option');
    expect(wrapper.find('option:disabled').text()).toBe('Please select an option');
  });

  it('Should render the correct number of options', () => {
    const wrapper = mount(InputSelect, {
      props: {
        placeholder: 'Please select an option',
        options,
      },
    });

    const renderedOptions = wrapper.findAll('option');
    expect(renderedOptions.length).toBe(options.length + 1); // +1 for the placeholder
  });

  it('Should updates the model value on selection', async () => {
    const wrapper = mount(InputSelect, {
      props: {
        placeholder: 'Please select an option',
        options,
      },
    });

    const select = wrapper.find('select');

    expect(select.element.value).toBe('');
    await select.setValue('option2');
    expect(select.element.value).toBe('option2');
  });

  it('Should displays the correct option label based on the value', async () => {
    const wrapper = mount(InputSelect, {
      props: {
        placeholder: 'Please select an option',
        options,
        modelValue: 'option2',
      },
    });

    const select = wrapper.find('select');

    expect(select.element.value).toBe('option2');
    expect(select.find('option:checked').text()).toBe('Option 2');
  });
})
