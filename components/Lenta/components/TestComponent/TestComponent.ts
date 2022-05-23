import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import axios from 'axios';

@Component
export default class TestComponent extends Vue {
    testString: string = '123';
    responseAxios: string = '';
    responseFetch: string = '';
    calls = 0;

    clickHandler() {
        this.testString = this.testString.split('').reverse().join('')
    }

    async callAxios() {
        return axios.get('https://yandex.ru').then((resp: any) => {
            this.responseAxios = resp.data;
        });
    }

    async callFetch() {
        const urls = ['https://yandex.ru', 'https://facebook.com', 'https://google.com']
        const url =  urls[this.calls] || 'https://kommersant.ru'
        this.calls += 1
        return fetch(url).then(res => res.json()).then((data: any) => {
            this.responseFetch = data.data;
        });
    }
}
