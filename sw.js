/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","83917eacf5be443b72f70c639aefc1cd"],["/about/all.css","3f8280387b8b868b232b5387ec32d127"],["/about/index.html","99d85ca09a2ef5b8de05a1cf2a37dfc0"],["/about/sakura.js","bf17542634781a2274b7a6fb6687279d"],["/archives/2019/10/index.html","395555bea0d2d7aefe0d7514dafb6d85"],["/archives/2019/11/index.html","871346f728eadb10f608555c813f6df8"],["/archives/2019/12/index.html","d161cfb9a5e6aa269bea136589a62ce4"],["/archives/2019/index.html","b7de18816b7784a4d2a93bdbcbfca194"],["/archives/2020/01/index.html","7a303f331bcf6d06f6ba3d43c25f3ca1"],["/archives/2020/02/index.html","32c455da06e324c92d389d34da83f080"],["/archives/2020/03/index.html","b65758ad2faf28e96fa60c7c558b074b"],["/archives/2020/index.html","6e06fbdfebd6be72973e8464c402d770"],["/archives/2020/page/2/index.html","477cb324a6f9043f1951d097a7d61b87"],["/archives/index.html","bafd4df42eb4dbfb5463dbe80cc6e8e7"],["/archives/page/2/index.html","e45faa797da8057107b8882cca310cee"],["/archives/page/3/index.html","0d8ef251434fb1a428add698626aa41f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","930878e6d47fd88c08fbeac849ec80c9"],["/categories/C语言/index.html","82d4bda92b2413c44f81a7c5d67a9b5f"],["/categories/C语言/数据结构/index.html","4008cb3f99fa872520a04268d5e8c195"],["/categories/Hexo/index.html","7a5d6811190977e350b56f6f7db281e4"],["/categories/Mac/Qt/index.html","eb3845146b37bce7eed998d59bb92a3f"],["/categories/Mac/Sql-Server/index.html","072023e9dc04b56753faf3b0406afb2d"],["/categories/Mac/index.html","c78bb746ca066c62c6629ca16b77345c"],["/categories/index.html","273afe0c076a15a2d8dcd9c610440b1a"],["/categories/数据结构/C/Java/Python/index.html","5bf6bca8b8f6bbbb76d824e426757394"],["/categories/数据结构/C/Java/Python/排序/index.html","0beadb85e5a2580382a5be5d444186a2"],["/categories/数据结构/C/Java/index.html","7463a6464f9170f9d1d5b1d9f842288b"],["/categories/数据结构/C/index.html","2f72197b3a32083be22ef11b12f1354a"],["/categories/数据结构/C/page/2/index.html","f880394438751fc3bd9c68e855fddc23"],["/categories/数据结构/C/双向循环链表/index.html","a1582a55cec57bb356211db84e4fa619"],["/categories/数据结构/C/双向链表/index.html","2073fa16ee7de8fd736d1403fcb9b774"],["/categories/数据结构/C/顺序存储结构/index.html","0c5a921c344eaf6c0f9cb8536721b1dd"],["/categories/数据结构/index.html","f6a6df09166d7e6131454d90e559c855"],["/categories/数据结构/page/2/index.html","9091748ca8f0e61658aebb2d765b391e"],["/categories/玩转Mac/index.html","1c519ceb53f62adc7f2ab849598ab836"],["/categories/链式栈/index.html","62a61deedf598ac7c14f98de229f8027"],["/categories/链式栈/数据结构/index.html","2b4a64cc03baaae2380a9b930662e9c9"],["/categories/顺序栈/index.html","0756d15a7924fa6c6966bc853ac3fadc"],["/categories/顺序栈/数据结构/index.html","bb81eb665f876065e83b6361f1ee52d6"],["/categories/顺序队列/index.html","e98266ca94dce22e77bcbeccb216afea"],["/categories/顺序队列/数据结构/index.html","9a379c79fba36b0d31fb024a7dbf2855"],["/css/main.css","c57a7426ff6ad987e6ac6f093c0b91b2"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a73dd2ea9e709826ed99c113b730ccaa"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","8d5723eecde21275d130265508e23de4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","dc0ef03141e77cfc6e45296aa4077a0a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8e123b1151d65ee8df0c6af5b5ddaa71"],["/js/src/algolia-search.js","913c71e59494477121d199700e6988da"],["/js/src/bootstrap.js","562a3809c60694615ea6fbdc5b10c12f"],["/js/src/bubble.js","1efc471e4a8268301d4fb5bc0e4e5d20"],["/js/src/clipboard-use.js","ee63c1dad9c5e7731d61709743e9e4b6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","26c1e3a0d7188581e38a66a66fe19c02"],["/js/src/exturl.js","ca2307873304e1ffcfe8c167c7b82cbc"],["/js/src/hook-duoshuo.js","46d8348c845fc65e8fe0dc66f931f7f3"],["/js/src/js.cookie.js","5305e4b7bde0cdaf99ea790772095bd1"],["/js/src/linkcard.js","4193236a7cb9c444977de784de4aa8c8"],["/js/src/motion.js","9ea5441c35248818d6eb239584aaf62b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","8cc3fbc3d9a6a7693ca96fd597ecf603"],["/js/src/schemes/pisces.js","8467d539603574cf358a230c949093ec"],["/js/src/scroll-cookie.js","c4577b0a617fe8def6ee04573670858b"],["/js/src/scrollspy.js","617b30322c32dd88d4a94fa6f288950f"],["/js/src/utils.js","f7be3f145c15e0073571d7b502d9154e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","a1c4b9cda6590ada72fe6c63beedc3e9"],["/lib/Han/dist/han.js","c2729bfe2b878c8a3382281bbb0b5cfe"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","42320361245698374d256c0d01b87573"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b29204476e0679cecce404a83c0f9c19"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c3ce978cf467b25c3ab2dcd2d3c2e008"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7f09ee266368f0b812f41dea55c8b71f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","30a776d0a2f21773ce5aed7f664c26dc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b7fc579c1ddd687fd74ec048bece69ce"],["/lib/fancybox/source/jquery.fancybox.css","13a4dbbd47683ab96f0f518ff2e35118"],["/lib/fancybox/source/jquery.fancybox.js","c6d41e08b230ec345cc289c7ba2c37c8"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","df60b572febe5c7e86b39cb95c41df2b"],["/lib/fastclick/lib/fastclick.js","f5808002fc5c4b9870cebc3752612e05"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","21b681ff430e8392edcf2627ac177705"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","52d9f82c0e850676d1be0bf1400315da"],["/lib/jquery_lazyload/README.html","0471f17d4e04e2902da7bf5f1910740a"],["/lib/jquery_lazyload/jquery.lazyload.js","0e07b9fd488abb3d9b64c97098c6159b"],["/lib/jquery_lazyload/jquery.scrollstop.js","98105bcd5dd48758b9c91e2f905c0741"],["/lib/needsharebutton/font-embedded.css","6139f7a3d19402b06804f06159639931"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f475634e9c0dd5e4997ca04344b891b7"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f116e68f7278608ece69c0cada56131a"],["/lib/velocity/velocity.js","46d444b5a452e11663947c68e2d8b960"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a89a5728373f162925cce7b1b3b199e5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","6f0987dac2337b20012df946bb9b02c7"],["/links/index.html","62dbc592dcf5065db337ff2e61e5dba6"],["/live2d-widget/README.html","75eb316bea4fa9e34438e3bff2c34479"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","3f86bfc8f62eeb126c8f8e18da5cb844"],["/live2d-widget/demo/demo1.html","ac8e94fee36ab5a3b390c4bc49ad7862"],["/live2d-widget/demo/demo2.html","e5e4af3768c3213c05f782800623a2eb"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","a29e757a403180f50c27cbc5792ea3b6"],["/movies/index.html","c321d8793c43f23c2711a2f1db64f33d"],["/music/index.html","665cbac16b04454bf521f31a55537113"],["/page/2/index.html","b3e70810cf0fb0216106d8c91a2d8f04"],["/page/3/index.html","42c8c3631f79cf5e84cab496550d714b"],["/page/4/index.html","e73721f76445c8e59d215963afc37de8"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","3f99c006da916b3513e5f5a1b90a8b3e"],["/posts/15468.html","69da4ee0867c7bb784c02c9b5ce5bae1"],["/posts/16107.html","665a259a0c900c990f07c015d5c1d570"],["/posts/201e1121.html","4355634b91b79acc00fc2e246f97a323"],["/posts/20352.html","12f86d85750620376641dc42f249c132"],["/posts/21238.html","57438435914cdac2a951a104e0bd11bf"],["/posts/22281.html","7114df2c78c2ccdafff680d7e586127a"],["/posts/278598dc.html","c373d1f1014ad01f03cc667a76491259"],["/posts/2d063bc3.html","1362fac935a4ebe14c71a02d9114a084"],["/posts/30c404a6.html","12d544237f7f1725c0309bafa5950f9e"],["/posts/51203.html","d211a46a473a0974c9e846c32d08a1c4"],["/posts/538e5180.html","c537b51e1a590c65cc668189d8827d73"],["/posts/5394fce7.html","a6ce97792910b4716935eefac6884c51"],["/posts/59037.html","aa5ac6ebad81d7581254e34de8d286b0"],["/posts/60816b5a.html","2bd4f1dac3a44a41f8c8ea73cc89af18"],["/posts/6163d4b5.html","a7b30bf1a15587bdcd16d76347053fc2"],["/posts/69978469.html","2ac335f006bc8405bd621d619a9295de"],["/posts/6a752619.html","94ac0cbf8b6847b267e41edb9cbd6f88"],["/posts/7fcb11a7.html","ab5f21a7c3dbda681abd9ffeae4c7d8d"],["/posts/8cc73e65.html","6dd3be56c13b66adb266cab7e0ee2463"],["/posts/9b621d6f.html","779c5a565cae3c4b6d7deeaefc6a329e"],["/posts/a530f7f0.html","50fd01429db9343353b9f5c60ee1b83b"],["/posts/beb5106a.html","e3d1ffacfb7579ac6d0c668ebd04a2ec"],["/posts/dd845106.html","a209f2fac7060203425a307d2350588e"],["/posts/e35620b3.html","55df849d3b6564c5a1014e974b2a6af3"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a8b4e1d4d871aea9275dd2a6b1b449f2"],["/tags/C-语言/index.html","85d5b95b719a8652856719bda387545f"],["/tags/C/index.html","7796d31158ae9f6e23787f41e253d2d1"],["/tags/C/page/2/index.html","e4fe4eda42f665ad2ade901b3887772f"],["/tags/C语言/index.html","4cb12c4a5d12ad79d78d8c91ce578ffd"],["/tags/Hexo/index.html","c2adf0a9e311ae16b0aee43f0f1dffe8"],["/tags/Java/index.html","e885f12ad478cf78774e430308dd92dc"],["/tags/Mac/index.html","d17465a94454faeb6012b56574ea1324"],["/tags/Parallels-Desktop/index.html","c8972979b19259a971f7ebe6dbab08ec"],["/tags/Python/index.html","07e8d46bcbf4af2d6c684d4429c1095e"],["/tags/Qt/index.html","664127e981068305df085630d755b5c3"],["/tags/Sql-Server/index.html","9f4d011c9f817b553b62e71acb25bc86"],["/tags/abbrlink/index.html","ebaec14c1d7210deac3b255f38285676"],["/tags/index.html","62e469ae0cced67710b23c3ce0f3bbf2"],["/tags/冒泡排序/index.html","741165ebd3417e5d787b374a5fa73f5d"],["/tags/双向循环链表/index.html","a37e2066903d99437d3792090b4ffae0"],["/tags/双向链表/index.html","0cc64d2178894db18bc03d612909b9de"],["/tags/希尔排序/index.html","fdb434f48ddffcf3d5f8fff960bdd002"],["/tags/插入排序/index.html","eba424887b8e44c2454beb33d1fde16e"],["/tags/数据结构/index.html","879211c9d60723c18fbea8c25e2b106b"],["/tags/数据结构/page/2/index.html","1b40ec0dbe4b2f270ca7929b9da233a0"],["/tags/杨辉三角/index.html","0d973840cf17df8ff4806c65692546e0"],["/tags/栈/index.html","253ce2fa22a34b2f26d5aaf5303f53cf"],["/tags/类模板/index.html","5529d509755b0759ad90038fbaf9991b"],["/tags/线性表/index.html","5ad26f3e989dbbc3b787cb4b40d25924"],["/tags/选择排序/index.html","947e14c12c1a0f1ba04c2268a704b376"],["/tags/链式栈/index.html","5ea890d36a656a2cd97a6ae3c602bc79"],["/tags/链式队列/index.html","bd108f07cea92e4b27bff74f88c4bc1a"],["/tags/队列/index.html","3c150a4fd361c1ce3d5518e842a63183"],["/tags/顺序存储结构/index.html","907f87f1f67b5067d2654e51c7eabff0"],["/top/index.html","b4bf6725de9aba939c6b7bb490a508a2"]];
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
