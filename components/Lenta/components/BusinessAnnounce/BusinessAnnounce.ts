import {Vue, Watch, Component} from 'nuxt-property-decorator'
import {IWindow} from "../../Interfaces/IWindow";

declare let window: IWindow

@Component
export default class BusinessAnnounce extends Vue {

    banner: string | null = '';

    @Watch('banner')
    runBanner() {
        const banner = this.$refs.banner;
        const fakeElement = document.createElement('div');
        fakeElement.innerHTML = this.banner || '';
        try {
            const targetId = (fakeElement as HTMLElement).querySelector('[id*="adfox"]')?.id;
            document.querySelectorAll(`#${targetId}`).forEach((elem) => elem.removeAttribute('id'));
        } catch (e) {
            console.error(e)
        }


        let scripts = (fakeElement as Element).querySelectorAll('script');
        let scriptsContent = Array.from(scripts).map(elem => elem.innerText);
        Array.from(scripts).forEach(elem => elem.remove());

        (banner as HTMLElement).innerHTML = fakeElement.innerHTML;

        try {
            scriptsContent.forEach(content => {
                const execScr = document.createElement('script');
                execScr.innerHTML = content;
                (banner as Element).appendChild(execScr);
            });
        } catch (e) {
            console.error(e)
        }
    }

    //  escapeHTML(html:string) {
    //     let escape = document.createElement('textarea');
    //     escape.textContent = html;
    //     return escape.innerHTML;
    // }
    //
     unescapeHTML(html:string) {
        let escape = document.createElement('textarea');
        escape.innerHTML = html;
        return escape.textContent;
    }

    created() {
        // this.banner = this.unescapeHTML(this.unescapeHTML((window as  window).kommersant?.backend?.lentaBanners?.businessAnnounce)) ?? '';
        this.banner = this.unescapeHTML(window.__storage__?.lentaBanners?.businessAnnounce ?? '' );

        // console.log((window as  window));
        // console.log((window as  window).kommersant);
        // console.log((window as  window).kommersant?.backend);
        // console.log((window as  window).kommersant?.backend?.lentaBanners);
        // console.log((window as  window).kommersant?.backend?.lentaBanners?.businessAnnounce );
        //
        // console.log('__storage__ ',(window as  window).__storage__);

    }
}
