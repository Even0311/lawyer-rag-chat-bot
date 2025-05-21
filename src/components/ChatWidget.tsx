import React, { useState } from 'react';
import { Paper } from '@mui/material';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import { Message } from '../types/message';
import { v4 as uuidv4 } from 'uuid';

/**
 * ChatWidget is the container component for the chatbot interface.
 * It holds chat state and renders ChatHistory and ChatInput.
 *
 * @returns Main chatbot component.
 */
const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString(),
    };

    const botMessage: Message = {
      id: uuidv4(),
      role: 'bot',
      content: 'This is a mock legal response.',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 600, height: '80vh', mx: 'auto', display: 'flex', flexDirection: 'column' }}>
      <ChatHistory messages={messages} />
      <ChatInput input={input} setInput={setInput} onSend={sendMessage} />
    </Paper>
  );
};

export default ChatWidget;
