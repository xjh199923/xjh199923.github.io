/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3f034dc121d2ccb837937c0663a9366a"],["/archives/2019/10/index.html","64d26aa8ca25bbcb2457879f7952b6f2"],["/archives/2019/11/index.html","1c90246bfeb258c8658c6d9517876bcc"],["/archives/2019/12/index.html","8a45a4bff162d52e8c4193e4b60bbcf4"],["/archives/2019/index.html","48e9a08532806917f4af4532c60e8102"],["/archives/2020/01/index.html","a058916211970346d594be5d797c5e6b"],["/archives/2020/02/index.html","1991f99bd0290ba1347cf069eb00f833"],["/archives/2020/index.html","6f870dac845e77a48e631365ee400d82"],["/archives/2020/page/2/index.html","8fde55faf5896aa9f2dbb689e6a011c5"],["/archives/index.html","f1f5dadb04d15054960423cce459f765"],["/archives/page/2/index.html","b30529cb4934676b124c5cde2d53ad02"],["/archives/page/3/index.html","69255d8f87bc9fbc5abb9ee2efbcdea2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f0937652acf12ccfe938084358174409"],["/categories/C语言/index.html","5057648ba02dd01373f7c2966d5faba8"],["/categories/C语言/数据结构/index.html","f34f7412b0f2529d27b97c3f2d3c8afb"],["/categories/Hexo/index.html","8c8a5bbc965a3bbc8d78e48fc6cd786b"],["/categories/Mac/Qt/index.html","f13b206174395dbb127308928457faa0"],["/categories/Mac/index.html","3c80e2c1d1bcdcc7910a7ddb3ad67fad"],["/categories/index.html","7c1e51dba869f851f73d527fd37b5c62"],["/categories/数据结构/C/Java/Python/index.html","bcc3adb6463147a825ef7034be8ec30b"],["/categories/数据结构/C/Java/Python/排序/index.html","6c270841df356b8febcd5b34748f9552"],["/categories/数据结构/C/Java/index.html","6add5cb85673dae9129851f03987fd25"],["/categories/数据结构/C/index.html","ada5017f22b4e547c4e63dd004a5a4a5"],["/categories/数据结构/C/page/2/index.html","75ab5369d40b8c0c8ceed2b288821a69"],["/categories/数据结构/C/双向循环链表/index.html","1d34e0f40ca1532507ec4a0f8f9c3a58"],["/categories/数据结构/C/双向链表/index.html","c2a1fdf591cd95981bda1a9862ccff74"],["/categories/数据结构/C/顺序存储结构/index.html","ec23ddb9fc69940e321352e693192b33"],["/categories/数据结构/index.html","2a9d136ef3a374d2928c86e41cb7ea3f"],["/categories/数据结构/page/2/index.html","01987a8887be8fe0419425f99a1ecf59"],["/categories/玩转Mac/index.html","c95718406e3582913f28339c35d935a4"],["/categories/链式栈/index.html","6fd316ac01b3ba83781c5a4b255b0d6f"],["/categories/链式栈/数据结构/index.html","e46ef6a5a3e8862a62996b40e15ac6c3"],["/categories/顺序栈/index.html","77e26e1db9e2dcd298745bd0fa5bf52b"],["/categories/顺序栈/数据结构/index.html","d63f55c347ae4003ce8f02ce4b1f4b6c"],["/categories/顺序队列/index.html","583ec37cb76a2c1837fab156c7a55a7d"],["/categories/顺序队列/数据结构/index.html","eef0c9f605d07760dc55520383a687dc"],["/css/main.css","b56608b785488b4b294bc2845991be8a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7e9a3db704aa6750a2ea3ec52da57966"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","9005406933a7f40f50233b1cfe402e7e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7818f3c01a1638c10c20203770db3dd6"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f29e8348226ecff9c2cc095d2d0f656b"],["/js/src/algolia-search.js","8ce270bc45d6c16f76d6da942eb903ff"],["/js/src/bootstrap.js","3f282fa0d2b397b35d8855bb36228039"],["/js/src/bubble.js","e93887a50c4b399825a50ed6c874350d"],["/js/src/clipboard-use.js","687a9bc07ba3bec43914a98c7423a1f9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","cfe9bbf137be2ab02c6965f873287c55"],["/js/src/exturl.js","2d8df272f410a305ef1080a7e21fb067"],["/js/src/hook-duoshuo.js","6bd50975d5cc55fc81d6e921b557bf16"],["/js/src/js.cookie.js","6ba8545a68b718fe245db4885b323acf"],["/js/src/linkcard.js","216e8e5a95bddd91ebd605983a7d751d"],["/js/src/motion.js","d732af186e596c1a0af79ce7db4ff137"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d0c9a130a3c9e961dc9dace853fe94b6"],["/js/src/schemes/pisces.js","6c68bfa8c63623f6cd5f3b6a343061e9"],["/js/src/scroll-cookie.js","9c41b3872e12e1f04c5fdd0d099c79f8"],["/js/src/scrollspy.js","9024df1e04d98044a34828304f34520a"],["/js/src/utils.js","353eab89c652168e0b273244790de9e0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","db02d1622dd92416a2761e6c87f228b8"],["/lib/Han/dist/han.js","106cfa201257eef0c73c8cd2216d9b60"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f01d04bf1053dc2fbf2becea9a3a0639"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5f1797a54d94973bd2a03d96b40cf9be"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","69cd411e81d9c6ba02408a7dc0335fb4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cc599885c1caa390d3643bfbb373cc75"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a945abe1b3cbeea81e09ddbe4d258cce"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","26dae8840a8ac92eb22b4fb8b9733b99"],["/lib/fancybox/source/jquery.fancybox.css","66f35d60d64451664fac5c93956c897b"],["/lib/fancybox/source/jquery.fancybox.js","57c2cd12f623ee7df6ff37f05b195cbc"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","4f739bf921aa6c87b2b8265905d6bfd7"],["/lib/fastclick/lib/fastclick.js","9c9a23cf80e0add31f67d914e7c2b3f8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","fef2fb03d9f56c67176185feec3fb802"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","171a72745116984bdb88da2662d35652"],["/lib/jquery_lazyload/README.html","611473b004d5b1f691e78a67fa7f1478"],["/lib/jquery_lazyload/jquery.lazyload.js","96dc95528e41d0b2e47e64fe06de2e24"],["/lib/jquery_lazyload/jquery.scrollstop.js","63779e939d4f8e92d06f653b92dc4da1"],["/lib/needsharebutton/font-embedded.css","00cd8089ac7b65d29a75fba7e1b44042"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","14b507cd878a2662d74f4e7de0f81ef4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8f60b1e213c660c06c33a7ed23173d57"],["/lib/velocity/velocity.js","806a129017f78f1bda6f6cc0f85e2e17"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3eb56316a55d3b433e9e397a23dd1d4d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","7f0d5b312693dac672e3b08942c1d821"],["/links/index.html","929aa057694b4b43bc50976bfec56510"],["/live2d-widget/README.html","bcec3509b2743d6a1c59302a6f6f4b51"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b0c134671efb8a8b0deddca232bde6e3"],["/live2d-widget/demo/demo1.html","4d89949cd7b97b689f3c971a69392678"],["/live2d-widget/demo/demo2.html","2040e7593658f2edcad7f770bddfb86d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","823aacbf2ea15f9c625e2dd05aabcb28"],["/movies/index.html","fa64c2c9225e60496cb18425d8d7aa2f"],["/music/index.html","e4b236a5b24377152e669dc59ab1c9b0"],["/page/2/index.html","6e26fcd6bd413f3ab76689682e1fba19"],["/page/3/index.html","99616d45a4a3f17ad20d8957c6c8162c"],["/page/4/index.html","55b358a2570dd757ee155438dde46c0a"],["/photos/index.html","8c738ff2bfeff777c13e7d6610f0b581"],["/posts/14311.html","61f66af1ff1251456a606b2f7a226a10"],["/posts/15468.html","26b296a9bbeb920d36824e884efe17d2"],["/posts/16107.html","6edf54ba49179246e1fc9dafca848274"],["/posts/201e1121.html","91a779cb24b8c794833ce1934fa14a70"],["/posts/20352.html","d7f90969d144f29350aabaadbc5445ba"],["/posts/21238.html","2b75286c35869c566992b12b9181b7b5"],["/posts/22281.html","ee678181a1d41e16e1d66bc6a9d7f32c"],["/posts/278598dc.html","fb25de541376aad5db7e7961ce22b053"],["/posts/2d063bc3.html","87d5823442acea2b74d7aa63382d9bfc"],["/posts/30c404a6.html","82b9fddf378ea950703671af91c09c8a"],["/posts/51203.html","32aa435034604f8341361ddf76381303"],["/posts/538e5180.html","eac0fb30c944ccc71b3834f5438d5998"],["/posts/5394fce7.html","efaee4078222741f8eb8957491d36f0a"],["/posts/59037.html","f6891f8fa893827bec8680e3cf74e02f"],["/posts/60816b5a.html","e5c70455bb916dec62294185a5b62fa0"],["/posts/6163d4b5.html","4178e02660f28c8ed86023ec40dc67de"],["/posts/69978469.html","11561d64d6858d6cc044682caefaad35"],["/posts/6a752619.html","c2e618dd14462a118fb1dec0a2f78cdc"],["/posts/8cc73e65.html","f83d69e49259c237456712baa217d9d4"],["/posts/9b621d6f.html","cca8cff05f5608e4b498fd47fa0cdbf0"],["/posts/a530f7f0.html","e9119db998683bce394e617aca762c1d"],["/posts/beb5106a.html","0c37ecbfcefbd1c741d2ae21d134ecf6"],["/posts/dd845106.html","6428b3638228313ba56065384554571c"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","dc728c2b2916f3f7508376138f4fc918"],["/tags/C-语言/index.html","6434a1aa692d3ab357cd5ed60f57365e"],["/tags/C/index.html","45845bf73ac8450f04c29b3bc4ba564c"],["/tags/C/page/2/index.html","bf0fccf855aef1a70aa47528dc8f0162"],["/tags/C语言/index.html","9ea4af355e06db313aa6bc4816892dcd"],["/tags/Hexo/index.html","0576fa10e33f0abf6050e21558d7bee2"],["/tags/Java/index.html","88091506897aff129cef4991738f10e2"],["/tags/Mac/index.html","3382fd29e3a719092687b12218a2aa4e"],["/tags/Parallels-Desktop/index.html","4d227049158c0d8802bfa5909fc89839"],["/tags/Python/index.html","e30f5dc8eeaa67c761610cbde62120d5"],["/tags/Qt/index.html","535a96b11b0f02c51427dc80a1999be1"],["/tags/abbrlink/index.html","39c30eee8b541206a2a958f30fc32a91"],["/tags/index.html","9fb82cd43f5ac3ec2c5e421366013ed7"],["/tags/冒泡排序/index.html","cbd9c7e645aa490fd4027f919fdcc9e7"],["/tags/双向循环链表/index.html","818c63d49d486e4f4091f2e1299e3d79"],["/tags/双向链表/index.html","d66eb3ea8a0e3dcc0c497d522389795d"],["/tags/希尔排序/index.html","b29d42baec45601f49e8e55a2c8fac83"],["/tags/插入排序/index.html","89273d5fcc037b1ba1e66f18fb6722f9"],["/tags/数据结构/index.html","fe6ccc3c38a820777c813f76f97adb17"],["/tags/数据结构/page/2/index.html","84b3c90785d8d9bf03b9dfb33427e5ce"],["/tags/杨辉三角/index.html","6a3d65534eb8f4ae9a4032784e716fc7"],["/tags/栈/index.html","edcd962b0b432d5bb0da630af7cd18dd"],["/tags/类模板/index.html","bb25223a5c2f18d0f4f4ce30e4569f66"],["/tags/线性表/index.html","39160744595d0f832a3e6072e1312f13"],["/tags/选择排序/index.html","d704a7ea13b1a4a14fbf7307570d31fa"],["/tags/链式栈/index.html","960cad2e0a04fe6ed0bb6a894a140846"],["/tags/队列/index.html","de6cf2767a44d9aaf8a638dd9ed4e469"],["/tags/顺序存储结构/index.html","0257241fb5a99ee8ac32925f8a21fae3"],["/top/index.html","0d90869853c0c1b7796b147ebc61b68d"]];
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
