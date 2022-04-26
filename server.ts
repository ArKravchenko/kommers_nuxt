// @ts-ignore
import {loadNuxt, build} from 'nuxt';
import connect from 'connect'
import http from 'http';
// import compression from 'compression'

import dotenv from 'dotenv'
dotenv.config();

console.log('\n\n\n\n\nenvironment:  ' + process.env.NODE_ENV,'\n\n\n\n\n');

let nuxt: any;
if (process.env.NODE_ENV === 'production') {
  nuxt = await loadNuxt('start');
} else {
  nuxt = await loadNuxt('dev');
  build(nuxt);
}

let app = connect();

// app.use(compression());

app.use(function (req, res) {
  nuxt.render(req, res);
});

http.createServer(app).listen(process.env.PORT || '3000', () => {
  console.log(`Is listening on port ${process.env.PORT || '3000'}`)
});


