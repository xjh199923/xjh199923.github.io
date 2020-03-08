/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","ee47b31a16c756da94de1a8524e02ace"],["/archives/2019/10/index.html","1b2ea177862da14f52581da03cbf7369"],["/archives/2019/11/index.html","f735314cd4b09f4886988902a5fb358f"],["/archives/2019/12/index.html","052441e7ff18b9fb772bc9bd71d9c6a4"],["/archives/2019/index.html","699c2189535214c394a1c56ab200ebf7"],["/archives/2020/01/index.html","6b9257b0af240305d66aad0018ef5ce8"],["/archives/2020/02/index.html","e44c53eebaa5660328dcd9f570962f36"],["/archives/2020/03/index.html","87733a6646313180fcc3502e544da2d9"],["/archives/2020/index.html","fae660ef1e7e032ccd5cb363624e33eb"],["/archives/2020/page/2/index.html","9814cb0c7d46d41e7cf87bc2d13810ab"],["/archives/index.html","b853f58c4dd8228b83be2033b8d26f00"],["/archives/page/2/index.html","30d0f9f4dafcd2dd95d20ee88fdce6af"],["/archives/page/3/index.html","861be9c02c7c8e71a7fe8007c16bda97"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0c508fda1ee3393910afccdf43f3dcb9"],["/categories/C语言/index.html","3ba38278582708b6f3f7e8e029c44c6a"],["/categories/C语言/数据结构/index.html","7cf5b9a48e35cbea3d46b6f60f370e2e"],["/categories/Hexo/index.html","fe3418ef50b970751c0f67959e4c3b50"],["/categories/Mac/Qt/index.html","989b1f356296ed334eb473c53e3d14a0"],["/categories/Mac/Sql-Server/index.html","b89324ffcd3256568f05e8117238d48a"],["/categories/Mac/index.html","6c79100b897e6dc45394b64c812ac08a"],["/categories/index.html","9d600a11111cad87063376ee1a4a26c3"],["/categories/数据结构/C/Java/Python/index.html","c755c14b31110f3d780c4e3315cce6d5"],["/categories/数据结构/C/Java/Python/排序/index.html","9b745dfeb131e1be36da1ce74b5f0799"],["/categories/数据结构/C/Java/index.html","720c1805fe236abc1c3aff582159da5e"],["/categories/数据结构/C/index.html","fc167cd2d75ebeff7401659c140eed37"],["/categories/数据结构/C/page/2/index.html","8c32088a6f3f03ed93ed2d64aa40fa75"],["/categories/数据结构/C/双向循环链表/index.html","808079b71ff87b9770138b8ebb5367f3"],["/categories/数据结构/C/双向链表/index.html","17f4c2c47ebded1d9b7edd0c740f76db"],["/categories/数据结构/C/顺序存储结构/index.html","b946c725214d3a833a8ea97800c92c26"],["/categories/数据结构/index.html","b3c46af9f78ea85b2ae087c7ca7a50c9"],["/categories/数据结构/page/2/index.html","55fc9b5a03e9d47172992d064bdb1341"],["/categories/玩转Mac/index.html","cd8df773260be03c6da171225ce5461d"],["/categories/链式栈/index.html","b0e7a73e116476edcdfe5557ac80650f"],["/categories/链式栈/数据结构/index.html","506c95ee5a4ad7b14bdfbf8f26d72ece"],["/categories/顺序栈/index.html","dd05ba604a6a013cecf0cb202bb6ab34"],["/categories/顺序栈/数据结构/index.html","20b58de5774f0760dd5fa5f96ab87c88"],["/categories/顺序队列/index.html","ed4b58609ea962a89f2e803b40a95436"],["/categories/顺序队列/数据结构/index.html","e0a8bfa0a202ed674f8f76bcc06c2b33"],["/css/main.css","5378f9f9f1490aab44df41f6dfd1d033"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0915e8c1ad1614a1756b7eae8ffff38d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","21afdf4481d67c5dcdd29d4fbdf2c903"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","0757624856b17de5b18eadfb668679f1"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","094f815ea9c4bac4891b73fc9c5f3139"],["/js/src/algolia-search.js","be60d25b969a6e4c5a5dafc696dbd38a"],["/js/src/bootstrap.js","413235f4d350094f099c7ddc26f74473"],["/js/src/bubble.js","e018e0af143b231c67701a07c2f5f63c"],["/js/src/clipboard-use.js","97ee7b72eda218662600d0db54c83c45"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","87d1434aef14ee9681118a2738c3eaa8"],["/js/src/exturl.js","6655cb4e7e6fc456271ad2a25b0b542b"],["/js/src/hook-duoshuo.js","c3c46d15bf7c65a405e28d3f366c13ed"],["/js/src/js.cookie.js","627a9ed343fcba22120c634f4ce6f6da"],["/js/src/linkcard.js","728b10dddc37e6f3170bb6373368f88b"],["/js/src/motion.js","498dc032d8c36c429bc27870f46dcbbf"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","37a480dab563b496f7052b73a819247e"],["/js/src/schemes/pisces.js","7062a3183e253da2adad479dfe3e437d"],["/js/src/scroll-cookie.js","177c839b6d2f6243954b2f9a8e92fd4b"],["/js/src/scrollspy.js","e68a5b708de96bc8182ad52ccba6382a"],["/js/src/utils.js","19b0ef0a3290a93a617be75e3ba63c67"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","245dc70adb835e8acb72b285d8abbf48"],["/lib/Han/dist/han.js","866112098288ef4c79167c07784badd2"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5f907a55fe975be86568bc75b7175cd3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cdd449460a9a61780767c00935560427"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f8f1bcf3dd6044f2ab21dfdf5e82f1db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d57d2e7350d455ee0e68acc8d40ae6bb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","944bb97752af90f00ce882785ca3eb90"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3ca3da017dffb3f0c1bd37284281fed5"],["/lib/fancybox/source/jquery.fancybox.css","7cb698d629e6dc22dbc0b1bd8eb3f741"],["/lib/fancybox/source/jquery.fancybox.js","a09cf7e4aef45a4fc88d1adb50145cbb"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7fa218ffe10e609f8e70ef7504eba9d5"],["/lib/fastclick/lib/fastclick.js","6b7695e0cd64254276d5e5d76fc97f4b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","17011b7fcadcada79293387afab3eeb7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e6daee600b2091d83e083cbcea163184"],["/lib/jquery_lazyload/README.html","a6fd908473ef94b89fd0fe3687169620"],["/lib/jquery_lazyload/jquery.lazyload.js","a5a20b88cc84be75b52b1a73d5e72d99"],["/lib/jquery_lazyload/jquery.scrollstop.js","dc01e10b774c7752b64ea605c7b9f1fb"],["/lib/needsharebutton/font-embedded.css","b799819e19bf58d9b7fc3ca28028dbcf"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","b2fb022086dee3f22df7904d1e72a597"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","41ab884550a3e1fe3f1757c117c8f472"],["/lib/velocity/velocity.js","7ecdcea7aaf56d2abc2363dd679f1179"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","dd4535ae2353489792f9d2200e25ff41"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","6d43cb07680f11640ed0373e87f64389"],["/links/index.html","204dbc294825ba0b8136f441086412d8"],["/live2d-widget/README.html","ae1e860add08b3e2882c38a465560b82"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6e0c691bd22f9edb07d6df5f4e68b42b"],["/live2d-widget/demo/demo1.html","d9fb0e2b1076882807a65a47137eff69"],["/live2d-widget/demo/demo2.html","58dd1555da440280334f5cc2cce04c49"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8e273582a555871a4b91cefd30d99730"],["/movies/index.html","acaef810a33c373cf2529b1c65c99a77"],["/music/index.html","9eb477744693025dc06f1c202a0a579e"],["/page/2/index.html","471f362af0bc026d7b4c8514086e1f90"],["/page/3/index.html","ecefd8b5246f3446f70b71eae2bfaecb"],["/page/4/index.html","48182980ab56a38eb2a76a2d5b30e37d"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","d9d4e4a12bc543c528d41acc23bbd2c8"],["/posts/15468.html","265206e0161f05c82a63a8c7c9cdc6e5"],["/posts/16107.html","fa59e1edaa6f63c74cbe51e7496f602b"],["/posts/201e1121.html","6adbca74596fc60de0458337cc4112e4"],["/posts/20352.html","023f910a7249ef593383bd27b953d1f3"],["/posts/21238.html","958e6d7ec015b47389fa27b8f460da1c"],["/posts/22281.html","46f8155c4e03947b6545f2908ba1cd8e"],["/posts/278598dc.html","750e7f9da8ead4edabcc013c1ae0c73a"],["/posts/2d063bc3.html","3a163bd6acbe6e2040739ac0498ec214"],["/posts/30c404a6.html","b234901fab1f079814413598ab98b664"],["/posts/51203.html","60b003f015614be48d8b702e22a3b88f"],["/posts/538e5180.html","6432fe40f72454ba4003482265a9469a"],["/posts/5394fce7.html","0ccc7a49b39d276fb7c35d5f8f805203"],["/posts/59037.html","90e476cfb5ea836bc7d6b3ed6ac82bb9"],["/posts/60816b5a.html","acc5a60b0a65679ae516c317c5cd3cb1"],["/posts/6163d4b5.html","bee942d48d4b8ab99d613502086f06aa"],["/posts/69978469.html","72b6d1aae31d6480c80ef76e4667a070"],["/posts/6a752619.html","9ce9474611bc1d1c984c911aced2f668"],["/posts/7fcb11a7.html","6079cf9235fb629836ece2ac95097d6d"],["/posts/8cc73e65.html","56119f2c606e36ac7d5cd625fc3937f0"],["/posts/9b621d6f.html","1c5a832678b1c2b3eb12b5d1f2cece05"],["/posts/a530f7f0.html","961bc4cf6f5d991ae126d8e1bfe96a09"],["/posts/beb5106a.html","4cfd5faa6a6aa27acec01f053ed85e69"],["/posts/dd845106.html","00d08b9ae53069404ac5471e2747d313"],["/posts/e35620b3.html","37e96dc4ee3394850a76d74ca7c1c078"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","19fa4a7fbfdd5e77ce84bf8e151f8492"],["/tags/C-语言/index.html","c38035f9f3b8adc900161958bd1216cb"],["/tags/C/index.html","8071b1516019b6236fe05222bf8ec317"],["/tags/C/page/2/index.html","d16a4552d283f15a4e07190590f14376"],["/tags/C语言/index.html","4d603897953608d05d1806c3c7e08bde"],["/tags/Hexo/index.html","a9aef8a4c8b7191b4e0f59f432946d06"],["/tags/Java/index.html","a8ca5e97f317d7cc4366e1bb380c57fd"],["/tags/Mac/index.html","50adbe148994f6d9357844b6e6712ed6"],["/tags/Parallels-Desktop/index.html","6713591ddd1f0faf38fff705fdffb500"],["/tags/Python/index.html","ae236e8fe3b850f6697a44d364352670"],["/tags/Qt/index.html","65fe6296ac7abbd8f30ec6d143eca41e"],["/tags/Sql-Server/index.html","08b9014681f6c6ef6bb695fd07f390ab"],["/tags/abbrlink/index.html","c2fe660d5abd881f7fba0625fd7899e7"],["/tags/index.html","30f3d2d50ae2e7d37a8014abf0f97a68"],["/tags/冒泡排序/index.html","30effb59802a77cff1a80c8905d05f4f"],["/tags/双向循环链表/index.html","12740947c0f52ab8eddba55a3e4a9084"],["/tags/双向链表/index.html","d7485c1c3c9c9404472aad408b5de14a"],["/tags/希尔排序/index.html","25c7e4bde56134b3e058040da458335d"],["/tags/插入排序/index.html","4758025df57562ab7c8f28fc55196bbe"],["/tags/数据结构/index.html","dc362c8519e2d47f3029256644db72a2"],["/tags/数据结构/page/2/index.html","441f1c99236d50b583a9deb178db5f24"],["/tags/杨辉三角/index.html","20eb10b8160608312329680ea815cb64"],["/tags/栈/index.html","30edde4c919f3ec0ce3271ee8fd791e2"],["/tags/类模板/index.html","40e60c548f89f35c02db4cbbcbf644b4"],["/tags/线性表/index.html","b32eac524888e47c4aa7ab029c84db58"],["/tags/选择排序/index.html","b4d053e31cb6305cb972c9c07317e7f4"],["/tags/链式栈/index.html","131e6153bb281fb4049306aa4892abe8"],["/tags/链式队列/index.html","78660ff6b18bc9cca219f4a84e9e2e83"],["/tags/队列/index.html","3a9f8e264a34adcb0660ac4971914216"],["/tags/顺序存储结构/index.html","8ee6c8c8b4060452e0dd82ff3a00bcf9"],["/top/index.html","6ddc92deb3d45acf407a0b9389eb1ee0"]];
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
