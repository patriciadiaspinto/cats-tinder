import {render} from '@testing-library/react-native';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should render Navbar', async () => {
    const {getByTestId} = render(<Navbar />);

    expect(getByTestId('navbar-container')).toBeDefined;

    const tree = render(<Navbar />);

    expect(tree).toMatchSnapshot();
  });
});
