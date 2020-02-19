/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7245d5563c8e5734d976b70d917e0c5d"],["/archives/2019/10/index.html","e74cd7ef64b38898798c77ea9e25ee35"],["/archives/2019/11/index.html","96685b5954baed7ed3de11e7bda5860a"],["/archives/2019/12/index.html","a9376288aebbc1cfb7910e736eb71bde"],["/archives/2019/index.html","9d5b2d4197721f8b76cb3739023f3b1a"],["/archives/2020/01/index.html","87ef9db7248960739fca3d5b724f83fa"],["/archives/2020/02/index.html","052a76598a312831e20a92e1e6f0b914"],["/archives/2020/index.html","2893ecde8327b7d151aee931145cc07e"],["/archives/2020/page/2/index.html","885f346eb6a61a1f5694cbf5e4f632c4"],["/archives/index.html","4b29b929f44280acd639a10ef1d25560"],["/archives/page/2/index.html","5d65e03643dc5a3585e5827d1db6010f"],["/archives/page/3/index.html","73c6ec9b152b9c1bea57c9dc29239043"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","222773e04c256ee40b1d1b513347e21b"],["/categories/C语言/index.html","ea98df7ecd12d5e0ccdb8868926c4fb8"],["/categories/C语言/数据结构/index.html","ff20a443e0bd6dac54e997578f47162c"],["/categories/Hexo/index.html","390e57f7c21dc573313aaf0db87f6549"],["/categories/Mac/Qt/index.html","3c5c45ae07f247acb22a05fad72ea7b7"],["/categories/Mac/index.html","a610101fa59ba76227b3982e1988c68f"],["/categories/index.html","2d42dceff5dd66c853b26d9df3b47389"],["/categories/数据结构/C/Java/Python/index.html","ce64480f65f4e4390dfdab618f0999ac"],["/categories/数据结构/C/Java/Python/排序/index.html","c2445d29b5bba1d1dda8bf82e3dfc760"],["/categories/数据结构/C/Java/index.html","8e6430d9a3b29cf27cd92d5ec2107165"],["/categories/数据结构/C/index.html","b6d9d8d8e22aa0a4065916bf6dbeb0a9"],["/categories/数据结构/C/page/2/index.html","346866d42a7324d3c8e9227b3ffa9144"],["/categories/数据结构/C/双向循环链表/index.html","fd9fa356aadd63fa0ca7eab9e926e810"],["/categories/数据结构/C/双向链表/index.html","eecf970d4622e6361fb6a20dc039018c"],["/categories/数据结构/C/顺序存储结构/index.html","bbccbfa964b886e2379ccb6de641dce7"],["/categories/数据结构/index.html","5ac5a1b888cae58eadfade50546985ef"],["/categories/数据结构/page/2/index.html","7233c271f0265273278174292f8c04ee"],["/categories/玩转Mac/index.html","c2a76ae15534b51fe23ed977443845b0"],["/categories/链式栈/index.html","b146f861032653e0f51108964fb7ec4a"],["/categories/链式栈/数据结构/index.html","dcbaa87687bbcf82e2322f1ab979d714"],["/categories/顺序栈/index.html","bdc414f02d2d27814876dd0dc245ccd9"],["/categories/顺序栈/数据结构/index.html","a854f2b91a24b7c61acbbcf1a0c41c63"],["/categories/顺序队列/index.html","640cf782192fcba37f66c46bf8b063ac"],["/categories/顺序队列/数据结构/index.html","ba06e84ba73b0269709d1ddeb4d5df2d"],["/css/main.css","96a7c1122f9673e0946d7ea7515e8926"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","67ab89024525b4bcc71fed0ad27e5d87"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","d12888e39c32fe1370ca5c9ddcacbace"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","35b04f46be4454092e7671dc9aa26f38"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","04c091e261bb5783cd21f955ead8a023"],["/js/src/algolia-search.js","ef5de184b6f539fc795a73fac218bf5c"],["/js/src/bootstrap.js","b7798adfe0e806ab040736ed99cb93fa"],["/js/src/bubble.js","4f77e00879ae609edc9ee31002d76172"],["/js/src/clipboard-use.js","2e6b4de797d2bb91f0e46a41d125c96e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","70068166db9aae143fc08779d29fa5f4"],["/js/src/exturl.js","0b8bf4f2f795b5b30063f8d577d35555"],["/js/src/hook-duoshuo.js","b3a1016f13afaad329d60af2ca683ac6"],["/js/src/js.cookie.js","1b876f05bb19a0c87a6b60700de6773d"],["/js/src/linkcard.js","2b228012d8f408155957b204a674ced3"],["/js/src/motion.js","9bf39833f359b7e3d814dc39aa5ef856"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","810674f963bb7443490c45b8cc6d72a6"],["/js/src/schemes/pisces.js","ff775d0d61572f28f8f02ed8ed606e59"],["/js/src/scroll-cookie.js","76ee4045d8694c15b4e33854481eb868"],["/js/src/scrollspy.js","80c6ccbce32feaa197eefe53191463d1"],["/js/src/utils.js","56753f7511380a8e154e8ff9ad7d5fe3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","d0b6c8785e8899b8534cd56506e57838"],["/lib/Han/dist/han.js","e56df612a2bcc530f4f401eb49c9c8eb"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","85c7b8956f9f06448ca8e3dfa2d9d871"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","76e3087e2dbae0ed57f18af1256e1012"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fa98caaf237de2091411b1d89b5c0dd7"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","efca98f1f0f21fb6e4c535f1b199b789"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a4eacbb5b1479b5209ed8e670af78256"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a63e7d89216e692470e39d9e6d667984"],["/lib/fancybox/source/jquery.fancybox.css","b87a9e77f3bb4488366b98e42a6d8c35"],["/lib/fancybox/source/jquery.fancybox.js","a9313e1a06198800f5b4b596b03803df"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","35569e020ce3e5fcb1df693ad6d4ec6b"],["/lib/fastclick/lib/fastclick.js","9b68815b4ae74dcd753719bf2c0f9564"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bef18847d847a1ff0f4e0e8d0fc03d61"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2a8caaa941d831cc4bc86dbfe3802f41"],["/lib/jquery_lazyload/README.html","d1e99c84c84f553ab468c9e7e95993d4"],["/lib/jquery_lazyload/jquery.lazyload.js","a72cf25e30e65d6fe4df5bf62091483c"],["/lib/jquery_lazyload/jquery.scrollstop.js","9a676031b6bf10aad19ca77fae63e349"],["/lib/needsharebutton/font-embedded.css","b4cf1f6134b66e3c7c9533506a0913db"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","013063402a1192e4ac8467b85410d3bd"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","777506a6e04f8a61861f1b6e6ac9ea58"],["/lib/velocity/velocity.js","8b2b017e9a86f470f2dbadff9340d787"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7de277ba8c0a3fc7750b4f48ecc9fcf0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","66ed2007b590664f03b642059f891a16"],["/links/index.html","06d8d84fb2b86750025ffa50eff1bb20"],["/live2d-widget/README.html","83d437426795eec7d17f66aba31317c6"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","f7f04dfd1703ca3f7e0adbed2acbe98e"],["/live2d-widget/demo/demo1.html","807a777d7da7fd275eecda17fbf1a649"],["/live2d-widget/demo/demo2.html","97f81e08e36d567be1e374435ebecbde"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","84efce65daa3b1a4b52ba30c893b60e5"],["/movies/index.html","9ab5081e2f468bbffa2964da54e113d7"],["/music/index.html","d2e3eca2387fca8fdd736a77dd5e4029"],["/page/2/index.html","cbc5e41f0fa313ae0b2ab041691e8702"],["/page/3/index.html","d361d06a9cdf481bb47c3cfb2b031f2d"],["/page/4/index.html","ccbe89925deebd0cc62adc773e38e1d8"],["/photos/index.html","324b4df0387d05bae7d15e1a51368dad"],["/posts/14311.html","873055740cd3e07387196bc12c6c5d22"],["/posts/15468.html","ef4c893b9b1f1cb327c681f17dafa89c"],["/posts/16107.html","142ac35e65bd5281429240a820e0bb3b"],["/posts/201e1121.html","f606e6fc02dd361c55a129494d62c760"],["/posts/20352.html","c2206793d8a73d3b25bd4474499fc95a"],["/posts/21238.html","feaeb14b69f489716e467ef77b400f8e"],["/posts/22281.html","9b2ba79eaa330b030152a84a03bef5cb"],["/posts/278598dc.html","6d85fac905fd49287c72954a5d3d8d5e"],["/posts/2d063bc3.html","e2c5d628c554c2c0de58b874e57ea4d4"],["/posts/30c404a6.html","992f0802eaedb8968a468e548660622e"],["/posts/51203.html","7a3b2e702d3693e0737ca0f64aba6d45"],["/posts/538e5180.html","f653577098edc33efd97c8cc5ced9879"],["/posts/5394fce7.html","8bca46db7ab8a4532e49c0884953bb30"],["/posts/59037.html","36c6b538e8b0e3377d9d8f5874f26053"],["/posts/60816b5a.html","690582eaa9eaa0be72be5820b2bcb0a5"],["/posts/6163d4b5.html","b74af9b55a622b1d4d5c4387a47122fc"],["/posts/69978469.html","76e5a33d8ca855143867ce72348a163e"],["/posts/6a752619.html","b4761754fd12f85e6ac7708513dc64f7"],["/posts/8cc73e65.html","9631ae0dd1d6ac9450a31d6a14f1995c"],["/posts/9b621d6f.html","45b8b7cb32fa22804562c70f9f89eec2"],["/posts/a530f7f0.html","585350dbc34cd0fb1ed10b0e79a45170"],["/posts/beb5106a.html","ecf055e30a78ae94992cb33df018a6b3"],["/posts/dd845106.html","05d732e7d3aa2e90f5726a3b846b125b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","cd95e9f5f839ba3366b38e5d1d53e446"],["/tags/C-语言/index.html","13f753b20344d847961309ed8a797eae"],["/tags/C/index.html","7ba3192d4a0136b2e7b6b5ad30dbd28d"],["/tags/C/page/2/index.html","1cfcaedd680fbcd619cba796ebc2b64e"],["/tags/C语言/index.html","caaddd9ac6378b9d56b2808ad9cfa5a7"],["/tags/Hexo/index.html","75f6fb77393f9925ef7330c84179d905"],["/tags/Java/index.html","30721623e5485d58d3efb25113141aa4"],["/tags/Mac/index.html","d731f5b1287ababe48e868faf3dcc993"],["/tags/Parallels-Desktop/index.html","c14703aa116941646909a9013b0cfc46"],["/tags/Python/index.html","715678bef8c37d6b496d5ea296ebab12"],["/tags/Qt/index.html","8bfb13a8405b51efb3557d287ab8cda7"],["/tags/abbrlink/index.html","0ebac905c9de367049526e941e524bde"],["/tags/index.html","18c062008276b336464ce421ccb5fecf"],["/tags/冒泡排序/index.html","b50f4c312331d15a7c6402270b00a58e"],["/tags/双向循环链表/index.html","fdf28d45ed3946327be6626e99819ec7"],["/tags/双向链表/index.html","9a68338d52cd09f007dfd565348533bb"],["/tags/希尔排序/index.html","ff09ae796b03062bebce4a22915e8b35"],["/tags/插入排序/index.html","9d63dd172d3dfec13ac55827b3704dd3"],["/tags/数据结构/index.html","a9bf85865361584c2bd71cb4fb198175"],["/tags/数据结构/page/2/index.html","a2f6857ea0ab21171604238ba2a581a4"],["/tags/杨辉三角/index.html","9c54bcbf2bb5346595ec55cefb976248"],["/tags/栈/index.html","0156b1ddc9f01610e0f34597392b181d"],["/tags/类模板/index.html","575c11e867870701479e576ba6553e23"],["/tags/线性表/index.html","b52ebf3990036c2f69210da14ba91273"],["/tags/选择排序/index.html","a2f9acfecc7bf42a14bdfe4318c79b12"],["/tags/链式栈/index.html","90dc9a15c73e9d1cced9293396a2a969"],["/tags/队列/index.html","d1ef8acf3d3c679bc193df640571f3c5"],["/tags/顺序存储结构/index.html","7a0a41506ae8e4df10b4ca7ddf1b4714"],["/top/index.html","9d738263d836e9cf9744c3ae95ac6441"]];
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
