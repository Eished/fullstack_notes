const Router = require('express-promise-router')
const { body, validationResult } = require('express-validator')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { randomNum } = require('../utils/helper')

const router = Router()

router.post(
  '/custAuthRegistration',
  [
    body('customerAuthRegistrationInfoRq.bankId').notEmpty().isString(),
    body('customerAuthRegistrationInfoRq.custNumber').notEmpty().isString(),
    body('customerAuthRegistrationInfoRq.PIN').notEmpty().isString(),
  ],
  (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(400).json(new ErrorModel(8602, 'Invalid Parameter'))
    }

    return res.json(new SuccessModel('customerAuthRegistrationInfoRs'))
  }
)

router.put(
  '/custAuthCredentials',
  [
    body('customerAuthCredentialsModRq.bankId').notEmpty().isString(),
    body('customerAuthCredentialsModRq.custNumber').notEmpty().isString(),
    body('customerAuthCredentialsModRq.PIN').notEmpty().isString(),
  ],
  (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(400).json(new ErrorModel(8602, 'Invalid Parameter'))
    }

    return res.json(new SuccessModel('customerAuthCredentialsModRs'))
  }
)

router.post('/custAuthLogon', [body('custAuthLogonRq.bankId').notEmpty().isString()], (req, res) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    return res.status(400).json(new ErrorModel(8602, 'Invalid Parameter'))
  }

  if (req.body.custAuthLogonRq.custNumber) {
    const result = ['Success', 'NoFound', 'NotValidated', 'Duplicates ', 'Closed']
    const credential = req.body.custAuthLogonRq.credential

    let sum = 0
    for (let i = 1; i < 4; i++) {
      sum += parseInt(credential['ivrpinDigit' + i])
    }

    if (sum > 2 && sum < 28) {
      return res.json(new SuccessModel('custAuthLogonRs', 200, { result: result[0] }))
    } else {
      return res.status(400).json(new ErrorModel(8602, 'Invalid Parameter'))
    }
  }

  if (req.body.custAuthLogonRq.credential.acctNum) {
    const Digits = {
      ivrpinDigit1: randomNum(1, 6).toString(),
      ivrpinDigit2: randomNum(1, 6).toString(),
      ivrpinDigit3: randomNum(1, 6).toString(),
    }

    return res.json(new SuccessModel('custAuthLogonRs', 200, Digits))
  } else {
    return res.status(400).json(new ErrorModel(8602, 'Invalid Parameter'))
  }
})

module.exports = router
