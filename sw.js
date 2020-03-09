/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","008a888d30ddc60037847a2f9374ae5d"],["/archives/2019/11/index.html","7d33166dc6897928d14d48fc4bf93fdc"],["/archives/2019/12/index.html","1aa6ec66e32feb740c7bf67d85fda715"],["/archives/2019/index.html","0b279bd4a7243405ed1c704b0c7219b0"],["/archives/2020/01/index.html","fc0a77d1fb7bed3a92b75d93a32bf5e4"],["/archives/2020/02/index.html","550e9af976de679de0c947e8e6b0f0dd"],["/archives/2020/03/index.html","f7c38dab23fabeaf53a5879afc138356"],["/archives/2020/index.html","93f23c7eee1b3ee8a92bc3336f240ed1"],["/archives/2020/page/2/index.html","351540072e52aaeb168fbf08f12bb9f3"],["/archives/index.html","aaff5b56375b267c1fae9fa4221f4f1b"],["/archives/page/2/index.html","dd6bf43ae1eb510cb6b803961a32c450"],["/archives/page/3/index.html","8bc7c93238ae455ddfe786f4366de4e5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","68f16d9588723af3569f3e2cbe637a11"],["/categories/C语言/index.html","5ec8d3e00f3e02aab44be59220ceb6f9"],["/categories/C语言/数据结构/index.html","4c436d191cec5d1aae4e35ea537cc251"],["/categories/Hexo/index.html","d5c43fc4abd2f7fcc2eccd189e719844"],["/categories/Mac/Qt/index.html","5573d3ee7b216f49dd4259eca19d4855"],["/categories/Mac/Sql-Server/index.html","4299ee040fc023cca7138207272fd0a5"],["/categories/Mac/index.html","b8952f96325d361434a33e8684ae112c"],["/categories/index.html","47dc61727a2b582d2754deea247a1851"],["/categories/数据结构/C/Java/Python/index.html","01a73851df845dc29bb7fdbf787d60a1"],["/categories/数据结构/C/Java/Python/排序/index.html","c391b25b2293343c27b1f7902121b6cb"],["/categories/数据结构/C/Java/index.html","c4ca1a4b18f22f2848c62a164822b765"],["/categories/数据结构/C/index.html","54ff4f11a18a365783626e7f356bcfb4"],["/categories/数据结构/C/page/2/index.html","99629579e8c5dc60e06ca1767c2f0838"],["/categories/数据结构/C/双向循环链表/index.html","4a9af5722b6562b3d0779de66f8511a7"],["/categories/数据结构/C/双向链表/index.html","b21b1f7ed16d3453d12e2f556055b4c7"],["/categories/数据结构/C/顺序存储结构/index.html","53373f062694b75892106aceb00651f5"],["/categories/数据结构/index.html","64f14c3912c307fa276a002755f72c35"],["/categories/数据结构/page/2/index.html","c12926238945ae3bc61156935e8772d9"],["/categories/玩转Mac/index.html","6995abd86ad076d708a136400c75ee1c"],["/categories/链式栈/index.html","394e4cfca21e6daf3126f34220d927d8"],["/categories/链式栈/数据结构/index.html","8b230b14d0217cda1f10e5dd0a5ae92a"],["/categories/顺序栈/index.html","66102a4e0fc58fd79f72990597764e07"],["/categories/顺序栈/数据结构/index.html","0031234e79e8064058044796f958a8ba"],["/categories/顺序队列/index.html","83a7e5a9dc4b063eebeccc6e90559c07"],["/categories/顺序队列/数据结构/index.html","f3bea4e86fb024531c830ddeb28739cb"],["/css/main.css","2186f172d391abfe500c56762f7ee1cb"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a467dcc2741103176deb51a88d155866"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","6c8c55eef373cb6c1bdff1848728091b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a6b7932d4cbefa02f7eb163263c964d0"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2fa6305528fc0295a82d742744b81d6b"],["/js/src/algolia-search.js","96909e38fdcc7892bc1f5197c37fef44"],["/js/src/bootstrap.js","5701d8eec07296830ea11e6badb5cd8e"],["/js/src/bubble.js","956e89723e9f4d02956074a4928df5d0"],["/js/src/clipboard-use.js","6928033d3809807d2f74314c08a3c03a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","180edf4799e6daedb8099d1b443b84c8"],["/js/src/exturl.js","36001f47712244b8bc663c713ec969e2"],["/js/src/hook-duoshuo.js","f00951319999b0ed91524df8880dc48a"],["/js/src/js.cookie.js","b8c2c434cb2f61e903fd4be6bde18439"],["/js/src/linkcard.js","6f67ff4f6e8f113d659587df405cc886"],["/js/src/motion.js","066252f1de3723da557445cfdb4120d8"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","e9cbeb2e08814826fbd196572f6d4003"],["/js/src/schemes/pisces.js","3297be8bb7b981d3ba44b8c1d6961503"],["/js/src/scroll-cookie.js","2f03f336d062248082daae9b9499d988"],["/js/src/scrollspy.js","e7173b527ffc228f239170f26b69b2b8"],["/js/src/utils.js","5e67f57bbe8784900ab2c187fdeb1570"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","a20eecb56265250f516ebf89a2e5c865"],["/lib/Han/dist/han.js","fa35ed867b6188d6572d5d2e45300e44"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","51553481bb9c692e21ef12eede9c4c90"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3415b3c623576fd74438f0f6afed82d6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9be7b837ddd751a3f94590cb83534d14"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8f0a4f7173c78870699d828777565be7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","02ea86d1624fcbd5018a01466659e615"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8c2de81fa7025a0d4f02898fb934ff58"],["/lib/fancybox/source/jquery.fancybox.css","64b8bb5f8f9e5b20b1cb8fcbb4162060"],["/lib/fancybox/source/jquery.fancybox.js","bfd3f0253ea9b70179d5811cc802c7c6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","4d3c7d023677533a1ca6e0efe34ff8d8"],["/lib/fastclick/lib/fastclick.js","2acd27a71d000a665aeae002d33e1b1d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","932b1eb65b3706447141eeb6261ce618"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4c91d1b23e54923b089fc7d947435770"],["/lib/jquery_lazyload/README.html","24a12521499a61bacfc99e09404f342a"],["/lib/jquery_lazyload/jquery.lazyload.js","76b017c6a44899c1e4d2f37ae11391bf"],["/lib/jquery_lazyload/jquery.scrollstop.js","ef9de07b8b8cb8ac57d8654cb15cdcb4"],["/lib/needsharebutton/font-embedded.css","2d17395aa8050e1b3126587aaf4c94a7"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f8a3c6d1265e3ca7d21df226c8e79118"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","01e4bd978c668d742f4aeb028cd4c0b4"],["/lib/velocity/velocity.js","933f00fa8ede9cf45621eafdbf5954d1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4cbc201d98703499ef2c62e2ae9efdd1"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","48cf803a0a36e2d0a503d7f85986af01"],["/links/index.html","e748b8f5aa024e5db3589108a985d460"],["/live2d-widget/README.html","0d3ff3f3073edd5818bffb736a592879"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","55fd5c045e30ac19ab8ce4b8b0b863f5"],["/live2d-widget/demo/demo1.html","65ff5524d65a77a6b3b97628d2d0edc3"],["/live2d-widget/demo/demo2.html","47aba73a4ba6392b8c45399f1524a778"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","51602278bad1512ff551525b47946c00"],["/movies/index.html","4df297b958c1007f5c6417fa59f1afc0"],["/music/index.html","0f922d0df64f1e982831911d7e98c7d3"],["/page/2/index.html","a10b814274c7160a21b56958dfce6b60"],["/page/3/index.html","ec9054df159d8d3b76f665bcd882e096"],["/page/4/index.html","d3951d274cc70d226148c57144711108"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","072df26f465234a03fdd3d0e7f618b26"],["/posts/15468.html","7a72d0c1c2fe7ec83cb481c34350e036"],["/posts/16107.html","218b478bf4e2314a02ff94c7822dcc8d"],["/posts/201e1121.html","f858ffd0ab6d677c6e4bdd3f5684a8f2"],["/posts/20352.html","4e7eb3d0445923cbeb7a97fdb4e943ab"],["/posts/21238.html","bb5a9251ac3f54fd52d56a5eecf76146"],["/posts/22281.html","e6095d84d60f2a5d1c8b4f8bf1727fa8"],["/posts/278598dc.html","3bbd57781b6bc1b4b6ad8529a10b3210"],["/posts/2d063bc3.html","a3ff7f785f91efd1fd017d6e9ceb41d9"],["/posts/30c404a6.html","46c42445717f35b968ab366c748d8ff2"],["/posts/51203.html","953317a6f55f63da8b96ed57d873df57"],["/posts/538e5180.html","7a210b165d63218245203f9d33154b1a"],["/posts/5394fce7.html","515de87929e3191ca47e76ed8de80001"],["/posts/59037.html","571d2c7e3c858684c02b70be433c9b08"],["/posts/60816b5a.html","5a0797651e99e998624bcce9a4618937"],["/posts/6163d4b5.html","4ec91b3b17ff149b0610007af4d2ea58"],["/posts/69978469.html","704fd549f08131afa80d2a9326bd96bf"],["/posts/6a752619.html","563015420b90d7c714875fb3cb8d3a5a"],["/posts/7fcb11a7.html","4562482a84875190106d4440311d61f2"],["/posts/8cc73e65.html","b1c3c28f4292a45a314b002f2c0f1d81"],["/posts/9b621d6f.html","b1634fa5ab1d1e79a1be7c915f4eae3c"],["/posts/a530f7f0.html","9a13f805c691850edebba6bc537bdf21"],["/posts/beb5106a.html","01307e7e8c9fa4b154174a80bbfe97cf"],["/posts/dd845106.html","c6d41e977bd3ad02138c7e9b39e9073c"],["/posts/e35620b3.html","ca50420ff4a56bf0d1381c6a6dcc4194"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","86f24008d2c2d2871b7edb9b50129799"],["/tags/C-语言/index.html","19d7e3d45ea7f33d86cb4786585bd1af"],["/tags/C/index.html","60e88280387655d298e6719997564308"],["/tags/C/page/2/index.html","0e97e0d2310c18bff7e842bb7ee17a62"],["/tags/C语言/index.html","1132d7d064137a53c0466560dd1fe517"],["/tags/Hexo/index.html","c548b011abcb95095853ee141a1ab539"],["/tags/Java/index.html","2d0b1e26b9110e07029d64bf259ef0cd"],["/tags/Mac/index.html","aac3f98f0171adbdd96db6d4e84880ed"],["/tags/Parallels-Desktop/index.html","4547a132dee58e6e68940f06775f213d"],["/tags/Python/index.html","fc6e2ddc3528509cf698baf6d602135f"],["/tags/Qt/index.html","3df6f89c7f8f11f6aee05d980ab0a635"],["/tags/Sql-Server/index.html","2df43a3232d7c251bfc7f6512be14c99"],["/tags/abbrlink/index.html","e5dc06d78725159566632b360000eae7"],["/tags/index.html","f95cbd3390ca31ee71370675eb5d989b"],["/tags/冒泡排序/index.html","eccf6065582e220502b2454e42beffdf"],["/tags/双向循环链表/index.html","de22b032ff01318bbfb0661a83058da0"],["/tags/双向链表/index.html","3de77ede42b467550718769607483727"],["/tags/希尔排序/index.html","2222f058c60ec12502c03417370684c0"],["/tags/插入排序/index.html","135d83d73ef57c1212cd0cde0fd00e32"],["/tags/数据结构/index.html","53c763fd5aac118f6161f13eddd64e4d"],["/tags/数据结构/page/2/index.html","b3134ee6889cb5e86a647ab754c47b07"],["/tags/杨辉三角/index.html","f87a01cad14c3f0f472f6518f1ee844b"],["/tags/栈/index.html","e910e5feaf083617e1d42c3b46a9d2dd"],["/tags/类模板/index.html","dffcc22664b3eb2167578bfc11a7eba5"],["/tags/线性表/index.html","5a9b5ce3e7e3de1e51483fd52798e459"],["/tags/选择排序/index.html","4523d216ed519bb67a187d17e7f2af4c"],["/tags/链式栈/index.html","cb398005884ed9e287633c97f01139db"],["/tags/链式队列/index.html","0badbfc1a43b78688e9654397ae2147b"],["/tags/队列/index.html","afb4a68884292a89dd0778771bb3723a"],["/tags/顺序存储结构/index.html","862fd1eeca04eea96685f5fadd87f9d4"],["/top/index.html","b88ddd6f68589dd64e965a0a17bb10c8"]];
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
