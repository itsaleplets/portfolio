import { render, screen } from '@testing-library/react';
import Aside from '../components/Aside';

describe('renders a side column with information', () => {
  it('renders a name and signature', () => {
    render(<Aside />);
    const nameLabel = screen.getByText(/n a m e/i);
    const name = screen.getAllByText('Alessandra Santos');
    expect(nameLabel).toBeInTheDocument();
    expect(name).toHaveLength(2);
    expect(name[0]).toBeInTheDocument();
    expect(name[1]).toBeInTheDocument();
    //testar cores?
    //testar fonte?
  });

  it('renders a role', () => {
    render(<Aside />);
    const roleLabel = screen.getByText(/r o l e/i);
    const role = screen.getByText('Front-end Developer Jr.');
    expect(roleLabel).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });

  it('renders an email', () => {
    render(<Aside />);
    const emailLabel = screen.getByText(/e m a i l/i);
    const email = screen.getByText('itsalematos@hotmail.com');
    expect(emailLabel).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('renders a phone', () => {
    render(<Aside />);
    const phoneLabel = screen.getByText(/p h o n e/i);
    const phone = screen.getByText('+ 55 (92) 98477-7523');
    expect(phoneLabel).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
  });
});
