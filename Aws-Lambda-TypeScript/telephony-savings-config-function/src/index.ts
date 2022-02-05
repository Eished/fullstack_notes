import { writeSortCode } from './SortCodeHandler';
import { Digits, getPSN, writePSN, validatePSN, idvResultUpdate } from './PSNHandler';

export const handler = async (event: any) => {
  try {
    if (!event.Details) throw new Error('Malformat event object');

    const contactId = event?.Details?.ContactData?.ContactId;
    const { method, sortCode, ivrpinDigit1, ivrpinDigit2, ivrpinDigit3, idvLevel } = event?.Details?.Parameters;

    const digits: Digits = {
      ivrpinDigit1,
      ivrpinDigit2,
      ivrpinDigit3,
    };

    const result = await dispatch(method, contactId, sortCode, digits, idvLevel);
    return result;
  } catch (error: unknown) {
    return {
      statusCode: 400,
      result: error instanceof Error ? error.message : 'Failed in savings handler',
    };
  }
};

const dispatch = async (method: string, contactId: string, sortCode: string, digits: Digits, idvLevel: string) => {
  // once more fields is determined, change it to a type
  if (method === 'preWarm')
    return {
      statusCode: 200,
      result: 'successful',
    };

  if (method === 'writeSortCode') {
    if (!contactId) throw new Error('Event property `contactId` is required');
    if (!sortCode) throw new Error('Event property `sortCode` is required');
    const result = await writeSortCode(contactId, sortCode);
    return {
      statusCode: 200,
      result: result.result,
      isLoanSortCode: result.isLoanSortCode,
    };
  }

  if (method === 'getPSN') {
    if (!contactId) throw new Error('Event property `contactId` is required');
    if (!sortCode) throw new Error('Event property `sortCode` is required');

    const result = await getPSN(contactId, sortCode);
    return {
      statusCode: 200,
      ...result,
    };
  }

  if (method === 'writePSN') {
    if (!contactId) throw new Error('Event property `contactId` is required');
    if (!sortCode) throw new Error('Event property `sortCode` is required');
    Object.values(digits).forEach(ivrpinDigit => {
      if (!ivrpinDigit) throw new Error('Event property `ivrpinDigit` is required');
    });

    const result = await writePSN(contactId, sortCode, digits);
    return {
      statusCode: 200,
      result: result.result,
      isLoanSortCode: result.isLoanSortCode,
    };
  }

  if (method === 'validatePSN') {
    if (!contactId) throw new Error('Event property `contactId` is required');
    if (!sortCode) throw new Error('Event property `sortCode` is required');
    Object.values(digits).forEach(ivrpinDigit => {
      if (!ivrpinDigit) throw new Error('Event property `ivrpinDigit` is required');
    });

    const result = await validatePSN(contactId, sortCode, digits);

    return {
      statusCode: 200,
      result: result.result,
      isLoanSortCode: result.isLoanSortCode,
    };
  }

  if (method === 'idvResultUpdate') {
    if (!contactId) throw new Error('Event property `contactId` is required');
    if (!sortCode) throw new Error('Event property `sortCode` is required');
    if (!idvLevel) throw new Error('Event property `idvLevel` is required');

    const result = await idvResultUpdate(contactId, sortCode, idvLevel);

    return {
      statusCode: 200,
      result: result.result,
      isLoanSortCode: result.isLoanSortCode,
    };
  }

  throw new Error('Method not supported');
};
