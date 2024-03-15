import { render, screen } from '@testing-library/react';
import { GitItem } from "../../src/components/Components";

describe('Test in <GitItem />', () => {
    const gifData = {
        url: 'url_de_ejemplo',
        title: 'Título de ejemplo'
    };

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GitItem gif={gifData} />);
        expect(container).toMatchSnapshot();
    });

    // eslint-disable-next-line no-undef
    test('Probar la alt de la img', () => {

        render(<GitItem gif={gifData} />);
        // screen.debug();

        const { src, alt } = screen.getByRole('img');
        expect(alt).toBe(gifData.title);
    });


    // eslint-disable-next-line no-undef
    test('Mostrar titulo en el componente', () => {
        render(<GitItem gif={gifData} />);
        expect(screen.getByText(gifData.title)).toBeTruthy();
    });
});
