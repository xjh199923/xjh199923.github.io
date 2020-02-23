/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9a0d87d8b27e1c9297dedb7828e668ca"],["/archives/2019/10/index.html","077cedc2fc5d586499ef809f6e472b20"],["/archives/2019/11/index.html","758ca8689d5ebe3f15f873abe1b666d1"],["/archives/2019/12/index.html","1af240e1b7ac87ce8e40aa7eee9738ac"],["/archives/2019/index.html","9d562ae773f5dd8b7b46eac20db7b074"],["/archives/2020/01/index.html","921022fc1ab4a58e37694e79d833d90e"],["/archives/2020/02/index.html","7913f81d503a5461a6309d09de6143b6"],["/archives/2020/index.html","9faf400efb2646790180c0dc4e073483"],["/archives/2020/page/2/index.html","0d64f5a58a409e8491ce060c33b74d4e"],["/archives/index.html","05552b62fd1bc3dd867ed8f1f87cf7ce"],["/archives/page/2/index.html","5872ff7562df4d85f989d7db3332cd44"],["/archives/page/3/index.html","a27d1c66df5f73ad4abf346358adcfc1"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","774ee5de73173545dbdb30076ddcbbf2"],["/categories/C语言/index.html","e5a2f90a11b845c4c89b8011fe94e056"],["/categories/C语言/数据结构/index.html","0959ce8de3e56304bb93b75dabab0739"],["/categories/Hexo/index.html","f591a6aaad182cee2a17468fac9b5a2b"],["/categories/Mac/Qt/index.html","8ab2044a37930d35905157409a06753c"],["/categories/Mac/index.html","ee981c9fdcd08e22ff074b9ab4cf38d4"],["/categories/index.html","ee1c7088a8494783efc84e2bba82e7af"],["/categories/数据结构/C/Java/Python/index.html","5abcc39c14b32e4ef351315b144613ea"],["/categories/数据结构/C/Java/Python/排序/index.html","5f05780f5cf14fb0193f4894585a8a3e"],["/categories/数据结构/C/Java/index.html","e8ccf126e83944b06eacce4694f3d3c4"],["/categories/数据结构/C/index.html","8b7ee560da5cdeb68550e1d9ed856f2f"],["/categories/数据结构/C/page/2/index.html","136d322136ffcec815ae29fe6c7c2c1a"],["/categories/数据结构/C/双向循环链表/index.html","b12192c621a8657a762de23fc248eb96"],["/categories/数据结构/C/双向链表/index.html","1e0653da5763b5fce9b27ede012de71e"],["/categories/数据结构/C/顺序存储结构/index.html","533d16be8875920a12d560d30db6ccf1"],["/categories/数据结构/index.html","f5a5c182106dd9de06ed14147a787ada"],["/categories/数据结构/page/2/index.html","662b307c3e6058d466ec4d7a8767c987"],["/categories/玩转Mac/index.html","5349e2e752e23a8370b8e72115fafea4"],["/categories/链式栈/index.html","e1b05a89d086ddc3b1f4c17e00ad7fe8"],["/categories/链式栈/数据结构/index.html","63270918db840824bd64b3cc88546794"],["/categories/顺序栈/index.html","6ae0b787018d2a4da20ca7cbdc3e2954"],["/categories/顺序栈/数据结构/index.html","0cea63fe3d4d7bdfd967aee67882362a"],["/categories/顺序队列/index.html","c4038b9b77e389e6bf795e7ccf38d221"],["/categories/顺序队列/数据结构/index.html","1c839920bdbabc5e55a3193cec590abb"],["/css/main.css","dc327422688b6c10fd85fd053b5a4d08"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","baac1d713d57c1d4b1d55d2c8ddb28a6"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","e9dc92bdebf8271a346594940927f271"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","461de370ea1f2555f8eebb33cdb984b0"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e3c884d2b1b97d022cb82e1cd3f03882"],["/js/src/algolia-search.js","05fb1a0b12415b1215617d31e29feec7"],["/js/src/bootstrap.js","261388da893bf5a10a685d5861442627"],["/js/src/bubble.js","156da7df92f8c77b93ea95e15133b689"],["/js/src/clipboard-use.js","67ee1e7411ddb0ec8ab630ed46b6e3c9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4a34754547a6c131f346da00f154de0e"],["/js/src/exturl.js","59bbd68bb5c9594b099240cc839e638b"],["/js/src/hook-duoshuo.js","62fc3c596689b061f5c685a06cf859c4"],["/js/src/js.cookie.js","20862de20de5832eac9a09b5d244d7f6"],["/js/src/linkcard.js","1b2395a70dc3052d21856731eb13a77d"],["/js/src/motion.js","cd82ada4140d54823aa035698691f385"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","09997625c16bc10424da0643fd678020"],["/js/src/schemes/pisces.js","7aa7646867ec4fcdb7413f637fbadb2d"],["/js/src/scroll-cookie.js","e9ab8f42521bc729308563e3faa730fb"],["/js/src/scrollspy.js","d775de94f6617e1c08d7d7b74cec79de"],["/js/src/utils.js","1483eeb875a89e410af4825b138efefa"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","e4586ac47d982703363a1c57e178521a"],["/lib/Han/dist/han.js","caea8c28dd217f1c1c8428a9fcb1415c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6e1f3e25101efa620efd7101fb70e3c2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d40de19a408ba25ddd4920ef6b425f9c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","abad75faf77c62d9a49c1d6e8a1ec881"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d085f41da4d0cc582e86d016e3bcf804"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","05090cfc136c97ac434ad40613c9cc7d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a77841e8ba4e95fb3f38c4379e5b9747"],["/lib/fancybox/source/jquery.fancybox.css","b32982396f789f0cd4f0991f6cf257c2"],["/lib/fancybox/source/jquery.fancybox.js","ab11e28ae4174ec15833d4f5c1e1159b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c964a91b9eb8eb656d39adc7fe73a217"],["/lib/fastclick/lib/fastclick.js","7fdcd3edddb57084ae772ca7e3c6480f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5dcdb457d238f5b610092d6c0c899e00"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","9a560f26dc7846a4466afa04ff163455"],["/lib/jquery_lazyload/README.html","41dd30d7d9f693836ccb917ec57f36b7"],["/lib/jquery_lazyload/jquery.lazyload.js","4ec0044e11059f92bdae29748a34c43f"],["/lib/jquery_lazyload/jquery.scrollstop.js","b4d24b1e59c859b86127c192bc8cd866"],["/lib/needsharebutton/font-embedded.css","c549546abcba59131c25de06cafcd3b3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","a03cade9d62e4fab24532aad45dc87d1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","92c6f079b5a4eb747322a704a2b38568"],["/lib/velocity/velocity.js","a23a6a09941b835d8b5131baae08e2a0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3dd0edcfe4a197dd86eb8a9f9b0004a4"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f7e506cbb47f5ebaec41e82a39421c4f"],["/links/index.html","c9f2c1754581d322aeb6baabde24bc84"],["/live2d-widget/README.html","62fc0ffe804d1ae67563bfdbb87b4171"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","eaa7f8026940f701dc57a018548c8d03"],["/live2d-widget/demo/demo1.html","685b6349b0fb69ae3f03a21e6018293b"],["/live2d-widget/demo/demo2.html","e1da8b40bae63f6631d1f1505ddb7652"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","74dd9f6c83f6ca8b62284e268ddb6f2f"],["/movies/index.html","780a26ba4d5a6838bda908ccc4b25fba"],["/music/index.html","b4e957fcd072d295d206a7ffe65b70d6"],["/page/2/index.html","adf023054c2890cc9e003755804342a3"],["/page/3/index.html","dcdf2d19edc4665b2a564bfe6707d88b"],["/page/4/index.html","4ff3ad8860637b3fe021c39f4de428b5"],["/photos/index.html","fd471091660fe551676be644c6c696d3"],["/posts/14311.html","15101b5abd87ee96c67c9363ab71c919"],["/posts/15468.html","b92d18be97c84e10b2317f52e97407f1"],["/posts/16107.html","5920837237c5c3bd7209b862e4166857"],["/posts/201e1121.html","a69f34c3e0ce6245fc6c4f03ad74c08b"],["/posts/20352.html","19e168ebadca5222d4c64545d302d02b"],["/posts/21238.html","376805b594620a10f5a7923fcedbc30a"],["/posts/22281.html","4b1aff59287e558ea0d67e233c42f15a"],["/posts/278598dc.html","bab214189f8199ff5885b0aac0cc38ab"],["/posts/2d063bc3.html","ad47fd2c02afa5d4f7adbd30cf2908e3"],["/posts/30c404a6.html","92019fe47d58e02bcd35dc21f8df3e83"],["/posts/51203.html","047bbeeb3074b1edcd21a2d9eb0916b3"],["/posts/538e5180.html","61f3079d40eb8a6e17fe767c4f536067"],["/posts/5394fce7.html","9060cbcfeff9430feb0e0c88f54d709e"],["/posts/59037.html","8eebf8bce771242e0fd8594c834e28b3"],["/posts/60816b5a.html","e4f2e60ec2ee9a8f2b9699473760854c"],["/posts/6163d4b5.html","c0479a4cfbb0c7bac7efbdeaf618bde3"],["/posts/69978469.html","a68d9505905d960c8f99de7805e1a7e3"],["/posts/6a752619.html","425f1c2390b2790f4ce88caddf7efcaa"],["/posts/8cc73e65.html","861c69c16acce769db707735c771da3f"],["/posts/9b621d6f.html","157b0c9140a0958170ea61f20dc7187c"],["/posts/a530f7f0.html","791fe522525bd0312a8ea14261f28fe8"],["/posts/beb5106a.html","e6f3279b0b05b10518f1dfe2a7d177f2"],["/posts/dd845106.html","b24fed32474472b064f8f201ceee2564"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6a6d283e5acb7661c8f49bf5858c81c5"],["/tags/C-语言/index.html","0a0cafb7d81ae205087c6c679df1f4e6"],["/tags/C/index.html","1b4908f64610e0dd686ab5a6df2eac45"],["/tags/C/page/2/index.html","67b9e5c5052f32106fca60181f68f18f"],["/tags/C语言/index.html","b13a22f966ada843e6ac930008af1a9a"],["/tags/Hexo/index.html","0421c78e8e1b0d066bdad9aad63f1441"],["/tags/Java/index.html","b7cfc41a9d93cdfdb6b2b6e06057f13f"],["/tags/Mac/index.html","0f54b949dd734c18cd922985ede314f4"],["/tags/Parallels-Desktop/index.html","86cb6b71454867eca13900634645fea3"],["/tags/Python/index.html","31987fafb53fe81043d5e775513e61a2"],["/tags/Qt/index.html","43c07d97f02acf27cda37ce94733ea25"],["/tags/abbrlink/index.html","c5b9f0669a9ae555da1a1c03485cb544"],["/tags/index.html","ee637f8439e899960865ceb3ce5c46ad"],["/tags/冒泡排序/index.html","299a334216e8e9585da9ec80422e20db"],["/tags/双向循环链表/index.html","f62f53075b4d79018c5b5f4e2822610b"],["/tags/双向链表/index.html","3344de8c24d593c222e4909ed6d5f195"],["/tags/希尔排序/index.html","f8f4d578f7236a780fbdc107f68c80a0"],["/tags/插入排序/index.html","7a3892d3c73d19662dbf5c633a1f6d12"],["/tags/数据结构/index.html","83abd202af7a852672f4b0f6b89bbf29"],["/tags/数据结构/page/2/index.html","49fb59ba36bb20eebc32014ef4aa2139"],["/tags/杨辉三角/index.html","e6e3e95f7992b611fe9767e3942a6367"],["/tags/栈/index.html","6127cd98b78981a4bb4c032ab658302f"],["/tags/类模板/index.html","ae4c4cd46c7baf104d28cf2d9ee0091d"],["/tags/线性表/index.html","0e8e2640d40a846bc348f3d21cde8919"],["/tags/选择排序/index.html","79db00d3b4a77cda0ca180c63f47ddc2"],["/tags/链式栈/index.html","125a244e37d39ec8069921b53cb10270"],["/tags/队列/index.html","4dd11b61995087a2766df6501da9dc50"],["/tags/顺序存储结构/index.html","13ccc5cc044e92b0cc631ba4ac67abd1"],["/top/index.html","aa9dfb2659856230a853e496f194a976"]];
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
