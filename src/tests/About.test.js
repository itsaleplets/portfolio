import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('renders a section about me', () => {
  it('renders an image', () => {
    render(<About />);
    const image = screen.getByAltText(/alessandra sitting looking to the right/i);
    expect(image).toBeInTheDocument();
    //testar tamanho da foto?
    //testar cor do background? - toHaveStyle?
    //https://medium.com/@the_teacher/how-to-test-a-react-components-css-styles-with-react-testing-library-rtl-styled-components-43f744334528
  });

  it('renders H2 title', () => {
    render(<About />);
    const title = screen.getByText(/about me/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toEqual('H2');
  });

  it('renders two paragraphs with information', () => {
    const { container } = render(<About />);
    const paragraph = container.querySelectorAll('p');
    expect(paragraph).toHaveLength(2);
    expect(paragraph[0]).toHaveTextContent(/the happiness I feel/i);
    expect(paragraph[1]).toHaveTextContent(/in 2020 I started my studies at Trybe/i);
  });
});
