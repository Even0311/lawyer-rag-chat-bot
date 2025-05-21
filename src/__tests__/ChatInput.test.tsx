import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChatInput from '../components/ChatInput';

describe('ChatInput', () => {
  it('calls onSend when Enter is pressed', () => {
    const mockSend = jest.fn();
    const { getByPlaceholderText } = render(
      <ChatInput input="" setInput={() => { }} onSend={mockSend} />
    );
    const input = getByPlaceholderText(/type your message/i);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockSend).toHaveBeenCalled();
  });

  it('calls setInput on change', () => {
    const mockSetInput = jest.fn();
    const { getByPlaceholderText } = render(
      <ChatInput input="" setInput={mockSetInput} onSend={() => { }} />
    );
    const input = getByPlaceholderText(/type your message/i);
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(mockSetInput).toHaveBeenCalledWith('Test');
  });
});
