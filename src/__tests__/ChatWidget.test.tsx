import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatWidget from '../components/ChatWidget';

describe('ChatWidget', () => {
  it('renders input field and send button', () => {
    render(<ChatWidget />);
    expect(screen.getByPlaceholderText(/type your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('sends user and bot message on send', () => {
    render(<ChatWidget />);
    const input = screen.getByPlaceholderText(/type your message/i);
    fireEvent.change(input, { target: { value: 'Hello Lawyer' } });
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.getByText('Hello Lawyer')).toBeInTheDocument();
    expect(screen.getByText('This is a mock legal response.')).toBeInTheDocument();
  });
});
