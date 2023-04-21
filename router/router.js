const express = require('express')
const router = express.Router();
const {create,edit,deletedata,getAll} = require('../controller/userController')

router.route('/create').post(create)
router.route('/edit/:_id').put(edit)
router.route('/delete/:_id').delete(deletedata)
router.route('/getAll').get(getAll)


module.exports  = router;