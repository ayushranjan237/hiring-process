// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f9fafb',
      // Define more shades of the primary color if needed
    },
    // Define additional colors here
  },
  fonts: {
    body: 'Helvetica, Arial, sans-serif',
    heading: 'Arial, sans-serif',
  },
  // Add more theme configurations as needed
});

export default theme;
