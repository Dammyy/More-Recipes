import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.toastr = {
  success: jest.fn(),
  error: jest.fn()
};

Enzyme.configure({ adapter: new Adapter() });
