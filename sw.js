/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","032db479bab02516846d06a880a44ef8"],["/archives/2019/10/index.html","f071fd8bc60d47cce86efc2046c93687"],["/archives/2019/11/index.html","876dcfb00e18054f106e73d560f1e08b"],["/archives/2019/12/index.html","b92dc4f25a9cdc56caeb36c61b1197d6"],["/archives/2019/index.html","6de7f27b59602f741825122a86f9742a"],["/archives/2020/01/index.html","00d3fb08f606971c9ee506d55ef88653"],["/archives/2020/02/index.html","61a2bba27b76676c4cb7ddd9c7a571ac"],["/archives/2020/index.html","dcf0cb45406182b266bfb4b6e9282bff"],["/archives/2020/page/2/index.html","48443ed0a98177cbce9624b1599d6b80"],["/archives/index.html","f1bf2aae67421960b4d8c025c5a4d0a3"],["/archives/page/2/index.html","d159309a35f3e1cbd4f5a7b2b47cba4d"],["/archives/page/3/index.html","2fff1f6994d2d85100c802659f971ee3"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","3c471b7a4e8756219eccf478dbbf24db"],["/categories/C语言/index.html","761d510eb702e6ba8c6877dc12fedb1c"],["/categories/C语言/数据结构/index.html","b26ca0dfc8a16a6db98e3fe51ae1c469"],["/categories/Hexo/index.html","855cfc72d0b336e4b13e25f2c9219e3d"],["/categories/Mac/Qt/index.html","76c8752b6e6e2035a21c1f087e3bf727"],["/categories/Mac/Sql-Server/index.html","dd47f5b1e912d22193af3ed04ccbca04"],["/categories/Mac/index.html","613b6807510d46acfcc59895b43b9e8a"],["/categories/index.html","21cca255b7004072d367715fee0c143d"],["/categories/数据结构/C/Java/Python/index.html","eccef34458c6ba3e0f7b358588cce593"],["/categories/数据结构/C/Java/Python/排序/index.html","cfd5a48fa1ad87fcc7e8868e4ec626e0"],["/categories/数据结构/C/Java/index.html","be1ce8c4b40b87a68532eb4ff8949397"],["/categories/数据结构/C/index.html","7795021137ae14079c4c668ccb3d38af"],["/categories/数据结构/C/page/2/index.html","a49dfdd20be83f208bd8290d3b8d46c1"],["/categories/数据结构/C/双向循环链表/index.html","4d494fc29495c92dffd85836dd571fcd"],["/categories/数据结构/C/双向链表/index.html","25714faff663d98a4e9db8bb9a739262"],["/categories/数据结构/C/顺序存储结构/index.html","adc81319c2e1d365aaaca8c6cb560db7"],["/categories/数据结构/index.html","4e1452032954c5ec99565624bffe55ac"],["/categories/数据结构/page/2/index.html","3ed6b57c0462bda52d07da1d1f0649d7"],["/categories/玩转Mac/index.html","da1cc0272d292d4713d7bdf0d3d4fbc0"],["/categories/链式栈/index.html","49a4ea3147ce6654908d54639f821ae7"],["/categories/链式栈/数据结构/index.html","a5fd3c15fcd6fe02dfe2d49462dee704"],["/categories/顺序栈/index.html","cf1df0ea32741f3b1ef18049030ff00c"],["/categories/顺序栈/数据结构/index.html","093c88a2acdfa427e231afe03804fd26"],["/categories/顺序队列/index.html","2843ec4346ee43cce4912592453f7b2c"],["/categories/顺序队列/数据结构/index.html","a33dd369af3d770bd8f3d131197b52ca"],["/css/main.css","abf4ce1d52d7e9a5655b2c2e5cd5ec10"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","71e4a0990df12932b382e6fd4af601a4"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","5cd3b7f600c5cf6820dfabf6f401d809"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","79ed70880d9713ae9ca25bda3f772e50"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","950197dc733658f637c0df2f4215f028"],["/js/src/algolia-search.js","fb6aefc1ab5ee3051499e0facc6b8fa8"],["/js/src/bootstrap.js","0be5dcbb82e807e09e4990a80ffbdb67"],["/js/src/bubble.js","1f3614ed20eed3b90b41d2ceb5b93c29"],["/js/src/clipboard-use.js","f431658dcee36dc55bd6196e12fa8ca5"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2bf86d3d7f381a6db3e74a2af097b553"],["/js/src/exturl.js","65fce4c219ffdfbfe82a7bb866b37bc9"],["/js/src/hook-duoshuo.js","7bf5771d87a2646c228f1e6f3f31ff22"],["/js/src/js.cookie.js","0971c4b9acdcbb7d7334a7e33c341f78"],["/js/src/linkcard.js","0d129e923cb9b56865d60738acc58c17"],["/js/src/motion.js","972f217a7be92e5e5d7f268e2e854fec"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","42be329809e70b45db52136e6145fef5"],["/js/src/schemes/pisces.js","2e360d0f8685774bfa8bfb54f72ac5de"],["/js/src/scroll-cookie.js","fd3e56d9e4a9b134fbb867eb706a353c"],["/js/src/scrollspy.js","64deff5b2fcd71c59315fa5cdde1410d"],["/js/src/utils.js","d220a80cac97791254db4834a22cb9d7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","ffd9fb9de0cabd197eaecbbbc0ba04d4"],["/lib/Han/dist/han.js","4234699e0ba6ba249cb6ad1346cd649f"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0e6970261300c25a723ff57251ecfb1c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ba5713be6c5c5bab276f18a6c4fcd41c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b90766ab59ca9ff52cb5c145aae2ccc6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e56197e1ab0cc2e0fcb9a4e95ff0bf83"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f3b04d3f37344b575613c1ea98eccafd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0718b6d658dea0bf7b13effd631d54bf"],["/lib/fancybox/source/jquery.fancybox.css","d18e99b36c146a7a9c8a95adf6d7918a"],["/lib/fancybox/source/jquery.fancybox.js","950b4a9598830c6a0f511b3a43540090"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","2d8ad76469851287aaf4fc9db0dc520b"],["/lib/fastclick/lib/fastclick.js","970598c0b7cc47ba3ef9bc8518200ac6"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","79e4433dcdb21aa5e41cb8ae8bab8553"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","79b96402c82de6cd8ca2db1db62face9"],["/lib/jquery_lazyload/README.html","978a58a981a84c9416ac88f7b6f89a04"],["/lib/jquery_lazyload/jquery.lazyload.js","17f056953683ae2c53667bfc4dc2e176"],["/lib/jquery_lazyload/jquery.scrollstop.js","61bcc3a8a4829bb613cede8f21fa9644"],["/lib/needsharebutton/font-embedded.css","506302956940a023cf941b7ef4437c2f"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9fde180ef6c934a3065e5f48ddc688e1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","605a098253f53f80d6f7b75265d16927"],["/lib/velocity/velocity.js","51eba2e7ad609f8779d90751935a5765"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","652f8b9e3bf9b24c66a53565873a7f3f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","16c4161bf95fe54da181fc9b25c5d276"],["/links/index.html","7de0ad824a1382fcb18243fb42163889"],["/live2d-widget/README.html","b6b6a9e2292e77484c4df0a50f250f19"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6d5c7cc007e56a809d65cce7f40c7a57"],["/live2d-widget/demo/demo1.html","2cabe304ad5269cf8c22b4fc7e5aeb19"],["/live2d-widget/demo/demo2.html","8cfd797cc7d5440e8224e7e4e0969f78"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","b1e7cd1bfad5114954e7fb47afbe97b5"],["/movies/index.html","91e0cfc06b5524ffc3bab5096f16ae9c"],["/music/index.html","95c2b2324263b13ceb98cc7a3c74303b"],["/page/2/index.html","a9bbf79065d5ee95cfa84ff099bf37d4"],["/page/3/index.html","e2aa7c724694aa4b3f5c3da7eaaa9362"],["/page/4/index.html","b279fe015d41d8d9a02a70bafb5a20dc"],["/photos/index.html","ac838dc9fe4ca5e3446cbc64a06c0402"],["/posts/14311.html","feb778c4b00e652b4dea95d06e7cfe30"],["/posts/15468.html","d6a4b2f9e916d0dcd4f7ce4815f32f9d"],["/posts/16107.html","bad0f8353dfc56065290fcc210d7d6a7"],["/posts/201e1121.html","422de40dfcbde2efa77ea6e0e1bc9c4f"],["/posts/20352.html","5b143d220306114bf060c973aeacd660"],["/posts/21238.html","861c889e9df8a617ea6c4bc710929bcf"],["/posts/22281.html","22e2ebd55b1d855b6127f6d6b105261b"],["/posts/278598dc.html","be5f281347dacbe38f3de215a781ad80"],["/posts/2d063bc3.html","12cca060583886bb0c709c7b7c939633"],["/posts/30c404a6.html","220d7354f0f2285fa34004a00d97f025"],["/posts/51203.html","229a5b6edbb59db909fbe03509d0233a"],["/posts/538e5180.html","58599832da7e1846c4de87cc76086052"],["/posts/5394fce7.html","376b51e76aa99351118d5ba2514d6207"],["/posts/59037.html","0a312843b3e7a77b9a583c99708a72bc"],["/posts/60816b5a.html","17fdd10c0180c5f3da4db64c112171bd"],["/posts/6163d4b5.html","ee26564799180e8affa93336cfb0185c"],["/posts/69978469.html","97694490ed894d4a4965750361cb7442"],["/posts/6a752619.html","e1e2d2c578e02b34e7380e2789b67804"],["/posts/8cc73e65.html","02e50581db28a41340e506ed15988038"],["/posts/9b621d6f.html","065aaed78abb8bbd24d3daa5f29fc4b1"],["/posts/a530f7f0.html","b2aa86d6f30bd9fcd50c2adc3e57bfb7"],["/posts/beb5106a.html","5d0ca499fc80358e445f72e8022c72d6"],["/posts/dd845106.html","d06ad4acc34ab6bdfb923f415a852841"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","2fd57e83bf698d08bf777670d7a5a558"],["/tags/C-语言/index.html","3ef93cb3671874160e876b7441c8d20d"],["/tags/C/index.html","40029aac85a467b599372325bcf1114b"],["/tags/C/page/2/index.html","bbd2b6f6392b776ac80101542d91f8f6"],["/tags/C语言/index.html","bbddf32aead0df4d4011b4bbeabff8b0"],["/tags/Hexo/index.html","017018a3dc8d698cde43b1a7e38aee9b"],["/tags/Java/index.html","4c83ed461ec323f1254c3056a665fe91"],["/tags/Mac/index.html","82e5d78ff27f83c6537bd339a24c9bf1"],["/tags/Parallels-Desktop/index.html","dc133d23a10aa14d5bfc6f7914fde90a"],["/tags/Python/index.html","0515e252bc3bb8c7eece38ebf0c22719"],["/tags/Qt/index.html","5740bf77bceb0b08fabf277058f9aae6"],["/tags/Sql-Server/index.html","31c8f7b8eb516e271c09d3a28a9c6368"],["/tags/abbrlink/index.html","ce170a7fc30bb53b2f3ec8e2fc969936"],["/tags/index.html","3e8472ab102f261a5f3e2c4ff0b7fe73"],["/tags/冒泡排序/index.html","8aa32539caac6e306d6d7c0027157885"],["/tags/双向循环链表/index.html","4057a74dabc48c0c173c9315d2de1276"],["/tags/双向链表/index.html","fbd0ee39e52eeb53846c303969e12e0a"],["/tags/希尔排序/index.html","0471ddf956dd402d849b33a2bdbc551b"],["/tags/插入排序/index.html","6bd3ecc63492df802cda77278dcc0258"],["/tags/数据结构/index.html","06d124765e704e002a7c06ce01e56635"],["/tags/数据结构/page/2/index.html","a703c22ae3ed9ec16dedcb3a44c505dd"],["/tags/杨辉三角/index.html","65fda00eed95caff1a9b3a4fb9c18cfd"],["/tags/栈/index.html","8cab752eaf0457f57e3f7ebb26e813a6"],["/tags/类模板/index.html","ad19e0892893c0ee9eeb09e7cb07b0a4"],["/tags/线性表/index.html","2c7053fd3fb0518113813047db215ae0"],["/tags/选择排序/index.html","ebac8906112e53de0c28d259848acb6f"],["/tags/链式栈/index.html","2726257e716a2e0f5f8658ede3e41c6e"],["/tags/队列/index.html","c33e010dafe52cb1ca55d94febf87a69"],["/tags/顺序存储结构/index.html","76d1b934d27e8e81e0b5ab498de9dd0b"],["/top/index.html","8bd0244eea7700f0f0a418d7abedcae7"]];
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
