import { writeSortCode, verifyBankCode, verifyLoanCode } from './SortCodeHandler'

describe('SortCodeHandler', () => {
    describe('The input is 6 digits', ()=> {

        test('The input is 4 digits', async () => {
            const actual = await writeSortCode('A_CONTACT_ID', '1260')
            expect(actual).toHaveProperty('result', 'unsuccessful')
        })

    })

    describe('Verify bank code', () => {
        test('return true if bank code is 126083', () => {
            const actual = verifyBankCode('126083')
            expect(actual).toBe(true)
        })

        test ('return false if bank code is 1260', () => {
            const actual = verifyBankCode('1260')
            expect(actual).toBe(false)
        })

        test('return false if bank code is 999911', () => {
            const actual = verifyBankCode('999911')
            expect(actual).toBe(false)
        })
    })

    describe('Verify loan code', () => {
        test('return true if the code is 54', () => {
            const actual = verifyLoanCode('54')
            expect(actual).toBe(true)
        })

        test('return true if the code is 55', () => {
            const actual = verifyLoanCode('55')
            expect(actual).toBe(true)
        })

        test('return false if the code is 45', () => {
            const actual = verifyLoanCode('45')
            expect(actual).toBe(false)
        })

        test('return false if the code is 44', () => {
            const actual = verifyLoanCode('44')
            expect(actual).toBe(false)
        })

        test('return false if the code is empty', () => {
            const actual = verifyLoanCode('')
            expect(actual).toBe(false)
        })
    })
})