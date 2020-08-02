import sinon from 'sinon';
import chai from 'chai';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

sinon.assert.expose(chai.assert, {prefix: ''});

configure({adapter: new Adapter()});

process.on('unhandledRejection', reason => {
  throw reason;
});

console.error = err => { throw new Error(err); };           // eslint-disable-line no-console
console.warn = warning => { throw new Error(warning); };    // eslint-disable-line no-console
