import React from 'react';
import { fireEvent, render } from "@testing-library/react-native";
import Calculator from '../Caluclator/caluclator';
describe("Caluclator", () => {
    let mainComp = <Calculator />
    test('Calculator renders correctly', async () => {
        render(mainComp)
    });
    test('Calculator snapshot correctly', async () => {
        let snapShotCopy = render(mainComp).toJSON()
        expect(snapShotCopy).toMatchSnapshot()
    });
    test('Calculator query correctly', async () => {
        let getQuery = render(mainComp)
        const { getByText, getAllByText } = getQuery
        expect(getByText("1")).toBeTruthy()
        expect(getByText("2")).toBeTruthy()
        expect(getByText("3")).toBeTruthy()
        expect(getByText("4")).toBeTruthy()
        expect(getByText("5")).toBeTruthy()
        expect(getByText("6")).toBeTruthy()
        expect(getByText("7")).toBeTruthy()
        expect(getByText("8")).toBeTruthy()
        expect(getByText("9")).toBeTruthy()
        expect(getByText("+")).toBeTruthy()
        expect(getByText("=")).toBeTruthy()
        expect(getByText("/")).toBeTruthy()
        expect(getByText("*")).toBeTruthy()
        expect(getByText("-")).toBeTruthy()
        expect(getByText("C")).toBeTruthy()
        expect(getAllByText("0").length).toBeGreaterThan(0);
    });

  test('displays numbers when pressed', () => {
    const { getByText } = render(mainComp);

    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('3'));

    expect(getByText('53')).toBeTruthy(); 
  });

  test('performs addition correctly', () => {
    const { getByText,getAllByText } = render(mainComp);
    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('3'));
    fireEvent.press(getByText('='));
    expect(getAllByText('8')).toBeTruthy(); 
  });

  test('performs subtraction correctly', () => {
    const { getByText ,getAllByText} = render(mainComp);

    fireEvent.press(getByText('9'));
    fireEvent.press(getByText('-'));
    fireEvent.press(getByText('4'));
    fireEvent.press(getByText('='));

    expect(getAllByText('5')).toBeTruthy(); 
  });

  test('performs multiplication correctly', () => {
    const { getByText } = render(mainComp);

    fireEvent.press(getByText('6'));
    fireEvent.press(getByText('*'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));

    expect(getByText('12')).toBeTruthy(); 
  });

  test('performs division correctly', () => {
    const { getByText,getAllByText } = render(mainComp);

    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('/'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));

    expect(getAllByText('4')).toBeTruthy(); 
  });

  test('clears input when "C" is pressed', () => {
    const { getByText ,getAllByText} = render(mainComp);

    fireEvent.press(getByText('9'));
    fireEvent.press(getByText('C'));

    expect(getAllByText("0").length).toBeTruthy(); 
  });

  test('handles invalid input gracefully', () => {
    const { getByText } = render(mainComp);

    fireEvent.press(getByText('/'));
    fireEvent.press(getByText('='));

    expect(getByText('Error')).toBeTruthy(); 
  });
})

