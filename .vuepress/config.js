module.exports = {
  title: "橘猫DA-record",
  description: 'This is my blog.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  mode: 'dark',
  themeConfig: {
    mode: 'dark',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '说明文件', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: '联系', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/V-azure', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        // 'theme',
        // 'plugin',
        // 'api',
        // 'First_Blog'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
      {
        title: '2022年6月26日下午16点24分',
        date: '2022-6-26',
        desc: '欲穷千里目，更上一层楼',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'v-azure',
    // 作者头像
    authorAvatar: '/da.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['123456'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'HJ7Ae1VIoNuLmTxcSAe6hN56-gzGzoHsz',// your appId
      appKey: 'TlDozOtMyOKKCemKmhhysLQp', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress-reco/comments', {
    solution: 'valine',
    options: {
      appId: 'HJ7Ae1VIoNuLmTxcSAe6hN56-gzGzoHsz',// your appId
      appKey: 'TlDozOtMyOKKCemKmhhysLQp', // your appKey
      idVal: "", //记录浏览数的 id 值
    }
  }],
  [
    //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)",
      hideIcon: "/failure.ico",
      hideText: "0.0",
      recoverTime: 2000
    }
  ],
  [
    //图片放大插件 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    '@vuepress/plugin-medium-zoom', {
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 24,
        background: 'rgba(25,18,25,0.9)',
        scrollOffset: 40
      }
    }
  ],
  [//公告
    '@vuepress-reco/vuepress-plugin-bulletin-popover', 
    {
    width: '300px', // 默认 260px
    title: '消息提示',
    body: [
      {
        type: 'title',
        content: '🎉🎉🎉🎉🎉🎉🎉🎉🎉',
        style: 'text-aligin: center;'
      }
//       {
//         type: 'image',
//         src: 'https://img-blog.csdnimg.cn/a4a0f0e0e77f4d6a996b3366f1f82b80.gif'
//       }
    ],
    // footer: [
    //   {
    //     type: 'button',
    //     text: '打赏',
    //     link: '/donate'
    //   },
    // ]
    }
  ],
  [//livev2d看板
    //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      clean: false,
      messages: {
        welcome: '我是v-azure欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
      },
      width: 120,
      height: 176
    }
  ],
  [//音乐播放器
    "@vuepress-reco/vuepress-plugin-bgm-player",
    {
      autoShrink: true,
      audios: [
        // // 本地文件示例
        {
          name: '~Moonlight~',
          artist: 'qunxing',
          url: 'http://m10.music.126.net/20221013084040/dfb7406bd65e851755610a4ca14660d6/ymusic/5f16/ec1e/66dc/2efe3329502f3af516ddf581384ee764.mp3',
          cover: 'https://p.qpic.cn/music_cover/vWuLw7pgtD9Rts157EocyOw4f97nHqtjibqmmDYhbu0FOU638Jb50mg/600?n=1'
        },
        {
          name: 'Starlight',
          artist: 'qunxing~~',
          url: 'http://music.163.com/song/media/outer/url?id=470759406.mp3',
          cover: 'https://p.qpic.cn/music_cover/vWuLw7pgtD9Rts157EocyOw4f97nHqtjibqmmDYhbu0FOU638Jb50mg/600?n=1'
        },
        {
          name: '暮',
          artist: 'qunxing~',
          url: 'http://dl.stream.qqmusic.qq.com/C400001SuSA23ERqQt.m4a?guid=8854785500&vkey=AF0E5627C7AB5037D2A37F0AC7A2E737DE81F749AD04AB2A95D4C4C608B3266F88B510A7179E878FAA8339699267B79F04DFF9C8AF517DD5&uin=2265573522&fromtag=120032',
          cover: 'https://qpic.y.qq.com/music_cover/T2OqbOVT5ryibRfDeIEwM4ynwSx8z0OBt04IEeOMcGtHoxAWzttJFqw/300?n=1'
        },
        {
          name: 'の海',
          artist: 'qunxing~~~',
          url: 'http://dl.stream.qqmusic.qq.com/C400000w1Oiw3Jb75n.m4a?guid=6051912611&vkey=29DAA1706CC76081A60887C7ED82328C98BD89CD34FDD7C53611C90C932492D0E80005A82C54328CA8C70161C3C4E5CEE746E1C1DD3EA6A5&uin=2265573522&fromtag=120032',
          cover: 'https://qpic.y.qq.com/music_cover/jPL7qibTISvFQrXUASOvnA66ntFTgMpZxHCt4bIoqsDysXQnZ2AsV2Q/300?n=1'
        },
        {
          name: '-Elementary-',
          artist: 'qunxing~~~~',
          url: 'http://dl.stream.qqmusic.qq.com/C400004F4TWY4Mnxpy.m4a?guid=844919640&vkey=76022CEAB4BE440C25104687A68A0999AB97D58B92437402266678320DA4CCD5E65A23979280A882705B309BF8557117897D5DDDEBFBD83C&uin=2265573522&fromtag=120032',
          cover: 'https://qpic.y.qq.com/music_cover/ibbVbLpvGneuCTGllFTjO6QUxYU5T0ibjBcp2U2ZqxtO7SgH4xR0kNIA/300?n=1'
        }
      ] 
    }
  ],
  [//鼠标点击效果
    'cursor-effects', 
  {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  }
  ],
  [//功能和代码演示插件
    '@vuepress-reco/extract-code'
  ],
  [//加载页面
    '@vuepress-reco/vuepress-plugin-loading-page'
  ],
  [
    '@vuepress-reco/vuepress-plugin-pagation'
  ],
  ["sakura", {
    num: 20,  // 默认数量
    show: true, //  是否显示
    zIndex: 10,   // 层级
    img: {
      replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...'     // 绝对路径
    }     
}]
]
}  
