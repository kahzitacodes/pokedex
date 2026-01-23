/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig({
	...viteConfig,
	test: {
		watch: false,
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/test/setup.ts'],
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
	},
})
