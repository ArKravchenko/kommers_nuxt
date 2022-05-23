import {Vue, Component, Prop} from 'vue-property-decorator'
import {IWindow} from "../../Interfaces/IWindow";
import config from '@/components/Lenta/config/config.json';

declare let window: IWindow
type ICommercialAnnounce = {
    Title: string | null,
    Subtitle: string | null,
    Link: string | null,
    Category: string | null,
    DocId: number | null,
    IsSelfLink: boolean,
}

@Component
export default class CommercialAnnounce extends Vue {
    @Prop(Number) readonly order!: number;

    protected docUrlPrefix: string = process.env.debug ? `${config.docUrlPrefix}/` : `/doc/`;
    hide: boolean = false;
    tag!: string;
    title!: string;
    subtitle!: string;
    href!: string;
    isSelfLink: boolean = false;

    get getLinkTarget(){
        return this.isSelfLink ? '_self' : '_blank'
    }

    created() {
        const commercialAnnouncesList: ICommercialAnnounce[] = window.__storage__?.lentaBanners?.twoAnnounces || [];

        if (this.order <= commercialAnnouncesList.length ) {
            const elem = commercialAnnouncesList[this.order];
            if (!elem){
                this.hide = true
                return
            }

            this.title = elem.Title || '';
            this.subtitle = elem.Subtitle || '';
            this.href = elem.Link || `${this.docUrlPrefix}${elem.DocId}`;
            this.tag = elem.Category || 'На правах рекламы';
            this.isSelfLink = !!elem.IsSelfLink;
        }
    }
}
