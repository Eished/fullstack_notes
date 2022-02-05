import axios from 'axios'
import { savePSN, saveIdvLevel } from './persistence'

const base = ''

const api = base + '/custAuthLogon'

export type AuthDigits = {
  custAuthLogonRs: Digits
}

export type Digits = { ivrpinDigit1: string; ivrpinDigit2: string; ivrpinDigit3: string }

async function getDigits(contactId: string, sortCode: string): Promise<AuthDigits> {
  const custAuthLogonRq = {
    custAuthLogonRq: {
      bankId: contactId,
      credential: {
        acctNum: sortCode,
      },
    },
  }

  return await axios
    .post(api, { custAuthLogonRq })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}
async function validateDigits(
  contactId: string,
  sortCode: string,
  digits: Digits
): Promise<{ StatusCode: string; result: string }> {
  const custAuthLogonRq = {
    bankId: contactId,
    //  sessionKey: string,
    custNumber: sortCode,
    credential: {
      ...digits,
    },
  }

  return await axios
    .post(api, { custAuthLogonRq })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getPSN = async (contactId: string, sortCode: string) => {
  if (sortCode.length !== 6) {
    return {
      result: 'unsuccessful',
    }
  }

  if (!verifyBankCode(sortCode)) {
    return {
      result: 'unsuccessful',
    }
  }

  const isLoanSortCode = verifyLoanCode(sortCode.slice(4, 5))
  if (isLoanSortCode) {
    return {
      result: 'unsuccessful',
    }
  }

  const digits = await getDigits(contactId, sortCode)
  if (!digits) {
    return {
      result: 'unsuccessful',
    }
  }

  return {
    firstDigit: digits.custAuthLogonRs.ivrpinDigit1,
    secondDigit: digits.custAuthLogonRs.ivrpinDigit2,
    thirdDigit: digits.custAuthLogonRs.ivrpinDigit3,
    result: 'successful',
    isLoanSortCode,
  }
}

export const writePSN = async (contactId: string, sortCode: string, digits: Digits) => {
  if (sortCode.length !== 6) {
    return {
      result: 'unsuccessful',
    }
  }

  if (!verifyBankCode(sortCode)) {
    return {
      result: 'unsuccessful',
    }
  }

  const isLoanSortCode = verifyLoanCode(sortCode.slice(4, 5))
  if (isLoanSortCode) {
    return {
      result: 'unsuccessful',
    }
  }

  const result = await savePSN(contactId, digits)
  if (!result) {
    return {
      result: 'unsuccessful',
    }
  }
  return {
    result: 'successful',
    isLoanSortCode: isLoanSortCode,
  }
}

export const validatePSN = async (contactId: string, sortCode: string, digits: Digits) => {
  if (sortCode.length !== 6) {
    return {
      result: 'unsuccessful',
    }
  }

  if (!verifyBankCode(sortCode)) {
    return {
      result: 'unsuccessful',
    }
  }

  const isLoanSortCode = verifyLoanCode(sortCode.slice(4, 5))
  if (isLoanSortCode) {
    return {
      result: 'unsuccessful',
    }
  }

  const result = await validateDigits(contactId, sortCode, digits)

  if (!result) {
    return {
      result: 'unsuccessful',
    }
  }

  return {
    result: 'successful',
    isLoanSortCode: isLoanSortCode,
  }
}

export const idvResultUpdate = async (contactId: string, sortCode: string, idvLevel: string) => {
  if (sortCode.length !== 6) {
    return {
      result: 'unsuccessful',
    }
  }

  if (!verifyBankCode(sortCode)) {
    return {
      result: 'unsuccessful',
    }
  }

  const isLoanSortCode = verifyLoanCode(sortCode.slice(4, 5))
  if (isLoanSortCode) {
    return {
      result: 'unsuccessful',
    }
  }

  const result = await saveIdvLevel(contactId, idvLevel)

  if (!result) {
    return {
      result: 'unsuccessful',
    }
  }

  return {
    result: 'successful',
    isLoanSortCode: isLoanSortCode,
  }
}

export const verifyBankCode = (bankCode: string) => {
  const sainsburysBankCode = new RegExp(/1260[0-9]{2}/, 'g')
  const result = bankCode.match(sainsburysBankCode)
  if (!result || result.length === 0) {
    return false
  } else {
    return true
  }
}

export const verifyLoanCode = (code: string) => {
  const loanCode = new RegExp(/([5][45])/, 'g')
  const result = code.match(loanCode)
  if (!result || result.length === 0) {
    return false
  } else {
    return true
  }
}
