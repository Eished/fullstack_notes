const AWS = require('aws-sdk');
import { Digits } from './PSNHandler';

AWS.config.update({
  region: 'eu-west-1',
  endpoint: 'http://localhost:8000',
});

const dynamodb = new AWS.DynamoDB();

type SortCodeDocumentType = {
  TableName: string;
  Item: {
    ContactId: {
      S: string;
    };
    SortCode: {
      S: string;
    };
  };
};

export const saveSortCode = async (contactId: string, sortCode: string) => {
  const sortCodeDocument = {
    TableName: 'dev-sb-telephony-savings-ivr-table',
    Item: {
      ContactId: { S: contactId },
      SortCode: { S: sortCode },
    },
  };
  const result = await createItem(sortCodeDocument);
};

export const createItem = async (item: SortCodeDocumentType) => {
  return new Promise((resolve, reject) => {
    dynamodb.putItem(item, (err: unknown, data: any) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

type PSNDocumentType = {
  TableName: string;
  Item: {
    ContactId: {
      S: string;
    };
    Attributes: {
      firstDigit: { S: string };
      secondDigit: { S: string };
      thirdDigit: { S: string };
    };
  };
};

export const savePSN = async (contactId: string, PSN: Digits): Promise<any> => {
  const PSNDocument = {
    TableName: 'dev-sb-telephony-savings-ivr-table',
    Item: {
      ContactId: { S: contactId },
      Attributes: {
        firstDigit: { S: PSN.ivrpinDigit1 },
        secondDigit: { S: PSN.ivrpinDigit2 },
        thirdDigit: { S: PSN.ivrpinDigit3 },
      },
    },
  };
  return await createPSNItem(PSNDocument).catch(err => {
    console.log(err);
  });
};

export const createPSNItem = async (item: PSNDocumentType) => {
  return new Promise((resolve, reject) => {
    dynamodb.putItem(item, (err: unknown, data: any) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

type IdvLevelDocumentType = {
  TableName: string;
  Item: {
    ContactId: {
      S: string;
    };
    Attributes: {
      idvLevel: string;
    };
  };
};

export const saveIdvLevel = async (contactId: string, idvLevel: string): Promise<any> => {
  const PSNDocument = {
    TableName: 'dev-sb-telephony-savings-ivr-table',
    Item: {
      ContactId: { S: contactId },
      Attributes: {
        idvLevel,
      },
    },
  };
  return await createIdvLevelItem(PSNDocument).catch(err => {
    console.log(err);
  });
};

export const createIdvLevelItem = async (item: IdvLevelDocumentType) => {
  return new Promise((resolve, reject) => {
    dynamodb.putItem(item, (err: unknown, data: any) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};
