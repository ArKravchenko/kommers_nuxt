import {Vue, Component} from 'nuxt-property-decorator'
import Lenta from './components/Lenta/Lenta.vue';


@Component({
    components:{
        Lenta,
    }
})
export default class App extends Vue {}
