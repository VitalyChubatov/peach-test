import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
	return {
        server: {
            port:7777,
            host: '0.0.0.0'
        },
		build: {
			outDir: 'build',
		},
		plugins: [react()],
	}
})
