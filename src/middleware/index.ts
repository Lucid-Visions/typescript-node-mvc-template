import { Express } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import routes from '../routes'

function ApplyMiddleware(app: Express): Express {
  return app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(morgan('tiny'))
    .use('/api', routes)
}

export default ApplyMiddleware