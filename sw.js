/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","42efe5e39cf75e2dd23e7721edc65a03"],["/about/sakura.js","ee47b31a16c756da94de1a8524e02ace"],["/archives/2019/10/index.html","c53d678ad700c7cde08e870410fd3ec7"],["/archives/2019/11/index.html","e9afd4ffc8ad882328f7b47d1a1d1d6b"],["/archives/2019/12/index.html","851514ca51ae85a40c6e55b12bbe633a"],["/archives/2019/index.html","23b0bc973cbfb24c0c064260821c8433"],["/archives/2020/01/index.html","8c0628edc694ad18a7fe3ba3944531cf"],["/archives/2020/02/index.html","fe65c29f90401be49a0103ff8d433dce"],["/archives/2020/03/index.html","bbc185e607a9520bfe0876df799e2591"],["/archives/2020/index.html","aea364dbd07224633b58eba6268ccf81"],["/archives/2020/page/2/index.html","b1c7c3e6ed586aa5e66f0eb6ccb0a351"],["/archives/index.html","dfcfb804ff52fd35e339139669c35e54"],["/archives/page/2/index.html","73c837b6faa2dea2847455186d7a02b4"],["/archives/page/3/index.html","fae84255e7d49820302f435c2360be03"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","c7537ae6d6d2c8c0d2f2e0257ea934cd"],["/categories/C语言/index.html","75f85b466eb52fb3df0478817becce4a"],["/categories/C语言/数据结构/index.html","a42c6b7ed999c2d0608c576d099efe75"],["/categories/Hexo/index.html","4a08487a16aa1a99a0ec1e1a39123f82"],["/categories/Mac/Qt/index.html","69f952723810ae44639dac076dfbbf7e"],["/categories/Mac/Sql-Server/index.html","6cba546262503d410fa4683f4a799c6b"],["/categories/Mac/index.html","13391b474c3ec7ac9fda4d6bb3826d31"],["/categories/index.html","ca9c20fd93f72171fc247623733a817a"],["/categories/数据结构/C/Java/Python/index.html","af35e12960befb0e1d2f79c9fedca5f9"],["/categories/数据结构/C/Java/Python/排序/index.html","0390aa1e71333c40389e37e4bee3929d"],["/categories/数据结构/C/Java/index.html","c21a8deb47ad145a2d93b93ef44b9d97"],["/categories/数据结构/C/index.html","a1636bf015b288a2e57b3e39d439773c"],["/categories/数据结构/C/page/2/index.html","b207dd511d74bf6e21610ded42c72ee4"],["/categories/数据结构/C/双向循环链表/index.html","e801d5e668897b8854785dfe95ad75d7"],["/categories/数据结构/C/双向链表/index.html","16ae104e995dbf1118f6d2d7e97ff4f6"],["/categories/数据结构/C/顺序存储结构/index.html","eb6e128c9720b32adf7a4b52b8ea2581"],["/categories/数据结构/index.html","44620f60cc5ec836f0c289032516af20"],["/categories/数据结构/page/2/index.html","44d304af9ce8485b5e93cdadba1b01ed"],["/categories/玩转Mac/index.html","d6014d1cde8e52b0166cc245c8386c84"],["/categories/链式栈/index.html","4e41f4b8d997ec6b70186cbee70cd639"],["/categories/链式栈/数据结构/index.html","533a454aafef4e37adf586fa5f55d7af"],["/categories/顺序栈/index.html","11276da7778e803015860af02aecc455"],["/categories/顺序栈/数据结构/index.html","e4117c6c3b342bb4f6673b6fcbe7961c"],["/categories/顺序队列/index.html","a01f2478ddd0c0560ae7888c77c5d433"],["/categories/顺序队列/数据结构/index.html","2dd86ce93dc38f29c6180dfe407fac99"],["/css/main.css","7392a705a4f52161e0cd33d59ec3ceba"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a5d4fa1576abb0bbcfaa98a193ec946c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b4a4c3eac288bb7ae9a62990735573d1"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7669b8088c042c56994f84a7d3355a94"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","da9436a135b9a5952a137c416131c7b1"],["/js/src/algolia-search.js","e38218d8204730b66f1654beefda06c9"],["/js/src/bootstrap.js","d8d02346f3d811a8bd548f7e94121510"],["/js/src/bubble.js","2deae8b323b99bf7b8059b5ce2316fc3"],["/js/src/clipboard-use.js","4ca9e7c2012bbaac704902c8a58461ce"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8faf50f422aeb7122daeb9b89047fb62"],["/js/src/exturl.js","de3a24094ebeec01636b3e7d460bd16c"],["/js/src/hook-duoshuo.js","ace7088f619de2f1f2a4a223af0bcb92"],["/js/src/js.cookie.js","69b9cd80641a2e5beb443ee3edfd60a7"],["/js/src/linkcard.js","66e7e8cf49968b38accd39ff48858141"],["/js/src/motion.js","ae97869202d8f9c2228eb8f53a9dccbf"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","e1dfd626c36da570d356fcf8660994bb"],["/js/src/schemes/pisces.js","aacce397944f0ed892b23f821cf2a85e"],["/js/src/scroll-cookie.js","984e48300f771bd9b296dce9814b9bab"],["/js/src/scrollspy.js","af9e0fe6b9a96d154ccee2522b0b4b48"],["/js/src/utils.js","c2a9ccae4f16eea1aa2dec5c765299cc"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","c9df722975e9d175fc5c757f64abe0b8"],["/lib/Han/dist/han.js","d265ffc71241fabe2bdd723217c63a29"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","91af407ba64103c1489202adbbdd7a81"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0541d48dbbd9500d34ef96d187340208"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2f4421a429b22a3da126f84c26bbda78"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1a83aca6027487dd73dd050377518523"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1b677bde4a16a0be48e4a953c4cf99e0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d495fd247b8457eaf52a652e02c56bb8"],["/lib/fancybox/source/jquery.fancybox.css","05a8953c525a86e76d5aab1944e79433"],["/lib/fancybox/source/jquery.fancybox.js","d8b0bd2f57eb3db26686899722d49921"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","bd6516bffd87fa61213f0120f8139a0b"],["/lib/fastclick/lib/fastclick.js","a68b8a0c56d5e2ec370f6ebd1cb5fe67"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","dfbcaf16aa914311334ef4515fc88d35"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4c2bb2e8e51e32de169fcd8757864ee7"],["/lib/jquery_lazyload/README.html","f736706d21a081b1948b49791552b2f2"],["/lib/jquery_lazyload/jquery.lazyload.js","798b75e6921f1614bdcb7c2be6063433"],["/lib/jquery_lazyload/jquery.scrollstop.js","b44de986c56d03907979182562e5a27a"],["/lib/needsharebutton/font-embedded.css","bead6377b557d09149717c62f1e2eeac"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","bfd56ae5d4140ad20b8ca9e0bc7867dc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2eb685ce92207c4165072ebb0353e2a1"],["/lib/velocity/velocity.js","648cfd36e3626a5443c580c573945533"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e58e08d22f86d1112c0f585bde553a5b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1c7e5f89d3a595d3cbe4117639a97a3f"],["/links/index.html","da4980da9df5a287f25da56b4889aa91"],["/live2d-widget/README.html","ce11330cc9ca7286d117aa05bc3c0403"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","651d09cf7acab88a0ac939b126b2c859"],["/live2d-widget/demo/demo1.html","08590b0cb5e89e7678b853b6e068d3c2"],["/live2d-widget/demo/demo2.html","de6745bdc42a1b1a2e515d0c4f302651"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","26e9ec291bb29d5fe40d6154d279b6bb"],["/movies/index.html","d3de104d95826e2ff34b478140febcb0"],["/music/index.html","f81d7eb9d4e7bd2cb925fb9d869f795b"],["/page/2/index.html","c50a2fd8b3e05013676e8913a4e99607"],["/page/3/index.html","e8106b5206fe1800c2b12f3cd9d7ebcd"],["/page/4/index.html","adb42410853a02945d873c13b43f82a4"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","dca978ccc5696b263cfbae55d33d935d"],["/posts/15468.html","76bb1195a68799b60e6c7601b6a1678b"],["/posts/16107.html","d3ff4e4645bfbb7e7f162a18d2a8578b"],["/posts/201e1121.html","282d9236b7e0ea089afbdd0adf99661b"],["/posts/20352.html","dac21e2d60ab0b9441d75f6302a4bfe2"],["/posts/21238.html","e187e838308ef18ca4228c69754997b5"],["/posts/22281.html","3666e99e6f67bbd6860fd742be7b485e"],["/posts/278598dc.html","0225234b6435fe39e454ac671ed3d5e5"],["/posts/2d063bc3.html","c229b922b8e0adcb4ed7c7f75e38847c"],["/posts/30c404a6.html","9e157a681ddfe3aa63de8728a8d4a245"],["/posts/51203.html","22e314b23d8114ca83382ecdade13199"],["/posts/538e5180.html","ccae69fb7f7fc39691f080a055a1711f"],["/posts/5394fce7.html","7ecc463d697c4250b54e70aa0911b4e8"],["/posts/59037.html","5ac9882f821a6948a1d7c25a7f2733e3"],["/posts/60816b5a.html","f88514f2ec89a44eeaa728f9f79ffa4d"],["/posts/6163d4b5.html","3072d89376d351b1c890e7511f9c07d8"],["/posts/69978469.html","f0436d5475885686909863944f2dcbc8"],["/posts/6a752619.html","347d03518ca35b8be1d44e9c0f16742d"],["/posts/7fcb11a7.html","6ba706782653ab758b78e9b8d705d2d4"],["/posts/8cc73e65.html","0ab51ac4af9857a16eeef867a979f74c"],["/posts/9b621d6f.html","3296fc55c12253f0354e9d5cd0c07f97"],["/posts/a530f7f0.html","2d8eaa1cd554eb7c2255934b5b285cb4"],["/posts/beb5106a.html","9c1cd0552f0cf22dac4d7b396c87c14d"],["/posts/dd845106.html","d8273045c401d5b7ec50da5a737190c6"],["/posts/e35620b3.html","125564cb9a6361849ebb784b24d1a770"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","9c03be91e7fd070bc95a8e0684ffc65f"],["/tags/C-语言/index.html","e72e2845a1564b0108dc69d8a5ce7654"],["/tags/C/index.html","18679a9966f8dca546976d4f990ad9e8"],["/tags/C/page/2/index.html","f567860cc222cbb507c7a8f358436b3a"],["/tags/C语言/index.html","8f06357c3f85d668858fdda5adba4ea5"],["/tags/Hexo/index.html","b73757ca3951e6d3d97bda45acc60300"],["/tags/Java/index.html","ff95ca51bb52ed04ff7ec9041ef9ef7a"],["/tags/Mac/index.html","18225ae714626139e783cade57196b22"],["/tags/Parallels-Desktop/index.html","ff83dad5ab49f0823547e58efb5a11d9"],["/tags/Python/index.html","6c36ab9c1f049c8db76122c5ec98d455"],["/tags/Qt/index.html","a4c3cfd96e3bf5455e05bcf20a415c3c"],["/tags/Sql-Server/index.html","f82a0ffc03535e5a1a1e01e6a0f1ea86"],["/tags/abbrlink/index.html","cd0f5010f268ed7039ed33bb5b854ce1"],["/tags/index.html","15fddb30ecb4087bcc6e1c9878bf4434"],["/tags/冒泡排序/index.html","e9c9c7e0562941c88af18f3bc4b245de"],["/tags/双向循环链表/index.html","791c4b0c7454fa33ad90b1b74987316d"],["/tags/双向链表/index.html","5bd95e74749b3995d163d052ee7303f7"],["/tags/希尔排序/index.html","faf0ccef3aef3a6ece0a4377be4fc105"],["/tags/插入排序/index.html","80522c1b94cb20882d51b6ceed5f986e"],["/tags/数据结构/index.html","c4dbdb469f2e9904beab7793f74210c8"],["/tags/数据结构/page/2/index.html","44d5e56d4af769d5142e0d107649afdc"],["/tags/杨辉三角/index.html","e0676aa515a6cefe2dbc2519da9d460c"],["/tags/栈/index.html","042cd158370dcfa6bb2e9e7009067ef6"],["/tags/类模板/index.html","6721935b6475a61cc138010b27a7931b"],["/tags/线性表/index.html","3aa0849033aea5641bead890706c38fc"],["/tags/选择排序/index.html","ba44a6b54d83d996422566db140f64d4"],["/tags/链式栈/index.html","09217380fd6e175564f53dc28501e094"],["/tags/链式队列/index.html","59c306b34440dd8bdadebffec608d178"],["/tags/队列/index.html","d7c08c60425e92d5ba14102fc317376f"],["/tags/顺序存储结构/index.html","7ba30823c7beb422db12493d519b62ad"],["/top/index.html","bd7d1c3932bac9c1eb4ad698b7b49417"]];
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
