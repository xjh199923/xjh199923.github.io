/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8275e21961ab58913b2563b69abd9b85"],["/archives/2019/10/index.html","ee1182973a7c15f5d53b064802e194bc"],["/archives/2019/11/index.html","a57b1f5cdcfa03e43cd7b2ef31129c7b"],["/archives/2019/12/index.html","a02910852f628c0e519cff4df49496c7"],["/archives/2019/index.html","e13fae210eb9157a9f164b6749d6af41"],["/archives/2020/01/index.html","a60bc3963a5fb70eb6ebc32437c838d4"],["/archives/2020/02/index.html","52a9b8084a381e7ac1fcd40824b63ef9"],["/archives/2020/index.html","0923493751553bf4c243a37ad93e2081"],["/archives/2020/page/2/index.html","6f748b440fc42a8bb94f7b9b4646869e"],["/archives/index.html","46f3a2471c53813ec19509bd55975ed5"],["/archives/page/2/index.html","5fb2fe6608e08e9907c97def4c1b1d9f"],["/archives/page/3/index.html","5c39db040075adde9d82e57a6c488024"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","d7e739a276296b78216ebf33f0c3e08a"],["/categories/C语言/index.html","7238c618b25bbb2f319d47fa4ae096f1"],["/categories/C语言/数据结构/index.html","0eced9053c500690aee0edfc6bd17d7e"],["/categories/Hexo/index.html","2c8d43f861289236c3e2a5daf7b23e4f"],["/categories/Mac/Qt/index.html","488e1ff0b07ee4ef6ce37b99d3e81069"],["/categories/Mac/Sql-Server/index.html","a40b9cc582bc2874bd3b9174615d2ad5"],["/categories/Mac/index.html","339bcc62fcc02fb486f72f19ac51048f"],["/categories/index.html","8a709aff9aabc6741a6ad9bb7a5d23f3"],["/categories/数据结构/C/Java/Python/index.html","83d21acbe73600cc15a8557ac53cbd6f"],["/categories/数据结构/C/Java/Python/排序/index.html","ebe39bc295008ce1ce31ce9cce82bd9a"],["/categories/数据结构/C/Java/index.html","f20fa9818740248d57a3a36813e51279"],["/categories/数据结构/C/index.html","7c8b2df11f2d0d35ec2b7197dbae8625"],["/categories/数据结构/C/page/2/index.html","be371d67e3d8b4f9921dedff2c4b3085"],["/categories/数据结构/C/双向循环链表/index.html","53494a45ea5e48bee6ff03be7c9184a8"],["/categories/数据结构/C/双向链表/index.html","f56fcb294ecc6502911a00c50833ca05"],["/categories/数据结构/C/顺序存储结构/index.html","7478f3e0976da2306098bd6874b4acaf"],["/categories/数据结构/index.html","c2da90b836a4756ec2549a74480a9086"],["/categories/数据结构/page/2/index.html","1fe7d7c531ce80f473957c54afb0dbd3"],["/categories/玩转Mac/index.html","f7a8f077af3b4ddd2bbbb9fcd04cd7ed"],["/categories/链式栈/index.html","234cdb336eb881d01e4ba5c822cb5b80"],["/categories/链式栈/数据结构/index.html","ff3cbfdcae1d83b723aceded0a7e3a79"],["/categories/顺序栈/index.html","ee468490e4326eb50120b044e92261ce"],["/categories/顺序栈/数据结构/index.html","12e42f8d07b4e8e2546b77d0fba4265d"],["/categories/顺序队列/index.html","09937685217889a4d5d92505d96299ce"],["/categories/顺序队列/数据结构/index.html","dc58ea7d28157987a7f9b1da13ca85cc"],["/css/main.css","0d3ac6b0a5ebcb17d7269471c0a17ad8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","4424ab603feb19eec86bbbdbed30c641"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","a946e0777ecea2245e70c5e268418507"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9b3f1742be470b28930ac46c36ba4eeb"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","106b19652826d43b26c1ced0366209c0"],["/js/src/algolia-search.js","42935fa3a1f5bcfbf6a6228deb8cce8d"],["/js/src/bootstrap.js","9dcbf554a9e63bbd8e64e52542b27b14"],["/js/src/bubble.js","2fda4004783ff829fa165c7d72179659"],["/js/src/clipboard-use.js","4c5ec504e814fa3c65ad095fae3f1560"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","c8bac2b8c0ee933eb1942a7c2190f797"],["/js/src/exturl.js","b1b3e7f8c0603ea6b46f126523cc68be"],["/js/src/hook-duoshuo.js","6acfafc0322e1c3c3a2a6827e9b7b2ef"],["/js/src/js.cookie.js","99eb5b54d0fd4c64c3e3b543e115295f"],["/js/src/linkcard.js","bf8e8f161c4b4f833d3c5012fcacd45c"],["/js/src/motion.js","59b5b55b6f9764d357feaef0c8edb8d9"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","2a74dd70b2a6321c08dca54318117460"],["/js/src/schemes/pisces.js","f072c5383ba54bc89fad9aaee0219e82"],["/js/src/scroll-cookie.js","763e730913e98be25f851b411e256ecb"],["/js/src/scrollspy.js","d8bb5bee07ac5197ed71779248e59ae1"],["/js/src/utils.js","901a636db28c16330ffdc05d4d234fc8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","b826d61a14fe4636c07ef97a689f75d5"],["/lib/Han/dist/han.js","e9e90c2d645a4c502fb3e642ac6a8e50"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7a1603c7bca48623d514034048f7ef4e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c69f238cecdb061d0c5e1de06edc78c5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6cb962acf616d201ffc72a07a67114cd"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2fbcc54bea21976b92b5342011020163"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bdab708cc26d666467c27a97b981834e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","487616abc4ea922a5fbf0ee8ec27cc87"],["/lib/fancybox/source/jquery.fancybox.css","d9e9afd3e36e450882abb1fab7bd99ac"],["/lib/fancybox/source/jquery.fancybox.js","42c84e3dc57ae21deef108b4f9ff457a"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","8c248999e4d8854f6f2073af925741f2"],["/lib/fastclick/lib/fastclick.js","1d7d34b473942a3cd226483a6a233f00"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d6b10cb081b1988c63eadc3ad68a4231"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4691ccd727f0bf202827744fe6aa5538"],["/lib/jquery_lazyload/README.html","a3c6b93efb05dd6e8cdd7e78825d5853"],["/lib/jquery_lazyload/jquery.lazyload.js","f2bc342bad779017ce3902acd96bd8c8"],["/lib/jquery_lazyload/jquery.scrollstop.js","b60654ba5bad0342d1cc71753135ba57"],["/lib/needsharebutton/font-embedded.css","beb04ab16b0800d4b5c695e6c3842ed3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","550c4dd930c6baa468612cbfb223be5f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","70c26c4de301210381d2df84c29a5171"],["/lib/velocity/velocity.js","379c3a40de1bb47dc487a83f1d0a7fb3"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8db028b4de6512e416af7df7d5af70e4"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f0c0dc65b74dcfbb59d7d101b8fdbd22"],["/links/index.html","d6cbd0079774b9f8d2b2c16f4e9497bc"],["/live2d-widget/README.html","80d2a84f917069077f6268f50f66386e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e8d3eb43c5563c054e4d7d7597c50d3c"],["/live2d-widget/demo/demo1.html","949822ed6e92277e20bb48258cfefe3c"],["/live2d-widget/demo/demo2.html","1fe85ede5f86d22390eee9aca742845b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e05bf1146eb5297b39e5b11aefa01a0a"],["/movies/index.html","1bfc504a340e1091de0e3144211e78b2"],["/music/index.html","af1becfd4b7959b86b8e226204502683"],["/page/2/index.html","409c9219370129cc6eb1c93c2624e21b"],["/page/3/index.html","59e83fbc5325bf5cf529732525b1706b"],["/page/4/index.html","1f5a0c071402f41bf56194b6900b4c8d"],["/photos/index.html","6ba81f47b8edcad5ce16848ad7880d86"],["/posts/14311.html","5aff207ad79686c6484918433bfa7587"],["/posts/15468.html","e20ad65fa324315dde5e3f7bd8832f03"],["/posts/16107.html","1b511fc820a8984243ff04fb6f6e18c0"],["/posts/201e1121.html","235713c0321b839773061e0735f3ec5f"],["/posts/20352.html","dafe1f83debec27f2622b31fa6fab25b"],["/posts/21238.html","71f98a4559cf95c40867bfc7c4968ade"],["/posts/22281.html","76fdd48a112641234ff8a9781d11d85b"],["/posts/278598dc.html","beff02809184a2ae26af7496ff07e72e"],["/posts/2d063bc3.html","08eb29d909618fcf65c527f4a88477c0"],["/posts/30c404a6.html","4888d3935a6cb6d5e34982ecdbd55aa8"],["/posts/51203.html","191962d177d8e7fd6a63b957c8a002dd"],["/posts/538e5180.html","60f0f479e14ebc6b16d2b144cd2cf47d"],["/posts/5394fce7.html","2540dbee65cf82a1159eab6681d2a944"],["/posts/59037.html","08a2176f00a1ccb8941f8ac73d1c126c"],["/posts/60816b5a.html","62ff0922df32200ba69bf41378de92d6"],["/posts/6163d4b5.html","c3252b2d3fbfe767655361027f900268"],["/posts/69978469.html","d095b37f6ec25b4a5cfdb2a544853837"],["/posts/6a752619.html","5bb00ed6918d7f375d668fe026af780a"],["/posts/8cc73e65.html","2341c2308ee0e1cc53206fb815710147"],["/posts/9b621d6f.html","29f1b5a73ea6bf18ab4d275ff5177f59"],["/posts/a530f7f0.html","8ff3afc842d50a74a4fc9669ebca16bd"],["/posts/beb5106a.html","1fe482e794e4e1ce591b657d50ab341c"],["/posts/dd845106.html","44be9c72edee56a173fadb3a07fa79d0"],["/posts/e35620b3.html","1f6e17ddd995bde7f09df2f0c42b9463"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1eabd50dff7cf5d574ef87b9d4b757a8"],["/tags/C-语言/index.html","0b2aa0094ddb96e021131a413644637e"],["/tags/C/index.html","1dd65a2c3cdf818bd2e62a998678229f"],["/tags/C/page/2/index.html","8406a28f85ba5e09c771158c9fefa128"],["/tags/C语言/index.html","fc77b16407aba014344c027505fbd448"],["/tags/Hexo/index.html","f92ff2c79e181c4d97d2559cdd3968bd"],["/tags/Java/index.html","4aae80f439b7f6ebd777d996a1aecdd0"],["/tags/Mac/index.html","4b86ab792987aa0cdc4100c3a0883b9a"],["/tags/Parallels-Desktop/index.html","927021206704f00389f4786df42ba137"],["/tags/Python/index.html","550e700a16f48a48e5b2403dfc65e47c"],["/tags/Qt/index.html","cb7dcbf001fbfd0a8403a0957be2ac0e"],["/tags/Sql-Server/index.html","1119c165ca4fa6e3a0e5823f85b825e5"],["/tags/abbrlink/index.html","00035aa4b90342a7c51a0139afba8d76"],["/tags/index.html","3f1a8fcfade22db3c5c0633f2e2b9fe5"],["/tags/冒泡排序/index.html","ed67b3de57321b6e7c66cd7b42d56d38"],["/tags/双向循环链表/index.html","a683c4dbc15ee99adea881ac7544b220"],["/tags/双向链表/index.html","01f1890a35504c12ff01cdcfb2ede5a9"],["/tags/希尔排序/index.html","d43e70ab0b0bb585171cfd3d9c6ac4cf"],["/tags/插入排序/index.html","4a59f4a6aceac61f4c13892c64edf9fa"],["/tags/数据结构/index.html","1a72ab179c9a7492902f9c5697f5720f"],["/tags/数据结构/page/2/index.html","06d5ed550de6a1caf3230dcd2e509a01"],["/tags/杨辉三角/index.html","a7f543e19c6639e286652c6bc9bcb714"],["/tags/栈/index.html","552d2aa14f1c16e9099c0c9698db9807"],["/tags/类模板/index.html","c5136ea6fe5461f04a0b032e45b1fcdc"],["/tags/线性表/index.html","c08b638627211bd352722969b0a777ea"],["/tags/选择排序/index.html","fe9c5a87e071737ea203e8cdd40e5e3c"],["/tags/链式栈/index.html","95999025eaae057a7d8d68fc12e889a9"],["/tags/队列/index.html","04043e2ec3550a23dd03d42b6d4a0ce7"],["/tags/顺序存储结构/index.html","dd27f6aadbf373be7bf82a7b771fcb30"],["/top/index.html","92268a3d8a162bf3633cfdfb1489e72a"]];
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
