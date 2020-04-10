/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","b6708f4f71f3f891bc0c08e75ef0be55"],["/archives/2019/11/index.html","c5d2788b32ed60b8102802a76cc38a44"],["/archives/2019/12/index.html","3d16d1de3ddc9d852e65e5ce13a6e43f"],["/archives/2019/index.html","9897833307b3a5375696218e8fc2f869"],["/archives/2020/01/index.html","0490e56d94a3fa8e973093e88cf4c7fb"],["/archives/2020/02/index.html","5a8283ea681c629837bfafef8e22e9f4"],["/archives/2020/03/index.html","1522c4bb59368e871690382dc70772bd"],["/archives/2020/04/index.html","316e441ce60613d715c54d96f8828f7a"],["/archives/2020/index.html","5f84e57feb77ac073a2494e9c7d5fd66"],["/archives/2020/page/2/index.html","ef0392db8533488978f88c84e1d61415"],["/archives/2020/page/3/index.html","7da00a5df9124d8eac39e8c936640520"],["/archives/index.html","4826d2b43e836eb944ab95323f88b0c8"],["/archives/page/2/index.html","5e0141271f58383e741ad71807738b97"],["/archives/page/3/index.html","7e8bbf285f18036c1356d83fd4946212"],["/archives/page/4/index.html","adadccd603c591e4d014c49e501ed334"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","ed3b07c3fb44c3b984f748b1f6357d05"],["/categories/C语言/index.html","1cd43af6a9deb61cb5abe4329c8380d8"],["/categories/C语言/数据结构/index.html","4c760a083aac2900b58334c5d98de0d1"],["/categories/Hexo/index.html","281ed3a7efc7b74f6d9424056a8f10db"],["/categories/Mac/Qt/index.html","cca567c4802a9ee20f153a0de2feff69"],["/categories/Mac/Sql-Server/index.html","620e402887123fa5199662b797045706"],["/categories/Mac/index.html","10445f7565d16b576302e6b62db06870"],["/categories/SQL/index.html","09af3c68f9e40511874344c79d8d0069"],["/categories/Ubuntu/Hadoop/index.html","ae828b66dac36a905f8967402a210854"],["/categories/Ubuntu/index.html","19666a0803a413f037c70741db27b82b"],["/categories/index.html","e7dbf2376774c79aa62a7bdf96c42b37"],["/categories/数据结构/C/Java/Python/index.html","ec5bbb2de3db321cd8d15576d49d08bc"],["/categories/数据结构/C/Java/Python/排序/index.html","e6759f62d1748659a10977b5f5f0e075"],["/categories/数据结构/C/Java/index.html","020a41605810600b5def56fe62c8d823"],["/categories/数据结构/C/index.html","4a902d3c5ae5104d52d661a55b73cd72"],["/categories/数据结构/C/page/2/index.html","7bb1ab010bce356752bf64e8fba4a201"],["/categories/数据结构/C/双向循环链表/index.html","684555b0e857b8e3bfc5d4b898310f1e"],["/categories/数据结构/C/双向链表/index.html","bc846a719649a2829ab47c99e3c57897"],["/categories/数据结构/C/顺序存储结构/index.html","38cdfc098333c689c698649705e23d6c"],["/categories/数据结构/index.html","5aa3667e20691b94f4915fc6162213a3"],["/categories/数据结构/page/2/index.html","246e2b6ff5e00be31836e47293145e29"],["/categories/玩转Mac/index.html","7614684a8ca73641aff943a249055cc4"],["/categories/链式栈/index.html","fb8cbcf4bbe92e7153c89a2669bff5af"],["/categories/链式栈/数据结构/index.html","e4523ad9c26c104c0822128882f8e627"],["/categories/顺序栈/index.html","6c66f6948faae17419e0e8fd1458bef7"],["/categories/顺序栈/数据结构/index.html","ec993d61839f9455a5fdb81a30a5595b"],["/categories/顺序队列/index.html","fef693738d4c122e056db14c5d0381f1"],["/categories/顺序队列/数据结构/index.html","51eb1ee845891c6dd5c3a2dd598d0e4d"],["/css/main.css","736f9a1a563ca3f8603a4c7da267e4f6"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","8926dadf891031f3e105274a10b9db97"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","27303497ce618b964ac5dcc95d8e5962"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c97f8dcda4a817595772137024f126f2"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","350b41f1815230b00a6249297b7aae71"],["/js/src/algolia-search.js","10d593bde5f23742ddf5883e2d721a53"],["/js/src/bootstrap.js","195887c0260c8c9c76c139c9740f9ca6"],["/js/src/bubble.js","8d68eba5b83e82430dde14d0f17111be"],["/js/src/clipboard-use.js","13fc65ccdad164bccd1823e80ffb4d2a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a2ff002acf96cbd13c5c3e4911d1e357"],["/js/src/exturl.js","7563c4d36daaf3fb4dc201e16f8ce072"],["/js/src/hook-duoshuo.js","5c3db70501499385e8a0682958bfd946"],["/js/src/js.cookie.js","fe5f2b4b4913aac3c0366335962ef5b9"],["/js/src/linkcard.js","ca72a06da73ef35bb4383b0c5758841f"],["/js/src/motion.js","f5ca155d318557e8bbc6a6b5438288ba"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","7920ae569b45eb0f20b295859d7ec0d1"],["/js/src/schemes/pisces.js","79639d6c5b6bf5b6f8ddfd13735a6249"],["/js/src/scroll-cookie.js","3a1ae9c2748dc62f9db5636171bbab5a"],["/js/src/scrollspy.js","3b4ac49a20ef7916617cb2ad8ba42e2d"],["/js/src/utils.js","5e23a49087f471ca5618b399b39835f2"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","3c081d143363dc83089f03dcfabfd198"],["/lib/Han/dist/han.js","bd84605a5a4607c1db85feb2f4c927b4"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","906a25f7095b769e72e0d253c1dc335f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","aa0dac80d22ffda1513244476705215d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b134d44fee73e8cdf986ff71e558b0ad"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","612979baf3131d8073570b13d071a7f0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","27dcfa360350d1978688d65026b1cb81"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a057bc106a54c3df55791411ad1842a0"],["/lib/fancybox/source/jquery.fancybox.css","072e5e9cd7afc9f4a667f99fe3c6f96b"],["/lib/fancybox/source/jquery.fancybox.js","8bf7d45532fe5dc9ce5187d0e102bb40"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","032ba82d66ccdaed2eafec5963b0750f"],["/lib/fastclick/lib/fastclick.js","a99d13fa79cd72b283822d99ceeebf24"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d20144a0946debe0711f2b5ac711b021"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7ff8baeabba371f5f875aeb14de0db72"],["/lib/jquery_lazyload/README.html","36ee3c3b2ea8886ed4e299b0224a0e76"],["/lib/jquery_lazyload/jquery.lazyload.js","c5838f9a26e220df19c3a608365d6d66"],["/lib/jquery_lazyload/jquery.scrollstop.js","cf3a36a4df8be35cfda8e4f599a9b78f"],["/lib/needsharebutton/font-embedded.css","3ea1eca2f0d2e9df751774f969f5a20e"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","26553f859c03733795704d280567d9e4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3e918f4be78d33e6c6d71f26a8e62652"],["/lib/velocity/velocity.js","c17f2846a161078101ac67cb50331add"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","04841d323de49ca3b4e91ea3354d1d76"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","6dbff52d3cd9ff24c8dc489831a43e6f"],["/links/index.html","ba98b211f58d5bffe742bb0df785d7d0"],["/live2d-widget/README.html","cbda36e450fb8d3ca53440278f39594a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","cfa2a3a2bf710ab0449aa4c04e374fbf"],["/live2d-widget/demo/demo1.html","15d70cb47222ee728dfd972ce4d31424"],["/live2d-widget/demo/demo2.html","40d24e60b03218b4e826d25e4ce68494"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1a1756bc2436e18b42d87da5671e738a"],["/movies/index.html","fd81b6c65ac6a4b31197845988eea34d"],["/music/index.html","27cb3e4a80ee1743b706c0eaed549b0c"],["/page/2/index.html","bff968c293d08c1f30d8bdc540ada025"],["/page/3/index.html","a76b42162e09d991af75ddca8f3afdb9"],["/page/4/index.html","f179f13618d69e90f8b6c24f6b1315ce"],["/page/5/index.html","85e1b820a60cbccdb22dd612865c521f"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","9e4c70f54f211b6b35648d02d0288418"],["/posts/15468.html","eaaee2da60f3858ef0e8fea31d69ea91"],["/posts/16107.html","fa55d7c00588b3bcf61ccd0a39bf1184"],["/posts/201e1121.html","8a047dbf18bb805a0de5d8f494484ae3"],["/posts/20352.html","12c1c7e9911690095992a0f7f707b528"],["/posts/21238.html","c636e829899722b2832adb34116ef14c"],["/posts/22281.html","c62a4dbb8d3388cd889c97bda1b595ff"],["/posts/259f9205.html","38f8858b0f16c94fbc6ef800633e1455"],["/posts/278598dc.html","c088deace110bc3f453a173939e0f474"],["/posts/2d063bc3.html","f32462f2401148516b90dc92253ffb18"],["/posts/30c404a6.html","e28441c784633db2726d4a393962b962"],["/posts/4d4e6c19.html","e03a0ebb704c46f8107e9d556cabd07d"],["/posts/4d712855.html","6d3244aee15e542f121602c2b92fbc1d"],["/posts/51203.html","91daf16c25437230a8057f050c9ad219"],["/posts/538e5180.html","c4b0014c6cb0c2d372dafad279293c4a"],["/posts/5394fce7.html","b326cfde67d04bbcd0d2051de0c04680"],["/posts/59037.html","e5ff04074620b38d96b66992760c7e9d"],["/posts/60816b5a.html","71bb9be6ebef8a1731f46bc05c2f526e"],["/posts/6163d4b5.html","ea38c9c2aad90bd5e943ed45493b7ece"],["/posts/69978469.html","25641be8e088a5aa033b2f9da8fcb247"],["/posts/6a752619.html","c339847dfd6b2c4ae05d1df6635dd8ba"],["/posts/6d7376dd.html","c6d8308d531c720a1260df8a98337748"],["/posts/7fcb11a7.html","6b0aa3183b38992cf81698cf561c75e9"],["/posts/8cc73e65.html","e89a3df8c3189041ecdc4d80d0135f60"],["/posts/9b621d6f.html","e9ac6df6d61747296ad3ff07101de960"],["/posts/a530f7f0.html","bad26bfadc483ad8ef1056c3b1649ef8"],["/posts/ae1da46b.html","39773d792d3a77d936eda0b1e4aa143b"],["/posts/be01953a.html","2a3021f62ad754344e3f326c317fc36e"],["/posts/beb5106a.html","0754270531e168673b7a85104dca00c6"],["/posts/d4b9b850.html","07904f84bcce1030b5ef71e07329ff92"],["/posts/dd845106.html","08174f469256272257e7451abf44a406"],["/posts/e35620b3.html","b618757e9505aad03e1422c6b65c9bbb"],["/posts/e4bced2a.html","985ea0bd0ed474164060af7ccdfef6ee"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","24d829671bac17c3df72844f57cf6898"],["/tags/C-语言/index.html","c6ef3f2b176b798de34af7a6871fbd84"],["/tags/C/index.html","7f924eed2907b153a43f65dc13b9da64"],["/tags/C/page/2/index.html","4acd0e84fa2f73c2ec23823e8aaf1a2f"],["/tags/Constraints/index.html","df1da449b1e2e5aa59557780fd59afca"],["/tags/C语言/index.html","81277252fa24bc1c6f4cd137f5c7866f"],["/tags/Hadoop/index.html","b7ce911c386c2e8df2431240c3c4ead9"],["/tags/Hexo/index.html","ef3188e25221b516955e118486c751c7"],["/tags/Java/index.html","ad2477b52bcc2b708e4170f5bddf3a1d"],["/tags/Mac/index.html","78552cf86f0b207a00777b6d5052b215"],["/tags/Parallels-Desktop/index.html","9896bb9d042739bd54787fb4c50621b4"],["/tags/Python/index.html","ac1ed0ddb090d8d1cb76f63732e7bf22"],["/tags/Qt/index.html","fab7361bb31dd798f70a8b416e39f45e"],["/tags/SQL/index.html","afbf6efc4989e3b7202a2ab5b574213d"],["/tags/Sql-Server/index.html","0b7baf712c7b99b1f1e3c4c2925face7"],["/tags/abbrlink/index.html","7907496afa30688694ba57d4543e6428"],["/tags/create-database/index.html","cd963384bc4f313862da63c941099567"],["/tags/create-table/index.html","d770e0f4bde9208f043ea2fe12657d02"],["/tags/index.html","47e88250d5fbdc18a66fc001ecefcd4d"],["/tags/insert-into/index.html","9999c6692bf90cee2ce432c02b42821d"],["/tags/冒泡排序/index.html","49d4df9cd01f690281368bf1ac15956a"],["/tags/双向循环链表/index.html","963e6b9069efe7d43bab40ab0b5648fb"],["/tags/双向链表/index.html","fb3e959785b7266f5bd406485f4c169b"],["/tags/希尔排序/index.html","f8cb4530c7f6834008ad48560a38cfb1"],["/tags/插入排序/index.html","c1c50c91b14482d959b8050a2eb509d4"],["/tags/数据结构/index.html","5ec3dcb8e454743acc33a60d0908eea9"],["/tags/数据结构/page/2/index.html","e64ebf6d4a3bb26e70da6113c933b40a"],["/tags/杨辉三角/index.html","a98b68e18f6f2f88dab216331076a06a"],["/tags/栈/index.html","9cf2f0efd9a4ea52ffdc11ba386de225"],["/tags/类模板/index.html","472ae4feee0c4df162d94c3389df146c"],["/tags/线性表/index.html","68e2d941f11bdb181a5fcd9d65b115fa"],["/tags/选择排序/index.html","a976db225d151ea9ae0dd28b6b6ef08f"],["/tags/链式栈/index.html","4d4500081375fcb2f7a63e31256479c3"],["/tags/链式队列/index.html","cf25f4b5959a21da52068261bce2bcca"],["/tags/队列/index.html","1a1672a5edef6d5f53a993f19895de63"],["/tags/顺序存储结构/index.html","38fa947464aee2258aabcaf76b69ce86"],["/top/index.html","b7afd8f3e2eab160ca45a217a49d8f24"]];
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
