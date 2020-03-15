/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","ac31f2c27f465b8e86f43a72a4980559"],["/archives/2019/11/index.html","f3bb8a11075b059f1396c0f7b204df9a"],["/archives/2019/12/index.html","7802fcea9e308fa29038ae1bb86ee1c3"],["/archives/2019/index.html","1029878ee8a53332488efbf9a98f2348"],["/archives/2020/01/index.html","65eef0b016f7adbf50afd04a84ad3bd7"],["/archives/2020/02/index.html","f76ea34a53c59a01dbd63785f2394fc4"],["/archives/2020/03/index.html","7e3663bf412b0b3465e3620f1287ef35"],["/archives/2020/index.html","674c6be064ca8b0d5c91a851353cc1fd"],["/archives/2020/page/2/index.html","d01918a989a5e50ef91453aa3bacbade"],["/archives/index.html","e1cfcf2cf46ca15d3c4e99f1da8a696d"],["/archives/page/2/index.html","faaecb873783b80ac79c695222bd01d5"],["/archives/page/3/index.html","85ce88ebb205a07075206495f19c3d6e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","966d9504f4ad9e85824d8cc8f39f2eff"],["/categories/C语言/index.html","1c33bed3bc3a34453dce1a520b5003d6"],["/categories/C语言/数据结构/index.html","dfe11ef98425e5330fbbeac9cce5d8f5"],["/categories/Hexo/index.html","5e283d288a1808a7dc15c743ccb1d416"],["/categories/Mac/Qt/index.html","23a779b5579e096b7f58c3187d85dea8"],["/categories/Mac/Sql-Server/index.html","6adaf943f86c59a7e3fd543c5429025e"],["/categories/Mac/index.html","7f6bf1bcbc0c76519fa9a86445642abb"],["/categories/Ubuntu/Hadoop/index.html","7df3a79797ff2b0e12fbdff88b1bbe6a"],["/categories/Ubuntu/index.html","42e37452f4ca75e0ba72d9e734f40892"],["/categories/index.html","f141e4dd506cfe1f96517fdc7fde4803"],["/categories/数据结构/C/Java/Python/index.html","1744cfb9af06e955ec69d6c175e994b5"],["/categories/数据结构/C/Java/Python/排序/index.html","7de3edffcbb97a58200de9271fcbc5c0"],["/categories/数据结构/C/Java/index.html","031911cc81589539732df531de343e27"],["/categories/数据结构/C/index.html","d1fd90a8b6b1c9feddfe973739db67df"],["/categories/数据结构/C/page/2/index.html","73532eb4f21c0f516db8ec2ad565ac2d"],["/categories/数据结构/C/双向循环链表/index.html","b04288d4e23aa74c6cb49365f0250375"],["/categories/数据结构/C/双向链表/index.html","fb9dd9b8290a07283bb8d038ee2bce21"],["/categories/数据结构/C/顺序存储结构/index.html","b7c500d41090e1acdaedc538f17797aa"],["/categories/数据结构/index.html","1e93f6c7edd91d9947719390b7fdc573"],["/categories/数据结构/page/2/index.html","16a860d71030779f4676256a62fd4b20"],["/categories/玩转Mac/index.html","0c980b0aba9c33abf26c2e29be344719"],["/categories/链式栈/index.html","a63e9c220d05e43683c76e1b728dc3e0"],["/categories/链式栈/数据结构/index.html","23644c6588cdf3ef837b07fed9b8899e"],["/categories/顺序栈/index.html","6cbb1bda1e19bb9dfef187b2997ad78a"],["/categories/顺序栈/数据结构/index.html","6a36e3dd15cece976095c4e15e44c06a"],["/categories/顺序队列/index.html","336c3416b917bc897c64ee3888066548"],["/categories/顺序队列/数据结构/index.html","3b1b714d0fae3a945bcad061f59203ce"],["/css/main.css","6198b2d8fd118ef95d4416bb25c88fc0"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1c06eae12cf1629208c48dbb9a108ae1"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","82ae2430c64b8617edcb59fa6e6359f3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3c3bcfa9a43dd3d9935feac0327d889f"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8c7e53ee0e2974e9a2c048d38525d403"],["/js/src/algolia-search.js","37907ba0419cc0cade8278e52bf9831a"],["/js/src/bootstrap.js","7f279c86f516844277ad32192e06b01b"],["/js/src/bubble.js","3816f4dc7e8de76f537ed9d5bb80aea2"],["/js/src/clipboard-use.js","962678469cd2b9e665aae99c8497c8b4"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","dc187e073fdd97198778e95dc2c16470"],["/js/src/exturl.js","a2378a0bcf23d233b9b012635d333c97"],["/js/src/hook-duoshuo.js","de0bd61cdf4ff7403675ec74925159a9"],["/js/src/js.cookie.js","e7aaedded80ffd33deb3a6157c990621"],["/js/src/linkcard.js","c3dc9cccaabc8e0e86458f67e24642f7"],["/js/src/motion.js","23f0aa71a965817e61f63987a8413225"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","64c8006f186ebc73f3c9b0af7aa60e66"],["/js/src/schemes/pisces.js","8f0c5519320a74f816b586b96e892af7"],["/js/src/scroll-cookie.js","2c30a82a1d93633d78e8983a26585647"],["/js/src/scrollspy.js","2274141f7052af801e56bc79bb93d177"],["/js/src/utils.js","eff1d7152579212614c0b976095d09da"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","c01fed02882dab806e47a3326977588d"],["/lib/Han/dist/han.js","6fb0d7491d75cd50609a68d9f083b221"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","76e934715867e58a6d3c3df32e736a45"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","eeeedf074a156def3f3e6c5c591b1fbd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0f5ae651a52e45340f74f6629ebfe44e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d917e846b55e2c1ee450c93851f31a1e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a3bb2a7c4255976939351582180a79d3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5aa52d22ddb7c06229b59bdfcc8125c5"],["/lib/fancybox/source/jquery.fancybox.css","d110bb6ed3c3c507c8111fa82358d03e"],["/lib/fancybox/source/jquery.fancybox.js","b71718f8074f57de883f160616735f9e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c1f434d93f65967cc680ac16ae0b9f05"],["/lib/fastclick/lib/fastclick.js","57697d4f72863e0b10d6a374d2e43f23"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","36bb2cb0cf978420e49bd354358b15ea"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","dc44394a47cadbdaaf6ee1d66db1c594"],["/lib/jquery_lazyload/README.html","caf332fa5b67343ede24830aa993c15b"],["/lib/jquery_lazyload/jquery.lazyload.js","b5d67ea8114bae4cc9e99a2207ff0fe8"],["/lib/jquery_lazyload/jquery.scrollstop.js","7d445b653e5c84219d15bac8419c35d8"],["/lib/needsharebutton/font-embedded.css","f5c6528f66655e68dd71bc51ccafb6e8"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","44820557a39d397dbb2f9a7705547254"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9ad0fb22b549b0c2ce527662b097a148"],["/lib/velocity/velocity.js","666fa88b0f6e853ffdda7b0d85731f33"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","cca109232cd29b012d8ea4bbf481a4ad"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f12174062b56f4d1c7da499123fb3745"],["/links/index.html","3ecabc4d7ed31ff7f48adecbfade439c"],["/live2d-widget/README.html","161782727da23ca3a1234483a6ddac12"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","507cf9a2d7648bd45ba9b4efd5f5a218"],["/live2d-widget/demo/demo1.html","d22f1f08d793f70accdc4b8bf54f62ff"],["/live2d-widget/demo/demo2.html","6fe67f40914ddb2b47d52779b58a09dd"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e81706568e0758410755ff58521a05fe"],["/movies/index.html","ad873de5ab024200e1f6b0a697578d61"],["/music/index.html","e839f6006564980f7023945a16a63edc"],["/page/2/index.html","0d1a71cf752e9d574456ee167c51bd52"],["/page/3/index.html","bda2a63105a2990697d3eea1ed536224"],["/page/4/index.html","12c87edcf2f624ebac2202fd4a58a96b"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","7d8b3762e3b561a7db8eb02cfd14229a"],["/posts/15468.html","562a6abc19848aaaf4406b3a26d6a0d4"],["/posts/16107.html","e2583ebace9e40db4503e9371b380d80"],["/posts/201e1121.html","2fa0153ae38a989271dc99a44a63ec45"],["/posts/20352.html","2fd8754eac666ef04a2b3f3684b92fca"],["/posts/21238.html","acf83b14d9f6cde999fd33740fef1692"],["/posts/22281.html","e421669c331c3b295672bdf7706b00ff"],["/posts/278598dc.html","6e34a3cab0fd4aed45796b0b07063c90"],["/posts/2d063bc3.html","c207442c2968d3b81dcf0b3c64d12e60"],["/posts/30c404a6.html","b50e9091ad723f680511a25953cf4ad4"],["/posts/51203.html","9171d28fede1f170efb6de83fa7efefc"],["/posts/538e5180.html","3dc2fa05828862a93f699eb7d83369ec"],["/posts/5394fce7.html","c4b6d0a966ba515225dfffd267b9a238"],["/posts/59037.html","aeb575a93793a6368f8c640fffed9d51"],["/posts/60816b5a.html","5990a4290e18ada865f14c7b19862edb"],["/posts/6163d4b5.html","afb2e1bf57c37da27abb13d61ebdff02"],["/posts/69978469.html","eb097d6836de9ce63d1552a56c5ca7b1"],["/posts/6a752619.html","b6d67b2748e8c31803a16a9d262e81a1"],["/posts/7fcb11a7.html","ad42052f2bc7a9f29e5912358c9e6877"],["/posts/8cc73e65.html","ae76f1f678a92386a5ffc64667ba3562"],["/posts/9b621d6f.html","13863a2f5baefb86a13e404400e20a36"],["/posts/a530f7f0.html","73bd5f1c0e546a4097410fe9c93a40da"],["/posts/ae1da46b.html","033d6413ae49263e08c9617bb9158d90"],["/posts/beb5106a.html","b2662f4199b6dc555a21ba4439dbfcd5"],["/posts/dd845106.html","2925a4f8af6c7328cef4168c4ebc0fa9"],["/posts/e35620b3.html","4cd7442e0491ab03a54ddd966dd33f4b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","15cc032acb43ec0098e3267253c6b126"],["/tags/C-语言/index.html","67e503db3b10415f0022e67bb6d178c3"],["/tags/C/index.html","d95af3c070058178d4b4f4d42a2fc45c"],["/tags/C/page/2/index.html","b39447a27e748b7b0e548c701e60b35b"],["/tags/C语言/index.html","bf667f1414e1cf136d4e6b5a4d0b073d"],["/tags/Hadoop/index.html","0875a439361713253f26250573e3bfab"],["/tags/Hexo/index.html","d4976691df60fc995dd68588f4ae0ba3"],["/tags/Java/index.html","98092ca59875d77dfbd57ad542a74039"],["/tags/Mac/index.html","7e41c3190b219bba5a072d77991ba573"],["/tags/Parallels-Desktop/index.html","5d8cb4d9c4b8623f8b74471402d20c99"],["/tags/Python/index.html","b5473537bc3365eac5d36fde223a55e4"],["/tags/Qt/index.html","0ea56b25b36058fc128e1fe43a12220a"],["/tags/Sql-Server/index.html","1c2c88dc2406d73d1e34016c6f264b07"],["/tags/abbrlink/index.html","587b147ba216c1db7486e581746d8ec7"],["/tags/index.html","a9d50c19e0cb5213a712e219c3ffcb5e"],["/tags/冒泡排序/index.html","796d7597861f2581a908f3a3a9153599"],["/tags/双向循环链表/index.html","b0e3da824bbd662f36eda80b581a1260"],["/tags/双向链表/index.html","e6d5d2fe01bfe4c2659ecba33bd6d698"],["/tags/希尔排序/index.html","2d4c033e372226771249d84e1c7beb17"],["/tags/插入排序/index.html","27703499d541ff4fa59c84339341d6f5"],["/tags/数据结构/index.html","0a4edcad07e50e8a99d71d068b4d6a80"],["/tags/数据结构/page/2/index.html","8bc1785e506eba740bbf97c832b0a5af"],["/tags/杨辉三角/index.html","66902c8e668e6c5793ed60f9f3538c0b"],["/tags/栈/index.html","6b766fd447d9ddc05d8e77deca60e45e"],["/tags/类模板/index.html","f578b36e335b7360a3f69db3d05cdb62"],["/tags/线性表/index.html","c577850a42ed03cbfdaf1b85e03b349a"],["/tags/选择排序/index.html","6ba6b2cfe56f440ca08dce215c672acf"],["/tags/链式栈/index.html","8d679b28fb7bbd096691577d686fd627"],["/tags/链式队列/index.html","f98f58b5fbc803f716a6969482dbd60a"],["/tags/队列/index.html","1752979ebb2d0e46c4c43dddc8e45d4e"],["/tags/顺序存储结构/index.html","1172c1103cad683b1182732bbddca653"],["/top/index.html","fb97d4b0798af0db5d7a365459cc2aee"]];
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
