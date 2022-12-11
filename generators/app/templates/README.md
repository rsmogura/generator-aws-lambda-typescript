# Working with project

## Local development
Most probably lambda is exported as handler, which can't be just run from Node.
However if you plan to run it locally you can try calling handler from
custom JS file, and building single handler with
```
npm run watch
```
Each time the source file gets changed output lambda JS file is rebuilt quite fast.

## Testing
To run all tests
```
npm run test
```

To start tests in watch mode
```
jest --watchAll
```
(Need to install jest command in PATH)

Potentially interesting can be Jest documentation how to mock system modules
(AWS SDK), so code can be tested without calling real services.

## Production build
To build & package project into single ZIP file, which can be deployed
to Lambda run
```
npm run package:prod
```
This will run all linters, tests, and if all checks passes build
ZIP file in `dist/` folder.

## Customizations
When creating lambda it may be required to interact with other AWS services
by using `aws-sdk`. Install required packages using `npm i @aws-sdk/package-name`.

When building, this packages will not be put in final JS file, as are all provided by
runtime (further reduction of output size).
