
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { GifGrid } from "../../src/components/Components";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Test in Hook useFetchGifs', () => {

    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() =>
            useFetchGifs("One Punch")
        );
        const { gifs, isLoading } = result.current;
        expect(isLoading).toBeTruthy()
    });

    test('Debe retornar una []gifs', async () => {
        const { result } = renderHook(() =>
            useFetchGifs("One Punch")
        );

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
          
        const { gifs, isLoading } = result.current;
        expect(isLoading).toBeFalsy()

    });

});
