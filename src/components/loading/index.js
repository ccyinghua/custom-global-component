import LoadingComponent from './Loading.vue'   //引入vue


const Loading = {
	install:function(Vue){    // install配置使main.js可以Vue.use(Loading);
		Vue.component('Loading',LoadingComponent);
	}
}


export default Loading  // 导出Loading

