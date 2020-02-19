/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6cd0e3366f1fddd602cb8a172216042e"],["/archives/2019/10/index.html","e5ae0a9676696226c17d5a04709ecd88"],["/archives/2019/11/index.html","e37b5c773911122b19a7cfbc1888f35d"],["/archives/2019/12/index.html","f4a89e6b4c8271c699de06d8804a3a45"],["/archives/2019/index.html","03fdc281e73d0d737648a3a2cb5e99ba"],["/archives/2020/01/index.html","9e757f24d559c2fa7264d20c9de96b33"],["/archives/2020/02/index.html","2de46facb7c11b2d19b6e8b6b7ec8a49"],["/archives/2020/index.html","eb217819181b9ab8ab72416c63ceac99"],["/archives/2020/page/2/index.html","ea94d044a09efa0f8448ec038e7de98f"],["/archives/index.html","a8ea79bf1874dc50d1ed9bc0df5d1d31"],["/archives/page/2/index.html","be3b32b58427f195bfdf657d4d257a77"],["/archives/page/3/index.html","645baf17c657239c3062eb0896134b38"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f7f4d70c75a506eedd7ef554a18eaa68"],["/categories/C语言/index.html","e85f1629a9b6b12879cf34f565d8e6e8"],["/categories/C语言/数据结构/index.html","f53f1a61e9b9de8726a57a0420ee206b"],["/categories/Hexo/index.html","15019b59c95cd39823169f61a089bcfb"],["/categories/Mac/Qt/index.html","d643f589f81c4f4a334da427d9443f21"],["/categories/Mac/index.html","44e3548ac126211fb672478c611363ab"],["/categories/index.html","e9412b14e3c561ef6c4e44b7d9acb4a4"],["/categories/数据结构/C/Java/Python/index.html","4f76ae07ca6a43616d18a445abad3de8"],["/categories/数据结构/C/Java/Python/排序/index.html","8b05df4d7c5b689fa8dec3905bd931e5"],["/categories/数据结构/C/Java/index.html","84e49ffee8ce12d11ec7e90d6561609a"],["/categories/数据结构/C/index.html","238fcc815a1de2842ed13b44bcb53636"],["/categories/数据结构/C/page/2/index.html","1c4eb9ffbfc2b6ae60e46606ff6cf52a"],["/categories/数据结构/C/双向循环链表/index.html","a00dae0dc6535a3c1d04b7015cf5d60d"],["/categories/数据结构/C/双向链表/index.html","ad888271f72421de427fe7e1130d6bdb"],["/categories/数据结构/C/顺序存储结构/index.html","69882123cd97bb7a2dc7c9ff108255f2"],["/categories/数据结构/index.html","678aa2815ea323fab602e06a2663840e"],["/categories/数据结构/page/2/index.html","756e7cc608dbe688a4c2806237853bcb"],["/categories/玩转Mac/index.html","dfda1fa5d65c68db4ba9d3719330d1d9"],["/categories/链式栈/index.html","5513f602025c8bdd008916f647c16a26"],["/categories/链式栈/数据结构/index.html","ab13ff3e4446c5608db0224ab8bcb71c"],["/categories/顺序栈/index.html","e2daea9af2d8fb06b2872abe637589a0"],["/categories/顺序栈/数据结构/index.html","470c05c3e5edd282057511448f10a351"],["/categories/顺序队列/index.html","3fc84d8303856dca3786ac2c4a96885a"],["/categories/顺序队列/数据结构/index.html","2a073911d7a3e04347ecde6acac76974"],["/css/main.css","40508f0a2a54e6a20fc65ca978979f47"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6949e16cec440bebd2020efe72f1a636"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","78d478c359e0d9f74121504b383f7d43"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a9b5cdf3231ab234dc7094ff16643054"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","6485d95e689c20ffc6009d6fd7401665"],["/js/src/algolia-search.js","60e191ceba70247d89467ae9eba40747"],["/js/src/bootstrap.js","80fa2c63e64e9b2f699d124eb3d5e93d"],["/js/src/bubble.js","3a0e39d90128f3733b1c12dbf4c8508c"],["/js/src/clipboard-use.js","1b8f0544315ee257b38c9a23b7e6c03b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","90f76cfe23fdd6b5537ecb00dba764ac"],["/js/src/exturl.js","58a437673c10c53734e3bbbfb871a47d"],["/js/src/hook-duoshuo.js","c4a7dddd09bc77bccb84b1397c27f7d1"],["/js/src/js.cookie.js","7a109321d46ceefade3892512024049e"],["/js/src/linkcard.js","5ee8708439a11a1e901c59e4935c3a36"],["/js/src/motion.js","bce89c7d637713cf2acc96a567dd2076"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","c5e22b238aaede229d9111053273ad04"],["/js/src/schemes/pisces.js","523c0222a3f8bd6a64e91b0a3db49be3"],["/js/src/scroll-cookie.js","46cd6721b4be55f70321c8dfca5982f5"],["/js/src/scrollspy.js","2cb93ad9d2419eccbae0be82d65f846d"],["/js/src/utils.js","849069b6f1ca3eed3bf6ecc8cbd35e21"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","bf6acee0e2b284dc2c856cbcdfd100f1"],["/lib/Han/dist/han.js","adb9e513d9a245b90559f6a0ef8b8b67"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6105ab55f7ed42b16367233564e50e0f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","71d101754529286da3c53b069b711daf"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","0f9f39af5f849a22f1fe2f2ddf9230e4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","09fe83a502c1d90bec2154036f8b1ddb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","40ccf67d0d7a0de971029c47e51e5c2b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d2d2daec63a2818c7fc2785adcfdf274"],["/lib/fancybox/source/jquery.fancybox.css","6f76868ac649d54f11b106a153bff319"],["/lib/fancybox/source/jquery.fancybox.js","6090bcd616bd27a26ade7934cef958e0"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","aa150af3717a7954d0fa1a2d4465f8c6"],["/lib/fastclick/lib/fastclick.js","9ece4f6c3722f9c42ab583ef5625cbc9"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a5fa3c8c2487fa4615dbc474002c7f7f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6e66524f2575abb7e63333c50e395f77"],["/lib/jquery_lazyload/README.html","179f03b0f24e2c8ddece32c7e6dbac8b"],["/lib/jquery_lazyload/jquery.lazyload.js","c4d7b335fd934903ecb6c6de6a7bbcef"],["/lib/jquery_lazyload/jquery.scrollstop.js","2b781304dab03ca3fbe2e26148db7c58"],["/lib/needsharebutton/font-embedded.css","dac68b23667ac9c6310b84874baa2a36"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6bf063713b0a991acde7a91a7fd38635"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f8ff6969a4c7484c60d7d3393f966a81"],["/lib/velocity/velocity.js","e7878dc5f23d8dba02e4af6c0bd893d1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","65edc755fbdbb5f091f09c79606a747b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e7a1fd93a1ddd9dd72afd627ac71ad3e"],["/links/index.html","efaea4fcfa7dc9fb7c5a7ae5d0841c92"],["/live2d-widget/README.html","6348751f9538dac2f3076b1a964a5346"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","277bbd22e4ed81a386f071173f4ab3d7"],["/live2d-widget/demo/demo1.html","db1564cd0388cba09414c012546b2489"],["/live2d-widget/demo/demo2.html","96903d0e78915912f1132a13fd4a6230"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","38f62cb2d0c7a4124c3eb45404c4f337"],["/movies/index.html","95de7504de9fdaf9fde7a8e021a6cac4"],["/music/index.html","ad54ae20440c3dbe6fa7f1b9f51c1d1e"],["/page/2/index.html","9a847ebc05b2f4957471afba29de44e0"],["/page/3/index.html","4ba2767a7257f11d1a2b2b2b5e2df5e2"],["/page/4/index.html","24c443db0cedadd2a46ca70ded87580f"],["/photos/index.html","6cdf7e10646397ed00cd4397e44332e0"],["/posts/14311.html","8f0b32125fc4599abf064c24158e4c5a"],["/posts/15468.html","89a95d41d6211a314bd40c49054dea6a"],["/posts/16107.html","755aa18a70fc9a1018bbd94a48102865"],["/posts/201e1121.html","af7ecd77e4326ec0329ad3f8c94246fe"],["/posts/20352.html","538e4c75e5acee3d74174fdb62fd8d1f"],["/posts/21238.html","be72d619f6c68e6016e3981c11a88439"],["/posts/22281.html","74f6b9abafaa7441bc33472697cb5d35"],["/posts/278598dc.html","f797ad6c0ec5df67b6c0dfa9c24bcbf9"],["/posts/2d063bc3.html","281d854ad3b3752ac22995e44a9b2a97"],["/posts/30c404a6.html","f181195174daeadf59951ebae2da6618"],["/posts/51203.html","07e1d3e415157d2ce6e5e3a59a7dfe49"],["/posts/538e5180.html","6bf9b1fb285c30ac97bc3bbb3c2ccd91"],["/posts/5394fce7.html","ca39ad3ddf940f045d40cf8efb918e01"],["/posts/59037.html","86652073d90b2883c24ce116abf3decc"],["/posts/60816b5a.html","d04bd9fd3e8ca5c564ec68cd123391a2"],["/posts/6163d4b5.html","1adfb1fd60857f8d57ae2bcadfece5dd"],["/posts/69978469.html","ad31feb764bcad12a0c40cdd13978b17"],["/posts/6a752619.html","dab9ef485c0061c7fd688437c1055e71"],["/posts/8cc73e65.html","fd94e1c31a22ce190874d1101718a212"],["/posts/9b621d6f.html","a263b13c9021c05cc37e98b3c9550968"],["/posts/a530f7f0.html","87568f9011507e206b3c140f7716d02f"],["/posts/beb5106a.html","22320bd47639d41fd79dbf4b60bcc3e0"],["/posts/dd845106.html","f554584c91c98816090820cf8a61f909"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","22b7c49e4778d19215784f5c6a17382b"],["/tags/C-语言/index.html","25bef7ec2bd95178dd2cd4f07451485b"],["/tags/C/index.html","8ecc7a8122abee875555b70826a7db81"],["/tags/C/page/2/index.html","67f6e17b03b8e8b78f6471ab710879f8"],["/tags/C语言/index.html","64f51ad7df41310db69724f3ccc140ce"],["/tags/Hexo/index.html","574a7401f3992bc1b7d965d28180fcbd"],["/tags/Java/index.html","429f554a14a59c19320bccb8dc021b25"],["/tags/Mac/index.html","2ae99453a2a50ea9caff08090d843b31"],["/tags/Parallels-Desktop/index.html","f531e0b9fe7e27b83de698fe0eb58319"],["/tags/Python/index.html","559480e7e801ea64b09ef6b74f79cef6"],["/tags/Qt/index.html","b954af67d9cbff744484e1361ddd50b9"],["/tags/abbrlink/index.html","52f2cb705d731b21d9a2f471d99307f1"],["/tags/index.html","a664d855eb128085893a9b131e389893"],["/tags/冒泡排序/index.html","9f692f6ccefec4c0e4de06b2b13c7d3d"],["/tags/双向循环链表/index.html","c669e8f6fc57247a94742a67a79a225e"],["/tags/双向链表/index.html","ae2e5d5a819aeed836610e6fd4a89711"],["/tags/希尔排序/index.html","1ab6807dfca8134f6bbc5f5672a2ca2a"],["/tags/插入排序/index.html","ff8381dfe3131f8c4b811bb84a1d9ccc"],["/tags/数据结构/index.html","75720a6884eaeb0e8bcbc676e53d042a"],["/tags/数据结构/page/2/index.html","c4e57793d17d733985c9f33481f0715a"],["/tags/杨辉三角/index.html","a783b62ddf34fcc2dd5809a19fc0cfae"],["/tags/栈/index.html","6b6c0b12a31a54e71ce145d60afae0b8"],["/tags/类模板/index.html","f83d4f5f7da38f796e3305b84cc6283b"],["/tags/线性表/index.html","76054873ef06399a254148dc4c182429"],["/tags/选择排序/index.html","5064748e0e57d30805c16622c74436d8"],["/tags/链式栈/index.html","824de8b3b7cb84b928c50ed5f2cfef7a"],["/tags/队列/index.html","80c4ab0696176c3d7cd69acf87705f09"],["/tags/顺序存储结构/index.html","d65556b8666643db7a4413bac33219bb"],["/top/index.html","16a5ddb0754ff77b78b3e1e9c2e5acf8"]];
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
