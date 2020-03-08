/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","ee47b31a16c756da94de1a8524e02ace"],["/archives/2019/10/index.html","ed0a5d640d6cbf32765499ad94e1ff37"],["/archives/2019/11/index.html","304c9aed89c9df6f8ea1032fda37811a"],["/archives/2019/12/index.html","1e1450fe9322de26e44d1da4f2daff47"],["/archives/2019/index.html","2dc0c4ddb819517b708549fcd8bbbcc3"],["/archives/2020/01/index.html","851b4b918bf85df1622332c24d735595"],["/archives/2020/02/index.html","daa67c0a10391a2b67e5ba9f20b21161"],["/archives/2020/03/index.html","957a511123d7f1202af3b921f794738e"],["/archives/2020/index.html","a44b12396d2a37332faf65f7c5334a53"],["/archives/2020/page/2/index.html","5a9edc62f0f99333c676b2bcfb0d0d6e"],["/archives/index.html","6e8b4e96da3b8011390a5179d9945a8e"],["/archives/page/2/index.html","51389a2ce04ecf903cd09c0f1aabfaa4"],["/archives/page/3/index.html","4c033af0ba9e46421b9dbf7f5cc1f57a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","b7c7ae8504f49caf41e868f583ca14f7"],["/categories/C语言/index.html","d444caca97c410820ab2ceb55402afba"],["/categories/C语言/数据结构/index.html","f6dc5c50172abb6addbad9e0abf8c40a"],["/categories/Hexo/index.html","f75357b54f6a6ad638bb2bae46c830c1"],["/categories/Mac/Qt/index.html","b7fa8666e3c85da40f0464a62e7964f5"],["/categories/Mac/Sql-Server/index.html","486716894fa1e23ffca1aa00449ef8a4"],["/categories/Mac/index.html","e33ad697c5be2b91dc1951212939f238"],["/categories/index.html","4a3ee5e662876487d2afbff80262a58c"],["/categories/数据结构/C/Java/Python/index.html","1aee1107a57e62b258c5a0983909b7c1"],["/categories/数据结构/C/Java/Python/排序/index.html","60b696884112a5e4cbac560151220f48"],["/categories/数据结构/C/Java/index.html","b8833a8b7fa315664be96e6d672b8590"],["/categories/数据结构/C/index.html","434f7bd24712f9242061a9879dea3747"],["/categories/数据结构/C/page/2/index.html","eb881234a396f8f36fa53f403b3c7505"],["/categories/数据结构/C/双向循环链表/index.html","98506020e5e87040b05bcef255236873"],["/categories/数据结构/C/双向链表/index.html","0e828ac8892add65e3d5923dfe74f4b2"],["/categories/数据结构/C/顺序存储结构/index.html","aeb67434589c671c1177b2dc20f78628"],["/categories/数据结构/index.html","74dec1acadc09b4042e217247ac095d6"],["/categories/数据结构/page/2/index.html","4c7b73613537650fac321f848b4e02ff"],["/categories/玩转Mac/index.html","7612cd22cdea47118ab04f641e82b153"],["/categories/链式栈/index.html","207a72734add5cb8b09fefe04d28c027"],["/categories/链式栈/数据结构/index.html","09056029dcf699f63742ef81262ea39e"],["/categories/顺序栈/index.html","064c669e5aa9b269d5f47682671a0ce0"],["/categories/顺序栈/数据结构/index.html","40d16019ba85867dade2a9282095213a"],["/categories/顺序队列/index.html","40f3b15e74ffb83988b94da4491f41eb"],["/categories/顺序队列/数据结构/index.html","2475eaee66b9ad23acf5113abb6c1c3e"],["/css/main.css","fb14527aa095a3f5a4b65ba73f6599c4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f7618bd7ff576eb63b3911c20aa385c2"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","e887b084c39423f9732307db04584911"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","34d5af63496eb0f5df94c5e3d9416213"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2c6a459d44a7d4392bcdedd210f6b02e"],["/js/src/algolia-search.js","baa3ac0b9d3a689f8ef85c0179db5efb"],["/js/src/bootstrap.js","2c2f8680f61ee5b5736452fb11dfd431"],["/js/src/bubble.js","ba21c250fabff6dd68f1045143329038"],["/js/src/clipboard-use.js","7b3732bdd27773d78063a6f77e578952"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e62fed928abf2763d0d92053a8619173"],["/js/src/exturl.js","4b0fca5a66d5f55de23e42adb6ae8a25"],["/js/src/hook-duoshuo.js","e33e16d09892169a37ddb4e2a10c08e8"],["/js/src/js.cookie.js","708770a10dad89c8f8be8c13dda49b05"],["/js/src/linkcard.js","2d1a34ade59622956648e176c1d5e16b"],["/js/src/motion.js","9757a532a2a3c67325864a691668b33c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","85a2043d588f6ba1501508d7e2113c96"],["/js/src/schemes/pisces.js","70c355bfec6612523114d07d281b0663"],["/js/src/scroll-cookie.js","3242146104eaed9b0cc4a08cb670e433"],["/js/src/scrollspy.js","71a6bd9a2bd1ef43b2c6bd1d8b1128a1"],["/js/src/utils.js","b02b25503d1ac8c6231ccc52a027183b"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","5ecc6e6d8c3705134f441d1e836ad5e5"],["/lib/Han/dist/han.js","4dbef0a4c6850964a8f8e956d00dcd29"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0ccc08104f9c6e32d3665672dbdec42c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c95d0e579dc776bdea9a6e3d0f7e00e5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6f3af4c8c9d85d0d1f5c02b9999b6ae0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","52b948c4715783c7114cd9b196b9f1d8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","968c7e16dcd400beceaa151ea64fc6b0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32051f9d19a521afd876c52a825e892d"],["/lib/fancybox/source/jquery.fancybox.css","3172ea01a0cb53e3affeb969a1d7e6aa"],["/lib/fancybox/source/jquery.fancybox.js","fe69e21384b042a81de52301dcf67313"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d1aa0e55a9ebc8957b9954b1d8890813"],["/lib/fastclick/lib/fastclick.js","eb4992fb30641c6950824d00bc9f49ed"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1c7e3a106629500380d4f5e20fb50cd5"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f2b533d27f0b70196d9e8b512453c714"],["/lib/jquery_lazyload/README.html","52f2b0f5a5aadbd784d26fbc51abfe01"],["/lib/jquery_lazyload/jquery.lazyload.js","fd985f1e280d63997f7db335937bbcc7"],["/lib/jquery_lazyload/jquery.scrollstop.js","aeb706c0dbb4a150d72e85dc7abc3bc9"],["/lib/needsharebutton/font-embedded.css","5d7a9c670fe2232a213e3b59938559d2"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","25d34e9e0d41412279e6f5a628c4197c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ec1abee4176cc259499cbda542c9142b"],["/lib/velocity/velocity.js","6e7bc961464485fa11f7d7f5257c795b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","34c57dad95c87afe6bd826b0d8851427"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","195d26ee6a1c62f5a71d15e414875e12"],["/links/index.html","1ffd0e60ec0728c3d04aa2714ba0e95d"],["/live2d-widget/README.html","7141794e64b6f8c8bc97248215b6cb2c"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","33a6dcfb69265ebed26af19e4c13a669"],["/live2d-widget/demo/demo1.html","e5a9c1c0d9b28707ea0cb1b0198dca13"],["/live2d-widget/demo/demo2.html","5b1d778ed4791c264947abbff83af9c5"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","16af4b747bf0f102f9d8762ca024bc9f"],["/movies/index.html","16b26fa41a5c3af5a0ddd325de7287d4"],["/music/index.html","3a9436a72d29f1cd4d973c64307e90f9"],["/page/2/index.html","edc98f1ab1d8e8c82634bb403648e7ff"],["/page/3/index.html","af7c839fd4e691c1179fdf97d4ded1a1"],["/page/4/index.html","3530f8023f0fd33b530c92f47c0dea9f"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","d0e21159862bfcbf5c4f40d398df126b"],["/posts/15468.html","a475a3d52a17fe6cdbd0ceaffb48e1d4"],["/posts/16107.html","0391ff0e3540a4b1e8be708c15f6d033"],["/posts/201e1121.html","8d245acbff828521821fae17e18b8db3"],["/posts/20352.html","40ce5c9c4ed1942eb58d42bec86d79f9"],["/posts/21238.html","5dafa76e4fd5b01251cc0af090a3a8f0"],["/posts/22281.html","c71e88030286c8d9d4e495c7989be005"],["/posts/278598dc.html","e6b670f1ef0ead6f651929f9eead9403"],["/posts/2d063bc3.html","6eb79adace452f8bdc7982dd86b33545"],["/posts/30c404a6.html","f8b704dd8daacfb7cb9c7f3633f2a539"],["/posts/51203.html","282a7c76b43ef8a9e91d14ed6c1d3c85"],["/posts/538e5180.html","72c7823402f791146e9a1804e762229b"],["/posts/5394fce7.html","8e36656fbce8ee85d581d4cd1b1d065b"],["/posts/59037.html","8ce8b81ae72180e108f53d9a8088226b"],["/posts/60816b5a.html","b58a2a4cd78149d79a03dbe797474bc3"],["/posts/6163d4b5.html","bd991dd5c1a29f8f47cf0de5d5e99de3"],["/posts/69978469.html","d3192ff341bae69a492920fdac0f727d"],["/posts/6a752619.html","89d6acd1a8b96e65cc7662d2eda9089b"],["/posts/7fcb11a7.html","9b4b38a2344c2798fc8f0a5eee437233"],["/posts/8cc73e65.html","0e3dec17b93d13e94ee18af74228bf9e"],["/posts/9b621d6f.html","f26fc848547f21ce26fea7016773d0e1"],["/posts/a530f7f0.html","6201748b0dc3e36ec9c6b64eab3a16b0"],["/posts/beb5106a.html","c801f9d4ecfeebd8af447e20c416966d"],["/posts/dd845106.html","ebb2429280c4d40417cc60f4f1b4efd5"],["/posts/e35620b3.html","269917554932fdfc135f6e50f8d2a192"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","92380faa63595a443fba9e4d1b4a79cf"],["/tags/C-语言/index.html","e13cbf3598a1e36c041b0685a2c01b83"],["/tags/C/index.html","1c67483fc126128ce44edbad2221d34e"],["/tags/C/page/2/index.html","2027c074fe15b66a3b76767bcce143c8"],["/tags/C语言/index.html","562e2374c9c2e525297e21d63ec75dd8"],["/tags/Hexo/index.html","2eb8a7ac21b3d98b121d30267ef1020d"],["/tags/Java/index.html","b6c8e6e0dd2903d5861413bfffe7966e"],["/tags/Mac/index.html","a673f0b0e3c4a25a684fb2c26be4fd91"],["/tags/Parallels-Desktop/index.html","becd6ef0d8660d4fef4173ce01dac715"],["/tags/Python/index.html","bfb2ffbd43aa4a1f6120fc137ab36b59"],["/tags/Qt/index.html","4379cf787b168baf913978cba974de2b"],["/tags/Sql-Server/index.html","a2d5af3bb68ad436395105ebcb61c919"],["/tags/abbrlink/index.html","cf0e534d299efd47ff0d8b75dc625fa8"],["/tags/index.html","072b03d00f827e3349d25d3690e4f820"],["/tags/冒泡排序/index.html","5764abcc8bcac7cf00a222c6b629d33c"],["/tags/双向循环链表/index.html","6da34ab94275cbdae9dc7eeb3b591fc1"],["/tags/双向链表/index.html","83bc06d80562e16e7192fb4791777c36"],["/tags/希尔排序/index.html","c4269ff1a6062cf973b2c1a4b91241c4"],["/tags/插入排序/index.html","07706cc9533f9a2f3a445ed8386e4512"],["/tags/数据结构/index.html","fb5651deac96f9b1264ccb15e780b0e0"],["/tags/数据结构/page/2/index.html","6062dccd644cba9262389005b4ee9b8b"],["/tags/杨辉三角/index.html","95d2f73e45009f453eb02f29eba86282"],["/tags/栈/index.html","ec2eb6e40d88d3ca2e2b52d8d36125e8"],["/tags/类模板/index.html","b71e0b47bb0509ebc3019a94f9a73776"],["/tags/线性表/index.html","3e98f5e2488229a75a76dd970c9fa66f"],["/tags/选择排序/index.html","91efb31c918162de2054221c9fc81467"],["/tags/链式栈/index.html","630e1ed70910530443214ca9f0169c74"],["/tags/链式队列/index.html","9c0d45d9b0cf41640bd4d6db1b8e8ad3"],["/tags/队列/index.html","cb459f351af2a6ea3323a24779cd8e1d"],["/tags/顺序存储结构/index.html","a1e67be00694d9870dcc15e68fe01090"],["/top/index.html","a57e3cf22c570c7d975820c49d052d91"]];
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
