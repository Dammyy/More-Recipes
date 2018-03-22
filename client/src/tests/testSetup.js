import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.toastr = {
  success: jest.fn(),
  error: jest.fn()
};

global.swal = jest.fn(() => Promise.resolve({ true: true }));
global.Headers = jest.fn();
global.filepicker = { pick: jest.fn() };
Enzyme.configure({ adapter: new Adapter() });
