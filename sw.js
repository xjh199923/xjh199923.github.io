/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","8011d6476699ab09d0eb813c52e65145"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","e13b9b338e1640ce8fd1cd76b281dcb8"],["/archives/2019/11/index.html","ecf1f03ff60cc0fa4b9d5e1331285d0b"],["/archives/2019/12/index.html","56b888ee5839d375be39a8a9acb80a5d"],["/archives/2019/index.html","07ef5bb3331669618384d54cd440bbf4"],["/archives/2020/01/index.html","a4006c2742685e633cc9092bde2a748a"],["/archives/2020/02/index.html","a31006198759ec6f12d6741b5fcd16a5"],["/archives/2020/03/index.html","07d49651b77a75a40947399d0e5e65c6"],["/archives/2020/index.html","03563d5004d5a49de78eb35dc3989041"],["/archives/2020/page/2/index.html","59ffc34585c87cf23f10a7a4c4c46cc6"],["/archives/index.html","3c9fa507765bc9e678aecbfa5f1f3f23"],["/archives/page/2/index.html","b9edab5e134b23f5f08b5eb2448e7b2a"],["/archives/page/3/index.html","e2b70dc461ccd2a97582bc4f979a8aed"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","2e620871e6a23a558d5a189f8b2b1a52"],["/categories/C语言/index.html","ca4afdb8ed3234011eea9539bb101a1f"],["/categories/C语言/数据结构/index.html","20e420b281f22c6ed4379bdcf4aacb45"],["/categories/Hexo/index.html","7806e2a02a8656135360e0a1dab4f51c"],["/categories/Mac/Qt/index.html","9aa9ab1c1689b31f614509c57baba635"],["/categories/Mac/Sql-Server/index.html","1a3465b3a4260f93eee3111ddca786b9"],["/categories/Mac/index.html","5460b29d7b71ad0109d13667de7dd1e0"],["/categories/index.html","04900e7ab2fff0eb4bf8f49ca946671a"],["/categories/数据结构/C/Java/Python/index.html","7a9c244af9196b56a794d3e2ada85c5c"],["/categories/数据结构/C/Java/Python/排序/index.html","87c2140c263895c01972f99bc407405a"],["/categories/数据结构/C/Java/index.html","db9b9d9e519122f3baf6ce9f8b0058e7"],["/categories/数据结构/C/index.html","e3c7191fc46c4059d4ccbe5df9ccdba4"],["/categories/数据结构/C/page/2/index.html","5f836d00f7e399606dbbe4eea2e69341"],["/categories/数据结构/C/双向循环链表/index.html","85e5c6dfe3e7f9d2f2c89488bb520511"],["/categories/数据结构/C/双向链表/index.html","2ea60f3909ddc17340d1b28c14c39121"],["/categories/数据结构/C/顺序存储结构/index.html","faaa0204b11aabd035bc7a601c9b7221"],["/categories/数据结构/index.html","19ac7a1aefb859f4aea437a06cdf73b7"],["/categories/数据结构/page/2/index.html","acdc0282a976847825994ff61f70574e"],["/categories/玩转Mac/index.html","da09406988ab90930ac92a94d662e687"],["/categories/链式栈/index.html","3a716e5092deed726432054c3654a680"],["/categories/链式栈/数据结构/index.html","e39378cc39485abc617f600d89d42caf"],["/categories/顺序栈/index.html","7578de447b6c598760d5a0dc8b426326"],["/categories/顺序栈/数据结构/index.html","0be74254076e13af3dfb68bed1bb4db0"],["/categories/顺序队列/index.html","8734db550ec60e4241ceaa330b245e4f"],["/categories/顺序队列/数据结构/index.html","13d560e31f35eb724928032e60240b05"],["/css/main.css","c8f161ead94be284af70df19e5e6f007"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9ce23738fc39eaf0a92392bc8fbacbc"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","38d7475eb3392c74d0fd82fa83c5da04"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","4494915fef08d0f577015ebcaf40bb81"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","eebb255c7ee83fbbc3b5956cc0743311"],["/js/src/algolia-search.js","6010cbd1a0847cd7573197b839bd2cfd"],["/js/src/bootstrap.js","ed0829cc78800fd32722eb0c9c97553e"],["/js/src/bubble.js","9f66c0d5bb18bf8dc55174e33a419963"],["/js/src/clipboard-use.js","c045a5857ac8080ce97cf786f8b013c5"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","f915abb212b47ce9c88370a143ca7d17"],["/js/src/exturl.js","a5a4190465493f72d150735fa6495876"],["/js/src/hook-duoshuo.js","e3abc9d9e49d98b5f9c0e7bd8a2e55ec"],["/js/src/js.cookie.js","146ff866da61dc6688ffc60ed72455b6"],["/js/src/linkcard.js","bc3d19d6635c740f88a16584af3a6078"],["/js/src/motion.js","7ca9161c80ec3d03085ddb3a0c9630a1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ae1c8a986d0f861314ef8df6f70f1987"],["/js/src/schemes/pisces.js","13c274da18b0929df35721c860f42d82"],["/js/src/scroll-cookie.js","c853b15092caa97d21d1ffe0aae49c9c"],["/js/src/scrollspy.js","cdf9f7a8a4bf7423d94fbd75e4a4455e"],["/js/src/utils.js","df2e03dc2ef07fce3266e8124e96203d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","5f39b81a7b070b8e0947c84d732c7497"],["/lib/Han/dist/han.js","1c82371424af8adc2173e09c2497dbb7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2907550ccb79cbddd6b58f7d97371639"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4539ed8b20ff210e25f18f8cf5d11284"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4e7d6b6d637a7f1e65d462639f8290ef"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3bf2a1370c844c849f16b850b48993aa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","05aea95be4ca310d78598118aff84dce"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c2f3b71d10bd9c8c1c94facb08f09bf5"],["/lib/fancybox/source/jquery.fancybox.css","dbccf995b22aaa18f0b2a87603e51784"],["/lib/fancybox/source/jquery.fancybox.js","5968afbf7dfb7061b19a005d9bc032ca"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","40d5364ac9cc3182f4ce33f2ac3e789c"],["/lib/fastclick/lib/fastclick.js","8294b3c77f08509bbbb35cdfb5818ca5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","6d91be250373ebd867f121d4115bd469"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","fe3b12d998d7f52ccb609bd09c015555"],["/lib/jquery_lazyload/README.html","b6b03426cd67a33aaad8e85ae67ae6b3"],["/lib/jquery_lazyload/jquery.lazyload.js","e39bb5ce71a30c2e3eef1065d1d4a839"],["/lib/jquery_lazyload/jquery.scrollstop.js","45a3bc1e405194aa1fefa398a4fe12fa"],["/lib/needsharebutton/font-embedded.css","df3d7b69774d3f9de56bf76213da146d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","59082c906d45e3a8ba101eb6d8b47790"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","be674264a36ca4494a43a011c9dd880c"],["/lib/velocity/velocity.js","4379c5138eab39357f98c9ffdaf371c8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ea33c6a0d2a5925f4e85c8ea1a26f9d2"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","73cf4648cbdeba2799728e078fa41b29"],["/links/index.html","c3fa18c0721fe3923e538ff0dd9b1704"],["/live2d-widget/README.html","606f0d8a0797afa918ec247a7e5732f0"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","177d00ef983764e756951bd1d85be399"],["/live2d-widget/demo/demo1.html","c83bca8bc81842e0ef5d7d27543c91cb"],["/live2d-widget/demo/demo2.html","b2de9c29b43841b61cbd6ca169992def"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8f8d33cfc8273bfc9d94917f639be4b6"],["/movies/index.html","b518cdeac93280571c0fe0b5bd3b450a"],["/music/index.html","ca276db58abc9d4a0526ddca186d5d17"],["/page/2/index.html","eeb2f621166ee0a30bcd93ba655f9aeb"],["/page/3/index.html","13d7f4b4db98ee557941fdc4e49a35df"],["/page/4/index.html","5b980dd19ac6941ee6ba0a157cb57078"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","eedf22bd943391cb35736cd6a8512307"],["/posts/15468.html","cfa29b157b510d686fe074887c1dfce4"],["/posts/16107.html","5505274ed8c9704394002c21cbd9e248"],["/posts/201e1121.html","8d4191b2ff5c596e292292326ff07b80"],["/posts/20352.html","72091c20e9f622ce40cbefec861233e5"],["/posts/21238.html","192d1557867d46345f1cd7f5f7e2ca95"],["/posts/22281.html","269f88f1ee5769b4fc86f8e28ad41a35"],["/posts/278598dc.html","d9784da86f2b4963c40f6c2bc21db83c"],["/posts/2d063bc3.html","d089b7c2f8e7f39f8ce3e120bb95d2cf"],["/posts/30c404a6.html","da7140c6eb506b502b9fb951493ada9b"],["/posts/51203.html","4daa043631c85a0a3fc799c7d98405be"],["/posts/538e5180.html","bf856dbb59390c6d89a856fdaea29859"],["/posts/5394fce7.html","5bd6c9c4d1e43281c49d8e0d5d38cbe4"],["/posts/59037.html","ea72051331484ae4aa3819868db99ffd"],["/posts/60816b5a.html","ab2774c5561abf078db6ea5bbf0781bb"],["/posts/6163d4b5.html","dc3d5dc70a91565de4486850b9dfea6e"],["/posts/69978469.html","68cbf1f1a8b8408a9b492c6294488ad4"],["/posts/6a752619.html","48c8aa61dd1d7ae289101533da96b73c"],["/posts/7fcb11a7.html","2c6bc4d662a61a217cccbd5aae0a8e6b"],["/posts/8cc73e65.html","a9820ddd9e1424a99d2f3b9723b170f2"],["/posts/9b621d6f.html","c63b56d669b974b91db08ae75301df70"],["/posts/a530f7f0.html","8f37d975302026a14cdc10e7dc6750d8"],["/posts/beb5106a.html","1c85c2f7e8fbf4da023c5cbb5d66ab38"],["/posts/dd845106.html","a1a52016c1d83cf6e520e3544a7a6c25"],["/posts/e35620b3.html","438cf8e2d8d5ce638cc3808e6f154161"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","013479ce0f2d8e53bd6afddab7ff36ff"],["/tags/C-语言/index.html","fab7f58243203b0f0ea27f5d6807c3cf"],["/tags/C/index.html","5739dc053831eec1c84701253f1d3eef"],["/tags/C/page/2/index.html","b27bf9d948e04a320f5aecf4f801a347"],["/tags/C语言/index.html","79626cd4a03305bfcc34cc1b8e5ab2c6"],["/tags/Hexo/index.html","e02a973ed06a814ad1d4f449b18eeda8"],["/tags/Java/index.html","81e4fdda2182d7a74914f438052d8277"],["/tags/Mac/index.html","7f76be46af9afd72e27bf1df63c1bc45"],["/tags/Parallels-Desktop/index.html","92511d9e24d76466878a59631617d3dc"],["/tags/Python/index.html","6fccb95a130f46a761d4bf9d4f85d4d9"],["/tags/Qt/index.html","1d537297a9e6c85ff1243d3e953db028"],["/tags/Sql-Server/index.html","fc6f1810df2a99efc72dbff605c885c3"],["/tags/abbrlink/index.html","95d52072a4e7041c5f7d8d4b161b10ba"],["/tags/index.html","2a0518f74cdaaa733ae8c963a622ef2e"],["/tags/冒泡排序/index.html","e1f352c27dabfd63246a1e84c86ce730"],["/tags/双向循环链表/index.html","72e6d78365eede57d0412c25c60736ca"],["/tags/双向链表/index.html","ded267eeaa4cbca6dfe8d4d21de04ab3"],["/tags/希尔排序/index.html","3e2159a4be59e095d649dd0465dc2822"],["/tags/插入排序/index.html","75285ee277f1bbc7a40e46dba717090a"],["/tags/数据结构/index.html","65263ea87f2e962fefb33c941202e7f3"],["/tags/数据结构/page/2/index.html","7ff923574446dc6c7ccc42f2f6962c56"],["/tags/杨辉三角/index.html","b05be1f54ecb82f1e8595dcefdf92c0b"],["/tags/栈/index.html","369e7128644bb5fe3f0e820b2adf5ebf"],["/tags/类模板/index.html","381365d01e18391c737b851344ed1a9c"],["/tags/线性表/index.html","e1bb36b7fd0779afbf132d382f84ef73"],["/tags/选择排序/index.html","5180ed8a4b492509c6c5014205e81c85"],["/tags/链式栈/index.html","d8e087ecbfa9ddb88511e95c69976ebe"],["/tags/链式队列/index.html","bedc893d08cfc655762e055c9eba8a21"],["/tags/队列/index.html","92bbd365b89bad58de355fd0b7e70ddf"],["/tags/顺序存储结构/index.html","f036f16c49fb2bbc444ac3a4fc40414b"],["/top/index.html","1b24571d24fc0239ca7df10c3f38403c"]];
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
