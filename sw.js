/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","97fc0546b2e0866e2d24bc27145d5149"],["/archives/2019/10/index.html","5b9cf44ffd8007cafef12d144fb94492"],["/archives/2019/11/index.html","d37049ba42187d7d40dfc4998574077b"],["/archives/2019/12/index.html","62ec3f9a6af6678d36b8d3af41544416"],["/archives/2019/index.html","b752df7dad3cf41ad8599a56bd2b3268"],["/archives/2020/01/index.html","ade2083f47710b8f15aa029ea115e407"],["/archives/2020/02/index.html","2c080afe1eb33facf0ff02ec251ff479"],["/archives/2020/03/index.html","4cd447e857133cb051970f32d22637cf"],["/archives/2020/index.html","6fbf37c6bad999d9ae132766feddaa2b"],["/archives/2020/page/2/index.html","64e002066c59f10b5480ca21d5939333"],["/archives/index.html","dbec492bbb4ea2397db97842b7c99015"],["/archives/page/2/index.html","47c07995dde5a4e06563288426a2d94f"],["/archives/page/3/index.html","89af6734fcaf63f52552cd6d8600e543"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e7587d39cff3a795e25ab30e4895bd03"],["/categories/C语言/index.html","644f8fbe2b572efecc5db44c660e5948"],["/categories/C语言/数据结构/index.html","573252f68f98b3defbdba9a4c3f3b522"],["/categories/Hexo/index.html","d1d08f46f8372365aeecc414658f848b"],["/categories/Mac/Qt/index.html","8cfe5b7829ad9c355b288222965f698d"],["/categories/Mac/Sql-Server/index.html","764b90212960efc7af8766653b761255"],["/categories/Mac/index.html","037c7460e6bc7bd3dec881e6ed972458"],["/categories/index.html","f311e00544291c43d42f20633c73049a"],["/categories/数据结构/C/Java/Python/index.html","c6798589c8b0729dcd40632106fdd983"],["/categories/数据结构/C/Java/Python/排序/index.html","ecaa02bc9123456295797df7f91dfa9f"],["/categories/数据结构/C/Java/index.html","d7413c987077cded89e21343456da558"],["/categories/数据结构/C/index.html","1019cdebe9f0fed7b8b3d28abd417ed7"],["/categories/数据结构/C/page/2/index.html","0f68b36598035b317497b789c1dc52fa"],["/categories/数据结构/C/双向循环链表/index.html","42e4dd07c3756d99f68c45a7a74b49c1"],["/categories/数据结构/C/双向链表/index.html","65695b732cc2f7f0bb3cd691b9c173fb"],["/categories/数据结构/C/顺序存储结构/index.html","5e2fdfa5f38819b69821ac689706273b"],["/categories/数据结构/index.html","3361ab07feb205e94c36ecf9ce9b78be"],["/categories/数据结构/page/2/index.html","f2f5d83ab2979bf2bda4e1966ccfc2f8"],["/categories/玩转Mac/index.html","078c17065e46da11df753da6d8a1535d"],["/categories/链式栈/index.html","c06ac50771bf9fb9293df32d4d014d31"],["/categories/链式栈/数据结构/index.html","49b3d403c2a66465baea3c21080db69a"],["/categories/顺序栈/index.html","919c9a2adf6b20e59227a5d902cc77a9"],["/categories/顺序栈/数据结构/index.html","33ead71666406d35549d61b9e4cfba1a"],["/categories/顺序队列/index.html","86cb41adeea34a379172e1b319183080"],["/categories/顺序队列/数据结构/index.html","158114a2e5240faca4102da39355364e"],["/css/main.css","cef1264b37fdbe39336f3bd69ea94cde"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","fc67c5f6f03dc29c6335432ea1a1b490"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","616ee20cc800a8317be11502740cb949"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7f53215496a5dcf7cc530f046a747422"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","259a7ccc84f644662c6b8c0a57fbd3ba"],["/js/src/algolia-search.js","512e521bccaf2d6d0a96ed950d081ba3"],["/js/src/bootstrap.js","04621d23af2da3687fb9572fa4d09192"],["/js/src/bubble.js","7e89e5cda3e2f52f872a4525be070dc5"],["/js/src/clipboard-use.js","3c1a6c2f9a51afe92a9332a6797ff83b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","bb8db1a37706590c16c2f876f7b6f889"],["/js/src/exturl.js","9f69d85a93bfcb5cdf19024c91bdb12e"],["/js/src/hook-duoshuo.js","ce623cb3d4d7658a594a677b84431483"],["/js/src/js.cookie.js","3293ee54f685461ff0a7e4dba16aee94"],["/js/src/linkcard.js","46b46183b560dd85ea58d6cb8159d03b"],["/js/src/motion.js","d9c2184a751cb236b5c5858885c1603d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d0c2a05626f3246b6e4102e31e399e22"],["/js/src/schemes/pisces.js","e91cc7d125644e8752ac5fb2ea661733"],["/js/src/scroll-cookie.js","4a1e47563693cdf87024498303f34cc3"],["/js/src/scrollspy.js","5b1a6007a3cb53cebbf72911e1f6851d"],["/js/src/utils.js","80777d2ad9c4a0fbf3c0d01dc66cb9e7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","4816a69b1b794675da0e533e3bf9804e"],["/lib/Han/dist/han.js","b45518453ec8c93bd78ebebc24b024af"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8a0aee1864727c2ca2728be287b0e566"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0d787db3640a57c9be6f2c10d05d31db"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","7912d4c491d42d121c9c8701ddf737b8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cafdb0a431a5c16dd4c22eae46126532"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e5651fdd640098e88471ded759affb4d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3926f497e37d65be5820bf11ea550437"],["/lib/fancybox/source/jquery.fancybox.css","2e47759aaab05cdb94ded661a30d908f"],["/lib/fancybox/source/jquery.fancybox.js","0ca1f7b25e97a6def48fca84398889b2"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9a68f63f0b0bdb12ccb0eba4e36e88ea"],["/lib/fastclick/lib/fastclick.js","e2938117972b90b89ea13c1ab6308c4c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","46b8b36e28748d44c5fa6fe9b221e606"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6af786c2e413a8dc06c8252ad0007314"],["/lib/jquery_lazyload/README.html","f5fd28d05d87d75a2e65138f473ba1a4"],["/lib/jquery_lazyload/jquery.lazyload.js","48b27f65c7a3d456871d991f8fa8321e"],["/lib/jquery_lazyload/jquery.scrollstop.js","6ff5639b0967529e190cdd0961302d4f"],["/lib/needsharebutton/font-embedded.css","2f95e02c5ab8289a6546d2e245117024"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","751744a48a0124d4bb43dee451551c88"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7769a66ad4c692ed123ffe5a47e8edb7"],["/lib/velocity/velocity.js","1b0752b92b40501eb38f64daf02d5a5e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","580fae69fefe555a0b53d2f876a89c03"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","9529714f39befe42443c53c71dc31fa8"],["/links/index.html","8c7f5309217d98a216459dd2c56fb4a3"],["/live2d-widget/README.html","096ddf739ff67bc36bbbcf787d99cfde"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","cf45422d86437897cdd81c6c37cfc041"],["/live2d-widget/demo/demo1.html","ae81f9b2dbdef0d185dbb4c1b2588ee4"],["/live2d-widget/demo/demo2.html","a5f9faa98067c31ed3c4e888ca8c9a99"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","0f40843b13b332cf5a06c93029477f2d"],["/movies/index.html","8d1963e3b79d3bb38eb3e4d52f916105"],["/music/index.html","4b442c509be10a207f45cc7b0640094e"],["/page/2/index.html","e12beefb135eb59c17df17d9a19d73f6"],["/page/3/index.html","6b09a11d103704cc5c5f00e394ff8594"],["/page/4/index.html","a5d9ef414cdd7933dbf5748d39a97851"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","e6cdcff3186508699c11c9bb1a91087a"],["/posts/15468.html","c9e1d30a693c45ab1dd64a018a254faa"],["/posts/16107.html","7bba552185132fe1c71246ce18b92e88"],["/posts/201e1121.html","5fcf8b1551a61ecc98f14e08c8c9f6b0"],["/posts/20352.html","35c2bef655ea63a6e95f69a8975cadd8"],["/posts/21238.html","e48cb609b08b56090aa0caf4d76d60b5"],["/posts/22281.html","a69b7c25962980153564152a0c850bab"],["/posts/278598dc.html","f016ab7daca76c614530b3c6f7b3ff40"],["/posts/2d063bc3.html","e0cdc41e7953e9697b0d98c3dc8cc0ce"],["/posts/30c404a6.html","a1d3a9275acb722ee3f0a3198a82ff53"],["/posts/51203.html","f16495215a6d4a36b66aaf37fb159792"],["/posts/538e5180.html","b4fa9123e74beeba60481ba4f92d5134"],["/posts/5394fce7.html","def427f49b0a9ab4874e9aa5d4884121"],["/posts/59037.html","1d6f7473af0fa63e406329a47b8a0ef5"],["/posts/60816b5a.html","75dd66f0ef76cda813bc5f51596c4d4a"],["/posts/6163d4b5.html","c14c498dbfc9da1e4c8b9934956a0250"],["/posts/69978469.html","b20ef848b212fcf03959f98312c29e58"],["/posts/6a752619.html","f3cd6227bd13d598be3015a976fddcbf"],["/posts/7fcb11a7.html","a57e0c94dbd7e8031169653500a46115"],["/posts/8cc73e65.html","f79f8c59ddd229e5d4fa2bd184ba50c5"],["/posts/9b621d6f.html","a47c9091e04989cfd332cdc6e0769cbf"],["/posts/a530f7f0.html","61ebb475068d728629643ba6e1319806"],["/posts/beb5106a.html","f22416ee2d0f3ba2b6f43c5c18dc0ccd"],["/posts/dd845106.html","0f489072640ca7980e461a771baffb6a"],["/posts/e35620b3.html","feafd7329c0f4a1b29c6ce6dd946af0a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","847cf99aed3f373b2e219aeddb1608e9"],["/tags/C-语言/index.html","6fef64281d11cdc47e8ade6bbb35e222"],["/tags/C/index.html","f1b1ebb2b78374bbfb8773456e4a747e"],["/tags/C/page/2/index.html","8e961f76ed8f8775ddbd7c1e8f0b984c"],["/tags/C语言/index.html","ed546b27efd9d3bcbdd0cdb7bc067652"],["/tags/Hexo/index.html","eaca8e38e8dfb6fccc223dd01e5a07d7"],["/tags/Java/index.html","3c26ec727f2f3373726dd9862213352c"],["/tags/Mac/index.html","81baeedebfaf96cbf55a612cfc61b805"],["/tags/Parallels-Desktop/index.html","f6314350233784616827bf866b336802"],["/tags/Python/index.html","8f357a2409aa20b81fa514d3d2479582"],["/tags/Qt/index.html","fa4c737eeba1942bd22b19ae66a76123"],["/tags/Sql-Server/index.html","738129acd8da03153d22b2c74ef2d86c"],["/tags/abbrlink/index.html","6818fdd324ecf0ed0ac65e9c3b45b3fd"],["/tags/index.html","2d190be9b92a665b8d0c28047e266075"],["/tags/冒泡排序/index.html","790f31dfea69f11a04df69a0a21ae4b5"],["/tags/双向循环链表/index.html","95c6ea520bde95572da517ddaf184b17"],["/tags/双向链表/index.html","ee8340def6ebaad3614a46e3e7d3be8d"],["/tags/希尔排序/index.html","5b9487dc81b07b799b8c19ee6ce7b8be"],["/tags/插入排序/index.html","c3fd7971feaa7f722f57c04bc5b646d4"],["/tags/数据结构/index.html","c8c17d5de6f958ba00b12a5090c31e9e"],["/tags/数据结构/page/2/index.html","7ce1917e1e178d316483e4c87ffa93ea"],["/tags/杨辉三角/index.html","69525fb5ad9bb9f1307286cdd164e21c"],["/tags/栈/index.html","398907253da3d12b48eb582c77680143"],["/tags/类模板/index.html","4d46b24e71a2949f284609bf67294c9e"],["/tags/线性表/index.html","32aba28e0fb757d0f37fb0747d88308b"],["/tags/选择排序/index.html","7a97a837cfa964b0d8a519b2e9fc4def"],["/tags/链式栈/index.html","cc80dd971dc1e504db7cd6ac1d740ee8"],["/tags/链式队列/index.html","1f02d48f13f371db27081d98b3802957"],["/tags/队列/index.html","459c49847e7e78b9119fec4b68c3f2d9"],["/tags/顺序存储结构/index.html","264575e6b7b9f6122153a40e1bd21170"],["/top/index.html","b9d57513f6ef8c2450b522a6ededc099"]];
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
