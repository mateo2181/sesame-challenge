import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import Input from "./Input.vue";

describe('Input component', () => {
    it('Should render the label correctly', () => {
        const wrapper = mount(Input, {
            props: {
                label: 'Email *',
                placeholder: 'Email',
                name: 'email'
            }
        });
        expect(wrapper.find('label').text()).toBe('Email *');
    });

    it('Should binds the input value to the model', async () => {
        const wrapper = mount(Input, {
            props: {
                label: 'Email',
                name: 'Email',
                placeholder: 'Email'
            },
            modelValue: ''
        });

        const input = wrapper.find('input');
        await input.setValue('testuser');

        expect(input.element.value).toBe('testuser');
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['testuser']);
    });

    it('Should render the placeholder correctly', () => {
        const wrapper = mount(Input, {
            props: {
                label: 'Email',
                name: 'Email',
                placeholder: 'Enter your email'
            }
        });
        const input = wrapper.find('input');
        expect(input.attributes('placeholder')).toBe('Enter your email');
    });
})