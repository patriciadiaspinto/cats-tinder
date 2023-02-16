import {render} from '@testing-library/react-native';
import Card from './Card';

const data = {
  id: 'test 1',
  url: '',
  width: 300,
  height: 600,
  breeds: [{name: 'test', life_span: '15-16', origin: 'Portugal'}],
  favorite: {},
};

describe('Card component', () => {
  it('should render Card name, life span and origin', async () => {
    const {getByTestId} = render(<Card data={data} />);

    expect(getByTestId('container')).toBeDefined;
    expect(getByTestId('name').props.children).toBe(data.breeds[0].name);
    expect(getByTestId('life_span').props.children).toBe(
      data.breeds[0].life_span,
    );
    expect(getByTestId('origin').props.children).toBe(data.breeds[0].origin);
  });

  it('should render Card', async () => {
    const tree = render(<Card data={data} />);

    expect(tree).toMatchSnapshot();
  });
});
