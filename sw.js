/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4652e90810f12770ba11408f8e1921d5"],["/archives/2019/10/index.html","ed90de839d20640d718668ef054207d9"],["/archives/2019/11/index.html","6119af9be8e5f3d6192998d24d8c09a4"],["/archives/2019/12/index.html","bf9bd28607cd3fd96bb563884d051aa2"],["/archives/2019/index.html","58bbac3cec02a1ef2193a20b25df66e9"],["/archives/2020/01/index.html","91c10a39103627f1861c3941e4438ec8"],["/archives/2020/02/index.html","ea325abcf4ec5487c619e07410600d0d"],["/archives/2020/03/index.html","f8f6308daf11103f0ce08afda1c84429"],["/archives/2020/index.html","aa93fde542dfc7c8ff34316851a9331d"],["/archives/2020/page/2/index.html","694261bd554b7a3f20ff5db446421287"],["/archives/index.html","647d0c0619d1826c6b8653cd6208f843"],["/archives/page/2/index.html","a2288ce30e31df8dabed2181bbd3e739"],["/archives/page/3/index.html","6ea09b6e44a9df0a01b3d132e8f30920"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0c0a7ac64b07a6cd000f63d1d9069906"],["/categories/C语言/index.html","f92fb838ab108245662b7717b848fd2c"],["/categories/C语言/数据结构/index.html","a3c49c447bab5c3e0a1ff685e1324bfa"],["/categories/Hexo/index.html","7758c7c10c20d94356baa3a998fb644a"],["/categories/Mac/Qt/index.html","a86746447b459b09e4a1d58162d31686"],["/categories/Mac/Sql-Server/index.html","d0c74accb8e6e8b9f2a7d897d194ce7e"],["/categories/Mac/index.html","6f2228360a9836111219dd450816345f"],["/categories/index.html","fe9dceeb4835c3f1e0013481b35a64be"],["/categories/数据结构/C/Java/Python/index.html","86afcfb8641b5f5e96e882643bc97d3c"],["/categories/数据结构/C/Java/Python/排序/index.html","1144f4960d9581b6993d18e3ba1bf378"],["/categories/数据结构/C/Java/index.html","4bfa94081e4c526b1cd7c4536b84d759"],["/categories/数据结构/C/index.html","49389659f6b56b6fba53da12fba203d4"],["/categories/数据结构/C/page/2/index.html","b4a5553bd0731818af6f005eeaf724a8"],["/categories/数据结构/C/双向循环链表/index.html","227e010bc3d2036394854cf0176ba4bf"],["/categories/数据结构/C/双向链表/index.html","088cbb674e47269c19d113a71f1c01b2"],["/categories/数据结构/C/顺序存储结构/index.html","6453a03cfe7f0a9b33bc5bc4e87a1699"],["/categories/数据结构/index.html","d130fb2033923f85c4edb89c7baa3918"],["/categories/数据结构/page/2/index.html","b1d3863c83d7deefb66f4d03dfcf09d1"],["/categories/玩转Mac/index.html","212fe83dd0844a85905399ccb3a1d9c3"],["/categories/链式栈/index.html","13ae80e661244ce82bda502286fe4c31"],["/categories/链式栈/数据结构/index.html","193b899ec1f6a68b5923005a2008cc64"],["/categories/顺序栈/index.html","0954a0b032d829ff3d6801cf0d3682d6"],["/categories/顺序栈/数据结构/index.html","110268d8654878779fbb887d1dc0f1fa"],["/categories/顺序队列/index.html","4beca2f87547e82e85e623e3f29a86cf"],["/categories/顺序队列/数据结构/index.html","4de9c6ce61a3482132f415f62fd48429"],["/css/main.css","f24dfa6c5c9c6677b1a5d5ad9d65f29a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d3f089c8a74f27a3a5c91d791b274bd9"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","59e04b2a053b8b9f96b01140a68678be"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fb91bbe8c04422ddefd99770edada208"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","9e2f45f45d2a95a7e379ef4fdb72e8ba"],["/js/src/algolia-search.js","c47d592b5cd67231851a15d52171d396"],["/js/src/bootstrap.js","28f274da22ef14890d7b2e1f065d2280"],["/js/src/bubble.js","0a750107c7661a9ca155395529aedf19"],["/js/src/clipboard-use.js","3ea4dd315a8d9ef28678501d48186d0b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","883a2efa4e6abbc9acab35755df0714e"],["/js/src/exturl.js","a09bf1ef09390a8504442658d1b4fedc"],["/js/src/hook-duoshuo.js","a9c666e9b4c2750a41a23a72082949cf"],["/js/src/js.cookie.js","25e9e24e599e08770c341a5f662e177f"],["/js/src/linkcard.js","cb936ddf9803dd8db44146689e6ebd59"],["/js/src/motion.js","54211fb4455d7fc2cc7808062f7ec76e"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","08dd9129db06729aa8a2ed15b4a37f5d"],["/js/src/schemes/pisces.js","05fd0bd3237f1a7349cf59321c8ffbd2"],["/js/src/scroll-cookie.js","d134644ec41f068dff8299c74ee27441"],["/js/src/scrollspy.js","9bd60f404f5d26bb3d0756a7efa84870"],["/js/src/utils.js","aa1b6d3091d3aa12529ba8bbdf5e20e1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","8d483662ec293f321df4aba879835d62"],["/lib/Han/dist/han.js","70277386da14c7ba52399885b2cea84d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","569fd7e2a828ce3b8bc72d661fe025bc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","16db37b382c4d4d89db6689336e18701"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","eb7a57f674bab0a85841c0f30bf7b697"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","30d6a2563a998f0b900cdcca7805c7e1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","399952daa93cd8819ade4aa112689d85"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c098762a15dc8d9e2bdf03358f78957f"],["/lib/fancybox/source/jquery.fancybox.css","e9c634fa4a8568fde40f3e490a599389"],["/lib/fancybox/source/jquery.fancybox.js","5f0bf61ef0863519749885af93d0d1a2"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","78e5ee1a65c9f00fe1f23c45841ace61"],["/lib/fastclick/lib/fastclick.js","8ec69e57fcd2928071e9e3603428cede"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b787f200ad5008213c91aada03fd1bf7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","563fb0bf98ca6c67d3a7c3c988caa8a9"],["/lib/jquery_lazyload/README.html","62e354dceef4e24554086c19aa6511e0"],["/lib/jquery_lazyload/jquery.lazyload.js","60dc7669e449de65d4e0a0a8a34ae26a"],["/lib/jquery_lazyload/jquery.scrollstop.js","473856fa0f4f0303247b3b8b1bb7e556"],["/lib/needsharebutton/font-embedded.css","65f6135709d31bb6deffa1c6a3e6c086"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","357af307e5bb0da1eafdd28b1deca00e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4e26e24e88325a1320578a6e995a016e"],["/lib/velocity/velocity.js","71219b089b7e0c55fb1d3c172ac254e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8f445f0db302af3b91f1aa845ae18613"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4526b0850d384d60bea0de8e5dadab10"],["/links/index.html","8985694683a5bd32dfd6abacf8dd2c27"],["/live2d-widget/README.html","d847fc8615b28766651de764b91fefb3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","7b080b0f8239926c8bbcda14da58bd59"],["/live2d-widget/demo/demo1.html","c8127871fff6508534426d83f8a780ab"],["/live2d-widget/demo/demo2.html","714885e0273b07877171fa7e76053622"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6cbbc4bdaa6aa85575af4d4f40d20dc8"],["/movies/index.html","85185403633195b11ffc1835df3946bf"],["/music/index.html","8288bd4bb3cb6c4647e5f3e8a9f27da0"],["/page/2/index.html","3d86f21839108703ffb22d26e1481076"],["/page/3/index.html","6b1053e3824e0f7acc13f177c4fd3621"],["/page/4/index.html","d5888ee42b991b29ca6a1c8a29414942"],["/photos/index.html","b0e05ba507cc6883ec7812e9c59bd73e"],["/posts/14311.html","926ed15fca09877ba14c38a5d4c5b3e3"],["/posts/15468.html","4f61c4aed1b0d1728c74e6f112c18c1d"],["/posts/16107.html","37c3b27ec14c2e8359e0588cc8412e8f"],["/posts/201e1121.html","d76e588549ed09fc4bb6c58be7128931"],["/posts/20352.html","594481bc9ea8748b8b1bd88bd2bce242"],["/posts/21238.html","6bdfaae62a7ccec3f9ebc24dbb97af84"],["/posts/22281.html","b9ab2de801f2c66bf7135084e5c57460"],["/posts/278598dc.html","a1d62d0896128687e0456167d109ec05"],["/posts/2d063bc3.html","c0e94befd3af6ae986139dbe35ef678d"],["/posts/30c404a6.html","1ac6ef44c8841ae419d2d3f460ca8359"],["/posts/51203.html","da06a84050ce467f564784e9c2a4d6b9"],["/posts/538e5180.html","20a67489bb3c279abf2afd683b0a338c"],["/posts/5394fce7.html","12ba88bfb12707bd94d6327e2f649fd1"],["/posts/59037.html","7516fe02f2e3bfbdefdb609688bef9b7"],["/posts/60816b5a.html","d0d6b06fe5da17bbf23d3c74c3ac861d"],["/posts/6163d4b5.html","352ae5190df158dfa0e93f75efcfcc0c"],["/posts/69978469.html","7c2222373b675c2da8e51c7a11bdccd4"],["/posts/6a752619.html","ce16d2b0f1af381ab45e20b329c2e1a2"],["/posts/7fcb11a7.html","49de689290e16ce1764cb83b7773ecdf"],["/posts/8cc73e65.html","2f4bf0b2cefc0757b0bbeec6868d0b72"],["/posts/9b621d6f.html","848b86136e5c2de97ee5ba43b0cfffef"],["/posts/a530f7f0.html","11aa76fc00033bee5124e08d189901b8"],["/posts/beb5106a.html","62a9004e3bbb4014aaa184e44228e9d1"],["/posts/dd845106.html","e2358bff0ea6f697710efa71e276c8d6"],["/posts/e35620b3.html","8818dfa820b1ae547b92194d8f835c03"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","3c4b91a9244f9a66887b2642b7b6a01e"],["/tags/C-语言/index.html","b39291bdf850d4ada550a92c8fc81763"],["/tags/C/index.html","f6c9e9f3069caa743704bc68553d8713"],["/tags/C/page/2/index.html","e8e6095ebf4ca5ebf63f977a498535a5"],["/tags/C语言/index.html","bdaa43d1295f03ce06ab703377c62444"],["/tags/Hexo/index.html","37c5396282ee5619b469f23683bf33a0"],["/tags/Java/index.html","f941cb0a64c752ca95d1ebcbca94330c"],["/tags/Mac/index.html","33aea86d88e131a50c97a49a91e8b83b"],["/tags/Parallels-Desktop/index.html","83b97376b827343bc737efdfdc95aac6"],["/tags/Python/index.html","0af436800c3d452526e028ea8a330059"],["/tags/Qt/index.html","b324624c7eba6bbcfcc94708a00a96e2"],["/tags/Sql-Server/index.html","0bf25088b5c148b5273f7922c7e26ef4"],["/tags/abbrlink/index.html","f8c64772bfb18b532d43079cd52cfa5f"],["/tags/index.html","dccab246d3602ad39772af9af25d7345"],["/tags/冒泡排序/index.html","c2a924471b9ad24fdf335834c0fd625a"],["/tags/双向循环链表/index.html","52111a539c683a21ee065fbf87255068"],["/tags/双向链表/index.html","a032a67a8499349e9e12b8f97e897838"],["/tags/希尔排序/index.html","070cb3b9fb1bbe1383f7c2773846f588"],["/tags/插入排序/index.html","b1d7f38e13aea4a7a5b1a8347936ac67"],["/tags/数据结构/index.html","17654427b94da69295d495eae7402301"],["/tags/数据结构/page/2/index.html","89a8051dde0daebe19291d2e37c7f874"],["/tags/杨辉三角/index.html","d6be32e69f04bcbddf831f60b8fdac2d"],["/tags/栈/index.html","6b9106f5bfab8a5d9e0017e5fb820df2"],["/tags/类模板/index.html","2d34004aa7b6b33ef214c1039ab4b005"],["/tags/线性表/index.html","17d517c39004b6c88283aab073a19977"],["/tags/选择排序/index.html","9046a45fb618ebf14f5f2668074eab3e"],["/tags/链式栈/index.html","c824b93286e7ec19fc1f4c003c6048aa"],["/tags/链式队列/index.html","7f120e3f000350d8c8a46deb74f53e00"],["/tags/队列/index.html","5cdf1ec221004346392ea96b69ae4f43"],["/tags/顺序存储结构/index.html","a46384991cc4fa9fcbb832a244d6140f"],["/top/index.html","410b4a9e605f7f68ee5af58f738b468a"]];
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
