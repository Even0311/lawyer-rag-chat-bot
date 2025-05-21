import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { Message } from '../types/message';
import ChatMessage from './ChatMessage';

interface Props {
  messages: Message[];
}

/**
 * ChatHistory renders the full list of chat messages with auto-scroll behavior.
 *
 * @param {Message[]} messages - Array of messages to render.
 * @returns Scrollable container of ChatMessage components.
 */

const ChatHistory: React.FC<Props> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <Box
      ref={containerRef}
      sx={{
        flex: 1,
        overflowY: 'auto',
        mb: 2,
        p: 1,
        bgcolor: '#f9f9f9',
        borderRadius: 1,
      }}
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </Box>
  );
};

export default ChatHistory;
