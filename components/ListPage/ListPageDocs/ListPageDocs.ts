import {Component, Prop, Vue} from 'nuxt-property-decorator'
import type {ListPageDocs as IListPageDocs} from "~/interfaces/API/MainPageApi";
import SharingList from '~/components/ListPage/ListPageDocs/SharingList/SharingList.vue'



@Component({
  components:{
    SharingList
  }
})
export default class ListPageDocs extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) listPageDocsData!: IListPageDocs.IListPageDocs | null;

  @Prop({
    type: Number,
    required: false,
    default: 0,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) from!: number;

  @Prop({
    type: Number,
    required: false,
    default: null,
    // validator(value: IActualno.APIDataStructure['data']): boolean {
    //   return !!value.rates && !!value.items
    // }
  }) toNotIncluding!: number;

  cdnUrl: string = process.env.CDN_URL || '';

  formatDate(date: Date){
    return new Date(date).toLocaleDateString('ru-ru',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute:'numeric'
      })
  }

  // TODO rest tags have no href
  // TODO main tag have wrong href
  get getDocs(){
    return this.listPageDocsData?.data?.docs?.length
      && this.listPageDocsData.data.docs.slice(this.from, this.toNotIncluding)
  }


  mounted() {
    console.log('this.listPageDocsData',this.listPageDocsData)
  }
}
