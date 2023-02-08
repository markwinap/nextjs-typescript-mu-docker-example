import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../utils/Link';
import PdfGenerator from '../pdfgenerator';

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Home
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/about">
            About
          </Button>
        </Box>
      </Box> */}
      <PdfGenerator/>
    </Container>
  );
}
