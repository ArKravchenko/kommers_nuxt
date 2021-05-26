import { Component, Vue } from 'nuxt-property-decorator'
import SpaLink from '~/components/SpaLink/SpaLink.vue'


@Component({
    components:{
        SpaLink
    }
})
export default class SuperAnnounce extends Vue {}
