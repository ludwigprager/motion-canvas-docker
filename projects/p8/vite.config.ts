import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [
    motionCanvas(),
    ffmpeg(),
  ],


 server: {
        host: '0.0.0.0',
        port: 9000,
        hmr: {
            port: 9000,
            clientPort: 9000,
            host: 'localhost'
        }
    }



});
