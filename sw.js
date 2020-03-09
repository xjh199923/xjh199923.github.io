/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","64dbb8e24df8de3e4b7b66f3e2c45ebb"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","52489d1b6f162daf364f5de99559850e"],["/archives/2019/11/index.html","e946f9ed567e63f7184423d8291f184c"],["/archives/2019/12/index.html","6b0b435de1e82aa560b0c28bf2dbe88c"],["/archives/2019/index.html","839779785ea7407d1af6ac9c529507c7"],["/archives/2020/01/index.html","fccdedebd85890914c10723686e2a8ba"],["/archives/2020/02/index.html","9b37745d2b8340bb8091336cc1059994"],["/archives/2020/03/index.html","da412f78414c6733c81b07a526e074b5"],["/archives/2020/index.html","f20e396d375b6bab13446c7a7f4dd26e"],["/archives/2020/page/2/index.html","f01d850394c5d83efe7b3ebea1cd257b"],["/archives/index.html","5f5f3aebb5cca7e36f898a475641d812"],["/archives/page/2/index.html","b84ef59ca1c156789c3577fba829efa3"],["/archives/page/3/index.html","ed34ac0318e1c3577f5a05c4aca665e7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f4b509b1d0db603a4cbbb5ebc0813ae7"],["/categories/C语言/index.html","9d1ff97bca6772c0091f399f1d486f10"],["/categories/C语言/数据结构/index.html","e79d655053615fa81784ddc832fa93fd"],["/categories/Hexo/index.html","bbf040e65c7d12ac9e161bbfbf107722"],["/categories/Mac/Qt/index.html","d7a0915f04f73c534be4416bee473ca7"],["/categories/Mac/Sql-Server/index.html","84c5e57a02eab82d038602655ab084a7"],["/categories/Mac/index.html","96c408126b2d62b81ed465705295ccbf"],["/categories/index.html","3827944f3b823a99add1ee635d9dd3e1"],["/categories/数据结构/C/Java/Python/index.html","3ba29fdb7ad2f8dd2c24f21a2359c8f3"],["/categories/数据结构/C/Java/Python/排序/index.html","8ebd4bbe49916e0c1f8af45664490e32"],["/categories/数据结构/C/Java/index.html","0b15abc6a98c24d69521ab839c5b3a13"],["/categories/数据结构/C/index.html","71abf68afaf8d45ca0b2eb5a1a29849c"],["/categories/数据结构/C/page/2/index.html","bbea36daaf35630dc14dfb6df5bf229b"],["/categories/数据结构/C/双向循环链表/index.html","3d83b3482306941cd409d30ddc19abea"],["/categories/数据结构/C/双向链表/index.html","80531b1526d5860d55caf9d12339aa67"],["/categories/数据结构/C/顺序存储结构/index.html","768fca0a644ddb281f675d69866648f4"],["/categories/数据结构/index.html","625e0425decd4e0a0ad69d291dd2d352"],["/categories/数据结构/page/2/index.html","3475093ce549fb4a3fda9b0adcddaeb7"],["/categories/玩转Mac/index.html","cecd08bda171b4abba49c740f23e2e89"],["/categories/链式栈/index.html","015fa7bb1ed080951a1f91813788e2a4"],["/categories/链式栈/数据结构/index.html","326985f3689ec73e33191fdd755593b5"],["/categories/顺序栈/index.html","f99691c8f918781b675ec22677ee5946"],["/categories/顺序栈/数据结构/index.html","02a485e8f0e029ae9865e1444065ba5d"],["/categories/顺序队列/index.html","a23b3fdeeea2de9e126a3df116907b7e"],["/categories/顺序队列/数据结构/index.html","8da98283bfdc1640a28d03e5ee5c2baf"],["/css/main.css","36d6fba128958c271e3ee226872bb0db"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e56c19e8dc65b6c286830246aaed41f4"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","5a020f1619ee144fe26710f8477d7cc4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","91f9864f554ae0df8d948a0da83a51fb"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0b47e6dd93f43a09ee2854879ab5cd6b"],["/js/src/algolia-search.js","36a0842d4373417aef24a6af783bc868"],["/js/src/bootstrap.js","8b7861fc3f2891b0805a0ef990507916"],["/js/src/bubble.js","d58c79ede609a2a0bf718c6145064fad"],["/js/src/clipboard-use.js","237ea77a48e2bbe877c3131635742e7e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8da1230d5bb222762b4a1a7cab9aed05"],["/js/src/exturl.js","0c833fdaa09c5dc9cd2d851d6c605526"],["/js/src/hook-duoshuo.js","cb89ce1f80913711c188d4f87f4d221f"],["/js/src/js.cookie.js","2634d85c2d7f7170f8a113262042a7e9"],["/js/src/linkcard.js","694016246d101decb8d898109de76ea5"],["/js/src/motion.js","e070c5036903af78c35bef190ffac6e4"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ee1e52c2f41178149fde81d434b4c38e"],["/js/src/schemes/pisces.js","2f85fbac9ab7228bd01013a958891d39"],["/js/src/scroll-cookie.js","d20805e949776fd2ca68fc2ffb931458"],["/js/src/scrollspy.js","89188e9c286aa254cda802a5f01c791c"],["/js/src/utils.js","b868410925645d0ce211db11371d122f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","7c64f82d484c3e02e941936e59d23026"],["/lib/Han/dist/han.js","53ac8bc399b881e1f7dc89757d7fd819"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","229c94a9a487b45002f3b12c118a0f16"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4631225a05512e061c6640ab5b87b2a9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d8c8f87f444a2cacaeaa14bd300a779e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","af426f0ecff6c97a412112071fc75f56"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cf714675473f32a5d803146d6226a149"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6c610ca1c1a38cbbbb85776133ff455e"],["/lib/fancybox/source/jquery.fancybox.css","0db11dce39ea71df1879f02fab1363ce"],["/lib/fancybox/source/jquery.fancybox.js","ea07bff3c2a200953858e915d099783a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1bb03cbeaa0b395ce3a6e77fa883a794"],["/lib/fastclick/lib/fastclick.js","ab443aa1cff3242122d5db4340db2a6a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","227debf12035f30b679772f8bbdd7e40"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","692f5f2d1587ff3f4dd8ca334865509e"],["/lib/jquery_lazyload/README.html","96199572b9b19ea2a46af26ab8a16a43"],["/lib/jquery_lazyload/jquery.lazyload.js","332e742d31520b82794cba3da9b03add"],["/lib/jquery_lazyload/jquery.scrollstop.js","3d4ffe8d132a71544dec75a53f9fa975"],["/lib/needsharebutton/font-embedded.css","d5b1bc2c64616307b0c53c734e1fb3f3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","0c13048ec04de7486f58fd1889fbb52c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","05b8e525fc0cc78892473c6be84fa9e5"],["/lib/velocity/velocity.js","6d11ac3cca48fa21882c1d63e80e10b9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","832a731e640f39797109218d11c8bc76"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","377a7585ef7ac7374bed16d0dcf4ee14"],["/links/index.html","b3aa4df65965e2b2b4a12793bae8d2b2"],["/live2d-widget/README.html","89989232134c13c5d8cce2e7098fdc2c"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","25ce5eae0d059dad7f9bfdc13a71bac5"],["/live2d-widget/demo/demo1.html","80341fa2f81ef231f84c3582bd8ea638"],["/live2d-widget/demo/demo2.html","cdecc0f7ca1ca848c8e94e5554cd272d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e54fbf2635019d9f054242b6f534309f"],["/movies/index.html","c9f58d87c91d7997dbde520cc6942b60"],["/music/index.html","1741df7c8c2a6f4cfb56fc03a53c92f2"],["/page/2/index.html","c309fe501c1780bbf67e17ee478c99d3"],["/page/3/index.html","3a7aadfe57c5926092c4367fe8c6223f"],["/page/4/index.html","31f7abce3113fab33fbcb1f0247b6800"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","ee53c37ed32781c2457e57223c93648d"],["/posts/15468.html","7664a5ec9d3b975619f977fda4a31233"],["/posts/16107.html","b89173fb71f7828e66957a367be581f4"],["/posts/201e1121.html","9ec5c29fcc7c7a32bc6c3c18969be052"],["/posts/20352.html","cb8a799e6361de1aaaef3102dfa88d92"],["/posts/21238.html","803b12bc299295d91a8b1e1b22889ce2"],["/posts/22281.html","817521ca2dcc21ce75beeb6d3f5ed3b6"],["/posts/278598dc.html","1c467039cb16c6bc9a15eee7f3857925"],["/posts/2d063bc3.html","3c72014950a4fe7db9f450308fec73a4"],["/posts/30c404a6.html","7c63e2663fc06ae61400fd21ee5ed18d"],["/posts/51203.html","691c301f0a582bc7705de0684d6883b5"],["/posts/538e5180.html","bbd4d3793799805c5cd71210bc75caf3"],["/posts/5394fce7.html","3db074f2a7713580c8e4b38ea101e4ec"],["/posts/59037.html","8e3eb244f9d80949d78cfa395a88b167"],["/posts/60816b5a.html","8f43928368760c371213f3e5c6354cc2"],["/posts/6163d4b5.html","c660928e20671c47ada767cd87d27cee"],["/posts/69978469.html","d0533ef7ce8ab46335f6b90b1d73cfea"],["/posts/6a752619.html","9f92cad7e29d2b9de7358431804a08b5"],["/posts/7fcb11a7.html","f26936789132303e9afeb955c241ef28"],["/posts/8cc73e65.html","f11fa35df5a808d75228b20bc960dcd2"],["/posts/9b621d6f.html","f7859d08d0307bc70fe963539619ded4"],["/posts/a530f7f0.html","a0d0ccfdb8ff3f3ec47767ea1d99d452"],["/posts/beb5106a.html","13c77aab7d2d562c6eb71b6ed24bf4c4"],["/posts/dd845106.html","c765602c00c86582e4727eb163d3d6a2"],["/posts/e35620b3.html","75b92ff9543abd104b01f7f5f80f7e36"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","73b13faea160198b5edf65539d63b024"],["/tags/C-语言/index.html","2f707cc0fb34ec9056f745006476d2fb"],["/tags/C/index.html","007099d549eed41ae690af881d7d9ac1"],["/tags/C/page/2/index.html","eaec36e48c6089f50529ae9a33046437"],["/tags/C语言/index.html","0f37a2c21edba998dbc851be9b90f07c"],["/tags/Hexo/index.html","b2ed628f38e1565fd56299c94c4675ad"],["/tags/Java/index.html","7ab15f763a0dbb8e3bc484297b1e77db"],["/tags/Mac/index.html","d0a8c5f52637ec0d70af3429129fbc35"],["/tags/Parallels-Desktop/index.html","bf48c61de52226c99aadb0a5d65564c7"],["/tags/Python/index.html","a22c557fc8d241af55f5cb7cd8571f9f"],["/tags/Qt/index.html","929d7c54a232dbb20b602600ca357e7c"],["/tags/Sql-Server/index.html","4ace9a569eb75ce4bc9ea9f583668cd3"],["/tags/abbrlink/index.html","d6d651306fc0764cc06fe0b69f8a61bf"],["/tags/index.html","9fb787cf3f6860ed8219bb2947a16da1"],["/tags/冒泡排序/index.html","76381267f61c053f82e44046e1a769cb"],["/tags/双向循环链表/index.html","69b3e9bfad84a0479c18b08bde8ea93e"],["/tags/双向链表/index.html","6a157351f7d7e883fbb5a3b3d76f3ffe"],["/tags/希尔排序/index.html","fc598d7acc08e216525da18642993fe1"],["/tags/插入排序/index.html","f2faaa11594e1ff013623e0e78890b25"],["/tags/数据结构/index.html","b653cca0e014393989d0e25376860aee"],["/tags/数据结构/page/2/index.html","a174a3535902995e856c0196ac9dfb03"],["/tags/杨辉三角/index.html","9f9e0bca40e2d7310f8b5f272fca8d76"],["/tags/栈/index.html","656bf4fa823f59ced7cf684099d800aa"],["/tags/类模板/index.html","ab0f60e98f95699b2869f0418e927b5d"],["/tags/线性表/index.html","0f250449e35624f2c68bde15bd0b0a03"],["/tags/选择排序/index.html","18abd5e492e2fee91620f9438b384de2"],["/tags/链式栈/index.html","cae0178d96a34164fc1d3a9d07af77d9"],["/tags/链式队列/index.html","b85618205989d1fa2ab62c0aca15c666"],["/tags/队列/index.html","02ea5b8d5550f5987f67f0e6c3670f00"],["/tags/顺序存储结构/index.html","3d26f166365220bf52ee1413ff47d26d"],["/top/index.html","66027cb71600b8a860688940bf55c1b6"]];
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
