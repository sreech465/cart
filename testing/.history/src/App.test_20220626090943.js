import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-18';
import App from './App'

Enzyme.configure({ adapter: new Adapter() }); 

test('check h2 element',()=>{
  const wrapper = shallow(<App/>);
  expect(wrapper.find('h2').text()).toContain('Learn ReactJs')
})