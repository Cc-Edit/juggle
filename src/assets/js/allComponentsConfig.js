/**
 * 组件列表
 * */
const ComponentsObj = {
  publicCom:[
    {
      name: '弹窗',
      templateId: 'PublicDraw',
      description: '设置页面弹窗',
      develop: 'isjs.cn',
      options:[
        {
          key: 'drawProp',
          type: 'text',
          defaultValue: {
            "position": "left",
            "closeable": false,
            "round": false,
            "close-icon": 'close',
            "close-on-click-overlay": false,
            "get-container": "#app"
          }
        }
      ],
      baseData:{
        flexTestData: {
          A: "http://juggle.isjs.cn/mock/demoImg/flexTest8.png"
        }
      }
    },
    {
      name: '唤起弹窗',
      templateId: 'PublicBubble',
      description: '点击唤出页面弹窗',
      develop: 'isjs.cn',
      options:[
        {
          key: 'bubbleProp',
          type: 'text',
          defaultValue: '弹窗测试'
        },
        {
          key: 'dataKeyChain',
          type: 'text',
          defaultValue: 'flexTestData,A'
        },
        {
          key: 'styleOptions',
          type: 'text',
          defaultValue: {
            display: 'none'
          }
        }
      ],
      baseData:{
        flexTestData: {
          A: "http://juggle.isjs.cn/mock/demoImg/flexTest8.png"
        }
      }
    }
  ],
  blockCom:[
    {
      name: '轮播图',
      templateId: 'BlockSwiper',
      description: '轮播图组件，用来滚动播放图片/文字',
      develop: 'isjs.cn',
      options:[
        {
          key: 'swiperProp',
          type: 'json',
          defaultValue: '{"autoplay": 3000,"duration": 2000,"initial-swipe": 1,"loop": true}',
          refer:'https://youzan.github.io/vant/#/zh-CN/swipe'
        },
        {
          key: 'swiperType',
          type: 'select',
          value: 'img,text',
          defaultValue: 'img'
        },
        {
          key: 'dataKeyChain',
          type: 'text',
          defaultValue: 'bannerList'
        },
        {
          key: 'styleOptions',
          type: 'text',
          defaultValue: ''
        }
      ],
      baseData:{
        bannerList: [
          "http://juggle.isjs.cn/mock/demoImg/bannerTest1.png",
          "http://juggle.isjs.cn/mock/demoImg/bannerTest2.png",
          "http://juggle.isjs.cn/mock/demoImg/bannerTest3.png",
          "http://juggle.isjs.cn/mock/demoImg/bannerTest4.png"
        ]
      }
    },
    {
      name: '图片块',
      templateId: 'BlockImg',
      description: '懒加载图片，支持底部文字，顶部文字',
      develop: 'isjs.cn',
      options:[
        {
          key: 'text',
          type: 'text',
          defaultValue: '文字介绍'
        },
        {
          key: 'dataKeyChain',
          type: 'text',
          defaultValue: 'flexTestData,A'
        },
        {
          key: 'styleOptions',
          type: 'text',
          defaultValue: ''
        }
      ],
      baseData:{
        flexTestData: {
          A: "http://juggle.isjs.cn/mock/demoImg/flexTest8.png"
        }
      }
    },
    {
      name: '图文商品块',
      templateId: 'BlockImgCard',
      description: '图文商品块儿',
      develop: 'isjs.cn',
      options:[
        {
          key: 'dataKeyChain',
          type: 'text',
          defaultValue: ''
        },
        {
          key: 'styleOptions',
          type: 'text',
          defaultValue: ''
        }
      ],
      baseData:{
        num: 200,
        price: '200',
        desc: '描述信息描述信息',
        title: '商品名称',
        thumb: 'http://juggle.isjs.cn/mock/demoImg/flexTest22.png',
        tags: ['折扣','首发'],
      }
    }
  ],
  container:[
    {
      name: '等分容器(一)',
      templateId: 'ContainerFlexBox',
      description: '作为页面布局使用，支持内嵌各种组件',
      develop: 'isjs.cn',
      options:[
        {
          key: 'title',
          type: 'text',
          defaultValue: ''
        },
        {
          key: 'subTitle',
          type: 'text',
          defaultValue: ''
        },
        {
          key: 'flexOptions',
          type: 'obj',
          defaultValue: [
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
                    "styleOptions": {}
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
            }
          ]
        }
      ],
      baseData:{
        flexTestData: {
          A: "http://juggle.isjs.cn/mock/demoImg/flextest2.png",
          B: "http://juggle.isjs.cn/mock/demoImg/flextest3.png",
          C: "http://juggle.isjs.cn/mock/demoImg/flextest4.png",
          D: "http://juggle.isjs.cn/mock/demoImg/flextest5.png",
          E: "http://juggle.isjs.cn/mock/demoImg/flextest1.png"
        }
      }
    },
    {
      name: '等分容器(二)',
      templateId: 'ContainerFlexBox',
      description: '作为页面布局使用，支持内嵌各种组件',
      develop: 'isjs.cn',
      options:[
        {
          key: 'title',
          type: 'text',
          defaultValue: '每日优选'
        },
        {
          key: 'subTitle',
          type: 'text',
          defaultValue: '日常版の造物节'
        },
        {
          key: 'flexOptions',
          type: 'obj',
          defaultValue: [
            {
              "rowName": "第一行",
              "rowProp":{
                "gutter": 2,
                "type": "flex",
                "align":"center",
                "justify": "center"
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
                    "styleOptions": {
                      "maxHeight": "116px"
                    }
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,F",
                    "styleOptions": {
                      "maxHeight": "116px"
                    }
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
                    "styleOptions":{}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,J",
                    "styleOptions":{}
                  }
                },
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,I",
                    "styleOptions":{}
                  }
                }
              ],
              "styleOptions":{}
            }
          ]
        }
      ],
      baseData:{
        flexTestData: {
          A: "http://juggle.isjs.cn/mock/demoImg/flextest2.png",
          B: "http://juggle.isjs.cn/mock/demoImg/flextest3.png",
          C: "http://juggle.isjs.cn/mock/demoImg/flextest4.png",
          D: "http://juggle.isjs.cn/mock/demoImg/flextest5.png",
          E: "http://juggle.isjs.cn/mock/demoImg/flextest1.png",
          F: "http://juggle.isjs.cn/mock/demoImg/flextest6.png",
          G: "http://juggle.isjs.cn/mock/demoImg/flextest7.png",
          H: "http://juggle.isjs.cn/mock/demoImg/flexTest8.png",
          I: "http://juggle.isjs.cn/mock/demoImg/flexTest9.png",
          J: "http://juggle.isjs.cn/mock/demoImg/flexTest10.png"
        }
      }
    },
    {
      name: 'tab容器',
      templateId: 'ContainerTab',
      description: '标签页切换容器，支持内嵌各种组件',
      develop: 'isjs.cn',
      options:[
        {
          key: 'defaultActive',
          type: 'text',
          defaultValue: 1
        },
        {
          key: 'tabsProp',
          type: 'obj',
          defaultValue: {
            "background": "#fff",
            "line-height": "2px",
            "animated": true,
            "border": true,
            "sticky": false,
            "swipeable": true
          }
        },
        {
          key: 'tabsOptions',
          type: 'obj',
          defaultValue: [  //选项列表，数组中由几个对象就有几个标签
            {
              "tabTitle": "热卖单品1",  //tab标题
              "childItem": [   //tab内容，可以自由组合
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "热卖单品1",
                    "dataKeyChain": "flexTestData,A",
                  }
                }
              ],
              "styleOptions":{}
            },
            {
              "tabTitle": "热卖单品2",  //tab标题
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "text": "热卖单品2",
                    "dataKeyChain": "flexTestData,B",
                  }
                }
              ],
              "styleOptions":{}
            }
          ]
        }
      ],
      baseData:{
        flexTestData: {
          A: "http://juggle.isjs.cn/mock/demoImg/bannerTest1.png",
          B: "http://juggle.isjs.cn/mock/demoImg/bannerTest2.png",
        }
      }
    },
    {
      name: '列表容器(内部数据)',
      templateId: 'ContainerList',
      description: '瀑布流列表容器，支持内嵌各种组件，支持独立获取数据',
      develop: 'isjs.cn',
      options:[
        {
          key: 'listProp',
          type: 'obj',
          defaultValue: {
            "loading-text": "加载中...",
            "finished-text": "",
            "error-text": "请求失败，刷新页面重新加载",
            "error.sync": true,
          }
        },
        {
          key: 'dataKeyChain',
          type: 'text',
          defaultValue: 'listTestData'
        },
        {
          key: 'styleOptions',
          type: 'text',
          defaultValue: ''
        }
      ],
      baseData:{
        listTestData: [
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest22.png",
            "num": "4",
            "price": "100.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest21.png",
            "num": "2",
            "price": "98.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest20.png",
            "num": "5",
            "price": "8.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest17.png",
            "num": "50",
            "price": "88.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest16.png",
            "num": "4",
            "price": "100.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest15.png",
            "num": "2",
            "price": "98.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          }
        ]
      },
      childItem:[
        {
          "templateId": "BlockImgCard",
          "prop": {
            "dataKeyChain": "",
            "styleOptions":{}
          }
        }
      ]
    },
    {
      name: '列表容器(外部数据)',
      templateId: 'ContainerList',
      description: '瀑布流列表容器，独立获取数据',
      develop: 'isjs.cn',
      options:[
        {
          key: 'listProp',
          type: 'obj',
          defaultValue: {
            "loading-text": "加载中...",
            "finished-text": "",
            "error-text": "请求失败，刷新页面重新加载",
            "error.sync": true,
          }
        },
        {
          key: 'dataSource',
          type: 'obj',
          defaultValue: {
            "query": {
              "publishStatus":"3"
            },
            "origin": {
              "originUrl": "http://juggle.isjs.cn/mock/0002.json",
              "originMethod": "get",
              "dataKeyChain": "listTestData"
            }
          }
        },
        {
          key: 'styleOptions',
          type: 'text',
          defaultValue: ''
        }
      ],
      baseData:{
        listTestData: [
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest22.png",
            "num": "4",
            "price": "100.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest21.png",
            "num": "2",
            "price": "98.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest20.png",
            "num": "5",
            "price": "8.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest17.png",
            "num": "50",
            "price": "88.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest16.png",
            "num": "4",
            "price": "100.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          },
          {
            "thumb": "http://juggle.isjs.cn/mock/demoImg/flexTest15.png",
            "num": "2",
            "price": "98.00",
            "title": "这里是商品名称",
            "tags": ["北京", "有货"],
            "desc": "这里是产品说明，产品说明，产品说明，产品说明"
          }
        ]
      },
      childItem:[
        {
          "templateId": "BlockImgCard",
          "prop": {
            "dataKeyChain": "",
            "styleOptions":{}
          }
        }
      ]
    }
  ],
  formCom:[],
  actionCom:[],
};
export default ComponentsObj;
