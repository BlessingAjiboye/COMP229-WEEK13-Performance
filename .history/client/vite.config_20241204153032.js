/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const { PORT = 3000} = process.env;
export default defineConfig({
 plugins: [react()],
server:{
    proxy:{
        '/api':{
            target:`http://localhost:${PORT}`,
            changeOrigin: true,
        },
        '/auth': {
            target:`http://localhost:${PORT}`,
            changeOrigin: true,
        },
    },
},
build: {
    outDir: '../dist/app',
  },

});

*/


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check the PORT environment variable
const { PORT = 3000 } = process.env;
console.log('PORT:', PORT); // Logs the value of PORT, defaults to 3000 if not set

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: '../dist/app',
  },
});
