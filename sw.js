/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","59db2e6f8cd06048bf9ec3d1527b8a67"],["/archives/2019/11/index.html","1a1d7fd808058b91a9bad82f5e2de4db"],["/archives/2019/12/index.html","611cd394744767bb7dfa6cfbc55a56ad"],["/archives/2019/index.html","56c7bb58e8b921c9e1d64f22370636e0"],["/archives/2020/01/index.html","db1d5f8bca13be50e030b93832e8aa23"],["/archives/2020/02/index.html","658710e0069314d9f87a8f6dc5542dfd"],["/archives/2020/03/index.html","ded203ed94c8e5e1a8ea68d0645a47f6"],["/archives/2020/index.html","8b3d5366ada838f5f09148d3c1453374"],["/archives/2020/page/2/index.html","158bfa0728fd385a42b5a4ed5b186447"],["/archives/index.html","f12ad0c3ab2618c42b1391b374ab4204"],["/archives/page/2/index.html","eb9efec9bedd8b54adf6540163766588"],["/archives/page/3/index.html","305468961fc441bd8b26a06391e854d3"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","96dbb62c508a3eae5a6a27c690496628"],["/categories/C语言/index.html","e0f2a362d1fbde89dc954f357bc95db4"],["/categories/C语言/数据结构/index.html","e22bb3ddb82fc5815ce55c1a3d858a68"],["/categories/Hexo/index.html","08c8dfd4c95151caa69360a7fac71bd6"],["/categories/Mac/Qt/index.html","a695c7f36f8cdf59db3af146109cacce"],["/categories/Mac/Sql-Server/index.html","d742dd61714a181549da0783b3ecc9f1"],["/categories/Mac/index.html","d61e2fd0e148068efef45ee4b7085fb4"],["/categories/Ubuntu/Hadoop/index.html","12f6ac572618db6888d50a1ff15e00e2"],["/categories/Ubuntu/index.html","c26f08df15cc121ba5257730d18276f5"],["/categories/index.html","17b54385b95c39d8cf45260588180f35"],["/categories/数据结构/C/Java/Python/index.html","4b91430d598ecb0e7a35ca2efe7b6e03"],["/categories/数据结构/C/Java/Python/排序/index.html","907a5d427da1a4aa769549729e315d65"],["/categories/数据结构/C/Java/index.html","d51c0bb38ecec61b21e2e2192cfcb3eb"],["/categories/数据结构/C/index.html","49c345545026430a660a85b742b98c85"],["/categories/数据结构/C/page/2/index.html","6978236ea0d1f349b7316bac0a467c0d"],["/categories/数据结构/C/双向循环链表/index.html","12efb705fb71d56d5036d8b1a5da6726"],["/categories/数据结构/C/双向链表/index.html","d16ca8ddbc58c6e055aacacdb54b832d"],["/categories/数据结构/C/顺序存储结构/index.html","9b900574de2ad09049988a9dab3c51cf"],["/categories/数据结构/index.html","19d7bf2dc06ab89f8b86609dc3dacfa2"],["/categories/数据结构/page/2/index.html","8dfa678f4340951c901f09c718431600"],["/categories/玩转Mac/index.html","987e90ee0d3aa2ec62a94898edbbebf6"],["/categories/链式栈/index.html","5ecda0625b929abcb7fa66f25d28505c"],["/categories/链式栈/数据结构/index.html","b0b6e70da75dc16a54271f693c67db0f"],["/categories/顺序栈/index.html","d3acf0899b686ab4fca2df93f3a429a1"],["/categories/顺序栈/数据结构/index.html","9ea8cd68043ab976554095b383cf5c24"],["/categories/顺序队列/index.html","a346df52159a37a759e2e25c038d5e1a"],["/categories/顺序队列/数据结构/index.html","e69f5f5ff07200faa0faa2b76dc0bf59"],["/css/main.css","b20e18648ad9a6297d54e458fe52a4e8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f8cf1367e2971747e23de0cf4df7e71d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","5851c222475845d6e9342d06a814967b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","e350b82aa14b3552cd1827eff18eca6b"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e9a6649137814b4326b83e86357ac848"],["/js/src/algolia-search.js","e197847fa1f6ff6b97351490fe7f6240"],["/js/src/bootstrap.js","8b0786cb2d9f7231f6a61ba08f481b93"],["/js/src/bubble.js","c3097f67e3425d392e7ef9b19db3e998"],["/js/src/clipboard-use.js","f93743fa6cc4c84ec1678ae717cb6ec3"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a79a3e7980bba12adc4f1ac0f7847640"],["/js/src/exturl.js","44ac10cdbbd7db8eed00b000feb14756"],["/js/src/hook-duoshuo.js","789fdda248f616e5dbe3f2df47ffc651"],["/js/src/js.cookie.js","699c16dcd13c33505aa2c0532c41bd99"],["/js/src/linkcard.js","9f753277f249cd2191e718398b1d16bd"],["/js/src/motion.js","f56e8cb43fa52c13f87ac4e34a569740"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ebafc1847823cda6aca39f5625fa5afb"],["/js/src/schemes/pisces.js","1e2adafc02ed5a6abb216ace52476d38"],["/js/src/scroll-cookie.js","9b04d3cb3aa1d0528823e6722aa5392d"],["/js/src/scrollspy.js","4160d6c957cf1640de8d0b3a955435b0"],["/js/src/utils.js","1a2135a12394e8fa1e094927ae7fae7f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","ec5f4bd5d79c7af6ec7949c8e43178bf"],["/lib/Han/dist/han.js","b9e78edce1ea75773f4e50627086c00b"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","be8ede8b98dcc3b91d9dea10385cc9aa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a954aa3b3cb48090038895bd3a088f4a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8d7efbf62c32176694451333eebcf188"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","410f62b8e9c1149d4274b4ed43cf20ee"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cadc57e73a5340fcb4990bec161f9891"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","18b8953c4a6121981bf6e70bfe9b8d38"],["/lib/fancybox/source/jquery.fancybox.css","7b866d0367155b5f04d14ff19650fd62"],["/lib/fancybox/source/jquery.fancybox.js","2ab12e86b5bf296dc9bdce18b2e65046"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9e747967aacd8b2410730d168979d1d3"],["/lib/fastclick/lib/fastclick.js","744ef069df381e6abe251157d52de224"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f2f370cfa57eb483a97a1846e4fba69c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3a057cd973f110b284d150e6ecc62a79"],["/lib/jquery_lazyload/README.html","7f9c121ee8b4e4cb5b527b2d2d22eb77"],["/lib/jquery_lazyload/jquery.lazyload.js","62e124aa245d1fafd1ce84cf98f8ff0c"],["/lib/jquery_lazyload/jquery.scrollstop.js","0b16256eab48d23bb0ba28700ed8be8a"],["/lib/needsharebutton/font-embedded.css","ede31fe24461e93a0168d34e2907a88b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","a3a70fc6fd205298d426e31cb6741b1d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a541faef9ad31c7e42f990c893559117"],["/lib/velocity/velocity.js","22e49fa6105f393025f1b10999b6d358"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5682337eda46185b0869629227412d4e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f7914a61ea16e9cd090f64c079dd03f4"],["/links/index.html","0b8e0a96bded7723e256f8f86869e243"],["/live2d-widget/README.html","e7706ca155cf2e5907ab3a820dbffd95"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5d7e6a8e79a9c3d2f12dabdc9caae76b"],["/live2d-widget/demo/demo1.html","f348799f728488e65270e26d95ba4b47"],["/live2d-widget/demo/demo2.html","d557dc3cf3fd902e32b8e0dc4deabb64"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","4d2d578bca9eee3c59736664e877b88e"],["/movies/index.html","3b0760f042002a018de1d3d7671b3c07"],["/music/index.html","85ceebba214cf00bfd0f8b231415b8ae"],["/page/2/index.html","82b801f6084ef4ff3124838ad27cfc8c"],["/page/3/index.html","5a1c338d62500f196356cc57f1a6f63d"],["/page/4/index.html","e7cef3f5ac55b0202eccf723447619db"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","7f2875018747405ae521dc20774bfd3e"],["/posts/15468.html","b14c5c37dfb9c851e4469e4a44b306f3"],["/posts/16107.html","3913aba22d8696ed39af1d64d4bbde56"],["/posts/201e1121.html","eea5a03de05e3fea96cf479d34e513b2"],["/posts/20352.html","9bba6a9fd5481c77e9288202c28e8dc2"],["/posts/21238.html","232f2a1fb00a0e204514f1521991a129"],["/posts/22281.html","92b8f75627909e4186c6fabb3dcbbd4f"],["/posts/278598dc.html","f4f2132664b7e782d1e69e06512f80bf"],["/posts/2d063bc3.html","0e1a0f4324b769cccffca0bb1be9930b"],["/posts/30c404a6.html","66892fd22bcc93d2c0a5549853fc7789"],["/posts/51203.html","e774d56902397e8fb7a21aae2aa13033"],["/posts/538e5180.html","b59245521f1b6708233615708e650758"],["/posts/5394fce7.html","5671d331226fe2ee72f5a00efc713892"],["/posts/59037.html","2070cc7d8b05fe003283e31daa680447"],["/posts/60816b5a.html","51b9e5f4aef2a9c75d61b19146996c50"],["/posts/6163d4b5.html","9918ad4fefb657fbc899f5260b4a2b57"],["/posts/69978469.html","5b1ff43947fa415179745f3ca522aa23"],["/posts/6a752619.html","cdd59241164e8e29376e77cb605d05ef"],["/posts/7fcb11a7.html","dfa86afcdd177d86021065f6cf77acda"],["/posts/8cc73e65.html","794f571d71ed6c06b8833499b42d4d53"],["/posts/9b621d6f.html","c640da73a554dda8bbe56b72eab2d148"],["/posts/a530f7f0.html","6a83008e8dcb5a5a67307d6fdff088bf"],["/posts/ae1da46b.html","587880ddfedc04a0e10a6bc21ea0dba8"],["/posts/beb5106a.html","ce0811cf3d5e54fd65cf99b112b84d83"],["/posts/dd845106.html","14a63eefcb668184eb190635cb5fb994"],["/posts/e35620b3.html","885516650355c3390a9cb9d0ea841aa7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","48776fc5e76f4b3def83bfee5b6f7a91"],["/tags/C-语言/index.html","304f803403aae539ebdf21b0d1369265"],["/tags/C/index.html","b0fb1405aecba039ba6d2bfd25dd5abf"],["/tags/C/page/2/index.html","6088a490b271c17390a274ba0be2a7ee"],["/tags/C语言/index.html","536ba589539beb4a71f5c89b1368f8e2"],["/tags/Hadoop/index.html","32c826dfad44747968abe9996146c38e"],["/tags/Hexo/index.html","424d8e4415750236336ebdd164a21090"],["/tags/Java/index.html","e624e6cbbf49cd9598b41a5f1c25b253"],["/tags/Mac/index.html","d53eb9b954d40f16185fd4b5cbf7ddfd"],["/tags/Parallels-Desktop/index.html","a87ac3ef0aeda67b18b7de546b71d8aa"],["/tags/Python/index.html","4e5acdc6657205b2be09ccd07bcaeb50"],["/tags/Qt/index.html","292392a6c4bc542834b1e5ee808f94a9"],["/tags/Sql-Server/index.html","37ab4682c4f86e79f8d4eb04125af815"],["/tags/abbrlink/index.html","4e1d54fe88c347dc4c74e2439c1435f9"],["/tags/index.html","e61fe7dc5ba4e00a12d51517c0a2c4b2"],["/tags/冒泡排序/index.html","2cb3f2f0df464a87064a07668c62b93c"],["/tags/双向循环链表/index.html","3a3c0533fb0e9b0803db78218de03980"],["/tags/双向链表/index.html","4a4337e1bdeb6267e092189a5645c9a8"],["/tags/希尔排序/index.html","3c9d9f8674db78728efd468459c7ed86"],["/tags/插入排序/index.html","e5b0e78f9a97f7512315d28a2d9185ef"],["/tags/数据结构/index.html","7b11fa4d4061f67a0d4c52a9e72dc23c"],["/tags/数据结构/page/2/index.html","5bd03fccd28b74e6991902a86055d99c"],["/tags/杨辉三角/index.html","6276b093fd6a8c9578d7364cb3a5d75d"],["/tags/栈/index.html","ecacd26177b11c80c3863958ffa57076"],["/tags/类模板/index.html","7a1e573e78302aceecbf608a6249db76"],["/tags/线性表/index.html","5b385364af79c2ddcc5362405cb95edb"],["/tags/选择排序/index.html","d47f98257ec952a84db8b6ba9dc72fb2"],["/tags/链式栈/index.html","d7ee823a795562eed169965f540156f5"],["/tags/链式队列/index.html","c36755346b76ab92c25fa44a3806c7e1"],["/tags/队列/index.html","8df6c294a48624ac081ddfe2491c73fa"],["/tags/顺序存储结构/index.html","fe3e40f69fcd43b0d40f07d92cbe7291"],["/top/index.html","67d7767203cb9c6248d3bf2f7a023fbf"]];
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
