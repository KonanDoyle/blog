module.exports = {
    "title": "zealsay说你想说",
    "description": "zealsay说你想说,是一个关注于互联网、IT技术经验分享的个人独立博客。专注于IT行业最前沿的技术。致力成为互联网上最个性、最极客、具传播力的个人独立博客。",
    "dest": "dist",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "https://pan.zealsay.com/blog/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ],
        ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
    ],
    "locales": {
        "/": {
            "lang": 'zh-CN'
        }
    },
    // "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "关于",
                "link": "/about/",
                "icon": "reco-account"
            }
        ],
        "type": "blog",
        "sidebar": 'auto',
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "博客"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "valineConfig": {
            "appId": "xxx",// your appId
            "appKey": "xxx", // your appKey
            "avatar": "", //
            "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
            "requiredFields": ['nick', 'mail'], //设置必填项
        },
        "logo": "/logo.png",
        // "huawei": true, //首页出现华为文案
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "李白",
        "authorAvatar": "https://pan.zealsay.com/avatar/20200606105310570000000.jpg",
        "record": "你的备案号 ", //icp备案
        "startYear": "2020",
        "info": "两名为梦而战的准程序员",
        "mottos": [{
            "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
            "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
        },
            {
                "zh": "年轻就是无限的可能。",
                "en": "Youth means limitless possibilities."
            },
            {
                "zh": "真正的梦就是现实的彼岸。",
                "en": "Real dream is the other shore of reality."
            },
            {
                "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
                "en": "Don't worry about the vague future, just strive for the clear present."
            },
            {
                "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
                "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
            }, {
                "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
                "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
            },
            {
                "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
                "en": "Life without regret, we can only do our best to not to regret."
            }
        ],
        "covers": [
            'https://pan.zealsay.com/zealsay/cover/7.jpg',
            'https://pan.zealsay.com/zealsay/cover/1.jpg',
            'https://pan.zealsay.com/zealsay/cover/2.jpg',
            'https://pan.zealsay.com/zealsay/cover/3.jpg',
            'https://pan.zealsay.com/zealsay/cover/4.jpg',
            'https://pan.zealsay.com/zealsay/cover/5.jpg',
            'https://pan.zealsay.com/zealsay/cover/6.jpg'
        ],
        "codeTheme": "tomorrow"
    },
    "markdown": {
        "lineNumbers": false
    },
    plugins: [
        ['@vuepress-reco/vuepress-plugin-pagation', {
            perPage: 8
        }],
        [
            require('./plugins/BgMusic'),
            {
                audios: [
                    {
                        name: '我再没见过 像你一般的星空',
                        artist: 'Seto',
                        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                    },
                    {
                        name: '萤火之森',
                        artist: 'CMJ',
                        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                    }
                ]
            }
        ],
        ["sakura", {
            num: 10,  // 默认数量
            show: true,
            zIndex: 2,
            img: {
                replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: 'https://www.zpzpup.com/assets/image/sakura.png'     // 绝对路径
            }
        }],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功"
            }
        }],
        [
            "dynamic-title",
            {
                showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
                showText: "欢迎回来 O(∩_∩)O~",
                hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
                hideText: "失联中。。。快回来~",
                recoverTime: 2000
            }
        ],
    ]
    // configureWebpack: (config, isServer) => {
    //   if (!isServer) {
    //     // 修改客户端的 webpack 配置
    //     config.output.publicPath = config.mode === 'production'
    //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
    //       : '/';
    //     config.output.filename = "assets/js/[name].js";
    //   }
    // }
}