- 这是一个利用webpack和react做的一个计算器，就是个练手的小项目

- 这个脚手架工具可以参考 [react-environment](https://github.com/zhugeliange/react-environment)

**效果如下：**

![fatmancalculate](http://oj6n9nf7i.bkt.clouddn.com/image/test/fatmancalculate.jpg)

- 项目说明：

	- **js** 代码用的是 **ES6** 然后用 **babel** 转的，不了解的可以参考我之前写的 [教程](http://fsociety.cn/post/react%E6%8A%80%E6%9C%AF%E6%A0%88%E7%AC%94%E8%AE%B0%E8%8F%9C%E9%B8%9F%E7%AF%87%E4%B9%8Bes6)

	- 脚手架搭好之后主要代码逻辑在 **src** 目录下面

	- **components** 下面分为： **Header**， **Body**， **Footer**，见名知意了，每个目录下面都是以 **index.js** 作为核心，然后分别有同名的 **js** 以组件的形式引入，并且同时会有配套的 **scss** 文件。例如： **Body** 目录下的核心就是 **index.js** 然后引入 **Body.js** 作为组件，**Body.scss** 作为样式。

	- 逻辑写在 **containers** 目录下， **APPContainer** 表示整个页面的主体， **calculate.js** 里面是计算的逻辑，将这些功能都拆分开，符合 **react** 模块化的思想。

	- **layouts** 目录就是项目的页面，通常不在这里面写逻辑，而是在刚刚的 **components** 里面写然后作为模块引入。

**快速开始：**

```
// start by code:
1. yarn install
2. yarn start
```

- 这里推荐用 **yarn**，用 **npm** 可能会有不知名的错误，我之前写的 [yarn的教程](http://fsociety.cn/post/%E6%90%9E%E6%90%9E%E9%AB%98%E5%A4%A7%E4%B8%8A%E7%9A%84yarn)

> 这个项目实际上已经可以代表了通常情况下的react项目开发的逻辑，这里面虽然脚手架里提供了redux，但实际上我这里并没有用到，如果需要的话还是值得一试的。