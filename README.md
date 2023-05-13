# juggle

## 配置项文档：https://github.com/Cc-Edit/juggle/blob/master/OPTIONS.md 

## 公告：   
项目目前只是一个简单的渲染工具，我希望它未来应该是一个功能更强大，配置更灵活的开发工具。    
目前能想到还未实现的大功能点如下：     
1. 静态配置文件的防缓存
2. 组件的按需打包，按需加载
3. 全局状态的约定以及管理
4. 拖拽布局后台实现
5. 复交互类型页面的配置

|                                     学习讨论小组🍻                                      |                                                打赏（赠送学习资料：[webNote](https://github.com/Cc-Edit/webNote)） :confetti_ball:                                               | 
|:-------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------:| 
| ![wechat.png](https://github.com/Cc-Edit/Cc-Edit/blob/main/src/WeChatGroup.png) | ![img.png](https://github.com/Cc-Edit/Cc-Edit/blob/main/src/img.png) |

## 介绍
    阿里推出飞冰来进行页面搭建，但是飞冰的物料开发不是想象中的简单。   
    开发此项目，可以直接使用市面上线程的组件库（iview, vux, Element），也可以基于现有组件库封装自定义组件。  
    通过拖拽布局，生成页面配置 json 文件，再通过json动态渲染页面。  
    此项目包含两部分，report.html模板渲染页面以及一个页面配置服务。  
    页面配置服务用来拖拽生成页面配置json文件，目前还在实现中，初期直接使用本地配置文件。   
    report.html模板渲染页面已经实现并已在线上进行验证   

### 方案说明：
在一个页面上承载多个页面，使页面配置化。首先想为什么这么做？这么做有什么好处？     
第一: 减少重复开发成本，多个页面，多个项目共有的自定义组件，需要有一套公共的仓库来进行维护。    
第二: 将简单工作交给PM或者运营。    
第三: 提高开发效率，以往做一个新页面的开发时间，使用配置生成只需要10分钟。     

抽象的看我们日常开发的页面，可以分为以下几类：  
1. 活动页  特点是动画样式丰富，活动可复用性高，配置灵活。  
2. 录入页  特点是表单校验，输入项校验。  
3. 回显页  特点是请求单向，没有用户操作。  

我们把按钮，输入框，日期选择等称为 元素，   
由不同的组合而成的具有特定功能的集合称为  组件，    
最终不同的组件集合起来就是一个页面模板。    

我们这次的项目目的就是实现页面模板化，基于现有的element，vuex，iview作为元素库。  
基于元素库封装自定义组件。然后通过组件的灵活配置，实现页面模板化。   
 
页面模板的载体是 report.html 页面   
页面模板文件为一个json文件，位于 public/pageConfig 目录下，以 config 开头的js文件。  
通过script标签异步引入，配置参数挂载到 window.__pageConfig__ 中，再通过Vue实例向下传递。  

页面由不同的组件搭建而成，按照组件用途分为以下三类：  
1. collection  容器级别组件，例如：下拉列表容器，展开收起容器，tab切换容器，侧边栏容器等  
2. block  块级别组件，用来展示数据的最小单元，例如：多行内容块，左右两列内容块， flex等分内容块等  
3. public  公共组件，例如：全局的提示窗，全局的页头页尾，全局的loading等  

以上组件分类位于/src/components目录下。  
再来思考一个问题，如果一个页面可配置，就要满足以下要求，我称之为约定：  
1. 同一个位置有可能放置任意组件，要求所有组件接受相同的参数。  
2. 基于第一点，要求每个组件对prop参数的要求应该是统一的。  
3. 组件之间应该有层级关系，容器级别组件（collection）拥有承载块级组件的能力（block）并且容器之间可以嵌套。  
4. 容器组件应该拥有自主获取数据的能力，例如三个tab标签切换时，每个tab都对应单独的接口以及列表。  


### 选型
首先此项目支持各种基于vue的前端ui组件库，例如：  
PC端：

    Element（https://github.com/ElemeFE/element）
    iview（https://github.com/iview/iview）
    muse-ui（https://github.com/museui/muse-ui）
    ant-design-vue（https://github.com/vueComponent/ant-design-vue）
    
移动端：

    mint-ui（https://github.com/ElemeFE/mint-ui）
    vant（https://github.com/youzan/vant）
    cube-ui（https://github.com/didi/cube-ui）
    
因为vux对vue-cli2.0以上版本不支持，所以不再支持的组件库中。 
此项目使用有赞团队的 vant 作为基础组件库，vant在组件数量，对新版本vue/cli的支持程度，以及更新维护的频率都优于其他框架。
如果你有自己喜欢的组件库，可以手动安装，直接使用即可。


### demo:
之前实现的组件因为太定制化了，所以不太适合开源出来给大家看。
所以在这里我们从头开始重新实现，具体实现的是一个电商平台的落地页。
最近是双十一，各个电商平台开始做大量的活动，与之对应的是大量的落地页。
我印象中之前看到过一篇文章，大致是讲阿里的落地页都是自动生成的。
细粒度的组件化，加上服务端渲染是可以实现动态生成页面的。
由渲染服务器根据接口内容来判断用什么组件。
由于只是demo，很多细节不会做的很细，只是给大家演示一下工作方式。
真正的组件需要结合业务进行整理，抽象出自己的组件库，电商多是展示，B端多是列表，场景不同通用组件就不同。


### 新增组件步骤：
每次接触到新需求时，应该尽可能抽象出来成为独立组件，不论是从提高开发效率的角度还是提高测试效率的角度看，这么做都是必要的。
juggle不关注组件，只关注结构。所以你可以直接引入组件库的组件，也可以基于组件库二次开发封装一个新的组件。
新的组件放在 /src/components/ 目录下。按照组件类型区分为block，container，public。
在对应目录下新增组件文件即可。
第二步是将新添加的组件注册到 /src/htmls/main/report.js 入口的mixin中即可
简单两步就可以在配置中使用该组件了：
```
   {
       "templateId": "BlockFlexBox",
       "prop": {
         "dataKeyChain": "bannerList",
         "styleOptions":{}
       },
       "childItem": []
   }

```

要注意，juggle的结构对组件的prop进行了约定，只有：prop，childItem，baseData 三个参数。
也就是说，新组件的所有参数都要包含在 prop 下，在组件内部进行拆解。


### 本地运行：
clone 此项目，依次执行以下命令
```
	$ npm install 
	$ npm run serve
```
打开页面即可查看：http://localhost:8080/report.html?pageCode=0001

