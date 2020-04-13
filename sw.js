/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","9681244ee4b824944da53759e97bb401"],["/archives/2019/11/index.html","76547607f106e4c27d44ace6943c45fb"],["/archives/2019/12/index.html","d447d981710b256bf2134f05f5474518"],["/archives/2019/index.html","02e9add61b64db517b281ccd6c5dacfe"],["/archives/2020/01/index.html","5d0e73f5b7d384b3b71b29a491367a6d"],["/archives/2020/02/index.html","5ecb16fb778ec314edaf2a6d3c60e5a3"],["/archives/2020/03/index.html","2896e1bf39584166c145d246d7ca5c45"],["/archives/2020/04/index.html","546eeeb1369d7d75ba37acb0a5ad239f"],["/archives/2020/index.html","a44be4262b4b98a9dcd1e176d2bc35a8"],["/archives/2020/page/2/index.html","b10c157b3dcb4225ce2bb4f892395d96"],["/archives/2020/page/3/index.html","87a8c594a6fa8638849b218f8e4b229c"],["/archives/index.html","883562597d0ae11383bee6a8a763c1db"],["/archives/page/2/index.html","799610be5f575b20ce25b783f16b2de6"],["/archives/page/3/index.html","8dc0ab8168ef7191019b4867931c9a95"],["/archives/page/4/index.html","7c8ae6df743876ca416f8a70b165f059"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","a55267ad5fe72bca054cc5ae63b1f615"],["/categories/C语言/index.html","a006990e857da1f43359263a0db00d2d"],["/categories/C语言/数据结构/index.html","c44d7092769bfeb9ed509486b06b592a"],["/categories/Hexo/index.html","4e2836c6475b0816373ed2d9678b0d35"],["/categories/Mac/Qt/index.html","61fab84b04e02505dc148ad936875c3a"],["/categories/Mac/Sql-Server/index.html","ad16656e61c13eedce99f841361e7da9"],["/categories/Mac/index.html","60b7412d80b663ccdd388f7cc7560537"],["/categories/SQL/index.html","2a5c20e8025fbe169d348fcd9359e024"],["/categories/Ubuntu/Hadoop/index.html","4779b5f173b88db235816e61341ab93a"],["/categories/Ubuntu/index.html","5744dadbb33a29f82b8ba2be8172d2d1"],["/categories/index.html","69d99aad4c0087ce93671d0a3df18dc7"],["/categories/数据结构/C/Java/Python/index.html","d5facb8dfffdb1178dff93c6cc954ed5"],["/categories/数据结构/C/Java/Python/排序/index.html","dc69c0c8c16876de0bc47a02a89a4899"],["/categories/数据结构/C/Java/index.html","f4516c9a53066f41d2913c818472e958"],["/categories/数据结构/C/index.html","c48bf83845c1c4c139801606f2169ccc"],["/categories/数据结构/C/page/2/index.html","e1cb3adf46dcd401fb2d5b2465155819"],["/categories/数据结构/C/双向循环链表/index.html","6d1f0b142e3f236abbf32f118bd3eb85"],["/categories/数据结构/C/双向链表/index.html","fde55d5e8bd58e31f525adbed919a6d7"],["/categories/数据结构/C/顺序存储结构/index.html","3c19b506057bd81f0349da177cfcd9ae"],["/categories/数据结构/index.html","a1f9a90bc4607184ff06f80367076b5e"],["/categories/数据结构/page/2/index.html","53e1ba8797f8c9c262b6bfad5e2abdc5"],["/categories/玩转Mac/index.html","8aa50a6ab623850be5bb468cd66d288d"],["/categories/链式栈/index.html","8cb3c3c44847df4b9f4e7be344fa42be"],["/categories/链式栈/数据结构/index.html","63c796819ec2d59858010972039a8cd5"],["/categories/顺序栈/index.html","7033be0edd4c2f54b06cd12495231df9"],["/categories/顺序栈/数据结构/index.html","7a46e4a1a68a9ba0e8d3461cb1971896"],["/categories/顺序队列/index.html","721c5ea1b6cd74b86f4df2dd0bc3bd0f"],["/categories/顺序队列/数据结构/index.html","f6c48c29a251ca406333105654e8694e"],["/css/main.css","933162bcfa517c91122afcb3213e1e4a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","21a4070f75a5831f85c6fefaafb15745"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","cd4167a8e62065e848984b63606dd24a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a88aae21ce1f2b9484c78ecf187103e7"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3752f2db195375a432fb9d366673c1e5"],["/js/src/algolia-search.js","32870ecd7b4c75c2cbb6754fdf556e5e"],["/js/src/bootstrap.js","719365881321ce955bcbf02ca086d72f"],["/js/src/bubble.js","b9bb3a247e61cf6113d1e476d45b352b"],["/js/src/clipboard-use.js","676f0708ade76fa8c070f38151cca96e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b9c19c16fb6e3952d9142f71d007da99"],["/js/src/exturl.js","30e74074dad8280f9f0afdc4ac30f0ac"],["/js/src/hook-duoshuo.js","3c95210287bca7bd163350f3db8702d1"],["/js/src/js.cookie.js","3adc9685891933340218a95b85a38402"],["/js/src/linkcard.js","6890c6968c732326781b0f04d2aa388d"],["/js/src/motion.js","93f2b555385f71a4dd9788b3c7b28830"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","4e5c982851dd5cd860f9d1853c86fd97"],["/js/src/schemes/pisces.js","722e75d03c92b774ab5b0e4cdcb7ad9b"],["/js/src/scroll-cookie.js","a10b0495594172ef73f23e51355ea900"],["/js/src/scrollspy.js","119b665e78df38f7cf823281c495cbd6"],["/js/src/utils.js","8f4173e9fa31d578608ec0c3cf6984ad"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","33b91a3c0700be49a6f4cc620413ed6b"],["/lib/Han/dist/han.js","fd7d21a3360362302f16599b259c71fa"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2eb9973b211c88381cdb390dd7977408"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","599279ef516390096714534b5d0a2a3f"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","289fd6d903f84304962c4b1f51bf0d72"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2add86cd40e3853780f455c97f2f44dd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","adfe971ffba37a2edde9076fb6a84219"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","23e0ef759d10ff0a2459479f24f4bc2d"],["/lib/fancybox/source/jquery.fancybox.css","db12091f6dd00590d4da836a24b7da59"],["/lib/fancybox/source/jquery.fancybox.js","6147c5b1aa6b9e85455e2d0504da9bb7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","e77a1001bbb17644f58850b46dc5a473"],["/lib/fastclick/lib/fastclick.js","4cf4880170dab0adc68a7a75694294b3"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","812dc303d76a3786cb830d9c2ef02b2d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7aa533005a2a0fee366c21f39d6f8508"],["/lib/jquery_lazyload/README.html","e0cf522543fa106d5bcc19b026118db9"],["/lib/jquery_lazyload/jquery.lazyload.js","56f3c2a4bc21de29260938836db383e6"],["/lib/jquery_lazyload/jquery.scrollstop.js","b67f013be500bcdfef9ba7c748f8e218"],["/lib/needsharebutton/font-embedded.css","6b622749005ac8375074e140decf6e92"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9966fc68852823f1f73672a954df6c08"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","bf499d85b024b4405b5f3d8a572b4702"],["/lib/velocity/velocity.js","cf68e4a4e9573092d76aced21d9271f8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","25e5a041682cafb69ba5cf61dbef1b1e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5ad773a3e1eb8e3fdfe5ce853cf4093a"],["/links/index.html","21a2e7f7d721d0ffde8cf5c252284f4b"],["/live2d-widget/README.html","49631c5f9cd8654e8d9b7bf2f7ac06be"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","bab702659c40e9f173435190cb49c871"],["/live2d-widget/demo/demo1.html","0e4874b3d70c7703f7d8414097729acf"],["/live2d-widget/demo/demo2.html","0133ba3174aa72317b3cad3484603696"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c01c5637d6ae3c44c1be8e69ab7b933d"],["/movies/index.html","4660fd1d3ef1d3e13cef49d0dd24c2b7"],["/music/index.html","bb2864f64d801d4a123173cd91283458"],["/page/2/index.html","e29109384f0a3431432ea9775b8e2310"],["/page/3/index.html","48f9f1b65ca3128f3f369cf694e506c4"],["/page/4/index.html","6c0adb0f443e96ce7059bc70359f50eb"],["/page/5/index.html","293fd6070dcbfca7fd8b9bed1c9ee026"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","737073224c91bdd75e8aceb839f4806f"],["/posts/15468.html","5492ee0158d25688a2feb7d7c27f6cfd"],["/posts/16107.html","92cc2eec27b8c89d9d82eaf8c40f15ec"],["/posts/201e1121.html","bd356356f28fce7b131dcedbd3ce32e3"],["/posts/20352.html","5c9c5495aaf7f358f46bc35d6fc3da8e"],["/posts/21238.html","0812b57c851b401153655d34c3bb8077"],["/posts/22281.html","6a57b1080e3f9f026a75391e32745ca8"],["/posts/259f9205.html","df9a862a414a1998c129e13c3ebf0fee"],["/posts/278598dc.html","2c74d4daa403262065cfa1d17d28d955"],["/posts/2d063bc3.html","ad6dc26c3b405d3aec52ece686b44588"],["/posts/30c404a6.html","6245c3e6bd6a451efaac9734cc9da242"],["/posts/4d4e6c19.html","d0f21a670e790a7ad75986b9100eaf98"],["/posts/4d712855.html","8ab15e04cfcb5691309bcca2b922970d"],["/posts/51203.html","ca297912ca6463e576f9797a2a4bcced"],["/posts/538e5180.html","aaac0f25e12a6ad2b194ab9bb2466c59"],["/posts/5394fce7.html","0755f5a05d314e5d87a9be568d08fd89"],["/posts/59037.html","eba262351d5c47cc8a8c7826c739c78f"],["/posts/60816b5a.html","add706ddcd3e5e475f2504497be2e921"],["/posts/6163d4b5.html","366b2ae78c4818665e02afd734df00d5"],["/posts/69978469.html","7127a8525fbcb73a3c9828b1ccf6dae4"],["/posts/6a752619.html","6d1666e602dd8bfe0d5bc0455fcb8c95"],["/posts/6d7376dd.html","1e12576317c436b381d12961a1aa2686"],["/posts/7fcb11a7.html","88a1192a5b1868a8534c449b7be0c047"],["/posts/8cc73e65.html","d22e0983cd3f4f97f4d0d972613f1141"],["/posts/9b621d6f.html","b3f7f0892686796a4b52884773be3395"],["/posts/a530f7f0.html","18447cb0cb0eb608ae55f3448117ba12"],["/posts/ae1da46b.html","336588b40a90c2682e80502e18ecbd4a"],["/posts/be01953a.html","aa778eb5680b888564d5f5f756f97783"],["/posts/beb5106a.html","645a61ce8e860310505c4ce0bfdf862f"],["/posts/d4b9b850.html","b92d5369bde3b431ac149807f7f7efb8"],["/posts/dd845106.html","e52fdc00ceafad84c43d6816bd53bf40"],["/posts/e35620b3.html","519c36f43e49b629e2f49a567b2092f0"],["/posts/e4bced2a.html","efc493b1f2f1372834d60fcf7dcd41fc"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","84cf29f49ab53277a07e1699b08ca5dd"],["/tags/C-语言/index.html","f4c082af195c5ac7616c27c80722ed9c"],["/tags/C/index.html","f9d930f270aae7124978532b988e4f57"],["/tags/C/page/2/index.html","c3d13edaaa1d37ea8a2c965435fe9fe9"],["/tags/Constraints/index.html","24ec226dde1c2f556f30c9184b393306"],["/tags/C语言/index.html","c290eeaa7e9e212923bde1239193f5fb"],["/tags/Hadoop/index.html","0eb4c5ea9da925e2146068e0cd3a0ea8"],["/tags/Hexo/index.html","3c88a116ef315acb43a3d725e11a9a41"],["/tags/Java/index.html","80b294038b4eb5cf82b51cdd1d5982b0"],["/tags/Mac/index.html","a9c305a2e4ff52f6fab44183fb5828bb"],["/tags/Parallels-Desktop/index.html","bd984e1a689937833608e966b9020351"],["/tags/Python/index.html","797b49947f399b6fe3d051127f31175e"],["/tags/Qt/index.html","7b62cd611088dfd2c6a2d94031fdf459"],["/tags/SQL/index.html","ae85cf7d8c64e35d1d41080d2305f221"],["/tags/Sql-Server/index.html","8bb70f9dbe68c26e293185cb611b9e22"],["/tags/abbrlink/index.html","d85ced5d9d0e298704cb328c88009846"],["/tags/create-database/index.html","90079929ca472a90b055e70744014db4"],["/tags/create-table/index.html","5be4e2f64314362f5be783e085841c07"],["/tags/index.html","33275dc5aab3df5dffe5c9ed291ce624"],["/tags/insert-into/index.html","e968d9eb71aedd6d9f06a579e6b9781f"],["/tags/冒泡排序/index.html","e1875d2c84a85e8d7f301cc193ecd32e"],["/tags/双向循环链表/index.html","6c60c4cf3a5105de7c9bc135182daf3c"],["/tags/双向链表/index.html","b9a3fd2c3fd256a532fc83cbb2c13935"],["/tags/希尔排序/index.html","df077fc1593ba5cddf89e20295df38f2"],["/tags/插入排序/index.html","604d66dd7aba6c0d051072333830407e"],["/tags/数据结构/index.html","2bf3a5d5e95bff2e2063c3c5eef6f885"],["/tags/数据结构/page/2/index.html","0d20da68423b3211abf5f2fcaba469f8"],["/tags/杨辉三角/index.html","20105efd554e047d6e0fda59742f47b8"],["/tags/栈/index.html","5af4ab1b468633878782ba4c5ad27cb2"],["/tags/类模板/index.html","3b73f92d5212d45b83821415b36780da"],["/tags/线性表/index.html","3d29acc4abc85e387b72afc29a97aae4"],["/tags/选择排序/index.html","7392da2e303ebf96755cfd80126c334d"],["/tags/链式栈/index.html","2e1afa6b62e9a91511f05b08501d73a0"],["/tags/链式队列/index.html","8a91bc15ca607eaceb0e340335b71fb5"],["/tags/队列/index.html","fa3f135e0f61053a9a17285bea628cfb"],["/tags/顺序存储结构/index.html","543debbe27afd0288b579480a99d4699"],["/top/index.html","ff37ecf3847197fba1ec36bf14ae241d"]];
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
