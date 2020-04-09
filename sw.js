/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","a43d1e54a0b1d14f770a85f453744018"],["/archives/2019/11/index.html","feabfb57a1f9c3f1106db0f3a4082770"],["/archives/2019/12/index.html","0cc6ebd318fb56e08edc9ba8b625761a"],["/archives/2019/index.html","00c2bf6531212bc2c82be1ee46d09c0b"],["/archives/2020/01/index.html","4bdfc81605e048fc4b20128820c82a7a"],["/archives/2020/02/index.html","f6e884774bdab6900f4a7fa27e5de25a"],["/archives/2020/03/index.html","ca02b01b58afd3befebe8b5df58e7384"],["/archives/2020/04/index.html","e51450e297e95e9b66b9c7253194a2e0"],["/archives/2020/index.html","32c1602bc142f44997809dce2991dc90"],["/archives/2020/page/2/index.html","b64220114d478387025d0060cceb1dd3"],["/archives/index.html","646e863d09adf867ac1dd86312a5f888"],["/archives/page/2/index.html","33f3663b0d05752f1b2c21a7dbae867f"],["/archives/page/3/index.html","c40ed72f2275377fbc7f341179f83012"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","064884f84e8c6b23c9ad0c47179a9736"],["/categories/C语言/index.html","a25bf683c8b5bca3554050a3b322d4a3"],["/categories/C语言/数据结构/index.html","5dfa4c7d2a89b4747d7e0ac378f36892"],["/categories/Hexo/index.html","d566621c0a3b6d881029471ff014e1ff"],["/categories/Mac/Qt/index.html","785bcf9db6268c2c447400ba8bf2594a"],["/categories/Mac/Sql-Server/index.html","e67cca02881ba13c8eee34f2e9e42be2"],["/categories/Mac/index.html","bf3e2465f24f9f223e198a1e6e7e6673"],["/categories/SQL/index.html","7015639264d4bc4a70bf4d7d085a0298"],["/categories/Ubuntu/Hadoop/index.html","25d400d6ddd88a9abbb0b8c61c3e471c"],["/categories/Ubuntu/index.html","6f3df897c19252e2f8a503f925bb33ce"],["/categories/index.html","b1cb72fe7dffaafab328f53cb2abe3f1"],["/categories/数据结构/C/Java/Python/index.html","63af249ce469c49116589aaf9506cc7e"],["/categories/数据结构/C/Java/Python/排序/index.html","d90d3618f443d2bbfc57588104ef3823"],["/categories/数据结构/C/Java/index.html","874d1ec6d917819b75fe80f58a65cec5"],["/categories/数据结构/C/index.html","84b296f75f3c6567755f6ab52d01e322"],["/categories/数据结构/C/page/2/index.html","d2e7c9dfaa39df51c1b137bf26435f22"],["/categories/数据结构/C/双向循环链表/index.html","29dd9435ed50970b4ad7c12457852e76"],["/categories/数据结构/C/双向链表/index.html","03ffe50d412b6698ee835ccff7247692"],["/categories/数据结构/C/顺序存储结构/index.html","a4aaa99f4b18374969a328e1dc01dd4b"],["/categories/数据结构/index.html","d9e5750f9eaf0593725caa59811fa7b6"],["/categories/数据结构/page/2/index.html","295c81b15ad3a6afa8b3de3bc77415ea"],["/categories/玩转Mac/index.html","2568badc0a9651b51fedbd545df8ab19"],["/categories/链式栈/index.html","324c819e1957441156af2346fd075383"],["/categories/链式栈/数据结构/index.html","30fb39b5d0c363e8701576392113979e"],["/categories/顺序栈/index.html","00910a159e495cae8a519ca42e94f125"],["/categories/顺序栈/数据结构/index.html","5f92513c0875e202d122aaf861f34f6e"],["/categories/顺序队列/index.html","6ff0e72de663b6754c6fc16143cb3bd0"],["/categories/顺序队列/数据结构/index.html","51ec81a3ae0037e6c3d823a0c5dddaea"],["/css/main.css","533cacbb176baa53a63ea5a3f0e0defb"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9999095484fb0ae8e6ab47fb0485d5b5"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","4dfa64c5ea6f0559f9317f07023eac0a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","cb8c354465b4b343386658b86735a9c3"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","1fdf2c350cbdff4237441cab09718a99"],["/js/src/algolia-search.js","a6d271342828d2c26f9dab0dfc7ea6ce"],["/js/src/bootstrap.js","2020534dcf322a9d9d4fb639a35a1744"],["/js/src/bubble.js","382b8962dd2a739ca117b9ad30746b07"],["/js/src/clipboard-use.js","6198f04e8daec7090b3367d5b8addbe9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","922a5aa603a2ef826926e9e219c646dd"],["/js/src/exturl.js","80e04b2e568840fd8d94f0bf052b5cfd"],["/js/src/hook-duoshuo.js","2a7255e0ebc03b5bbeb68757606b49ad"],["/js/src/js.cookie.js","d183f9ed0d9aa232d2e5d541b70f94ce"],["/js/src/linkcard.js","664a3abce6339a8e408cfaff2b1cc8a8"],["/js/src/motion.js","46010af90d27a7dcb2be6a4ba841c350"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","bd7f2c250144d0aa9bea719509c3908a"],["/js/src/schemes/pisces.js","86b417ca457e1864c8ae677dc97075a5"],["/js/src/scroll-cookie.js","3735b000f59f035168e53a37e752f079"],["/js/src/scrollspy.js","e6bdbd04a10a659e93aab20634a30858"],["/js/src/utils.js","b351a960ed1ae7ae55b59c82fd78d76a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","a140f4a61fa0f5696b96b1110052f55f"],["/lib/Han/dist/han.js","21a911cd2d2eb1857f16c6550073e083"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","290172183421a5e190817bc78a2eb600"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","697277705f8cb086a025e1ccc5e2d85a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","30b60a66f9bf1925f28223cb784702c9"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","26cd4f936263917f6d574136ab5e572d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","091bce4b64f9cd6414bb193407656ae2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1c2c55544e2d413597e6b9aa82571c28"],["/lib/fancybox/source/jquery.fancybox.css","9d44ea79e43a710c2ea538e332f38d90"],["/lib/fancybox/source/jquery.fancybox.js","788768f9e13c331147d7f8b974b770db"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d324436ab91de496360d22d401c5cfaf"],["/lib/fastclick/lib/fastclick.js","852fa467dccd31cc57efed4d4caa6353"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2c1384174c7d42c28210febf4b2d135a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6d0ec5033b897d5adc70a05f6dba8f1e"],["/lib/jquery_lazyload/README.html","c5f0c6e1483d647ff0a6bc5731f06d99"],["/lib/jquery_lazyload/jquery.lazyload.js","971e641a7ada97d1944e55efee979cb8"],["/lib/jquery_lazyload/jquery.scrollstop.js","8b3b19b7c3f6fa5a9e105f1dbd3f15a9"],["/lib/needsharebutton/font-embedded.css","cc169a2b4e9102f43249fae904f255a2"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9b083ed87fcbaa2a27cdd159917b68d2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5aae455305b5726a121eed1d87b942d6"],["/lib/velocity/velocity.js","c20b0b1f292778f6adec4730e32f3a44"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","68ebed2892d61044cf517614024540f9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","32b0109fc1a641e93f9e8154515cc8cc"],["/links/index.html","d6e6ce9886326bdc253df52a6a0d326c"],["/live2d-widget/README.html","cd81f96f81108c13a7f537e06f04a5cb"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a0d43e2649442310ff61a5962ec3760b"],["/live2d-widget/demo/demo1.html","d8330ca7f4ece4d35a1e2010ecc7d3a4"],["/live2d-widget/demo/demo2.html","0b8dfa2c1f2da99adba39cddcbc9ecda"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","32129151cbea5f14d13cefeafc942a4b"],["/movies/index.html","23230f889e63ae85d5ce1fe364992577"],["/music/index.html","3298bf8aedd1bb5e0dc67b950c93a4f5"],["/page/2/index.html","bd75184d5de9f208ad79aec3a2c1a83a"],["/page/3/index.html","19941d77ce2be353608ec96479c21379"],["/page/4/index.html","dafba4bfeac4a7578ec607fc1cdd7584"],["/page/5/index.html","63f66bb0c885e2e03dae103e261be614"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","9298a3237cb33131722ee6510a274390"],["/posts/15468.html","013c5fcc82ec92a4f23b938020ca5aa4"],["/posts/16107.html","9e3c01ae1be67681080057dd2e44701c"],["/posts/201e1121.html","7cd31e41a7901aaf5fab9aeb029bec58"],["/posts/20352.html","d18406349a121b248ac8cb45a4206408"],["/posts/21238.html","27b0a8655f5f427b530e51feb93f56c9"],["/posts/22281.html","ecf31e2d373cf289c395a6f45944ebae"],["/posts/278598dc.html","8b88bce8bfbf169fd03f32d679781189"],["/posts/2d063bc3.html","cf8e43a3b145e453b88602d78af1c5ca"],["/posts/30c404a6.html","861ba28376b2e100aead54dfce3ac34e"],["/posts/4d4e6c19.html","9a81b7a83d5831722eeafd2e374b230f"],["/posts/4d712855.html","df081f0c401e93b27aade1fd70be498b"],["/posts/51203.html","9a79675868559127780a7b5da081b65b"],["/posts/538e5180.html","cc20661a962c3b0aaf6fbdbad721821a"],["/posts/5394fce7.html","249b5947b72470b3e21131d539ffaf56"],["/posts/59037.html","05e0a0a3bdb612307de4a630c5f4503c"],["/posts/60816b5a.html","dfc2e7f7672661d6486e47bc2fece880"],["/posts/6163d4b5.html","d92a0bf8de72ee48ab443ca29a3d91dd"],["/posts/69978469.html","d76df82eb6bef3f601df26d18c1fc33e"],["/posts/6a752619.html","95dc6d02005233dece8f136a4c1c9d1d"],["/posts/7fcb11a7.html","f9addf119d727221a8bd15ce81f4bdea"],["/posts/8cc73e65.html","b73b38374807e7cba456934cc6bc6036"],["/posts/9b621d6f.html","68b1857f0598d597da9ceb445ab43000"],["/posts/a530f7f0.html","d3e52f28140842be2fd16dfd60871aa1"],["/posts/ae1da46b.html","61578e95dbc7572ddcbfcf502c36fefe"],["/posts/beb5106a.html","829723a42e562bc7e321c1144a0099d9"],["/posts/d4b9b850.html","327de3457b1da6b5605b08437699a129"],["/posts/dd845106.html","c4f2fb21dd094744e59ead7977a8058c"],["/posts/e35620b3.html","9e6aeb8d6019e93334f400bafba932d6"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","797b211b659f9b14700661821e4b73d4"],["/tags/C-语言/index.html","e5c6474c078b61cffb655d890aadce6d"],["/tags/C/index.html","7cd18910b20581beb19f7b21e0d8b836"],["/tags/C/page/2/index.html","d2ff48397c6cc2e6c2f4c7d205efdb61"],["/tags/C语言/index.html","23877bf4082551d62926a213914394c8"],["/tags/Hadoop/index.html","3f9a6a4dafb4f6094cea86effe7ae627"],["/tags/Hexo/index.html","4757863c2a0a94898f8c2d1ba2d908f0"],["/tags/Java/index.html","0b6963f22b43dd0da1d2ff4df634fbaa"],["/tags/Mac/index.html","7d811998005fca86d8b839e44d944bbe"],["/tags/Parallels-Desktop/index.html","8ea916b0333be7b29e13036d71bd9ce2"],["/tags/Python/index.html","79100c8f2d0e3f95dcb802af23fadde4"],["/tags/Qt/index.html","15b2ae23490e8b547a9ff37b160f67eb"],["/tags/SQL/index.html","2bb3ed50c927ccc60fbe4b182a73815a"],["/tags/Sql-Server/index.html","1696ab370410989bd1bc9a35a5fdcb64"],["/tags/abbrlink/index.html","2aaa1250932f4d8ccd686f8312a3d8a0"],["/tags/index.html","c287a27fb4b1ca47be062ec2e52ca017"],["/tags/冒泡排序/index.html","fb366e916f2ca304eece53984146ef2a"],["/tags/双向循环链表/index.html","c64bf39a1301bf22cc0ef9cdf0f4a611"],["/tags/双向链表/index.html","d1e0c2a5b24fe1af70f608abc50d6c58"],["/tags/希尔排序/index.html","6757afaa31ab43c8b563c3a31bcfba2b"],["/tags/插入排序/index.html","e6ee0d245fe0b4526e749dba5a791056"],["/tags/数据结构/index.html","50367e1e36340a85dd0bbc52093ab7c5"],["/tags/数据结构/page/2/index.html","24effbf705853378a9ced905c470f5db"],["/tags/杨辉三角/index.html","19b5a218105a677dd72a415273891c82"],["/tags/栈/index.html","a9d8030d00fc65229ed35c8b9204ffa7"],["/tags/类模板/index.html","aa84459ea3bccce776d37505c789bfa8"],["/tags/线性表/index.html","ea5824784280382cc2c69d2748bc43a2"],["/tags/选择排序/index.html","223c69ccf738f7e41a642362c96b632d"],["/tags/链式栈/index.html","c27a54ee803f8f308cf5ac95df3895b2"],["/tags/链式队列/index.html","90718e86ce934483b457e8dc1f9deea1"],["/tags/队列/index.html","5ea933faf8e9c966fe455a1166fd987e"],["/tags/顺序存储结构/index.html","055536a363762a76dd0450a7dfc547b0"],["/top/index.html","6f0e342044742100003812753f27dd31"]];
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
