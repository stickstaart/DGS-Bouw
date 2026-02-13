import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function ThanksPage() {
  return (
    <Box className="min-h-screen bg-[#0a192f] flex items-center justify-center text-white">
      <Container maxWidth="sm" className="text-center">
        <Typography variant="h2" className="font-bold text-sky-400 mb-4">
          Bedankt!
        </Typography>
        <Typography variant="h5" className="text-slate-300 mb-8">
          Je bericht is succesvol verzonden. Ik neem zo snel mogelijk contact met je op.
        </Typography>

        <Link href="/" passHref legacyBehavior>
          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />} // Gebruik hier de aangepaste importnaam
            // ... rest van je sx props
          >
            Terug naar home
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
