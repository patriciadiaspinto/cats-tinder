import {act, fireEvent, render} from '@testing-library/react-native';
import ButtonToggle from './ButtonToggle';

describe('Button Toggle Component', () => {
  const defaultProps = {
    id: 'button-toggle',
    onPress: jest.fn(),
    checked: true,
  };

  it(' should render Button Icon', () => {
    const {getByTestId} = render(
      <ButtonToggle
        id={defaultProps.id}
        onPress={defaultProps.onPress}
        checked={defaultProps.checked}
      />,
    );

    expect(getByTestId('button-toggle')).toBeDefined;

    const tree = render(
      <ButtonToggle
        id={defaultProps.id}
        onPress={defaultProps.onPress}
        checked={defaultProps.checked}
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('onPress', async () => {
    const onPressSpy = jest.spyOn(defaultProps, 'onPress');
    const {getByTestId} = render(
      <ButtonToggle
        id={defaultProps.id}
        onPress={defaultProps.onPress}
        checked={defaultProps.checked}
      />,
    );

    const btnIcon = getByTestId('button-toggle');
    await act(async () => {
      fireEvent.press(btnIcon);
    });

    expect(onPressSpy).toHaveBeenCalled();
  });
});
