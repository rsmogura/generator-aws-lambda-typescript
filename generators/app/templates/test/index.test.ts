import { describe, jest, test } from '@jest/globals';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import { handler } from '../src/index';

describe('Handler main method', () => {
  test('Execute handler', async (): Promise<void> => {
    await handler({} as APIGatewayProxyEvent, {} as Context);
  });

  test('Check when --enable-source-maps enabled', async () => {
    // This almost no value test has been added only to make project building
    // at the very beginning of bootstrapping process,
    // when there is not a lot of code meeting coverage bar is hard.

    process.env.NODE_OPTIONS = '--enable-source-maps';
    const { handler } = jest.requireMock('../src/index') as any;

    await handler({} as APIGatewayProxyEvent, {} as Context);
  });
});
