## custom-global-component

> vue2 自定义全局组件，以loading加载效果为例

### Build Setup

```javascript
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
### 构建项目

```javascript
vue init webpack-simple custom-global-component
cnpm install
npm run dev

```
1. 自定义vue组件，首先要创建组件文件，在loading文件夹中Loading.vue直接按照vue template相关规则写即可

![image](https://github.com/ccyinghua/custom-global-component/blob/master/readimg/img01.png?raw=true)

2. 创建Loading.vue组件之后，要建立相关的js调用这个Loading.vue,进行相关配置后导出使用。index.js中中间部分配置最为重要，

```javascript
主要文件index.js代码：

    import LoadingComponent from './Loading.vue'
    const Loading={
        install: function(Vue){
            Vue.component('Loading',LoadingComponent)
        }
    }
    export default Loading

说明：Vue.component('Loading',LoadingComponent);中的'Loading',
这个命名就是在其他文件中调用这个组件的名字，例如调用这个loading可以写成<Loading></Loading>
```

![image](https://github.com/ccyinghua/custom-global-component/blob/master/readimg/img02.png?raw=true)

3.使用这个组件

![image](https://github.com/ccyinghua/custom-global-component/blob/master/readimg/img03.png?raw=true)

![image](https://github.com/ccyinghua/custom-global-component/blob/master/readimg/img04.png?raw=true)




