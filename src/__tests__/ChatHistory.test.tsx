import React from 'react';
import { render } from '@testing-library/react';
import ChatHistory from '../components/ChatHistory';
import { Message } from '../types/message';

const messages: Message[] = [
  { id: '1', role: 'user', content: 'Hi', timestamp: '10:00' },
  { id: '2', role: 'bot', content: 'Hello!', timestamp: '10:01' }
];

describe('ChatHistory', () => {
  it('renders message content', () => {
    const { getByText } = render(<ChatHistory messages={messages} />);
    expect(getByText('Hi')).toBeInTheDocument();
    expect(getByText('Hello!')).toBeInTheDocument();
  });
});
