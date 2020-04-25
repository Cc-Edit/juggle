/**
 * 组件列表
 * */
const ComponentsObj = {
  publicCom:[
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
    }
  ],
  blockCom:[],
  container:[],
  formCom:[],
  actionCom:[],
};
export default ComponentsObj;
