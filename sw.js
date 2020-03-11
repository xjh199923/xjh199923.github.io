/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","4b71e60f1595bbf4bde37117a1d6daef"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","4ba357a9ffb4a853d6560d10ac284967"],["/archives/2019/11/index.html","198f354429cd3e076b0fa6cea4fa1a56"],["/archives/2019/12/index.html","919095f670285173ec55c0289b590619"],["/archives/2019/index.html","afd6b258e90b5e0c6c50e4afd8860fed"],["/archives/2020/01/index.html","05b0fbf4793cf001835b74ea31d21cdc"],["/archives/2020/02/index.html","880120759c80c6141f9b265dbebd2d17"],["/archives/2020/03/index.html","673e6623eaf630c0c3690c142dbeb117"],["/archives/2020/index.html","a4f9297c8fe0c46505de8c399ad3f21b"],["/archives/2020/page/2/index.html","b692083e0d56984f452e835a8830d674"],["/archives/index.html","123c2cf54babd7d611e5c64a4a15e61c"],["/archives/page/2/index.html","4bcbf5a464792728addef6a03929ee70"],["/archives/page/3/index.html","f43f26afbece4ffa1da0d3220692d186"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","6d43c2fd222545aa4171b3583e088e8b"],["/categories/C语言/index.html","d3fcde955820a1a5d3f934cc0c56f1c0"],["/categories/C语言/数据结构/index.html","c0d856f8cc5e8bff0e23e6e62cb07599"],["/categories/Hexo/index.html","94e357b6fdd0ed6874fce413372ff8f3"],["/categories/Mac/Qt/index.html","7c0180d92cd9e72ebcd2270884f74a30"],["/categories/Mac/Sql-Server/index.html","e6f23511a61965a9c4f935651b02c396"],["/categories/Mac/index.html","c2fe2bad748afe421652d93cefdba724"],["/categories/Ubuntu/Hadoop/index.html","acfb2edaf3fd4bbe37f83a1d99c65a98"],["/categories/Ubuntu/index.html","afef33db385bd9a58fbd0978865de36b"],["/categories/index.html","7f1f9f8824d2d892dfef2249e8009715"],["/categories/数据结构/C/Java/Python/index.html","36baae63ee266aa544717b68fff51ea7"],["/categories/数据结构/C/Java/Python/排序/index.html","d0d7b0cd58a65fcb04abd5bbdaaad5c1"],["/categories/数据结构/C/Java/index.html","0620c4954073239800cfa397130245e8"],["/categories/数据结构/C/index.html","35486d8a908a18c3bb5319eb16b118ce"],["/categories/数据结构/C/page/2/index.html","a755562450fa1cf519c90d3b53f1b3e3"],["/categories/数据结构/C/双向循环链表/index.html","6e3e595c21a9d8b44b9a06a0f33822eb"],["/categories/数据结构/C/双向链表/index.html","5b7b303074d62f4e064573c325bb48e0"],["/categories/数据结构/C/顺序存储结构/index.html","ad32d9df1c182e808d3a6d76da4fdadc"],["/categories/数据结构/index.html","e4336957323049e7d57072421c838f61"],["/categories/数据结构/page/2/index.html","1167b3485c8ed026fa273fa3193b34b5"],["/categories/玩转Mac/index.html","31f1181dce5d976c3dde19b103fae4e3"],["/categories/链式栈/index.html","8900cfdd1b25790bf62bfd333e0b77e8"],["/categories/链式栈/数据结构/index.html","edeca3b8b52e658a92edec1cc20614fe"],["/categories/顺序栈/index.html","8686813762beb27dfebf2aa318096744"],["/categories/顺序栈/数据结构/index.html","536a81168b89151a7b560d17b45107df"],["/categories/顺序队列/index.html","8b975ada169724da832f6eca310773a3"],["/categories/顺序队列/数据结构/index.html","41b2af39b92c3d1814d7dc28b1ac5a39"],["/css/main.css","8cc72f3e36c5b85f149c33cc73f207f8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e894414d89fffdcec7a9a55e9db8ef26"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","c6bd741eaaca3def2e91346968b16bd7"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3ace31c881194fff952b2718c818439a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3e861c46d6002be21e5715792d473356"],["/js/src/algolia-search.js","e4c2d2cf982470eaf04a042d2f9fe2ba"],["/js/src/bootstrap.js","c382d6ea4762ac0c461ed8f1007c5fcc"],["/js/src/bubble.js","43eec6c788519f719d3e136bd4555070"],["/js/src/clipboard-use.js","4f5fb69bc6fb96128c1218026f233f85"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","9fb67d8f7d3cdfbb469bc4e5341cad43"],["/js/src/exturl.js","afcea6f0dd47107a1e2989c2a5951e46"],["/js/src/hook-duoshuo.js","edef1699294ff7ed837093078986d565"],["/js/src/js.cookie.js","c9343c4636e75b3b6ee70298db43120c"],["/js/src/linkcard.js","f236a08cc41452778d8440b75c0811e5"],["/js/src/motion.js","a752a63c24c4e8aad3e07fa9b0dd9377"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","181b43fb2c0fc36d9514caa45f5f89a1"],["/js/src/schemes/pisces.js","313a3626667700c72b661953ba251e6e"],["/js/src/scroll-cookie.js","79a42ce31fcc9bb3ffc1b8a46ea84765"],["/js/src/scrollspy.js","d50fbf201e393651a86540940ae63413"],["/js/src/utils.js","9e48b7cd008ff2336aff18d075b20dde"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","2974d59e558c81a785e836cab6d9d562"],["/lib/Han/dist/han.js","a0c3a6897e0a7ede21f55df2ceadad15"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ed28fabc092a02626956984e8ccbb054"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","56849a271552320bd30bf0429c22f800"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e253199a30371916a07ececc3eacd892"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d6d43caa9396b6ca21b6f5a93c71b703"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","12c74e3fb79a1cda859c2c2db479d1e1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8fb693695371cd578a8f3dd11bc10401"],["/lib/fancybox/source/jquery.fancybox.css","6c750b95ad571a1e172aab367a405549"],["/lib/fancybox/source/jquery.fancybox.js","f648095aae3e095011c41d9165e777e3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9fb593ca3b5fb467a595ea2dbacc839e"],["/lib/fastclick/lib/fastclick.js","5cd64e05fad7491e3e2ff75cb8dc479b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","1eb7f96536ddb005e1e1bcc115fa5454"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7a92f958a1433453bb3459bfe813d3c0"],["/lib/jquery_lazyload/README.html","851f95bc1592dbfc38072a3eb4602734"],["/lib/jquery_lazyload/jquery.lazyload.js","669cfec63454bc8a1c58414825a0c9af"],["/lib/jquery_lazyload/jquery.scrollstop.js","38453bcf5f932d4127325d0355eb858e"],["/lib/needsharebutton/font-embedded.css","8baf9abfaaedeaed10be92fcbae33850"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","0015b408816b25854aee0af337efd31d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a951a42251f4b2994aef01584970335a"],["/lib/velocity/velocity.js","bcf8e2df515fd253f3cf20a3de43d275"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f3c6d837785ff18522e77352b8640699"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","8dea93942446255e998ee0ac8b483cc5"],["/links/index.html","763913e0fe5e57249dbff534cce71238"],["/live2d-widget/README.html","29e8e4616e6d75e34dcb4b7f8f615093"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5af82529448114d74d3ab0b8f59f782e"],["/live2d-widget/demo/demo1.html","e17cabf23689fdeebd5001bfc5faf79f"],["/live2d-widget/demo/demo2.html","ae71c192d857511127f9cf1bc43639f0"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","88a1463186ed8caddfe496e3c565d72c"],["/movies/index.html","fb1b25a802f3c0cb9f3f43712240f728"],["/music/index.html","01bf87c201fcdcdb9267c96212bbcd05"],["/page/2/index.html","16a17140dce9b245bcd2df8d3e695341"],["/page/3/index.html","57e2cabb90a21727f039bddb65621436"],["/page/4/index.html","a3604bf39248bbf0e43ecccbae20b341"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","40e0adf03b630cf3be400989d6a077fb"],["/posts/15468.html","6c116e9ee8dff57e81ddb94110b89ace"],["/posts/16107.html","a5f9352184b575afc8dc3f42fe0bf752"],["/posts/201e1121.html","3999ead529dd00d83c475d11536ad4c9"],["/posts/20352.html","e5a613ff5091795226b6f857626a7629"],["/posts/21238.html","e7a22053a9156bd129f986a8d0ce19fa"],["/posts/22281.html","c6d69316adf413e9a66e64d3a451f83f"],["/posts/278598dc.html","00ed1a63bbec4d1d9244f23eb33f9d1e"],["/posts/2d063bc3.html","4febc1c0baab5432ec6544d9182eb41a"],["/posts/30c404a6.html","fcb1e51cbf4ceb3b3e579527f5de518f"],["/posts/51203.html","2be007841ad5c379f4f183d6fba986b4"],["/posts/538e5180.html","e4fff648df92c84b1efaaa83598792bf"],["/posts/5394fce7.html","fadc75be6e6c9f54e9c9f167322169cc"],["/posts/59037.html","69f405a351aa48c2e21ce386af6a5ace"],["/posts/60816b5a.html","2105dc1b2f9997d9d2e427097a975b2a"],["/posts/6163d4b5.html","3c9d54c13d4f44087fd38554af33e7f1"],["/posts/69978469.html","d48812130117072aa7d4003f1b06db56"],["/posts/6a752619.html","7166d8a4e4698517fa72aa3e536b50f8"],["/posts/7fcb11a7.html","6d9f6588c4325a87b6eb1622e7740682"],["/posts/8cc73e65.html","e8a433c676363b276d0c05e96dca727f"],["/posts/9b621d6f.html","50b65bfd3130a9d0c0ebac866163dd4c"],["/posts/a530f7f0.html","ad09ef2053555cc4e0b15dc207ee69bb"],["/posts/ae1da46b.html","708df71dec86fbccd3ee3374631642ad"],["/posts/beb5106a.html","76072a9f39f351d815dc996c2b0f8b33"],["/posts/dd845106.html","48804013f7715b444c95880e7c0979fe"],["/posts/e35620b3.html","07555381e7d846242547f809eb098bc3"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","be64b1dd3a98db43687e142705be2b73"],["/tags/C-语言/index.html","3c7615e750f4ceb1d72338534f8e3aec"],["/tags/C/index.html","61c9e39dbe9fa3ef16888a319262d71b"],["/tags/C/page/2/index.html","666212ac25f0f42a7ec3f71e29b06f68"],["/tags/C语言/index.html","f99ca5b24df7135ad653bcbd3645320f"],["/tags/Hadoop/index.html","a19c02146dffbf790595db03a6215054"],["/tags/Hexo/index.html","293f0ae95e9a59499022eaed904bff7c"],["/tags/Java/index.html","8ebe3b7dfe1c3fdeffe91f9fac67a749"],["/tags/Mac/index.html","ddf29739ef1c9b6e7a76c9e5c76a7596"],["/tags/Parallels-Desktop/index.html","5e154fa0553d8e45ac88b079996b26d4"],["/tags/Python/index.html","9b941ce7bec566039603fab1f20dda75"],["/tags/Qt/index.html","153423d71917af188e93e9244be17e14"],["/tags/Sql-Server/index.html","1128e8b87f1f02f9135402a8e19dff04"],["/tags/abbrlink/index.html","e492577cb888e68fec742e175ca9e62f"],["/tags/index.html","6d948bd1a15ee8c5f9f3f2c540095c78"],["/tags/冒泡排序/index.html","5dddb2cc87735a595ffff2d41f7f101d"],["/tags/双向循环链表/index.html","9d702ce64e8bd0a63c446972ae27f094"],["/tags/双向链表/index.html","52dbf1387f2148fd2898aa221a5ff9fa"],["/tags/希尔排序/index.html","d1af66b679094c402992bfee07259f7c"],["/tags/插入排序/index.html","053b56f64195e03e1c4c6f44e39bfb95"],["/tags/数据结构/index.html","a15520ec284ded7e6c755655258258d4"],["/tags/数据结构/page/2/index.html","ffef8fabf20b6ece2910fe69acad8fde"],["/tags/杨辉三角/index.html","0f9ecc9f9bcc3afa9b159a93c6e6e9c3"],["/tags/栈/index.html","27b134be21787bcd90c256e2c3043c22"],["/tags/类模板/index.html","32cdd6f6054e786bd8d59d635ca1937e"],["/tags/线性表/index.html","51127656e00a5ea9a9335715cf4a8fa6"],["/tags/选择排序/index.html","d6eccb9b1af82b73675e8e573d646c44"],["/tags/链式栈/index.html","f4c8d339dde35687d304b2a1a0dfb4f6"],["/tags/链式队列/index.html","883b5f6fa89b94c9f6a2dcd86054c87f"],["/tags/队列/index.html","82971931795b980f688cb3cc9b65822d"],["/tags/顺序存储结构/index.html","4cf9d3357db12220e5e77f08459b7bdb"],["/top/index.html","79fc51c953515fc8dbe13f05c9fe356b"]];
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
