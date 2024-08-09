import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import InputSearch from "./InputSearch.vue";

const IconMock = () => (`<svg data-testid="test-icon-mocked"></svg>`);

describe('InputSearch component', () => {
    it('Should emits the search event with input value on Enter key', async () => {
        const wrapper = mount(InputSearch, {
            props: {
                placeholder: 'Email'
            },
            global: {
                stubs: {
                    'v-icon': IconMock
                }
            },
            modelValue: ''
        });
        const searchValue = 'Marc';

        const input = wrapper.find('input');
        await input.setValue(searchValue);
        input.trigger('keyup.enter');

        expect(wrapper.emitted().search).toBeTruthy();
        expect(wrapper.emitted().search[0]).toEqual([searchValue]);
    });

    it('Should render the placeholder correctly', () => {
        const wrapper = mount(InputSearch, {
            props: {
                placeholder: 'Type to search'
            },
            global: {
                stubs: {
                    'v-icon': IconMock
                }
            },
        });
        const input = wrapper.find('input');
        expect(input.attributes('placeholder')).toBe('Type to search');
    });
})