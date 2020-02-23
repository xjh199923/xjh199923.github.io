/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9963e3430525ee455b5c8fef53cf6529"],["/archives/2019/10/index.html","c61942898f28a44fa00943921d314454"],["/archives/2019/11/index.html","63c432697ce6d3be49f9973da269393b"],["/archives/2019/12/index.html","66b03cc2f16a0c5c736538521dc5aad0"],["/archives/2019/index.html","365cc3bea7f1d567a9af7850b91f48bb"],["/archives/2020/01/index.html","9fa87334334bdb1ca50d3a21a9689be8"],["/archives/2020/02/index.html","629320cf972ff282a2f32e4ab1ffb2ad"],["/archives/2020/index.html","6ebdb02aa711070a7570ceba4f82147e"],["/archives/2020/page/2/index.html","38935ecaea7d4bf8720e1e4dd8f2c3e1"],["/archives/index.html","4f875ec19d89ccbac9d0ee3e2b0eb1d8"],["/archives/page/2/index.html","c5172d6988a2e87ce4e454479a3397c0"],["/archives/page/3/index.html","3c51bd1215bba76f157d42afe3c1040e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","215380e124af84bf1fe28c8292a8043b"],["/categories/C语言/index.html","636fd3c4c1f0afbb0d12116d8b1c2125"],["/categories/C语言/数据结构/index.html","7120ddbc93fd4e9fcaf76fba8368e6fd"],["/categories/Hexo/index.html","fa283727e825a5ce478ace7a717c0963"],["/categories/Mac/Qt/index.html","4e796b285383b805fc437f1c8e02fe70"],["/categories/Mac/Sql-Server/index.html","3d3e3b5d47e5c87515ea880c5c938219"],["/categories/Mac/index.html","8d4c506fd8cf0060df2d9e61c19d2a7a"],["/categories/index.html","d4f4f1e53880caa5ef5a9d09a3c41331"],["/categories/数据结构/C/Java/Python/index.html","dbce7248ba1af8ebcb490c64c83054e5"],["/categories/数据结构/C/Java/Python/排序/index.html","6b3fcb8f65a4f96e8ccca5f346b6cd68"],["/categories/数据结构/C/Java/index.html","a2434ea67a3df0ebd0bc43f750b6953a"],["/categories/数据结构/C/index.html","50d3bd5413307ba147ca7343496a60bb"],["/categories/数据结构/C/page/2/index.html","496bcea7008695748b427b557d046ee9"],["/categories/数据结构/C/双向循环链表/index.html","7ee71c61a56fbc3d9ab67ad203b122e6"],["/categories/数据结构/C/双向链表/index.html","c9a0d8544b7d47f8d512e1fcf741f64e"],["/categories/数据结构/C/顺序存储结构/index.html","d57ecf536b9b70c3ea0988dbfc4f8c5a"],["/categories/数据结构/index.html","c77bcc5ae04fc6ea32cb14f80eb56ac6"],["/categories/数据结构/page/2/index.html","81089ac4936d4e342f5a3abddd0e8b3a"],["/categories/玩转Mac/index.html","d6ded2ca5d9a1f1c8a75db94f2a61876"],["/categories/链式栈/index.html","a3e474858b6576ccde2395c45d4a1c2b"],["/categories/链式栈/数据结构/index.html","68c88d2e5d2e651f62f63c09238340fe"],["/categories/顺序栈/index.html","071d69c356f72189780949f96028f712"],["/categories/顺序栈/数据结构/index.html","ffad2f0e6d9d879bd29727fd6b42f3ba"],["/categories/顺序队列/index.html","227dfe8983fdac568bf0ccbdadacae8d"],["/categories/顺序队列/数据结构/index.html","04bc3a1977f5fb922a98ad7f7c1f675c"],["/css/main.css","d926753b31c33e25b82164698c8f12ba"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","56484314229525e62844c9220c8b8e48"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","1e12e7e17438e2bf5d65f32aab819f6f"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ae71c2cfc767b5b875a52a90787cdb7c"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","748b6d3c67d6fde5f69718e8004eb3d8"],["/js/src/algolia-search.js","de28e32d887d8991a4b915ec495f0acc"],["/js/src/bootstrap.js","3cc9e2b1a6a3b14f28fcd3c65ecd9596"],["/js/src/bubble.js","387a272270f77123a0a78dd370b827c9"],["/js/src/clipboard-use.js","36ff7d675843e2762292352464724de2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","dfdc640f723c471c57cf340deedeef91"],["/js/src/exturl.js","7ae5427b9adbd8513972f09fa94e8655"],["/js/src/hook-duoshuo.js","307858a8d442adf7b8fd1771f4160c70"],["/js/src/js.cookie.js","f72ece9638cac9f93f16b740c3d970e2"],["/js/src/linkcard.js","5a961bbc3be6d22cbb51e546bdf7b2a8"],["/js/src/motion.js","e6085bb8bda3f626301273eb68b603e5"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d9976db5f64b80bce0ac1dbedb83b293"],["/js/src/schemes/pisces.js","8f53312e1277499e0dbea1a714eba7d3"],["/js/src/scroll-cookie.js","f9affc1289590536e54a990db4bc290c"],["/js/src/scrollspy.js","b4ce824b302d8141076781acf5a8143b"],["/js/src/utils.js","925e2ac17edf83fa65f9782f61ddce02"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","7640631aa6949f039057339bd306efb6"],["/lib/Han/dist/han.js","1a25cde22ec7e40b51ddca637a326c95"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2c0b23be62a6cc7efd2d6c3dd5bbae14"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8eea8d6caf383f15964da8208985bed2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2e311b06dee5c57d92c8800c31da28aa"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a9ec6819ff3d6d7f3608825540169650"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","62d8773d205eb6e253b5c80b759c02e6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","dd5073bd25c1873eb52e14ff8e5745ca"],["/lib/fancybox/source/jquery.fancybox.css","0bf370963c4ce822f671b006ed92a1ac"],["/lib/fancybox/source/jquery.fancybox.js","a59b93c1115b5607dbd3e521b7afbb91"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d75f088ddf6f8b11c7af3328ef324b5a"],["/lib/fastclick/lib/fastclick.js","36af206e50cfad4958324cf5085fd24b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","27e698f6b5441a6b5894337c3bbcb583"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5abbd559ff56710e96f9f528a5a6673e"],["/lib/jquery_lazyload/README.html","d4462befce89c88f630388c6b3c43009"],["/lib/jquery_lazyload/jquery.lazyload.js","27e1ddd56f63f24aab486b5e688b9bbb"],["/lib/jquery_lazyload/jquery.scrollstop.js","793d9d5f2ad3f6d99d39755b26216686"],["/lib/needsharebutton/font-embedded.css","adedc4b13d744cce6427b203d33d119c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9ebbfa4ce75fb01a699b1c8351f537b5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","67ef38466f1e176481abafb48a8c4b9c"],["/lib/velocity/velocity.js","43106192d1cc47ad5ad2c42e2008eae2"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","d540d77cba9dac91783366c4dfd808ee"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a152bfd5aea9ad55e23235ba2fbc8b1a"],["/links/index.html","2e93e30073423347b388f50ce03fbd96"],["/live2d-widget/README.html","82826158cc3e96fd3e9e99ec9642071c"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","c01c633619963c0acea47fd6f5f620d4"],["/live2d-widget/demo/demo1.html","69b8a970543ef075dc6cdb1bd533d2b1"],["/live2d-widget/demo/demo2.html","584f706aea16c4284ed299c2c89f6d14"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","bb912365d494a7d0ee1c67ee5e555b03"],["/movies/index.html","565968beed5e80a800a5971c4d79d1b4"],["/music/index.html","73dab9323b4c83687294f444f054bf9b"],["/page/2/index.html","c41004d87d80ffb653563814aad041bf"],["/page/3/index.html","1e93236138c52e8de55131b8ce653cd3"],["/page/4/index.html","92d93edb406c22cf39189561b960427a"],["/photos/index.html","eaea87f5cf7be41656a58e422e85a736"],["/posts/14311.html","8754c675893a71aeba551f60434c625e"],["/posts/15468.html","892dba09d40743b510ea83191eddea36"],["/posts/16107.html","e86b6154bda84bff51e768d74fb7c88a"],["/posts/201e1121.html","e68084e46d09ab96f9702cb04a5febcf"],["/posts/20352.html","964b9a703baf4e3f0dcba06eeb3d34e6"],["/posts/21238.html","564e32da92da9a8cf29b939a01144201"],["/posts/22281.html","a9aa58af85b8a5036e5a7d4dc2fecc13"],["/posts/278598dc.html","12ee5e0e66699144c95b1290fb0f4aed"],["/posts/2d063bc3.html","80732be01176685250e6aecec0251578"],["/posts/30c404a6.html","6dbbf11486ea15f6f4f69dc9fee0bcfc"],["/posts/51203.html","e0d20a81bbb94492320d51accdbabc16"],["/posts/538e5180.html","01a9dff97a1bbe952869bc5733b1e6e9"],["/posts/5394fce7.html","9bedc5893f58cf4011a423d6fc5ad1f0"],["/posts/59037.html","86655ec54ace2e3a16fcbcfeb9eefb8e"],["/posts/60816b5a.html","4f30f7e3570a582e5865903f9347e06d"],["/posts/6163d4b5.html","3c088f5d3a06d0ee49b5aca3c541f650"],["/posts/69978469.html","8a782d7dd5337496847333437d42f3c7"],["/posts/6a752619.html","d3b77a64ffee5690c8d7dd2cb755af99"],["/posts/8cc73e65.html","472551e1aefeab0d9bee25d8d6e4d72c"],["/posts/9b621d6f.html","5077a9f3c5e32475168fbd6e5869a8e6"],["/posts/a530f7f0.html","9d5ed0241bc48a95df23aa26a863a618"],["/posts/beb5106a.html","5d67d0e939cc3203b437264a1caec166"],["/posts/dd845106.html","75701dce3249ba8434d1b063f1706cfc"],["/posts/e35620b3.html","08a4ccfc48c527cb2a737266e540674d"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f98baaa4f58f9350e7f30693cce55878"],["/tags/C-语言/index.html","f4105b3027b42c75eb25057e6408821a"],["/tags/C/index.html","8e80275c4e805c5257c9778f4bc83dce"],["/tags/C/page/2/index.html","04975526f0125ad58ac5580cf605dfae"],["/tags/C语言/index.html","5f561b024edf90e30c57fcdb7c85ffb5"],["/tags/Hexo/index.html","28bea2148b3c0d93e2f906d5e76901c5"],["/tags/Java/index.html","56bbddfe7651cdeda5c000ab284af7f3"],["/tags/Mac/index.html","e6844d643359b418b52eca9a51399ff3"],["/tags/Parallels-Desktop/index.html","e3b76a490871359dd1603a13b7142b72"],["/tags/Python/index.html","0accf701751fa4466a8705aec29ea1dc"],["/tags/Qt/index.html","1a2efc086a1a2803d81004b3df489645"],["/tags/Sql-Server/index.html","6471bd89d226537a0104e4fab5542b52"],["/tags/abbrlink/index.html","ccee2c43555cfe036de1775d6fce8165"],["/tags/index.html","2a612642e21161e02764ec80d33f0947"],["/tags/冒泡排序/index.html","8a00f85918833e50c2db31c2f5899cd0"],["/tags/双向循环链表/index.html","f928bed8559ba6dad089d40cf387d617"],["/tags/双向链表/index.html","5d829d7017b70f90452b57ca5816b7e5"],["/tags/希尔排序/index.html","092ddee6d45d68a9fdd21b90b8f32dd6"],["/tags/插入排序/index.html","3d7c0597ffacbddfe513d4a7840c7678"],["/tags/数据结构/index.html","92ed9a0310652ada0f70307ea053ff25"],["/tags/数据结构/page/2/index.html","9fc56c89eef8a48bf00e8a856feb0876"],["/tags/杨辉三角/index.html","894b8128723d5be334cd08fd91fd37c4"],["/tags/栈/index.html","490e570f793e1bf40dd68074c56e5a1d"],["/tags/类模板/index.html","488ea578acb492fbb6ae41eab6c419c1"],["/tags/线性表/index.html","b7471575f00935ba98895ee63dc48652"],["/tags/选择排序/index.html","683e3236326e85e7b4fe1380b44b722c"],["/tags/链式栈/index.html","3604bd87ee830c2cac58849cc055478c"],["/tags/队列/index.html","e1518602bf00c9964666e430aa34d060"],["/tags/顺序存储结构/index.html","74b953a5bd0f7e6806ce2fdfbefa1e21"],["/top/index.html","dcb89a93b1ee3f795d95b399f79f1324"]];
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
