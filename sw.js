/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","2992fc29d2d5947947489066046ecb73"],["/about/all.css","808bc5ba2a18e36c0e8ac250297433f2"],["/about/index.html","18f2d14b70e77a223576228186790355"],["/about/sakura.js","bf1f06058b0a896a1c6391d05c1ad847"],["/archives/2019/10/index.html","962eca4cdc1f2c78c3e3278b1a1d1d88"],["/archives/2019/11/index.html","5f0f8fc8b6676e5b566a6c55bce629e7"],["/archives/2019/12/index.html","f5357271000504cc5b807e26023a8a97"],["/archives/2019/index.html","5c0143a1ff7f6f923170975485441dcf"],["/archives/2020/01/index.html","c8f7fb4ca21164f6a16351f2d3a3d76d"],["/archives/2020/02/index.html","8b00af4dbcbe1c9f2794d638bf2ceb98"],["/archives/2020/03/index.html","20d732b9bb89925db3973f874993ea32"],["/archives/2020/index.html","7b8967b3a85f57179c03c6b601fce639"],["/archives/2020/page/2/index.html","dc24125c9309b682c80b09da61b99ae7"],["/archives/index.html","a056324e80169045f586a11e2ec285ad"],["/archives/page/2/index.html","e03a19a77d2bddbce35236803d0de484"],["/archives/page/3/index.html","50edfcac0fa78cb33a2469c1fde4edc9"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","14accc5dbbce4d1a14d3970d6f302e8d"],["/categories/C语言/index.html","e7412918298aa6f9a2ca86e178eb261e"],["/categories/C语言/数据结构/index.html","1388ce92a86c0df52745953bb6721aa5"],["/categories/Hexo/index.html","4dba086d80f77ead034d54e2c4e21704"],["/categories/Mac/Qt/index.html","d20e19fd086c1d62136ab41dd58b628e"],["/categories/Mac/Sql-Server/index.html","b85d97a79e1dc9e59a14ba70cbcbf472"],["/categories/Mac/index.html","ba562d5f295b39b9311a21517b9ec902"],["/categories/index.html","46d7f62f8ecc0c056021131374d53635"],["/categories/数据结构/C/Java/Python/index.html","591bc4f393e0f38ca64672e2160d6255"],["/categories/数据结构/C/Java/Python/排序/index.html","e95105f62c65268c60d0dd6df2df1c88"],["/categories/数据结构/C/Java/index.html","e7684467d16e7c177efa848c9dda7bf5"],["/categories/数据结构/C/index.html","93ce3a8f3ecdd45db23da9d9c94b173b"],["/categories/数据结构/C/page/2/index.html","8d1d02e9b935e2f49353930fb2aad9bb"],["/categories/数据结构/C/双向循环链表/index.html","b66e05a5a7214a23d3062c1b9e2345ee"],["/categories/数据结构/C/双向链表/index.html","2257d458c6341acee350ccce3184d53f"],["/categories/数据结构/C/顺序存储结构/index.html","bb2654dd89745890d0743e9682f42b6c"],["/categories/数据结构/index.html","765f745956b1af8e3632f09c822ed64e"],["/categories/数据结构/page/2/index.html","3a97438aec2f6b7295c4fec8a31b588d"],["/categories/玩转Mac/index.html","43768df6b1f2955f29667ddf25b4958d"],["/categories/链式栈/index.html","b7834462023be44eb41b9ed52c73965c"],["/categories/链式栈/数据结构/index.html","380101492988e251300e92551c3f703c"],["/categories/顺序栈/index.html","62077e4193716db679b8a69eb467af62"],["/categories/顺序栈/数据结构/index.html","e4a715a0b173926ee359a183ace451bb"],["/categories/顺序队列/index.html","ee1346717d41de2753738ea279c2fddd"],["/categories/顺序队列/数据结构/index.html","154d3829a33c64ac78efa86b4ae0d135"],["/css/main.css","4264f39fc46ac0770d1e176abde53b0d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6e080e4e8ac119bcdce46cd0bae256d1"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","6e64572c0a4bfed812bec96796e7949e"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7c6443270ad0dacb54a58bbafd7bfe63"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f11472e381a0fe619018c527f212c21d"],["/js/src/algolia-search.js","2a644d9b66bd3340ed1eb9cef981fa06"],["/js/src/bootstrap.js","5e0a7b699df8e374e74cb76e0056edce"],["/js/src/bubble.js","06e9870b6e6dd610fc942abad8614723"],["/js/src/clipboard-use.js","3bd2e72e329bbf24ebebe1e855719473"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","eaddcd2feaafc2fe0b5c5cca1e801c48"],["/js/src/exturl.js","548d245195b69a4519616c1bc878546a"],["/js/src/hook-duoshuo.js","d8f252f6a4b591e1245a96c982b7069a"],["/js/src/js.cookie.js","112d0ed96129ee07c97f0ee59afe21b2"],["/js/src/linkcard.js","503c94b752ad921b0c760718e04b9391"],["/js/src/motion.js","2d97b1c09f42dd0c081e620229c434a6"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","2c252747d9f7b88f4b6b6e88a97f267a"],["/js/src/schemes/pisces.js","e40c7913af91bb65bfc735cb618eb7f7"],["/js/src/scroll-cookie.js","ec33fff6fddbc89bce1bde079e226849"],["/js/src/scrollspy.js","1db063383586cad0b832aebb97cccf73"],["/js/src/utils.js","78dd20ab34c9743662c5071c4106010c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","958455d4375eeb5e7160fc98feacf930"],["/lib/Han/dist/han.js","a5de907b1a704a72035b7aeedd985dfd"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4813d63f43acbacc5bb9d3a500806ecd"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d7b93aa3e3cd329215aa26d9f83527b2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","25768449c307b388692f1f15ea183e04"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9187f60ff9674084cad7f546655f8dfe"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cd91fbd1769f882914a32b40fa3ec5b8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3b69a73025b9f8bb3d5675e1f4481b81"],["/lib/fancybox/source/jquery.fancybox.css","dde97c753e12c238a9167a9d62e8a90b"],["/lib/fancybox/source/jquery.fancybox.js","660f1acf3d32b4bccd56997c36ce924b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d7759cc99af1e66e0f041fc1691921cc"],["/lib/fastclick/lib/fastclick.js","0eda5470e885375e641a1ba268714eb5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f3f3b526a37f22cc84ad3b59cda0f4ad"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","00eb5ec2c57c33932abb397381929a0c"],["/lib/jquery_lazyload/README.html","7f9d52b367f98a7575f795213bb881d8"],["/lib/jquery_lazyload/jquery.lazyload.js","48cbd5da58068757e2998ee9b95349b6"],["/lib/jquery_lazyload/jquery.scrollstop.js","27a82c2178f91b7ab4a923b49a3e7b0f"],["/lib/needsharebutton/font-embedded.css","48cbf78848d29f6891c9dd285e3e2d2c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","0ee696b375aa70bcdaa15fa29ecb3481"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","af236ab658947bc540230ace0b6650f1"],["/lib/velocity/velocity.js","ab33c371994566b3dd882d778ddc0210"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","041a341b1fa9c50b246ec63aad5e78b0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a95db5bc4d6d8fbc8c08c43945476cbc"],["/links/index.html","db02eb89429b2e94f0d01c168260c3bc"],["/live2d-widget/README.html","5b7453fa4a89a0dc64763b543814ab78"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d98fa85735decb31de28e5a6a7c7eace"],["/live2d-widget/demo/demo1.html","58528afb7b3ee1de088f9ea69420eac6"],["/live2d-widget/demo/demo2.html","08c9d080bef0910b381c7bee749d9ffb"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8f6a22c1876189b41adad9a943addb17"],["/movies/index.html","7db1f0ab900c46afdb3f5edc1e67f556"],["/music/index.html","1be393569e07b9c06dd393f2c248967d"],["/page/2/index.html","04b7ae51ef5242a938463bd0a87c9800"],["/page/3/index.html","17720c78cc323dab2ea2134827e260f4"],["/page/4/index.html","52bb7d50605ecba8893b904933eb037f"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","257abbd2fb9bf89880d96328b9ebcd67"],["/posts/15468.html","83b26742958653eb73c2c97613176fec"],["/posts/16107.html","2a6d30afbfd9e3721e39ed6272b460a3"],["/posts/201e1121.html","7f375845afbd4c33d75a54280bc06a9c"],["/posts/20352.html","e6356f86a152993fd79406ed6dcfa921"],["/posts/21238.html","4a9b62c9d7f16665ba1f0608145058ff"],["/posts/22281.html","b531ddc72fae0ee7450f9728c37947ee"],["/posts/278598dc.html","b2aa280fc6f4e41636154aab56ab3ab1"],["/posts/2d063bc3.html","8e0321ad86ff1d51809945826ce574b3"],["/posts/30c404a6.html","6bcddb29070a75f6e437a6edb20c9f4b"],["/posts/51203.html","70e025e23a7fde1a023e7d013e20cbbb"],["/posts/538e5180.html","173db4ffef2b1523eb2e53dd7f6e4f9c"],["/posts/5394fce7.html","99bc9b6f8f787cd5c1bf422ff95f79c6"],["/posts/59037.html","35ce6e990c33cd12c448ea6ad50ff786"],["/posts/60816b5a.html","1a4925322bc26327433402b1f2734260"],["/posts/6163d4b5.html","2becc72844c37d8de0d4cdc187601008"],["/posts/69978469.html","411eeeef320983871845851d3b9ad437"],["/posts/6a752619.html","150a1da4f6918fb845ab01f4c1b3713f"],["/posts/7fcb11a7.html","1d7add09ca5fd0eae73d790387980014"],["/posts/8cc73e65.html","babd2ed061398dde775611183bd38662"],["/posts/9b621d6f.html","9211bb5ddd1844b6b6c9499c51fc8808"],["/posts/a530f7f0.html","5576a9909dd7861f5faa74f45a4dadbf"],["/posts/beb5106a.html","986ad7834fd1beee337aa13c96d51c0e"],["/posts/dd845106.html","061a86f4bc4addb6da690817e57a6bba"],["/posts/e35620b3.html","240af7485b395300a29a776fba5b54d7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","5e77f18c51ceeb91aac28375793a02f1"],["/tags/C-语言/index.html","4c69b7dd8527743b78c17c35e18ee8ab"],["/tags/C/index.html","95a1b4043729738cfc76774c9c8a84df"],["/tags/C/page/2/index.html","4e079d7b8d6cc693cf574640090fc4e9"],["/tags/C语言/index.html","003e795cb0a50320f84f61a843c79691"],["/tags/Hexo/index.html","20ffb4422f196ca8ba521d74b22afef6"],["/tags/Java/index.html","f879e088727385f6a7fe8e0db93f6ad5"],["/tags/Mac/index.html","b28d7ec7d1a03d2d24abc5423362ab84"],["/tags/Parallels-Desktop/index.html","e219763965057af9e50fb4044fb82ac8"],["/tags/Python/index.html","77d17d85f37f8cbd0879e56eacfc93bf"],["/tags/Qt/index.html","bd40178e217121f7c870019b9906211d"],["/tags/Sql-Server/index.html","e8f04c20026afd7d4060b9f1b05b3396"],["/tags/abbrlink/index.html","0a7c6a46908fcdecb42cb627e3942c09"],["/tags/index.html","ad5d26c1874e82db69df91507a6e71de"],["/tags/冒泡排序/index.html","2f28c4073edaf95b8757164d36490a9e"],["/tags/双向循环链表/index.html","59f622dae5830e9ece0322c7128a8233"],["/tags/双向链表/index.html","ec2c8d05505b318131e5c7d148f8aba5"],["/tags/希尔排序/index.html","c4c494a5940fba8752cf982e0c18fe2b"],["/tags/插入排序/index.html","d44d5d0f6bd00800e8801658c400a2cc"],["/tags/数据结构/index.html","65cd7655c7c8988136b4c000bd830821"],["/tags/数据结构/page/2/index.html","de2fbaaafcd48a30fb51d0290a75e24e"],["/tags/杨辉三角/index.html","75fdf5db4bc05f24aa1b852f81e89388"],["/tags/栈/index.html","62a40723a49007df34d63333becce030"],["/tags/类模板/index.html","0e067676d96d461c113dbcdb74c1ab8a"],["/tags/线性表/index.html","6c50076f8098920ef4668ff51ea5a50e"],["/tags/选择排序/index.html","df6462d4ee50162d0c5ae59b21bf0e99"],["/tags/链式栈/index.html","1c189349785d4eb40fd0a1c14a845bc6"],["/tags/链式队列/index.html","1233c480e3648b98b9f694ea2107109f"],["/tags/队列/index.html","a7d18f9059638be0b64ab060d91ef082"],["/tags/顺序存储结构/index.html","c37479b01d831dfc84ca7abe6cdbd6a4"],["/top/index.html","001af067a6612e448a62ea0a2abfb1e9"]];
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
