import { jsdom } from 'jsdom';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

chai.use(sinonChai);
chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
