/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","15350104e8887d3c2761c285b2cc4eb2"],["/archives/2019/10/index.html","eaab72da09f775d594f227ab085c77c1"],["/archives/2019/11/index.html","b6706129f6bb201e537cf9f1f6c1f318"],["/archives/2019/12/index.html","86dcb1fd59365752dee086af0d53a862"],["/archives/2019/index.html","2f87ae8290f49a8a5c7bdb4ace29fefe"],["/archives/2020/01/index.html","89ca312de09eea185c3c133ff78a906b"],["/archives/2020/02/index.html","fe75dd0812852253d6e9249f4daa51b4"],["/archives/2020/index.html","bb79443708b5c68873c7ff8f1b6655bf"],["/archives/2020/page/2/index.html","dbd8013d117a8a346cfb550084066588"],["/archives/index.html","1b16d7b3b23534202746744e9995bd4c"],["/archives/page/2/index.html","fa4cdc656caaeaa6ddff8885371273bd"],["/archives/page/3/index.html","91a2fbc57dcb9837a25788e3b7d19325"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5796662586ab275421bf7f31c92de220"],["/categories/C语言/index.html","58aefc3e6399a9d02e3aa7fa1d5a8df3"],["/categories/C语言/数据结构/index.html","ce230a01f15eed233ab3dd2a8dd5399d"],["/categories/Hexo/index.html","c47e8227c2493c9718596526589f303f"],["/categories/Mac/Qt/index.html","ae0622fbf42c3179b99565fe1e09f648"],["/categories/Mac/index.html","9df4a94fcc062d04e71d3f1de4932d47"],["/categories/index.html","2accaa4f391ce66aa194a27231dd8b8b"],["/categories/数据结构/C/Java/Python/index.html","7a01bc5d4710464dd73f5338b2c714ba"],["/categories/数据结构/C/Java/Python/排序/index.html","6808589886691da55b829c31b8be7d27"],["/categories/数据结构/C/Java/index.html","b1ce610bebd47060dc1f7e2f0c364c4f"],["/categories/数据结构/C/index.html","b55b1ba7b19e9f69f59849bc5a50e7fd"],["/categories/数据结构/C/page/2/index.html","c3b5f10942ca1ebccb1d114783c9246f"],["/categories/数据结构/C/双向循环链表/index.html","2a882e9b4234c1829d37d736e2f44324"],["/categories/数据结构/C/双向链表/index.html","e5e18cfcd2e8207aa6d4e2c68d515be8"],["/categories/数据结构/C/顺序存储结构/index.html","bbd0cfc40e41fdc61f9afb0e76c4670e"],["/categories/数据结构/index.html","0e07ecb9f23872ad41578f07687f91c2"],["/categories/数据结构/page/2/index.html","c9bd2f6fe16ff24e9ab3a67c11af0704"],["/categories/玩转Mac/index.html","5f7378e274db5fbdd4a5adb89dcdc7bf"],["/categories/顺序栈/index.html","1a13a088a9df9a9d337416f9eb923067"],["/categories/顺序栈/数据结构/index.html","3db950a614d51d45659a0fce9832f77d"],["/css/main.css","090b7c326c84d44a16985f4f090842ae"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d6bae8cfa31142134b3e8829d326497c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","6399aa908812fe02d9f508cb0340ea7e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","80eda421fefa7e45f26669f7a309f857"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e9be906367c7dcbac5746e011a1aff47"],["/js/src/algolia-search.js","8a8e9c39b5a58d8db8f2ce8f4a6851c0"],["/js/src/bootstrap.js","3743035e43f3e3eaef5406339de78fc8"],["/js/src/bubble.js","48bf60b4e6163f259ec9ed93701c5c5d"],["/js/src/clipboard-use.js","28731976f6fd67547b8966cba4727c3c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7b1339d6b7648a9c18196ed17c2ce515"],["/js/src/exturl.js","551ad216d9764234734b3ebcb5fea00d"],["/js/src/hook-duoshuo.js","617c2d035fe6af121ef5e8a5b3b1de21"],["/js/src/js.cookie.js","4b8ecec9e37a86ad64d0915ab2c00fca"],["/js/src/linkcard.js","e08b41bfc7cf15e51abb2aa02a0ccfc1"],["/js/src/motion.js","4822481f73e14803730216f4aa130e20"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","c46bbf527c7a2e41a94accde87ed1c72"],["/js/src/schemes/pisces.js","b57fb85552681070bda0417ffc46465c"],["/js/src/scroll-cookie.js","a8a04124167790b3987cb159373d04e9"],["/js/src/scrollspy.js","ad69ccd5bee74ef9f4ddb52687d5e54a"],["/js/src/utils.js","674180aa0a4de916a7a3bc7be404ada8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","19f48c18e17a6ad3b3e0dce952c7a430"],["/lib/Han/dist/han.js","600ba80876eddace80ef98fff57ff1a5"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","376ec0191e63e6b5f7f599d4f0a86c01"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","27736ad7dd5a75ab7a110884c285f4ad"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c720a06a76f4f89126b00dcfdbb74e8c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","23f3058e404ea8c287d44e7f83b3ab6d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b3312f54b06442f3a374cda258ee01aa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","02ee0bd8c88679ca5f77d04a7bbe147d"],["/lib/fancybox/source/jquery.fancybox.css","3dba63337be64fcebef0394cca661a15"],["/lib/fancybox/source/jquery.fancybox.js","53b0794c44a6a8500e11359cd8dba092"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","13a00df31f186cf5bad17f6b7e68b0f6"],["/lib/fastclick/lib/fastclick.js","01fbf574ee23af62f035c1f0bd99715e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d86df9f35a25d9945efe0769001720bf"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d38846228f4d8af45e3ef029642300b8"],["/lib/jquery_lazyload/README.html","e5cc79fcdc0100f207cc0c2ace01eaa1"],["/lib/jquery_lazyload/jquery.lazyload.js","29b51eac90fd1b5c64eb95c801d54fc9"],["/lib/jquery_lazyload/jquery.scrollstop.js","cb1503ece4cfad07edfc8d5788d6b8b9"],["/lib/needsharebutton/font-embedded.css","56e933e288c4f8464106f29c8da6d479"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","32f668ec6badaf3fc667166603e69405"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e23462792daffed39f0660b1bcebfd80"],["/lib/velocity/velocity.js","4bb4ca34e7f620482c8f936d04aa0c56"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","060dfb47e3a1366abc56d850b70fdd54"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a9297b00de8fb4768491a8ecd45c383d"],["/links/index.html","166d08bccb97e5b19649a2754ac2f650"],["/live2d-widget/README.html","07fbf4c900b9ccdafaf5bc5fe1a7f0f9"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a4be7d347c9ded721958f9da7b240478"],["/live2d-widget/demo/demo1.html","bc9e54aaf4163a926131c88e59221130"],["/live2d-widget/demo/demo2.html","0fcd69dd0fbb399c7013ab5b449b7cf7"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","b40448b450c13ea419defba50bacceb8"],["/movies/index.html","074b896e69de7005c0d52d534ab2a187"],["/music/index.html","1d7279393264ae44fa892169d3f8734a"],["/page/2/index.html","dba9be2ad60391d87ee85cef9612da99"],["/page/3/index.html","f7ca139eb768cf0e6c012a459e0a5591"],["/photos/index.html","6b6ed2eedd4b842e84dbded98173c15e"],["/posts/14311.html","f1116daeb7ed66637b0a6778f80acde6"],["/posts/15468.html","109dedd1f7c5c0cbcc0a67b6479d01f9"],["/posts/16107.html","f3f3900dba08a69078437e8cd6f1fbff"],["/posts/201e1121.html","5ee1e54967861671a1dec785a763214b"],["/posts/20352.html","8bb77b9adac835d1067239c649b95223"],["/posts/21238.html","ea0a5201e62bac6ca8616fd04dd78727"],["/posts/22281.html","4a5fd422a6597da261d525ff8941d67f"],["/posts/278598dc.html","195dae1486dc3096e1c5fc2239b39b1b"],["/posts/30c404a6.html","3cf7af6b4742d8c132aef087c55d3339"],["/posts/51203.html","a127d83202ba4fe37c3560fe966dab3a"],["/posts/538e5180.html","7ce9732eb068ecbb818e3d21852b0287"],["/posts/5394fce7.html","a76584a27ee07becc68e288083d66239"],["/posts/59037.html","7c31937929df90f89ed1e3cbb964435c"],["/posts/60816b5a.html","e5e4b5147cebaeb28ec63ff0f10a592c"],["/posts/69978469.html","165b3b23627244df6aeba48605a9b3da"],["/posts/6a752619.html","f14879bf010aa75644bf2e4e9f919165"],["/posts/8cc73e65.html","cbd255999026eee73351b71efc7694e7"],["/posts/9b621d6f.html","d8dba408ad2e9436471a685f50eb4734"],["/posts/a530f7f0.html","0f6f985e3649cb0758d69726530ac7cb"],["/posts/beb5106a.html","d9a1f3d5a2ce01f13e69cf1d85a28d4b"],["/posts/dd845106.html","6dfd516e3b93a6ccee19dac013d68836"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","830fb3621cddb22e5b7b060963a2d446"],["/tags/C-语言/index.html","6128057b772a0ee84e86b68127bf2cd5"],["/tags/C/index.html","8d160874d997905fba9b1dc8c1060441"],["/tags/C语言/index.html","96b9f37e2feeee0af06737e0cad35a28"],["/tags/Hexo/index.html","fb3a7ac98459d301e6f1f77ea5fe5d4c"],["/tags/Java/index.html","749fe2207ae02c813f51d1a581e6af3a"],["/tags/Mac/index.html","459335cff7a94dc4d1b704b03f2d7897"],["/tags/Parallels-Desktop/index.html","24c7e20dd4fce269f83ff795637d86be"],["/tags/Python/index.html","ae925abdc7be74e3897f40871f66d2f6"],["/tags/Qt/index.html","1bdd4ed05f57491925fa1cfada9f215e"],["/tags/abbrlink/index.html","205093a6cb8835072b10b3bc632c4437"],["/tags/index.html","dee516634985322cec97f60f8bfbfaaa"],["/tags/冒泡排序/index.html","9ba54df91e77f002827f112c948bf8a8"],["/tags/双向循环链表/index.html","1fcb4f44ddde6e38c847d573febcc8d5"],["/tags/双向链表/index.html","181466090547dcbba0abcf635cc3c891"],["/tags/希尔排序/index.html","b01e04f9d92a996a5a5127057f7f409f"],["/tags/插入排序/index.html","cf8efceeec95ea5b0f00af24e2adf0cc"],["/tags/数据结构/index.html","8365dd4ac3298cb2968dfef66fa170a5"],["/tags/数据结构/page/2/index.html","193bc71782f02ea95cf1a56cf0bce42e"],["/tags/杨辉三角/index.html","1807eec1654a44af64022eba849eaeeb"],["/tags/栈/index.html","61aee1f14ff42f4bf02a2594c3fc1ce9"],["/tags/类模板/index.html","69040f26ec1d2f928770c09861b40693"],["/tags/线性表/index.html","a284cf02bdc73e54b28bdbcf768e28ae"],["/tags/选择排序/index.html","c4a06a0f46d04166bec11f3e13f96b33"],["/tags/链式栈/index.html","0bc7f781ad00cf59520447a9796ae1a2"],["/tags/队列/index.html","3e55f0abe32f793d3bde4298e9f8c6f7"],["/tags/顺序存储结构/index.html","a493bce7ea42c7d72adce3e31d5ec8ad"],["/top/index.html","315dceb45442f55ea7b53993a7d96ce7"]];
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
