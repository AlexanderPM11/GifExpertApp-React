
import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/Components";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {

    const category = 'One punch';
    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<GifGrid category={category} />)
        // expect( screen.getByText("Cargando....") ).toBeTruthy();
        // screen.debug();
    });

    test('Debe mostrar items cuando se cargan las imagenes en useFetchGifs', () => {

        const gifs = [
            {
                id: "abd",
                title: "Saitama",
                url: "fdfd"
            },
            {
                id: "ab5d",
                title: "Saitama",
                url: "fdfd"
            }
        ];
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />)
        screen.debug()
    });

});
