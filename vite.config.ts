import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'ReactMultiSelect',
      fileName: (format) => `react-multi-select.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', '@tailwindcss/forms'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react()],
});
