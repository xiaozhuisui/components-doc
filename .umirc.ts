/*
 * @Date: 2022-08-31 11:04:25
 * @LastEditors: 追随
 * @LastEditTime: 2022-08-31 11:49:34
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi-doc',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/xiaozhuisui',
  publicPath: '/xiaozhuisui/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lean',
        camel2DashComponentName: false,
        customStyleName: name => {
          return `./style/index.less`; // 注意：这里 ./ 不可省略
        },
      },
      'lean',
    ],
  ]
  // more config: https://d.umijs.org/config
});
