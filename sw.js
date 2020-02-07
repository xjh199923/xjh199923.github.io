/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","52e40be02221b81645b30f12a5170a2f"],["/archives/2019/10/index.html","5f7e25317e74f7124c3b4f163cecafd0"],["/archives/2019/11/index.html","48d664f0a9d6a2b934c4a54a1a61576b"],["/archives/2019/12/index.html","7860756fe86b022601be4ac6c7c8140a"],["/archives/2019/index.html","75aeedc85f910bcdfa76675aff430c4c"],["/archives/2020/01/index.html","8ef0cce59b24fa982c8b64d80cdb3809"],["/archives/2020/02/index.html","2881c82cacbb64680b85b0dbe5d1f501"],["/archives/2020/index.html","33c621d0fe1e5ca50f8b841ccf26d4af"],["/archives/2020/page/2/index.html","50c6a027d86e15521a24d18bdaec174f"],["/archives/index.html","7241d75905b23480e951b3c8afa78e2a"],["/archives/page/2/index.html","f5d753f62ddb95926a2b35a58f2dc618"],["/archives/page/3/index.html","7b31f606f2c4330c5820c4f6c69d07dd"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","6b1f0c3fa2537739c2f3ea20146dcdbf"],["/categories/C语言/index.html","c94c864def603ff2706b9042c0989567"],["/categories/C语言/数据结构/index.html","d0602a71752b1a73803bd648d1bf01ae"],["/categories/Hexo/index.html","7473711a17efe4cf2f010436da9bc91a"],["/categories/Mac/Qt/index.html","e32ef9ccf5c4e816fd2fa0fe8b723e61"],["/categories/Mac/index.html","b383401253601e384c66c96c86fd4ff0"],["/categories/index.html","aea22d3511b8b445057c8de04db69223"],["/categories/数据结构/C/Java/Python/index.html","1d84e1a9e802bd3d3afd54f2f2711715"],["/categories/数据结构/C/Java/Python/排序/index.html","b88681cfe8be08d905b4c87c45527dd4"],["/categories/数据结构/C/Java/index.html","9e172348371e779caba4e55c5ec19a4c"],["/categories/数据结构/C/index.html","2fecdf81e01fa39175e25d099040b27f"],["/categories/数据结构/C/page/2/index.html","81eaee4393dda171cd51dea50158332c"],["/categories/数据结构/C/双向循环链表/index.html","7964d6a5949a84152e995265a75405ff"],["/categories/数据结构/C/双向链表/index.html","af522eb5dc78125268fdad79290d6229"],["/categories/数据结构/C/顺序存储结构/index.html","7ada20b836aaf2a458f353f377b4859d"],["/categories/数据结构/index.html","e4bf76f8d2438880228a2460f6b155fd"],["/categories/数据结构/page/2/index.html","75ab8e8e83b2c4cf1e7d27032c4df1e4"],["/categories/玩转Mac/index.html","bb5c28322e144d6666c8f3039e224f25"],["/categories/顺序栈/index.html","687084eb38d93afdede254687df7d7be"],["/categories/顺序栈/数据结构/index.html","42a7882960eae7225248cdbc75c0232d"],["/css/main.css","1a295c9619764177f90bf9fbc3ead1bf"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","3563c267229d69f9fbe9f4f7458ef31e"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","2d2a0ea6bc67978846a695c5ff9d9217"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","83e61036161c5b986de1d583409e38bb"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","97825ef0f1f1ab55d569f7fd3996c4d3"],["/js/src/algolia-search.js","9df9429a981be7793a1873a293d4dac6"],["/js/src/bootstrap.js","450dc63aae8c275cd34d47d929142b4a"],["/js/src/bubble.js","b7ab46cda47d0497c1464a9e4585a77f"],["/js/src/clipboard-use.js","048b08352953a0ab4a6e4e91b7143291"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7946c276791651ea50139b4d9d79a57c"],["/js/src/exturl.js","28e36512665da63fca0c9336109e3830"],["/js/src/hook-duoshuo.js","102a8c918349e05f287aec6597fea530"],["/js/src/js.cookie.js","8657983e4b4f8df971a112ec845b554b"],["/js/src/linkcard.js","8ea4d5baebb90c9dd94497b6a4ca3bdd"],["/js/src/motion.js","06027041230c6965f5b25f9bc433d628"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","b587fbdda98ae00ddc352098ede6617f"],["/js/src/schemes/pisces.js","03e8c9af980bb718107ba1e70f3681d0"],["/js/src/scroll-cookie.js","331192d45e713fb056453f4fe0108bbc"],["/js/src/scrollspy.js","ce17881bda7cbd727b1f095535e108af"],["/js/src/utils.js","b2635d8bbf6091b0429c3deee1c849b3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","87e4dd64aa6f5041a5da54c6de7d4b00"],["/lib/Han/dist/han.js","eaf9d63e11f642abd33a572dc2d2dc5a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","26e59eb09a42bebb9be69c88f49c3215"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7210c2703c9029fe8847b824ecc2dbe2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1c0ba78336675a4f9550e9f90ec5ae38"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","6e94bfcdcfec2739539ef4f765930020"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","239bab74efda3d1006688afa9891241c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0fb607af669ec1be00acb0cdeae00a53"],["/lib/fancybox/source/jquery.fancybox.css","a25335881e9faa4748f4fd09552e8008"],["/lib/fancybox/source/jquery.fancybox.js","829b97d02e8961948c20002ff9024edf"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0a7dfbc4f2c7f6434ec95fdfd648728a"],["/lib/fastclick/lib/fastclick.js","29ca7bb6474360670a621f298ccc20bf"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8bdfe9ab06160ef79471781ad7982f55"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cb32d3250be6f6c785555f939aa10536"],["/lib/jquery_lazyload/README.html","d5f159de626ba02c3182a0fb071619ae"],["/lib/jquery_lazyload/jquery.lazyload.js","46393649e44e8b9bc6cfd7f58ad4c3cd"],["/lib/jquery_lazyload/jquery.scrollstop.js","d725043c6b33e87485b9937330b6679a"],["/lib/needsharebutton/font-embedded.css","d37ceb5a922e2c00e629641d218c69f4"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6948ec8ac99318e53a1372402eb7bb08"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","88de5383cf289f6c52525a387ad47bb3"],["/lib/velocity/velocity.js","a86e20c592a16a2cd6536d8fa9ca5330"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","6e887ce136a82c6119d3475db168735a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","635cb3c9af14eb272c4ed3eb204ba8fd"],["/links/index.html","ea89b1d399e0063df4814f748ffb69c7"],["/live2d-widget/README.html","515136d41a9f06d6adf0ec5542d672a6"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fb30fe05eaca806d1f9fa2e55bcfbcfe"],["/live2d-widget/demo/demo1.html","808c94ae900211706b52cfba23e5038d"],["/live2d-widget/demo/demo2.html","1e6c8c79c65b1790b0a088c0e8563c7d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","f222a80306ecba4c8fb419f934d7abd9"],["/movies/index.html","92ca7a99534763ce036d8de5d5843b4e"],["/music/index.html","be929a03f99e9c77c85f3eac18b8e68c"],["/page/2/index.html","eb0c38911dc19f007d5fdedef5e4b56f"],["/page/3/index.html","14c99a6089cf42a8ae09b04ef08c58f8"],["/photos/index.html","8a46ccda61277880f283e9c478bd902a"],["/posts/14311.html","6f8b3a2083f5a301763492abb8a82f86"],["/posts/15468.html","e75026a3414e0729f937a527a9424485"],["/posts/16107.html","791c2ddfdd1383fe9d02d5a042d22610"],["/posts/201e1121.html","ba517705b3035211b2b04eb0b3a67b4b"],["/posts/20352.html","25b022eddafeb8d5de3fa91476bb0c8e"],["/posts/21238.html","1dd9c6dc3ea4ca61ae8e3855dc9d5273"],["/posts/22281.html","1cc5f3a2e895a97ab8bbd60e37d6c94b"],["/posts/278598dc.html","5724a56b1a763d403f3e0e8ac310d157"],["/posts/30c404a6.html","a7c60121f43f485647cfa8c891688bef"],["/posts/51203.html","43ad3f8a3a4d6ce77020a184ef94ead8"],["/posts/538e5180.html","065bf13b4efb966738751d61ab0c1ece"],["/posts/5394fce7.html","041600d00838424ae5632e3dc2e75725"],["/posts/59037.html","a4a0a7b654ac2702bf025f99d810dab3"],["/posts/60816b5a.html","f87950be8dd77232780007f83599c358"],["/posts/69978469.html","8c801413985c40407375d6d109a99790"],["/posts/6a752619.html","08501a846cb9db1971e9787f0cd39eb1"],["/posts/8cc73e65.html","c9aef649818db268ef8374b9b97963d5"],["/posts/9b621d6f.html","5b0c2176c0106976e3fbe05194960633"],["/posts/a530f7f0.html","17c537479a43c0d496a08f674b8d3d96"],["/posts/beb5106a.html","6f81bccd36f0e0c6e4b06973b750ffb1"],["/posts/dd845106.html","ec72e21fca409b1c90996082d8712cc0"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6ea8ed4ee38a541b558d23010fa5e6c6"],["/tags/C-语言/index.html","20d018ac58801c1b9532dc29a1ee0511"],["/tags/C/index.html","df985f52ad45ec187af4c1cd03e047b7"],["/tags/C语言/index.html","7eb6282f4a8a4922e0f100a06cd66032"],["/tags/Hexo/index.html","6deca92f56ef3a8229e1ed89f3e1f7a8"],["/tags/Java/index.html","0926e95ec8d7cfa9875032ee23d2a484"],["/tags/Mac/index.html","8bc21a97013443727ad368fb3e71147a"],["/tags/Parallels-Desktop/index.html","5c1e2f4c70dddea510a40add39174f5f"],["/tags/Python/index.html","0d47b668ed8ac8c591d9e65c274df2f1"],["/tags/Qt/index.html","73956428f89e41d0fba0b59dfbedaa69"],["/tags/abbrlink/index.html","df4404b41d43aac4bc02c1c841d9848c"],["/tags/index.html","96797d3125ed142a9d527a5aa6def093"],["/tags/冒泡排序/index.html","1f76ccd3606379957b5b534cd755e6e6"],["/tags/双向循环链表/index.html","bb14f62693f94ca67c8bf7b674a77a3d"],["/tags/双向链表/index.html","36b54e3ec2c2cd3169eb89f173ccbde5"],["/tags/希尔排序/index.html","870a7a7a595b71796eba28fbf669a5af"],["/tags/插入排序/index.html","86bdc01bfe7bd199d628d74a367940bc"],["/tags/数据结构/index.html","3478f44b9a5c78ac76541933c85da2a6"],["/tags/数据结构/page/2/index.html","07a81e23674e753fbbfb726507a5ab42"],["/tags/杨辉三角/index.html","fbdfde0d6cf452dfec1d9912237eac20"],["/tags/栈/index.html","aee1673b960da57d534a43e0b84f03a3"],["/tags/类模板/index.html","11789ed79fecfe618c4b0d72dfc2e8ef"],["/tags/线性表/index.html","6bc65a0010b2b0e0886ba8445aa1d64f"],["/tags/选择排序/index.html","016e72cf4a4c7bf19fe6a35f6c77abf8"],["/tags/链式栈/index.html","068848dc0b4420660493c04958c73c10"],["/tags/队列/index.html","4fa558af2336c06065b3c795d21f2d20"],["/tags/顺序存储结构/index.html","b9a84772647a34816830345fcc77dc38"],["/top/index.html","95468120e8951021692fbc1cdc8e9edf"]];
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
