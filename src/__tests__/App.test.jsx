import App from '../App';
import { render, screen } from '@testing-library/react';

describe('App is launched', () => {
    test('Rending <App /> component should work', async () => {
        render(<App />);

        const headerContent = await screen.queryByText(/Vote for your favorite user/);
        expect(headerContent).toBeInTheDocument();
    })
});
