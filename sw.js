/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","b710a80b3f6ba14ecf7df12b75e54b9d"],["/archives/2019/11/index.html","c04cbdd3d302153a870b49c1073aefd7"],["/archives/2019/12/index.html","a03cb15d9b060e2a230c6e9414a06155"],["/archives/2019/index.html","7fd841c10be9f7332910f87a1a6b33ae"],["/archives/2020/01/index.html","34b04c04f8e10d31de3e61396367ed9f"],["/archives/2020/02/index.html","1d92ec246365317e65c9f4b568664eb4"],["/archives/2020/03/index.html","569753e90575ac781b039e0caec0be04"],["/archives/2020/04/index.html","477280599032e8557eaf5975d01405b0"],["/archives/2020/index.html","f57556de1b1382b6f1ff89fac1271625"],["/archives/2020/page/2/index.html","7d857d6dfd5e711dd0462c6138026183"],["/archives/2020/page/3/index.html","fe4c5307548825f1106474d249d2f12c"],["/archives/index.html","2e6b30c048ad46a01fdd7c2be80898fc"],["/archives/page/2/index.html","8057597dea07d1588750cc900f2a7982"],["/archives/page/3/index.html","dcfcd10625db4ed399d3f1bd7a49e8fc"],["/archives/page/4/index.html","eb19c4f3a6002d5c07bfc16754f0ac8e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","eebf2021d3845e3cded6117bcb282bff"],["/categories/C语言/index.html","897e64823fe4df150d0936829251fb87"],["/categories/C语言/数据结构/index.html","457b6c20c143edd2ec6ba7bc56dd44c7"],["/categories/Hexo/index.html","902d44a2115083ddd08f27ce4851595f"],["/categories/Mac/Qt/index.html","174e98f8330166926fb1b5ce6ca2e3b9"],["/categories/Mac/Sql-Server/index.html","60f404dfcbe2c0e7e7c4e3bb81d1b3c9"],["/categories/Mac/index.html","4c5e2ab3462280a5ad19edd5793dfec1"],["/categories/SQL/index.html","0e3f45ac1a83ac93eca133bb9ccbf983"],["/categories/Ubuntu/Hadoop/index.html","5deecff221ac53f30331a55b3c647614"],["/categories/Ubuntu/index.html","c546afc14337e4b6c0e764061f5b91f9"],["/categories/index.html","09fb6e9b9b2a414f90325fdf37a55473"],["/categories/数据结构/C/Java/Python/index.html","36d4f7485879e299d3a585d6ce817ce7"],["/categories/数据结构/C/Java/Python/排序/index.html","1d807147546d94448c9db9b0379c17aa"],["/categories/数据结构/C/Java/index.html","4bd3fab33fe613c13486134f6d097ea5"],["/categories/数据结构/C/index.html","a6ae0f6a5c137be51973e5e6db83532a"],["/categories/数据结构/C/page/2/index.html","d2ee62c81c59f691c9aadf3a7ce68d6a"],["/categories/数据结构/C/双向循环链表/index.html","00a892ba1421c3a18e006f6d23c6d429"],["/categories/数据结构/C/双向链表/index.html","0b9422c327e414114eb7c1568ace679c"],["/categories/数据结构/C/顺序存储结构/index.html","b23ee707293f0340c04b7e4d29d3c3ca"],["/categories/数据结构/index.html","b20c6b80a950e463d59eb9de1bf19fe8"],["/categories/数据结构/page/2/index.html","96779ba3ad571b81f08c1758d9f03073"],["/categories/玩转Mac/index.html","a373a71ccafceb75caf692a7c9e1a442"],["/categories/链式栈/index.html","4177d3ea039115ae6a8e9417f0f0e042"],["/categories/链式栈/数据结构/index.html","5731b6ac8b8617cc6ee979460385ad7c"],["/categories/顺序栈/index.html","7e89ecedcf634c9b94b43300600e8c97"],["/categories/顺序栈/数据结构/index.html","af10c0d7c907492143c3fb467a2a9eef"],["/categories/顺序队列/index.html","898e5b6d4f0f7e3f424ab996a25f34b9"],["/categories/顺序队列/数据结构/index.html","f3c797600c9af74dd7c2334582157e18"],["/css/main.css","469278dd3ee1791866170b46c0d43ce3"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0ce194ddfd9bea9ec59fc1d6db189169"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","9102299498f4a0224c939d1681402903"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c5ff10a2f1fcf8c0adfa326dbb99fe49"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","98b8b106ab7a39d824ef8504a8db387f"],["/js/src/algolia-search.js","99691463daf0093d47d66a1fc3a4cf43"],["/js/src/bootstrap.js","6aa7e128d5b52f46f21b819f303243d2"],["/js/src/bubble.js","a4bcac92be8bc27c4760f9037ea1a6cd"],["/js/src/clipboard-use.js","80efba1d5abffdc048f260f3f3cfb821"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8e63a1ccf35e981c1715ac2213c58ea8"],["/js/src/exturl.js","3a1b4dd81414e981f37fe7d7b8897249"],["/js/src/hook-duoshuo.js","c337f7e5ad735a1c2111545b5ba97242"],["/js/src/js.cookie.js","314ab35145c0e30eb50e4513d56ab7b8"],["/js/src/linkcard.js","6a5831c7d1a1335984f8bac4848ae636"],["/js/src/motion.js","14b9819178c7be90618a4c30f331cd22"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","5917d33e3ae1cac68ccd42c05ddc937e"],["/js/src/schemes/pisces.js","c5b90bc61cd2c77a8a65f3f89a0d2c64"],["/js/src/scroll-cookie.js","76d12a2560d7c6b62b2447f783a22ee5"],["/js/src/scrollspy.js","708fd2871f4e80916e95918faa379b80"],["/js/src/utils.js","5af4c17242ae50e72313b86b285d2da9"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","41e3b6013e1a2b830d220d777e233520"],["/lib/Han/dist/han.js","fe26b296165a28e1b2291785afbd4d16"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b3ed73a5376b9405f1e36e53cc4db8c3"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ef3fdcaffa165823c50b7f9e240768c4"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","674a774ba6f0c77059a249b2638979c6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c676b65c37993006e674c267ada68985"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","640efca251fd413eec0a3f40591bc719"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","74e09e7835c1127857464b3003e742a2"],["/lib/fancybox/source/jquery.fancybox.css","2c437174506c5ff0ede243e9c03f8a18"],["/lib/fancybox/source/jquery.fancybox.js","7f8670f09eac249d6144bcfccb5d860b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","e7a505bf173f4eb0ddeae0e1a5d5f9f6"],["/lib/fastclick/lib/fastclick.js","46a386f8af8a5e40f7d914a80ae0c69b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","068136ebde1ead16b6ad15ad4dd29111"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c5bd9800fb5697ae27716ed39766baa7"],["/lib/jquery_lazyload/README.html","e903325d56028f7cc0c81a3b41b91182"],["/lib/jquery_lazyload/jquery.lazyload.js","1493583d7e871f11c081901b6fe1dcc9"],["/lib/jquery_lazyload/jquery.scrollstop.js","82e7357e0d30211a691096fdf20d198f"],["/lib/needsharebutton/font-embedded.css","51b6575b57652922911304d8da792e9c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","3c6f18c4f9224cd70e04ab5d755d4615"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","7d0b5dc81b5fe60440e734fb0423c6f2"],["/lib/velocity/velocity.js","9908daaa8457d60b722911fbbd28f37b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2288a7c342434fb096e615256a5fed4b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","6fc86ddc26b023d191376b00d7dfb833"],["/links/index.html","d614de585c8a32a34412764b5ab61d0a"],["/live2d-widget/README.html","5cb6314d4ed82a8cf8ae664bf06f9e30"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0ba21a85977e24e5dcda6f1d39b13be2"],["/live2d-widget/demo/demo1.html","28df27e1c5d189da273b32ef3f498f2f"],["/live2d-widget/demo/demo2.html","4e836c1ff0221a0f095187304a13abf5"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c2d5d0ece0a66e39e475b6eb3cda0dfe"],["/movies/index.html","72046d4bba5480f8791430aaf6d83271"],["/music/index.html","dd7621fef415f3bdcdda783589f24750"],["/page/2/index.html","e4999ac8c108a3ca5df3f5ec6dc6e1f2"],["/page/3/index.html","47c6cb53f9f5e563c90dc47a0fee4b58"],["/page/4/index.html","a152eda19adb5b2d104850d386b73f80"],["/page/5/index.html","4dd6b14a9166684e6e0e5891b12af0ec"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","a29a50ce12a7eecad97b1eaa796fa324"],["/posts/15468.html","c5d22367df892b1ce997e796d5947786"],["/posts/16107.html","9952b8ec869f514de9fda2c2cdcbc9cf"],["/posts/201e1121.html","4fc7464065794483ad61a43d7b9e0025"],["/posts/20352.html","b21ef8b74ee9e7cf1a4ed08afe89b609"],["/posts/21238.html","b6911594dfc62b979383086c853d7c67"],["/posts/22281.html","1df4d31a134bb4d95cd2568087f058fb"],["/posts/259f9205.html","942fe57ea6e82578b1c8ab29087b2316"],["/posts/278598dc.html","3af5c57362ad98696e0abb0dddc7fcdb"],["/posts/2d063bc3.html","9bf4fd78e253633032981896a965deb0"],["/posts/30c404a6.html","525c6be4ec8e598d7bc7bb5c4c15fddd"],["/posts/4d4e6c19.html","91f64acb15e9a5452c0fbb5797b4c4a7"],["/posts/4d712855.html","e6869a8d44803e50ec4aa8083eaa63e4"],["/posts/51203.html","ceddfe3832f0d62919b6cf5c3ceaf812"],["/posts/538e5180.html","9ddba295c59b760c904bc73c1e848183"],["/posts/5394fce7.html","b6ddf780234c40679daab9013d0334ce"],["/posts/59037.html","51fe643c6cd52cbce95f76764940aa24"],["/posts/60816b5a.html","4309c7b946289e1314a3a04d72b6f038"],["/posts/6163d4b5.html","08842503dc84d05dce2115aea8274595"],["/posts/69978469.html","520053b96637506a05d00d71430f5421"],["/posts/6a752619.html","9b2a66f0387348ac8c3bf6576f260dc1"],["/posts/6d7376dd.html","e8f56fd3f772b520498931645506bbe5"],["/posts/7fcb11a7.html","7289325c01f8e8a043de3295cc90710f"],["/posts/8cc73e65.html","67a4509bd8045d6b42ab498d1adfd9d1"],["/posts/9b621d6f.html","40282889a68b0d329476ad4806d73b71"],["/posts/a530f7f0.html","184b60cb5f5c72b8f178bab7cbecb77d"],["/posts/ae1da46b.html","ce1a09295d1825d58aac955a359f9224"],["/posts/be01953a.html","6a995c6443702c40bdbf937e43d49413"],["/posts/beb5106a.html","61c34c0c50f83666885e16f8b83e7a65"],["/posts/d4b9b850.html","f8edd70ba5b63a57cd9666541ccfd9a1"],["/posts/dd845106.html","069695fc22223fc6ceda87c4797e6071"],["/posts/e35620b3.html","6dd947e3ac034b25a940b2905d7bafc0"],["/posts/e4bced2a.html","4d03cccffb622f6a2ef2bc6d3996ebcf"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6b993db3b4e4abed1637c565debd3b58"],["/tags/C-语言/index.html","3e3313c9f9081b581e5416c05ee18247"],["/tags/C/index.html","d4288441cd5e61be862658f09bae8d35"],["/tags/C/page/2/index.html","ecc2bfe70ee1cbc1f482061004c1b1b6"],["/tags/Constraints/index.html","6869b927b20cd6fdb4c8c142824ee86d"],["/tags/C语言/index.html","ac271b47ae17ba90243b722b46abacf9"],["/tags/Hadoop/index.html","54c7d5f1ec87765c20def144e87def6b"],["/tags/Hexo/index.html","7716294bd112dd4e5d39726143b8fa1c"],["/tags/Java/index.html","6e1243871e530799bcfdc8555c3d46df"],["/tags/Mac/index.html","68faf27d4dc3de20df30981586ea393f"],["/tags/Parallels-Desktop/index.html","b6ec32eb76a59f1dac9346c82e07dd2d"],["/tags/Python/index.html","3a92a3e10fb57e9a8a3bfdf4aed95c85"],["/tags/Qt/index.html","9047239169b26d2f50970dbf734f278d"],["/tags/SQL/index.html","4d8967f5820dc2d9e14b06c9cbc0f030"],["/tags/Sql-Server/index.html","34cc936091b7cf63af5e7705ebf13282"],["/tags/abbrlink/index.html","f3165ea58b4d0e58ff2406e2f0f2a356"],["/tags/create-database/index.html","c8c921f42905e351cc34fe76603a05c4"],["/tags/create-table/index.html","a36a6b23d548ebe6c47556f219319058"],["/tags/index.html","549b4d5eaaa9359264eddff56e7b67af"],["/tags/insert-into/index.html","745463a74b012adf274213ad21b6cad0"],["/tags/冒泡排序/index.html","011f58923acd3034e08b28e7c2477ce0"],["/tags/双向循环链表/index.html","4784227cf2ab3e38fabfcba01222e0f4"],["/tags/双向链表/index.html","df58bd3ec3af5187f107a9a765c4818f"],["/tags/希尔排序/index.html","9671f4d54e9d4a468a8c8e8fcab5a15e"],["/tags/插入排序/index.html","1724962f44c2e369632f9353e7a06867"],["/tags/数据结构/index.html","59b97a8b12ebf2dc3518f880fa7ea7e0"],["/tags/数据结构/page/2/index.html","14a7e85543b5c4afb776f69c79741e99"],["/tags/杨辉三角/index.html","95018134f34943573515be63fde91586"],["/tags/栈/index.html","eba5019359eee0c0a8109d4b1c601b6e"],["/tags/类模板/index.html","858dcfc90dc1d056713b6a5d91cb1df6"],["/tags/线性表/index.html","f7d7bb9a773d8f7d6e58c27d81e80885"],["/tags/选择排序/index.html","176f7a1af4b6d81ffff305715ae589b1"],["/tags/链式栈/index.html","38b066db32bb6f7a64ee90ff1deb08ea"],["/tags/链式队列/index.html","84bb527693264f0b1ca944b5dd42051c"],["/tags/队列/index.html","9df59d26de346a8e13f1f34908b8d10d"],["/tags/顺序存储结构/index.html","4ff374652b627cf61eac96bfb3c97b93"],["/top/index.html","ea18d847c6d9e62b9d8b3e9f2ad2e010"]];
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
