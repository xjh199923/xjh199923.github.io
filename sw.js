/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","f68b23608ad7c1092534d7d746e6f1b8"],["/archives/2019/11/index.html","2b69b98df6fc9d2509043d37abf502d6"],["/archives/2019/12/index.html","dddfadd97cd4c8fd6ce084b2dae65fe5"],["/archives/2019/index.html","97c8a4f31fc2cf2bf1f6482834dc274c"],["/archives/2020/01/index.html","77c626aa466b842e4cbf4c681f94b5e1"],["/archives/2020/02/index.html","a92a97034704bf4b985c7eca5f5722cd"],["/archives/2020/03/index.html","727e1ccf0549500067de96f9a0c986b6"],["/archives/2020/04/index.html","37418eba9b700e0e31e2bb494345a780"],["/archives/2020/index.html","0789a1999b5519e309b5350a658e60e2"],["/archives/2020/page/2/index.html","1f02f87396d76425a261e399299679be"],["/archives/2020/page/3/index.html","db15f445244606b1616fc224559fbb3e"],["/archives/index.html","2df7258ff66519c5bbeaa19394a0523a"],["/archives/page/2/index.html","01cb6e71acb8b6b3709a2c8d67b621c6"],["/archives/page/3/index.html","7ec9fd09736e73b5dd45eef977aa420d"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","29dc0ff04d74bdb8cd9823441143e13d"],["/categories/C语言/index.html","666fb65038ce21b2c6489fa82be2fafa"],["/categories/C语言/数据结构/index.html","2303a1e5985a2f03a6f5cf49d6fc0713"],["/categories/Hexo/index.html","7e7cf95a7b333883ea1672618521ab91"],["/categories/Mac/Qt/index.html","4eb5252d744e111ad31e0aefc27f7f41"],["/categories/Mac/Sql-Server/index.html","d4c9395ccb8b3e844121fea920d91193"],["/categories/Mac/index.html","19663d713d5f9fcea043ad4c3f4df791"],["/categories/SQL/index.html","862160ace1d4d7655d9041cf7aca2b10"],["/categories/Ubuntu/Hadoop/index.html","f0a7a81a3d5828120bb2b05caba4426c"],["/categories/Ubuntu/index.html","f6ebabbc07ba08b940cf398a5c3f2121"],["/categories/index.html","43149a2f6edc33576badf2da0986d33b"],["/categories/数据结构/C/Java/Python/index.html","598dbdaff7b58f4bc824bb80ac91cbb5"],["/categories/数据结构/C/Java/Python/排序/index.html","183d048e11668f195d3841c0a3446d25"],["/categories/数据结构/C/Java/index.html","dbed15bba59cc08d12df878dd66cc712"],["/categories/数据结构/C/index.html","9e48b8834a2b8389421f769dcf5e2421"],["/categories/数据结构/C/page/2/index.html","05371704d1e7c71beb2c61760073e534"],["/categories/数据结构/C/双向循环链表/index.html","b7b279a286b445a5a07e1df655077f65"],["/categories/数据结构/C/双向链表/index.html","2e129299369f66ceccf32c0ddb26902a"],["/categories/数据结构/C/顺序存储结构/index.html","c226f236c507968d2fab61aedf9edd1f"],["/categories/数据结构/index.html","b3908a85f2b63cecb9ec485de6184d43"],["/categories/数据结构/page/2/index.html","a680ef7fda20c5a3e5040eaf86f94ec3"],["/categories/玩转Mac/index.html","180701aeb0d44abe57ef32cc30b8216c"],["/categories/链式栈/index.html","92c9f972dc1d9c70fbca21be10a0a3bf"],["/categories/链式栈/数据结构/index.html","b0d59c5d806351002cf9587ccb7849f6"],["/categories/顺序栈/index.html","de4ee7a638b386580a77a150b518f0f8"],["/categories/顺序栈/数据结构/index.html","29d22623f4843ea4b0e850f8471b1413"],["/categories/顺序队列/index.html","eb24dba19ccde6f74f3d48444bb1ff94"],["/categories/顺序队列/数据结构/index.html","0a46b2caf875ddf2d7bdbc5b07665a03"],["/css/main.css","83e7600d3fe7ff6626b1ad263f1d381d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5690fd89ae2336b5c2a66de400638187"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","36e6cea2ff2abfeafc9c1b4a58cd0a18"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f7f79479a89c0675bf19102de4877b68"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c3476b5b066349fd2f0332c0e305f78d"],["/js/src/algolia-search.js","be2bf17ed60c5d243bd9eb44dc61b0de"],["/js/src/bootstrap.js","a20a6dcfce1017c0348e5d77fc653393"],["/js/src/bubble.js","a21e1947ca836e7f126c833f96f4d38d"],["/js/src/clipboard-use.js","3b87d3ed5b407f5403b785f0ec3867d8"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","42fd10f415dd6a39bc4f119bf483686c"],["/js/src/exturl.js","b9d7f26867512375b5e62fb47f3b2afe"],["/js/src/hook-duoshuo.js","94da2a81e0a7f81d9b99ab5c006ad92f"],["/js/src/js.cookie.js","26fa24e78cb5f0f14a6890713720cd07"],["/js/src/linkcard.js","80abaaa73ef0df5f00bde0e28801d03c"],["/js/src/motion.js","edff8df56ebbc436900b55017b15a93d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","07c0dbd9f25267e8ae37a1157f48e202"],["/js/src/schemes/pisces.js","e6ec7147d2e47bfc6cd180f652368935"],["/js/src/scroll-cookie.js","48363585218ded5d2139da00c5353891"],["/js/src/scrollspy.js","9c00bbad9f046715ac21b1b4af6cd1ab"],["/js/src/utils.js","7d0a563b88e1826b40cb421a1bdb040b"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","268824f1efa00cfdaaf0e21a9b310996"],["/lib/Han/dist/han.js","edf7ccf21a01763763fd5108316fb6b1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","fd17a76aeb858d45b01e4b6b6be04670"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b23e8dba5190c0e89cd85716d17b0829"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","df86bf7f4b34b4278bce110588622467"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","72c3a14a85293497315044f06cf492b6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c39b21e250f8c2071d3a9e98f0c4743a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6edc17c7231f4a6de39ef7bb0453b6c2"],["/lib/fancybox/source/jquery.fancybox.css","7f0ae327ef93f6309646da35fb10afd1"],["/lib/fancybox/source/jquery.fancybox.js","9582030a795ffdfd2885bd1b100b8de3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","fe41ce249c8ce72d382cd7b9245cdc8d"],["/lib/fastclick/lib/fastclick.js","2aaa37223f48a8f034154bc4c3b48d27"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","69d2fa7c0574f2d6596554a4f866f3a6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c98a9a59099ad7cf51f4c1e3210f8f0c"],["/lib/jquery_lazyload/README.html","511febff57cdb2bc747513be3e8e2491"],["/lib/jquery_lazyload/jquery.lazyload.js","bc254e3415f407d688f5a236d9afb5a6"],["/lib/jquery_lazyload/jquery.scrollstop.js","87a483baa76d9788d888997fd9803484"],["/lib/needsharebutton/font-embedded.css","064612e7719eec5d240da293e88da431"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","e44f1d77e1f7a2f68c52efa191f310f4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ecacf1bc8971e77b58d22540dac7ad33"],["/lib/velocity/velocity.js","1dec72412dff5c4bbd566861d53364c8"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ee9783504c60728e4daef5b257db136c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","d196e4bc452bb7135feca992b9c419de"],["/links/index.html","3ea922134e492f78eb67e76cd283668f"],["/live2d-widget/README.html","303cc5e9466b4048b5cb974312e4ef86"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","9f2385fb0de795870e12e8c9cc6c00a0"],["/live2d-widget/demo/demo1.html","7ef2db3acb7f3a4d464c752070dcba51"],["/live2d-widget/demo/demo2.html","fc64f687513b5d7d00aabbf28befa3cf"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","ea76e34a8fbbeafea80cd66d6ebf57a5"],["/movies/index.html","beb138a58517bc6cb70d0d4ae373d6f8"],["/music/index.html","d8b0c1585d0fb5cf20d1f871a4be9a3b"],["/page/2/index.html","ff035f8a4dd137490c8fe7d3665bd20e"],["/page/3/index.html","aad4c0380824c985751adeb0d86db8cc"],["/page/4/index.html","9c91c37c697e467a5b9b0df726e9523a"],["/page/5/index.html","a9b6dc37f585f2896eb056f31fe56836"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","0991f3ace241243eba2d5f5f1cf2bc56"],["/posts/15468.html","0649e5a438617cfda651b7441262ccfd"],["/posts/16107.html","f0d321d920c43020552c163b53fe49fd"],["/posts/201e1121.html","932c72cf9f7c233bd59a8542e5293a19"],["/posts/20352.html","fdbda04adc66ae5ff278332ceee94836"],["/posts/21238.html","8ba907c6f8bdb3b47f514bc5e9570a6d"],["/posts/22281.html","76f99211459e316940d711a02645628e"],["/posts/259f9205.html","25a14168b23bd9d84bb6358f080b805a"],["/posts/278598dc.html","7410a343c50b2af72da57d2886d12a96"],["/posts/2d063bc3.html","cd3273e0925962dc172ae5042cb8257c"],["/posts/30c404a6.html","9ba220cbe76eba458efb8136ff9f6510"],["/posts/4d4e6c19.html","10f638cea94e13057533d7605457bf03"],["/posts/4d712855.html","99cd673b5611c31693814e90b6fa1e1c"],["/posts/51203.html","4319ab959d028252a3ff72e7a93ea63f"],["/posts/538e5180.html","cd66f098d690eb86004e3430c14cdf3f"],["/posts/5394fce7.html","193ecf15cbe07ff67876d72a52fc76ce"],["/posts/59037.html","838179a510a7cd6af080c74ce6edd4e8"],["/posts/60816b5a.html","ff373a67f253de86a33fe0547c9ff83a"],["/posts/6163d4b5.html","c09e0d5725fc8b0abeaa434eddd244c2"],["/posts/69978469.html","5786b3d08ccadc4b628636beecef25b1"],["/posts/6a752619.html","e95247c0557a55b5819e54e15ab3cc2f"],["/posts/7fcb11a7.html","8541087a9f7f4c1c297400d8833a427d"],["/posts/8cc73e65.html","e0ad45fa71c1884cb1620ad8444252c6"],["/posts/9b621d6f.html","f654f3e17e3afa973eaad7c8e5bff4f2"],["/posts/a530f7f0.html","54d7444184a644c298433a769007dc7b"],["/posts/ae1da46b.html","219d4cb399f1b27666beee00e8f0aa38"],["/posts/beb5106a.html","c1375cb8674ed3115482b42ecf552669"],["/posts/d4b9b850.html","4dfe5970aa8ea96dc002200fa54af11a"],["/posts/dd845106.html","0f180b0e4750aed7343663c61bf97326"],["/posts/e35620b3.html","7364166989d264f456aa474da0a3e9a5"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","4441d77b69ac86fcd385b4293bb5d753"],["/tags/C-语言/index.html","91f005a3f747e2be490ba2706f714ec5"],["/tags/C/index.html","285822bd5e34d5f1a97f19263d6d667b"],["/tags/C/page/2/index.html","84be352e3870af088e2554fc01ddcd25"],["/tags/C语言/index.html","d13fb835c6965454aa6cd5b8fa70aafb"],["/tags/Hadoop/index.html","b1ab16ce13d04b8a5c442aff32ceb702"],["/tags/Hexo/index.html","083199595f2c073ceb1647d7dada401d"],["/tags/Java/index.html","1f83b55506b1aebb8fa6ba6f708c5413"],["/tags/Mac/index.html","43d4bd0874e58bc1be570acbb00107ae"],["/tags/Parallels-Desktop/index.html","368b8ac8e7b0c9d366cb26faa82d5748"],["/tags/Python/index.html","99f3e2d82881b380e79bb945f3cc43fa"],["/tags/Qt/index.html","4235b6bc72d00b286dbba2afcdbf17f7"],["/tags/SQL/index.html","6a5ed33406c73578a108eaaa34d4265b"],["/tags/Sql-Server/index.html","63366a8a01a7cb38abaeb23917d57ff5"],["/tags/abbrlink/index.html","cab30644b71e6e50feb65363c63bf1e6"],["/tags/create-database/index.html","db0ffba3d915a7d593ae994d9b5f177e"],["/tags/index.html","c42281196592177668b2fe3fbf53b671"],["/tags/冒泡排序/index.html","c248b92d0ad3a4c51ca1a1387d36c629"],["/tags/双向循环链表/index.html","070fac656af6201b1e7c19cb1bb891b7"],["/tags/双向链表/index.html","4a8d4eae9fe0e55ebb9e68ec4d2a76b1"],["/tags/希尔排序/index.html","82dff5fbb1de505e6d12e5bf172b0fd1"],["/tags/插入排序/index.html","cf24c4d854a7b629dc6f7522163a6586"],["/tags/数据结构/index.html","75bc460b0e7d195e3df539daa3ac2e79"],["/tags/数据结构/page/2/index.html","2ac6c7483c3154856b8218e82feb16b2"],["/tags/杨辉三角/index.html","c0e6239e52b3344d114f26d62faf5ed7"],["/tags/栈/index.html","1bd815f646b01235d69685fc15add5ef"],["/tags/类模板/index.html","af0a635ae3d9ded05dbd3b4d1d070152"],["/tags/线性表/index.html","3d4cc26e0b8cee3acd37702a3c8def27"],["/tags/选择排序/index.html","7db40441efa9f46b43b67e663ca19918"],["/tags/链式栈/index.html","70dd98ebc3a831ac3da1272bee7562a3"],["/tags/链式队列/index.html","003e656383bd91d51631fcf5d4454338"],["/tags/队列/index.html","00d24df1197e6e5615384b725e921a44"],["/tags/顺序存储结构/index.html","4af46706b9de60399f3ac1c53798160b"],["/top/index.html","d91cf013a4b7633a60ba320ff365ec00"]];
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
