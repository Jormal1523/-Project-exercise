import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'


// router換頁後，畫面維持在最頂端
router.afterEach(() => {
	window.scrollTo(0, 0);
});

createApp(App).use(store).use(router).use(Vuex).mount('#app')
