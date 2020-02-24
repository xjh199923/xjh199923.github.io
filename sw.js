/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","85b29566097cb629bc023a10b7f966b8"],["/archives/2019/10/index.html","ed5f8bb73366faa2317f2281f9a34cf1"],["/archives/2019/11/index.html","d0d30a655a926f81340c857d798f27d3"],["/archives/2019/12/index.html","44a41f00bf425265ccbe382967590bd8"],["/archives/2019/index.html","10b90f18f4dc98b0af7fba743feb8e21"],["/archives/2020/01/index.html","1565aae11d5c5e9bdc9315d7f8ca765b"],["/archives/2020/02/index.html","21f4702927ce93258b653ef928f7614b"],["/archives/2020/index.html","5c02ba19eb5f16087eb307512a31b982"],["/archives/2020/page/2/index.html","5818cb70708a6220bf6ca2b8556cb9b0"],["/archives/index.html","d5c346515f4623df3d3ae71e779ba80f"],["/archives/page/2/index.html","b24759e80dc20491449ac7bbea1b5ed2"],["/archives/page/3/index.html","82b02a5be7d31f892e5b476b916dfd56"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f7d2a8c7dfc467f3fdc6f74f035af5f2"],["/categories/C语言/index.html","ef383d226a8ba986c14e844b91ae99d1"],["/categories/C语言/数据结构/index.html","fd3bf2d81e3b4877564b286e9222112e"],["/categories/Hexo/index.html","2097165d046f345379962032e76a0646"],["/categories/Mac/Qt/index.html","91c620d7fd0469189d90466d2eb86b9d"],["/categories/Mac/Sql-Server/index.html","cc74460691a2a220e2d94d2d76de262c"],["/categories/Mac/index.html","2ac9f39084eb45ea86036bfb1bc78b69"],["/categories/index.html","9f6fe38c548d568e16fd05c35449e2a8"],["/categories/数据结构/C/Java/Python/index.html","016ec208e069678651913d714451c986"],["/categories/数据结构/C/Java/Python/排序/index.html","c0ae7ac5a7a96fcfbcc06276c7d5fd02"],["/categories/数据结构/C/Java/index.html","39e63f884b6e7b0a3137c9895ad048f9"],["/categories/数据结构/C/index.html","8f0d3d095f74504ff3a3f3573ab7650a"],["/categories/数据结构/C/page/2/index.html","70e206ae5d6775728c8869c14aa82e33"],["/categories/数据结构/C/双向循环链表/index.html","a392d3c9e1c6c5156238db3e0435c396"],["/categories/数据结构/C/双向链表/index.html","fe5e9955da95ab4d92ae333c3d976791"],["/categories/数据结构/C/顺序存储结构/index.html","c7a7d22d93cbc1aca81a2b88f02cdd97"],["/categories/数据结构/index.html","8ffcf8f5a4c57e8d4412d254bd8f7490"],["/categories/数据结构/page/2/index.html","9ee317eeecab2ffd75e76026f8af220e"],["/categories/玩转Mac/index.html","e14ef0345cf43ae352195c4add4ec8a7"],["/categories/链式栈/index.html","8a7648be109c36a7e35f978756b95f21"],["/categories/链式栈/数据结构/index.html","6d5ec59fd70907ce6a7506abb754a625"],["/categories/顺序栈/index.html","45708cd7710373d5caa864c3c135beaf"],["/categories/顺序栈/数据结构/index.html","8561f8bebe71f2ea1fd4e1fc3d8e83f1"],["/categories/顺序队列/index.html","6a4ecf6596d01c8d126b811c09c03e66"],["/categories/顺序队列/数据结构/index.html","1d0e244c8fc86b0548a042c0b1a01c26"],["/css/main.css","5a0d3fd261564d94b835255c4ccff152"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d6de74a0cfc6af06998ecdd54cdf3ec9"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","1f473d119a7bb888606af519fd4e55d9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ef422b6a2125ed6d4c98a5cf9b014702"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","395f9f705f457cb8304363720a3b7d2e"],["/js/src/algolia-search.js","fe892ebe405e87a6525c8ff14e07af9c"],["/js/src/bootstrap.js","576b5844f91a99df595ba5883262e7b3"],["/js/src/bubble.js","ea08366ed3bb083ec2d0376ebca1d8ab"],["/js/src/clipboard-use.js","2b9c3ffcf546b59a6e2ec19e7982c113"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","aa69de43874bcb4ccc4fa6ad2495e7cb"],["/js/src/exturl.js","1f0be925de7effeed557d26ca5304632"],["/js/src/hook-duoshuo.js","ca776bea88a8584f040a1c58b38aaa5d"],["/js/src/js.cookie.js","7d0decaa80a054ee73540f85774c1a74"],["/js/src/linkcard.js","90de5764aa934fe250ffbd21446ce4f5"],["/js/src/motion.js","fc9bbf9861d47bd873c5defd819e62e1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6d6303613f079b870581975d1461b9b4"],["/js/src/schemes/pisces.js","7fc61d931eb30309651ad39ab5ffea54"],["/js/src/scroll-cookie.js","0e5e725c8ab4684706eef580df585fff"],["/js/src/scrollspy.js","002c0d3484b0dbdfa163ac0037721cb6"],["/js/src/utils.js","1b5b6ab068704ec6081b652eee0907d9"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","babc2bcaaaa25a961197fac4fd45b018"],["/lib/Han/dist/han.js","6873d32ac323850b00eb138e8703ddb6"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0740b405a7e54af92faff5209601a98d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cde692b262060b322b8765161c0500da"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b8c29bc61337894567781d54990faafa"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3db23a33ced04b306f2ca8e9c89c7b7d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","69a5de88b978df8e8deb197f039de004"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","69d5225b237b74d2792e4e6c01c662f3"],["/lib/fancybox/source/jquery.fancybox.css","2eb00f4072a19114fb9a9ac94cb5f5ca"],["/lib/fancybox/source/jquery.fancybox.js","20802c75a91b4ef1662dff77e9ee65a8"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","8098d81a1badf0d47395967032c4193e"],["/lib/fastclick/lib/fastclick.js","8f043da582720f64a03819743fa7e25c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4545ff85e169276eff7eb35758dc6bed"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a3faff4dc298e538929972117ba3c401"],["/lib/jquery_lazyload/README.html","b62acc45fde667c94e781de910aee5a0"],["/lib/jquery_lazyload/jquery.lazyload.js","3a4cd3f3e7a7392df73f9363a02c2523"],["/lib/jquery_lazyload/jquery.scrollstop.js","81040040778d97397736e453b723e451"],["/lib/needsharebutton/font-embedded.css","55db31bb817ddbcd81f5fbc09a453771"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","0795c4f8c469f99f317437e3ee9a870a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7f1066224bf97f9a3b5372ab6ab22e69"],["/lib/velocity/velocity.js","23b4b837a7a0828c05a3e713355627f5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","187925080d34c0898ea6850311c86f15"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","706adfd8e4005114d152ecfc9477c8ae"],["/links/index.html","22d5d7c7330450be4ba571efbfaebddb"],["/live2d-widget/README.html","d274d65617892fcaa92ee1b7407e1a92"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","dfc1e002916cbc529988d7ce65a3104c"],["/live2d-widget/demo/demo1.html","5686ffd13f90cd9a80c9c3447f5184d4"],["/live2d-widget/demo/demo2.html","b605f41c8ed807ef6274f841beaf5a0b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","ea48dfb20c332a2a2fc4e6bf3fd0ffcf"],["/movies/index.html","d36d735a59dcaaad5bbdf5bff9f8ebbf"],["/music/index.html","0de59ebed674cab1c20f3b1c6c87643d"],["/page/2/index.html","22a01968812e926ddc4fe57bb0e099ed"],["/page/3/index.html","558852d258d7969e2bfc1b229fa61598"],["/page/4/index.html","59ee947dfbae1963773b1a6718450d2f"],["/photos/index.html","15a68cb5afa1e6637effb6f79c428dff"],["/posts/14311.html","281963427e76e26d9d20282a56d986d8"],["/posts/15468.html","a81ecf270336783785267ba2122c24f3"],["/posts/16107.html","502937c46bf5921f3b2fef0b92577634"],["/posts/201e1121.html","fe5850cdd13512a6ea0979e42ba523fb"],["/posts/20352.html","872fe3672b82fb19f23afc95c273ef38"],["/posts/21238.html","38e97797ba0d1018af2847f5fd3fd2b4"],["/posts/22281.html","dfe93fc106cbf6ce8a44614b5b5d9a62"],["/posts/278598dc.html","a3396ee3753619f1265cc0271a42e86e"],["/posts/2d063bc3.html","4cc664d5a1afb132cab5aa307df12266"],["/posts/30c404a6.html","47a950a915b0de38866533337b7bd124"],["/posts/51203.html","e7cca45506bf14ddb2f557629c2def93"],["/posts/538e5180.html","b12e3aa0dda56cbf1543d6a793adc3f1"],["/posts/5394fce7.html","ccf3339d2dfc442d07afcf79b91c3ac0"],["/posts/59037.html","695fa89ce9cf8308e11e335c1b6983bf"],["/posts/60816b5a.html","f0fc52a78e5875114c91b8efc1d7129c"],["/posts/6163d4b5.html","39e4d415d613fee155aeeed7ac57f5a6"],["/posts/69978469.html","8d9b0c25956a5412d305af5612e5e6d8"],["/posts/6a752619.html","aa089c657bc24426637561c22bf54aa5"],["/posts/8cc73e65.html","428f93f77df5a8a2dd74d1318f237feb"],["/posts/9b621d6f.html","7ad652d94751f05d79e0a4173046b097"],["/posts/a530f7f0.html","3aca5aa0d3a3de56cc33054a3386dcff"],["/posts/beb5106a.html","e70898d77b8d7b167d5dee2cfb8bb474"],["/posts/dd845106.html","c31994d260113b693de6f3ba8e432e55"],["/posts/e35620b3.html","a894830e24e5986cfa2d4d63f79a5540"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","595321f1cd49532e62a99bf3a0b13769"],["/tags/C-语言/index.html","36026c059f2cf5b8c04d4cff98d9fafe"],["/tags/C/index.html","eb000003aeafeb43b8f791e6fe02affb"],["/tags/C/page/2/index.html","ad4713dc1c57b563c07ec4d7470f116c"],["/tags/C语言/index.html","1db5600de64a69d7b5565d3e275cf979"],["/tags/Hexo/index.html","b24cb5a2e231aa6c838600db7af92871"],["/tags/Java/index.html","05ea3ef47f8e4461a465767b072d3bbd"],["/tags/Mac/index.html","f49c04008ec9a7975188017b4fdb4af6"],["/tags/Parallels-Desktop/index.html","2b4b81bdd7e51f4cf6c97b15a0907a65"],["/tags/Python/index.html","18f5ee8e5be4accc0f6b10f6c0dd5612"],["/tags/Qt/index.html","d9eda1cc60efa19ba2180f7487ec7080"],["/tags/Sql-Server/index.html","07d6daa0e334858e4b91eabab54506fa"],["/tags/abbrlink/index.html","598eb4f16bec4f4084f3b0762a859b4f"],["/tags/index.html","3e50a39e19ad696e345a73226360e378"],["/tags/冒泡排序/index.html","90fe2cf663c028b933d42db05c560d6d"],["/tags/双向循环链表/index.html","a22a93d5a76f73507fd0cab59ae31065"],["/tags/双向链表/index.html","950ef478f869e013fd5c1f9abd0f8249"],["/tags/希尔排序/index.html","d62f00d20ff0830c7fd46cc647a59c35"],["/tags/插入排序/index.html","3361556d005cf42298fa686f49f071a7"],["/tags/数据结构/index.html","d6b3d970027c4d8e608a1dfb752bf8b0"],["/tags/数据结构/page/2/index.html","d939584b71a079a06a1bc2aa9c4346e8"],["/tags/杨辉三角/index.html","db468723ad6c86cb98145ff88f2514fa"],["/tags/栈/index.html","200610bd82da008656ef4fa7a8c32d16"],["/tags/类模板/index.html","4ae079eb550ad5440d556e7808b36ba4"],["/tags/线性表/index.html","a17e6cea1aea9fd80adc2b4d82506c76"],["/tags/选择排序/index.html","e1cceb51c08c41fc98f0d3a5cb946e77"],["/tags/链式栈/index.html","e910f5bad08ac0eec6e1a6e7f8a9c186"],["/tags/队列/index.html","bc4ea07806e8755dddf39ea115caef96"],["/tags/顺序存储结构/index.html","fff226961a23f98cc607f77cd9646c74"],["/top/index.html","ec449731aba847a0b0dc9b8f2073634a"]];
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
