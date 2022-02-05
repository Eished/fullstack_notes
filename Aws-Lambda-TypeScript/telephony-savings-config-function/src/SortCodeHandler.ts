import { saveSortCode } from './persistence'

export const writeSortCode = async (contactId: string, sortCode: string) => {

    if (sortCode.length !== 6) {
        return {
            result: 'unsuccessful'
        }
    } 

    if (!verifyBankCode(sortCode)) {
        return {
            result: 'unsuccessful'
        }
    }

    const isLoanSortCode = verifyLoanCode(sortCode.slice(4,5))
    if (isLoanSortCode) {
        return {
            result: 'unsuccessful'
        }
    }

    // write to db
    await saveSortCode(contactId, sortCode)

    return {
        result: 'successful',
        isLoanSortCode: isLoanSortCode
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