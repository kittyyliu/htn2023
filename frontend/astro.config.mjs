import { defineConfig } from 'astro/config';
import {astro} from "@astro/types";


// https://astro.build/config

export default {
    // Other configuration options
    defineConfig({});
  
    // Specify where static assets are located
    static: {
      directory: 'frontend/public', // Adjust this path as needed
    },
  };
  
