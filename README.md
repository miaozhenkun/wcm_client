# 环境准备

* node安装
* `npm install -g typescript typings angular-cli`

# 命令

* `ng build`
构建

* `ng serve`
启动web服务，默认地址：http://localhost:4200/。启动之后需要手动访问浏览器。

* `ng generate|g component|directive|pipe|service|class|interface|enum|module`
生成代码文件。可支持目录结构，会自动生成相关文件以及代码。

	其中：
	component 	组件
	directive 	指令
	pipe 		管道
	service 	服务
	class 		类
	interface 	接口
	enum 		元组
	module 		模块

	如：
	`ng g ./demo/hero/demo-hero-detail`会在目录`demo/hero/demo-hero-detail`中生成文件`demo-hero-detail.component.ts、demo-hero-detail.component.css、demo-hero-detail.component.html`。并自动导入到对应模块文件中。

* `npm start`
默认调用package.json中start配置命令。

# 其他说明

* `src/assets`目录中的文件以及目录会在ng build之后，完全拷贝到`dist/assets`目录中。
