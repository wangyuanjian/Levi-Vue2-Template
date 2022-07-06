import VueI18n from 'vue-i18n';
import Vue from 'vue';
import enUS from './en';
import zhCN from './zh';

Vue.use(VueI18n);

const i18n = new VueI18n({
  // 从浏览器的语言中获取当前语言
  locale: navigator.language,
  // 如果没有配置用户语言, 就默认为英文
  fallbackLocale: 'en',
  // 如果没有配置用户语言, 控制台会弹出警告, 需要关闭
  silentFallbackWarn: true,
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
});

export default i18n;