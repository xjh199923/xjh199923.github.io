/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","8011d6476699ab09d0eb813c52e65145"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","0c9cea2194f9bbd239d6b31b8f65ee61"],["/archives/2019/11/index.html","ce70248377dcde4ce3642f4fe3e5b112"],["/archives/2019/12/index.html","b9be28cf024787269a1a8805107ab862"],["/archives/2019/index.html","19c382a32df7937314a3d0ed0fab14af"],["/archives/2020/01/index.html","7b10b9da279395bb8a96c7cd468d7a6f"],["/archives/2020/02/index.html","4cf9d55481e8e43f6a271895952c62e3"],["/archives/2020/03/index.html","29114caf404513da4836342802744b0c"],["/archives/2020/index.html","2330bcbcbbc40b2ba9f21b5c08624b36"],["/archives/2020/page/2/index.html","54ef6dcb92282446f62f32e2b7146e82"],["/archives/index.html","a0ede30fcf72d3dc6339dd5aa9f554c0"],["/archives/page/2/index.html","a81ad9f6deedbc77ee881ac1db5b4571"],["/archives/page/3/index.html","aa19c4aee7574df8ab750b2d37ea5d29"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1b33beee67bba0ddd81d5391af3d6a3b"],["/categories/C语言/index.html","41faba0c6d3449d219956d56ce3d3dbe"],["/categories/C语言/数据结构/index.html","31f77e693aab3b1cd8b563a2c618fce6"],["/categories/Hexo/index.html","04fd1bfb0b5564018de0fad4936782f5"],["/categories/Mac/Qt/index.html","fc7c622b9e72382bf2a14ea8bf322c3f"],["/categories/Mac/Sql-Server/index.html","46805acbce36932509ec9358a9b0772b"],["/categories/Mac/index.html","e63f1a920368e26e4a2dd246b86168c6"],["/categories/Ubuntu/Hadoop/index.html","f8b87248d52574c8223cddef745fcc9e"],["/categories/Ubuntu/index.html","48fe708eefd425ea8ce7d393eeed3344"],["/categories/index.html","576b0a0c607db13ac8292c625cf516cf"],["/categories/数据结构/C/Java/Python/index.html","30276741150d449f888155a5de8ef1cc"],["/categories/数据结构/C/Java/Python/排序/index.html","b0c89f26fdaa6ab89771c545b7d1a96a"],["/categories/数据结构/C/Java/index.html","fae6e9f304a6288b55295a2f7821c937"],["/categories/数据结构/C/index.html","9f3db7b8576e6e4c8846321b2ad3c7af"],["/categories/数据结构/C/page/2/index.html","ae115acec6727aea124a73b4a0aa701b"],["/categories/数据结构/C/双向循环链表/index.html","760d00e5e06e9c16bcc212cd29659c46"],["/categories/数据结构/C/双向链表/index.html","62956f2f13a52ce2fbeb5df9a36a3ace"],["/categories/数据结构/C/顺序存储结构/index.html","5297060f5f9e203dfbd53786473f844b"],["/categories/数据结构/index.html","ef1d5f0f05ff3db0b66af6ecbc5157c4"],["/categories/数据结构/page/2/index.html","f3546e767f03b7f704ddb738391da6c7"],["/categories/玩转Mac/index.html","a9a84837353b2543fb5177d8aa0b17b5"],["/categories/链式栈/index.html","d1b3d491c2c543f87ba5181aea028f3a"],["/categories/链式栈/数据结构/index.html","4022add4beb294e49e65a5fa286e1c81"],["/categories/顺序栈/index.html","dadc99f0f5867f46e9cf66783f887591"],["/categories/顺序栈/数据结构/index.html","4b14433271f1e081a1dd3eeb3c758491"],["/categories/顺序队列/index.html","3e0a79eb63495d6342817f11afe450a4"],["/categories/顺序队列/数据结构/index.html","ef1eec87a54aa040dd24d7bb44323295"],["/css/main.css","1ee6c7b97ce992303aa56580717890a3"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","93c0aa5404a9f3ba1fb83c7028a0a5b5"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","217bb2755a0877fade86a814d0335984"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c5db5c61ce5af2b7880bf4b5493561a1"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","54fa6fc4166e1f4d5335b696e1ec9d87"],["/js/src/algolia-search.js","41ee89ec563c4ea051b4f286147f3207"],["/js/src/bootstrap.js","d51cccf5b55da133c82c95ffb6a8928b"],["/js/src/bubble.js","d718430069b39171b214aa7e0f909ac7"],["/js/src/clipboard-use.js","e8ade09d840367926bcd55a0bfa1f300"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","01bde2082516776f1aacc323162a5d20"],["/js/src/exturl.js","2412957f02b950e8e228509fe496fe3b"],["/js/src/hook-duoshuo.js","e3ca4866f58891c6c2a41a05000cf126"],["/js/src/js.cookie.js","8a8725e6c9c7704ac1d7ebeb37d30d5d"],["/js/src/linkcard.js","125792ebaec7dfe4b1cec33000c124d9"],["/js/src/motion.js","11b4d69cce13220f6bc2b6e92e5cafbb"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f1edd1dd76f9e1311906c01047482a23"],["/js/src/schemes/pisces.js","b84f3d6d75dde1ca4762b558bae920ee"],["/js/src/scroll-cookie.js","2cb937d8d70a3bd2cd3f7d110593aa6f"],["/js/src/scrollspy.js","3f4f00a39676b4a5c9c6307c1e91eda9"],["/js/src/utils.js","c5b3216de60e730674ed6501c57d52d3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","40767bdaf702e4c368336359ce5db65d"],["/lib/Han/dist/han.js","61a01f18c32e2425af488704677235e2"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c21138fed95c22387a1356cb898e7d55"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5f4935f5d1192d2682202dc45b41435f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","68d69a14997393a84e3f249f9823a5c4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","57d74d9cb8a382c1bc80463fc3bade32"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f3ddb81ba50a805d0aa1fbfa7799acd1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","eaa92f90d1d4140411db8118dfa04300"],["/lib/fancybox/source/jquery.fancybox.css","7712dcb642371d61519b755f4822eebb"],["/lib/fancybox/source/jquery.fancybox.js","cd028bda9a9130d96674461994820796"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","253bea64209ded20a1323ef365258653"],["/lib/fastclick/lib/fastclick.js","dd73a090b8a340da871e3cffd0cd148c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","05185efd5bd808bfb03d60a0278fb2ce"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7546bcb7cbcdc55841d0f57f511e2c87"],["/lib/jquery_lazyload/README.html","2dae9be360a5d5cd6326a609cb5adf88"],["/lib/jquery_lazyload/jquery.lazyload.js","fab2d62777f1c7d0fb46be3019a23e56"],["/lib/jquery_lazyload/jquery.scrollstop.js","7bc39ef7d50c461390cb5786f2a1a873"],["/lib/needsharebutton/font-embedded.css","bce3888dcb045127dd0f5a27ef74414d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9daa4d0936759ac60ff9e576b709749b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c2a2231b0a23c655d39a7f8b09d0dfc7"],["/lib/velocity/velocity.js","184ae1ca05b82178f5d0bbd627f0acdd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","b55e19ad4a7e96bfc635acbbd4b0669b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","97939494d767e9f84cd9f9108bdf8122"],["/links/index.html","23f5576c304b45dad0910443959e6fba"],["/live2d-widget/README.html","be3f5f3f43b51e19a7324342624139f1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","46ebc1837b3a213db9bbca289dc47bd4"],["/live2d-widget/demo/demo1.html","d04617b0d3fb60f6b896b289b4fa0b81"],["/live2d-widget/demo/demo2.html","e05eb06d953ce651806cac5745dddc1b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","80b6db110b489bf6adabc24149f05df5"],["/movies/index.html","f1fa158e7494039fa89892f2c46c97a3"],["/music/index.html","cb92010223bc6bded7ccf7f80928cf56"],["/page/2/index.html","b5d0989583ddf772397eddacbbfa2c29"],["/page/3/index.html","c8ea0919c062ddc5a956fa70383bb5f2"],["/page/4/index.html","800342498c1e3812e90a0eb2926115d3"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","fef0038e7adb401008089021f7b995b8"],["/posts/15468.html","faa57dcd0236c6cfe379f6bc5b32eb8f"],["/posts/16107.html","1952fd1858d693e47c0487abad5e54b9"],["/posts/201e1121.html","ac8b2c595100d1c4f516da7ee2e7f338"],["/posts/20352.html","eb351282172388c147cf379b4b937f35"],["/posts/21238.html","414cde33a69f48d32e60b105bb8cf3fe"],["/posts/22281.html","0d2423c486d92784d97b954285256423"],["/posts/278598dc.html","11c0e95b5437df84875f4b2e8ca7213b"],["/posts/2d063bc3.html","0651200acb115321afec155cfece90ea"],["/posts/30c404a6.html","929d1d95c933d133c04dd30edb1cbf2f"],["/posts/51203.html","7f18eec7f0d2f9111b093bb2eebd22ab"],["/posts/538e5180.html","463f399ba5f7f4305bcdf54f992b86d1"],["/posts/5394fce7.html","856465f0df0262d5890fbfbf088f4adf"],["/posts/59037.html","fd72c32fb379e7a091c2cfd2d1efb7f1"],["/posts/60816b5a.html","8f14b984297bffc82caeb4a7dd35a632"],["/posts/6163d4b5.html","8c7a739ef6b14427e8215473e8a67053"],["/posts/69978469.html","b495c2216cc66929dc76d9d5553abd9c"],["/posts/6a752619.html","57940f2e5f0e33df8c8553acc2693cbb"],["/posts/7fcb11a7.html","da9e01f54cefa75ce3b2cdb5780158ee"],["/posts/8cc73e65.html","ddc027b097ba7a50a6e16f34bd69394d"],["/posts/9b621d6f.html","a16236ce85a445b8e36796eab59fa2c7"],["/posts/a530f7f0.html","591b06fa2b5c9a43ce502a832d6ef9f4"],["/posts/ae1da46b.html","115e631dcc05edf90a750cd2b45e23ee"],["/posts/beb5106a.html","66ac8bbf69b864e5a605a5f22d7195e1"],["/posts/dd845106.html","02304511aef2aeeb7d2667033768b221"],["/posts/e35620b3.html","b5cb7d4093336ba918b9a4b2ed014321"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","70741c3ebe18aa4e1ff8c54a794703d4"],["/tags/C-语言/index.html","27e4b3aab2068d0df9709c0fa3e26b96"],["/tags/C/index.html","da8ad77f5fa538f4acb6226aa43d0de6"],["/tags/C/page/2/index.html","0ba5fc343f84e5041124abe1470cf96f"],["/tags/C语言/index.html","6378e9f94628df843268a4c4870e6658"],["/tags/Hadoop/index.html","707e3e843505e8eed7de757d0ea64ecf"],["/tags/Hexo/index.html","18889868d300f1d785a134c3571e5fb9"],["/tags/Java/index.html","6ce67bb42f90e9eee24be507fb57b467"],["/tags/Mac/index.html","c2f6246bf94799ec77ad235b362b9aab"],["/tags/Parallels-Desktop/index.html","99a272506414a8fc6820f7ac72035e84"],["/tags/Python/index.html","13471a9c4f326e391e2fc15f131a7b42"],["/tags/Qt/index.html","07902b2044b3b64da5026da6c4ad66ad"],["/tags/Sql-Server/index.html","f70bf381d33f6be2ae51cb04f5252162"],["/tags/abbrlink/index.html","9147ebbc5ddd830baff99b6f93f94646"],["/tags/index.html","8981efb3efa512359c8ff9c9baa12ece"],["/tags/冒泡排序/index.html","f99a57d9362d43f6bf9a807ec40784b0"],["/tags/双向循环链表/index.html","8ff63f62fbcb493463a061935f56387c"],["/tags/双向链表/index.html","5c9415d18638fa63ac2fab69da66e82f"],["/tags/希尔排序/index.html","08c7212c7babdd046f33b72151e6a575"],["/tags/插入排序/index.html","1f9aa94fc9144b939f9c022cde8ca0ec"],["/tags/数据结构/index.html","04a7f5a1c865614c6aa3b0d994d5ee0f"],["/tags/数据结构/page/2/index.html","921c4659329c7976c5cffe5f8f2ee273"],["/tags/杨辉三角/index.html","3527525abf7f42148df735396e0af7a5"],["/tags/栈/index.html","4cf0b6b9e1cb220b88d874c207adfeab"],["/tags/类模板/index.html","165dd25b08e09efd38014cf66279a971"],["/tags/线性表/index.html","84a506e4a9a81228ce2737e0c9cca6f7"],["/tags/选择排序/index.html","2da43358d80532546e77d27c7219b2ef"],["/tags/链式栈/index.html","dc996ec2c80add77c8725fb457812dfe"],["/tags/链式队列/index.html","1dbf2758352c825e711e02916647b2a9"],["/tags/队列/index.html","462ed14830ddd4fcdb102dbeb19ff951"],["/tags/顺序存储结构/index.html","65ba483428d2e16c0c61f7931188b7cf"],["/top/index.html","a8e8723d9fda678351e0be706050831f"]];
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
