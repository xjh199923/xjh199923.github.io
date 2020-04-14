/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","6a401aa4e2b95c3608cf1d0ccd875331"],["/archives/2019/11/index.html","0e86b15591c91e885a7bc61953a16059"],["/archives/2019/12/index.html","32c8a64af3af63c7645e966369aa7459"],["/archives/2019/index.html","4e442dd978b64c6b3bbd12e95c88cea2"],["/archives/2020/01/index.html","82f6e047818bc459cb1b65c825c75797"],["/archives/2020/02/index.html","85d9e9b96b3cf58a904261d2aeb66508"],["/archives/2020/03/index.html","98c7c371a7b7a997c6aa22d228617590"],["/archives/2020/04/index.html","b51a3b4b9fa3245e332d5b5bfbfeb230"],["/archives/2020/index.html","e57ebcfe64439f9b37608534f5ac02f4"],["/archives/2020/page/2/index.html","64e1fca59e5a7f74d889d675d2a1832f"],["/archives/2020/page/3/index.html","e999a0514e5e102ad240b5b8571c8eba"],["/archives/index.html","de19f3a6cc88fe8929f9ab0aa6b876e7"],["/archives/page/2/index.html","586bcbf2f5fd8b92b12c1b7fd598fc28"],["/archives/page/3/index.html","8533e6cef27c48f890b487433840e025"],["/archives/page/4/index.html","ac80acd827bad006b22cf45006af0c8f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","63fb29739c9f924e78c5587735d2b659"],["/categories/C语言/index.html","f56e41c5d4fa0f30793a6cf7e067c954"],["/categories/C语言/数据结构/index.html","57b274541f45df64853bfe7f33599b80"],["/categories/Hexo/index.html","7796cc3f667459fec63a4653c1d91d23"],["/categories/Mac/Qt/index.html","7363a633e24f3497e3168539c66aad4a"],["/categories/Mac/Sql-Server/index.html","23859d2b8946e6aaff74a919ee4cad47"],["/categories/Mac/index.html","2e96509497e504631bad7dd01b1dc112"],["/categories/SQL/index.html","680dc4964ef43ca4b9f95dbbf99d9ba3"],["/categories/Ubuntu/Hadoop/index.html","6ce2a21d175e3fb10d275519d7ceb714"],["/categories/Ubuntu/index.html","87c02ab3dfcaf47f8e80fa075a1bb2f6"],["/categories/index.html","cda9f05dd331e0d4cad6676c41191cde"],["/categories/数据结构/C/Java/Python/index.html","71e341955ca23e34276fdb8f3942ac8b"],["/categories/数据结构/C/Java/Python/排序/index.html","ffba23c1b7c06456493cf3667d01afb6"],["/categories/数据结构/C/Java/index.html","3d88ccaa291acdcba2de2a3c4838ecc8"],["/categories/数据结构/C/index.html","15a594c776d85e1b986d02cac3469bdb"],["/categories/数据结构/C/page/2/index.html","ae8724467075a771c56e1a5b722548fe"],["/categories/数据结构/C/双向循环链表/index.html","4e32d521dac4f9bafbe346d957f30b66"],["/categories/数据结构/C/双向链表/index.html","5f36091f6c767b44f40906cd2b23822c"],["/categories/数据结构/C/顺序存储结构/index.html","671733ef2feb330fa837dea7365c30db"],["/categories/数据结构/index.html","bcee04ba3763a7d44ddf7747aa9c8de3"],["/categories/数据结构/page/2/index.html","7288ea1eee9dfa001e1e69d79e3fae2d"],["/categories/玩转Mac/index.html","45958648971f91ef58ec769444225a4e"],["/categories/链式栈/index.html","4cd65e0845e16a80cb4ab8f50f344c58"],["/categories/链式栈/数据结构/index.html","9451c1b5c2021d87f642f84ac04e2af6"],["/categories/顺序栈/index.html","2863eb35deefc07f82d92ae9f468e262"],["/categories/顺序栈/数据结构/index.html","93ca0971a0f0bbc50ff819f966282baa"],["/categories/顺序队列/index.html","c2015e518c29fe51f955da955768c844"],["/categories/顺序队列/数据结构/index.html","a834811c12d256456be41129a38dcff1"],["/css/main.css","6cc82fe01d843df7990abd7cc6ad7840"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e72639ced30b21ea12cd3dca0a990def"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","1bfa0d95d139ab1a9ad265a388f723a6"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","18c8642b2210a52c3f3a05f318534f37"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","89c1ee2f55a063bb795a9528d4f5cbde"],["/js/src/algolia-search.js","4a339a7ac4117f507fd525cfca0df4ae"],["/js/src/bootstrap.js","1ef7f0166f8ccf06e2c4c52562488946"],["/js/src/bubble.js","2c1aea66a76a30288c39fa32d4b89af3"],["/js/src/clipboard-use.js","a538840b1eaba9cb52ae4bfddf059c98"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2b137dd2403782ec0c970ca9cc9c5c8b"],["/js/src/exturl.js","7a574db736d04d2bfb40988dd81dfdfa"],["/js/src/hook-duoshuo.js","1cd17b09f1f0aae61b82805c659e48a8"],["/js/src/js.cookie.js","dd066789924cd6b7b4b1e81e124e8fd7"],["/js/src/linkcard.js","5c681f585197f1ee71e0b29a9a8bcdd1"],["/js/src/motion.js","a206eb921aac7356922451f1196cc67a"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","9fd86f14eaa05bce0afcc1fd0129b969"],["/js/src/schemes/pisces.js","93da0d29d7fe9c5ef19370eb5f9ab386"],["/js/src/scroll-cookie.js","758f2835118c485d6fddc532714f478a"],["/js/src/scrollspy.js","64dd9a1da2b99e4d4435485aa38ee3d5"],["/js/src/utils.js","9f8f48344b4f8c3f77f30a4dbee98b72"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","18df2da3713ca49167c8cc2b54119f4e"],["/lib/Han/dist/han.js","c8e989025713c5781af7fc9dcf32084a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","957b13bd4769d9cd667a8ed3046d8fc0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d76fa1c4cbf941102698ee6582238071"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","550d27a719f94c4a6b6f145d7c115695"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c69d04cdcb018b7b18945809010f152c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","32eb41e109a85ea8ce14b6d625a221eb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9885607c1d446860b02852443bf6c023"],["/lib/fancybox/source/jquery.fancybox.css","13a28b2d75226c444c3a166b3e3087ac"],["/lib/fancybox/source/jquery.fancybox.js","43b1142b877079820887adc100364e0c"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9887215452caa2016f2ee496d4a3b47d"],["/lib/fastclick/lib/fastclick.js","5e4001179ec5782aec7f80102e0d3f89"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","44b6f546fb71c8243902fe3fcf12271b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","24c5c59d0902d60a25f6b692475dff48"],["/lib/jquery_lazyload/README.html","f4ddec89dad36eb06f02d302fe0b8e81"],["/lib/jquery_lazyload/jquery.lazyload.js","793297fb31aaca6d408d82a7661c59ce"],["/lib/jquery_lazyload/jquery.scrollstop.js","33dfc742188bdd6ccebc4d4e34ffe6ea"],["/lib/needsharebutton/font-embedded.css","8e8a070a0277347ecf2cdf19f8db1992"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f5cbf727fc256ad9d7d0da369d4ad65e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4aaf7e5edb1efbbd9509644c512d359f"],["/lib/velocity/velocity.js","7e78c68646fc4e5f4bd8f9c1b5fa8d49"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2851d4a29dec2bd4782d1445bfe36992"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3c5878d9db60cb5511aabb198e6d6a7b"],["/links/index.html","4700ce64503642f33bd15cdc0c81bb59"],["/live2d-widget/README.html","aeb2c1a64ff27307dac2cde532551cdc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","eabd9d302702e8fa6b0e90a2bc3fdc2b"],["/live2d-widget/demo/demo1.html","79b42e5b4dc2b6f1b900e19238a2a956"],["/live2d-widget/demo/demo2.html","2a5606ff98999a233c6c4c466a5059a2"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","625297ffe248cf6b384b64080083f5ab"],["/movies/index.html","ec15cb7a3ea61ebc5251bac9059d9534"],["/music/index.html","ab9fafbd4d6128a2652c0c31668b6bdb"],["/page/2/index.html","dcd21dd3e77a77cd503c995b5dc6a4e5"],["/page/3/index.html","7e21a52bee5542368ac829ef9a2cfa8e"],["/page/4/index.html","1ca9ff13816de0164b7efe86ad0f9c3e"],["/page/5/index.html","07f363f17cc1ef08295ad14ea1c1f234"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","2e5b2cf493145b6c3b82860593caeaff"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","ec26d39372a6bc22cb26bbfbdc072ebc"],["/posts/15468.html","7ec53e14921fe2b1b3948d1c69aded8b"],["/posts/16107.html","c4228253bb00f86cf4c250ced56547ee"],["/posts/201e1121.html","9b8a358bd893f61630ba47d2f3457eb5"],["/posts/20352.html","0c6e7be2dbac8f73c14e3c57c9d4cf49"],["/posts/21238.html","b5735279afa9031be328f2c16afa4c5b"],["/posts/22281.html","dbb4604a29e9e74e0f6f15fb4e9c55dc"],["/posts/259f9205.html","1b9d5552c089aaca5b66f158ca200e50"],["/posts/278598dc.html","7fae99ee7b2fbdd5a9d22831fa8851dd"],["/posts/2d063bc3.html","dfefdfecdf463f0fb53bf144ea5fd6ad"],["/posts/30c404a6.html","66e0df072aef26b211d16032f2d79bc6"],["/posts/4d4e6c19.html","c4dd4b29dce623a8b459067c86f63d6b"],["/posts/4d712855.html","7e57960bc316740c5f0da68e6d9c6e3a"],["/posts/51203.html","ff31a3384180744506320f6382df53a9"],["/posts/538e5180.html","9789e84afcdc22ef6ce148302d696038"],["/posts/5394fce7.html","bed7f051c989a51a2feb10f4ba8b1ede"],["/posts/59037.html","8d5b07b04abfd11567dcc3f82317b348"],["/posts/60816b5a.html","3492bd81893410e2db7178bc7b3e93d3"],["/posts/6163d4b5.html","3c30587a3577be300e8a23f60dfc1249"],["/posts/69978469.html","4aa01d8047af88b0eefd0615ddcc29af"],["/posts/6a752619.html","97ebc5c2169199896e7587ada2e2640c"],["/posts/6d7376dd.html","96afb7f0238f11f46674cd61dc100801"],["/posts/7fcb11a7.html","bc23176154a7ec7326da9a3b105f2527"],["/posts/8cc73e65.html","daac667e70eb0a970e18f6044d2b6dec"],["/posts/9b621d6f.html","de92e8e760f71685601ad5fb73cb4b63"],["/posts/a530f7f0.html","c5b3cdf024a66d3c685302565afa9399"],["/posts/ae1da46b.html","c561eb0d5daf2ccb1c1f99109b6278ee"],["/posts/be01953a.html","f039b2a41288a761cbfeb6cd06995562"],["/posts/beb5106a.html","e190654d0511373924b3ca5df295d663"],["/posts/d4b9b850.html","5c5292929de81f5bd512ad7f8845d476"],["/posts/dd845106.html","1ca453dbcbbc1d160a0f830012a4391a"],["/posts/e35620b3.html","54aadf7d2885c1fae45eacd32e5faf1a"],["/posts/e4bced2a.html","1346cf3e420ff4f5acca38e851f2c2f8"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","d38c83fe0310e6cccb974191c774595a"],["/tags/C-语言/index.html","26c99c5c0e24459c97cb197369a8005c"],["/tags/C/index.html","805b343dfc4e432308cbbf462e3739d2"],["/tags/C/page/2/index.html","b8b55d56fd02861d9fca4c0b0113f937"],["/tags/Constraints/index.html","2f6b1206367ad33a34d152e001312108"],["/tags/C语言/index.html","15e1fa268204fdf8c215d5b8795c2646"],["/tags/Hadoop的安装/index.html","1735240b52910598450add0405058992"],["/tags/Hexo/index.html","5e1b54fd0edce538b993a214e2905ad2"],["/tags/Java/index.html","4f362e41e2a4778b543ccbfec1f8e9d1"],["/tags/Mac/index.html","9048ce5bfd8a2ee9943b716f63c9cd4e"],["/tags/Parallels-Desktop/index.html","4aacd39eeff0f4e93b8a42dbaafdd3d4"],["/tags/Python/index.html","55537ce8d2a4ec8e5c804c5f174d3482"],["/tags/Qt/index.html","60ff5056e994c2aa4101efcdce213b5f"],["/tags/SQL/index.html","03cab643f43ea52f78e6e425b9a649fb"],["/tags/Sql-Server/index.html","fcb8732f38304cd6f4546dfdc0a827fc"],["/tags/abbrlink/index.html","d0d65156f5f5d3deecfe3fc1cfbb80c1"],["/tags/create-database/index.html","9438ceca0e74cb27e673fef4354aaf52"],["/tags/create-table/index.html","aada5b568c6593c630152f8071e757f7"],["/tags/index.html","d51ec39b908b14a75c0c09d1834c9900"],["/tags/insert-into/index.html","dd3c7effa7478e506c8bd3dc36f30b08"],["/tags/冒泡排序/index.html","c33413f93bb4afbb0a8f43085b543604"],["/tags/双向循环链表/index.html","56eec06427ea352ff924f2cc885c542a"],["/tags/双向链表/index.html","cf25e21f89eee4829f5c854e03f16b13"],["/tags/希尔排序/index.html","61b293a5f2f81bf770264d6ecaa19c6c"],["/tags/插入排序/index.html","88c1a3bec260129283ba818e7d3a57fc"],["/tags/数据结构/index.html","dad33eeec742e2cf2cfc29072a722a5c"],["/tags/数据结构/page/2/index.html","b863616f8c553f53e1d7c2d9d1494c13"],["/tags/杨辉三角/index.html","b65df06585a85d2effe32d1e6bab48c8"],["/tags/栈/index.html","418bfa30425582f04a57c65e0807a199"],["/tags/类模板/index.html","a99cc5624441ca96cf30480066d15ba8"],["/tags/线性表/index.html","8bcba2135f51def394e514623209fdd1"],["/tags/选择排序/index.html","06589a6d6100560ef4dfb3e26828e7a4"],["/tags/链式栈/index.html","4ecb35f5b7ce9f35a864f95fe4a45265"],["/tags/链式队列/index.html","d8cdc87892559fd81ff1d0f200f2f57a"],["/tags/队列/index.html","2b6a5f3591fec6dfbf205b22e95077e2"],["/tags/顺序存储结构/index.html","fb596c9987e7b52a8f21f19e341806b5"],["/top/index.html","0d66715bb40aa7aed1d7c8b898148b1f"]];
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
