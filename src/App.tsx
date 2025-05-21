import React from 'react';
import ChatWidget from './components/ChatWidget';
import { Typography } from '@mui/material';


function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Legal Chat Assistant
      </Typography>
      <ChatWidget />
    </div>
  );
}

export default App;
