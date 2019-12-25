import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// testing with enzyme, not react-scripts default thing
// that renders the entire DOM and made the test fail w/o much reason

configure({ adapter: new Adapter() });
