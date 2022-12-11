import * as process from 'process';

import { APIGatewayProxyEvent, Context } from 'aws-lambda';
/*
 * To use AWS service install given service with
 * `npm i @aws-sdk/<name of package>` and import it here with
 * `import {} from '@aws-sdk/<name of package>'`.
 */

/*
 * This is short check about source maps loading in Lambda. Lambda function has to be
 * configured with environment variable `NODE_MODULES="--enable-source-maps"`,
 * to load source maps, and print correct stack traces in case of Error.
 */
if (!process.env.NODE_OPTIONS?.includes('--enable-source-maps')) {
  console.warn(
    'No --enable-source-maps in NODE_OPTIONS env variable. Stack traces will not work correctly.'
  );
}

/*
 * Insert rest of function static initialization here, things like
 *  - loading KMS keys
 *  - setting up clients
 * will be shared among executions of handler.
 */

/**
 * Handler for Lambda invocation. Handler is called by Lambda runtime
 * and processes single event received from the runtime.
 */
export const handler = async (event: APIGatewayProxyEvent, _ctx: Context) => {
  // This function uses APIGatewayProxyEvent as sample event type.
  // Change it to any other event type triggering Lambda.

  console.log('Received Event', event);
};
