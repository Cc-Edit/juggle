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