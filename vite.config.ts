import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import legacy from '@vitejs/plugin-legacy'
import { createStyleImportPlugin, AntdResolve} from 'vite-plugin-style-import';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // checker({
    //   typescript: true
    // }),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
      // libs: [
      //   {
      //     libraryName: 'antd',
      //     esModule: true,
      //     resolveStyle: (name) => {
      //       return `antd/lib/${name}/style/index`
      //     }
      //   }
      // ]
    })
  ],
  resolve: {
    alias: {
      "antd": path.resolve(__dirname, "./node_modules/antd"),
      "~antd": path.resolve(__dirname, "./node_modules/antd"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@comps": path.resolve(__dirname, "./src/components"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      // CSS 预处理器选项
      less: {
        javascriptEnabled: true,
        modifyVars: {
          //在这里进行主题的修改，参考官方配置属性
          '@primary-color': '#0084FF',
          '@warning-color': '#FAAD14',
          '@error-color': '#FF4D4F',
        }
      }
    }
  },
  envPrefix: 'sp-',
  server: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://sp1.xuelangyun.com:30080',
        changeOrigin: true
      }
    }
  }
})
