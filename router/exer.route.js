const express = require('express')
const exRouter = express.Router();

const {create,edit,deletedata,getAll} = require('../controller/exerciseController');


exRouter.route('/create').post(create)
exRouter.route('/edit/:_id').put(edit)
exRouter.route('/delete/:_id').delete(deletedata)
exRouter.route('/getAll').get(getAll)


module.exports  = exRouter;