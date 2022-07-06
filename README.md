<!-- TOC -->

- [这是 `Levi` 自己搭建起来的 `Vue 2` 项目, 配合各种组件和功能, 不断完善中...](#这是-levi-自己搭建起来的-vue-2-项目-配合各种组件和功能-不断完善中)
  - [配置 `vue-i18n`](#配置-vue-i18n)

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