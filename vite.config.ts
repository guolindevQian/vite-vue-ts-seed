import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default () => {
  // console.log('mode', loadEnv(mode, process.cwd()).VITE_BASE_URL); //127.0.0.1:9000/api
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      {
        ...viteCompression(),
        apply: 'build',
      },
      visualizer({ open: true }),
    ],
    // 这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), //@代替src
        '#': path.resolve(__dirname, './types'), //#代替types
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      proxy: {
        '/api': {
          target: '', //需要代理的地址
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
            elementIcons: ['@element-plus/icons-vue'],
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  });
};
