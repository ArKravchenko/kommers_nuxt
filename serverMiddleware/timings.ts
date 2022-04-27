import type {NextFunction, IncomingMessage} from 'connect'
import type http from "http";

export default function (req: IncomingMessage, res: http.ServerResponse , next: NextFunction) {
  // req is the Node.js http request object
  // console.log(req.url)

  res.timings = {...res.timings,...{
    browserToSsrReceived: Date.now()
  }}


  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}
