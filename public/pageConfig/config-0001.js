// eslint-disable-next-line no-unused-vars
var __pageConfig__ = {
  "pageTitle": "测试页面",
  "author": "文强",
  "PM": "文强",
  "createData": "20191109",
  "bodyStyle":{
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#f4f4f4'
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
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "聚划算",
                    "dataKeyChain": "flexTestData,B",
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "天猫国际",
                    "dataKeyChain": "flexTestData,C",
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "外卖",
                    "dataKeyChain": "flexTestData,D",
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "天猫超市",
                    "dataKeyChain": "flexTestData,E",
                    "styleOptions": "sm-img"
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
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "飞猪旅行",
                    "dataKeyChain": "flexTestData,C",
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "领金币",
                    "dataKeyChain": "flexTestData,D",
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "拍卖",
                    "dataKeyChain": "flexTestData,B",
                    "styleOptions": "sm-img"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "分类",
                    "dataKeyChain": "flexTestData,A",
                    "styleOptions": "sm-img"
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
      },
      {
        "templateId": "ContainerFlexBox",
        "prop": {
          "title": "每日优选",
          "subTitle": "日常版の造物节",
          "flexOptions": [
            {
              "rowName": "第一行",
              "rowProp":{
                "gutter": 2,
                "justify": "space-around"
              },
              "colProp": {
                "0":{
                  "span": 16
                },
                "1":{
                  "span": 8
                }
              },
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,H",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,F",
                    "styleOptions": "col-item"
                  }
                }
              ],
              "styleOptions":{
                "paddingBottom":"1px"
              }
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "gutter": 2,
                "justify": "space-around"
              },
              "colProp": {
                "0":{
                  "span": 8
                },
                "1":{
                  "span": 8
                },
                "2":{
                  "span": 8
                }
              },
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,G",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,J",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,I",
                    "styleOptions": "col-item"
                  }
                }
              ],
              "styleOptions":{
                "paddingBottom":"1px"
              }
            }
          ],
          "styleOptions":{
            "width": "100%",
            "backgroundColor": "#fff"
          }
        }
      },
      {
        "templateId": "ContainerFlexBox",
        "prop": {
          "title": "买遍全球",
          "subTitle": "正品保障15天售后无忧",
          "flexOptions": [
            {
              "rowName": "第一行",
              "rowProp":{
                "gutter": 2,
                "justify": "space-around"
              },
              "colProp": {
                "0":{
                  "span": 8
                },
                "1":{
                  "span": 16
                }
              },
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,J",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockSwiper",
                  "prop": {
                    "swiperProp":{
                      "autoplay": 2000,
                      "duration": 1000,
                      "initial-swipe": 3,
                      "loop": true,
                    },
                    "swiperType": "img",
                    "dataKeyChain": "bannerList",
                    "styleOptions":{}
                  }
                }
              ],
              "styleOptions":{
                "paddingBottom":"1px"
              }
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "gutter": 2,
                "justify": "space-around"
              },
              "colProp": {
                "0":{
                  "span": 8
                },
                "1":{
                  "span": 8
                },
                "2":{
                  "span": 8
                }
              },
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,G",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,J",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,I",
                    "styleOptions": "col-item"
                  }
                }
              ],
              "styleOptions":{
                "paddingBottom":"1px"
              }
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "gutter": 2,
                "justify": "space-around"
              },
              "colProp": {
                "0":{
                  "span": 8
                },
                "1":{
                  "span": 8
                },
                "2":{
                  "span": 8
                }
              },
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,G",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,J",
                    "styleOptions": "col-item"
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,I",
                    "styleOptions": "col-item"
                  }
                }
              ],
              "styleOptions":{
                "paddingBottom":"1px"
              }
            }
          ],
          "styleOptions":{
            "width": "100%",
            "marginTop": "10px",
            "backgroundColor": "#fff"
          }
        }
      }
    ]
  }
};