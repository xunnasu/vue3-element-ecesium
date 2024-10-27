import '@/assets/styles/main.scss';
// element fun （自动引入方式需手动引入使用fun调用的css）
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import 'element-plus/es/components/notification/style/css';
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
