import {Component, Vue, Prop} from 'nuxt-property-decorator'

@Component({})
export default class SpaLink extends Vue {
    @Prop() private href!: string;

    private get isSpa() {
        return process.env.NUXT_SPA === 'true'
    }
}