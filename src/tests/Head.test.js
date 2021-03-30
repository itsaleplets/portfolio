import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Head from '../components/Head';

describe('renders a landing page', () => {
  it('renders a subtitle', () => {
    render(<Head />);
    const subtitle = screen.getByText(/hello. my name is/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe('H2');
  });
  it('renders a title', () => {
    render(<Head />);
    const title = screen.getByText(/alessandra/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
  });
  

  // it('renders a linkedin link', () => {
  //   render(<Contact />);
  //   const linkedinLink = screen.getByRole('link', {name: /l i n k e d i n/i});
  //   expect(linkedinLink).toBeInTheDocument();
  //   fireEvent.click(linkedinLink);
  //   const history = createMemoryHistory();
  //   const pathname = history.location.pathname;
  //   expect(pathname).toBe('/');
  // });
});