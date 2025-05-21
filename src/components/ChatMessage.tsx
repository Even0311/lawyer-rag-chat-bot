import React from 'react';
import { Box, Typography } from '@mui/material';
import { Message } from '../types/message';

interface Props {
  message: Message;
}

/**
 * Renders a single chat message with different styling for user vs. bot.
 * 
 * @param {Message} message - Message object to display.
 * @returns React component rendering the chat bubble.
 */

const ChatMessage: React.FC<Props> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          borderRadius: 2,
          bgcolor: isUser ? '#1976d2' : '#e0e0e0',
          color: isUser ? 'white' : 'black',
          maxWidth: '80%',
        }}
      >
        <Typography variant="body2">{message.content}</Typography>
        <Typography variant="caption" sx={{ mt: 0.5, display: 'block', textAlign: 'right', opacity: 0.6 }}>
          {message.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
