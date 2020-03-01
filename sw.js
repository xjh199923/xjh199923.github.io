/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","800d5b4192de71df5ff6d095601996b1"],["/archives/2019/10/index.html","696d762092bfc81422d884154dd0690f"],["/archives/2019/11/index.html","286653e6aabc7a5656919ad999c9a9f4"],["/archives/2019/12/index.html","98030b758630157d7b1ce3c2112479d9"],["/archives/2019/index.html","3eb64f741ad260a961bedf43b042b593"],["/archives/2020/01/index.html","7c39e63dfb62fa872741bb226d1c10ef"],["/archives/2020/02/index.html","af7b764191041b90158d37a0b35088fe"],["/archives/2020/03/index.html","ba9e24831513c29ad9c0554216712974"],["/archives/2020/index.html","b5343753b5052d98f07bda9d632e85e5"],["/archives/2020/page/2/index.html","b9998f15ef1a3eba7fb12c46c8db22ae"],["/archives/index.html","5cb44c72c18c156a1ed8509b64b329d2"],["/archives/page/2/index.html","e0307613b2e29aa8e0032fda1eac0b27"],["/archives/page/3/index.html","727f777381cc9891ebdd2829afe5846b"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f13c83c2d57e13ce3d77a9783eb33636"],["/categories/C语言/index.html","89b2664cc463330224fc11a442d598af"],["/categories/C语言/数据结构/index.html","8e628c9fa088d3552b07bbb9a6f51822"],["/categories/Hexo/index.html","48c5c9a77e40e20361609f9173c6188d"],["/categories/Mac/Qt/index.html","c8cff2e7167f6b3512945f3b77c8029b"],["/categories/Mac/Sql-Server/index.html","d1aeabd54bf82fd4cffc5f818d846843"],["/categories/Mac/index.html","0accaef6b7007e275e582f87d8f1466b"],["/categories/index.html","1263396da428af260b22892b26ca9bda"],["/categories/数据结构/C/Java/Python/index.html","2351e3cbbed926371fc546abe9915633"],["/categories/数据结构/C/Java/Python/排序/index.html","fe8577b602a23edd7666a2a602c2f24d"],["/categories/数据结构/C/Java/index.html","7a2569f8dfe035e927071e4d326d43ec"],["/categories/数据结构/C/index.html","59b2d333f22b7d98436183276e338974"],["/categories/数据结构/C/page/2/index.html","b0c66e4d04b36293be2a9c9cc11a266f"],["/categories/数据结构/C/双向循环链表/index.html","6a34437265a95141f38efc3f0b96237d"],["/categories/数据结构/C/双向链表/index.html","ace4f4cdd905c4aa9e7609d95ff24e6d"],["/categories/数据结构/C/顺序存储结构/index.html","97c1499ae76e5a35e6c73d9490e912e4"],["/categories/数据结构/index.html","8e2530c8aaf880371769e5b9d015cc0f"],["/categories/数据结构/page/2/index.html","847aa260b0a42d1a9132c25d63048df0"],["/categories/玩转Mac/index.html","9b4442250af6db8188ccb55b40f80141"],["/categories/链式栈/index.html","f1f1afcebdeb2d4dc8e24b27add45365"],["/categories/链式栈/数据结构/index.html","0c5ee1e8c7f098db095c25d83d3c8d1b"],["/categories/顺序栈/index.html","9180aae805a05fe1d215192e2672c7b0"],["/categories/顺序栈/数据结构/index.html","1747e7d4e522c2f42aff2e28e94c97dc"],["/categories/顺序队列/index.html","2f43ff2e800963319d401b95b7448cbc"],["/categories/顺序队列/数据结构/index.html","cdcf62253e52fac493d4e159b470969f"],["/css/main.css","b68a8b1813ed5a5d91dd48881bfce1eb"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5cafe522605d60cb2ab4c756c3707f05"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","e996c4de7613651bb5d7abf1d48836fb"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f6c389573762ff17099c7317804b29bb"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","120f13a16fee382116e63ac46f88f31f"],["/js/src/algolia-search.js","718517159d8bd515f0db9e089f7c5b24"],["/js/src/bootstrap.js","0002bdd3224f904c3e5786ceab69ed0f"],["/js/src/bubble.js","8901c6fffad815839a5e337239fca4ac"],["/js/src/clipboard-use.js","39aabbdc2ea6ffae4ae6e08776fbdc9f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6718fa82ef9fb3bb43e99a6b20118d54"],["/js/src/exturl.js","4ef7a94cee99fd3aa3627a8625daf618"],["/js/src/hook-duoshuo.js","bdd924b166ae948fadcd0f3f30073eab"],["/js/src/js.cookie.js","53bed271dbf926ae005e4ad83b8c0e52"],["/js/src/linkcard.js","1f6305ad20f2183150590c9a801c61c6"],["/js/src/motion.js","aa19c686e4ffe1db0f5a24d581fd28d5"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","883cf78fe0df384e248d86899f079c29"],["/js/src/schemes/pisces.js","3f468a254c903d8d320b21a47760f05a"],["/js/src/scroll-cookie.js","a9e4c5a4b6dce64d6d22436115bec112"],["/js/src/scrollspy.js","3ecf1defd2cf0e022cd61eb65bf7458f"],["/js/src/utils.js","72d0d7cabfa850bb808c5cfea07c641c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","4d86873b71a48a1fa91dfe4783956a7d"],["/lib/Han/dist/han.js","efa8427413ba9be59d01b026df0e4637"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3cf3dc4acf4c5413f2a1417da1263087"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c181438136452c7b12412238190100bc"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d79ce66255bb7bd8df13c5e260680bf2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e2da52ee3865ad0a60b72ec45c39fe8f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5e7692f36203194af66085adc058b83c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9b22677bd9076887cd868a565a4553d6"],["/lib/fancybox/source/jquery.fancybox.css","7cd08efdbb9a1e58b1e379ff4636ecf3"],["/lib/fancybox/source/jquery.fancybox.js","68ae87fb7930c469c498410d07820e54"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ace3c9ffc6b2bcb50a53ca62996ed5ed"],["/lib/fastclick/lib/fastclick.js","a0feb77220b132cefca90eef0742d124"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","6aaed519e8b4479fc9fafcc76dfc755b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4ba19c5ecf450facbb7798ac46959f2b"],["/lib/jquery_lazyload/README.html","f3c51810445f319af719b7587cb074c8"],["/lib/jquery_lazyload/jquery.lazyload.js","707d006e5c1bb1315184caa34989f411"],["/lib/jquery_lazyload/jquery.scrollstop.js","907bf16b7940b50dd1177559d0ba723d"],["/lib/needsharebutton/font-embedded.css","1819f48f02a8ab540f2b9abc29cf8936"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","304753a7448e46759d2250370f5e0412"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1979d9680cbb472cb9d8863ed87d9dc2"],["/lib/velocity/velocity.js","a69a3079d5eb914151b0361383ad0e2d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","52e49cac7726861e1816dd12026855aa"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","46cb646e844563eebde0281f3763e866"],["/links/index.html","2f5e794de64c65faea9c090e286add51"],["/live2d-widget/README.html","584e26c1600735f65d7038dde07287fc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","47a98f698992475ee738cac455a529d7"],["/live2d-widget/demo/demo1.html","18b27500e32f24aba3e6b5e8ea466836"],["/live2d-widget/demo/demo2.html","1a885fbfd77418858527da36205d97e2"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","efb6235517533126a84399025f3c9bc1"],["/movies/index.html","024c36a2aad6f9e899cf4884b340d62b"],["/music/index.html","64b9b2f60341b715814970e4d62921e1"],["/page/2/index.html","635841695adf22731a77b0971a7ad5b8"],["/page/3/index.html","18d686f4c15cfa5f875cd1f69e2fcbb2"],["/page/4/index.html","440d7c64943d740ec3a34c33c82deefe"],["/photos/index.html","4699a0f3ee5819ff26f3a04b4b43c4ce"],["/posts/14311.html","85e06d27a2ce0f4d78ba72a677428646"],["/posts/15468.html","a1936efdea7b30ba76f2ed9348b1be4f"],["/posts/16107.html","a8a5aa90096f97d497ee3c4301be5e14"],["/posts/201e1121.html","64985e0b7b997b3ce479a481c1e4d3c9"],["/posts/20352.html","01072fffd3d22e20f17687e6b5de4758"],["/posts/21238.html","27c3a79da9e10c09884c072c5f615649"],["/posts/22281.html","09f798fc913bd6ea5b68b54927369e90"],["/posts/278598dc.html","b2ea2406db9a9f86064fbc5f80c05a99"],["/posts/2d063bc3.html","07c46a31278ac8e22d809b8b10ba7c06"],["/posts/30c404a6.html","aabc3a525398ad74b4f2dece435798fc"],["/posts/51203.html","222ac094aa9dbf2a2d58a29840575d87"],["/posts/538e5180.html","76cb0c2f02067783f5245ddd69578ef9"],["/posts/5394fce7.html","f0b2224bf939e34118a92a6f42ac545b"],["/posts/59037.html","5a810c967b189651ea7c8e57fa408833"],["/posts/60816b5a.html","2cb7ec2ce1d351c309378b4cfe94a328"],["/posts/6163d4b5.html","07978084a40b07c8398428bea443d936"],["/posts/69978469.html","99f227669e2c633009472a208af22e06"],["/posts/6a752619.html","2367d05c5d9393142afd8da8e2544987"],["/posts/7fcb11a7.html","f0bd6fe8b77ad910e3e69c9af7ebc0b6"],["/posts/8cc73e65.html","41be51ab29fd0463c1649b69579abe4a"],["/posts/9b621d6f.html","1e3bfa49bc5be1a52a583d8ebc304766"],["/posts/a530f7f0.html","a67659fa40fc81b58806bae37178f841"],["/posts/beb5106a.html","6087993d2157a134f3c2e83d9386e46d"],["/posts/dd845106.html","7149261f72fd6966507dc00db7b327e3"],["/posts/e35620b3.html","47c52bdee772fdf19d22b6967b0c8d47"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","bf3dd9b0949169a1e58dc64a77d9a666"],["/tags/C-语言/index.html","009e70ca3d8e0288684d1d9cd501a55f"],["/tags/C/index.html","7237b321187a9441020ae5d195897e12"],["/tags/C/page/2/index.html","90d0b164588e565cc7ec2afbc7f8917a"],["/tags/C语言/index.html","2a71c08b06713a5500dd312af40d36e7"],["/tags/Hexo/index.html","87bd53be312f40be2a9090bbbf80ce3b"],["/tags/Java/index.html","4ee4fc3df64ab72824dc3a207a78148c"],["/tags/Mac/index.html","12479448374cd57a7eb0550ed39af730"],["/tags/Parallels-Desktop/index.html","a6446b55d5603ef7d246c20cdd382d43"],["/tags/Python/index.html","5792f386af4fe8df818d85cb084ff5c7"],["/tags/Qt/index.html","4dcfa87cedc734cb3ed8538f9666b096"],["/tags/Sql-Server/index.html","81becacccaccc80120c7de6746765d0b"],["/tags/abbrlink/index.html","60667027aafeeff9072ea3cde82c42f6"],["/tags/index.html","01150131de539fec20307e4136be3527"],["/tags/冒泡排序/index.html","ca459e69abfe99027ce9455589b65311"],["/tags/双向循环链表/index.html","d2623e40a8e850ed9471d69fe6d9e504"],["/tags/双向链表/index.html","7268e5546c9ffbf076d6590223b9cc33"],["/tags/希尔排序/index.html","79b3a49097de0cffe8a651e3dd2fb51c"],["/tags/插入排序/index.html","a478a0cfd7c68bba9074688bb2f85312"],["/tags/数据结构/index.html","6192edb0521532481a12a16be0d3c37b"],["/tags/数据结构/page/2/index.html","ee06306f6627b7895e87b7161af14f03"],["/tags/杨辉三角/index.html","f45537cd15479d265f7cdade8047f284"],["/tags/栈/index.html","f2a2f81b76a01d50468b8383bf1f33b2"],["/tags/类模板/index.html","8f7fc8682e3b3541ca46bf0c5e5e5ea5"],["/tags/线性表/index.html","651285ef1bf5b835d0b9e975e7806747"],["/tags/选择排序/index.html","2892b016ae90c36071a3e8298929be71"],["/tags/链式栈/index.html","29ea67fb580411bc16b9175e6d6bbe30"],["/tags/链式队列/index.html","e09e12af1c3327c0c014876aad008d16"],["/tags/队列/index.html","59644956b590daf93add62aac23bcff5"],["/tags/顺序存储结构/index.html","dad97db0931abe48c620766b34c8a270"],["/top/index.html","8eee224be82859ab9a9fe1bdf55e1bbd"]];
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
