import {act, fireEvent, render} from '@testing-library/react-native';
import ButtonIcon from './ButtonIcon';

describe('Button Icon Component', () => {
  const defaultProps = {
    id: 'button-icon',
    onPress: jest.fn(),
  };

  it(' should render Button Icon', () => {
    const {getByTestId} = render(
      <ButtonIcon id={defaultProps.id} onPress={defaultProps.onPress} />,
    );

    expect(getByTestId('button-icon')).toBeDefined;

    const tree = render(
      <ButtonIcon id={defaultProps.id} onPress={defaultProps.onPress} />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('onPress', async () => {
    const onPressSpy = jest.spyOn(defaultProps, 'onPress');
    const {getByTestId} = render(
      <ButtonIcon id={defaultProps.id} onPress={defaultProps.onPress} />,
    );

    const btnIcon = getByTestId('button-icon');
    await act(async () => {
      fireEvent.press(btnIcon);
    });

    expect(onPressSpy).toHaveBeenCalled();
  });
});
