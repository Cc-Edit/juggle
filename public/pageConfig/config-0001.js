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
        "templateId": "ContainerFlexBox",
        "prop": {
          "flexOptions":[
            {
              "rowName": "第一行",
              "rowProp":{
                "type": "flex",
                "justify": "space-around"
              },
              "colProp": {},
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "天猫",
                    "dataKeyChain": "flexTestData,A",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "聚划算",
                    "dataKeyChain": "flexTestData,B",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "天猫国际",
                    "dataKeyChain": "flexTestData,C",
                    "styleOptions": {
                      "color": "red"
                    }
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "外卖",
                    "dataKeyChain": "flexTestData,D",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "天猫超市",
                    "dataKeyChain": "flexTestData,E",
                    "styleOptions": {}
                  }
                }
              ]
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "type": "flex",
                "justify": "space-around"
              },
              "colProp": {},
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "充值中心",
                    "dataKeyChain": "flexTestData,E",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "飞猪旅行",
                    "dataKeyChain": "flexTestData,C",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "领金币",
                    "dataKeyChain": "flexTestData,D",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "拍卖",
                    "dataKeyChain": "flexTestData,B",
                    "styleOptions": {}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "分类",
                    "dataKeyChain": "flexTestData,A",
                    "styleOptions": {}
                  }
                }
              ]
            }
          ],
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