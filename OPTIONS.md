## 配置项说明：

### 公共配置：
pageName:  页面标题  
author:  作者姓名，说明作用，不参与逻辑。  
PM:  产品姓名，说明作用，不参与逻辑。  
createData:  编辑日期，说明作用，不参与逻辑。   

bodyStyle:  body容器样式，CSS对象，可为空  
pageConfig:  页面结构配置    
pageConfig.dataSource  页面数据源，当一个页面多个接口时可为空   
pageConfig.dataSource.query  数据源接口参数，可为空   
pageConfig.dataSource.baseData  数据源接口配置   
pageConfig.dataSource.baseData.originUrl  数据源接口地址   
pageConfig.dataSource.baseData.originMethod  数据源接口请求方式   
pageConfig.dataSource.baseData.dataKeyChain  数据源接口返回值对应key    
pageConfig.bodyConfig  页面组件层级结构   

styleOptions 出现在各个组件参数中，指代组件样式   
dataKeyChain 出现在各个组件参数中，用来关联数据的key，举例：    
"data,bannerList,0" 等同于 data["bannerList"][0]   

### 组件配置：

#### BlockSwiper
##### 说明：
    轮播组件，基于vant封装。可接受图片，文字等
##### 用途：
    适用于banner元素
##### 配置项说明：
```
{
    "templateId": "BlockSwiper",  //组件Name一一对应，必填
    "prop": {  //内部参数
        "swiperProp":{   //vant swiper所需所有prop
            "autoplay": 3000,
            "duration": 2000,
            "initial-swipe": 1,
            "loop": true,
        },
        "swiperType": "img",  //轮播类型, img/text，默认img
        "dataKeyChain": "bannerList", //关联接口数据的key，逗号分割，必填
        "styleOptions":{} //容器样式
    }
}
```

#### BlockImg
##### 说明：
    图片块儿
##### 用途：
    懒加载图片库，支持底部文字，顶部文字
##### 配置项说明：
```
{
    "templateId": "BlockImg",  //组件name
    "prop": {
        "text": "天猫", //底部文字
        "dataKeyChain": "flexTestData,A",    //关联接口数据的key，逗号分割，必填
        "styleOptions": {} //自定义容器样式
    }
}
```

#### BlockImgCard
##### 说明：
    图文商品块儿
##### 用途：
    展示商品信息
##### 配置项说明：
```
{
  "templateId": "BlockImgCard",
  "prop": {
    "dataKeyChain": "",
    "styleOptions":{}
  }
}
```

#### ContainerFlexBox
##### 说明：
    flex布局容器
##### 用途：
    作为页面布局使用，支持内嵌各种组件
##### 配置项说明：
```
{
  "templateId": "ContainerFlexBox",  //模板名称
  "prop": {
    "flexOptions":[   //行数组
      {
        "rowName": "第一行",  //说明性质，不起作用
        "rowProp":{  //<van-row> props
          "type": "flex",
          "justify": "space-around"
        },
        "colProp": {}, //<van-col> props
        "childItem": [ //子元素，可以包含其他组件
          {
            "templateId": "BlockImg",
            "prop": {
              "text": "天猫",
              "dataKeyChain": "flexTestData,A",
            }
          }
        ]
      }
    ],
    "styleOptions":{  //自定义容器样式
      "width": "100%",
      "top": "-10px",
      "paddingTop": "10px"
    }
  }
}
```

#### ContainerTab
##### 说明：
    tab布局容器
##### 用途：
    标签页切换容器
##### 配置项说明：
```
{
    "templateId": "ContainerTab",
    "prop": {
        "defaultActive": 0,
        "tabsProp":{      //tabs组件参数
            "background": "#fff",
            "line-height": "2px",
            "animated": true,
            "border": true,
            "sticky": true,
            "swipeable": true
        },
        "tabsOptions": [  //选项列表，数组中由几个对象就有几个标签
            {
                "tabTitle": "热卖单品",  //tab标题
                "childItem": [   //tab内容，可以自由组合
                     {
                        "templateId": "BlockImg",
                        "prop": {
                          "text": "天猫",
                          "dataKeyChain": "flexTestData,A",
                        }
                     }
                ],
                "styleOptions":{}
            },
            {
                "tabTitle": "热卖单品",  //tab标题
                "childItem": [ ],
                "styleOptions":{}
            }
        ],
        "styleOptions":{
            "marginTop": "10px"
        }
    }
}
```


#### ContainerList
##### 说明：
    list布局容器
##### 用途：
    瀑布流列表容器
##### 配置项说明：
```
//直接使用顶级数据，需要配置dataKeyChain
{
    "templateId": "ContainerList",
    "prop": {
        "listProp":{  //vant list组件prop
            "loading-text": "加载中...",
            "finished-text": "",
            "error-text": "请求失败，刷新页面重新加载",
            "error.sync": true,
        },
        "dataKeyChain": "listTestData",  //数据key
        "styleOptions":{}
    },
    "childItem":[  //子元素模板
        {
            "templateId": "BlockImgCard",
            "prop": {
                "dataKeyChain": "",
                "styleOptions":{}
            }
        }
    ]
}

//独立获取数据，需要配置dataSource
{
    "templateId": "ContainerList",
    "prop": {
        "listProp":{
            "loading-text": "加载中...",
            "finished-text": "",
            "error-text": "请求失败，刷新页面重新加载",
            "error.sync": true,
        },
        "dataSource":{  //数据源
            "query": {  //查询参数
                "publishStatus":"3"
            },
            "origin": {  //接口配置
                "originUrl": "/mock/0002.json",
                "originMethod": "get",
                "dataKeyChain": "listTestData"
            }
        },
        "styleOptions":{}
    },
    "childItem":[
        {
            "templateId": "BlockImgCard",
            "prop": {
                "dataKeyChain": "",
                "styleOptions":{}
            }
        }
    ]
}
```

#### 全局小提示
##### 说明：
    fixed布局小块
##### 用途：
    目前仅用作唤起弹窗
##### 配置项说明：
```
{
    "templateId": "PublicBubble",
        "prop": {
            "bubbleProp":{
                "showText": "弹窗测试"  //底部文案
            },
        "dataKeyChain": "flexTestData,A", //图片数据
        "styleOptions":{
            "bottom": "100px",
            "right": "0"
        }
    }
},
```

#### 全局弹窗
##### 说明：
    全局弹窗组件
##### 用途：
    支持各个方向的页面弹出窗
##### 配置项说明：
```
{
    "templateId": "PublicDraw",
    "prop": {
        "drawProp":{  //弹窗配置
            "position": "left",
            "closeable": false,
            "round": false,
            "close-icon": 'close',
            "close-on-click-overlay": false,
            "get-container": "#app"
        },
        "showButton": true,  //是否展示页面底部按钮
        "successButtonText": "确定",  //按钮确认文案
        "cancelButtonText": "取消",   //按钮取消文案
        "drawStyle":{  //弹出窗口样式
            "width": "60%",
            "height": "100%"
        },
        "queryOptions":[  //弹窗内选项
            {
                "queryType": "select",  //选择器
                "key": "accountType",  //绑定到查询参数key
                "name": "账户名称",  //选项name
                "type": "radio",  //单选
                "span": "10",  //占位
                "subItem": [ //选项
                    { "name": "不限", "value": "-1" },
                    { "name": "收款", "value": "1" },
                    { "name": "购车", "value": "2" },
                    { "name": "日常", "value": "3" }
                ]
            }
        ],
        "styleOptions":{},
    },
    "childItem": [  //也支持组件嵌套
        {
            "templateId": "BlockSwiper",
            "prop": {
                "swiperProp":{
                "autoplay": 3000,
                "duration": 2000,
                "initial-swipe": 1,
                "loop": true,
                },
                "swiperType": "img",
                "dataKeyChain": "bannerList",
                "styleOptions":{}
            }
        }
    ]
}
```