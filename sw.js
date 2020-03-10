/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","8011d6476699ab09d0eb813c52e65145"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","28b63d353b318a2b0fcbb178b63640d9"],["/archives/2019/11/index.html","ec182c00cec9eb6c64c61ee0e57fe96a"],["/archives/2019/12/index.html","0374ac133288568ccb2d6e9d4bc877eb"],["/archives/2019/index.html","5949292f4341e8f736ccb3d522357a4d"],["/archives/2020/01/index.html","3a5b98afc636e590689f41d0aebd5b7d"],["/archives/2020/02/index.html","7155a26bd9365a6e7de6324c7a149963"],["/archives/2020/03/index.html","32da7749bbaf7e7a9add25e9c785b81f"],["/archives/2020/index.html","8a691d1d7e8d8450f51aaba0a6f08bcf"],["/archives/2020/page/2/index.html","b0013bf747cdf4715fce04a90f801d9e"],["/archives/index.html","ba713f5bfd1e8a9439fc299951dafecd"],["/archives/page/2/index.html","50244e00c6075baf97dc8f105135cc3e"],["/archives/page/3/index.html","cdca1444457064f686bf9ab2543c26b4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","00c1614ff14fdf0ec1550fb5f495b7d3"],["/categories/C语言/index.html","92a5571736c578671da43983b03c1679"],["/categories/C语言/数据结构/index.html","6606095adb2bc9e8242674178cd5ac43"],["/categories/Hexo/index.html","11bdf655dd1bb580832d73656e5c5b01"],["/categories/Mac/Qt/index.html","4b4a00c68933d0f51b2b1ec799d9a93a"],["/categories/Mac/Sql-Server/index.html","0a39e6ad89cc4a241be0284bd38be018"],["/categories/Mac/index.html","7627e26cc3b266627fc6409b37e031e5"],["/categories/Ubuntu/Hadoop/index.html","4ff97b5d6c6a432d081b3667053a8c5e"],["/categories/Ubuntu/index.html","10f804769f3748b6c3c65afbb87551e2"],["/categories/index.html","9ca10fe2b8d3db0edec2fd32f9db197b"],["/categories/数据结构/C/Java/Python/index.html","4cb9b129b4341d996bec0353ff46ba8b"],["/categories/数据结构/C/Java/Python/排序/index.html","5c825d5490bebbd1855592888de7bdbf"],["/categories/数据结构/C/Java/index.html","f1adf4a5cfbf2dc09d148901fcf54b7b"],["/categories/数据结构/C/index.html","b1e6d606cc3d0efe74e72c21110625f6"],["/categories/数据结构/C/page/2/index.html","03270870c2daf36ceb91d86ed630d837"],["/categories/数据结构/C/双向循环链表/index.html","59bd9be41a77712370b36403c90fc34a"],["/categories/数据结构/C/双向链表/index.html","a062b08c4f2d9523d408c9aa0c8d055c"],["/categories/数据结构/C/顺序存储结构/index.html","5145b0c1dbeaca7b2336ef35e7011a96"],["/categories/数据结构/index.html","fd83b78d3a65c394d2a6b5b4b2cd31b3"],["/categories/数据结构/page/2/index.html","b02465892186c69f75e0e94839e47426"],["/categories/玩转Mac/index.html","fc390849b5f7c79c70152323f886e5c2"],["/categories/链式栈/index.html","13c5394cb2e229289f7deafa69131b85"],["/categories/链式栈/数据结构/index.html","5bd25502901977ee57f48d9521c26ff7"],["/categories/顺序栈/index.html","7c0d408b20bbe500f57ef9674014d164"],["/categories/顺序栈/数据结构/index.html","d45d4cab5683bd79180cd358326c3bf4"],["/categories/顺序队列/index.html","8040f3e01bcc5d120d496c7ae708ec34"],["/categories/顺序队列/数据结构/index.html","e5df5de0738a7b6c0ab6adbf9cce03d4"],["/css/main.css","ce25d61039af91cfd855ac78c745b0a3"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d04d5d9603e5d137ccea5a0e723b0315"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","90649a780b50cfa67f0a36fe6267238d"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","21b4ae4a144752dc17e05d4ac36212c8"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c9052f72073cd9713f0d4022c58b6616"],["/js/src/algolia-search.js","8225ca8b25bfcd837ca26d55c6864e51"],["/js/src/bootstrap.js","73dd4110cc5abb818168e45553bb9e14"],["/js/src/bubble.js","2d1bf817c5f72a615d0ad941ee7ce8ca"],["/js/src/clipboard-use.js","0d0eaa35047d17f24c8fdd459168af18"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8d998802021f03e9f2c19c6783e9894f"],["/js/src/exturl.js","2c752f4661176df917a495c4f860b7fd"],["/js/src/hook-duoshuo.js","8e533c0b85862010cc1de28c45e0a455"],["/js/src/js.cookie.js","93101324776205f7f6caeaa6b996075b"],["/js/src/linkcard.js","231c12cda34ca59dfe81b1b2987746bf"],["/js/src/motion.js","085e3c1fb83de0a68781925db5ced2c3"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","3451cd88ef467224116e4467de587ca4"],["/js/src/schemes/pisces.js","8f10f53b86622691d3b4660ce176e982"],["/js/src/scroll-cookie.js","583eb649663c6c044868e3312bf31121"],["/js/src/scrollspy.js","067430cc160099712b4412c8a991dbd3"],["/js/src/utils.js","bf01f1c622d272ebbf79fc705947ac45"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","6cef9608598b588e9f91d7081dc19d40"],["/lib/Han/dist/han.js","1ae9e348a6546f610c30047db8c403b0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4ab9825be961c5c59c1f0f1a6011887c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","edc3a6385c1b3beb130ea730179cb38c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","328c58ec6e4feaafbc21700f5ed93e60"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","86e79de4136310dff713ceae6ad8eda5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","6624cb0462cfa50408e6b3a581782855"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7724cb2e088dd29d0d451ba1514d9bb3"],["/lib/fancybox/source/jquery.fancybox.css","9eb4762e68546f606e56c1719a0fa306"],["/lib/fancybox/source/jquery.fancybox.js","ebd7fd26eb37397b21bc3be7a7ab3386"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","4eeb8c01918167db440165f3eeafa3a3"],["/lib/fastclick/lib/fastclick.js","a89d17520da42351a49609dbb6ccc8f8"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8ed0536df127c1da7345fd75319d8128"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8c335b1651f5bc9806db718618b43d45"],["/lib/jquery_lazyload/README.html","58aea533d83b1dc8b718a5648ccf22a8"],["/lib/jquery_lazyload/jquery.lazyload.js","5c53314b26235ccbbfb9e238b41f3fa6"],["/lib/jquery_lazyload/jquery.scrollstop.js","d75f45f58714c8f83328dd603f2051a1"],["/lib/needsharebutton/font-embedded.css","edf1c47e155094e3e96eb93bcec3519f"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","92ca537e0b73725ce2b96a70a032c230"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","403a88f60fd9008f17a71ad763695a12"],["/lib/velocity/velocity.js","c55c1e377224d15c93b8c7dfe67f03fd"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ad92b3b4f142217a0616eeda08c503ea"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","dd157fd8e2256d7b5ef115930df6e635"],["/links/index.html","455e5ec0e0acfea192b8731a9e16cfcc"],["/live2d-widget/README.html","979501b822428f5d4b74eb9b7a7b4b5b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1f1fbcc21ce8baa3c7dcc768d882077c"],["/live2d-widget/demo/demo1.html","eb7102e0af03f8cdfc4d76a022a70548"],["/live2d-widget/demo/demo2.html","63602bd30118c5ddd4431446cab124f5"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6c13be2f0a8ba0b4c7cab86612849d2a"],["/movies/index.html","4cd79d125499f5211847f3b189c9c482"],["/music/index.html","f669ed5fca9a689065c525f72ddff9dd"],["/page/2/index.html","c43405cb518bcd08d0ec75197be2dce4"],["/page/3/index.html","b54bc9be078c8c0570eb53b22e5eb045"],["/page/4/index.html","826be7e145aee1412cddd3ddada69cae"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","0aa6b43639bb096570b4ae1130058a4d"],["/posts/15468.html","798ce55d423d0af08145f9311bc0133e"],["/posts/16107.html","484ef7bacf315ce3c9b702f5b46c6185"],["/posts/201e1121.html","f5d11027807225e767c37db75727c20d"],["/posts/20352.html","b533eb60f98b2a2508dde2b1bb111d42"],["/posts/21238.html","b24d44a7e76532153e3034bf49cf19c3"],["/posts/22281.html","f8b3c9453dbdade89bb1c361ca5d21e6"],["/posts/278598dc.html","e4fa4f0f4e75016f573fc10c919c1f52"],["/posts/2d063bc3.html","c502a9d7bb00acb265432945620b2640"],["/posts/30c404a6.html","b9d0d34189987d7a264041092b712052"],["/posts/51203.html","0d46f3c506e36c688fb6c3171ff25cd1"],["/posts/538e5180.html","649664ebd234018eb59daad6c34cd61e"],["/posts/5394fce7.html","a43268d0adf414130c00beb7703229e5"],["/posts/59037.html","d10aebf3a78f8a5cedb39d6d9dbd6525"],["/posts/60816b5a.html","f013de108096e2c4ba54871106f088d1"],["/posts/6163d4b5.html","3100482b9295f55d9906b05a420ecdb1"],["/posts/69978469.html","83ee6eec9ab7d0632cb6a7bfed34e857"],["/posts/6a752619.html","4b167a52e7281413e4dbc7a89e94583e"],["/posts/7fcb11a7.html","18b94129e31d3e5e86c8d67be3f792ab"],["/posts/8cc73e65.html","cf0c08a88cac709958ee23ff458bfb9d"],["/posts/9b621d6f.html","0f229dcd66cdec95222db0ae27772257"],["/posts/a530f7f0.html","3b07af4e98d27a4c360727d958009652"],["/posts/ae1da46b.html","6b284e02c3f2c97e07ffef171650b77d"],["/posts/beb5106a.html","0441502089066671ce9208dc64a323ae"],["/posts/dd845106.html","1409207a65c8a77763c01e95260be747"],["/posts/e35620b3.html","9b584e144bcb3ad63bd1086383fb35b9"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","61fd5cff3654871b8e84f651e63fc93c"],["/tags/C-语言/index.html","0475830ea9e0b61d2fd0a95a7c9233a1"],["/tags/C/index.html","f345b439b19d28af71da08c64b6a9fc7"],["/tags/C/page/2/index.html","5fc6ab7fbe7df1ba3c1b24f8db5c2d45"],["/tags/C语言/index.html","42082af18bc9fe89347dbe2b6469be12"],["/tags/Hadoop/index.html","b372d6254f43b1c9494031a7702af23c"],["/tags/Hexo/index.html","d1edba6048f3a429fa8ba4c7d6cf58bc"],["/tags/Java/index.html","5f722feb71ccd3d27749e6e90857ad98"],["/tags/Mac/index.html","8a2c1ebadf8811ba25e7249a81c1bfeb"],["/tags/Parallels-Desktop/index.html","c59bd1aa254e9b99dd236566c1a2a8be"],["/tags/Python/index.html","02150255d0d2909bd52f3d5fb2afb146"],["/tags/Qt/index.html","1a01b0afe1c23c9890e97e3d358dd7e2"],["/tags/Sql-Server/index.html","319917ad19a2bb3ca55fa864c4d86d7a"],["/tags/abbrlink/index.html","0f6e9b2908e232361c6c96ddc8d05dd8"],["/tags/index.html","57f4eb5467b10a02d3f677d950e99a28"],["/tags/冒泡排序/index.html","018003ce88276ec36e7dc9acdb8aa495"],["/tags/双向循环链表/index.html","166d21b8515ee51c1de6055596afd8e3"],["/tags/双向链表/index.html","4a2cf959e849f983b2382b7c9023d10b"],["/tags/希尔排序/index.html","7ef89823b3f21985ce6bd117064d97e5"],["/tags/插入排序/index.html","93e10bc7c8d716d5524b94424d26392c"],["/tags/数据结构/index.html","36c3ed97b54b858e8c42b2877b741a2a"],["/tags/数据结构/page/2/index.html","aba9766c471f504bfd5ace0d88ffa114"],["/tags/杨辉三角/index.html","de814bdbf6668641372ef59bae135abc"],["/tags/栈/index.html","e800859db1dacc9c98dfb887c465466e"],["/tags/类模板/index.html","bad710554b608a33a1dc42a4fb5724a3"],["/tags/线性表/index.html","ecb4a436b2de829ec5a9ff404c96bd3d"],["/tags/选择排序/index.html","3656d11accaf07c267f253c7d7c998d4"],["/tags/链式栈/index.html","0c57acafc902ee55014d5a1290420e80"],["/tags/链式队列/index.html","a0ab05c43a17ee4bb888b187bc9f87b3"],["/tags/队列/index.html","8fd9b7547b4ff8190c33c5416881363a"],["/tags/顺序存储结构/index.html","930ef952776f302b607d3507b0c03c31"],["/top/index.html","ea369cc49a98730f272c2b56075b5394"]];
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
