<!-- TOC -->

- [这是 `Levi` 自己搭建起来的 `Vue 2` 项目, 配合各种组件和功能, 不断完善中...](#这是-levi-自己搭建起来的-vue-2-项目-配合各种组件和功能-不断完善中)
  - [配置 `vue-i18n`](#配置-vue-i18n)
  - [配置 `tailwindcss`](#配置-tailwindcss)

<!-- /TOC -->


## 这是 `Levi` 自己搭建起来的 `Vue 2` 项目, 配合各种组件和功能, 不断完善中...

### 配置 `vue-i18n`
1. 安装 `vue-i18n`
    - ```shell
      npm i vue-i18n@8.24.4
2. 创建配置文件
    - 创建 `src/i18n/en.ts`
      - ```ts
        export default {
          morning: 'Good Morning',
          greeting: 'hello, {name}',
        }
    - 创建 `src/i18n/zh.ts`
      - ```ts
        export default {
          morning: '早上好',
          greeting: '你好, {name}',
        }
    - 创建 `src/i18n/index.ts`
      - 引入之前创建的语言文件, 创建配置并默认暴露 `VueI18n` 对象
      - ```ts
        import VueI18n from 'vue-i18n';
        import Vue from 'vue';
        import enUS from './en';
        import zhCN from './zh';

        Vue.use(VueI18n);

        const i18n = new VueI18n({
          locale: navigator.language,
          fallbackLocale: 'en',
          silentFallbackWarn: true,
          messages: {
            'en-US': enUS,
            'zh-CN': zhCN,
          },
        });

        export default i18n;
3. `main.ts`
    - ```ts
      import i18n from './i18n';
      
      const app = new Vue({
        router,
        store,
        i18n,
        render: (h) => h(App),
      }).$mount('#app');

      // 可不选
      window.onlanguagechange = function() {
        app.$i18n.locale = navigator.language;
      }

### 配置 `tailwindcss`
1. 安装
    - ```shell
      npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
2. 创建 `tailwindcss` 的配置文件
    - ```shell
      npx tailwindcss init -p
      ```
      - 📕`-p` 表示同时创建 `postcss` 的配置文件
    - 执行这个命令后, 根目录下会出现两个新的配置文件 `tailwind.config.js` 和 `postcss.config.js`
3. 在 `main.ts` 中引入样式文件
    - ```js
      import 'tailwindcss/tailwind.css'
4. 接下来就可以使用样式啦
    - ```html
      <small class="text-green-500">{{ $t('greeting', {name}) }}</small>
5. 增加配置 `tailwind.config.js` 的配置, 优化生产环境下的 `tailwindcss` 打包文件大小
    - ```js
      module.exports = {
        purge: [
          './src/**/*.vue'
        ],
        content: [],
        theme: {
          extend: {},
        },
        plugins: [],
      }
