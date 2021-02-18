import jDialog from './src/index.vue';

// 为组件提供 install 安装方法，供按需引入
// 默认导出组件
export default {
  install(Vue) {
    Vue.component(jDialog.name, jDialog);
  },
};
