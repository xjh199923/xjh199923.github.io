/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","02a3854c42e86b3dd50e5617a7a3a869"],["/archives/2019/10/index.html","7e68c7eec92afdbb495dde5460b1d887"],["/archives/2019/11/index.html","a2c751810d03aa6f9e00199264340873"],["/archives/2019/12/index.html","db3c9453ea5b24647cf3b734c7aa921d"],["/archives/2019/index.html","338fdc850b75b9b81be5401e05487a46"],["/archives/2020/01/index.html","2f878656c3bca7d8b27b4ab34e7ca89b"],["/archives/2020/02/index.html","963bc09a64b5519e0e5b4c4bcbf1804f"],["/archives/2020/index.html","6e8afc958c0a4bb7501aac641c25c612"],["/archives/2020/page/2/index.html","354f8c5d7032cee0e7c8a41cd45dcc51"],["/archives/index.html","a93d233495f40acaf3cc017fc7cbf529"],["/archives/page/2/index.html","bf01e15702da2e72b23ce1535e4ab602"],["/archives/page/3/index.html","3320da94fa35e8db234a518488b36842"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","cfd442155457a4ceb0b369e6b73406a4"],["/categories/C语言/index.html","0c960416d1cbbe6fc3ef6486b26baba9"],["/categories/C语言/数据结构/index.html","19a20e1397c290bf4f44e73ba4aeadab"],["/categories/Hexo/index.html","a348b4a292452507a1ed4c4a5cd5086f"],["/categories/Mac/Qt/index.html","9fc14a4baac8fa6d806bbadb836353fa"],["/categories/Mac/index.html","d3b88d64cfd6382a58050e7b86a35775"],["/categories/index.html","11737c765c1f3ee8ad884866bed71268"],["/categories/数据结构/C/Java/Python/index.html","1d9c1e895f44508cbf596ff52c2e3dbf"],["/categories/数据结构/C/Java/Python/排序/index.html","6f1364c5a3c94e3e57d924553d09471b"],["/categories/数据结构/C/Java/index.html","6730c651ac2cd3e3c9d44a44ce27f27e"],["/categories/数据结构/C/index.html","07d7360de069931f2d9a6d92bae30db3"],["/categories/数据结构/C/page/2/index.html","6e14fabf64700bb2e247847c6be93ff0"],["/categories/数据结构/C/双向循环链表/index.html","d2791522f956878412a4efb51453c36e"],["/categories/数据结构/C/双向链表/index.html","8e824513e3103f6f9e6adbada84965ea"],["/categories/数据结构/C/顺序存储结构/index.html","6170e316507b9d423937a50a40168184"],["/categories/数据结构/index.html","a82bad6966b8f1147099fca17d24a188"],["/categories/数据结构/page/2/index.html","e0816919ad1dba9ff81d0cec4b7b6975"],["/categories/玩转Mac/index.html","6579105cf3126f849ffe04192b78cc10"],["/categories/链式栈/index.html","f8141b6115a9aaf152bd1cb46f5613d6"],["/categories/链式栈/数据结构/index.html","d152f50ec253106a11a3162670eb82da"],["/categories/顺序栈/index.html","180a36f760bc9e02a6309d81ea53c6f6"],["/categories/顺序栈/数据结构/index.html","9f1a34574b2adfb4f72fedfc90460d23"],["/css/main.css","143c76753d6bc4db400529cad085acc8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b2f8a8787a20e259f79074ec5db525ee"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","a29cb69446d25e509ea0d5f2659d32db"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","6fd3e8a4ca894b1cf647d6b84a1a2c4c"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","541f259ef9fdac0e2fbcba332f0096d9"],["/js/src/algolia-search.js","44747e806930592e1a341ef72579c449"],["/js/src/bootstrap.js","ef25549e721c96a818c2c55e68230b29"],["/js/src/bubble.js","9ba1d59e107c4916e949df6d040d9b83"],["/js/src/clipboard-use.js","e9662c1a6780d6ae128825475eb64e8c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","dff3c14eedb2d49dd15e86917b4a9909"],["/js/src/exturl.js","11e6dbd37c7c21caae30754644922449"],["/js/src/hook-duoshuo.js","4ce637fac66ac7a1f11f3ed3694cf573"],["/js/src/js.cookie.js","7b52812d3714aa1ba51f8cfd8c02e1ca"],["/js/src/linkcard.js","98aa8d7c46eeded69556c908546f6b01"],["/js/src/motion.js","607466efb9de94b9813d8c61a931b640"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","625bf74781e956e253dba8602320c6f1"],["/js/src/schemes/pisces.js","72dcfb96a131c478ac7384cf4e007be7"],["/js/src/scroll-cookie.js","b1dc56e90bdbd9d7efa7b8c60611585f"],["/js/src/scrollspy.js","802cf23257dfc1961902de6bd2c4c92d"],["/js/src/utils.js","dc38e8bf14bb51a7579f82ad5acaef90"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","0b8983d07a07c4d117c610b7961de17d"],["/lib/Han/dist/han.js","515906dc91dc508ade3ef59e395d5e9a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4a4b0d5a97cf531aa3967ab321efb698"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","544adf417575b96c9d87ec0eb487516f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","7cbaeaebdb1aaa444a6c1cfaf078a4f3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","821949a053a7641308ef6b54761bfd08"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5221da08bf0e657444f26bcd8e995e92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a96fd30c671f49bc01352dff6d9c8eec"],["/lib/fancybox/source/jquery.fancybox.css","3958d7fba5c3b1284879f59d6c31e0a8"],["/lib/fancybox/source/jquery.fancybox.js","93c05434eeb220645099dccf43cf770a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","a92bdefc8045259cd359f7ec742adb23"],["/lib/fastclick/lib/fastclick.js","db394ffc2c5f7d927e137ca848035749"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","dab83e2bb841e724d5bd9411aecf0219"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cc2134df63eca242c935e4ad428e5676"],["/lib/jquery_lazyload/README.html","43ccc0e6a19a40104cba0efbc69d295a"],["/lib/jquery_lazyload/jquery.lazyload.js","aa4c462ccb1119e25270318ea44b62cd"],["/lib/jquery_lazyload/jquery.scrollstop.js","a1abbd62ea25fb167ff0c1f8b9d4b396"],["/lib/needsharebutton/font-embedded.css","013e0e51d1173a1b1d80611982094707"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c80a4ec298fd8d63dcaf6542362fe0e0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b72de962db3786687aae792b1ba8bc2"],["/lib/velocity/velocity.js","04f8b3a0b7001cc762def8a0bc543d81"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9d7938c4ede4325bf083915a82812f73"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","ed84651e64501b70506a47a66105eb0f"],["/links/index.html","c1c43cf4af0bd56133b74726fcf57ae2"],["/live2d-widget/README.html","2493fbe50c8c258dfaededd8b62228dd"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","f24e89b44178ecf04bf3317eab9b78b3"],["/live2d-widget/demo/demo1.html","7e53e079f4dbcbf3d1fa9bf062b36e04"],["/live2d-widget/demo/demo2.html","aab64687b6919f21753b50fa73d069d8"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1d3433d8ee2414c5e80fe44b345824a5"],["/movies/index.html","4976d68ccce30008f502f54df7a35c29"],["/music/index.html","0b89c0671b7891b671cefd2dc1a45e96"],["/page/2/index.html","10ae80deee5bda8abb11e449bd99ece3"],["/page/3/index.html","098c0ff0c31346df5164e6c73d8f65fb"],["/page/4/index.html","51f93731b42f55d4b4364a73a448588d"],["/photos/index.html","106a1a7926c03e0b9119d027e4a408cf"],["/posts/14311.html","d0424b425f70945095163d51f1d3654b"],["/posts/15468.html","7af738e6fef47aaa17f038b44b79c2db"],["/posts/16107.html","90d3ad8620e71ad5165a2b01d6bb206a"],["/posts/201e1121.html","6801c705daea7aa6b9d06ebaf69e0a03"],["/posts/20352.html","9d68d38f4883f4f8827a2019c4dd88c2"],["/posts/21238.html","6cc08128fca3c6e94b0cef709e679b4a"],["/posts/22281.html","b3ccf59d10cdf1bd58167b6349717bbb"],["/posts/278598dc.html","a69bbbd36274c4987d7becb8d7d0c146"],["/posts/30c404a6.html","d39ee5324f9e46a796185bfb2545761b"],["/posts/51203.html","02fcd96b87f337cd56ca582d80b83f34"],["/posts/538e5180.html","aacf71dff0f9fcead152a99c8dec63b2"],["/posts/5394fce7.html","9b40418555231da0264531a2dd6f0f8a"],["/posts/59037.html","eeb4b9943eaff6e12804b66806338261"],["/posts/60816b5a.html","95d859cbcf8572139d2674413ee0fca1"],["/posts/6163d4b5.html","8e7e0d7c1ea60166620d57fbdd1d938b"],["/posts/69978469.html","e50760a5f9ace7c09156eb6d8986be52"],["/posts/6a752619.html","acbb9ecefcdb02679d3b2111c40f7d3d"],["/posts/8cc73e65.html","5516d3c71ce6ce7d5c171e1243ce8db8"],["/posts/9b621d6f.html","5b4b2bc9a3525ed85adc9dd64e774740"],["/posts/a530f7f0.html","52f42c7167b2fd96efaa0dbe3b51b063"],["/posts/beb5106a.html","544444d024897b9de5c634d1147c3d1a"],["/posts/dd845106.html","fb64b937e78c76cda57c847923859509"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","2f6a04f0514e4b5dc4be0d1136ae790b"],["/tags/C-语言/index.html","e22798b0533007448234a27daebc0fe6"],["/tags/C/index.html","2e84687bd6946b9267fb2a0bfc575426"],["/tags/C/page/2/index.html","19f3fbd2182e92c0caa1c6ec19a23e80"],["/tags/C语言/index.html","89223dc577a4abdf7f4831123fe32b5b"],["/tags/Hexo/index.html","88cd992f2518db1d57b302c59c092ea0"],["/tags/Java/index.html","1e095e008f242b37d67945750a8d64a8"],["/tags/Mac/index.html","a1662f62c133729c64e0bed395c1c09c"],["/tags/Parallels-Desktop/index.html","c2aa25a5494170fc7418c3943c282d38"],["/tags/Python/index.html","964d353508deb8f884d8e37185e13ab6"],["/tags/Qt/index.html","618fd4b9db8ff46e12dd7c63edcd3955"],["/tags/abbrlink/index.html","990afdf4bcbcf3d683d0fe404e0ce4f8"],["/tags/index.html","29780bff9d4c413ccefb4e5f4c421036"],["/tags/冒泡排序/index.html","342aaa030e63a96c9186f3f5c1f140fc"],["/tags/双向循环链表/index.html","3356e20a01e82a9422c709cb6ca6f384"],["/tags/双向链表/index.html","91e4664b935a0307b823d846b54459b7"],["/tags/希尔排序/index.html","4f0ad54fc530dc836fffa442a0639615"],["/tags/插入排序/index.html","af4cdad520c598671c5e2d5110f8f88e"],["/tags/数据结构/index.html","0990a8561dbdae41feaeda1619abeac8"],["/tags/数据结构/page/2/index.html","3e36583bfb1fbfe660680250632b40bd"],["/tags/杨辉三角/index.html","cd138cfb97936ddb836ba41c9c10b277"],["/tags/栈/index.html","9261660e3ab0b9dcf02643cb7b7a9a14"],["/tags/类模板/index.html","9aa2d92294d9c034082082175e4d66db"],["/tags/线性表/index.html","00cce2a80d7283a33beaf46bb1d7bbd5"],["/tags/选择排序/index.html","c5bfdb4f1014708b63c7dac9023293ee"],["/tags/链式栈/index.html","71f92d5d561f4880a862025419ac73cf"],["/tags/队列/index.html","96cffa21ef866d4cc3d8dda86ff0417c"],["/tags/顺序存储结构/index.html","95a8d62fb69f8bebfc31d683a439d935"],["/top/index.html","0029cebbd63e537c9c3a183d4a99af86"]];
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
