// eslint-disable-next-line no-unused-vars
var __pageConfig__ = {
  "pageTitle": "Juggle",
  "author": "文强",
  "PM": "文强",
  "createData": "20191109",
  "bodyStyle":{},
  "pageConfig": {
    "dataSource":{
      "query": {
        "publishStatus":"3"
      },
      "origin": {
        "originUrl": "http://juggle.isjs.cn/mock/0001.json",
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
            "marginBottom": "10px",
            "padding": "5px 0 10px",
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
          ],
          "styleOptions":{}
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
                    "styleOptions":{
                      "maxHeight": "116px"
                    }
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
                    "styleOptions":{
                      "height": "115px",
                      "overflow": "hidden"
                    }
                  }
                }
              ],
              "styleOptions":{
                "paddingBottom":"0px"
              }
            },
            {
              "rowName": "第二行",
              "rowProp":{
                "gutter": 4,
                "justify": "space-around"
              },
              "colProp": {
                "0":{
                  "span": 6
                },
                "1":{
                  "span": 18
                }
              },
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,S",
                    "styleOptions":{
                      "maxHeight": "125px"
                    }
                  }
                },
                {
                  "templateId": "ContainerFlexBox",
                  "prop": {
                    "flexOptions": [
                      {
                        "rowName": "第一行",
                        "rowProp":{
                          "gutter": 4,
                          "justify": "space-around"
                        },
                        "colProp": {
                          "0":{
                            "span": 6
                          },
                          "1":{
                            "span": 6
                          },
                          "2":{
                            "span": 6
                          },
                          "3":{
                            "span": 6
                          }
                        },
                        "childItem": [
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,L",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          },
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,N",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          },
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,Q",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          },
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,O",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          }
                        ],
                        "styleOptions":{
                          "paddingBottom":"2px",
                          "backgroundColor": "#9E9B9B",
                        }
                      },
                      {
                        "rowName": "第二行",
                        "rowProp":{
                          "gutter": 4,
                          "justify": "space-around"
                        },
                        "colProp": {
                          "0":{
                            "span": 6
                          },
                          "1":{
                            "span": 6
                          },
                          "2":{
                            "span": 6
                          },
                          "3":{
                            "span": 6
                          }
                        },
                        "childItem": [
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,Q",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          },
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,O",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          },
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,N",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          },
                          {
                            "templateId": "BlockImg",
                            "prop": {
                              "dataKeyChain": "flexTestData,L",
                              "styleOptions":{
                                "maxHeight": "60px"
                              }
                            }
                          }
                        ],
                        "styleOptions":{
                          "backgroundColor": "#9E9B9B",
                          "paddingBottom":"0px"
                        }
                      }
                    ],
                    "styleOptions":{
                      "width": "100%"
                    }
                  }
                }
              ],
              "styleOptions":{
                "paddingTop":"4px",
                "paddingBottom":"0px",
                "backgroundColor": "#9E9B9B",
              }
            }
          ],
          "styleOptions":{
            "width": "100%",
            "marginTop": "10px"
          }
        }
      },
      {
        "templateId": "ContainerTab",
        "prop": {
          "defaultActive": 0,
          "tabsProp":{
            "background": "#fff",
            "line-height": "2px",
            "animated": true,
            "border": true,
            "sticky": true,
            "swipeable": true
          },
          "tabsOptions": [
            {
              "tabTitle": "热卖单品",
              "childItem": [
                {
                  "templateId": "ContainerList",
                  "prop": {
                    "listProp":{
                      "loading-text": "加载中...",
                      "finished-text": "",
                      "error-text": "请求失败，刷新页面重新加载",
                      "error.sync": true,
                    },
                    "dataKeyChain": "listTestData",
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
              ],
              "styleOptions":{}
            },
            {
              "tabTitle": "异步数据",
              "childItem": [
                {
                  "templateId": "ContainerList",
                  "prop": {
                    "listProp":{
                      "loading-text": "加载中...",
                      "finished-text": "",
                      "error-text": "请求失败，刷新页面重新加载",
                      "error.sync": true,
                    },
                    "dataSource":{
                      "query": {
                        "publishStatus":"3"
                      },
                      "origin": {
                        "originUrl": "http://juggle.isjs.cn/mock/0002.json",
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
              ],
              "styleOptions":{}
            },
            {
              "tabTitle": "嵌套Tab",
              "childItem": [
                {
                  "templateId": "ContainerTab",
                  "prop": {
                    "defaultActive": 0,
                    "tabsProp":{
                      "background": "#fff",
                      "line-height": "2px",
                      "animated": true,
                      "border": true,
                      "sticky": false,
                      "swipeable": true
                    },
                    "tabsOptions": [
                      {
                        "tabTitle": "测试1",
                        "childItem": [
                          {
                            "templateId": "ContainerTab",
                            "prop": {
                              "defaultActive": 0,
                              "tabsProp":{
                                "background": "#fff",
                                "line-height": "2px",
                                "animated": true,
                                "border": true,
                                "sticky": false,
                                "swipeable": true
                              },
                              "tabsOptions": [
                                {
                                  "tabTitle": "测试1.1",
                                  "childItem": [],
                                  "styleOptions":{}
                                },
                                {
                                  "tabTitle": "测试1.2",
                                  "childItem": [],
                                  "styleOptions":{}
                                }
                              ],
                              "styleOptions":{
                                "marginTop": "10px"
                              }
                            }
                          }
                        ],
                        "styleOptions":{}
                      },
                      {
                        "tabTitle": "测试2",
                        "childItem": [],
                        "styleOptions":{}
                      },
                      {
                        "tabTitle": "测试3",
                        "childItem": [],
                        "styleOptions":{}
                      },
                    ],
                    "styleOptions":{
                      "marginTop": "10px"
                    }
                  }
                }
              ],
              "styleOptions":{}
            },
            {
              "tabTitle": "嵌套入口",
              "childItem": [
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
                      "marginBottom": "10px",
                      "padding": "5px 0 10px",
                    }
                  }
                }
              ],
              "styleOptions":{}
            },
            {
              "tabTitle": "嵌套容器",
              "childItem": [
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
                    ],
                    "styleOptions":{}
                  }
                }
              ],
              "styleOptions":{}
            },
            {
              "tabTitle": "嵌套图片",
              "childItem": [
                {
                  "templateId": "BlockImg",
                  "prop": {
                    "dataKeyChain": "flexTestData,N",
                    "styleOptions":{}
                  }
                },
              ],
              "styleOptions":{}
            }
          ],
          "styleOptions":{
            "marginTop": "10px"
          }
        }
      },
      {
        "templateId": "PublicBubble",
        "prop": {
          "bubbleProp":{
            "showText": "弹窗测试"
          },
          "dataKeyChain": "flexTestData,A",
          "styleOptions":{
            "bottom": "100px",
            "right": "0"
          }
        }
      },
      {
        "templateId": "PublicDraw",
        "prop": {
          "drawProp":{
            "position": "left",
            "closeable": false,
            "round": false,
            "close-icon": 'close',
            "close-on-click-overlay": false,
            "get-container": "#app"
          },
          "showButton": true,
          "successButtonText": "确定",
          "cancelButtonText": "取消",
          "drawStyle":{
            "width": "60%",
            "height": "100%",
            "overflow": "scroll"
          },
          "queryOptions":[
            {
              "queryType": "select",
              "key": "accountType",
              "name": "账户名称",
              "type": "radio",
              "span": "10",
              "subItem": [
                { "name": "不限", "value": "-1" },
                { "name": "收款", "value": "1" },
                { "name": "购车", "value": "2" },
                { "name": "日常", "value": "3" }
              ]
            },
            {
              "queryType": "select",
              "key": "y_flag",
              "name": "状态2",
              "type": "radio",
              "span": "22",
              "subItem": [
                { "name": "全部", "value": "-1" },
                { "name": "111111111(2日内)", "value": "6" },
                { "name": "222222222(2日内)", "value": "5" }
              ]
            },
            {
              "queryType": "select",
              "key": "ex_funds",
              "name": "状态1",
              "type": "checkbox",
              "span": "22",
              "subItem": [
                { "name": "全部", "value": "-1" },
                { "name": "奥术大师多(2日外)", "value": "8" },
                { "name": "驱蚊器翁(2日外)", "value": "7" },
                { "name": "维尔给对方", "value": "9" },
                { "name": "热特点V型", "value": "10" }
              ]
            }
          ],
          "styleOptions":{},
        },
        "childItem": [
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
    ]
  }
};