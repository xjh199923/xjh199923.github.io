/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f77984a4b06d523637de97cf8e12c2e0"],["/archives/2019/10/index.html","2b92ac8952c2c18069379c2a743550a2"],["/archives/2019/11/index.html","3870cca4446f38fc362595de08dcb3fc"],["/archives/2019/12/index.html","5a5fb5f301647ab61bb4e56e1f077531"],["/archives/2019/index.html","4adb1e98be9c719e1b85297dc5f022a9"],["/archives/2020/01/index.html","8203c4397f239cda3dc3ca5e706f9d66"],["/archives/2020/02/index.html","83702603b92aae70fb6c2d971a05434e"],["/archives/2020/index.html","794ef84832d75806da87ce59b2cf76ce"],["/archives/2020/page/2/index.html","f2fefd53f27250313f3711346dc89633"],["/archives/index.html","779d793d6b4ba272b26f198d812d95c1"],["/archives/page/2/index.html","ca5138213fca769446ab587488873ee8"],["/archives/page/3/index.html","53c0c839324c05e240139b9bcf78e534"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","34f3f6aeaff41b3946534714d191ef44"],["/categories/C语言/index.html","ec1f241681adbe4b2030db7a07e5cbf8"],["/categories/C语言/数据结构/index.html","8961a6046c45aab368df30acbf3d79cf"],["/categories/Hexo/index.html","0ca9957814833e5cab75561b39c07895"],["/categories/Mac/Qt/index.html","3a2d1b04291f56ecc3c0da1cb1aae36f"],["/categories/Mac/index.html","34f8e930a4e53a0a6dfad2994d9e3106"],["/categories/index.html","0ac8789ae5f05605be6f20efe157d561"],["/categories/数据结构/C/Java/Python/index.html","827700060b9f6dd4fff34f0fca4e21c0"],["/categories/数据结构/C/Java/Python/排序/index.html","211c9ba683e4ff28b3711a38a1be53d9"],["/categories/数据结构/C/Java/index.html","c7cea3b8dc7b6713c041259ecd7e3c0b"],["/categories/数据结构/C/index.html","2872a811b50d39aaa32fb169e6ebdfd5"],["/categories/数据结构/C/page/2/index.html","171da210b1e6e2c37e231a5400b660a6"],["/categories/数据结构/C/双向循环链表/index.html","2c7d5565a564e7074a3019de54df7fe0"],["/categories/数据结构/C/双向链表/index.html","4face8988119c8a2d915b3e8773499ad"],["/categories/数据结构/C/顺序存储结构/index.html","1b9187d321afc3e21feaf8f1dd9fcad2"],["/categories/数据结构/index.html","9309b86b8899177fa4b1561edc737d2e"],["/categories/数据结构/page/2/index.html","c7e18b1f78bca520755c56f1f4d560fd"],["/categories/玩转Mac/index.html","2708fc811ead939f6da5e00afd1ecf7a"],["/categories/链式栈/index.html","6d46a98986099a1f4131ebb954dd8c95"],["/categories/链式栈/数据结构/index.html","9dc1545cc691906ec661b555d0fabd37"],["/categories/顺序栈/index.html","c81bb60dbc416fda455b9cd6258ac3bb"],["/categories/顺序栈/数据结构/index.html","1d2ecba870d19a43e0f22b59f3fa9629"],["/categories/顺序队列/index.html","618e1268c6f02f39be8d515b7d9f19b2"],["/categories/顺序队列/数据结构/index.html","b8bc370b99a28a7a238f5d5db832ebf2"],["/css/main.css","e9d51330db9e055ded0fe0d8746db141"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f3addaf91803e4f49f6ea22536a20e40"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7b97fdcb9d81ef5f361701b4f8c8aada"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8f51239d6b56aa1cf25cb54aae68dc88"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d1a5a2f2db4de24615ac01ffbfd1a986"],["/js/src/algolia-search.js","b2ccf131d735095f8dc3a8983f8fa609"],["/js/src/bootstrap.js","a048440d4a3152006578bbeb4a22a1f0"],["/js/src/bubble.js","ca6dd5cb68008c2ac1a1a173e21ed4bd"],["/js/src/clipboard-use.js","e2a92dc58543edcd070c669bff92e2ca"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7ba2cb65380eb7cb2630e98e1ea5112d"],["/js/src/exturl.js","a394fa61cd5aff635e92cb5186c7fda5"],["/js/src/hook-duoshuo.js","cf09c4c9c307a89389c011d55f9dde6b"],["/js/src/js.cookie.js","f5898338db3e5de80acd6da3f815d996"],["/js/src/linkcard.js","4005552b9575765ff57b9cd24fb4004d"],["/js/src/motion.js","1fe67e979c6ceb3e994e6c154f3416b5"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a877837801f1c9e8f485a13fa27029a4"],["/js/src/schemes/pisces.js","de75cbd6e2b581f923173d7cd50a6506"],["/js/src/scroll-cookie.js","7724a4a960e5e8609ddeca0f95d2d8d1"],["/js/src/scrollspy.js","88226235a7db6360705b795daa636603"],["/js/src/utils.js","21f3d2bec0fb671188801b2b7ecb3bd2"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","d38c4290b68fe90df0ddbc45a2f9bca3"],["/lib/Han/dist/han.js","0186916c0fae58abbff6c2fb39d128b0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","032faed5579eb371e48fb9072885bd27"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2f3b720a04ce0d72c2b99f7a30c707e6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","179764d3cb5bd5b571c8821008b78823"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0f93846037bdfc21f2c70cd3e478a87e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f0c0cf782c6451c8cdfe46c6dd8261be"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b9cce42d58e8977348b928fc53834457"],["/lib/fancybox/source/jquery.fancybox.css","a1e3d582a9620a9ef4732bc5c1889e78"],["/lib/fancybox/source/jquery.fancybox.js","1d8c62e462fcbbbdb59e867563a57e48"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","286976fd44ad437dd81153b7effc0e67"],["/lib/fastclick/lib/fastclick.js","4af50b1a94261eeeb16ab719ba7a4a8f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f707f9eb2678bf6490deef28531bef35"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bc8dd4b1639c7494c9a68fcf2cc796c"],["/lib/jquery_lazyload/README.html","9f72342047ddfa3ff780102c17945dba"],["/lib/jquery_lazyload/jquery.lazyload.js","f03586c8cc6393600e8028419da16483"],["/lib/jquery_lazyload/jquery.scrollstop.js","3a8442ae60d04f996769b45e88763ee2"],["/lib/needsharebutton/font-embedded.css","ffc0f2d699c79f53eb8548607eb79d0c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9b9c75392122a5c2b89cbc337a2bb63e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c45f43dd59f573cbd08b765ae20fbe88"],["/lib/velocity/velocity.js","7de7d7bea40eb2c84f59833b84511c71"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7bbcd774e3c8dd1766b24291b9d698a5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","385708355d82c4d008b6d56e35ee470d"],["/links/index.html","145bc19f8d19f0e32257b422b25a06e0"],["/live2d-widget/README.html","1c7dab0d52e9aff85304cab20c7be62e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","def8b36bb0b6b914771558d6a898da0e"],["/live2d-widget/demo/demo1.html","2599ef9bd1356fc7ec18911c0cdf556d"],["/live2d-widget/demo/demo2.html","e8c7bbcde4374dc40cd7771304844b34"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","fde83fb5ad94890927bce65c60790062"],["/movies/index.html","ddf9b6bd13be7a26495f9cbed87c439a"],["/music/index.html","5f2a2b27bd661a6378470b27b846adb9"],["/page/2/index.html","dd153dc37c5f87b01e68103f34ff0e1d"],["/page/3/index.html","4d005cbcb6a72152855b5e0077f9903c"],["/page/4/index.html","7faa6525f2f12708516748eb6ae66ce1"],["/photos/index.html","42ce19810a628d9c0c69344d941916f7"],["/posts/14311.html","5319da3ad671b4f03025bb6868d4890c"],["/posts/15468.html","c3b3c1315abf1254ef296fbd8174ad18"],["/posts/16107.html","95c9098fe592d4daf8930ea3d89fa013"],["/posts/201e1121.html","fdedcc4297b8a369846159252ba46312"],["/posts/20352.html","3ecfdb1a2ad04f1cb91b0067ed210c4d"],["/posts/21238.html","8ddc5a76f3fc6856630f463bd3d71ae3"],["/posts/22281.html","8a6f7c1cc5724a69fbf18f7a7b7f6ab5"],["/posts/278598dc.html","c0f1c22fa977e3b959845db4dc3fefff"],["/posts/2d063bc3.html","b17bfdcd02ee13139ffcf3b29f27d0c0"],["/posts/30c404a6.html","3aced473ca82010d5470866ca8cbeb8b"],["/posts/51203.html","c8db4b0c1da43dab25d590650ed576cf"],["/posts/538e5180.html","15728c0a59aa5cdf5fd7ed0536760099"],["/posts/5394fce7.html","586d0af052d6bc21aefc09bb43217821"],["/posts/59037.html","f10554b9ed3430837bc99be89f71a1b5"],["/posts/60816b5a.html","ed7bc48a9d5f2b8ec357057cb04b2b6d"],["/posts/6163d4b5.html","f7efd304f008db2569448df6269008c3"],["/posts/69978469.html","33bba49566fe6f46dd2dcf894bc034ac"],["/posts/6a752619.html","e4106e7e9dc9888a9b995703853d08e8"],["/posts/8cc73e65.html","692b9717aa2549cf6c5653fb0969b395"],["/posts/9b621d6f.html","0dcf7ec2470921061f639745100d6e70"],["/posts/a530f7f0.html","a7dff3897a2c6232818011faa8fcf6a0"],["/posts/beb5106a.html","a752305853fed8e7be61d40279e54f46"],["/posts/dd845106.html","640e2ed58703e8fae9681ef702289324"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","095b3a6a4ba6df21d0e24fd76d8247df"],["/tags/C-语言/index.html","260e89c95589caf2b59bf0e2228735bc"],["/tags/C/index.html","e68cdef0e6c017aa6e8c4e6d6e5e07a5"],["/tags/C/page/2/index.html","6c860f1ac15563a3f7373d334aaa1b95"],["/tags/C语言/index.html","081e8ca44d4c3c8a2f018d53034ca71a"],["/tags/Hexo/index.html","50c975cb67016affaad21548940e362d"],["/tags/Java/index.html","93b94daec422261fd77355cf0dd04e84"],["/tags/Mac/index.html","6a7d4088a536fe18c817ade193bec0e1"],["/tags/Parallels-Desktop/index.html","6e9b0755d853ac53b6fb89a4d4c49f92"],["/tags/Python/index.html","5e887d16b974ede6ab0bd1eb22dd2343"],["/tags/Qt/index.html","68dcf53ec4c2c64624ca09edb8328bd7"],["/tags/abbrlink/index.html","9015fd44c226211c495511507416187b"],["/tags/index.html","f654f8beea85d11ea565ad180a57af2a"],["/tags/冒泡排序/index.html","28466238431ce84b3e6d6de91c1443a8"],["/tags/双向循环链表/index.html","7243b4eaae2216f570c5036dc7895948"],["/tags/双向链表/index.html","5b08ed6032cb23a0aa40cfd628fad24b"],["/tags/希尔排序/index.html","4c20e7824334885bcdf14626ff014eaf"],["/tags/插入排序/index.html","87566f410774b14686fb73605cdcd63b"],["/tags/数据结构/index.html","f830af836474d87c978644976f932cc7"],["/tags/数据结构/page/2/index.html","b5780134dec05556a5aa54ab94c045d0"],["/tags/杨辉三角/index.html","734df6f1fa705f956a2fb767bebf8df4"],["/tags/栈/index.html","7ebc1df3d08ffbb08c71da9152cd838a"],["/tags/类模板/index.html","d951c9229788a697c3086dbbbb5b9dcd"],["/tags/线性表/index.html","1b6d7bd0ffc24e6057a02b18bee80a42"],["/tags/选择排序/index.html","8ddc9efe7ad14d8c71eac57126d90ba2"],["/tags/链式栈/index.html","d8400fa43502fa442b240fac8605b3d7"],["/tags/队列/index.html","36c362ab5abf14936bc0790beb478a08"],["/tags/顺序存储结构/index.html","2f073ce1cc280d79c43e8216557af8ab"],["/top/index.html","5152c3963b646bc72b53938c53c36bf3"]];
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
