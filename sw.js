/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","ee47b31a16c756da94de1a8524e02ace"],["/archives/2019/10/index.html","a7b3c2b64f47e2eaf03c4cf0917f6286"],["/archives/2019/11/index.html","08951744223639f21bfbca7ecc607f2f"],["/archives/2019/12/index.html","5d1c798cf43d280af4aba1d5a1c7b516"],["/archives/2019/index.html","6ad9f330979161d46475e5812b530ea2"],["/archives/2020/01/index.html","dc38ab70c6b3417d23e9b0c5e588f14b"],["/archives/2020/02/index.html","75e7e1ec25e215bcebd03cd726930b06"],["/archives/2020/03/index.html","8c74a97e72a93964423d4535c4b5bbaa"],["/archives/2020/index.html","66d7f022e64cd586930a8819c4e5e778"],["/archives/2020/page/2/index.html","8f159022493ea987b792b4709590c2c4"],["/archives/index.html","cc54cf971ba6427bff1b0c1634d2b439"],["/archives/page/2/index.html","43dc94dbae93af4cbe69232e506f58e7"],["/archives/page/3/index.html","33c9d8fd7411c7141951aa7d1ba6e63f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0b7d4dc986794d32c7034e5176b05dea"],["/categories/C语言/index.html","b24c3a96876387c1a33e00f397ae68e1"],["/categories/C语言/数据结构/index.html","db4f4f11feaa22b27ffffec72b0474c6"],["/categories/Hexo/index.html","a6e03ee25d59c606bab4840d9b112405"],["/categories/Mac/Qt/index.html","3b5c22985759d1d91ab1e43dfdf587ae"],["/categories/Mac/Sql-Server/index.html","3af1527a60fe50903b90c3309569710b"],["/categories/Mac/index.html","a69ccffe77eed8c5676df9088dfe8121"],["/categories/index.html","e907b892c4525fd28a5cdffd0842a842"],["/categories/数据结构/C/Java/Python/index.html","0606e72ecec563f2f43e64b62e0f851f"],["/categories/数据结构/C/Java/Python/排序/index.html","99ad68ace814360adadf89c334ea9650"],["/categories/数据结构/C/Java/index.html","79dff30d4efea725d43f04cd614fa117"],["/categories/数据结构/C/index.html","ad66ff5fc50ac4f556a3ea8899356e80"],["/categories/数据结构/C/page/2/index.html","ed91091ff6f6cff96ff1fceb8ea2ef71"],["/categories/数据结构/C/双向循环链表/index.html","163438653ab5b860eddf6509731c17cd"],["/categories/数据结构/C/双向链表/index.html","e7a4e568c4988bcb3dc28594dc32212e"],["/categories/数据结构/C/顺序存储结构/index.html","2de9ce00214de7fdff4ecc475d35c3c9"],["/categories/数据结构/index.html","e1adfaae20b41df608a38fbed114ae58"],["/categories/数据结构/page/2/index.html","1b2fd7661df199beaae4ab680af04a1d"],["/categories/玩转Mac/index.html","c1fd1e4002824780aaef2a65dd033737"],["/categories/链式栈/index.html","afe09aa5c0f28b135415834ba6514962"],["/categories/链式栈/数据结构/index.html","081f068b53c75d8883fad0de0f244e60"],["/categories/顺序栈/index.html","20e9be4b5fd4baa97792ce65d954d830"],["/categories/顺序栈/数据结构/index.html","e5c572ecca1f48deb5dea8d23b722105"],["/categories/顺序队列/index.html","575a35d70664a72341a24af273c89061"],["/categories/顺序队列/数据结构/index.html","519384d9a14dc0f32894f57b56119ace"],["/css/main.css","a97af54108d94086bba1ced6e46a5f74"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","fdec8f2ce29a81ff08a94260a5e8870b"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","905cdf28243e20fc8096cb82a01aa597"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","38df9cc48b9666695ade0b8318d2fde4"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f652b7f9ab9ab9f175d41979389b0393"],["/js/src/algolia-search.js","a0c8ef94f3cb50c7bb6df4949dd89fe3"],["/js/src/bootstrap.js","04910d680785cc38b45cd4de961e9177"],["/js/src/bubble.js","38b331ecd6156b4a9365d1675d29f054"],["/js/src/clipboard-use.js","660eee31c5642a6cc877333acc7c3001"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7169c0119c5523be3d35307590696d9e"],["/js/src/exturl.js","799da9dfe38a8d82af242faf7f80586b"],["/js/src/hook-duoshuo.js","0c2165dd0fd0b061a6867700ec271262"],["/js/src/js.cookie.js","4a117b3185aa6598d9cd9f6671fb520d"],["/js/src/linkcard.js","a1904a4cc9d1c53abf945b5a5faf0858"],["/js/src/motion.js","10f1f11b00dd1aefd073c3a2d2f89d40"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","5182dadd7e6190267779f2368962e1c2"],["/js/src/schemes/pisces.js","c7c48d0eb814974aa9cb4d5e0fe08f90"],["/js/src/scroll-cookie.js","e0f59b9900b8e7e24d3d559835ede80b"],["/js/src/scrollspy.js","45f369bb91cf8a544178b85e42bca55e"],["/js/src/utils.js","bd21196e69b75051779c2a0c5323a5fb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","645e93482f0e82590d6f7a33e9578ab6"],["/lib/Han/dist/han.js","027d2bfb42c18793972bec3a240e5bd9"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","480ba4d7cc9994fedec85c377f266474"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8bd0958692269892b38a8adfdc9271b5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","67b8c5deecb4fdd20f9f2c48bdfdb96e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","bca5e593bcdad6e3095c149f85e43570"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","179ab3014e7fb092c3333cb38a7a3340"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","93646bfd9ee48bcd1b781eea15796cc4"],["/lib/fancybox/source/jquery.fancybox.css","82d633dd841c0e6941efceefc9f17e52"],["/lib/fancybox/source/jquery.fancybox.js","09b2d671df17c31a86bb58e055571f44"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","588733a01a42949971e0b36ed6fa5df5"],["/lib/fastclick/lib/fastclick.js","b53053ea194540adf42cdc17939d639b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","70b6b0cc022c039e3bd827304cf9fc2d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7b2ec7444a9949b0f473b73a16480adb"],["/lib/jquery_lazyload/README.html","9581c06cac4faf466e8d076639ed7519"],["/lib/jquery_lazyload/jquery.lazyload.js","f89a46497bd3a3d75856a566fdeb98f0"],["/lib/jquery_lazyload/jquery.scrollstop.js","27b9adf080da17e784c4d52a47e99b56"],["/lib/needsharebutton/font-embedded.css","f5ec94a6bf1aa80e54fae28f9d8556fc"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","abc3a415dcec682615210693037eb924"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","503d39563ce3331f5ea24ea9b3b0d601"],["/lib/velocity/velocity.js","8a7581acc490e1a6fbf0b0f389d26cde"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ddccd1cee97011b2c3998a5f4b77cf6f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5ad9b3ff3c44921802260bc2ded0c7b5"],["/links/index.html","df6b8b7a638e7cc12d0d4698e2a05241"],["/live2d-widget/README.html","7b13b0437a78fc93960dae9701ad84b7"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","2567d4c490edf0563f09b94e4fc91f60"],["/live2d-widget/demo/demo1.html","2971cc65a08f45bb28cd2d0f5bb4bb99"],["/live2d-widget/demo/demo2.html","79da7d4db13682f006be903568b34f1d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7372d0fb4ae6a78bbcbbb46eb85f758b"],["/movies/index.html","11ec793b221046414d6b40a2d06674f4"],["/music/index.html","8e8b03338575b5796a38cd0679a9c2a5"],["/page/2/index.html","972fa7598986c9e24b2ee7c212f95e80"],["/page/3/index.html","4c853cbc2ff44c1879fec74d6661dda3"],["/page/4/index.html","7ed5fc56deffd3a0aaadbaa020e24af2"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","a27070bf92cd8f69478a50850fcf87ae"],["/posts/15468.html","6815dbda00b63d0b7a92475ce2e2023e"],["/posts/16107.html","dff558dc5d77a9e22fbe5d21354e2f70"],["/posts/201e1121.html","06cf3b78308a0e20eaa62bef37cc0986"],["/posts/20352.html","418869e1de5aea4c3d57e0f66da6a343"],["/posts/21238.html","a278d0f517f8d9e01af31c1ea05a6cc5"],["/posts/22281.html","879594c573e2766ade403a32e69a4474"],["/posts/278598dc.html","2bd8b92a51acd952e495bd891962d4b2"],["/posts/2d063bc3.html","2cbd3dea26f57d6eea3e44955186ccc6"],["/posts/30c404a6.html","6cc23aadca35292fc602be6d6707e777"],["/posts/51203.html","fc2eb8fa8626c9cf0d5022263e1fc47a"],["/posts/538e5180.html","23e8c56e96621d35cdf72b6ad2cec0a6"],["/posts/5394fce7.html","19d6d696ca85f11703bf0b9e240a19ea"],["/posts/59037.html","80ab7ef3bf403b1e960685a96755a2af"],["/posts/60816b5a.html","02415bf6b1196794acb4ee50e5f86597"],["/posts/6163d4b5.html","27c48b0c75cc614f87df5af168999f81"],["/posts/69978469.html","fecc65a07aa8631ff68ea2a73f22820f"],["/posts/6a752619.html","375f614d47509f5975116bcee66380dc"],["/posts/7fcb11a7.html","1c4ff75b1225d75b12111dbbaa9a00ea"],["/posts/8cc73e65.html","9fb1a6b9870db37383b95ccc1c831e5b"],["/posts/9b621d6f.html","8812bbdf5876b11d4ec8b1aab9123f89"],["/posts/a530f7f0.html","ab3dbb5da6d4dcbc5c19b9f2a66d7836"],["/posts/beb5106a.html","4de97fe5ef740afa670be5353c3ca5f2"],["/posts/dd845106.html","84c7fdc1f75aed26b3c92826894ee6f3"],["/posts/e35620b3.html","6e977054e9122023e8710eed5e612446"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","563dbfb87c35cd03521e582c38ee93b3"],["/tags/C-语言/index.html","da8a72b3329bf49caac49bed1e48389a"],["/tags/C/index.html","3f4b816ce2f5ef3c04f0d7f10ee30569"],["/tags/C/page/2/index.html","22bf5facb8804938fd7b13665b8138ef"],["/tags/C语言/index.html","7a693ac1a5db17359e07713a8be019d9"],["/tags/Hexo/index.html","6fa1d465b6072f27952387c59cf1c7bb"],["/tags/Java/index.html","0b2a0dc33f3c00cc4ce089128b40f032"],["/tags/Mac/index.html","a6c0a7f8de3a52d38eb02504575356cb"],["/tags/Parallels-Desktop/index.html","b51e17740adf3e4d2112798e67151bd5"],["/tags/Python/index.html","c3273330afa448fe4fe0f5777033363a"],["/tags/Qt/index.html","394230cb0e2dc90d29840ad6145cd531"],["/tags/Sql-Server/index.html","e200ab197f27f37ee49932c48507ec8b"],["/tags/abbrlink/index.html","8ebb23e2b9ab7e41a3a2123749561bc4"],["/tags/index.html","6a5e0f83b3c7810a8fc7a199a8d4011f"],["/tags/冒泡排序/index.html","a89cec3b1eacc9e7406eb177bcf0e1c1"],["/tags/双向循环链表/index.html","55f51178c1163503973d082ae8a16951"],["/tags/双向链表/index.html","7048f458cf37380045eb151bec4c03ca"],["/tags/希尔排序/index.html","3b44fdbb7e5cf2833d21ea9d8ddfb597"],["/tags/插入排序/index.html","ec3f23cba781d0943cdfcf8a3892e9b4"],["/tags/数据结构/index.html","ec9ffb905a351aba8f23248768da3a61"],["/tags/数据结构/page/2/index.html","28829ed5fd549194254cb4a448ffe0c9"],["/tags/杨辉三角/index.html","3942bde4cae9f160ec5bb7c4a8295f76"],["/tags/栈/index.html","d606cf2595ea9a26a17ecdb1dc4354ad"],["/tags/类模板/index.html","ad5c91ca357f159c4506a82af9d7632f"],["/tags/线性表/index.html","40818fca74a2869c40bf774f24da39ab"],["/tags/选择排序/index.html","e405edcf24af38de3043f1f8f0f6d6fc"],["/tags/链式栈/index.html","47fd6b5ee12b4f21b3fe1a248a1bcc7b"],["/tags/链式队列/index.html","df70463e37be7ed211935d235295309b"],["/tags/队列/index.html","0dea8b97d599bc8995026466d0bbf1ff"],["/tags/顺序存储结构/index.html","dd489fc115c7c72d8b3bc42d64ac943e"],["/top/index.html","30aa9c26d5e0654a503da4b6745d2e85"]];
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
