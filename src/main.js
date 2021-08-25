import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
	created() {
		AOS.init();
	},
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
