/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c2631f82effd5b9815a2ea883afe104f"],["/archives/2019/10/index.html","25cef90e4770d0790571f6527a57a92d"],["/archives/2019/11/index.html","730540c44e174e9b74c1bc18346c9e61"],["/archives/2019/12/index.html","c587993d9b67699ba027578d7fb8344a"],["/archives/2019/index.html","2aabe34e980ca193b33c51ff78995a2b"],["/archives/2020/01/index.html","6fc492446eec6ed387e2eb023471d5e1"],["/archives/2020/02/index.html","9726052094afa4b9fe3cdf00f1baeb83"],["/archives/2020/index.html","b2d92cd53d857d9761cc36c7fa15a147"],["/archives/2020/page/2/index.html","6af89d7fe03b20768d805be588530479"],["/archives/index.html","5338208c3350e1d36ff3b7a5f6c87f70"],["/archives/page/2/index.html","469cba0b873b52dfa6323aa8bbff31be"],["/archives/page/3/index.html","6f7eb38bd3ceb143538949d9ab6c97c7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1b80632336a49923dd277a69b6cf4eff"],["/categories/C语言/index.html","0d0c43cb550bd0a3f56e8dcf72f47042"],["/categories/C语言/数据结构/index.html","9b5e4765655563958199694d417a7f1b"],["/categories/Hexo/index.html","3f39253530297247d2cc360e059cb478"],["/categories/Mac/Qt/index.html","c2b853d8b2fbac0ea9cf5cf644235806"],["/categories/Mac/index.html","6286995476e9a528c2f4854abc645393"],["/categories/index.html","cd83d82e114df67c795eef5651f94b17"],["/categories/数据结构/C/Java/Python/index.html","1d4fa64927a718a1bb9b73a6da0aba71"],["/categories/数据结构/C/Java/Python/排序/index.html","9bc790fdeb493e95ac574bb771ff5c52"],["/categories/数据结构/C/Java/index.html","f5f821dee88b1bfa3d96a812a49571a9"],["/categories/数据结构/C/index.html","79997723eca181d15870d0725c960e39"],["/categories/数据结构/C/page/2/index.html","835b5816fdb5701b188941cd2c020710"],["/categories/数据结构/C/双向循环链表/index.html","42adc9120d78c21e216210ed5a1f81c2"],["/categories/数据结构/C/双向链表/index.html","c59f4f5d15df3682abbe24f124a0af25"],["/categories/数据结构/C/顺序存储结构/index.html","5195b902e00672ebbf9e0f0d7e2c4c11"],["/categories/数据结构/index.html","babe1bf1a149b17a9e51502ccff5ca8c"],["/categories/数据结构/page/2/index.html","36250a5e8a31597100860382b3ba8143"],["/categories/玩转Mac/index.html","d9bab5d435be72115fd90d7435c3e8d2"],["/categories/链式栈/index.html","c4a5017394e164c2553a69ffe4ec69d1"],["/categories/链式栈/数据结构/index.html","cffa05627daca5cf138481faaa02467c"],["/categories/顺序栈/index.html","11aa5af1ca84d6ac6ce17d1231e8a097"],["/categories/顺序栈/数据结构/index.html","1f1332784804f47df1407d00c1f8aa16"],["/categories/顺序队列/index.html","72c1be295ae6e21bdd1fd021664569af"],["/categories/顺序队列/数据结构/index.html","2a1249f693c2111d370f0cd93d4df981"],["/css/main.css","f8e79c27d47c34f7da91491741e57551"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e294c2c2996056b8137d908c6a8c06b9"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7305a264a56eefe511fce041ee17bf1a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5fdba433d0a566eabdea52aff1369ec1"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c3814cc5d7b47dcda6beb149b3de77fe"],["/js/src/algolia-search.js","7927b7599c2d2a6713cdfa987e752a1d"],["/js/src/bootstrap.js","9eb8305174c9a9d4d2a2ce2c09562dfa"],["/js/src/bubble.js","516f485d3a8e094c44c89dbd2a55d6d5"],["/js/src/clipboard-use.js","779f6bef40e99901aab95142f8c2d1f9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a2d850469ab7c1edb99449ec29d6dd16"],["/js/src/exturl.js","5075b369dd973a6b10b5d8d5e0ecb061"],["/js/src/hook-duoshuo.js","c34fe478048d4eaaa8bf579f3bc3ee4e"],["/js/src/js.cookie.js","58ab4f45cf6b9c80932f344df7022289"],["/js/src/linkcard.js","9b207ba7b0d43c3ab11c07ce4118e50f"],["/js/src/motion.js","f663dc1306b02f4a656cfad00a81b764"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","2825c546c01b919a7f42d779a7e41360"],["/js/src/schemes/pisces.js","7fc3e2d5b15e1a0f11b1e9564f7e7af6"],["/js/src/scroll-cookie.js","71c94bbedabeaea8c3612f7aacd5afd1"],["/js/src/scrollspy.js","868e2c12125a858d3e58d05e3b3d6a54"],["/js/src/utils.js","40a7ef50b6933346bd29a16fc2af5e6c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","14716b4228c9a4e89703eb8b4813992a"],["/lib/Han/dist/han.js","6548783d4aafcc9e4486997135081200"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0ca2e7dd70ecffd86c8af116ff605d59"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ef50e8e3a0ceab2d06009b3b8d190c51"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0240dfc7db2dec7bdf88a67b7aa5f103"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a65dfd35acc5c079522f7a89edabe24d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f1b45242e2ec914ce637d6b11a332d73"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4330f6e96a923a1d1311e093cc3bbfc8"],["/lib/fancybox/source/jquery.fancybox.css","9987d8824025aa2788c847f053b354ff"],["/lib/fancybox/source/jquery.fancybox.js","77f239ec190efd50ccad087784291ef6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","83c0d5a38ef00415d7b8c9e7739235cf"],["/lib/fastclick/lib/fastclick.js","5c61a1742a12703096370e207f63c115"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a38e885d7e0a8c40bc704407998f73a2"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","14ab3dbd6cecbbcb6aaeeb8d6a9f8db0"],["/lib/jquery_lazyload/README.html","c3bdd2647cc0515685cac7be58667a96"],["/lib/jquery_lazyload/jquery.lazyload.js","9b1f1d1b3de54f9ef2741bd39d177df5"],["/lib/jquery_lazyload/jquery.scrollstop.js","2fd275cc1c018661079d0619959eb753"],["/lib/needsharebutton/font-embedded.css","253dd83ddb7c8d4761ae00bd0351068f"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f8ed6ede69b4a28bfd3b19e752596a24"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","26143d046083b5747db4c998101c7428"],["/lib/velocity/velocity.js","b0a41e961073dafd29df6ac768e6aebe"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","323914bf8d3bbafd40d14ffe9edc46f5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","abc94610b1d5eaa0ff272fcd3fac1d43"],["/links/index.html","dec2909a43c47584d8c6b8c077f13f64"],["/live2d-widget/README.html","2cc2a2d0cf09fe353af069d1736d36ee"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","3d9a044cab82cb910bfa3c002fd8c93e"],["/live2d-widget/demo/demo1.html","c32565287e5a7408d7bd415834e944b0"],["/live2d-widget/demo/demo2.html","5773a8f43ac5b275371cc0aba1b5d95d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","b37a4ba33c4b394666bfa25e77aa4cab"],["/movies/index.html","42aea64b45f8cd4f4032a38c3f2d093b"],["/music/index.html","a19c2a3abdb250f2facf6e3e28483fed"],["/page/2/index.html","ad8d3c7cba81c443ebcfc6771e77de05"],["/page/3/index.html","bd4eb6051bb151ad05a5bc3114dbc844"],["/page/4/index.html","e8de6e73b96591edfd720018e331fe66"],["/photos/index.html","31b784a6de304fbad566041560fe859c"],["/posts/14311.html","bc81441b3482279da2289d76afb9bfc1"],["/posts/15468.html","a30554c9519887fffdd387e6844b61cf"],["/posts/16107.html","0abc36874721493d75e56c8f2195fec0"],["/posts/201e1121.html","f18986cd5fe58a1d0cd8584988ba19aa"],["/posts/20352.html","a817bfefa3e68b50068da7517d0598a8"],["/posts/21238.html","b029b70090b43b40b9474ecc9e5f9f53"],["/posts/22281.html","35a98e59940cb584e633295a099b9c78"],["/posts/278598dc.html","c54b518ae748c8cc2aa915e7722057be"],["/posts/2d063bc3.html","37a72c3f590d9e9f63f0187deb806f0d"],["/posts/30c404a6.html","1296b09ce2b4ef3b5c70e6efbf0de1cd"],["/posts/51203.html","04fbc827a80ccef821097e19effbcdb4"],["/posts/538e5180.html","ff227be226c4439bc3a64bb7311be47a"],["/posts/5394fce7.html","6b92be5aa51f163b844909292997d3d0"],["/posts/59037.html","538963d66dc6cb4e907a89b28ef35f47"],["/posts/60816b5a.html","285e27e89207771c1ad0c53f53c9e0db"],["/posts/6163d4b5.html","759f3e81f6eef68d8b141715979a70cf"],["/posts/69978469.html","6a361cfe7787205dc7e150762fc070d4"],["/posts/6a752619.html","4b3362843bd8248a8a69cd25eba51aee"],["/posts/8cc73e65.html","1b4bedf0d6b3a5514ff5eb8ec5e17acb"],["/posts/9b621d6f.html","eb951a44aad247fbd94e12954c289397"],["/posts/a530f7f0.html","e25f726759dacd510892b5910e15a89e"],["/posts/beb5106a.html","c6bc643497e0e2bc3ae70525377889e8"],["/posts/dd845106.html","d0e728d1f8cc6f5ba7d2f48a5653b989"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","fea6232c9fd70c2e2bd94034fd77049e"],["/tags/C-语言/index.html","c7654786146b8d6d552602cf4f1eb3ea"],["/tags/C/index.html","3d2a7550dca1d1b50e09032c539f061a"],["/tags/C/page/2/index.html","98f01ef1f51ecfff07cb28a6a215c3e1"],["/tags/C语言/index.html","e5cec6fd9282698f93fd87f1c05e293c"],["/tags/Hexo/index.html","be339c7765211c35ab7e5fad0c34843d"],["/tags/Java/index.html","720eb533d9521cb6442cfc3eaa4af3b0"],["/tags/Mac/index.html","aed583defae53d0881428194863ce3ae"],["/tags/Parallels-Desktop/index.html","aa3a1c9cd761d895b168eb168b1920cf"],["/tags/Python/index.html","7153d496384c7dace01d9b9adcb5b3c1"],["/tags/Qt/index.html","87daae602062bc858bd1a8f949da4c18"],["/tags/abbrlink/index.html","1bbfdaee139869ff6b323067359e9d21"],["/tags/index.html","7c87eb3dc524552d10f3f2cbfc49a650"],["/tags/冒泡排序/index.html","da38262cf5d79f1a1dfffae2b3529708"],["/tags/双向循环链表/index.html","cf475b14650feea2e3f77598b7417bc6"],["/tags/双向链表/index.html","0577dad0f5b0c20661ed5a7321eb61a0"],["/tags/希尔排序/index.html","73c28f40574038868aa94236059a6817"],["/tags/插入排序/index.html","fbc74fa625323327173c232ace253cc9"],["/tags/数据结构/index.html","6f983f84c97f1c68c5d2dc0fe7b4ec50"],["/tags/数据结构/page/2/index.html","9f51eac45a660ccecff9a8da1044cc51"],["/tags/杨辉三角/index.html","132be66ef3ed6906eb98d4d819f24398"],["/tags/栈/index.html","fc2a3471d8f1d286a8ecef7eb284a2b5"],["/tags/类模板/index.html","e3077f3a3348573fd296f20cf8fa611c"],["/tags/线性表/index.html","4e92df3cc14cd954ffaec1da8894bac2"],["/tags/选择排序/index.html","956e26a56884d72569618d9d948a61ec"],["/tags/链式栈/index.html","7f47c1ed07b8469e80f1c65b48f4259c"],["/tags/队列/index.html","bdbb72a0b4fa87587157e5c471c236a7"],["/tags/顺序存储结构/index.html","ccf41220af43a528171d930d0a3564dd"],["/top/index.html","9e6f4d34afeb7556c25d1c9fec302e58"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
