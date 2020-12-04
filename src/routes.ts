import express from 'express'

import CommonController from './controllers/common-controller'

const router = express.Router()

router.get('/ping', CommonController.ping)

export default router