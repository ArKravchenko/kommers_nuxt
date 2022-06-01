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
## Swagger URL:
[Swagger](https://srdkprot.kommersant.ru/swagger/index.html#/)

##API URL: 
[main_page/Endpoint_1](https://srdkprot.kommersant.ru/api/main_page/Endpoint_1)

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


##Available ListPages
```
Id           Title
1             Промышленность
4             Радио «Ъ FM»
5             Лента новостей
10          Культура
14          Сибирь
15          Урал
16          Weekend
17          Авто
18          Черноземье
19          Удмуртия
20          Волга-Урал
21          Кубань-Черноморье
22          Приволжье
23          Прикамье
24          Юг России
25          Волга
26          Санкт-Петербург
27          Средняя Волга
28          Башкортостан
29          Южный Урал
30          Ярославль
32          Центральная Сибирь
33          Наука
34          Пандемия коронавируса
35          Талибы в Афганистане
36          Единый день голосования–2021
37          Автопилот
38          Коммерсантъ Стиль
39          Авария на шахте в Кузбассе
40          Новости и аналитика о беспорядках в Казахстане
41          Зимняя Олимпиада в Пекине-2022
42          ESG
45          Регенерация
```

## run server.ts with node
node --loader ts-node/esm server.ts


```js
// I've figured it out.

// I've created new Header component:

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
```

## nuxt-multi-cache
[nuxt-multi-cache](https://nuxt-multi-cache.netlify.app/caches/data)

https://blog.vuestorefront.io/vue-and-nuxt-performance-optimization-checklist/


siege -f 1000-space.txt --no-parser -t 50s -v -b -c 10  -d 0


/usr/local/var/www
/usr/local/etc/nginx
