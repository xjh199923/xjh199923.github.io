/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","19c67ca2d1b626dc255f47dd261f1358"],["/archives/2019/10/index.html","53a2cc8a68fc6d126785ca305f9ee876"],["/archives/2019/11/index.html","87bd518a94c6da51f36476dd9e3fdd27"],["/archives/2019/12/index.html","e6b2027e5fa7da43a2a315519b735338"],["/archives/2019/index.html","eddbe44e69d147dbe8d815a938adf2a2"],["/archives/2020/01/index.html","a881826f7872d593709c53793f5bd52c"],["/archives/2020/02/index.html","c1ed7cdf1148ae6a67a9261d93225ea1"],["/archives/2020/index.html","1e1b11a115615d4359221f5abbbfe1eb"],["/archives/2020/page/2/index.html","f113d45a474b3d92897b1ac1e9d5e95f"],["/archives/index.html","4b69c7adf24e0d35d1749fd6b40434d3"],["/archives/page/2/index.html","5723a08c90b2fc5bdff1e164d2d8fa76"],["/archives/page/3/index.html","84cc8f2a6a137a2e01ba153eaab37882"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","83aee67daee2a943a98910e26d88dcd6"],["/categories/C语言/index.html","02a29fdded7fe678402c4201de25f6c7"],["/categories/C语言/数据结构/index.html","fcd6fb157cc7f43c6cd9651978c10b55"],["/categories/Hexo/index.html","0c59b2c15eeb66f472d71ab3725b495a"],["/categories/Mac/Qt/index.html","9d910bd099c53120235504a7f277d12e"],["/categories/Mac/Sql-Server/index.html","04fa5a01ec183d027ee712dcb6065c34"],["/categories/Mac/index.html","cbc9f8da6247fb1a53f276e28cb5f3c4"],["/categories/index.html","b3403c84c381a2c8e43522afac7771fb"],["/categories/数据结构/C/Java/Python/index.html","40499d8227b6bcff312681ba00d7b998"],["/categories/数据结构/C/Java/Python/排序/index.html","2f996bdfb5fc601ce73722c437d6693a"],["/categories/数据结构/C/Java/index.html","26bd180ad513428774b9196447884def"],["/categories/数据结构/C/index.html","af743a357499e7ff95a2d1d4951c8610"],["/categories/数据结构/C/page/2/index.html","dea18a176e0561b2f24d1496c6c421c5"],["/categories/数据结构/C/双向循环链表/index.html","636a5c0bfb8bc48297d95870b8fadcc8"],["/categories/数据结构/C/双向链表/index.html","430a7e823c47a2f886217e7747696cc9"],["/categories/数据结构/C/顺序存储结构/index.html","d2b5c2c190b7911801c5f94f4487c32d"],["/categories/数据结构/index.html","95069f8cbcf0c97ce30d69e779e8ed26"],["/categories/数据结构/page/2/index.html","eb2a5b36641e061a60803abb4cbfa6ef"],["/categories/玩转Mac/index.html","e3117fc4c745a4316759a866c05ee230"],["/categories/链式栈/index.html","6c591f0263556786f19bb26acc3996df"],["/categories/链式栈/数据结构/index.html","c493ff47b26c23e445f50df48e638357"],["/categories/顺序栈/index.html","6edd8ae0bf234f5e7191c11b159c492b"],["/categories/顺序栈/数据结构/index.html","a07403220026ea5eab295de806173fbf"],["/categories/顺序队列/index.html","9ad0a1fa662e966f47e50fff5c05a0b2"],["/categories/顺序队列/数据结构/index.html","287cfb3329c7b4bce74225209dff4060"],["/css/main.css","0c8cf6d2a7f164d494b6fe8c3943c8e3"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","4cd4b0bd7e76de0f388fadb0cbe8c056"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","3b1b5ce3eb2f41c27d3635349f3a74a2"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","1cfdefcea760e780ddb6e65c9139edb7"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d1547332b855ad7f579711ebf775f5ee"],["/js/src/algolia-search.js","0237357b354b05cef9ecbf036fd4d2a8"],["/js/src/bootstrap.js","55b5200d17bc9f41cad8119218d9a2ec"],["/js/src/bubble.js","4e2af66fba8710ac3edd37f44da04f73"],["/js/src/clipboard-use.js","32c769e9bc45daa21a36640f7607539e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7e968c82852c4a3f387ac0c27af1df8b"],["/js/src/exturl.js","4bb62c729e2a1d1436a670ed5734f2f9"],["/js/src/hook-duoshuo.js","32e63ac43de04c3d2cfd756e5eb3757f"],["/js/src/js.cookie.js","22084bc5be27e8fcf314475624fbae74"],["/js/src/linkcard.js","e0f7ed8adc16a451bb1daae09daa618b"],["/js/src/motion.js","6f0eaa4e24e48450888080ac3db92701"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6b82f2881e3f084a8418e896777f48a3"],["/js/src/schemes/pisces.js","801195ae4236d86450bb7bfb07327e53"],["/js/src/scroll-cookie.js","3ffd5f22b8eaa4a4474fe157a922e321"],["/js/src/scrollspy.js","30cb6c5f7f585555f5502f73acea53ce"],["/js/src/utils.js","b3586d5d6fbc57c4cdee171e3c5e1adb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9d6c33094555b5ed5c8739419c7a82fa"],["/lib/Han/dist/han.js","2c04d0c6a7a4b6b7d32c0241676dd39e"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3613c5ac63a0d8c0f7442c986e3a0b5f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c5de004e2f734605d81716e3b0a402df"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0700f3891d41335583446999967a092d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","955aef9ee9563eddaf7023514e418b4f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","41407a5353a9cc40942c0fac079b3079"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","162fe6cc3943869cded544b0ac85c8f0"],["/lib/fancybox/source/jquery.fancybox.css","ce17a2dc03e8dbd73f132f0273110919"],["/lib/fancybox/source/jquery.fancybox.js","b2a84de3e51256f8bc94ad62d5819297"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","54634efcb929c69a93eb9c78fa97ec8b"],["/lib/fastclick/lib/fastclick.js","028cdb487302e499b4117ebe19914c4c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8d6daf32839946a34fb4a14f1d4005ef"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a0e511fdc722c3b912029809a49f6d39"],["/lib/jquery_lazyload/README.html","d14cf3fa5f589ce6b8b6e227e1a32455"],["/lib/jquery_lazyload/jquery.lazyload.js","d4c2e235762fb0deca4acdf240579884"],["/lib/jquery_lazyload/jquery.scrollstop.js","fe26ed2869d903191d7a3ba0c46f59e3"],["/lib/needsharebutton/font-embedded.css","8b77880857531fe6e17379632ceb3cb7"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","d2a578c2f59fe2eb9c851fd23377441a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0cb8bba74813077504daecbb2cd97298"],["/lib/velocity/velocity.js","3b4319a48903301f4945c88ddc137816"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ed1436f3c38d9aad90942554e5bd22cb"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1638dd83a68acf6d3ad29a42c4f8c363"],["/links/index.html","c3bfd5ded461da9e7ecda51e4053a175"],["/live2d-widget/README.html","9090eed8eafbeb09a77937e99462e2a9"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","227043d9dc85c42ead330cb0d6a86722"],["/live2d-widget/demo/demo1.html","5587844732419af83651f320f39e3175"],["/live2d-widget/demo/demo2.html","97ff8637ce1e655fc708db89f9688974"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","2b0eb1b800f554faf6fe538d8a6dff2b"],["/movies/index.html","d07ae0abdce84ce9e959c6a526d4b904"],["/music/index.html","12468bb94fb099bd2834821298deeb4c"],["/page/2/index.html","5b783630e47f59316dc98705499369a7"],["/page/3/index.html","9a13fbece81c2f1af43f8cd3e3665c4f"],["/page/4/index.html","433c915761fd81d7d6c240254e554d2c"],["/photos/index.html","ce1bfd877a72ffb90bb6dbb6bbcdca34"],["/posts/14311.html","9319a204bc45560ce60af06080e7c617"],["/posts/15468.html","0239148a814df4708d2a969e6ed00573"],["/posts/16107.html","2bd70310c803385d879f683b1485e29d"],["/posts/201e1121.html","828b09402ffb9a05374abe51bd61a6f2"],["/posts/20352.html","f00997e68b071baad1812220288fca78"],["/posts/21238.html","ce304c07bc7dfea09bb3da8f4aca99b2"],["/posts/22281.html","7221ac28612ff90302c52dd63f238d13"],["/posts/278598dc.html","2f3bf384da6ecfbcdc9f762c4bbc1eac"],["/posts/2d063bc3.html","9d3ae743b79da52499dc191670001712"],["/posts/30c404a6.html","e0d2b1ea0bce8011f45d618101a040ba"],["/posts/51203.html","752ac91b34ea9c84fe12c5d3c04c7442"],["/posts/538e5180.html","fde8fe735c96dd0754ca25bc9cd70dd8"],["/posts/5394fce7.html","9d4c186c31079fd720655a2e5dfd6e79"],["/posts/59037.html","a1f019d2c80d569065077137ade14015"],["/posts/60816b5a.html","b19aeedef1010428a3f00f10f6e06e82"],["/posts/6163d4b5.html","2c8af34e6ebe06d16dc88bfa45641c90"],["/posts/69978469.html","123921cd74fbb109065b66e1207e2268"],["/posts/6a752619.html","3624bb346ab8d9415dcc0fe5fc2fcf94"],["/posts/8cc73e65.html","baee9c6d0e45aaa2f1324fdd6e93611e"],["/posts/9b621d6f.html","76ae3a82e840a41046d9f2ecaa2872fd"],["/posts/a530f7f0.html","0811fdf20476d9cd16696d9891421c46"],["/posts/beb5106a.html","0f1e791efe0a918a3a6d7e6d4998c30b"],["/posts/dd845106.html","d18f11ff2f9074d7dd104a816550091f"],["/posts/e35620b3.html","62187697ba380e5235546f21c99bd0d4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","64b9302883bd48a47bb985fac556d20a"],["/tags/C-语言/index.html","fe258462ba4c93bab20727b8b4701b71"],["/tags/C/index.html","12670ebbc98fb33289c78fdfebdd581b"],["/tags/C/page/2/index.html","a1a1ab5d4de0ac753de2bcf7f0036265"],["/tags/C语言/index.html","29964a3476316ac788deb6313d838b8c"],["/tags/Hexo/index.html","0da91a363cd4a2ee3bf5d51fd457dd8f"],["/tags/Java/index.html","fad65bc79764b6476b767797bd28e9b9"],["/tags/Mac/index.html","108bba61c98d9818ccd48d85b90c0174"],["/tags/Parallels-Desktop/index.html","9ae23d689c6a9d2ccb0c950bd84c4c8e"],["/tags/Python/index.html","00504772341d41bb1d2e34cbcd06dd27"],["/tags/Qt/index.html","ea8ea5fb33e8a610cac6f56c98334754"],["/tags/Sql-Server/index.html","54fd277d435571508d35c8206fe54ada"],["/tags/abbrlink/index.html","310c29efa73cbe6bedccaeada7b400f6"],["/tags/index.html","cc62888ea2681cccb35c1b941654cc1e"],["/tags/冒泡排序/index.html","4a338e42228f1e2141a8cc5ba4493436"],["/tags/双向循环链表/index.html","8750f194d496b2081267d53a817f0c32"],["/tags/双向链表/index.html","5d7af43928b3517a16e016344ede144f"],["/tags/希尔排序/index.html","4bbac27708149f83d5193ccacedb4963"],["/tags/插入排序/index.html","233af944a382431d9c8a88d6ae4e58b0"],["/tags/数据结构/index.html","1ac94c9d520d01ecd933608a31072941"],["/tags/数据结构/page/2/index.html","82c30eb80afcc9b4d823ff08c369d711"],["/tags/杨辉三角/index.html","3854b80cf17e388a4cc1959a348593ac"],["/tags/栈/index.html","0685a00d63436529f4a51adda0deebb2"],["/tags/类模板/index.html","65446a503518bddf727163c2330aea3c"],["/tags/线性表/index.html","244fe38bf472e7685665d9661697ded5"],["/tags/选择排序/index.html","aebff1a9109cbeecee7fbc7c24d24727"],["/tags/链式栈/index.html","e36ccaa6a7e3e70769cbdee4e659caf5"],["/tags/队列/index.html","0872cf959bbecfc2dd56cc34d3fe8fd8"],["/tags/顺序存储结构/index.html","924e05841d86fa915ad248b4d397ea42"],["/top/index.html","5866a723428f53d3b57ae3bc46d1ef2e"]];
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
