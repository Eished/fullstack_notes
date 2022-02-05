import { handler } from './index'
import * as persistence from './persistence'

describe('Handler', () => {
    describe('PreWarm', () => {
        const mockPreWarmEvent = {
            'Details': {
                'ContactData': {
                },
                'Parameters': {
                    'method': 'preWarm'
                }
            },
            'Name': 'ContactFlowEvent'
        }

        test('Succeed to call `preWarm`', async () => {
            const actual = await handler(mockPreWarmEvent)
            expect(actual).toHaveProperty('statusCode', 200)
            expect(actual).toHaveProperty('result', 'successful')
        })

    })

    describe('writeSortCode', () => {
        test('Return successful if Sort Code starts with 1260 and the 4th and 5th digits is not a loan code', async () => {

            const mockWriteSortCodeEvent = {            
                'Details': {
                    'ContactData': {
                        'Attributes': {},
                        'Channel': 'VOICE',
                        'ContactId': '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
                        'CustomerEndpoint': {
                            'Address': '+1234567890',
                            'Type': 'TELEPHONE_NUMBER'
                        },
                        'InitialContactId': '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
                        'InitiationMethod': 'INBOUND | OUTBOUND | TRANSFER | CALLBACK',
                        'InstanceARN': 'arn:aws:connect:aws-region:1234567890:instance/c8c0e68d-2200-4265-82c0-XXXXXXXXXX',
                        'PreviousContactId': '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
                        'Queue': {
                            'ARN': 'arn:aws:connect:eu-west-2:111111111111:instance/cccccccc-bbbb-dddd-eeee-ffffffffffff/queue/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
                            'Name': 'PasswordReset'
                        },
                        'SystemEndpoint': {
                            'Address': '+1234567890',
                            'Type': 'TELEPHONE_NUMBER'
                        }
                    },
                    'Parameters': {
                        'method': 'writeSortCode',
                        'sortCode': '126088'
                    }
                },
                'Name': 'ContactFlowEvent'
            }

            const mockSaveSortCode = jest.spyOn(persistence, 'saveSortCode')
            mockSaveSortCode.mockResolvedValue()

            const actual = await handler(mockWriteSortCodeEvent)
            console.log('actual', actual)
            expect(actual).toHaveProperty('statusCode', 200)
            expect(actual).toHaveProperty('result', 'successful')
            expect(actual).toHaveProperty('isLoanSortCode', false)
        })
        
        test('Return unsuccessful if Sort Code starts with 1260 and  the 4th and 5th digits is a loan code', () => {
            const mockWriteSortCodeEventWithLoanCode = {            
                'Details': {
                    'ContactData': {
                        'Attributes': {},
                        'Channel': 'VOICE',
                        'ContactId': '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
                        'CustomerEndpoint': {
                            'Address': '+1234567890',
                            'Type': 'TELEPHONE_NUMBER'
                        },
                        'InitialContactId': '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
                        'InitiationMethod': 'INBOUND | OUTBOUND | TRANSFER | CALLBACK',
                        'InstanceARN': 'arn:aws:connect:aws-region:1234567890:instance/c8c0e68d-2200-4265-82c0-XXXXXXXXXX',
                        'PreviousContactId': '4a573372-1f28-4e26-b97b-XXXXXXXXXXX',
                        'Queue': {
                            'ARN': 'arn:aws:connect:eu-west-2:111111111111:instance/cccccccc-bbbb-dddd-eeee-ffffffffffff/queue/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
                            'Name': 'PasswordReset'
                        },
                        'SystemEndpoint': {
                            'Address': '+1234567890',
                            'Type': 'TELEPHONE_NUMBER'
                        }
                    },
                    'Parameters': {
                        'method': 'writeSortCode',
                        'sortCode': '126088'
                    }
                },
                'Name': 'ContactFlowEvent'
            }
        })

    })

    const mockRandomMethod = {
        'Details': {
            'ContactData': {
            },
            'Parameters': {
                'method': 'RANDOM_METHOD'
            }
        },
        'Name': 'ContactFlowEvent'
    }

    test('Throw exception if the method is not supported', async () => {
        const actual = await handler(mockRandomMethod)
        expect(actual).toHaveProperty('statusCode', 400)
        expect(actual).toHaveProperty('result', 'Method not supported')
    })

    const mockMalformatEvent = {
        'Name': 'ContactFlowEvent'
    }

    test('Throw exception if the event object does not contains Details', async () => {
        const actual = await handler(mockMalformatEvent)
        expect(actual).toHaveProperty('statusCode', 400)
        expect(actual).toHaveProperty('result', 'Malformat event object')
    })

})