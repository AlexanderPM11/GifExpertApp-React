
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/Components";


describe('Test in <AddCategory />', () => {
    const inputValue = 'Saitama';

    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onAddCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } })
    });

    test('Debe llamar onAddCategory si el  input tiene valor', () => {
        const onAddCategory = jest.fn();


        render(<AddCategory onAddCategory={ onAddCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        // screen.debug()

        expect( onAddCategory ).toHaveBeenCalledTimes(1)
        expect( onAddCategory ).toHaveBeenCalledWith(inputValue)
    });

    test('No Debe llamar onAddCategory si el  input esta vacio', () => {
        const onAddCategory = jest.fn();


        render(<AddCategory onAddCategory={ onAddCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: "" } })
        fireEvent.submit(form)
        // screen.debug()

        expect( onAddCategory ).toHaveBeenCalledTimes(0)
    });

});
