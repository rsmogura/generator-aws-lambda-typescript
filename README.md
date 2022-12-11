# Yeoman AWS Lambda TypeScript generator

It's a generator to create skeleton code for creating size-optimized,
production grade AWS Lambda packages.

## Benefits
* Reduces size of Lambda by using WebPack and tree shaking
* Lambda code in TypeScript
* Configured Jest for testing
* CI/CD `package:prod` NPM command to make full CI/CD build

## Quick start
Install generator globally
```
npm i -g generator-aws-lambda-typescript
```
(For NIX environments prefix with `sudo`).

Create a new folder for project and `cd` into it.
Call
```
yo aws-lambda-typescript
```

## Customizations
When creating lambda it may be required to interact with other AWS services
by using `aws-sdk`. Install required packages using `npm i @aws-sdk/package-name`.

When building, this packages will not be put in final JS file, as are all provided by
runtime (further reduction of output size).

For testing most probably interesting will be Jest documentation how to mock system modules
(AWS SDK), so code can be tested without calling real services.
