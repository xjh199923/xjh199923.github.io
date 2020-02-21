/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1e375a0873233262b7a17beb744317c5"],["/archives/2019/10/index.html","0a233bb8fede0f85c73e903802c996e7"],["/archives/2019/11/index.html","16ab6f90b411304975233bde812c7cde"],["/archives/2019/12/index.html","33bb15d36e28add11df57934619e2a05"],["/archives/2019/index.html","53e62241736a269b37fece7019bde692"],["/archives/2020/01/index.html","7c51bf088d5ea0062452b8a16c65722f"],["/archives/2020/02/index.html","134eaec9931c17acd610f599456c708c"],["/archives/2020/index.html","a4923ff32177748abca575844ea8d228"],["/archives/2020/page/2/index.html","02fe4b3c1fffc90cd58781c3606ff1d4"],["/archives/index.html","bdf9a1fbc46e151cdcc070762f92228d"],["/archives/page/2/index.html","7f954a7d588cdd7303c4387c901d69e5"],["/archives/page/3/index.html","0e86b7f6b46b37b876bcbcd9a6b5b07b"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","cb5e3d012ecd7a5c46c9b3a06befcb08"],["/categories/C语言/index.html","3ea01cca7b7afbd0267843048eecec2f"],["/categories/C语言/数据结构/index.html","6dcf3c8b023c75c69033a8127517ae57"],["/categories/Hexo/index.html","3169c6f8dc9162cb8b5e6d0fdd5be59f"],["/categories/Mac/Qt/index.html","c0b9779a147b31d470e5893bd02d3b6b"],["/categories/Mac/index.html","c677ecb2ef95c54193b66cd6a81578af"],["/categories/index.html","5adaf7a3f2b8228c20aebfc738b91fb0"],["/categories/数据结构/C/Java/Python/index.html","318d9745d31d24ed356c19e83107cebb"],["/categories/数据结构/C/Java/Python/排序/index.html","68fa76763eed4bb93217894c1c6dcf27"],["/categories/数据结构/C/Java/index.html","60f8fcf0568b1ee2c298624b01041061"],["/categories/数据结构/C/index.html","124933c53b37680654aafd2af3c77e8e"],["/categories/数据结构/C/page/2/index.html","80cfa67d087f27eaf88bfae05e2e4581"],["/categories/数据结构/C/双向循环链表/index.html","9edb4be403be411355956ed7d41715ee"],["/categories/数据结构/C/双向链表/index.html","04bc523c17037aff1cb2da9916e4c1cc"],["/categories/数据结构/C/顺序存储结构/index.html","32ee6c1dae8ad49f0b868e016505cc42"],["/categories/数据结构/index.html","a926cab940db1533b9bb9a43b9132f57"],["/categories/数据结构/page/2/index.html","d1dc5ebfbfdde028ed826c13c3a65d0d"],["/categories/玩转Mac/index.html","3b3dafc36537e5e280b7fb31f67909d3"],["/categories/链式栈/index.html","22657bdfef05485dabc706b4fa4047a0"],["/categories/链式栈/数据结构/index.html","cbad955b2c93b34da72511f892e80f1b"],["/categories/顺序栈/index.html","3304bd30a36bcb5de20955bc35adf93b"],["/categories/顺序栈/数据结构/index.html","a4e97d5a1e713c4c24e13631d3fa0607"],["/categories/顺序队列/index.html","b402cad6ff5bdf4179e7ef0f353b2797"],["/categories/顺序队列/数据结构/index.html","45712c98872754f9a4e0e9bb240bf3c8"],["/css/main.css","bd82aa7abf86f7fcc3087b3d86adffd9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","cf56de9fe7efea3618b4ac771b6f87c1"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","cf0396a83a9579cf98b90a6a394aae97"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","402b0bdc73eb3710eae49837d62ede3a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c1a764083c9abd61f5c15b5e6621affc"],["/js/src/algolia-search.js","c99155b87705214142c174c84c21a213"],["/js/src/bootstrap.js","c09eb5766702636710b955a12e135e70"],["/js/src/bubble.js","f90e2cff39b8312f3f1897e36bcdfe08"],["/js/src/clipboard-use.js","fb9d7a13f4f3b9151ff69e155d54a78e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","ffeac40893d6cb5e8ca45aa3458df39e"],["/js/src/exturl.js","ef8fc99848972bb040cf3b1057c2e16f"],["/js/src/hook-duoshuo.js","8d54c93fa04b67c15dfb1c1faee8c980"],["/js/src/js.cookie.js","8a9c09553845795af7cf5fa04b6325c5"],["/js/src/linkcard.js","78d986c12503916384a58b6e32dd61db"],["/js/src/motion.js","df6418676bd9eca8ae9816f34e721419"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","1bae017c2254e8073fbb9fdeb7d9cb67"],["/js/src/schemes/pisces.js","9b2d50bfc29043cbf49d8f48bd018927"],["/js/src/scroll-cookie.js","d4f653a5d130c8b913964b2b064c9ea3"],["/js/src/scrollspy.js","e703d092ddc2e87ee35488999c598ff3"],["/js/src/utils.js","52598766fdf5ec22e8cf5e7c84f0a3cd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","762d2cfa60d60aca08587e8ee9a3d118"],["/lib/Han/dist/han.js","c134b8269ba378fb6fe2d58a2f7191a6"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","1d25b0f3f08bf342b3ccb1f638dfc8ce"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","92a9050a7683c5c8e6340ba9cde5c4d8"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9ebc85e226b7b8853f1d5de179be5045"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b3f40644a09bbde279613a0c7a95ba9e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5af2410da90e3afbe09bd36e3bac2552"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9b0c15cb2a39156f0132ff9169c26b43"],["/lib/fancybox/source/jquery.fancybox.css","e59eefaec187c98f5674cb6f7f19d723"],["/lib/fancybox/source/jquery.fancybox.js","dabe8bbc4b047aac04cef9d4d54c96e6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1b134a8f54ae853cfc1e74694010dd12"],["/lib/fastclick/lib/fastclick.js","e56f7ae3ce1ee71aecd12f1a26835a49"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","cd86c4c97b9efedb424f9dced332c2a4"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","37495ab45c168266a2c76d39f6656da4"],["/lib/jquery_lazyload/README.html","cb2eb631cda0c7eb3a4f7dc23cbb3425"],["/lib/jquery_lazyload/jquery.lazyload.js","89a5de5f9ee45192bb02f901b3e4cfe3"],["/lib/jquery_lazyload/jquery.scrollstop.js","54a3132eee25e2b33cf7cabc7e3f53c1"],["/lib/needsharebutton/font-embedded.css","4897437e38b3541153a78f41c24da7e4"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","862cfda5a19dd0aad2f77c88e6322dd0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5a7f64d3ac06799065ef42ebf9f22dcd"],["/lib/velocity/velocity.js","71b70de2f664be0971857b362d5c9256"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1c4309ad72fe4b05a9d4b904c2dd97dd"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","34cc7f3dfcf3d8b1b706eab584d3cb5e"],["/links/index.html","265287bb0aa83c77191ceaecbf6791c5"],["/live2d-widget/README.html","fc3929b3a4a78a796c344fb85fcf0d6e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","c4cd7f16ccbacff3dfbe479b432c2cb6"],["/live2d-widget/demo/demo1.html","6ae4c1359a11452bb9ea4dd363e79161"],["/live2d-widget/demo/demo2.html","3024263142c09d5c4f74902dc3b0ef11"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6198c9fbc8b14a8f65f02d6fa6d5f522"],["/movies/index.html","9e592e67969f5b18e43bab89968d3cab"],["/music/index.html","1497f9ec30aaca2fe742615fed9bb98e"],["/page/2/index.html","367b72166bc5436cc784ec70f7a8ce26"],["/page/3/index.html","43dde842050d605a7c6098a061c2eb60"],["/page/4/index.html","72abfea1a9e392e325aae101ba6db0b8"],["/photos/index.html","af8f048a155a511f481cbe892824a873"],["/posts/14311.html","d9d7d65a1b0c8bad7d08104ed611cde7"],["/posts/15468.html","127f2d3f6f99c1d27db267e2bac70972"],["/posts/16107.html","baa74f5f98afccc8ac3dbc905a045dc7"],["/posts/201e1121.html","31f9531442cca34d1d693a3552627bda"],["/posts/20352.html","9993e5bc18f32be105a3e9c1f46871ae"],["/posts/21238.html","4b9cd131ee963be3fb206859426633dd"],["/posts/22281.html","a46eeb0785ce76087dd20eddc121d3aa"],["/posts/278598dc.html","0c56c2bfb68b17b5806f44acec8696bb"],["/posts/2d063bc3.html","851161798054859215b6af484f312273"],["/posts/30c404a6.html","2c53d95c466a7f4ca11b632fb7fc99c2"],["/posts/51203.html","e5bc10f77533872d5cd4dc001d07270b"],["/posts/538e5180.html","db44ebd4799e40f71dc0af2a43f6dc43"],["/posts/5394fce7.html","1586e6b590181888c451889106c6abb2"],["/posts/59037.html","7ea384c9ac6db2e886d8c3cc7fc46a42"],["/posts/60816b5a.html","7d971d44200b8b6440f5a29c55c93301"],["/posts/6163d4b5.html","e94b13c3b15313b817a1425303c0b0de"],["/posts/69978469.html","d6e314221ee88d4d428344a72fc483e4"],["/posts/6a752619.html","3ccd8c04d2e4f1c2801a366577ebef31"],["/posts/8cc73e65.html","9f3e6fdcd87c36b7d2c51f6efb0591d5"],["/posts/9b621d6f.html","9d4f5995e14373c0ad855c5958e848b0"],["/posts/a530f7f0.html","7d82f2e45c8617fc20d064cc49046a8c"],["/posts/beb5106a.html","73246371ee99320da5f9f54f9d267c88"],["/posts/dd845106.html","ae2d0870c640fa2fb69ad21fc5adc898"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7d25ecfe3c4ee712e455c7982b0af1a0"],["/tags/C-语言/index.html","a1aa39b3c829e2086994deaa7cb9a1b9"],["/tags/C/index.html","d5b978b3d06ed272c1a9b51e59f55608"],["/tags/C/page/2/index.html","afc3e025a5a78b0788e6194a28b74096"],["/tags/C语言/index.html","5e8bcb920522e286646e1b2f4f671ff4"],["/tags/Hexo/index.html","7655d6e084cdc0c84039acd8ed1678df"],["/tags/Java/index.html","8844971db178dcab814495ac2e9ef323"],["/tags/Mac/index.html","a2bc9c44d3cc2e4261819e217dc8ed0a"],["/tags/Parallels-Desktop/index.html","36dcdfa19cc0724e070d75f2bdce8b4b"],["/tags/Python/index.html","85dc51fcf07552c502b79293d19511f5"],["/tags/Qt/index.html","2d43f51efca946cf635116fd69710d63"],["/tags/abbrlink/index.html","bfd96bfd23ca4c0d9cf5690c7e2fe718"],["/tags/index.html","5ebd7219930446ad205286ed0f9631aa"],["/tags/冒泡排序/index.html","5baa4e883751fbd779a9f8c7d1a9f650"],["/tags/双向循环链表/index.html","cbcf3dd348eb771e617e82ab0328449b"],["/tags/双向链表/index.html","4e0e7be24ad001682dca00e24312ffba"],["/tags/希尔排序/index.html","24290b9a01aebb94a972cd0a180abe33"],["/tags/插入排序/index.html","e84d28c9fd3b89f07ecfccdfa8ed5622"],["/tags/数据结构/index.html","855248e5806c8fa4e5cb61cdf2edf65c"],["/tags/数据结构/page/2/index.html","23b679ecbf45b0f6aa118cca53dcca69"],["/tags/杨辉三角/index.html","d8696022b8d82b53e50f9486efc7b352"],["/tags/栈/index.html","18aba0e8cb3c7fcf9f7c8d2a92bb24ba"],["/tags/类模板/index.html","e04bc991a08f75ea7dfa358fa036774b"],["/tags/线性表/index.html","9e91e0e770e4949d12f368a59601e982"],["/tags/选择排序/index.html","492ba5e99f54b345994f3ecb92c3f746"],["/tags/链式栈/index.html","f686ede5c076bfe2f5b5e6819259b3fb"],["/tags/队列/index.html","e7b87944fd1ef9d485b4743d40151412"],["/tags/顺序存储结构/index.html","22e3b39be7ea1a76ef8ef0bdc4193f4a"],["/top/index.html","5c063591a27607988a5da4b2efd73845"]];
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
