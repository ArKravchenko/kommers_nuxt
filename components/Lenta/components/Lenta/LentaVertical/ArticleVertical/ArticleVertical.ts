import {Vue, Component, Prop} from 'nuxt-property-decorator'


@Component
export default class ArticleVertical extends Vue {
    @Prop(String) readonly date!: string;
    @Prop(String) readonly time!: string;
    @Prop(String) readonly tag!: string;
    @Prop(String) readonly title!: string;
    @Prop(String) readonly subtitle!: string;
    @Prop(String) readonly href!: string;
    @Prop(Boolean) readonly placeholder!: boolean;

}
