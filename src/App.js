import React from 'react';
import ResumeUploader from './components/ResumeUploader';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Resume Scanner
      </Typography>
      <ResumeUploader />
    </Container>
  );
}

export default App;
