import fs from 'fs'

let timeout;

const handler = () => {
  // const len = 26,
  //   buff = Buffer.alloc(len),
  //   pos = 0,
  //   offset = 0;

  // fs.open('./logs.csv', 'r', (err, fd) => {
  //   if (err) throw err;
  //
  //   fs.read(fd, buff, offset, len, pos,
  //     (err, bytes, buff) => {
  //       let newFile = buff.toString().split('\n').slice(1)
  //
  //       newFile = newFile.map(el => el.split(', ')).flat().filter(el => el.includes('doc')).map(el => el.slice(5))
  //
  //       console.log(buff.toString())
  //       console.log(Array.from(new Set(newFile)).length);
  //       fs.close(fd, (err) => {
  //         if (err) throw err;
  //       });
  //     });
  // });
  fs.promises.readFile('./logs.csv', { encoding: 'utf-8' }).then(file=>{
    let newFile = file.split('\n').slice(1)

    newFile = newFile.map(el => el.split(', ')).flat().filter(el => el.includes('doc')).map(el => el.slice(5))

    console.log(Array.from(new Set(newFile)).length);
    if(timeout){
      clearTimeout(timeout);
      timeout = setTimeout(handler,2000)
    }
  })

}

timeout = setTimeout(handler, 2000)

// const file1 = fs.readFileSync('1000-space_copy.txt',{encoding:'utf-8'})
// let newFile1 = file1.split(' ')
//
// newFile1 = newFile1.filter(el=>el.includes( 'localhost/'))//.map(el=>el.slice(36))
//
// console.log(Array.from(new Set(n
