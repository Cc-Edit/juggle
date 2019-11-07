// eslint-disable-next-line no-unused-vars
var __pageConfig__ = {
  "pageTitle": "测试页面",
  "author": "文强",
  "PM": "文强",
  "createData": "20191109",
  "bodyStyle":{
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#FED854'
  },
  "pageConfig": {
    "dataSource":{
      "query": {
        "publishStatus":"3"
      },
      "origin": {
        "originUrl": "/mock/0001.json",
        "originMethod": "get",
        "dataKeyChain": "content"
      }
    },
    "bodyConfig": [
      {
        "templateId": "BlockSwiper",
        "prop": {
          "autoplay": 1000,
          "duration": 2000,
          "initial-swipe": 1,
          "loop": true,
          "dataKeyChain": "bannerList"
        }
      }
    ]
  }
};