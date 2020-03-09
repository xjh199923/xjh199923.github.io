/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","64dbb8e24df8de3e4b7b66f3e2c45ebb"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","a50ac9d510ce46b8d53c13826c7b5b6d"],["/archives/2019/11/index.html","e4050d324d9482aeb0bb254c6a6904fb"],["/archives/2019/12/index.html","b5a30c340e7077e88a11ac40e0c538a2"],["/archives/2019/index.html","5fa4c026d17999b3c2bce778abf83775"],["/archives/2020/01/index.html","c3dd53af13a1be2ce4be050078d217d3"],["/archives/2020/02/index.html","8cbe84750766f4cd2f2fd8fde71675dc"],["/archives/2020/03/index.html","0f828a2a9d782c8ce8d97df567d2dd6a"],["/archives/2020/index.html","0a4ef0e9b5c21ae95f3c3b29a5cbe7d0"],["/archives/2020/page/2/index.html","99cbd8634418533c7a3ac242383c3e79"],["/archives/index.html","f607c761955d60d1896abb5f4c0e247b"],["/archives/page/2/index.html","c763d45618c8459b52f1a440929978de"],["/archives/page/3/index.html","7d81748bff85677e6caa68d51e79fbb1"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","bc9b47c9f47df3d9517e36b0fdf2fdd5"],["/categories/C语言/index.html","bc4decf032c06044885921466d95f3c4"],["/categories/C语言/数据结构/index.html","5e03f8222acf4fdfb762ba903701437f"],["/categories/Hexo/index.html","c6f4a1ea162b18587ffc37eaa6a70b96"],["/categories/Mac/Qt/index.html","f6072dc3f7d1da379b7c43c311505bf3"],["/categories/Mac/Sql-Server/index.html","62cd50eacbf807fe52e90497650b6e2a"],["/categories/Mac/index.html","e73dcc3240c2d6444573ce304441a4bc"],["/categories/index.html","82b2be562d61a94737c491408b6ad86d"],["/categories/数据结构/C/Java/Python/index.html","a3e93d67116e5acbe3b80f504a075641"],["/categories/数据结构/C/Java/Python/排序/index.html","b0b16db63066919451abaa4a89b22d24"],["/categories/数据结构/C/Java/index.html","8f6dc0cb8520812de3d99885a4d928ce"],["/categories/数据结构/C/index.html","8ef7076deb4f0727248464659a41afdd"],["/categories/数据结构/C/page/2/index.html","f86a14c789703d40904f9b7e0bb23fa4"],["/categories/数据结构/C/双向循环链表/index.html","ee53de7cb260df3ceeb7f0e7ae1a46fa"],["/categories/数据结构/C/双向链表/index.html","b9bb8481f3493323b3adc0603c4c10f9"],["/categories/数据结构/C/顺序存储结构/index.html","81b93a382bc0d4b29fb00265d2c136f1"],["/categories/数据结构/index.html","30b3445aeb894a28d0d2a9c937848a90"],["/categories/数据结构/page/2/index.html","dec766b42c821db7cbcbfa873368ebe7"],["/categories/玩转Mac/index.html","41d3fbcb6bf4b5c9bed1f35c4001c7c1"],["/categories/链式栈/index.html","f780a9f9b5ca1de408b92d83102aad5c"],["/categories/链式栈/数据结构/index.html","4f081c39bb12f376e0c8ad4cb1685676"],["/categories/顺序栈/index.html","39034b960d73aaa4b61564d9518de8f0"],["/categories/顺序栈/数据结构/index.html","7364f90e57cb23e92bad4a4161925729"],["/categories/顺序队列/index.html","23862b09f37e980ff380ab5d68ef920e"],["/categories/顺序队列/数据结构/index.html","6bc938db09130f01911046a1be29047d"],["/css/main.css","9c165163c012e163177392e20476b268"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","c1bc8fcf882e90557389dbd11ab17360"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","c148d240fa66caa61141f72da2a930d9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","69903209447be990e214e8b99997ca07"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","74902e47fb3c0445cbcd45dc05e1b304"],["/js/src/algolia-search.js","97ae0ee246f656570efec343d09447f1"],["/js/src/bootstrap.js","9d27e39f9983f9852670e2260ab8bc8d"],["/js/src/bubble.js","c9bd0a44a2b99c7fcdb603a7f7f03ee2"],["/js/src/clipboard-use.js","1fff4d3e39d8f14e29e0ec20a9cdcf63"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1474871a4bb97d2f63df79f79eeef03d"],["/js/src/exturl.js","590ead731449543ed318148fb9edfe5e"],["/js/src/hook-duoshuo.js","12f365686c24e356701f0b82a277b111"],["/js/src/js.cookie.js","a2155b4151f23b579789b075700e4cbb"],["/js/src/linkcard.js","f382a88ab0bdd704d48141f46f8d2077"],["/js/src/motion.js","fbe4ba42e8b715c49f33d472ed6be9b8"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","3c994a73f8201b654e825f76719d62e2"],["/js/src/schemes/pisces.js","02fc5c3a86f7fa54f692782791690b7e"],["/js/src/scroll-cookie.js","3d5f81a15ab945e51ab429fcb6fe7ebf"],["/js/src/scrollspy.js","d06a463fcfabc76cc88f780578f27b4e"],["/js/src/utils.js","f97b40c2e8ee9133428774d2160cb033"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","6bb1f50dbafc506389e587486c8b602c"],["/lib/Han/dist/han.js","658b6deda9fb09e0dbea2dae1a516004"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","290966234313bda7bb19cfbba6ec243d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d567c64dea61c792241dee62eacd4d53"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0a91aff510692ea04130390426f7ed9c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","cbd17b6091c1d81223c0a54a17edf530"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c2b5f646168846cfa6a22608fd08560b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f655323ffdd6ef1bf1d734aeeeff4e4a"],["/lib/fancybox/source/jquery.fancybox.css","8382516dc0a605416b17a93facdf1f4d"],["/lib/fancybox/source/jquery.fancybox.js","96b15cf0b95b003dc0ee679b269b63a6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","8965e204bbe67dcaaeca22908b2878f1"],["/lib/fastclick/lib/fastclick.js","b2e9f11b4ae3dd682149eba79c809984"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7b192e1221e17b4ae01f13108ef116e5"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a7dee83f5c817040dea14f338ac85ebb"],["/lib/jquery_lazyload/README.html","fe3407c5ed8f520e1cc762e1c2e0bcd6"],["/lib/jquery_lazyload/jquery.lazyload.js","eccef71d229a93c51df7b1590822a6f4"],["/lib/jquery_lazyload/jquery.scrollstop.js","33ff39f0d129ef8819c7bf033e8235b5"],["/lib/needsharebutton/font-embedded.css","363af67f774e64bb018eed156c7e34b6"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","83b85345b0dd7f6a157974815304625d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","351da9eaab245523a93f79062e4c1c1f"],["/lib/velocity/velocity.js","c9839f8120823e8cd1c846ea3fd5e963"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7ad0abbd5fb41cf8ce417173a5b980bd"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a9658aaabf04f6397ea2816858de4d70"],["/links/index.html","9ccfa5857d796f2cbc9fdc127663f50c"],["/live2d-widget/README.html","979da327976f5bce4a32d710a7f70e0a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","34cbd81ad4912d276cca0bdaa7d47370"],["/live2d-widget/demo/demo1.html","b3d5afbd753644bff5a08787fb696781"],["/live2d-widget/demo/demo2.html","463e5e15f5d61d8c8f1c579c32d24734"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","839d55857259f92f5970ef3ff496c8ad"],["/movies/index.html","0ca0895b9fe389a7c4978b82cc144919"],["/music/index.html","d5126ad4f51fd985a5e709cdd8b0eff1"],["/page/2/index.html","cc349990e8921ae881efbaa666043a4f"],["/page/3/index.html","5ed2de1ad8550295479cfbabfadac470"],["/page/4/index.html","8a0928322273654976f278faa2d16998"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","6ae32b8bfd6566a0398cb5cd7037e891"],["/posts/15468.html","e599dc36f22283284b099c726dd0f3fd"],["/posts/16107.html","99c9e16b42d9798901c7bcc5a883a0ba"],["/posts/201e1121.html","9bcaff7a2062902f353158e3a91ecf02"],["/posts/20352.html","7990a35954c668e4bc6bb5258b37c80a"],["/posts/21238.html","aa0e147a01f68e6b10517f1d8a1c2cc2"],["/posts/22281.html","3fc9addd873218ec5a34708b689bad32"],["/posts/278598dc.html","d3e3a4a57cb0f43863f3cb9af4276c02"],["/posts/2d063bc3.html","b95f305d1e4a6f516bb0cc328679b578"],["/posts/30c404a6.html","69c51de734b6c7b333fa487ed7a0ef75"],["/posts/51203.html","52aafdaa55e84b296a62ddd13d2b9621"],["/posts/538e5180.html","5c78b0eec0f1c383e3319ba1c1f4befe"],["/posts/5394fce7.html","a8c3271c2a45e764a9a3f582e63bb8be"],["/posts/59037.html","a92543037f3dc3e52c5d528c70dc0f4e"],["/posts/60816b5a.html","47d76d02724afd1b9a5f15c3d4f6ec87"],["/posts/6163d4b5.html","b68d61fc701734f897e7a3986fc1af23"],["/posts/69978469.html","38883bd78cbf4afb81a171378fbf2233"],["/posts/6a752619.html","50dbc16dad1fc9606adc78f760669a87"],["/posts/7fcb11a7.html","54fee473159a19a27c879c0fb11958b4"],["/posts/8cc73e65.html","da1566ad5b053daa77db0d760e270f51"],["/posts/9b621d6f.html","d285b10457ef331f37cde00efed14ff6"],["/posts/a530f7f0.html","6e817781930291c496e33e8ff8c354b5"],["/posts/beb5106a.html","2247c3b419e7191fe1e5244fb07e994d"],["/posts/dd845106.html","ef3b67a2db8bbeb36ef823f72bb833e4"],["/posts/e35620b3.html","9b4e1bc5301df59f76a912c7ea36c3ec"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","82cda43b35bda508806017ef4e6b68be"],["/tags/C-语言/index.html","250aeabb0e8d7e7ea5ad6f3d18088de8"],["/tags/C/index.html","a757a4ae3ee2d19d91127bb637940698"],["/tags/C/page/2/index.html","a7c8eab8b19ca59c947553689bca4751"],["/tags/C语言/index.html","bc2e0f0326f32207c1e10f075195db35"],["/tags/Hexo/index.html","5545216f642e133d7a60f34910342470"],["/tags/Java/index.html","7d740cfa683ccb2d84bc9bcadfa961fd"],["/tags/Mac/index.html","b111cffe1c8f829fa384b84750cc154e"],["/tags/Parallels-Desktop/index.html","87e172e1ba23232b465684d615e46cb1"],["/tags/Python/index.html","c1093671ed713ee6abf8cea038c89d20"],["/tags/Qt/index.html","8044183e5afc53336f5c0ebb3da03615"],["/tags/Sql-Server/index.html","4ce6ab45bb8031f95afc8daa693639ab"],["/tags/abbrlink/index.html","f27b4a1dc7a2e5e93b5264185e809568"],["/tags/index.html","97f0843f83436c89c62ac77bfc7d2086"],["/tags/冒泡排序/index.html","bbc8532d3e2c14ecd574320bb7ae6bc8"],["/tags/双向循环链表/index.html","a6f910ebdd7d324b5c882e484b7aafee"],["/tags/双向链表/index.html","8a4a85f373d1be7935e7651bc25b0b0c"],["/tags/希尔排序/index.html","256f60fa6a9228fe7b40c9ecc4bb8ea9"],["/tags/插入排序/index.html","91a514c0ce139b6ce0f9b3a0596f40b1"],["/tags/数据结构/index.html","9f292c993d9661a0f42e9bb8f2d8357e"],["/tags/数据结构/page/2/index.html","26b2c9466a7b315f191423a85d8709e0"],["/tags/杨辉三角/index.html","62e01feb4901976f64dfe5833f12fc3b"],["/tags/栈/index.html","17d52ffe1691a202aaa5fb415d673e1e"],["/tags/类模板/index.html","380639b62f9fd3ee43ddb32c15e90998"],["/tags/线性表/index.html","a393fe6b3511339fb568cdc8f455c33f"],["/tags/选择排序/index.html","d6087d1f9552fd778a2ed2276f95fdad"],["/tags/链式栈/index.html","ee2c0bd8f6f67c0ad23f4835e4ff233e"],["/tags/链式队列/index.html","b577353aef498b02c7c9708af8169015"],["/tags/队列/index.html","829f328058315273512c0502248c4228"],["/tags/顺序存储结构/index.html","ab1bba3da801be41c35925e6b3f84ed2"],["/top/index.html","0f2a5cec491eb19a5777a15b12dd1ce9"]];
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
