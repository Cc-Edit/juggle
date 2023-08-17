var __pageConfig__ = {
  "pageTitle": "Juggle",
  "author": "isjs.cn",
  "PM": "文强",
  "createData": "2020-04-23T16:00:00.000Z",
  "bodyStyle": {},
  "pageConfig": {
    "dataSource": {
      "query": {
        "publishStatus": "3"
      },
      "origin": {
        "originUrl": "/mock/0001.json",
        "originMethod": "get",
        "dataKeyChain": "content"
      }
    },
    "bodyConfig": [
      {
        "name": "轮播图",
        "templateId": "BlockSwiper",
        "description": "轮播图组件，用来滚动播放图片/文字",
        "develop": "isjs.cn",
        "options": [
          {
            "key": "swiperProp",
            "type": "json",
            "defaultValue": "{\"autoplay\": 3000,\"duration\": 2000,\"initial-swipe\": 1,\"loop\": true}",
            "refer": "https://youzan.github.io/vant/#/zh-CN/swipe"
          },
          {
            "key": "swiperType",
            "type": "select",
            "value": "img,text",
            "defaultValue": "img"
          },
          {
            "key": "dataKeyChain",
            "type": "text",
            "defaultValue": "bannerList"
          },
          {
            "key": "styleOptions",
            "type": "text",
            "defaultValue": ""
          }
        ],
        "baseData": {
          "bannerList": [
            "/mock/demoImg/bannerTest1.png",
            "/mock/demoImg/bannerTest2.png",
            "/mock/demoImg/bannerTest3.png",
            "/mock/demoImg/bannerTest4.png"
          ]
        }
      },
      {
        "name": "轮播图",
        "templateId": "BlockSwiper",
        "description": "轮播图组件，用来滚动播放图片/文字",
        "develop": "isjs.cn",
        "options": [
          {
            "key": "swiperProp",
            "type": "json",
            "defaultValue": "{\"autoplay\": 3000,\"duration\": 2000,\"initial-swipe\": 1,\"loop\": true}",
            "refer": "https://youzan.github.io/vant/#/zh-CN/swipe"
          },
          {
            "key": "swiperType",
            "type": "select",
            "value": "img,text",
            "defaultValue": "img"
          },
          {
            "key": "dataKeyChain",
            "type": "text",
            "defaultValue": "bannerList"
          },
          {
            "key": "styleOptions",
            "type": "text",
            "defaultValue": ""
          }
        ],
        "baseData": {
          "bannerList": [
            "/mock/demoImg/bannerTest1.png",
            "/mock/demoImg/bannerTest2.png",
            "/mock/demoImg/bannerTest3.png",
            "/mock/demoImg/bannerTest4.png"
          ]
        }
      }
    ]
  }
}