import { render } from '@testing-library/react';
import { GitItem } from "../../src/components/Components";

describe('Test in <GitItem />', () => {
    test('Debe hacer match con el snapshot', () => {
        const gifData = {
            url: 'url_de_ejemplo',
            title: 'Título de ejemplo'
        };
        const { container } = render(<GitItem gif={gifData} />);
        expect(container).toMatchSnapshot();
    });
});
