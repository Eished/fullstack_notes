# telephony-savings-config-function

> Note: This is a temporary repository for R2c, it will migrate to Sainsburysbank's BitBucket when the LLD is approved.

This repository supports the Saving and Loan.

It is deployed as a single Lambda function and provides multiple functions by specifiying different `method` in the event payload.

Methods supported

- preWarm
- writeSortCode

It is designed to be consumed by Amazon Contact Flow.

## Local development

### Install dependencies

Run `yarn` or `npm install` in the project root.

### Unit Test

Run `npx jest` to execute unit test.

### Build and deploy

> Pre-requisite: Install esbuild as a glabal package in your machine

1. Run `yarn build` or `npm run build` to transpile and package a archive for uploading to AWS Lambda.

2. A file called `archive.zip` is generated in the project root.

3. Upload this file to the Lambda function in the Sainsburysbank's AWS DEV environment.

### Branching strategy

Merge strategy is applied

branches:

- `main` branch keep tract the lastest commit for build/deploy to Sainsburysbank AWS DEV environment.
- `dev` branch contains commits/pull through pull request. It is integrated and well-tested.
- `feature` branch is for local development. Use create branch name in a format `feature/{JIRA_TICKET_NUMBER_OR_DESCRIPTION_OF_FEATURE}`

`docker-compose up`

```bash
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
aws --version
sam --version
aws configure 
aws dynamodb list-tables --endpoint-url http://localhost:8000
aws dynamodb delete-table --table-name Movies
```