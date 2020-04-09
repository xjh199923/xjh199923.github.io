/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","3d72bfd6ca335d1d8933f0e852559417"],["/archives/2019/11/index.html","24832473b4c26488114ae738fd889584"],["/archives/2019/12/index.html","b2c4ddaf95fed80cf4cb8f5907765435"],["/archives/2019/index.html","346169a9bda1f8ef1cbdf9308682fbc7"],["/archives/2020/01/index.html","e97e9b8bbcab474d968d705c74fb206e"],["/archives/2020/02/index.html","661299417ea76b1ef136b9c768cc822c"],["/archives/2020/03/index.html","7b4c02795740d1b02e7fc9712ca320bf"],["/archives/2020/04/index.html","20ad098eb9265a7586b196f94314c32e"],["/archives/2020/index.html","bfef6c7a67681d8e4e958bb66456d45e"],["/archives/2020/page/2/index.html","8ba9c4516b1ff7f39ae18517d50ed2da"],["/archives/2020/page/3/index.html","6b1f47a588be9783487c608ffcc7621b"],["/archives/index.html","542a5ba9e9cc7477944f387233a168c8"],["/archives/page/2/index.html","911fd10afea624984d41b1cf46e15897"],["/archives/page/3/index.html","6e0fab807a588a66d45ac59b6dda5b13"],["/archives/page/4/index.html","3ded5d733b1676f1b94eada965bae872"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","4d4977b69b928505834dee3a011c5fa3"],["/categories/C语言/index.html","67bbbf4b4a65ec376f163e2814cd3418"],["/categories/C语言/数据结构/index.html","655843ee9ff4d5a260d85ddccb12c103"],["/categories/Hexo/index.html","3db761fbdb2ffc61728db37cdf70d210"],["/categories/Mac/Qt/index.html","19c3c139f498892ead7534806abd8e9d"],["/categories/Mac/Sql-Server/index.html","51b3ae7ecb097bd1145b33826b349870"],["/categories/Mac/index.html","b9a928c05852a87fbe061b0f7378187f"],["/categories/SQL/index.html","f50581c821f44d7a0395a272bc513fee"],["/categories/Ubuntu/Hadoop/index.html","202cf47916c0241f49bf764cfe3417ec"],["/categories/Ubuntu/index.html","5579bd9d6005c062c20490365acda56b"],["/categories/index.html","6fab59b84cf6464baf827f6185af544a"],["/categories/数据结构/C/Java/Python/index.html","0c2169869800cb9d3cad0fbe1b1983e0"],["/categories/数据结构/C/Java/Python/排序/index.html","9cf60664c4337c6e24ca1d2b34cf447b"],["/categories/数据结构/C/Java/index.html","7cce7e490c58cf84edaeebf751b5c2c3"],["/categories/数据结构/C/index.html","8180c2bf50737f0276d50d5038a27f25"],["/categories/数据结构/C/page/2/index.html","cfb65b4692c27ddc9cb3b14d7565055f"],["/categories/数据结构/C/双向循环链表/index.html","be320f40f6ac5adba2b5dff6a14ef6a4"],["/categories/数据结构/C/双向链表/index.html","853de51330469e42619c8fe75f09c415"],["/categories/数据结构/C/顺序存储结构/index.html","2f88d480f9c966154bb2501cf2dc1298"],["/categories/数据结构/index.html","fd6d51b0c0c12533eb0ae65f707f38db"],["/categories/数据结构/page/2/index.html","09483bdd9a94c685446d71cb2dcd91f7"],["/categories/玩转Mac/index.html","2d82dfb48b01b9cb24c5ebc298bc7d53"],["/categories/链式栈/index.html","900de381e726b15d6a0a1987c61529a9"],["/categories/链式栈/数据结构/index.html","dbca1e254598f157234191dc46afd4e1"],["/categories/顺序栈/index.html","4ba76a05ce008479ebb9229feec23d84"],["/categories/顺序栈/数据结构/index.html","8e9ed5a83cf98413129eff74d8d15be2"],["/categories/顺序队列/index.html","783946e6e9c234906ad981e98cbc6258"],["/categories/顺序队列/数据结构/index.html","2d68be39b46dacc559836d9d19e3b3fd"],["/css/main.css","a7d18f196509604e8e900609d06421a5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","584b6c280412086563980047ea993b78"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","ed5497ad9725bf815b66587dccbb4899"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d03b2097e38cefd99fa08959fa9675f4"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d59c07740ebb53b123edbf46482cf6ad"],["/js/src/algolia-search.js","dc00330e4e3dc33b89be060aabb66a46"],["/js/src/bootstrap.js","02f1ecb56a231c40860dc0b534831293"],["/js/src/bubble.js","7a60bad61cd6192aa2a896b0acafe281"],["/js/src/clipboard-use.js","2288569db7384ca680e51cb7bd49dee7"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6366ff02f5476e697cf7a697b4b9d019"],["/js/src/exturl.js","2984a52c57efd44a8b656c8045aa0a4a"],["/js/src/hook-duoshuo.js","141efbed984392796ba5d1444eab3ed2"],["/js/src/js.cookie.js","c6c0a60410c56773b66825a049bd72e6"],["/js/src/linkcard.js","e914afcd7d509fd018c5a51ad0484d87"],["/js/src/motion.js","126913927e5a88c764ee1056e6cb073b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f3a2f8b63188cc39fceee3938346b9c4"],["/js/src/schemes/pisces.js","9f5041c3927142b72961983559cc544b"],["/js/src/scroll-cookie.js","857750a465ae706b8ca77dea996e5893"],["/js/src/scrollspy.js","6b47e5b3245c060827174f34e1656c14"],["/js/src/utils.js","142510045fda7ca8e4fd3eed364d65bd"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9542af6415fc9f98c189d84587a0faf4"],["/lib/Han/dist/han.js","cb3a3342377f7e5b0c92cfee5ef0e47e"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c4c92ae6f53ee2eb122fd6039811f841"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e405f938862d960596698cfd8238e868"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6f67f43fce9026e3063fbaaeeaf8963d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a9d1acefcf29e5faa3ffb4cd9d8614bf"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","981b5bf49afa941257aa6c430bbd82e5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","dbcaabb1f0abc671fdb1708eee7a7d5d"],["/lib/fancybox/source/jquery.fancybox.css","5e8d5ac726d38626271e7f0395e35a3e"],["/lib/fancybox/source/jquery.fancybox.js","dbb28fe12b42f059dadc3288fb6bdfdd"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","cfd95fe05281ef12e32340be0dcfbf94"],["/lib/fastclick/lib/fastclick.js","3a2be7045edff0555b40f4e72a92d90e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5d7ba1456478983c92e199d1edd8f176"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7fd70e4b0809ec826411b434f14171cd"],["/lib/jquery_lazyload/README.html","321bbf5787e64502570c512dfb2e8fa8"],["/lib/jquery_lazyload/jquery.lazyload.js","1b8123e2ef5cc5e02296a535022f0455"],["/lib/jquery_lazyload/jquery.scrollstop.js","0ebfa2fe84acbb1ed4a3a7f149d38469"],["/lib/needsharebutton/font-embedded.css","70e1458765a90874ddfd901a07e21208"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","d2b663c794928835d2c4897c5262a593"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a9cb92ad9c8a34428b1cffb6cf4f4b57"],["/lib/velocity/velocity.js","9af0b890a016b6caf3cebe1883988f17"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","74424490b60a92c7ace08694af625978"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","36b1f17e228909e1da378ecdd6a65ead"],["/links/index.html","76b8d587dfa1476030627f275e20ce9a"],["/live2d-widget/README.html","ed5987b9056cfc48fd5a4279c517755b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","54951d75ffe92acee8f47da2dd8079ff"],["/live2d-widget/demo/demo1.html","b0b5694a5d0e9d2b2a3dcea6a022cb21"],["/live2d-widget/demo/demo2.html","84ad34ec1a525c2d84e23f44ba23ccd1"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e38a8235d9aabfaf3fd1d73680caaeee"],["/movies/index.html","7f8049e67102d3ec0d86784102ba78b2"],["/music/index.html","3c290e5da3c567d8bfb820a5e109d0ff"],["/page/2/index.html","a2b280847b6d612aaeedf70e03d1aeb1"],["/page/3/index.html","1648a825db8997332931ec1fad68fe12"],["/page/4/index.html","cd2169f3f881227447f3364f647e7a55"],["/page/5/index.html","0551ea47fce37d2e2aa56e4e700de9ea"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","146657a0779c3cef8f0330411b1ba81e"],["/posts/15468.html","a2e100326655e8fd638c7bb000f3f662"],["/posts/16107.html","028ff5edee1ebfb59a451d2641614130"],["/posts/201e1121.html","b7be930a0ed3b494e1ea1981417d20c1"],["/posts/20352.html","bb5af98224e264b80945415d4b16e3ba"],["/posts/21238.html","34f710680278dc8523b6e114a5342927"],["/posts/22281.html","2545ffadcb719f0a98a575d9c3a5716f"],["/posts/259f9205.html","e0a2fb8054295a4b4d446334667986e4"],["/posts/278598dc.html","5b138b68a1800e482f6626b2d15c2118"],["/posts/2d063bc3.html","d51003f72679181c1f56dc688737f007"],["/posts/30c404a6.html","a0cb0c2b5dea495a686fdfdbbca8a3ce"],["/posts/4d4e6c19.html","dfe6648ea12b2a609c8cf08634d4c350"],["/posts/4d712855.html","36180050032bb75d4b6f2163a2744380"],["/posts/51203.html","0b5ba1d37d0019de59884196581e8742"],["/posts/538e5180.html","a6b67320ae6ed7240e1a740991726ad6"],["/posts/5394fce7.html","a6bc9862598de290dc38df3a1e8b6976"],["/posts/59037.html","b5b1a15ecf1fae864d796bd50d9cf0f8"],["/posts/60816b5a.html","7a1809d5e07e4e1c14b64065de7809a0"],["/posts/6163d4b5.html","4a4aaf02464b3a345d00e7690fd275ed"],["/posts/69978469.html","038c584b5ae0358c8dfec4e87effa144"],["/posts/6a752619.html","4398d97d647bac9fdd40f3bdeae80510"],["/posts/6d7376dd.html","0941e57e82bfacd73220581655c4b16f"],["/posts/7fcb11a7.html","2aa56ecbcc9ccd1b89dfc78e3ea02451"],["/posts/8cc73e65.html","bf0dbb84ba3aecf16d5068286015c3d9"],["/posts/9b621d6f.html","3020bdda805b0390e72927e81bef1365"],["/posts/a530f7f0.html","db15d8ddb5898f45bcc8fdc032f08f41"],["/posts/ae1da46b.html","b3adca27175fbb052dc58518f160b3c6"],["/posts/be01953a.html","fa2b72128e3518ceeb1ba3d66cbb63f8"],["/posts/beb5106a.html","d71c20605d4c9ba0f78323126e0a7865"],["/posts/d4b9b850.html","81f54d1b4a8d8494edb52c9944c503ae"],["/posts/dd845106.html","1368e4d6d640ec93d51130d9ca373a77"],["/posts/e35620b3.html","f4c52c1e7871053ad1e9887efc8d6e15"],["/posts/e4bced2a.html","126c4fca372e6e1b06fbdcedd02d3fdc"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","4b602d7afb6d791238a5179d23d09f12"],["/tags/C-语言/index.html","d0b30985501214fceec9545323770aa0"],["/tags/C/index.html","9e30e7ab80c6a8445c8aea2fba1c7f68"],["/tags/C/page/2/index.html","7f793793f6b989efc701c0f6abf2b75b"],["/tags/Constraints/index.html","ba384a3f86b9e410981c5a75ee1ad89d"],["/tags/C语言/index.html","9f0c3434073f8273256bfd6b562f6dce"],["/tags/Hadoop/index.html","b0e743f97a2fa80cf4027f7e9aff66db"],["/tags/Hexo/index.html","5cc5e01f36404f1682b8a5e28b1df469"],["/tags/Java/index.html","bcca78a967036be06583ec3b759a1789"],["/tags/Mac/index.html","ffd0a9945154c93e2edcd6e0a5d70f2f"],["/tags/Parallels-Desktop/index.html","73889a60b1bedd4234b18ca5620b2da3"],["/tags/Python/index.html","9e7a7157495c611e0f058277c5d2c361"],["/tags/Qt/index.html","8ca35de6bc5f485911f85a09038aa8f7"],["/tags/SQL/index.html","fa05127350b1ac23287c2e851b9f087e"],["/tags/Sql-Server/index.html","c27efcb59b784a8b137f7d0bcf244631"],["/tags/abbrlink/index.html","1dd7a3849e258b287cecf109df38409a"],["/tags/create-database/index.html","5246cd43b7780be86842eac7fe68afaf"],["/tags/create-table/index.html","2a2242b15352f1f89f2e58161ebaa494"],["/tags/index.html","fd494a3d2cbf61897ec0210633c9d204"],["/tags/insert-into/index.html","e1c3396b132e5bdbc93f49e88928d188"],["/tags/冒泡排序/index.html","14c0db8f0cf9828ac7d91b473737c401"],["/tags/双向循环链表/index.html","6afc4ba77165b95b1475fc36af227770"],["/tags/双向链表/index.html","fd5838f778629d33b4345801ba10b20d"],["/tags/希尔排序/index.html","7b76dec13d45f1fe2ab3fd4bcb12b184"],["/tags/插入排序/index.html","295aa3658c33acb8be6bd1216386eaef"],["/tags/数据结构/index.html","605bc2c0e45583c75c32e854c258eea9"],["/tags/数据结构/page/2/index.html","467b9dbe151750d8a939bbd82ff46590"],["/tags/杨辉三角/index.html","bd2f34f7f9156072522dc62cd58e6bb9"],["/tags/栈/index.html","e1ebcf8a169847607aebf071e749871b"],["/tags/类模板/index.html","0f0bd8c6b53b7a80b0c028d52e4017d0"],["/tags/线性表/index.html","a4d07203d5487937fcd22e4de6af683b"],["/tags/选择排序/index.html","1cd21651b5767446704918eeb5f295b6"],["/tags/链式栈/index.html","75f11621907a06b44370668a94bfff47"],["/tags/链式队列/index.html","1832a45ee531d2d13f800accf2f1dce2"],["/tags/队列/index.html","ce77751a302a49152098a9a967eb75a1"],["/tags/顺序存储结构/index.html","5a02322a7ab0310417d89a43c63b6541"],["/top/index.html","1c653f6a028f0f7aa7f430503c194c4e"]];
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
