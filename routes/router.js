const express=require('express')
const {register, login, getBalance, moneyTransfer, accountStatement, accountDelete} = require("../controllers/logic")
const { jwtMiddleware } = require('../middlewares/jwtMiddleware')


// router object
const router=new express.Router()

// create account - sign up
router.post('/bankuser/create_acc',register)

// login
router.post('/bankuser/login',login)

// check balance
router.get('/bankuser/balance/:acno',jwtMiddleware,getBalance)

// money transfer
router.post('/bankuser/money-transfer',jwtMiddleware,moneyTransfer)

// account statement
router.get('/bankuser/account-statement/:acno',jwtMiddleware,accountStatement)

// delete account
router.delete('/bankuser/account-delete/:acno',jwtMiddleware,accountDelete)

//export router
module.exports=router