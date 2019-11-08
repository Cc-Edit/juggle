// eslint-disable-next-line no-unused-vars
var __pageConfig__ = {
  "pageTitle": "测试页面",
  "author": "文强",
  "PM": "文强",
  "createData": "20191109",
  "bodyStyle":{
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff'
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
                "type": "flex",
                "justify": "space-around"
              },
              "colData": [
                { "colName": "天猫", "dataKeyChain": "A", "colProp": { } },
                { "colName": "聚划算", "dataKeyChain": "B", "colProp": {  } },
                { "colName": "天猫国际", "dataKeyChain": "C", "colProp": { } },
                { "colName": "外卖", "dataKeyChain": "D", "colProp": { } },
                { "colName": "天猫超市", "dataKeyChain": "E", "colProp": { } },
              ],
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "type": "flex",
                "justify": "space-around"
              },
              "colData": [
                { "colName": "充值中心", "dataKeyChain": "E", "colProp": {} },
                { "colName": "飞猪旅行", "dataKeyChain": "D", "colProp": {  } },
                { "colName": "领金币", "dataKeyChain": "C", "colProp": {  } },
                { "colName": "拍卖", "dataKeyChain": "B", "colProp": {  } },
                { "colName": "分类", "dataKeyChain": "A", "colProp": {  } },
              ],
            }
          ],
          "dataKeyChain": "flexTestData",
          "styleOptions":{
            "width": "100%",
            "background-image": "url(http://juggle.isjs.cn/mock/demoImg/bg1.png)",
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "background-size": "contain",
            "position": "relative",
            "top": "-10px",
            "paddingTop": "10px"
          }
        }
      }
    ]
  }
};