import React, { useState } from 'react';
import {
  Button, Card, CardContent, Typography, CircularProgress, Box
} from '@mui/material';
import axios from 'axios';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/resume/upload', formData);
      setParsedData(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to upload resume');
    }
    setLoading(false);
  };

  return (
    <Box>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        style={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" onClick={handleUpload} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Upload Resume'}
      </Button>

      {parsedData && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Parsed Resume Data</Typography>
            {Object.entries(parsedData).map(([key, value]) => (
              <Typography key={key}><strong>{key}:</strong> {value || 'N/A'}</Typography>
            ))}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default ResumeUploader;
