/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","8011d6476699ab09d0eb813c52e65145"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","cd36586324c63e70aaa65cd89b143695"],["/archives/2019/11/index.html","17648be88338a132368f8ddbbca207bd"],["/archives/2019/12/index.html","73002c63c64fb18dec2453977716eeb3"],["/archives/2019/index.html","74591e1835427b4b24fa4c0f1c17d8d4"],["/archives/2020/01/index.html","449bedeea0bd550374af9b721ac5437a"],["/archives/2020/02/index.html","32e14ae9296e5e60a7d352c6410e97cd"],["/archives/2020/03/index.html","c1108eb1d061a25ebada0a07962a42d7"],["/archives/2020/index.html","a64cbf8ad7d26775b13f0e3dc5c93e09"],["/archives/2020/page/2/index.html","53ae2b37babc5a00cf13524e14d468ed"],["/archives/index.html","c4f7c0598ab83b5814195f054c00f9c4"],["/archives/page/2/index.html","fef1fc21608036799820ca1934ee0e82"],["/archives/page/3/index.html","ee6ed92480ca9f2ed620251fd91d4bae"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","8ffe360cafa331cbf1ec0f60137ffd44"],["/categories/C语言/index.html","386a116226d16d7f1cfdccc29277ac72"],["/categories/C语言/数据结构/index.html","8490d227156754f24a41530f66157ef3"],["/categories/Hexo/index.html","7209ad394edf85f1ab7bcffab89ce97d"],["/categories/Mac/Qt/index.html","fd4a4d1e831061b7e3f64b36a21c4397"],["/categories/Mac/Sql-Server/index.html","ee74c3d29be21df04babaf81078a36d2"],["/categories/Mac/index.html","40af6298d64b9174f079da7e93a98fec"],["/categories/Ubuntu/Hadoop/index.html","35fc6b1000fb455f6486e935546ff098"],["/categories/Ubuntu/index.html","f3330ccdc5a2c0feaa5f6f4b415d08a7"],["/categories/index.html","2e6acb0b5d674321e5db6f999f906231"],["/categories/数据结构/C/Java/Python/index.html","48981c883b578e900b7558792668756c"],["/categories/数据结构/C/Java/Python/排序/index.html","7877877ca70c8c9515d9a9cbfb5edaeb"],["/categories/数据结构/C/Java/index.html","ad82d546d989aa6f76365f36387a9a1d"],["/categories/数据结构/C/index.html","7af8a3e9db88a03cf980c106108eabf2"],["/categories/数据结构/C/page/2/index.html","78d698d99bb84017620d800be5285e5d"],["/categories/数据结构/C/双向循环链表/index.html","4021c017cc083f88ae1fa1e8fa0f8fc7"],["/categories/数据结构/C/双向链表/index.html","1050cfadf52bee2994bd82a509328a81"],["/categories/数据结构/C/顺序存储结构/index.html","321107a8357229c9b27d5c66823db7d5"],["/categories/数据结构/index.html","bf0db92c289ab38e3fb5bfded43de095"],["/categories/数据结构/page/2/index.html","cdb1d6f790eba2442a8cd1e368ee014c"],["/categories/玩转Mac/index.html","1395c4eadc08c2e0e9708fc9253cee52"],["/categories/链式栈/index.html","f181b0482e1d468f117d5923692c49b9"],["/categories/链式栈/数据结构/index.html","b19af27c5408eeaad6bb34e635832ce0"],["/categories/顺序栈/index.html","841a7fc6277dc31079b3c2adef8f89bc"],["/categories/顺序栈/数据结构/index.html","2c22faa62341cf5b46653f8c274a9f98"],["/categories/顺序队列/index.html","2ffc0ddd3576ce67e31ea3a363f192be"],["/categories/顺序队列/数据结构/index.html","fcb9c2b2953cd5ffd574778eee5e3045"],["/css/main.css","15ba095ffe7f4c0fbefcc7877e2c6aab"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0b68bcee905c4a779fe417bc86be40e0"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","05ff59dadf85f5826e1c9ac3fc1f58ca"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","4e126d481cb7299d76d5a678efbe8f7a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8737369957522680afadef2738828516"],["/js/src/algolia-search.js","6d601d0f6b4fb270c3caf2685b02d1e0"],["/js/src/bootstrap.js","505364349bbeab5c22b80de8165a4bfa"],["/js/src/bubble.js","ea6fe6cd96c2ffd50563d9d624f47332"],["/js/src/clipboard-use.js","98ca5138f30c0e9c1fcb8f193eeb707a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","43986c1fc99d7f235b8cd38cba32d5e7"],["/js/src/exturl.js","d71a0870753dfc69c435b0c438c3cb5e"],["/js/src/hook-duoshuo.js","3b8a74c61074f967f57efc6f2628c0ce"],["/js/src/js.cookie.js","92201d4e6cd63a1985b8627c4ff1979b"],["/js/src/linkcard.js","8d5176c5642aa46f44909b362b7fea78"],["/js/src/motion.js","4bc84cd346ab45b4c6b584c420a5ab6f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","0941be659d221d33b6e1a873bf69f456"],["/js/src/schemes/pisces.js","3336a119378e43153072bd211ef3e008"],["/js/src/scroll-cookie.js","3659a944f634d92184fb298394a472a0"],["/js/src/scrollspy.js","59e31e2a754a68d42f1d4ed866b2bc87"],["/js/src/utils.js","1728a130a4edb1d69be0ec75630a53df"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","28be0285743c2b3dd461ee62db8293e0"],["/lib/Han/dist/han.js","ce40c67c76ab297477277bf601518948"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d34089f7da05a96ba3646175a486952a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2a44cea76bb7a7d89f35f48834becd90"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","145a1b6972c484939f0edc4717373d09"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a8f6184ddfd5187c4174e97b96df0bf1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2612e448c6a19567b7e7d387c32e054a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","dc6bec347b61787440fd4b5b0ebf96e4"],["/lib/fancybox/source/jquery.fancybox.css","e4fc2d457170d8a79ed9ecc59d6f16e3"],["/lib/fancybox/source/jquery.fancybox.js","274988c5342a3fee6133be691ead59db"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0d72a6a3495211c16c3ba52d3ac802c3"],["/lib/fastclick/lib/fastclick.js","957acdca107f0c4265c0ac73de022895"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","de4bcf79aa5c0bca7a63b7188fb2fd0a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","29b3ed54b169ebd31be37d53248fd401"],["/lib/jquery_lazyload/README.html","83c952bafb6f4329c7c7ea60f984ad01"],["/lib/jquery_lazyload/jquery.lazyload.js","0b3731ebb7971184c25c82a47c7e119b"],["/lib/jquery_lazyload/jquery.scrollstop.js","207cd7d75ade05697c3e27a110942800"],["/lib/needsharebutton/font-embedded.css","0fc543857dc49da8db087fc8f981c8b0"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6b0622fa790680f313345a4264412cc1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e2eaaf573f3e253d037ce993819e059f"],["/lib/velocity/velocity.js","b13a89ef5f40458625760bdaefdbfe91"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bb7077ff02d2e1513fd9a8045ffab9d5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","01c065abf14cf1ad163e80144ae5ec23"],["/links/index.html","4ee4066991a4d5719eb408883166a339"],["/live2d-widget/README.html","8100d113a6cb083f51362451765eb947"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","9f531606feea8b617cc48d3f9cafa897"],["/live2d-widget/demo/demo1.html","264b9a8926f31224020ef719083b5f44"],["/live2d-widget/demo/demo2.html","a9925f80b7b29c50465f89596d52218c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","921b95ec6d916783750ad359844bc15b"],["/movies/index.html","c96840c07ac44e0886837678674e9d82"],["/music/index.html","c235b5643b18953a2d750ca4f1c9e101"],["/page/2/index.html","8967312d49a2d038cd90e081bf57b8eb"],["/page/3/index.html","749ee3409cf17f17ee7a9b6ac98da8dd"],["/page/4/index.html","45f9ebe931bd3a4972504a1d9eecdc1d"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","d01f388730571f6beb261fb2792de19a"],["/posts/15468.html","6b97aa5067804f58c2c69574283991c6"],["/posts/16107.html","d12197dbd68a2a17f954d2c15597b321"],["/posts/201e1121.html","da5b7c16d41ccf9a10f6cada1af3ba17"],["/posts/20352.html","3d82a6f9c8fe99549e01b8b4caefccfd"],["/posts/21238.html","c7db5ba21e5b6243255b51f908f6ac66"],["/posts/22281.html","e9392c9a41e374099ca3dab90246cdc3"],["/posts/278598dc.html","9cd305fcc16f72af5c1cb700de82b2e6"],["/posts/2d063bc3.html","9b6f1f52db1599bc2c950989459e9a15"],["/posts/30c404a6.html","2ab57cd8ebbd5b064f3163929e0fc3ec"],["/posts/51203.html","601ab8b3b9c71c9f26853427504c6fa3"],["/posts/538e5180.html","709fb36c12e77591a86ebbecf900cf14"],["/posts/5394fce7.html","ecc6ddd37fc23c38ddbab8a504bac15d"],["/posts/59037.html","a4a01c3e17674cc6d5fdb7a5761c2ccb"],["/posts/60816b5a.html","fee9cb630ab0e742b06796f47355c0e2"],["/posts/6163d4b5.html","8e69fdc19e9d63704b8c085b12ae0406"],["/posts/69978469.html","fe06f122395df46e44a7dbabbc7c3b92"],["/posts/6a752619.html","d186b83bb4354d27c6307bd290113f9f"],["/posts/7fcb11a7.html","d74f7ffe6f4e89e0569cc348ecbff678"],["/posts/8cc73e65.html","3a9965afd9afa7e209d135f84504ea50"],["/posts/9b621d6f.html","d3e4971910e19c14ef6e8898e55e1fc4"],["/posts/a530f7f0.html","36abded2f67f84aa61ad9d01600b40fd"],["/posts/ae1da46b.html","48de59c111e2e81261b9cf35c0615afb"],["/posts/beb5106a.html","a0a91c0c57662058718cd067d29b52fe"],["/posts/dd845106.html","98f9884893c797831e4f6b59e4f98faf"],["/posts/e35620b3.html","854b2846cb267233fc8a5b65540935ca"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","877c6f6a1ca1d4825cb97b0470fdd75b"],["/tags/C-语言/index.html","6d34e394661efba9ecd90e8ce2d8349d"],["/tags/C/index.html","75ca34fd7bb0c7604e45bb99d3e10d1a"],["/tags/C/page/2/index.html","d8d4ca4bc4bf81fdf15aa6e103f4fa03"],["/tags/C语言/index.html","4ba628292f562ae2ee200ced02fee9f3"],["/tags/Hadoop/index.html","cb589030b05d2a0823e9e7101f2181e0"],["/tags/Hexo/index.html","8a0d911545380ac32e4de440f78971ab"],["/tags/Java/index.html","007b0a6b01d4c2197244978f01cef4c6"],["/tags/Mac/index.html","5391f2517016b36ed418232cee61fa14"],["/tags/Parallels-Desktop/index.html","f6d56a9cf7a52ba26c50bd117f773636"],["/tags/Python/index.html","737eba07d53991d2483bd85954477fb3"],["/tags/Qt/index.html","a3175da3ead16e5b83b17b450e66d149"],["/tags/Sql-Server/index.html","cee47a4228fa0d02c556acdb8b71e9d1"],["/tags/abbrlink/index.html","947292de8f2652f67a0bfc081ef52be0"],["/tags/index.html","fe27d0ec954df94fecc44b195052db5c"],["/tags/冒泡排序/index.html","481e10d79ea48aa2d9106339968a382c"],["/tags/双向循环链表/index.html","bf2982267b4ef8acfa6b43f9fd881acc"],["/tags/双向链表/index.html","c4e3c3d20e4a29ac0d2c32acd3bd9647"],["/tags/希尔排序/index.html","c221a13a78e7e61611011f4903e27f75"],["/tags/插入排序/index.html","4ee695bfa3a8164249e9bac7ca915576"],["/tags/数据结构/index.html","eea1b472e6c26c81b621f0b5bdbd91e6"],["/tags/数据结构/page/2/index.html","ce11fc4475cfdf9ab2530b8b540e74b4"],["/tags/杨辉三角/index.html","34a728df18340ef0058963af9addbde0"],["/tags/栈/index.html","3584b2216147284d2a6a71c0cff64562"],["/tags/类模板/index.html","92c4f14601ad796c6444cd5a597ca000"],["/tags/线性表/index.html","5fa2faeba12edaf4665ec0f7077d96b1"],["/tags/选择排序/index.html","82b2cc333e7b410a7de30f90291856dd"],["/tags/链式栈/index.html","1ee67afd393d5a9e5c328bec40ec63d7"],["/tags/链式队列/index.html","317439954d9b155a4ef425a482dc3f55"],["/tags/队列/index.html","73f3472fd85d6a54d40aaf5c42d85912"],["/tags/顺序存储结构/index.html","65b1d333d4a204d98470c1e776d350ac"],["/top/index.html","77f6ddc7d627780c1b6e8c30272ddf64"]];
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
