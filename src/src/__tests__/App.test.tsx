import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('App Component', () => {
  test('renders the heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /hello/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the button with correct text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /button/i });
    expect(button).toBeInTheDocument();
  });

  test('renders the input field', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('allows user to type in the input field', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Hello, world!');
    expect(input).toHaveValue('Hello, world!');
  });
});
