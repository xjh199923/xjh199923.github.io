/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","64dbb8e24df8de3e4b7b66f3e2c45ebb"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","3a4c221472d79bcfc74c8e3b893237ca"],["/archives/2019/11/index.html","d67e4f0f1c6473a9f25fff43cda35f29"],["/archives/2019/12/index.html","2b03821cedcc54bd80e069413345813a"],["/archives/2019/index.html","953367e59ea5ad56adeabe6b3fee6293"],["/archives/2020/01/index.html","90fcb2f8f2d92c21e344e6701e179f9e"],["/archives/2020/02/index.html","5dda58bdcb4e5baf1bdee7da1ed66c0c"],["/archives/2020/03/index.html","754f5eb7450e85585e487dc1999cd2e4"],["/archives/2020/index.html","8f1c281b77935c9d1c62ce000bcd92a6"],["/archives/2020/page/2/index.html","38d46b7996d377d5e328bdb33b64162e"],["/archives/index.html","566b3eb560975797eeaf72647f345dd9"],["/archives/page/2/index.html","5ce5f43099e2ae06453d860856a0ea75"],["/archives/page/3/index.html","2d339a5eb1c18af7f4752c371996bca8"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e1ac662968c66be49ec23a2a4f678225"],["/categories/C语言/index.html","6b0c132048fba78a73b5b07d4c9f5c77"],["/categories/C语言/数据结构/index.html","86da8c837cb0ce76f9bf93fc0b33a221"],["/categories/Hexo/index.html","2753c477eebea7e1dd47a743eef66005"],["/categories/Mac/Qt/index.html","423db52df8e255a580b4e318c59509a2"],["/categories/Mac/Sql-Server/index.html","78ebc976171e3adcf19a7374658d26b1"],["/categories/Mac/index.html","3e6cb1beb0bed061aece9609f42d97bd"],["/categories/index.html","dd836aa39c295befc22ab900d7294bbb"],["/categories/数据结构/C/Java/Python/index.html","214bf5f81163ccc383b705221573e6ed"],["/categories/数据结构/C/Java/Python/排序/index.html","8f44180f9dd2656ce2fa810bfbc08297"],["/categories/数据结构/C/Java/index.html","e73b493264174871b379783c88a4aebf"],["/categories/数据结构/C/index.html","37b0d5749aa521996093c91522eb2a4c"],["/categories/数据结构/C/page/2/index.html","eb1183a2aa9de3620c048569d67c57f7"],["/categories/数据结构/C/双向循环链表/index.html","8510950b2c29942be2748b02c231802b"],["/categories/数据结构/C/双向链表/index.html","3552de7ff360102e3e949fd3f5a69da3"],["/categories/数据结构/C/顺序存储结构/index.html","10b37ab1de5bdfcf47305dcd44d7d150"],["/categories/数据结构/index.html","b3da4ff20eb2bbbaae6dce8b19ca7318"],["/categories/数据结构/page/2/index.html","f4152a068d8aedfd2dd0bb846619923c"],["/categories/玩转Mac/index.html","f0190d6d1891d19385804aab710a2362"],["/categories/链式栈/index.html","d06bcb6e170d595559de308cb0340d7d"],["/categories/链式栈/数据结构/index.html","83c1641c374beac57a553cf4f5a85a3b"],["/categories/顺序栈/index.html","ca05e2cbb3f001e87e22f0102ccc6947"],["/categories/顺序栈/数据结构/index.html","fa82b984acf908977e5af3ed1deed3c0"],["/categories/顺序队列/index.html","81d88d76c8cc82e7947fe7c9558c961a"],["/categories/顺序队列/数据结构/index.html","ba69fb63723c522bee38a5a9fea0116e"],["/css/main.css","55784c52c149932a7df441ba1670f943"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5824ad916c0973fbab38a4a66df4dfba"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","85199223f8fc3dd3b9571b2b7a15627b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","0a41176fbe3c69eb38a166fc9b2c8384"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2de2ba20656e2570e953183d4a5165b3"],["/js/src/algolia-search.js","53164d82c84b75b9f303ff27f864d976"],["/js/src/bootstrap.js","7725546d6c16dbdc00f75b46a9decbeb"],["/js/src/bubble.js","db6ec933fbb2f6435a7951388b63a9c7"],["/js/src/clipboard-use.js","e31b4d17a4c356e7916535b177ccbb20"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4858228509fa8f140e00145aa7250eaa"],["/js/src/exturl.js","6337fdedcf0896447cd4fce02cb4f6bb"],["/js/src/hook-duoshuo.js","fc7ee817fbf919d9fff738e1ee3b6920"],["/js/src/js.cookie.js","c9aa4fbec99993315c70a3a54120dc2b"],["/js/src/linkcard.js","a54e47368997066e249dab3cd8e180df"],["/js/src/motion.js","e0f7e9f70b1b9f09115f845433033647"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","089f0b61a9369f62d054ca110c0d8084"],["/js/src/schemes/pisces.js","83d616053b3d91cde01c8405f2ecdb72"],["/js/src/scroll-cookie.js","169bb0508c95e8819d395c7f8f147202"],["/js/src/scrollspy.js","caf752d6fd8e82b162eafab2c39c8d86"],["/js/src/utils.js","acb9c049254f4e68164ae9a04e76a6cd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","1a5950675e4a3f4a2ced26e31f28bd61"],["/lib/Han/dist/han.js","ff381a763ca97b51e835871b4848bc74"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3c929611ab74833e6e3b1231d92b6ff3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bc7eec3f6a0f4d82b4a1811a8c67839e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","7584edfde924afb504b69a3ad4420490"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b9c0a08a1f2f83553fd81c4eb3ed9d95"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d0adcd2732f63a2d5b71d12f1ff69183"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0adae61327a43ddf6c6c3a0e2af54df0"],["/lib/fancybox/source/jquery.fancybox.css","0d97eb5681f7564ae41705350ed03808"],["/lib/fancybox/source/jquery.fancybox.js","065374f857dcbd318b77c3af69617d77"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c2ce47e4060c98de19d573c747cb1d5c"],["/lib/fastclick/lib/fastclick.js","d3def702c000e8c8a7e930fdeeb15666"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d270748b38081b8a85aafadfdb44e779"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","192692822c6d34d6189afc7059f51d52"],["/lib/jquery_lazyload/README.html","911a19b1b72c52caa1eba92e77ee452f"],["/lib/jquery_lazyload/jquery.lazyload.js","487745aeef2d05ac4b6be15c27b2f8b4"],["/lib/jquery_lazyload/jquery.scrollstop.js","54f9a4c10b1f008d63193073e608ab89"],["/lib/needsharebutton/font-embedded.css","6d637867480139cfcbf10d23a8ab442e"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","16f794e4cc7bd480c0edf41d0813dd1d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d74544ea8048898adc1d578c20c3667e"],["/lib/velocity/velocity.js","9ee3cb133cd0ecbf6847b26e5d42fad0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","540e135f68db86946bafd4081dce6458"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5fccf8a8a51b27bdfbfd1efd962c38ee"],["/links/index.html","be75e047cdf9d4e81a32157c55a0d25a"],["/live2d-widget/README.html","efe3cb8cf3ee1183ee8368abd4cadfcd"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5831cb86d0f89b22af244bf842c01e63"],["/live2d-widget/demo/demo1.html","2c190806f52579e68d2dd074d2c616ab"],["/live2d-widget/demo/demo2.html","c0863614c501d808bd816261966af020"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","db98e03242917e701d9a0ba1a3954bb7"],["/movies/index.html","3bb8c716f049cab455f2c8ff493af824"],["/music/index.html","48dfdd6ab8435b6d98e70cc1916620c7"],["/page/2/index.html","ff86bb0586f4bb1124a490ae37d528b7"],["/page/3/index.html","b90bc28416bae8fd9d858b2ba9ae0569"],["/page/4/index.html","39ea204381ad14710d3ede5772e43db1"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","b77f9c356110568a155efbe98621ef3c"],["/posts/15468.html","b875a6b34376fe61d5138dcf397f9b25"],["/posts/16107.html","6f5ff1a1b858235d04118412320821c6"],["/posts/201e1121.html","a07ac360b451e0e1107d5b9844455734"],["/posts/20352.html","46ad285f568c8c3949f3bf5fc37c9b4d"],["/posts/21238.html","fddb47bd699a76439e363134da8d50ba"],["/posts/22281.html","4ae65e19f9f92edeb6da32062f66daf3"],["/posts/278598dc.html","d8a16637fc779524968f7d9509dd0eed"],["/posts/2d063bc3.html","1b1c9a49ba8406aeda3b2f1a21be2fdc"],["/posts/30c404a6.html","180f2dbd46d49f9413c7cf2d17c9d2b3"],["/posts/51203.html","52dd41ea295a1b60b64b93f2887a49e7"],["/posts/538e5180.html","ec3d80b38c356e2141b4b14c174a97a9"],["/posts/5394fce7.html","227faf6b0f9a7f2843bbb326fda32c05"],["/posts/59037.html","89f3759b0f748dc08e6d0e8500ee54be"],["/posts/60816b5a.html","5e3cbdff083e7fa1fa20ee726bfab5e4"],["/posts/6163d4b5.html","872fc8e8ed5fc9d66fe96732916d831a"],["/posts/69978469.html","b55b892d92a286a31521beb9040d4e07"],["/posts/6a752619.html","b6384fd7c1e013da35ca67eec63cd509"],["/posts/7fcb11a7.html","9c1ed01173a85769d2cec9332e265c73"],["/posts/8cc73e65.html","2c5e707a5243b5e756504aa019f7c68d"],["/posts/9b621d6f.html","a8a550f11a28b87517016bf984c921dc"],["/posts/a530f7f0.html","c40fdac6eb0b12388cd6429c545c1458"],["/posts/beb5106a.html","cf62205769b9e50574dc196d9190d961"],["/posts/dd845106.html","4bf09b0a90ee86ce6de166b0067e2341"],["/posts/e35620b3.html","dd74adcb7e30dc67feae37d04e8807a4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","8a9ec3dd0e09079caae3afb3ddcf57b7"],["/tags/C-语言/index.html","dee75721efd7f268cb090aa8dab6ef6b"],["/tags/C/index.html","ae5329669b9f8643e5a13a5e6597f2b0"],["/tags/C/page/2/index.html","16076888885408e25b02460b2b7ac3f4"],["/tags/C语言/index.html","4506ccbba2de3e7f213176381a9e1e1d"],["/tags/Hexo/index.html","7eeca258a88acebe3f1a55b928241c71"],["/tags/Java/index.html","859d1786973cf23e435b368fdad2c158"],["/tags/Mac/index.html","bd7aa8762d802282128734dd800e0ca3"],["/tags/Parallels-Desktop/index.html","22f141b2dedd57119b197f62640b23f0"],["/tags/Python/index.html","87834c8fc3b3edab0bf3c5901a5b74a0"],["/tags/Qt/index.html","b09950b97394a918998bee4a1caf557c"],["/tags/Sql-Server/index.html","9bf8f8c9cbc0ccc0bd17658ad43db695"],["/tags/abbrlink/index.html","339d6d5f2a144c4c07cfbcd1937adb4e"],["/tags/index.html","6fea30bb2572b6ba1590a6e2239d8606"],["/tags/冒泡排序/index.html","958c5e56df3d083a511f47ee6e84ccc6"],["/tags/双向循环链表/index.html","7b7deef4ba8e43beb02e9b5d1aad12b0"],["/tags/双向链表/index.html","1a1ab4b2c0e041fe32615103583cbca6"],["/tags/希尔排序/index.html","8f603ed78e2b533d1a2e042fac6af5d7"],["/tags/插入排序/index.html","dd2bc52c8417e40b749edca20428a71e"],["/tags/数据结构/index.html","3c3aae59a7de738b6b25abd1557cfddb"],["/tags/数据结构/page/2/index.html","6837e872e30dfb7b251520ad8a933ddd"],["/tags/杨辉三角/index.html","44864c6aae3573e09e929a68b4c40dbf"],["/tags/栈/index.html","4bdde9729374b061b1919ee56372960e"],["/tags/类模板/index.html","015dc29496434c8a745612ba9d694fe2"],["/tags/线性表/index.html","f56f838b8d689f8c8c671e531dcad18c"],["/tags/选择排序/index.html","b858d275a750b7ca7c6a3c3cf3ae7f11"],["/tags/链式栈/index.html","cf2d233c318e4fef0a64723443bbad0b"],["/tags/链式队列/index.html","809f6525abd9ce238cc84f5e9d66c480"],["/tags/队列/index.html","75be90cead732707e0e265980712709c"],["/tags/顺序存储结构/index.html","b45c0902912d991d7ca0fceda759af41"],["/top/index.html","db03ffb3e8492495d8d54cdf3419b928"]];
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
