// Import the mount() method from the test utils
// and the component you want to test
import {mount, Wrapper} from '@vue/test-utils'
import TestComponent from './TestComponent'
const chalk = require('chalk')

// axios mock
// @ts-ignore
import axios from 'axios';
jest.mock('axios');

//fetch mock
// @ts-ignore
let fetchMock = jest.fn();
let callsCounter = 0
fetchMock.mockResolvedValueOnce({
        json: () => {
            return Promise.resolve({
                data: `fetch mock response ${callsCounter}, fetch called with ${fetchMock.mock.calls[callsCounter][0]} argument`,
            })
        }
    }
).mockResolvedValueOnce({
        json: () => {
            callsCounter += 1;
            return Promise.resolve({
                data: `fetch mock response ${callsCounter}, fetch called with ${fetchMock.mock.calls[callsCounter][0]} argument`,
            })
        }
    }
).mockResolvedValue({
        json: () => {
            callsCounter += 1;
            return Promise.resolve({
                data: `fetch mock all other responses, fetch called with ${fetchMock.mock.calls[callsCounter][0]} argument`,
            })
        }
    }
);

global.fetch = fetchMock


describe('Loading', () => {
    // Now mount the component and you have the wrapper
    const wrapper: Wrapper<TestComponent> = mount(TestComponent)

    it('Renders the correct markup', () => {
        expect(wrapper.html()).toContain('Loading')
    })

    // it's also easy to check for the existence of elements
    it('Has a span', () => {
        expect(wrapper.find('span').exists()).toBe(true)
    })

    it('Has correct data', () => {
        expect(wrapper.vm.testString).toBe('123')
    })

    it('Data is changed on click', () => {
        const newData = wrapper.vm.testString.split('').reverse().join('')
        wrapper.trigger('click')
        expect(wrapper.vm.testString).toBe(newData)
    })

    it('Data is changed on second click', () => {
        const newData = wrapper.vm.testString.split('').reverse().join('')
        wrapper.trigger('click')
        expect(wrapper.vm.testString).toBe(newData)
    })

    it('Component is not visible', () => {
        expect(wrapper.isVisible()).toBe(false)
    })

    it('Received axios data is set to responseAxios', async () => {
        const string = require('chalk').blue('Axios mock response');
        const resp = {data: string};
        // @ts-ignore
        axios.get.mockResolvedValue(resp);

        await wrapper.vm.callAxios();

        console.log(
            require('chalk').green('wrapper.vm.responseAxios :'),
            wrapper.vm.responseAxios
        );
    })

    it('Received fetch data is set to responseFetch', async () => {
        let res = await wrapper.vm.callFetch();
        console.log(
            require('chalk').green('wrapper.vm.responseFetch call 0:'),
            wrapper.vm.responseFetch
        );
        await wrapper.vm.callFetch();
        console.log(
            require('chalk').green('wrapper.vm.responseFetch call 1:'),
            wrapper.vm.responseFetch
        );

        await wrapper.vm.callFetch();
        console.log(
            require('chalk').green('wrapper.vm.responseFetch call 2:'),
            wrapper.vm.responseFetch
        );
        await wrapper.vm.callFetch();
        console.log(
            require('chalk').green('wrapper.vm.responseFetch call 3:'),
            wrapper.vm.responseFetch
        );
        await wrapper.vm.callFetch();
        console.log(
            require('chalk').green('wrapper.vm.responseFetch call 4:'),
            wrapper.vm.responseFetch
        );
    })

    // it("has the expected html structure", () => {
    //     expect(wrapper.vm.$el).toMatchSnapshot();
    // });
})