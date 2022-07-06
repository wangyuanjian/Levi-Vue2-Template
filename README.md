<!-- TOC -->

- [这是 `Levi` 自己搭建起来的 `Vue 2` 项目, 配合各种组件和功能, 不断完善中...](#这是-levi-自己搭建起来的-vue-2-项目-配合各种组件和功能-不断完善中)
  - [配置 `vue-i18n`](#配置-vue-i18n)
  - [配置 `tailwindcss`](#配置-tailwindcss)
  - [配置 `element-ui`](#配置-element-ui)

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
5. 增加 `tailwind.config.js` 的配置, 优化生产环境下的 `tailwindcss` 打包文件大小
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
### 配置 `element-ui`
1. 安装
    - ```shell
      npm i element-ui -S
2. 全局引入
    - 创建 `src/element/index.ts`
    - ```ts
      import Vue from 'vue';
      import ElementUI from 'element-ui';
      import 'element-ui/lib/theme-chalk/index.css';

      Vue.use(ElementUI);
    - 在 `main.ts` 中引入上面的文件
    - ```ts
      import './element'
3. 按需引入
    - 同样在 `src/element/index.ts`, 注释掉全局引入的内容
    - ```ts
      import Vue from 'vue';
      import { Button, Input, Loading, MessageBox, Message } from 'element-ui';

      Vue.use(Button);
      Vue.use(Input);

      Vue.use(Loading.directive);

      Vue.prototype.$loading = Loading.service;
      Vue.prototype.$msgbox = MessageBox;
      Vue.prototype.$alert = MessageBox.alert;
      Vue.prototype.$confirm = MessageBox.confirm;
      Vue.prototype.$prompt = MessageBox.prompt;
      Vue.prototype.$notify = Notification;
      Vue.prototype.$message = Message;
    - 安装 `babel-plugin-component` 依赖, 借助这个插件, 我们可以只引入需要的组件, 以达到减小项目体积的目的
    - ```shell
      npm install babel-plugin-component -D
    - 修改 `babel.config.js`
    - ```js
      // 注释的内容为修改之前
      // module.exports = {
      //  presets: [
      //    '@vue/cli-plugin-babel/preset'
      //  ]
      // }
      module.exports = {
        presets: [
          [
            '@vue/cli-plugin-babel/preset',
            {
              module: false
            }
          ]
        ],
        plugins: [
          [
            'component',
            {
              libraryName: 'element-ui',
              'styleLibraryName': 'theme-chalk'
            }
          ]
        ]
      }
