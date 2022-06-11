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

router.get('/test-err', (req, res) => {
  const code = parseInt(req.query.code)
  console.log(code)
  switch (true) {
    case code === 401:
      return res.status(401).json({ err: '401' })
    case code === 404:
      return res.status(404).json({ err: '404' })
    case code === 403:
      return res.status(403).json({ err: '403' })
    case code === 500:
      return res.status(500).json({ err: '500' })
    case code === 501:
      return res.status(501).json({ err: '501' })
    case code === 502:
      return res.status(502).json({ err: '502' })
    case code === 503:
      throw new Error('Error: Test 503')

    default:
      res.status(400).end('Wrong pramaters!')
      break
  }
})

module.exports = router
