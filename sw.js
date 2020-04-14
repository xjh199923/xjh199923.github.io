/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","4da1cab218bfe45fe1db7b77c3f936b1"],["/archives/2019/11/index.html","6a19147156c26c5f1cd7f0e87ac905ab"],["/archives/2019/12/index.html","c9afa089b6f8b2405f730bd5204f4058"],["/archives/2019/index.html","181376374005f257ca69f87a7a3d4fd0"],["/archives/2020/01/index.html","77b6f4f27ac237cd65225d4e693b642c"],["/archives/2020/02/index.html","9df72d9efc23a4b395dc2e0030bf8faf"],["/archives/2020/03/index.html","a8aa58ea8fd845ea0665ed48ffa04662"],["/archives/2020/04/index.html","49b11e69668b75999dbc8538da0cf3b3"],["/archives/2020/index.html","a961c9cdc5652ec737b83fca034b6d2f"],["/archives/2020/page/2/index.html","57954aae59c7cbb876be0b2de88f9821"],["/archives/2020/page/3/index.html","5a715e8113ff2da48d154764a1a75bb7"],["/archives/index.html","eb298a81eb7641dc4a2a55a8dcd3b2c9"],["/archives/page/2/index.html","9bdc953b70546688ee6d007a10198bcd"],["/archives/page/3/index.html","e5c19fc7c308d425dd89e6c802a786ef"],["/archives/page/4/index.html","ae0e90c0d856890249b781c6b66f73fc"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","e26e90ee99a18571b6f3d21db5b927b2"],["/categories/C语言/index.html","14a0ae5e037b30f4a796f97ea58ea2a7"],["/categories/C语言/数据结构/index.html","67665a3558867a75693b6f702cf89178"],["/categories/Hexo/index.html","e2b1b0305668eea3fe6e43bda6a65a6d"],["/categories/Mac/Qt/index.html","84ac9169b859cf519098ac7887866100"],["/categories/Mac/Sql-Server/index.html","25ba74ae355a105c369630b347b89be2"],["/categories/Mac/index.html","4d63879f575b8553af5ee58ffb2bf562"],["/categories/SQL/index.html","3c2cbcfb2087b4df706fa14b7dbe6671"],["/categories/Ubuntu/Hadoop/index.html","a0b2f9726777a0fab55df19953146d5f"],["/categories/Ubuntu/index.html","9c913110fb03a10c445fbb8b7fee8cb9"],["/categories/index.html","b5768b20e4c84eccb522e6f4948a3c78"],["/categories/数据结构/C/Java/Python/index.html","424bd7d399db7c897b30d378aaf9d60f"],["/categories/数据结构/C/Java/Python/排序/index.html","c894e5a9b663ae57f8bbd41dd3e63626"],["/categories/数据结构/C/Java/index.html","6356afb12a06c31fc2249c2a73a94cdf"],["/categories/数据结构/C/index.html","66e02fcb5935a8593c559f9c9da18f06"],["/categories/数据结构/C/page/2/index.html","3f1ab72a1dd5834b03108c4c6bf49f3b"],["/categories/数据结构/C/双向循环链表/index.html","a4d4023727a3e913bc7df85af1a26d55"],["/categories/数据结构/C/双向链表/index.html","8757e2d37d0994c4fdf082450c8426c0"],["/categories/数据结构/C/顺序存储结构/index.html","2150f3247910a3cf5e9647a78692e6e2"],["/categories/数据结构/index.html","d6be072c2bd8dbfe7052600de0999617"],["/categories/数据结构/page/2/index.html","3b7096bc1d89c4373d705dcc9604e12d"],["/categories/玩转Mac/index.html","5b252913f20663dc39a7dfe5c14cfabd"],["/categories/链式栈/index.html","28b84572f467168d26f9719c88c1d25d"],["/categories/链式栈/数据结构/index.html","b1cfc2fc7622667171cc16a5417a64fb"],["/categories/顺序栈/index.html","69c3465859e2128e7211acb6e8437e09"],["/categories/顺序栈/数据结构/index.html","17327af3a9ddadec494c05adfb313c61"],["/categories/顺序队列/index.html","0203fa099a88a1e9ac21ea7434f3f06b"],["/categories/顺序队列/数据结构/index.html","5beccd32785d737416b19def85f3e794"],["/css/main.css","a4c375cad4b8f4983990918264b49810"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","474f747b8ad69b246b973f37bb46a4c7"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","44bdc5e96a42239848c67b4de0878b50"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c7f7f699da16421df9575689726ad9a3"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3b36ca4d91aa2aa2349610da142dcf9f"],["/js/src/algolia-search.js","f082af477ef9d3996202b9c91d624b90"],["/js/src/bootstrap.js","78a15302bcb7446fd5c4f4a3eb094299"],["/js/src/bubble.js","53d379d18cdba4c3aec428b61f6244bd"],["/js/src/clipboard-use.js","85e9622abe9bd8491c445c0300993a86"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4a77f63b00ead66649fa72f21c305338"],["/js/src/exturl.js","a9b9aed18c8953e55860ad0ef925bbc2"],["/js/src/hook-duoshuo.js","17a5c1c75f9b62d7ee79a6f5879c030f"],["/js/src/js.cookie.js","df0ecb8c9748d4c1e2440f2804110fc5"],["/js/src/linkcard.js","c469b32bc37e61cfc990cdc9226345f3"],["/js/src/motion.js","dadaa2e5126765e0fdf6b0fccbb644c3"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","4875521047b5436ff49e8396f274a1a3"],["/js/src/schemes/pisces.js","68631810457e320a4abfa0a7970238c0"],["/js/src/scroll-cookie.js","c78e952d312ae6c29d7813cfebe80f05"],["/js/src/scrollspy.js","277d7e44fc29e4f271a025cf55f20a07"],["/js/src/utils.js","5fb51ee6002e817982d4f366650bdb57"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","3e1691499684b863e6931876d8d8e04b"],["/lib/Han/dist/han.js","34008aef8f85842053a5c9fa5db7fc84"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","cd0af6e045bee52c8bda3c99ee1e67ad"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","edafdbf45841c859bdeeca8936bbb992"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4096eff124386df9cbfa0c7050bee4e6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7a3da822a32440794ba8f02e7a318aa5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c968caa1b1869fb1ad9c9748515f8443"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d6816c8381e6dd4917c4259b546b52b7"],["/lib/fancybox/source/jquery.fancybox.css","5d842aa211d19e10f5843f8fdae1ab90"],["/lib/fancybox/source/jquery.fancybox.js","1f2fac5cb0930a8c632c05297810028f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1900b150efb26b3611da88721b624727"],["/lib/fastclick/lib/fastclick.js","e615c6ba602954204c16ecc358f00459"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","dbf90a95e1ff7ccc534a82fbf72ca540"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e347bf2ab1470782ac0250b32dddc2e4"],["/lib/jquery_lazyload/README.html","61177af9292bc48ac51da9ef74b74218"],["/lib/jquery_lazyload/jquery.lazyload.js","1bbb5556b2d25fe4a15dcb5cc49e7a3d"],["/lib/jquery_lazyload/jquery.scrollstop.js","79c1b514afa6e1defd05c9d46356389e"],["/lib/needsharebutton/font-embedded.css","4721356a74a19ec6c402da25efae9403"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","16063100fb2ab05d7e7b5f667404d505"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","c3d62fd490505525aef8ad175e1608a8"],["/lib/velocity/velocity.js","3b9507d40bff9d9164f6354d55781c4a"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","658f489b65b2112834ae849c38979426"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e9bdf252b6d9c421839943dbe8f5e115"],["/links/index.html","1216021e949e8a64b1f48516977037ae"],["/live2d-widget/README.html","4e431149560ffc39790598fa8986d238"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d20d614535c3c88f66f6b0ad87c763eb"],["/live2d-widget/demo/demo1.html","bcceb3e691118012e69071070858aa61"],["/live2d-widget/demo/demo2.html","d9cf7a9be13cdb8b82cbca1757a14701"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7c0b35a56ea4eb1f58a610308abac96c"],["/movies/index.html","08ad8792cec2fc124c6d9645557d1b37"],["/music/index.html","6e80704186d97541f635fa1a51b1fb40"],["/page/2/index.html","07a7807b452987f9f77caca63eaf300d"],["/page/3/index.html","67b08cc7d51d76e3916390355b8994b1"],["/page/4/index.html","1c446f380b0660920a94893063e26d26"],["/page/5/index.html","0a7a9631a47ee3519f9790e8a13143e5"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","1f20c90600334c3774a19a7d027f697f"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","1c2340491c7446430a9b3cebf8184b2e"],["/posts/15468.html","0ea6ade542f802ca336ce9c3f4249203"],["/posts/16107.html","3449af8579ff9ed1aba62f0c02d2152e"],["/posts/201e1121.html","affb10fab09fa05c0a3ed4b86fe8578b"],["/posts/20352.html","88db183d9527d632e40bbaf4c40b215c"],["/posts/21238.html","1f0db99a08f7ac722ee4cf0b103d203f"],["/posts/22281.html","0599932120b3105d2f8c15fc1cd9b6a6"],["/posts/259f9205.html","37b4e4dcae1eef543aefc92a7a389276"],["/posts/278598dc.html","85ff2e7e1254fc44aaf205571e8def85"],["/posts/2d063bc3.html","52cb9cb065ba5801b5553ff2af9ceed4"],["/posts/30c404a6.html","8c2d5598a4f26353d77835d780602ea8"],["/posts/4d4e6c19.html","0cde00e28309c636c9dbb46cb52513ac"],["/posts/4d712855.html","9efcfe1aabb4085db97f2c56b3e80704"],["/posts/51203.html","932aface43e3c5b4a2adb7152e4b24a3"],["/posts/538e5180.html","024b728e4edbe6abae9aa73f6853bda3"],["/posts/5394fce7.html","a5dcb8d0d0e347a0879bb559be57b401"],["/posts/59037.html","f3c42f19c9a904ae400eef6a432729c6"],["/posts/60816b5a.html","d48c89448623406782183e18827aa98d"],["/posts/6163d4b5.html","44123f87f29bc085cbd5fa4a7594dd8c"],["/posts/69978469.html","f75e09a8b00f7bb670859300e09b067e"],["/posts/6a752619.html","efcc411eb844e246a7ded16ebf1faa26"],["/posts/6d7376dd.html","36dd3fae515acb9cbbb5f98e07ae8c0e"],["/posts/7fcb11a7.html","ce38298fadf5a9eea8deec912d92e85b"],["/posts/8cc73e65.html","faf8bdce68922a033a79f2a1659ad3f9"],["/posts/9b621d6f.html","4421256258f15cc1a6d5e178b74d567f"],["/posts/a530f7f0.html","468d669c846f6ad5370b29a01d2f3d94"],["/posts/ae1da46b.html","8c50a07492b23705bab880d9f1313436"],["/posts/be01953a.html","63b5beca5ea6eeb5d52b108be3c0e90a"],["/posts/beb5106a.html","1a5fe78773293cec3690b633676956eb"],["/posts/d4b9b850.html","b5e285485c8cbb705e3d38275e4b8624"],["/posts/dd845106.html","a63b03c245c1df75cd7f280638e7dcca"],["/posts/e35620b3.html","e5cefd1379c6b7329e7af75274037ff1"],["/posts/e4bced2a.html","3c4fc55d27143197253e6f96c1816449"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7c8643a5c2015f85659197eeb558eccd"],["/tags/C-语言/index.html","631ccdeafe0a4076b21363ceb5849de9"],["/tags/C/index.html","6516de55dda7507a39c6c61045d2a5e8"],["/tags/C/page/2/index.html","68ce1ab2ef5b896b0ca016a9f9c9367c"],["/tags/Constraints/index.html","13d0a707f400f96a11b73df0026d6140"],["/tags/C语言/index.html","2357beaee0793cd409819560484d467c"],["/tags/Hadoop的安装/index.html","1e3601b5bafcb4019bc80bfc46b6237e"],["/tags/Hexo/index.html","10f297202ac3fdc0555a398c6b76309d"],["/tags/Java/index.html","a64763d2b3f705993ba08cda27cde0c8"],["/tags/Mac/index.html","588e08615b53780cf693a1a6e1f374fd"],["/tags/Parallels-Desktop/index.html","68f5954c36fa5ac77ce44eb264c5369f"],["/tags/Python/index.html","44bc2e0a5cbbc2cf4c2c7d4441c475c2"],["/tags/Qt/index.html","eb3b525360acf72571f16fe79a6c6286"],["/tags/SQL/index.html","2b25b096e1338f24249256c4cbe50597"],["/tags/Sql-Server/index.html","09eb76f018ccd734711e159e405595a3"],["/tags/abbrlink/index.html","2dbfc8338658efffd8ef26313819d462"],["/tags/create-database/index.html","3eb7ee17c029f3ca92b17b73995d0933"],["/tags/create-table/index.html","60f6f517f2d4192cb712992e67cda51c"],["/tags/index.html","1ff5d2deae83723a28f9d4136a9ced57"],["/tags/insert-into/index.html","429b2572d1f7ae8e3386e8996057fb84"],["/tags/冒泡排序/index.html","f811b1212885e1f1bfb2991109590446"],["/tags/双向循环链表/index.html","ad623ac6613af3b72bd7dfc03bae80e2"],["/tags/双向链表/index.html","e62d7683995aaf781aeda4614c161ad8"],["/tags/希尔排序/index.html","c01d7a8e7ab2737d78208b09553990ec"],["/tags/插入排序/index.html","4913f64771dd153c17f266009bb2c634"],["/tags/数据结构/index.html","54361fda4e712c29ebea170322fef99e"],["/tags/数据结构/page/2/index.html","1c0a863eb72b8d5640cabb869b1cbd03"],["/tags/杨辉三角/index.html","7bf194dadff9460ef891220cfafd3c81"],["/tags/栈/index.html","948428afa2668a3ef5cb7d3cccd07ceb"],["/tags/类模板/index.html","0b00e52c72130047cd490532f2212f0c"],["/tags/线性表/index.html","23cfa058f3f2c62acd5f9b487b278228"],["/tags/选择排序/index.html","022d3d30a26ce2c63bce9ba9de339fba"],["/tags/链式栈/index.html","6df0697fcde8cc21e6e6526a4041c0c5"],["/tags/链式队列/index.html","e29a9cc78f81a285bd88efa2b6055166"],["/tags/队列/index.html","34b601ce709d3213b8fa4bf463d34ba5"],["/tags/顺序存储结构/index.html","9628e374037ae5679068caedb54ad37d"],["/top/index.html","866226239bd571cd60185f9435081eac"]];
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
