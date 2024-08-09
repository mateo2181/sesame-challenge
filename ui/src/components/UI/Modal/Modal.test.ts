import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Modal from './Modal.vue';

describe('Modal component', () => {
    it('Should renders the modal correctly', () => {
        const wrapper = mount(Modal, {
            slots: {
                header: '<h2>Modal Header</h2>',
                body: '<p>This is the body content</p>',
                footer: '<button>Close</button>'
            }
        });

        expect(wrapper.find('div[role="dialog"]').exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Modal Header');
        expect(wrapper.find('p').text()).toBe('This is the body content');
        expect(wrapper.find('button').text()).toBe('Close');
    });

    it('Should not render body and footer if slots are not provided', () => {
        const wrapper = mount(Modal, {
            slots: {
                header: '<h2>Modal Header</h2>',
            }
        });

        expect(wrapper.find('[data-testid="modal-footer"]').exists()).toBe(false);
        expect(wrapper.find('[data-testid="modal-body"]').exists()).toBe(false);
    });

    it('Should renders only the header if only header slot is provided', () => {
        const wrapper = mount(Modal, {
            slots: {
                header: '<h2>Modal Header</h2>',
            }
        });

        expect(wrapper.find('h2').text()).toBe('Modal Header');
        expect(wrapper.find('[data-testid="modal-footer"]').exists()).toBe(false);
        expect(wrapper.find('[data-testid="modal-body"]').exists()).toBe(false);
    });
});