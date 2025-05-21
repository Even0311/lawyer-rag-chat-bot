import React from 'react';
import { TextField, Button, Stack } from '@mui/material';

interface Props {
  input: string;
  setInput: (text: string) => void;
  onSend: () => void;
}


/**
 * ChatInput renders the user input box and send button.
 * It allows the user to type and submit a message (on Enter or click).
 *
 * @param {string} input - Current input text.
 * @param {Function} setInput - Function to update input text.
 * @param {Function} onSend - Function to call when sending message.
 * @returns React component with input and button.
 */
const ChatInput: React.FC<Props> = ({ input, setInput, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSend();
  };

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant="contained"
        onClick={onSend}
        sx={{ textTransform: 'none' }}
      >
        Send
      </Button>
    </Stack>
  );
};

export default ChatInput;
