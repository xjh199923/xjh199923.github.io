/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","42ec07a3f51b6e2000b5317be41f5c5f"],["/archives/2019/10/index.html","cf98af00d9810c53d75a4421abb62273"],["/archives/2019/11/index.html","1093bb123dd6eee0fba1dd868e9eb077"],["/archives/2019/12/index.html","6ae1790a6665729c11cf5425b46d6e9b"],["/archives/2019/index.html","386140cac3ce9edf0415064b0769a90f"],["/archives/2020/01/index.html","8e5099ff3630cc30364f7252c462f9ef"],["/archives/2020/02/index.html","ce31122b601424fb5fdcdb5ce499af48"],["/archives/2020/index.html","60293e0766aabd7a7caee0d4405b09a5"],["/archives/2020/page/2/index.html","7bce31802bb127365b793d48a0c0dc02"],["/archives/index.html","fecfa6d72a8ed27c67d95c01b7802cf5"],["/archives/page/2/index.html","c2b1323054bd9e98f6916cb82c52e2b6"],["/archives/page/3/index.html","9ef454b34fef103a72a63d6c65fcec81"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0c8e51943f34fcb498ee9b8b696d4d05"],["/categories/C语言/index.html","1809ed0184fa71dbc4aad13e437676a9"],["/categories/C语言/数据结构/index.html","74d37ac670d3b0f54b8ea304df0b024c"],["/categories/Hexo/index.html","949b9d8832258a9b7ae6a3c76d10847b"],["/categories/Mac/Qt/index.html","807cba7c5309c32bbfe108f295930c6c"],["/categories/Mac/index.html","1a10737b93ed37271928d6362556a9de"],["/categories/index.html","8d2ae66592d9cc88ca7baa43f322f336"],["/categories/数据结构/C/Java/Python/index.html","4dd5cc461e33072bcab741eb24122794"],["/categories/数据结构/C/Java/Python/排序/index.html","cec2455fde8a0c92c685b6ee568b9913"],["/categories/数据结构/C/Java/index.html","869e1eb2738862dbcdac502e5e1574f6"],["/categories/数据结构/C/index.html","f1e63acac1aa1e1867f47b60c8ccdb10"],["/categories/数据结构/C/page/2/index.html","8316d27d7dd97de222699d0a76f1cfc1"],["/categories/数据结构/C/双向循环链表/index.html","c1f08ac8f6a1ccb5ff586d8a5e95487f"],["/categories/数据结构/C/双向链表/index.html","3cca417e3376c3cad612a3f4d147d942"],["/categories/数据结构/C/顺序存储结构/index.html","1dd411f48a03276d0462a662d5c8285f"],["/categories/数据结构/index.html","a4784ef6acfd3bd2802a325fda189468"],["/categories/数据结构/page/2/index.html","bfd0196b3c0dcb4a89cba53feb5658c8"],["/categories/玩转Mac/index.html","817ee2ac8293da987eea257c3bc71857"],["/categories/链式栈/index.html","12fae0d3b4b080b1dcb77dd8aab1975c"],["/categories/链式栈/数据结构/index.html","ec479b2b20e2fb17f7d5e5cacb2a122e"],["/categories/顺序栈/index.html","cb68a4971158639e5f2f32690222001a"],["/categories/顺序栈/数据结构/index.html","917cccf0f63724ce33ee104228c490d6"],["/categories/顺序队列/index.html","22699c55c53fb9289782072d185ba5a0"],["/categories/顺序队列/数据结构/index.html","7f001408a6fc44a94b7776039cf96523"],["/css/main.css","45b48bffbd7e996727bbeb33c6c40782"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","879dcc4ce81fd53afa9ea2f1ec161fd3"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7f348c3152135f6d8c41a1d92a0f54ac"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7f6915d0f1b3cd231c5693699e61ab4f"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","f49d1c1b16d1f29d7446db9af85824bf"],["/js/src/algolia-search.js","cc5cc74566362c519dbea295158151d7"],["/js/src/bootstrap.js","9d6654022e2638b869548895326355fb"],["/js/src/bubble.js","bffbc8fc66fd367d316fdd75db5cb9d2"],["/js/src/clipboard-use.js","6323c950fdd82dfc3312783daa1df517"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","fdcec94b24fac54ce1b37daabf15d2f3"],["/js/src/exturl.js","098d362d23f827ea14914cf19ad5d1c4"],["/js/src/hook-duoshuo.js","488ee10b5273496c5622519b6d9f8d73"],["/js/src/js.cookie.js","59e55f3b35e8e5c62259866e4f5b31dd"],["/js/src/linkcard.js","d34f79336f2a59f0d80cb146b8572a2b"],["/js/src/motion.js","9e0255e11b882e0b60e72a1711abe062"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","864debbee16730ac6bb5440cff37bb91"],["/js/src/schemes/pisces.js","abba0e6ae0e604c0490c796a3590cb86"],["/js/src/scroll-cookie.js","df68ad2632362379d5412c992e8c987f"],["/js/src/scrollspy.js","a808945ae3321983b867cc9b2cc4a672"],["/js/src/utils.js","43393fba3f8e8207471b0b018c412ee5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","c36f38cb13afaf41a71109f324f683b3"],["/lib/Han/dist/han.js","4e14f63aa0ce85fbb8325b35d71542b3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9b1d93d611a2673d531e8eec0fea788e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","619d92987b1407679d0243b4caf0834d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e271ec5000bb5767db5f92c8e3e22553"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5e0e276568cff1589408dc74057b7d21"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","25f2b2147ae2e73fb1bf4c31dd045e8e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5a535d960227a8ccf6c923351635f3e3"],["/lib/fancybox/source/jquery.fancybox.css","036d82f335453602f00f1030e0462ae1"],["/lib/fancybox/source/jquery.fancybox.js","c13af52b2999e2a6c1e22e9bdad42f72"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3f5399450803adc150657d48cbcc613"],["/lib/fastclick/lib/fastclick.js","a5ce29547ccfdd7288bd39ce76af89df"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7247b80bb83b01f587085b57f657dc5a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7d151487a5fb29b06a28d322be743f7a"],["/lib/jquery_lazyload/README.html","abd92639c1ef1783a3f3b2ca0a34ca88"],["/lib/jquery_lazyload/jquery.lazyload.js","21b0acdbc8ebe7e01c4252d9a3cf276f"],["/lib/jquery_lazyload/jquery.scrollstop.js","2b99dfa831d810fda067f810a4d3ce60"],["/lib/needsharebutton/font-embedded.css","105e5cbaf1e11aac576cec87e64cb86d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","75513482250cdcb7a94da9909168aedc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","cf366d6da3089c7216f8ebcf6849b349"],["/lib/velocity/velocity.js","ba31d29a0ab90fae2e1ffcfe0affadc9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a990cf56beee90baa28b034efff68530"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","15f712946b0a461c560e4a9797ac2beb"],["/links/index.html","2b291273ab465c6297ecc548c668cd2c"],["/live2d-widget/README.html","0bbef5153e0f1a57f819348d19b245ea"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","7192ec74367cf6d974b3d853d405c2d7"],["/live2d-widget/demo/demo1.html","196c056f93fc1808a1eb029ac2c07278"],["/live2d-widget/demo/demo2.html","e1c4ad9e20d662ee30a718bad5826c03"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","5781d9894c3ea80c05ee331d39ed47d0"],["/movies/index.html","d1bba672c8a1f1880ca5487fb7e4d8e5"],["/music/index.html","c847a004044b000fffd0b31a31076492"],["/page/2/index.html","137d634cc5f24690d9ba555bbcf89c02"],["/page/3/index.html","96062783b838ca7bd24c2a2898154e24"],["/page/4/index.html","de67d1cd3c5ec8b6ec1cacb89eebd892"],["/photos/index.html","c615cedb4008a821b0e3e1bab2b000ed"],["/posts/14311.html","6296df5e649c0b1fc6fc825ed995d59e"],["/posts/15468.html","094a01177ebce591da11a7806879b316"],["/posts/16107.html","22bcb4dcbb4b7224c35f0c8915b74814"],["/posts/201e1121.html","12e21164120a82fd08b0a45cdf84c1ec"],["/posts/20352.html","a731dee4aadc5dfbb80d03f334bf0640"],["/posts/21238.html","fe67e2c8832ab4c34bed630ceba251d7"],["/posts/22281.html","a32a160d1dfd35dacae332c098df6a82"],["/posts/278598dc.html","ea292eacc3d797a9bf9794973ef8341c"],["/posts/2d063bc3.html","5e95716360fab56073852549d838e959"],["/posts/30c404a6.html","5320ee82059ce683c41b7a0bd43a3e1a"],["/posts/51203.html","a13700d7994358b13b861483c73f1d5d"],["/posts/538e5180.html","070ef26dae647688d113f389959031ea"],["/posts/5394fce7.html","226bd370ec587843dd4f637edad3118c"],["/posts/59037.html","38bb003b80682156668229ff8b246fb7"],["/posts/60816b5a.html","5c2e677f834d0b73517b3ef00a0794b7"],["/posts/6163d4b5.html","94b342059a79f633cbd60dd73387bfd4"],["/posts/69978469.html","d9861ace01e9871a3a50a77e0ad3f449"],["/posts/6a752619.html","2a0936b0b6929859965e61e3b995e4fa"],["/posts/8cc73e65.html","2e06fe1081f7f9f20337b1a31d150f5a"],["/posts/9b621d6f.html","19c393d264aa873d24726eac0f1193a9"],["/posts/a530f7f0.html","6c6896bc8eb7a3f9526d273d72ab5a82"],["/posts/beb5106a.html","4c8c7790cedd556fb63d40b1176dff40"],["/posts/dd845106.html","fa1e1009b7a4cfd045537600439edcc0"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f030b09a9c70a3f45cbb7e1154438e25"],["/tags/C-语言/index.html","6e5821699538401aad74a428323640e8"],["/tags/C/index.html","e2a5ac7cc32c0b8397c62ac9a8af0736"],["/tags/C/page/2/index.html","f1983606355a12b7c8167e044469d26b"],["/tags/C语言/index.html","a600f4f1c008131ffdf208937dd44ef8"],["/tags/Hexo/index.html","c124173e0ae2f2d52eff3b1011a21775"],["/tags/Java/index.html","1c390b354a01b7d6e50c1d9f92c467fd"],["/tags/Mac/index.html","0c5378b7ae05bfdbc39ad82f56cb0c66"],["/tags/Parallels-Desktop/index.html","0ad896e3571609c7b8e6594bd10f2eef"],["/tags/Python/index.html","f84e9fef82549519f7bdfc68d3a91261"],["/tags/Qt/index.html","a3df67046be39f9f91fbf7112ce8c5e2"],["/tags/abbrlink/index.html","b03f52576e5427449f81e4f1ec36fb72"],["/tags/index.html","600c965b1e3fe0b387f14713402cccd0"],["/tags/冒泡排序/index.html","c1101ee230847132d58ab15e3cf8de38"],["/tags/双向循环链表/index.html","a93f44016b8e2383f060caf15b50e78d"],["/tags/双向链表/index.html","dcade0a4a4f70e6772e893537151ee95"],["/tags/希尔排序/index.html","fe63f865dd8bd64b33d73b17bc1c7465"],["/tags/插入排序/index.html","cf1c33ee6d2c616bc3ace32f03614583"],["/tags/数据结构/index.html","13aebf0110ebc7523b269f2a64a9d6a1"],["/tags/数据结构/page/2/index.html","94ab82d92a1bb07f84369e23b40ff021"],["/tags/杨辉三角/index.html","24d073f6bc4b7a49af6aaea52f2e67cd"],["/tags/栈/index.html","41910607696868cca4bbb5b2755a7a1f"],["/tags/类模板/index.html","704515b249f620508f23f4c06548c4a3"],["/tags/线性表/index.html","627e2b9bf713867844aa9515e8b60fdf"],["/tags/选择排序/index.html","2d4db791e78061c6325bf2d4385983ac"],["/tags/链式栈/index.html","856923bea9cf6018a1518a5a3b5f7e40"],["/tags/队列/index.html","9dafd0c695036ad27983348859c995af"],["/tags/顺序存储结构/index.html","5da971f7e80b526f77e4f478a76b6ae7"],["/top/index.html","734381a713d00ff38280f309875ec74a"]];
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
