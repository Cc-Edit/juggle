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
      },
      {
        "templateId": "BlockFlexBox",
        "prop": {
          "flexOptions":[
            {
              "rowName": "第一行",
              "rowProp":{
                "gutter": 2,
              },
              "colData": [
                { "colName": "天猫", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "聚划算", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "天猫国际", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "外卖", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "天猫超市", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
              ],
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "gutter": 2,
              },
              "colData": [
                { "colName": "充值中心", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "飞猪旅行", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "领金币", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "拍卖", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
                { "colName": "分类", "dataKeyChain": "A", "colProp": { "span": 0.25, "offset": 0.25 } },
              ],
            }
          ],
          "dataKeyChain": "flexTestData",
          "styleOptions":{}
        }
      }
    ]
  }
};