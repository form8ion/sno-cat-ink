import React from 'react';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as ink from '../thirdparty-wrappers/ink';
import App from './components/app';
import groom from './groom';

suite('groom', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(ink, 'default');
    sandbox.stub(React, 'createElement');
  });

  teardown(() => sandbox.restore());

  test('that the interactive UI for grooming notifications is rendered', async () => {
    const appComponent = any.simpleObject();
    React.createElement.withArgs(App).returns(appComponent);

    await groom();

    assert.calledWith(ink.default, appComponent);
  });
});
