import fs from 'fs'
import autocannon from 'autocannon'


const instance = autocannon({
  workers: 4,
  duration: 1000,
  connections: 20,
  pipelining: 50,
  // amount: 1000,
  idReplacement: true,
  url:'localhost:3333',//'https://prototype.kommersant.ru',
  requests: fs.readFileSync('1000-space.txt',{encoding:'utf-8'}).split('\n').map(el=>{

    // console.log(el.slice(31))
    return {
      path: el.slice(31),
      headers:{
        id: '[<id>]'
      }
      // setupRequest:(req,context)=>{
      // req.setHeader('Content-Type', 'application/json');
      //   return {}
      // }
    }
  })
})

// this is used to kill the instance on CTRL-C
process.once('SIGINT', () => {
  instance.stop()
})

// just render results
autocannon.track(instance, {outputStream:process.stdout,renderProgressBar: true, renderLatencyTable: true, progressBarString:'running [:bar] :percent'})




// console.log(
//   fs.readFileSync('1000-space.txt',{encoding:'utf-8'}).split('\n').map(el=>{return {path: el}})
// )




