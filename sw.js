/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f88deae57fed280863daa412804cc43e"],["/archives/2019/10/index.html","2af9ba313e939a440f22f391e31ffbed"],["/archives/2019/11/index.html","c0b2f90d8a857976e282b61478a652c0"],["/archives/2019/12/index.html","a1b83db2d5b0bfee9fd09b8c528cf1fc"],["/archives/2019/index.html","754354fa09df29369688df98e68054e3"],["/archives/2020/01/index.html","77378eefcd033ffcc831a74cb60cd256"],["/archives/2020/02/index.html","1910c0f58f55e3928b7ad0c9e3a2d5e4"],["/archives/2020/03/index.html","4612ba5b522df3d4d25b0e53af0d8f77"],["/archives/2020/index.html","0c243e1e5418b45ca45d7a5bd3785a95"],["/archives/2020/page/2/index.html","a8bc3167cbae151650053a200c3a4b42"],["/archives/index.html","aea3740a993020adb1803841d0b0ef14"],["/archives/page/2/index.html","ba1c0f77ab9dfb67f6f3543dc2f791b4"],["/archives/page/3/index.html","9510adc2bd968968ac7f1dab11a983b7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","aa70204008504620c9fab4e810b0f1f0"],["/categories/C语言/index.html","a8d492e8d1cf8c5bcf16c7b7f9899350"],["/categories/C语言/数据结构/index.html","edd073653461bdacf00691cbe67db26c"],["/categories/Hexo/index.html","7411ff9e286ece8afd010c0a817f5371"],["/categories/Mac/Qt/index.html","9e8e147457eeb2bb5094d758f06e98f6"],["/categories/Mac/Sql-Server/index.html","9e73348e71313543ca8649ba37b161b7"],["/categories/Mac/index.html","e54d9dd20fc98cd3c56f2c615b2d2c5d"],["/categories/index.html","9d8b664809b71dc1f5f84e99034ce916"],["/categories/数据结构/C/Java/Python/index.html","d676226374c74e8a585e32096f9daf92"],["/categories/数据结构/C/Java/Python/排序/index.html","a9f408cbf08cc252538753b6a02a2fab"],["/categories/数据结构/C/Java/index.html","df8dc672af7031b622791d14b19bdf2a"],["/categories/数据结构/C/index.html","2e92ce3ae132e77d53753c31c58f5900"],["/categories/数据结构/C/page/2/index.html","da67a9c86fd978e067ddb850e1973b9b"],["/categories/数据结构/C/双向循环链表/index.html","f7b791daba462a95892a086bf215fa6d"],["/categories/数据结构/C/双向链表/index.html","dc825da5ac5e5128a59e26909ea60325"],["/categories/数据结构/C/顺序存储结构/index.html","8b844cd3878036dfd6e39a5f8c65bf22"],["/categories/数据结构/index.html","a5ac972f56f3856599c145fc0230cc77"],["/categories/数据结构/page/2/index.html","34194a29d39ff697466e96d93ad8f2fe"],["/categories/玩转Mac/index.html","466c947de8dc029698d36313b28d1514"],["/categories/链式栈/index.html","a64307b1b1361bbc02962c89835c2be6"],["/categories/链式栈/数据结构/index.html","e2449ca3f146e9c953e6ef6680cca4df"],["/categories/顺序栈/index.html","513be361b8fb17516f1b8f4656698eb2"],["/categories/顺序栈/数据结构/index.html","6e163b4b833ef27054104617ded1b052"],["/categories/顺序队列/index.html","00b2e61aadd5804993d1afa028522c81"],["/categories/顺序队列/数据结构/index.html","bb55eccc02d50575162bf6e3c2831d5c"],["/css/main.css","c3fb4a652030bec5c2a613e60d27614c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0268b904008a794106bd5adcd0d41086"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","9dbd01bb77df559806517a527a756450"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8a25b4277a1fe5de00602ed8624f0797"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3946cd9c1115b180805f6eea17afcc0b"],["/js/src/algolia-search.js","e0a366246ba603e24e2bafa77219a308"],["/js/src/bootstrap.js","fd37a830212cb3024f0dbd0c5bd35f60"],["/js/src/bubble.js","eea0ed021e0ab718c8cfea9c18fb269e"],["/js/src/clipboard-use.js","9d2e91f51f9c995fd751ecdd6c7fc657"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2ef0f7b8bc31f2fb02c53733740853b4"],["/js/src/exturl.js","06182c2d52fe01204f258ed6346cda27"],["/js/src/hook-duoshuo.js","d96e3c48b4a0a24cdfc346a325e47418"],["/js/src/js.cookie.js","a1b0051b57c094cbbf82c01251ebb6fa"],["/js/src/linkcard.js","80f079f30195b28ecbb236afb8f2c6c1"],["/js/src/motion.js","c1e7d79b4e03e17ae7944986e96d51fb"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","c8959705fb1aa7ba07a9d2dc712ed6e7"],["/js/src/schemes/pisces.js","609592aebe9be56dd48c1c25fd117dfd"],["/js/src/scroll-cookie.js","c65f90db54aea75cb2b04d16b202857c"],["/js/src/scrollspy.js","7491284109dd6c497ac9bf9319ed77e5"],["/js/src/utils.js","43e9a3c69ae332915a2bc7b681c432f5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cae0bc387399075000cd12423f34c95d"],["/lib/Han/dist/han.js","a46820c47aeb6d8c03f2d28d14a193ca"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","94fcb1957139819bcb1842687cd80b8c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","699066963b90d452c30ec6b09dcdb4aa"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","de248519169f28dc1cf01c9c93ef684c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2a591451b3f670fd14c59573aef0e894"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4501b1852a8126c009421aeba397663e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e8851d80f87db28863f77b1a4ff056e6"],["/lib/fancybox/source/jquery.fancybox.css","bb1954584c6ef577b77ddd174f8c1fae"],["/lib/fancybox/source/jquery.fancybox.js","6e2928c415d6835b393a3c27c75f1db1"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b6f10406836f62c9fc8ae5a5dd9e1b2b"],["/lib/fastclick/lib/fastclick.js","fd619b39352eaa1ef82b1598f5fafc05"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","65ccaa4a0f150d73abef2a3a08cb2d28"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f898fb7cf30dcc348bdee94530f0346c"],["/lib/jquery_lazyload/README.html","55fc7bd8bf5308273de6de1a24ed2371"],["/lib/jquery_lazyload/jquery.lazyload.js","5a50f757c26e36d9f4c4e7ad12b2f80c"],["/lib/jquery_lazyload/jquery.scrollstop.js","34d39561c20619ba80f9499886edadf0"],["/lib/needsharebutton/font-embedded.css","e2ae59cd202c493cac1b00fecbdb65ad"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","2020607dce8746259d06190c0d140a65"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0c8401d84ff06ad84c28b475e3ec6758"],["/lib/velocity/velocity.js","b3b163c0f20508c6ab2cb3c105f461c6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8be0ed06a7a814c74601737ccc17fb6a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4ce4f8d575040a0e26271ce02f68df64"],["/links/index.html","9337500e2c16a4308e0a590479a9f7dd"],["/live2d-widget/README.html","dee138cf008ed9ae3e94e71c8eb87a1f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5c90c3253610dda65ec6ccf4889d235f"],["/live2d-widget/demo/demo1.html","4b0b5d23ac07bac507ff1253dea526d3"],["/live2d-widget/demo/demo2.html","dd3d225ef82daf774bb518609d734988"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","ab4402b0a2e3d6609c24adc94a032002"],["/movies/index.html","049dac2f2fb577b03141a88a7e8980e4"],["/music/index.html","b1b4c33fb0e15df45eb7fb8f64840a92"],["/page/2/index.html","a5b05690b2d4c1d8e77ce5d92d3991ea"],["/page/3/index.html","afd866e95ab8ad996f39d9070ab61549"],["/page/4/index.html","8cebf2b7840542ea92bd4ff502eb740e"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","c11b07f8474d4004a61e209c163fedb5"],["/posts/15468.html","2ad73f294fca902611f5109fcf98a957"],["/posts/16107.html","7aebbd135bfeabf2cb3acd84979a7fc7"],["/posts/201e1121.html","6ea899c18dc0cb1b9a7000e5bbdf46c4"],["/posts/20352.html","87e1aefed22188292e993b981e4a4868"],["/posts/21238.html","4a483ba0e67f220e99ee3fbd0597920e"],["/posts/22281.html","a4448303b36838703a3842251a04a4a5"],["/posts/278598dc.html","1ed0587bb8026e468394105430e1ddd4"],["/posts/2d063bc3.html","affaf7a44ad9f61180aa6b1532c35e5e"],["/posts/30c404a6.html","706ee57391a110dec893cda625332163"],["/posts/51203.html","f963ae302a88f7f8baff55a41b038b75"],["/posts/538e5180.html","2e90efb535d64e817c0134ba0e5c7e89"],["/posts/5394fce7.html","701ab0f03ea304c384433b1d36846fd6"],["/posts/59037.html","499903e3467bce4e5ddd0dd9efe756ce"],["/posts/60816b5a.html","c3c510a421eaaac32cc93886d20c6f83"],["/posts/6163d4b5.html","f1ceaea3e44816df0a58eb1ea90e3688"],["/posts/69978469.html","5b606e4228d536cae8f0388bef0aed52"],["/posts/6a752619.html","675ca6fa7a2dc797e33d65ab32f3a761"],["/posts/7fcb11a7.html","c79c2a80e845864b6517ebf80a5e9a2a"],["/posts/8cc73e65.html","c5d4af65ce16979e8fcdcf1e055a22b2"],["/posts/9b621d6f.html","b0e79babfa295853a1c8ed306ba622d6"],["/posts/a530f7f0.html","c66aef24de57437b06ff2a300070880b"],["/posts/beb5106a.html","3b9fd9cd0e0909fbdde02148500be8e1"],["/posts/dd845106.html","2bcd76e227af0840a037ecb44ee5109e"],["/posts/e35620b3.html","0282bc18016af7d460fcbbe6e33e5f08"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","137a21e10f1d5b33c9c3f8e3364beb8b"],["/tags/C-语言/index.html","5ccd69d1a7c27e92dfbc8809d36442ba"],["/tags/C/index.html","3984e7a2a212c08d832760c69e5b7890"],["/tags/C/page/2/index.html","2e18f0cfcc8e1bb9dfeb2931e0dcb4c3"],["/tags/C语言/index.html","0c24d39d15e536a89947dde4854ee202"],["/tags/Hexo/index.html","d33c75e9868598ae16dc48dd2c52a54a"],["/tags/Java/index.html","bfabb30b6e4c8f539d2a470dd808b6d3"],["/tags/Mac/index.html","1c29a1b3425c421e66f181d32b23e7a1"],["/tags/Parallels-Desktop/index.html","dc81cffbff66701ddf9d509cf61f4122"],["/tags/Python/index.html","575b9a595f53065bcd55d98e11992f97"],["/tags/Qt/index.html","be9f8cd6f1ec88d3607e871720ab8119"],["/tags/Sql-Server/index.html","c088a9870fe3a6cfdb778e0aa101d1fc"],["/tags/abbrlink/index.html","f30ebe18196a4f9a3eeedc93f0f4fd0f"],["/tags/index.html","5037c096e7454400d80b8d5b1c25e6ea"],["/tags/冒泡排序/index.html","6c00724bd12b277d6344c526664b6975"],["/tags/双向循环链表/index.html","73a6dcb48ac09abfa2c5a611676fae36"],["/tags/双向链表/index.html","4c8f408cf399336a83d1b0485eff416a"],["/tags/希尔排序/index.html","ff04f6ba4b1c6371a861768fcaccdd21"],["/tags/插入排序/index.html","4fd939ba2c3434a3d038dd30933b579e"],["/tags/数据结构/index.html","7ad0e4164707bf64a84b66d3472deb85"],["/tags/数据结构/page/2/index.html","bcc14d35be80396c2fc9de12b2c3f1c2"],["/tags/杨辉三角/index.html","3ffa86fe46be5de4579702f39f7633fc"],["/tags/栈/index.html","770d8452f5601cf22eea2e14050476fb"],["/tags/类模板/index.html","4f1aeec752c9e1962217035e0fa6284d"],["/tags/线性表/index.html","03aed40e6c51712326bf14f2754f141a"],["/tags/选择排序/index.html","b93d5bd2a0bb50bc297244c643461a8f"],["/tags/链式栈/index.html","829ba38111bbb7db9da347c40d8d2df4"],["/tags/链式队列/index.html","68dec03c0445e1c2dcd82c2e2e7bb214"],["/tags/队列/index.html","8350daa6ceeea9682e3f1ba765a5eb68"],["/tags/顺序存储结构/index.html","fb6fa8c581bcf944ff60962b13547644"],["/top/index.html","55c28bd1b39f3618d381d7fac38717b0"]];
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
