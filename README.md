# kommersant_new

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
API URL: https://srdkprot.kommersant.ru/api/main_page/Endpoint_1

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



I've figured it out.

I've created new Header component:

export default {
render(createElement: CreateElement) {
if (process.server) {
const fs = process.server ? require('fs') : null;
const file = fs.readFileSync('./header.txt', 'utf8');
return createElement('div', { domProps: { innerHTML: f } });
}
return createElement('div', { domProps: { innerHTML: this.$el.innerHTML } });
},
}
And I use it instead v-html in main component:

<Header />
<div class="container">
    <Nuxt />
</div> 
