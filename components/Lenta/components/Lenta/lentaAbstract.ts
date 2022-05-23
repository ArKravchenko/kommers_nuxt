import {Vue,Action, Getter, Mutation} from 'nuxt-property-decorator'

import type {IDoc} from "../../Interfaces/IDoc";
import type {IWindow} from "../../Interfaces/IWindow"


import config from '@/components/Lenta/config/config.json';

// import {list as articlesMock} from './../../testData/lentaArticlesMock';

declare let window: IWindow;

export class LentaAbstract extends Vue {
    @Getter('Lenta/getIsBusinessOnly') getIsBusinessOnly!: boolean;
    @Getter('Lenta/getIsPersonalOnly') getIsPersonalOnly!: boolean;
    @Getter('Lenta/getAuthorized') getAuthorized!: boolean;
    @Getter('Lenta/getArticlesData') getArticlesData!: { docs: any[]; docsBusiness: any[]; timestamp: string };
    @Getter('Lenta/getIsLoading') getIsLoading!: boolean;
    @Getter('Lenta/getLentaIsVertical') getLentaIsVertical!: boolean;
    @Getter('Lenta/getNewArticlesCounter') getNewArticlesCounter!: number;

    @Action('Lenta/fetchArticlesData') fetchArticlesData!: () => void;

    @Mutation('Lenta/setIsBusinessOnly') setIsBusinessOnly!: (value: boolean) => void;
    @Mutation('Lenta/setIsPersonalOnly') setIsPersonalOnly!: (value: boolean) => void;
    @Mutation('Lenta/setStartLoading') setStartLoading!: () => void;
    // TODO remove
    @Mutation('Lenta/setClearNewArticlesCounter') setClearNewArticlesCounter!: () => void;
    // TODO remove end


    protected adjustLentaHref: string = config.adjustLentaHref;
    protected lentaHref: string = config.lentaHref;
    protected docUrlPrefix: string = process.env.debug ? `${config.docUrlPrefix}/` : `/`;

    gearHandler(e: Event) {
        try {
            // alert('gear click')
            window.kommersant.sendEvent('gear', 'click');
        } catch {
            console.error(`Event gear click not sent. kommersant.sendEvent not found`);
        }
        if (this.getAuthorized) {
            return
        } else {
            e.preventDefault();
            this.createNotification()
        }
    };

    notification: any;

    createNotification() {
        if (window.kommersant && window.kommersant.Notification) {
            if (!this.notification || this.notification?.isClosed) {
                this.notification = new window.kommersant.Notification('Кто Вы? <a href="#" class="user-register">Зарегистрируйтесь</a> или <a href="#" class="user-login">войдите</a>.')
            }
        } else {
            alert('Пожалуйста авторизуйтесь.')
        }
    }

    personalLentaHandler(e: Event) {
        if(this.getAuthorized) {
            if (!this.getIsPersonalOnly){
                try {
                    // alert('my_lenta click показать свою')
                    window.kommersant.sendEvent('my_lenta', 'click');
                } catch {
                    console.error(`Event my_lenta click not sent. kommersant.sendEvent not found`);
                }
            }
        } else {
            try {
                // alert('yours_lenta click настроить свою')
                window.kommersant.sendEvent('yours_lenta', 'click');
            } catch {
                console.error(`Event yours_lenta click not sent. kommersant.sendEvent not found`);
            }
        }

        if (this.getAuthorized) {
            e.preventDefault();
            this.setIsPersonalOnly(!this.getIsPersonalOnly);
            this.setIsBusinessOnly(false);

            this.setStartLoading();
            this.fetchArticlesData();
            return
        } else {
            e.preventDefault();
            this.createNotification();
        }
    };


    sendShowEvents(){
        if (!this.getIsPersonalOnly && this.getAuthorized) {
            try {
                // alert('my_lenta show показать свою')
                window.kommersant.sendEvent('my_lenta', 'show'); // показать свою
            } catch {
                console.error(`Event my_lenta click not sent. kommersant.sendEvent not found`);
            }
        }

        if (!this.getAuthorized) {
            // alert('yours_lenta show настроить свою')
            try {
                window.kommersant.sendEvent('yours_lenta', 'show'); // настроить свою
            } catch {
                console.error(`Event yours_lenta click not sent. kommersant.sendEvent not found`);
            }
        }

        try {
            // alert('business_news show бизнес')
            window.kommersant.sendEvent('business_news', 'show');
        } catch {
            console.error(`Event business_news click not sent. kommersant.sendEvent not found`);
        }

        try {
            // alert('gear show')
            window.kommersant.sendEvent('gear', 'show');
        } catch {
            console.error(`Event gear click not sent. kommersant.sendEvent not found`);
        }
    }

    get getArticles(): IDoc[] {

        //TODO remove mock
        // let articles: any = articlesMock;
        // const docs: any[] = (this.getIsBusinessOnly ? articles.docsBusiness : articles.docs) || [];
        // const docsPersonal: any[] = []//(this.getIsBusinessOnly ? articles.docsBusiness : articles.docs) || [];
        //TODO remove mock end

        const docs =  this.getArticlesData.docs || [];
        const docsPersonal =  this.getArticlesData.docs || [];

        const uncutList = this.getIsPersonalOnly ? docsPersonal : docs;
        return this.getLentaIsVertical ? uncutList : uncutList.slice(0, 10);
    }

    async articlesDeliveredButtonHandler() {
        if (!this.getIsLoading) {

            try {
                window.kommersant.sendEvent('new_news', 'click');
            } catch {
                console.error(`Event new_news click not sent. kommersant.sendEvent not found`);
            }

            this.setStartLoading();
            await this.fetchArticlesData();
        }
        //TODO remove MOCK это делаетя в хранилище после загрузки
        //await this.setClearNewArticlesCounter();
        //TODO remove MOCK это делаетя в хранилище после загрузки end
    };

    getFormattedTime(DateDoc: number) {
        const date = new Date(DateDoc * 1000 || 0);
        return `${date.getHours()}:${String(date.getMinutes()).length == 1 ? '0' + date.getMinutes() : date.getMinutes()}`;
    }

    getFormattedDate(DateDoc: string) {
        return `${new Date(DateDoc || 0)}`;
    }

    selectBusinessOnlyHandler(e: Event & { target: HTMLInputElement & { checked: boolean } }) {
        let { checked } = e.target;

        this.setIsBusinessOnly(checked);
        // this.setStartLoading();
        this.fetchArticlesData();

        try {
            // alert('business_news click бизнес')
            window.kommersant.sendEvent('business_news', 'click');
        } catch {
            console.error(`Event business_news click not sent. kommersant.sendEvent not found`);
        }
    };
}
