import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from "./router";
import { handle } from "./common/promise";
//createApp(App)
//   .mixin({
//        methods: {
//            handle,
//       }
//   })
//   .mount('#app');

const app=createApp(App);
app.use(router);
app.mixin({methods: {handle}});
app.mount("#app");

//createApp(App).mount('#app')
//createApp(App).use(router).mount('#app');
