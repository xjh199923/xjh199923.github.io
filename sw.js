/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","3533d8f16aa9b80da9d14aa4eca05dd6"],["/archives/2019/11/index.html","253bb3f9a38b1b4945bd8afa5c142465"],["/archives/2019/12/index.html","78a76d0d9eee5593f655161da5b8404e"],["/archives/2019/index.html","c92856bc706574c4a96d0ed7137d6ac1"],["/archives/2020/01/index.html","7e35569289a3fd4f489f753107ab5c1e"],["/archives/2020/02/index.html","23993fc63412a9ec8bc68e2297303629"],["/archives/2020/03/index.html","d6b5ea11adee433b4c1cd7b642b20d52"],["/archives/2020/index.html","f0455327ffdc16b551ad8dc8cad82839"],["/archives/2020/page/2/index.html","1f40d5cfea5d81229962a45671b63b4b"],["/archives/index.html","2b9cdbec37dc987e312f91b63df642c0"],["/archives/page/2/index.html","889486ed1d9f4aa72d72f178e9f51d25"],["/archives/page/3/index.html","598b4cafed1635463996e2145021d5c2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","107076978bc6ef9183730e22d9910379"],["/categories/C语言/index.html","d1a38f9c0f4164f5808799c5740f57db"],["/categories/C语言/数据结构/index.html","b54c492fad9a6d3e6f9da1113238f0ff"],["/categories/Hexo/index.html","2b00b3a2135679b0602d7a5138531c07"],["/categories/Mac/Qt/index.html","1352a543e145b5d389e234a2fef8f467"],["/categories/Mac/Sql-Server/index.html","fea2073d94b96d0ec8b0ae81f0bed37c"],["/categories/Mac/index.html","f070b5f857d697ded4393ca7e9fa59fc"],["/categories/index.html","0e5732d2f3afb30889de8ddb1f3fc45e"],["/categories/数据结构/C/Java/Python/index.html","1e68248eaa97f2bc54dcb12812df651a"],["/categories/数据结构/C/Java/Python/排序/index.html","92b0475409d5ee7bdc7a08b918467b64"],["/categories/数据结构/C/Java/index.html","9cb7a40371686f682180cf0dbfc25de3"],["/categories/数据结构/C/index.html","a919a825afe609d94d5e381e02ff9304"],["/categories/数据结构/C/page/2/index.html","eee1188027ade2f5f37fcc4f68b4c1c3"],["/categories/数据结构/C/双向循环链表/index.html","4540bd51d8de15f82ea88fb1222872b7"],["/categories/数据结构/C/双向链表/index.html","42128e7d6df5716dd7935ba911505abd"],["/categories/数据结构/C/顺序存储结构/index.html","f164bc1ce3aac2947bae1c235bcf1274"],["/categories/数据结构/index.html","7ebda733efad6a629b48396150f9fd66"],["/categories/数据结构/page/2/index.html","cad6ba2eff4591ebb9947a1fd20b9c5a"],["/categories/玩转Mac/index.html","0cc5dcc5b50bc349fa3ad041a8b38a50"],["/categories/链式栈/index.html","d2c1650e230384127b628f84823c627f"],["/categories/链式栈/数据结构/index.html","ec4ac7d34023299e2d8ca9a7166d7543"],["/categories/顺序栈/index.html","475ab4947ed56ee48290edf2c7dd7877"],["/categories/顺序栈/数据结构/index.html","8a33c63b7b7fecb93a908fa9a88bcd9a"],["/categories/顺序队列/index.html","ff94cb49aef271a23da393fc606d256e"],["/categories/顺序队列/数据结构/index.html","91ebbd5671c983fc630060b6ee801fd4"],["/css/main.css","5364314234d4266ea638433f14ce936c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1ae09cdbfbeb9e097306cf155f498ebd"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","947dd7cf8ef6b1379785ff9fc7f334d7"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","62bae53835a097c74e9d810332639b79"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7eac54c6ce5ab4b28e3decc090565c96"],["/js/src/algolia-search.js","8d307499cc9512d5ed25f6e3dcafc6e9"],["/js/src/bootstrap.js","99d55cc90a90654ba3291c5509575761"],["/js/src/bubble.js","dc09312001df560fe3813ddc6a810d01"],["/js/src/clipboard-use.js","39c3308087d2f630a9c98d7c1fd358cd"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b77be80df328f6950b246b45dc9b1a59"],["/js/src/exturl.js","5b1b60513a168e09877e7ea7de9402a0"],["/js/src/hook-duoshuo.js","6d06aa8eb565688e61d8125355c1d420"],["/js/src/js.cookie.js","f2e8ad842addb4435df8e7425b5c497c"],["/js/src/linkcard.js","3daa878e51d9bb87dbabf29f56e3b8c5"],["/js/src/motion.js","e41ace1c44a356071fa7a539385a06ff"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6b49345aaeb3ea864b72d1abff18aac7"],["/js/src/schemes/pisces.js","96ea0d036bd0878f9d56c62cd667e10b"],["/js/src/scroll-cookie.js","591e64defdde23ad0450885a5516f739"],["/js/src/scrollspy.js","b83875953b418c3279d5abca9fa1f2e9"],["/js/src/utils.js","71c84eccbabc08c3bc259425ece1e0fe"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","5c36554537df256a95f6635c3ca83f42"],["/lib/Han/dist/han.js","7254ca889f91384204093c244a0cdb77"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","194be641e0c31c4608d6c8383ded56e9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9d355e0a7d5c0898786aff3052b8bc8d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","88f265af371d7866ba8d69f123f45830"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bdb071c51d37b372f5605b372fd9050e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","17f1a230e15db837fa20cb9a1511e8f1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","2d9cace9e289aa57d6d0e7626384cf2d"],["/lib/fancybox/source/jquery.fancybox.css","27a0367b6ff9113ff2b29c4a95b8e9bb"],["/lib/fancybox/source/jquery.fancybox.js","c8bb22844bfb2a9cc6ba74901da55f9f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","85640da571a13f8ea72e24ea0102d92e"],["/lib/fastclick/lib/fastclick.js","e3f374c4c33ef96db7e35e3f3d222054"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4584b895c1a0fb29d14ae189fdbe38ea"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2559b7eea099ecc78f9f2e3d3f5132ae"],["/lib/jquery_lazyload/README.html","7ee60eb30b14e1f21004739c5ed91cac"],["/lib/jquery_lazyload/jquery.lazyload.js","59151e0d09872b2828d7bb0a84134c05"],["/lib/jquery_lazyload/jquery.scrollstop.js","4c4777c684b71a950a9f94f94acb9494"],["/lib/needsharebutton/font-embedded.css","6282ddeb006bfcdc3b7534a99e919d3b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","45dba4601828b1939b82fdce97061561"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","da574bcbb1fab7f7f1b04329429782cb"],["/lib/velocity/velocity.js","43caf7888927afa2e1e74432038fb3fc"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ea37a112b61d368388c7c04e0c08cd03"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","ce1153df51260ef512e792bc0a8bbb37"],["/links/index.html","6705cce8aeecc47657f0eea70d84c3be"],["/live2d-widget/README.html","258d70d4f40369056523b4f157c2258e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","af6f408974ecab95d8a95692a385bb3d"],["/live2d-widget/demo/demo1.html","b3f945211b4ad12ccd89e7261613e298"],["/live2d-widget/demo/demo2.html","161c1ef729dc1b5da438536adb86097e"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","28ecfc58ec2f4c2b9ee95db86e9c4db1"],["/movies/index.html","9509800e875644f55b567f997cb2904f"],["/music/index.html","326f58e675be1172ed2571f5035bec29"],["/page/2/index.html","b4f35ec6cb2c3837dfdb0f7f7dd2bc51"],["/page/3/index.html","840d8e187a6db991fadf0abaf18d2a18"],["/page/4/index.html","a58e51372c1c0cb4168bbc14e735fbb9"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","3a8bdc1be5d2bac61ef29834a26c0f37"],["/posts/15468.html","c089f44322de0fb8b7e8cb443c7170b9"],["/posts/16107.html","ef63d958b8dfe332c5ecde177e71964c"],["/posts/201e1121.html","29838cb0f049d405eba76a43f0aece9a"],["/posts/20352.html","364f79f1ed56458afbb67e24cc30a166"],["/posts/21238.html","2c9e2cb6d0fc557c240fd3a076a732b8"],["/posts/22281.html","f9002f4252c5ee582c4450051dd773c4"],["/posts/278598dc.html","2493b17f5af384c9443af96b336a0c88"],["/posts/2d063bc3.html","93cd9a0d9721e92bae24a99233a1771f"],["/posts/30c404a6.html","db00b7246e85bb3801a8a9d61b63d3ac"],["/posts/51203.html","8c4e21d48a52206e2598e767e5285fc3"],["/posts/538e5180.html","02422456a91011fa94ddc5052dbcacc5"],["/posts/5394fce7.html","01de0c5537b00909c0232c8e0f1edc33"],["/posts/59037.html","0c5b7544cadf1fa88c02aa87a638cda0"],["/posts/60816b5a.html","bf15bc2d9d243c9949eff1104c8bbead"],["/posts/6163d4b5.html","7e0d92132484761881d9d71be7ec1d92"],["/posts/69978469.html","64567221848eb62ca099cfadf8cb0dba"],["/posts/6a752619.html","7bdb15ae93047af5c2e90fd9c5553643"],["/posts/7fcb11a7.html","6a01b91cf002d3a446f821ad5947cf38"],["/posts/8cc73e65.html","111fc99fd18ccefcc13fe396016f27ab"],["/posts/9b621d6f.html","73b558c7f6600ee7962208f978d20a6a"],["/posts/a530f7f0.html","933dc84cf91474c36a1275731a29becd"],["/posts/beb5106a.html","1c3f2dd830d63dd8556bd18e92454139"],["/posts/dd845106.html","5a545897601b8d48a97a0f922a4b3366"],["/posts/e35620b3.html","f92194ab7c00f7db64dff43459d770c1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","170b8ccd5bb592a74ff8489513086dd7"],["/tags/C-语言/index.html","df84e7fd9e3447920772261be2ce0597"],["/tags/C/index.html","e39e27c1a745168a1bb2bdad4e53df0e"],["/tags/C/page/2/index.html","f88d02d48795f684f134dbd03ed95623"],["/tags/C语言/index.html","c2d4f45c33bdca5c8d0518d5a97f5972"],["/tags/Hexo/index.html","0816ba2a6a771184c60cde40131a82a8"],["/tags/Java/index.html","710a9f246cd898936cfec193c8378e2a"],["/tags/Mac/index.html","7802df5d312ba2d571ae6403ee2c32d3"],["/tags/Parallels-Desktop/index.html","8e863de74218ae9383a630cf755a6ea4"],["/tags/Python/index.html","333d9f0ff2a63ed50eee2f2fe28c1466"],["/tags/Qt/index.html","82b9a0b462f59e0b0fc1d76cb39bcab6"],["/tags/Sql-Server/index.html","72e8cb8b6641c217f2f7a2f504a69b7b"],["/tags/abbrlink/index.html","85ae68dec335bae01443838c399c22f1"],["/tags/index.html","9692f33d9ef5e877ed37291009a8b633"],["/tags/冒泡排序/index.html","4a95157c504bbb9ed05ac0a8429f7d81"],["/tags/双向循环链表/index.html","1d65f8bf5ead9489139f92c5c22e0ef0"],["/tags/双向链表/index.html","ad10cdbb17d7b77448704414967336b8"],["/tags/希尔排序/index.html","7fdb26bc1f90b3c72cb20f338f8bd76f"],["/tags/插入排序/index.html","638b6451d02dd87183425ad23c6e5202"],["/tags/数据结构/index.html","2374bf96640c4e0c9f03589a21bf7f91"],["/tags/数据结构/page/2/index.html","1d6fa2c2d0c8ef027f58cb7e6ef8ae3f"],["/tags/杨辉三角/index.html","669f56a0e316eecb10a56bdc658d047a"],["/tags/栈/index.html","927ec1914486a717a567523a7544086f"],["/tags/类模板/index.html","f11024b646fbb9e5f3e288f35093a553"],["/tags/线性表/index.html","0c5b9d9888d5479785fd1f57efed1f1c"],["/tags/选择排序/index.html","5068473dca8bf5c970b5c6c5277583dd"],["/tags/链式栈/index.html","77dd17399f9631e8ca8f4173c23207f1"],["/tags/链式队列/index.html","f34f3a3973750c7cecaeb54faa1536ab"],["/tags/队列/index.html","de4e1ff3cd5cbdb9794296c4570df789"],["/tags/顺序存储结构/index.html","fa79c7f74c48329be9ef1da1344cc0da"],["/top/index.html","f7d97f3bc62a94ab99cf2e43cf52582a"]];
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
