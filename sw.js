/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","c80d7621bdbe5f333b16f757e444a9e1"],["/archives/2019/11/index.html","c2205c6c50c3f507957b6111d6b71d7c"],["/archives/2019/12/index.html","fd086e797a72f4e4f4d453363fe5446a"],["/archives/2019/index.html","7734887ab09cbf7802ce63079405a7c2"],["/archives/2020/01/index.html","5b54939b87ca863e1b96b7c6d691e92c"],["/archives/2020/02/index.html","e23551db151f279fd25d09d908b78670"],["/archives/2020/03/index.html","04844f951c4e2199d3fa10e86377e63a"],["/archives/2020/04/index.html","9c0bf7a5efe1a36685c66afbaaa036e1"],["/archives/2020/index.html","a4d72e9e3ae7cb800d8a956b66cb067c"],["/archives/2020/page/2/index.html","bd010ef41b35b8a870a202e51a48c2be"],["/archives/2020/page/3/index.html","0045f4c205e46a22312ea27529795994"],["/archives/index.html","1799889af669891703df4f3bc6efdf8d"],["/archives/page/2/index.html","8536b6d138c3b165271a00a7f4a192da"],["/archives/page/3/index.html","d4743accd606ab55ce2ca0019fb7cac6"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","f170a3f40000b7b2527d782d25e75a63"],["/categories/C语言/index.html","a02c28dcdc9380262eb9e7e7cce31695"],["/categories/C语言/数据结构/index.html","55660c9b1ba822661818c7526ec32cc4"],["/categories/Hexo/index.html","a7f86151b97c452399c7fd6c2ed8eb3a"],["/categories/Mac/Qt/index.html","76637cdefaf53ee4696dc982a69bd582"],["/categories/Mac/Sql-Server/index.html","1a4d21d4fceecf5717a24e144a83bf8e"],["/categories/Mac/index.html","c639f5ae8c47d95aa60a3bd4d72cb35a"],["/categories/SQL/index.html","101ea6deb525bf83b44cd152a85d9a2b"],["/categories/Ubuntu/Hadoop/index.html","9539e37cced86af1cb679663b25d3ad3"],["/categories/Ubuntu/index.html","ec3ffc7a1f23320ce79ea847e367b23d"],["/categories/index.html","eeadbea17a5bddfebd6129781fd83b60"],["/categories/数据结构/C/Java/Python/index.html","a352ce8fead21644305f539fca9a6cd3"],["/categories/数据结构/C/Java/Python/排序/index.html","3c8af741e72fd8b1f4540acf14d62573"],["/categories/数据结构/C/Java/index.html","7a1cae250b4d5502f2f1f046da3a9a6d"],["/categories/数据结构/C/index.html","643fb46b925fcfd2dd9431521c77e937"],["/categories/数据结构/C/page/2/index.html","33edfc422b169f00f9e517f0499059fe"],["/categories/数据结构/C/双向循环链表/index.html","9fa7e8f5ba00e30f010871d226436466"],["/categories/数据结构/C/双向链表/index.html","2b40a1885146655c69bc6918aa230b0d"],["/categories/数据结构/C/顺序存储结构/index.html","e288e4200f1bc6dce0d01c8ac2360ae5"],["/categories/数据结构/index.html","2b8859cd850c7db48118205f4406cd18"],["/categories/数据结构/page/2/index.html","ecdf15a40fa643c32113f4e1b8c1285d"],["/categories/玩转Mac/index.html","c5700d9bf5e458b387e257d4cc11f9a9"],["/categories/链式栈/index.html","b126176281b0b36d42f4ff2634ce134c"],["/categories/链式栈/数据结构/index.html","8dfaccdf267cbc4d6e1ee211d93ff8ab"],["/categories/顺序栈/index.html","daabef37023165a6a489374a4c7cb3fe"],["/categories/顺序栈/数据结构/index.html","af1df657477f57adb41cf00c472af164"],["/categories/顺序队列/index.html","ffaec748d0909947ef2de1fa566c8914"],["/categories/顺序队列/数据结构/index.html","e1cfdd12896a57d25784d34b6e6b7c7d"],["/css/main.css","3ec0c6fd7355c8fb9488ef505a613aef"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","11f1e37a5953a004cd7cae6d2b742b7b"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","75efd3deb69509d9b5fb6845b3df420d"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","bee187d8d2930ce0120cb66787e45092"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","66def0f4ff596fee2e6503001fdcdacc"],["/js/src/algolia-search.js","1d638bf6d460d09702282399c5d16456"],["/js/src/bootstrap.js","d247894fb66ddb5ab05663691f76577f"],["/js/src/bubble.js","bd868aec41a6dcb985a1ca6daeea6234"],["/js/src/clipboard-use.js","bb4e3cd49f5cae0729bb433ad508ee9f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","ad8fef5af76d0ddccac0887e48ab5bcf"],["/js/src/exturl.js","8ba964e8038cf84ee693e7ce94ef83cb"],["/js/src/hook-duoshuo.js","08e280f803c2ff612fb3a988311a515a"],["/js/src/js.cookie.js","415c8352cc16be0c4aaad2a84f392684"],["/js/src/linkcard.js","d3b5ad22b5fa91355a8f293e3bd210c1"],["/js/src/motion.js","47746984a76dc306d7ee0c70e49152ba"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","cfa56e062515316d39e232bf5b2d713f"],["/js/src/schemes/pisces.js","7216f0e9406f6ca8911acd4cd718378f"],["/js/src/scroll-cookie.js","14b02fe289c9cbf374cd73ec512d7c07"],["/js/src/scrollspy.js","6413837e44141d28080ea4b67ebd221c"],["/js/src/utils.js","4950412948dfb576d09ea87ab4fff0bb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","6af6111dfd2f08a8040b5939dc60d7b6"],["/lib/Han/dist/han.js","87c11f2f8b8900cccefd57f98c15fd9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","639336b4a0606b8ca0cb2c2d5cbdcbf4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","27a98973ad9748328739e45ce341a95c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9f64a8896181d815c58492b73e616a9e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","833e6eed248b06270233e5b8781652fc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d4a1577c95c109fcd8abeb3ff55aa578"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","495e30b1de9eebd774ee008f7b6705f9"],["/lib/fancybox/source/jquery.fancybox.css","2fd03efe97ca393215a9397a6382e597"],["/lib/fancybox/source/jquery.fancybox.js","6b568ff88ba7c38f2b0303083d94f873"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","36c28f68397f146dda07ef18fc370396"],["/lib/fastclick/lib/fastclick.js","93204fdaa1d39cb0cdf8b20762032ed5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","02af6eed2cdcd73e68c486d18f10b96d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8131d5ccc380f78f2b112ce5cab0d246"],["/lib/jquery_lazyload/README.html","5458251a016d93d2fecdc6b2e4b410b9"],["/lib/jquery_lazyload/jquery.lazyload.js","75baabbef80b47a751c635150801048c"],["/lib/jquery_lazyload/jquery.scrollstop.js","27b4e9d0512e7accb0a85caa544951bc"],["/lib/needsharebutton/font-embedded.css","68e719e1eaf8b721b967ae48d6619530"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","616e629d095094ac15d114272b2ca6bd"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d8210979dcbfce84580d0b8a0cefe267"],["/lib/velocity/velocity.js","0f7aa9b59b5a8763aa0cb03302b2e504"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9423d6409e58a519b109b8a98baaadc3"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","eb68ef05477fdfebecf558742e2af325"],["/links/index.html","445bf8b5133b2f193ac1da8cf6b4b436"],["/live2d-widget/README.html","535f4bab914decf909db2df9db4f13fc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1d9b3e78ce095e07f037206500c1932e"],["/live2d-widget/demo/demo1.html","80c5fefb235abdac0a45e56bef998da7"],["/live2d-widget/demo/demo2.html","fc0beaebc844055d4fd94ca02748dd41"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","079d955c2303b01de3c261de4cf0d20b"],["/movies/index.html","8b634b44e59edee682d70d15572a38cc"],["/music/index.html","dd1a3c7e2d521ccdb9dbec16c5be923d"],["/page/2/index.html","132a2a8df3969155408951dabd374f29"],["/page/3/index.html","be18b6d8ae63f9e1e3441d56c5a4d440"],["/page/4/index.html","93fb398b31dddf0d475795c18d65a0e8"],["/page/5/index.html","ef5a2e559732f0c1cfb55fd5b809e48d"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","7689ebe1e4b67a70a7e677d6b757a324"],["/posts/15468.html","b9baf1c7691ffc56b9d3f371b2140aff"],["/posts/16107.html","69a7fc8d875ff29974483582fd07293b"],["/posts/201e1121.html","96b1ebf51e2b7b97d1effe8c374092ef"],["/posts/20352.html","e6adbdcb64a6f27617ab3441255c9e83"],["/posts/21238.html","277cf919f269340905a6fa7b557c5742"],["/posts/22281.html","a64b835b92c4d7ed0e69e8710bed2f12"],["/posts/259f9205.html","dd93e0f6b643fde53d874a739e085f4a"],["/posts/278598dc.html","297a6e1892594aeffec40cea26795b21"],["/posts/2d063bc3.html","3cc33912c9a3a5c7ecf034a97e001796"],["/posts/30c404a6.html","239b9a55bea65326bb8d0a548ad1fde5"],["/posts/4d4e6c19.html","70e4db0e8bf7de4789abdaa2cf49d249"],["/posts/4d712855.html","e974b04528c8f4055d1f564c3aea6959"],["/posts/51203.html","ed8cf2aabad2065750f0ff83b4b07222"],["/posts/538e5180.html","f46c60974aab9aa7f9bd134c8aef97f2"],["/posts/5394fce7.html","a3202f17689dd5da9fa74fc9489749ca"],["/posts/59037.html","306c493ec0987c873f737ddc42a92d50"],["/posts/60816b5a.html","610ef5c58aa4ddd032865419a0502f22"],["/posts/6163d4b5.html","1f4a697349243643282d44f332da9ceb"],["/posts/69978469.html","75feedc004b657d283043e752778b530"],["/posts/6a752619.html","afb3b129054bfdc84ec49b944ee1a7be"],["/posts/7fcb11a7.html","a2c53370f9851e3938a469b8c7ac5aae"],["/posts/8cc73e65.html","002f9c669ddcd4e63c7a99f73c723f77"],["/posts/9b621d6f.html","87e41dab02fd284297e4b690eed67eee"],["/posts/a530f7f0.html","0ce60acc097903df98d672b37ddb17d6"],["/posts/ae1da46b.html","711c55f35d935c0aaac93aa416060d4d"],["/posts/beb5106a.html","958088033e57adccf8c9538a3bb68a90"],["/posts/d4b9b850.html","eeb17d8e6c11ffd054cacf4d230a8b46"],["/posts/dd845106.html","3c2acb8b9313151034768623ccbf0705"],["/posts/e35620b3.html","70282c7301f9bceb596161a2160ebcf1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","4ca3bd1bdc704a9e2c33e6353c7ad066"],["/tags/C-语言/index.html","21c70b5d24c40203f570c969d02ffb76"],["/tags/C/index.html","01f388e53528d8ec5f977a174d0466d7"],["/tags/C/page/2/index.html","7f1ce440fbe5535abe9c92fbcbf11150"],["/tags/C语言/index.html","7084523167df7a913493857dd1cdade0"],["/tags/Hadoop/index.html","62a13f04d57042654ac61d13f6ec16b7"],["/tags/Hexo/index.html","4c6e7e26a200f5cc4283a759a5b63606"],["/tags/Java/index.html","796e5da8e01b866781e71ba39fe00084"],["/tags/Mac/index.html","f1f5435c9890b292ea028d68132a8b51"],["/tags/Parallels-Desktop/index.html","05e02d687619d77bbdcebb82617da1c9"],["/tags/Python/index.html","f13cfdcd1c4d1ff1d2e4839c8725cc4f"],["/tags/Qt/index.html","91eef35122716cd592423da5a7f9c8b7"],["/tags/SQL/index.html","c35c3805ffb422bd49dd67bccdbf2e20"],["/tags/Sql-Server/index.html","6002784760e0b298a36790439008424a"],["/tags/abbrlink/index.html","7fc61ddf91b083ad726cc629f0284169"],["/tags/create-database/index.html","7925696447d7fc1a84e4d2389fb61772"],["/tags/index.html","a2c858f9d4945e0df286132a0ed9e10a"],["/tags/冒泡排序/index.html","ab456b0e0c50973002fae302ac4fe973"],["/tags/双向循环链表/index.html","c2fd4b8abcc6b13de61b02a62e11c349"],["/tags/双向链表/index.html","6a70ac506cf6ee022ba40933735ae9cf"],["/tags/希尔排序/index.html","0525e60dc50f4733850ecb72b287329a"],["/tags/插入排序/index.html","481bf8b9088c55da11529354940ea4cf"],["/tags/数据结构/index.html","622dfb903aecfc4a9040f2eb5e6648c2"],["/tags/数据结构/page/2/index.html","0dcd26b03c51f7771f8b70528317de97"],["/tags/杨辉三角/index.html","8da60f1cc4feb29c6a7b585a9dec313b"],["/tags/栈/index.html","2312a49bd4910911596b69d9a66ee787"],["/tags/类模板/index.html","d1dd7f56d3d35b5dfc7cf78d6412e924"],["/tags/线性表/index.html","37084c43d3133430616af191ede991c8"],["/tags/选择排序/index.html","64d42aff5966b087cc6c69ff5de7a4c2"],["/tags/链式栈/index.html","860b1e089c5c8f9c393745dda28faccf"],["/tags/链式队列/index.html","280e32c44edea99e1b7aa427f2db4fe1"],["/tags/队列/index.html","971d98fa1099e3cc2e077d411886d708"],["/tags/顺序存储结构/index.html","44990e60697ee5597dca4acff24d92da"],["/top/index.html","143a0df1fecce9707983d9af0ee26198"]];
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
