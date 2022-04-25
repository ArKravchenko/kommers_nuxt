import type {NextFunction, IncomingMessage} from 'connect'
import type http from "http";

export default function (req: IncomingMessage, res: http.ServerResponse , next: NextFunction) {
  // res.setHeader('Cache-Control', 'max-age=1000, stale-while-revalidate');
  next()
}
