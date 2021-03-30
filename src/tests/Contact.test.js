import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// npm install --save react-history
import Contact from '../components/Contact';

describe('renders a contact section', () => {
  it('renders a title', () => {
    render(<Contact />);
    const title = screen.getByText('Get in touch');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
  });

  it('renders a paragraph to encourage contact', () => {
    const { container } = render(<Contact />);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/Would you like to know more /i);
  });

  it('renders an email link', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', {name: /e m a i l/i});
    expect(emailLink).toBeInTheDocument();
    fireEvent.click(emailLink);
    const history = createMemoryHistory();
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');
  });

  it('renders a linkedin link', () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole('link', {name: /l i n k e d i n/i});
    expect(linkedinLink).toBeInTheDocument();
    fireEvent.click(linkedinLink);
    const history = createMemoryHistory();
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');
  });
});
