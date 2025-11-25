import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true, // 自动在 package.json 生成 types 字段
            tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ui',
            fileName: 'ui'
        },
        rollupOptions: {
            external: ['vue', 'element-plus'],
            output: {
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus'
                }
            }
        }
    }
});
