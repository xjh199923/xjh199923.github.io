/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","90579d836318ad5b7891a901e8a0cc40"],["/archives/2019/11/index.html","8f6e75c0c30eeac5b37ad391e670d46a"],["/archives/2019/12/index.html","2c1b8c6dbd5289019facd9148297fefa"],["/archives/2019/index.html","5fa48434f2b6b61c187b6d3cb1da6e2c"],["/archives/2020/01/index.html","229b7d5fe3590871d14a5ca91231b696"],["/archives/2020/02/index.html","c4f86142b8a8eef1e5a027821e536f10"],["/archives/2020/03/index.html","02aa5bc7476e9eb9360057893c293b46"],["/archives/2020/04/index.html","88563a12a2890b3f5eba846a81660739"],["/archives/2020/index.html","910cb637404f21f14e186fcf6b870e28"],["/archives/2020/page/2/index.html","bbea0245e12b744362d26df6f09fb4ed"],["/archives/2020/page/3/index.html","41ee2d214ceecf2e9142756400626bec"],["/archives/index.html","bd4a340b8a5085bd45aa1ebe2295f095"],["/archives/page/2/index.html","c257ff4201c1e03d5395fca655738519"],["/archives/page/3/index.html","6f46a9dd79006429b9845dad39e662ec"],["/archives/page/4/index.html","6c680afc9c4b8ebea555c606e7865ec5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/birthday/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/birthday/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/birthday/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/1.png","1b5151ba044fa4a25a38d170ca58586a"],["/birthday/img/10.png","73fbbc5f8dc33778aab4054f2382913b"],["/birthday/img/11.png","e6518d92f125744d3d4c00ff05eaa73f"],["/birthday/img/12.png","bf859ebc2e76802bc08e76f9c19d2f3f"],["/birthday/img/13.png","d9e6ef2821b04d0653e22b862fbcee51"],["/birthday/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/birthday/img/2.png","adaa93af6daa5d4199131c330697755b"],["/birthday/img/3.png","1db68a47aa01ec4002b44131883e07db"],["/birthday/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/birthday/img/4.png","2e3f96852d50da6a3420d761fd713f61"],["/birthday/img/5.png","c2a4931dcb0d6b1564ef2c8bd44dd510"],["/birthday/img/6.png","94feccd0777c59d5b46f46dba5fead37"],["/birthday/img/7.png","42b0eca3ade645a76c17d6de2fb3de46"],["/birthday/img/8.png","d103456df6f77c8b9833adab1240e20f"],["/birthday/img/9.png","6d6e6dad275a9972229dd5d41f3a1898"],["/birthday/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/birthday/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/birthday/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/birthday/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/birthday/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/birthday/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/birthday/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/birthday/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/birthday/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/birthday/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/birthday/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/birthday/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/birthday/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/birthday/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/birthday/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/birthday/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/birthday/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/birthday/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/birthday/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/birthday/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/birthday/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/birthday/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/birthday/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/birthday/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/birthday/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/birthday/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/birthday/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/birthday/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/birthday/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/birthday/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/birthday/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/birthday/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/birthday/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/birthday/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/birthday/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/birthday/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/birthday/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/birthday/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/birthday/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/birthday/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/birthday/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/birthday/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/birthday/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/birthday/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/birthday/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/birthday/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/birthday/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/birthday/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/birthday/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/birthday/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/birthday/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/birthday/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/birthday/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/birthday/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/birthday/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/birthday/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/birthday/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/birthday/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/birthday/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/birthday/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/birthday/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/birthday/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/birthday/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/birthday/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/birthday/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/birthday/index.html","918f34cfacb0ff5f16e80516c627a890"],["/birthday/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/birthday/love.min.js","98a427c2573b4799164f02f870f83972"],["/books/index.html","a040b01aa00bd22a75d6620719b95a68"],["/categories/C语言/index.html","adfe53a6921f06f331fa41fef57b338f"],["/categories/C语言/数据结构/index.html","2712b432da55ff07b85627f9da9fd0a8"],["/categories/Hexo/index.html","ffd7e731479ece553282a49ec4cad551"],["/categories/Mac/Qt/index.html","9e18809c1fb5b1d310c08f7c67e3ddaf"],["/categories/Mac/Sql-Server/index.html","94942dbe25f5f391d40e610ef2aa2df1"],["/categories/Mac/index.html","c99e0fd3bf04aa64dd60da5122d0cd42"],["/categories/SQL/index.html","ae3880ba502921cd3f9d33627559feac"],["/categories/Ubuntu/Hadoop/index.html","6f4756f956346e4682878e3c45e5a039"],["/categories/Ubuntu/index.html","7e5a1e08bd772260c89faef51d109619"],["/categories/index.html","189e77357d5cc8d2fc49f3e9eb0efc02"],["/categories/数据结构/C/Java/Python/index.html","fd3a44c23a1364bc5cfc7edec286b834"],["/categories/数据结构/C/Java/Python/排序/index.html","11a5daf2b97e1da37f3b923cdee954e9"],["/categories/数据结构/C/Java/index.html","e1686d4f95ccfa11eceefa79a60b4706"],["/categories/数据结构/C/index.html","d4476e144f03f291bc057d76347c5905"],["/categories/数据结构/C/page/2/index.html","580b929e9801e587bd7e939e5ec5b749"],["/categories/数据结构/C/双向循环链表/index.html","ff3ca808ca816a864859502b9190378a"],["/categories/数据结构/C/双向链表/index.html","22690ce71f90ee65b5b8801db826f189"],["/categories/数据结构/C/顺序存储结构/index.html","5d32b1f549e700c698171eb3e597ac0d"],["/categories/数据结构/index.html","90a589ee2704266437610d515bbf3fd2"],["/categories/数据结构/page/2/index.html","fedf634f87016f783273eb88df743472"],["/categories/玩转Mac/index.html","d249893897ed1bc83ebffb167c9f6c13"],["/categories/链式栈/index.html","92848558320e754f20a948a66fea3b20"],["/categories/链式栈/数据结构/index.html","82b06751df05bb8e372f07880ea53bf9"],["/categories/顺序栈/index.html","598cda27ec7e4781a3c606a3d1fa092a"],["/categories/顺序栈/数据结构/index.html","0c16277650546193ea564ce9b0fc398f"],["/categories/顺序队列/index.html","8815206ca90fc7ebcbf7f67bbad90ae3"],["/categories/顺序队列/数据结构/index.html","d34ae24d4a3d8fd977d06e5365c0c34d"],["/css/main.css","01a94d307e4acf76e6d72f852f4e19f0"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9aa866ef36a729c5e75a19f89d49e6d2"],["/emoji/OK.gif","c7514ff6ec190597f522e848d5ea6690"],["/emoji/aini.gif","b097fb0e06d460d0bbd297e9d4d99709"],["/emoji/aixin.gif","6b9fa9b7943c5b246797693c3db4ee84"],["/emoji/aoman.gif","7e12f2845e4a4e720fa3fe066edc9d45"],["/emoji/baiyan.gif","2de3b3a684755d1f5f407750eb78a808"],["/emoji/bangbangtang.gif","1869b6a355c6f0f5c4193088bf6dc327"],["/emoji/baojin.gif","89f41744c6cb1b8a0a297dfaf17d7784"],["/emoji/baoquan.gif","3ae1c706081d4ef86be8dfb3dac7d36e"],["/emoji/bishi.gif","ebe66c9a99e64779a17f2163ab7136c6"],["/emoji/bizui.gif","7e38a61a43fd47a8716695a816c590bf"],["/emoji/c_coolb.png","2370f3ca97733d45618d18b26a5a028f"],["/emoji/c_fived.png","d716ac9bb62775f8debff31adec47b44"],["/emoji/c_fivef.png","cc217d104e2cc5fdd5140420844e9336"],["/emoji/c_fivem.png","196581d0c0ef022a727350592543d04e"],["/emoji/c_fiveo.png","864d65e31ad65aba195504041ce2cf60"],["/emoji/c_fivey.png","8aebb6c8228e8458f9f89461dd385f8d"],["/emoji/c_fy.png","0d34bb0e4922ef2ef3e0fa7fc0734cba"],["/emoji/c_oned.png","766fcd652933c07959215ad4886fd2f7"],["/emoji/c_onef.png","ea35ed1ee9ab4cb4addaf564397d714f"],["/emoji/c_onem.png","34ecef9de994d60c0ee483499e78142b"],["/emoji/c_oneo.png","da28438db246f62fbfbacd15dccceec7"],["/emoji/c_oney.png","ab4fb91a4aa73fcf719c697e88ee386c"],["/emoji/c_oy.png","ba4bef915d99ca8314e2b9a214465d8d"],["/emoji/c_teny.png","bac9c769d1c721595919b809cf888324"],["/emoji/c_twod.png","c3287cebc576d9b4b059aa2e69412f2e"],["/emoji/c_twof.png","3d2c1829ffc89e93a225655103e9dbd9"],["/emoji/c_twom.png","e1492b86236d41da1e585d8577790a15"],["/emoji/c_twoo.png","287f5f860cbb25898b6d9c9b724ddf47"],["/emoji/c_twoy.png","2015201b64899e3c014479bb30cbdc80"],["/emoji/c_ty.png","f76ece24989f31af6d73573afa31d669"],["/emoji/cahan.gif","b65dba32a123a79c184c889d86e304d6"],["/emoji/caidao.gif","984d90b0d092e8fdf74837d84757e038"],["/emoji/chi.gif","7dacc46ab1c1ceb8e8201f3b51405df7"],["/emoji/ciya.gif","f5ad875bfdce81063991dab62b2971f9"],["/emoji/coolapk_emotion_100_qqdoge.png","957fc0201bd73155ba35a043c6c71d55"],["/emoji/coolapk_emotion_1010.png","9f0723d4df27fed09c9e1e81a6d664a8"],["/emoji/coolapk_emotion_1011.png","4c1c988d915f1ee370b16d84d5875565"],["/emoji/coolapk_emotion_1012.png","35960df9c5777b52cbf1f9766701e16c"],["/emoji/coolapk_emotion_1013.png","5ed1840b7aa4081a265c64e20a93866d"],["/emoji/coolapk_emotion_1014.png","3b9459e47b27b70a793954aa75dc06f0"],["/emoji/coolapk_emotion_1015.png","ea509623e26a7d43b90f04a8eabeca8f"],["/emoji/coolapk_emotion_1016.png","31aede1faa0bb64aa563db024de799c2"],["/emoji/coolapk_emotion_1017.png","1902222811376eb1880a80ccb8fa5866"],["/emoji/coolapk_emotion_1018.png","20294b20b5a0cebc95b4d9286d9ca559"],["/emoji/coolapk_emotion_1019.png","a44eefea97650f92d681f94ad4888451"],["/emoji/coolapk_emotion_101_pyjiaoyi.png","cdce53929ae2ce463b7e04eea8dc5c10"],["/emoji/coolapk_emotion_1020.png","8e1f3a4a0a274974eaf1c566ac090e80"],["/emoji/coolapk_emotion_1021.png","3f4d6ef56bc9c28011b18a2c08a0c890"],["/emoji/coolapk_emotion_102_fadai.png","d425491a0d04e6635395ef406854a716"],["/emoji/coolapk_emotion_103_nb.png","14dfcd25b22361cd6241b3a8f66bf144"],["/emoji/coolapk_emotion_104.png","9a5b0ca14ddac12a967545214d262f4e"],["/emoji/coolapk_emotion_105.png","714cb25616303d2ba90214970dc3fd8f"],["/emoji/coolapk_emotion_106.png","ccde1de5843547b602d5f4c3783b2833"],["/emoji/coolapk_emotion_107.png","f594540aa5c15f3172370f646fe71ccb"],["/emoji/coolapk_emotion_108.png","8287c4def3e6d3ad5abc5cd37a884d94"],["/emoji/coolapk_emotion_109.png","fd4e9933553f46c5e53ed5fafe0ac226"],["/emoji/coolapk_emotion_10_aoman.png","797a802d24cd42fa1f01d14645bbf2a7"],["/emoji/coolapk_emotion_11_yiwen.png","d0532af3790c40e485ebe8d68afb8be6"],["/emoji/coolapk_emotion_12_wuyu.png","a9609be9b0dbc043ca04bec27dfb9ec3"],["/emoji/coolapk_emotion_13_huaixiao.png","7b3d0913c1768472b5559864e10a8bd0"],["/emoji/coolapk_emotion_14_bishi.png","0cc52b814226a4c4b36fa9acebd7581c"],["/emoji/coolapk_emotion_15_fanu.png","4e931452f5cfe931d6e605668a813da7"],["/emoji/coolapk_emotion_16_tuosai.png","cd996074ca5737fdd93be7949ac234bd"],["/emoji/coolapk_emotion_17_tushe.png","99247a36ffe105a136161aa9739f5f86"],["/emoji/coolapk_emotion_18_han.png","fc552c84d28e45724cc9260c893158f4"],["/emoji/coolapk_emotion_19_koubi.png","52f3bae86b0bd7a24f7fbd7ae2ad5597"],["/emoji/coolapk_emotion_1_hahaha.png","c7a03093b4f57812bdfe1cfa23840bf9"],["/emoji/coolapk_emotion_20_qinqin.png","2be24f4db17f532a2b61f38ea4470326"],["/emoji/coolapk_emotion_21_penxue.png","121b5fc758501d45045f2b3912e6d6da"],["/emoji/coolapk_emotion_22_xiaoyan.png","7d758ef65f58329499880ad4e211abdb"],["/emoji/coolapk_emotion_23_shui.png","72efa438b621e2e22c45d914a2f77ed4"],["/emoji/coolapk_emotion_24_wuzuixiao.png","5e25872a7dfbefba43336a59b50aa33c"],["/emoji/coolapk_emotion_25_zaijian.png","f4d94adb134ef98b47453aa6534b3288"],["/emoji/coolapk_emotion_26_kelian.png","680b4cb4b0960f7462fba5d77cc54cef"],["/emoji/coolapk_emotion_27_qiang.png","20e38c6360c285794f3a60dd9f95138e"],["/emoji/coolapk_emotion_28_ruo.png","3caf37719a3aef06f914ada8b59850c9"],["/emoji/coolapk_emotion_29_baoquan.png","8c4453e5d539fc44f67997afb3f5ee3f"],["/emoji/coolapk_emotion_2_jingya.png","5e94c57b3277a11d091159a7b5305258"],["/emoji/coolapk_emotion_30_ok.png","5b1dd3b99cda9b7328346dbe89b45349"],["/emoji/coolapk_emotion_31_xiaoku.png","f89c503f3df8a9b87ccb7c217cf194a8"],["/emoji/coolapk_emotion_32_heiha.png","3e5aa0c112203e74e5326d1636e0c36f"],["/emoji/coolapk_emotion_33_wulian.png","47506e31b724bd437be22cd9df9345b3"],["/emoji/coolapk_emotion_34_jizhi.png","3fe5ffdd6e76c3e38cd1ffa5397e0eb1"],["/emoji/coolapk_emotion_35_ye.png","446d1b55642d8a22c7cfe958e282e523"],["/emoji/coolapk_emotion_36_ku.png","1a849c6e25a75ad2e55b3fb0a5ad5268"],["/emoji/coolapk_emotion_37_doge.png","5c7d8d2e7a3cdc3b26337ca74bf70f7e"],["/emoji/coolapk_emotion_38_wozuimei.png","931518820184c319a9367596d113f45a"],["/emoji/coolapk_emotion_39_caidao.png","d71662b57c6b96652dc3153f45730558"],["/emoji/coolapk_emotion_3_ciya.png","b07be3392b9096584b055ce954053b95"],["/emoji/coolapk_emotion_40_aixin.png","614d3cb41147d95f7a2a8a6ef00e75ea"],["/emoji/coolapk_emotion_41_meigui.png","11bf900bcdc9295a2ae161b990bd41e1"],["/emoji/coolapk_emotion_42_diaoxie.png","dd16f3f94f301cffa453daa0aa0a3cc4"],["/emoji/coolapk_emotion_43_heixian.png","dea819cda01cd37c8ce67346d138fefd"],["/emoji/coolapk_emotion_44_pen.png","6dd16f4f726b5b0410d0f41af208ca23"],["/emoji/coolapk_emotion_45_yinxian.png","0e9ca26045d6e2c49fc371cf65ee0167"],["/emoji/coolapk_emotion_46_nanguo.png","3bad13ab29f5f869aa987ccf60f0eecf"],["/emoji/coolapk_emotion_47_weiqu.png","c4b47475e6f557091ed91a1a9db63116"],["/emoji/coolapk_emotion_48_weiweiyixiao.png","e95f1200a21bce61e627ca7ec0950767"],["/emoji/coolapk_emotion_49_huanhu.png","061c4f84d478872dd5ff49df2f35d7aa"],["/emoji/coolapk_emotion_4_liulei.png","e275787332dc18d54122247459381508"],["/emoji/coolapk_emotion_50_xinsui.png","b236b1999f07bb5fa12307d9ad80edae"],["/emoji/coolapk_emotion_51_chigua.png","98356dc547048fd5af6f9a88bd1a415a"],["/emoji/coolapk_emotion_52_hejiu.png","d2d1998522e0e8d142aa9813c685c1e1"],["/emoji/coolapk_emotion_53_pu.png","9f437a836bf858a6d1d7a6f9d85ea5b3"],["/emoji/coolapk_emotion_54_hongyaowan.png","9ad9f1c6fa6e39d7122a941bf05a34c4"],["/emoji/coolapk_emotion_55_lvyaowan.png","46eef6c373f6dc623de00232abf4d1b0"],["/emoji/coolapk_emotion_56_dogexiaoku.png","6441b1b40f6ff81a6d45812df5e3d5b6"],["/emoji/coolapk_emotion_57_dogehechi.png","6cf032057b40f20aa0638080b2710757"],["/emoji/coolapk_emotion_58_dogeyuanliangta.png","ae843489d03d4da9d18447ccb81314d7"],["/emoji/coolapk_emotion_59_erha.png","931289a5cd820c963cc4874201c54133"],["/emoji/coolapk_emotion_5_keai.png","145b3ddef07d59549e68ac7c9d8e8d32"],["/emoji/coolapk_emotion_60_kuan.png","a8a0474cf76ebab178e710bbd9ab3857"],["/emoji/coolapk_emotion_61_lvmao.png","a406729a06e864adc4861daa554e501c"],["/emoji/coolapk_emotion_62_huaji.png","13ec054e2a0275ca31a6bdcfcd1b2855"],["/emoji/coolapk_emotion_63_liuhanhuaji.png","54694707dd3e382c6dbb2a8693b54218"],["/emoji/coolapk_emotion_64_shounuehuaji.png","1b5457e81385af39c4cd518e55732304"],["/emoji/coolapk_emotion_65_coshuaji.png","6fdd161a83d27d3b8b17e9c5fb745fb6"],["/emoji/coolapk_emotion_66_doujiyanhuaji.png","9e449209158b9158266af5ec3325c27b"],["/emoji/coolapk_emotion_67_mojinghuaji.png","6f20fcedf9aac97cf995472f50c5cd86"],["/emoji/coolapk_emotion_68.png","1bf06eebf68a4cd5bfd624f5c51e2e9b"],["/emoji/coolapk_emotion_69.png","036c2977686f9695ff61abf5d078edff"],["/emoji/coolapk_emotion_6_weixiao.png","caf97721da939a49fa2dd729a8da4b65"],["/emoji/coolapk_emotion_70.png","52bb464717d9234c5ec58d4200fb022c"],["/emoji/coolapk_emotion_71.png","143d8dd74602f5f9fde43f4dd0bb1dea"],["/emoji/coolapk_emotion_72.png","7a10c5f3c0ec6c42355907984f8a1bdc"],["/emoji/coolapk_emotion_73.png","fbda899da13bce4d9d13f3c9745d7a54"],["/emoji/coolapk_emotion_74.png","15bc06765533487e49e44361659f1610"],["/emoji/coolapk_emotion_75.png","b42d473a2cefcb12a48d7a56eb5fc056"],["/emoji/coolapk_emotion_76.png","46e53a44ee080088d7cc69f009533955"],["/emoji/coolapk_emotion_77.png","7834c9379a685409b47d176c9df5f279"],["/emoji/coolapk_emotion_78.png","d48c0eb334280624d9abc3a643e7fb14"],["/emoji/coolapk_emotion_79.png","7a5a14421cbc5badf2a4c3634dfa2c53"],["/emoji/coolapk_emotion_7_hehe.png","9702a153d84e00335320aa60c52184e7"],["/emoji/coolapk_emotion_80.png","7a74bad1225d78c163b0302865fff35f"],["/emoji/coolapk_emotion_81_naikezui.png","77f71bddc7f37d4823422a4c1c7d02df"],["/emoji/coolapk_emotion_82_miaomiao.png","07dd8b8653f20c297ce4800828fd711d"],["/emoji/coolapk_emotion_83_huoba.png","9ac77bf866921ec21ec4d47f19cb1e2d"],["/emoji/coolapk_emotion_84_baiyan.png","c01c6cc10f9c6734997503a46228a191"],["/emoji/coolapk_emotion_85.png","a1841a7e0f2a851f9b172e2bb2d7c8be"],["/emoji/coolapk_emotion_86.png","e407f75dc9357a1ed53f8c1bbab4f83e"],["/emoji/coolapk_emotion_87.png","2390bb38b428408f4ceb46a6c19e6a30"],["/emoji/coolapk_emotion_88.png","513bb3dd6e73afedfe8d921c2bfa45b3"],["/emoji/coolapk_emotion_89.png","35a0639289e2e24613f125a633a4623d"],["/emoji/coolapk_emotion_8_piezui.png","02e8b4e76408f8691f4194ea2d77dba1"],["/emoji/coolapk_emotion_90.png","03a514524ed56a188ac11afd55d460e0"],["/emoji/coolapk_emotion_91.png","6d5e3e3afd467aa7076632e4e638f534"],["/emoji/coolapk_emotion_92.png","a8a118bbfd5fe7ef8840071ce64b0e90"],["/emoji/coolapk_emotion_93.png","1a21982d855278eb2f51631f2269cd3e"],["/emoji/coolapk_emotion_94.png","6f976ee0fac99c23e2884b1a460fbd73"],["/emoji/coolapk_emotion_95_erhading.png","ef2c0cbc44bf9476ff1307ce9c07c7a9"],["/emoji/coolapk_emotion_96_kuanlvmao.png","f24099479980538c82d369ad395b3bac"],["/emoji/coolapk_emotion_97_haixiu.png","d217546e05ea1bf84733edb2402aaa02"],["/emoji/coolapk_emotion_98_wunai.png","6bcb35d6a12b55b60792e032597d0433"],["/emoji/coolapk_emotion_99_zhoumei.png","4cdf66466a5ca5c4827a35288b96f870"],["/emoji/coolapk_emotion_9_se.png","912e623e08fe12c4be750ef82139faba"],["/emoji/dabing.gif","7c84f2fa2a307128bf7ec4de59c75dd9"],["/emoji/daku.gif","ac2375c55ddc1040187fd6cfbc4c2298"],["/emoji/dan.gif","089785aee766ca747b0dbf6d7cd3200c"],["/emoji/deyi.gif","c042196f9dc156e05e85c8b3ac311f1e"],["/emoji/doge.gif","a39c07081e1f14b2e64d30da0ca9b4d4"],["/emoji/doge2.gif","9b0e0505a5f3f2d0f2568392d0a4b23d"],["/emoji/fadai.gif","346e38b30d63e6fb9366b7fb33fbeb6e"],["/emoji/fanu.gif","203d1bec6d3074a618f6470952bfd40c"],["/emoji/fendou.gif","d511c0a1f4f37056d3d5956db0294481"],["/emoji/ganga.gif","d380c56dd1f9404be6844cbdb8ee8b66"],["/emoji/gouyin.gif","1c92381f90ca0a1f72bf06e762d0bf0d"],["/emoji/guzhang.gif","b354c96efe9e245d80d7a529af0c841a"],["/emoji/haixiu.gif","13cb59b7c4cf2f2dabd5b082f961bf0b"],["/emoji/hanxiao.gif","3f6a7e69aa0bb08615db2601563715fb"],["/emoji/haobang.gif","4c31c421c63ca6230801548b47bb88a4"],["/emoji/haqian.gif","381b28f76e0726d133b8d4339e7d61c5"],["/emoji/hecai.gif","e5365f980e2b08aeb398678251abe0ef"],["/emoji/hexie.gif","fe1fca5d3d22a6e71f227b39161f170d"],["/emoji/huaixiao.gif","e053159c137a9b71a368ed9048adfaeb"],["/emoji/jie.gif","dfd9536a2f935f1a9cfe6afe7746ab09"],["/emoji/jingkong.gif","0ed257343d98d452a396c83a66913a03"],["/emoji/jingxi.gif","59f3f7354334cbc861952ce951920149"],["/emoji/jingya.gif","2a3adfe1ea74fcb8e8948d102653961b"],["/emoji/juhua.gif","226c45ff3f25fc198e82b78677e2224f"],["/emoji/keai.gif","2abe31b886de466bf51113eb57a8f143"],["/emoji/kelian.gif","7b5c8b77bee2346c49d4201b81d0c6a8"],["/emoji/koubi.gif","5312414013bc4408ba904f6ef3351892"],["/emoji/ku.gif","30bb1ddcfbf85df7008b3603476e2822"],["/emoji/kuaikule.gif","5b7b6777a29bca1f8618755fa839a74d"],["/emoji/kulou.gif","d5887f39570e14c02780b4cc6a5e874d"],["/emoji/kun.gif","5b0f98e33ff15a0a57c0066420542c67"],["/emoji/lanqiu.gif","5f8c4e4032ab95ca97ff4b9785be4b88"],["/emoji/leiben.gif","30dc4c5f8edeb213b1113fdec5fa1da8"],["/emoji/lenghan.gif","4eac0838dd1ebee218545212c2be2c88"],["/emoji/liuhan.gif","47556db70a60d2da343e7cbf48527caf"],["/emoji/liulei.gif","e76bb8785309a731194a0621fc50714e"],["/emoji/nanguo.gif","e172fff7530d732e256bfbe62ec0811e"],["/emoji/penxue.gif","e64651c2321e594764e305c9eef2030f"],["/emoji/piezui.gif","eab545a23bc9262c1b3b7094af4ebb8a"],["/emoji/pijiu.gif","69479f8de2fe7822904215f37aa5b3ec"],["/emoji/qiang.gif","a0e172d3a8ba0fab8e54db71477f96a9"],["/emoji/qiaoda.gif","48acffbcf01638651c3b2a993aead4fc"],["/emoji/qinqin.gif","b1b856fd99bbbb6ec3215195b1c9d026"],["/emoji/qiudale.gif","28995ae9aac54f675b7f6c99e0a77db7"],["/emoji/quantou.gif","781907d611254c328819069f4d562639"],["/emoji/saorao.gif","fc47e97035bede3b87558e72e20b4011"],["/emoji/se.gif","230d39b867f4ba9a64703f9900af10f4"],["/emoji/shengli.gif","5bac82d962925b3a0a7787971566251b"],["/emoji/shouqiang.gif","2fb027a8ec309e15b8d28cf442e2b94e"],["/emoji/shuai.gif","7f8a3d8beef41def570272e9b74afd20"],["/emoji/shui.gif","56d2cd255114aab2bb529fbc5a08a9b1"],["/emoji/tiaopi.gif","58354d04d33fa2eb687842a27a732443"],["/emoji/touxiao.gif","9979169dae90d4534bc0c20b6f4c64ba"],["/emoji/tu.gif","a936eab23798e7614961558b3a1f9bad"],["/emoji/tuosai.gif","fe7a620f5dbfe0de7e7c5510b90fea9d"],["/emoji/weiqu.gif","590cbeac2b172f6f4a3d2a9ff48d7b31"],["/emoji/weixiao.gif","c1b8a75255837fb9fdab60c87586c298"],["/emoji/woshou.gif","f23d751fbaeeef9b4568572d8ebb4de3"],["/emoji/wozuimei.gif","6c16943c19ebc54f9f1cb0a78f66f5a7"],["/emoji/wunai.gif","5df40381ad3384b3dea912b6444be992"],["/emoji/xia.gif","c0d55d103b658f03f3d4f519623c8ad0"],["/emoji/xiaojiujie.gif","feec45c9d58241f4ebfe501a601c779b"],["/emoji/xiaoku.gif","a337cbf004947f98b1159f8fa8901846"],["/emoji/xiaoyanger.gif","3c33332c21171b7a93a0feed215db17c"],["/emoji/xieyanxiao.gif","bbf14e9548147e7e12e8aa59eb7fe7f7"],["/emoji/xigua.gif","80547a3bec0b074af26ecf98fd6b3f95"],["/emoji/xu.gif","1be99ed0a9b0022436ee146331330530"],["/emoji/yangtuo.gif","e9bc58ea4425cba7b3a0d9d7d220e629"],["/emoji/yinxian.gif","f918b83200e5923175f464c70a1ee8a3"],["/emoji/yiwen.gif","0e519e84db3957985ca95cdf838f8ad0"],["/emoji/youhengheng.gif","4ac97da57b04f681f47c246a7da9bfc6"],["/emoji/youling.gif","f9fb85ff6b519a6f07050704e5049e4e"],["/emoji/yun.gif","daa0a7f1c637e74661722b2a4a3f82b9"],["/emoji/zaijian.gif","087eaf1637ba3dc212cfc1ff447e9f26"],["/emoji/zhayanjian.gif","c1b8a75255837fb9fdab60c87586c298"],["/emoji/zhemo.gif","c763703fd77d3cd22253f8dc603e17ec"],["/emoji/zhouma.gif","b382537da9cf83e8cb93ec7f127f5f80"],["/emoji/zhuakuang.gif","3f61102324151465135132d3fbbbd0ff"],["/emoji/zuohengheng.gif","a0a7d8befe76e5b4e080e3d7e721f6d0"],["/emoji/亲亲.gif","d5e1420f267d5f387cffc9072da40b25"],["/emoji/偷笑.gif","8abb32277128bad47e1b69115943dfa8"],["/emoji/再见.gif","d94db59787adb7cafcf29a1b7345369f"],["/emoji/发怒.gif","ad688bac675335d515b8d871c8e278e4"],["/emoji/发财.gif","9f2796532fb3b3e55c5d7736cc61a145"],["/emoji/可爱.gif","743ccc6e990bc198d19221cf58cfa8b7"],["/emoji/吐血.gif","8ed6dd68a4bebfaca1e3f3b29d0a139c"],["/emoji/呆.gif","7eddd4f57659ecbd6d4d52188951063e"],["/emoji/呕吐.gif","56f3119ac597f86402a685e8df6b3365"],["/emoji/困.gif","6abf3a370fbf8d7d496fce7525548cc1"],["/emoji/坏笑.gif","f0446e503a38e130cbca1fe1156c44e2"],["/emoji/大佬.gif","2af962f9bd6cd2773b4db7616f301fb7"],["/emoji/大哭.gif","c2eb7748b2bf717998745cb3eeeef44a"],["/emoji/委屈.gif","5904249088e9440428c5f41da24437d0"],["/emoji/害羞.gif","72e64337dec59e1c250d6a8eefd5dafe"],["/emoji/尴尬.gif","4f7fbe2d30d762496f8ca0c745b5cc7b"],["/emoji/微笑.gif","c9c652125c622dcfc1cd2b848a511555"],["/emoji/思考.gif","dab9cffd5fe7fca4d126403bcde714f0"],["/emoji/惊吓.gif","ab1f01fffc3d64bb823a07a9666de988"],["/emoji/打脸.gif","d108cda2bc5fbf1843435ef89deb207f"],["/emoji/抓狂.gif","831f1213b36203fbe665614b17723f35"],["/emoji/抠鼻子.gif","6c3b6d4e9ce526a7530d3d4cab9e8566"],["/emoji/斜眼笑.gif","9a100c5af9ee91de3eed2988cdd7157b"],["/emoji/无奈.gif","fe0a848f487433e8ae86294a9dfc2c6e"],["/emoji/晕.gif","7b787b106746bc0d779cc9a0075f3be3"],["/emoji/流汗.gif","8629da5cfbd42656f6c61face305474a"],["/emoji/流鼻血.gif","f65d36b12e07a627468b3267dd3d8512"],["/emoji/点赞.gif","3bb7e43e413863f5f6424404555ca84d"],["/emoji/生气.gif","88f25e19671624d955dbc2e447aa4c3d"],["/emoji/生病.gif","7bd0f6053b4012d84cf05944f580f67d"],["/emoji/疑问.gif","d60597ff5d4f727f6d126c9980a65eb3"],["/emoji/白眼.gif","07db6ae2803b0e78261e554e640c70bd"],["/emoji/睡着.gif","f39d378540ab28a462244418663684a3"],["/emoji/笑哭.gif","2bd1b18f4d4287d4c3cfa4c8fd389b0a"],["/emoji/腼腆.gif","3e8b5cf2a71389e3170abf402b2de3b6"],["/emoji/色.gif","aeb72c88ee76e1f64b0f5c6acb745b3e"],["/emoji/调皮.gif","daf87258664df81a4fc2e6baf491e96d"],["/emoji/鄙视.gif","5dce6485b750eaf7df6a0b57494710d6"],["/emoji/闭嘴.gif","4fb68fe83ea0e674f87c92614dee1de5"],["/emoji/难过.gif","e94d187ccaec2c9fa2dd0cb5e098d216"],["/emoji/馋.gif","7bbac0ac420499b191b6a9be951eaf5d"],["/emoji/黑人问号.gif","b2f07f52ea73dc0d4df3e433a856e949"],["/emoji/鼓掌.gif","bef94100e54ab2eb34c5875d9371a6a0"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","e1406602e630132fa9904d1d21f5e7b9"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","87bb4760cb3391c3d33332540a26f4a0"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","789cdfce47db07ccdb2f42a50183fc97"],["/js/src/algolia-search.js","c2893b0576701c736f7c0fdeb4be7390"],["/js/src/bootstrap.js","c6416e2bd46ec89013e634780ef1a19c"],["/js/src/bubble.js","c55c3681f486eea5f76d09e82bdc1226"],["/js/src/clipboard-use.js","2f9b34df05b430a42fa08fbcf406e826"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","9b84ff9e4ee5ee3af92f349c8545a30d"],["/js/src/exturl.js","c63f618fcbfdc0a8e1c5006a8a40fb50"],["/js/src/hook-duoshuo.js","1be92eebed16ea1d194b9f72a98520c4"],["/js/src/js.cookie.js","94e2d9765c9974574963923d57dcf99e"],["/js/src/linkcard.js","4ae42d028ecd18e0ed154c04d64cb93b"],["/js/src/motion.js","d555b1acbed6e30e010e4eb36e18aa30"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","bc7bec04ab0e063bfc5ab0f06b8fa4c3"],["/js/src/schemes/pisces.js","0dc6330f3e85a04d917ef0fadd165713"],["/js/src/scroll-cookie.js","0fe0a5d5b20a93418672c85a60dfac2e"],["/js/src/scrollspy.js","d64882f4185bfdf77aca2ac28ca73a55"],["/js/src/utils.js","5fc27fd0cdd5f71546ac540971ab7797"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cc1f73139b33a0e34e7980b0c8f94c57"],["/lib/Han/dist/han.js","1ae7ecba240242f0f76ce2ee19638308"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b0ae3b554784c0ceaace5fead064ab6e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f8e1efbdf568be4b0d50a915c742e5d1"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","18e84dbb05e1bf41fa2fecbfca3f6911"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","087a8ef4e7a7df4f0ba21deb618e3629"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b5d387dfc2c2e875a8af0616097d02d5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","db6796012c930dc7e6329462587abfca"],["/lib/fancybox/source/jquery.fancybox.css","7f068b0e4b61890b31919925ab9615d2"],["/lib/fancybox/source/jquery.fancybox.js","472db7f5545fa438b79e0871db87e9b3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3568718f05b47b841040df64e144c7ce"],["/lib/fastclick/lib/fastclick.js","1374acb237bb960fc3b80de5361fa620"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0727aac79e1f3a74ec975588240eff3f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","97977d2be1e93ece6422a79b71ef9ac7"],["/lib/jquery_lazyload/README.html","93ff2611b37236a9abd6191d7607ac78"],["/lib/jquery_lazyload/jquery.lazyload.js","4bc4b799379bfe364b37fbee8fbbe011"],["/lib/jquery_lazyload/jquery.scrollstop.js","37f2070bcb345706ba104160057e2027"],["/lib/needsharebutton/font-embedded.css","0c2161c678f99282b3c648c00bb0b4df"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","7b3a1028bf1c6c2cf51fca7db1042d59"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e5d0e2cb52df8e913b443cdc928f0241"],["/lib/velocity/velocity.js","392e73f987fa55dea381a8653e90129e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","c952d15f0185c8c9298bc5209456f128"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","8fdfea82ea973b373b7749f8c4d1963e"],["/links/index.html","3a469eab465d18eda9a655c7c22de252"],["/live2d-widget/README.html","cde59a6a407a9639d70778c325a78440"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","f69fc98f7dcc9ef90c1c47987d34b8df"],["/live2d-widget/demo/demo1.html","8999295e97b009cdc44c5b6e6eb0a353"],["/live2d-widget/demo/demo2.html","cc9f62bab8c5a257cff171bf14b85d00"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","f0a138d8f79bd9177bc07910ba89922f"],["/movies/index.html","e7d079e9e3e9780ae6c805d5798f3f69"],["/music/index.html","86291af912440a00f1b13d8773cadbbd"],["/page/2/index.html","97c85a2435573d052cf6af9b9fdc9d27"],["/page/3/index.html","db07586cedf5d179db739bf2615a16d8"],["/page/4/index.html","eed27e9fd1f024cb688d506dd05b2470"],["/page/5/index.html","35ab3258ebfbbe4d06b057542a2ed2d9"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","2e5b2cf493145b6c3b82860593caeaff"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","0d3fc303f8fb5811fc34560c14655c69"],["/posts/15468.html","b38ec01e1f390259519ae398c4d21512"],["/posts/16107.html","32806887bf3ce4d7227590baf030445f"],["/posts/201e1121.html","1466f3634dec9870f789dc80b491874e"],["/posts/20352.html","9ccdfa3e8f0fe41e83c21dcde94cb5e4"],["/posts/21238.html","7bd92a490cd7f9161d0734268c2f3928"],["/posts/22281.html","db2de0cac217f5e04868a78d542899fe"],["/posts/259f9205.html","690f36e677f3e50a1d98b1f01dac8506"],["/posts/278598dc.html","a17c662ced3c6bef4b798de0eb490df7"],["/posts/2d063bc3.html","4f74c9fbb906efcbe162c472ab78d132"],["/posts/30c404a6.html","a0875c8ea5155b55b970d991603fc344"],["/posts/4d4e6c19.html","6d028cda13e3fc0527e03008bab1e9c1"],["/posts/4d712855.html","f0fe58f6be8f1ed0b4797806f16e21cf"],["/posts/51203.html","0ce961977003b0fb1c8132cfeb451483"],["/posts/538e5180.html","cb3fc7c8cc19ba3a13d8dbfc5b459550"],["/posts/5394fce7.html","ac4dda1461542d5611a353a4ce6dd282"],["/posts/59037.html","228089f40467d3ea21ca7a1aabbecb3c"],["/posts/60816b5a.html","539408b7237242648d6a24c7e4f2b00c"],["/posts/6163d4b5.html","cdf93cec314571b4e1c7008b1a0266f5"],["/posts/69978469.html","443088d8466fc3b5e0e9de67e81572d3"],["/posts/6a752619.html","6e940d0e9200eeec1de991f344b2293f"],["/posts/6d7376dd.html","2ec338111e5c828ff00dabb1f45cb1d3"],["/posts/7fcb11a7.html","9d032a1077c780c31f65ae6957ec5208"],["/posts/8cc73e65.html","bb89fd1cb2da3ca81a7db92d89382da3"],["/posts/9b621d6f.html","8e88862e76647a45e5e6cdc0e1606075"],["/posts/a530f7f0.html","42d3ed044ce610ad555b3ea02064b44d"],["/posts/ae1da46b.html","bbaeb3bb2ff4c46ba051fe0f588b5e80"],["/posts/be01953a.html","e2b30a811fef6093f1967eace6387e94"],["/posts/beb5106a.html","80df03dbd558d9e5137b71788f1ca86e"],["/posts/d4b9b850.html","735efd4950c7b6a0dce64d502400fe26"],["/posts/dd845106.html","319a99dcf3d241e5d399ea45a10f99de"],["/posts/e35620b3.html","1b2601a5f85864971bfaf15f26d504be"],["/posts/e4bced2a.html","c1850743adb1f2ba7369f1268239fe20"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","2e08dead537093b0e36717a8e6c0e94f"],["/tags/C-语言/index.html","22886dcff3d5d5082d8d1e05ae396f84"],["/tags/C/index.html","5365ecba147c5e8b63af811a44473a33"],["/tags/C/page/2/index.html","f362301929cef99c1722722b1d02d53c"],["/tags/Constraints/index.html","3547508e9157aa2c18fa2ab27ef37db8"],["/tags/C语言/index.html","a52b3938842b83413b141b5717b9f2fe"],["/tags/Hadoop的安装/index.html","136195977db767f8b3ce0ed711f2e790"],["/tags/Hexo/index.html","007dabe0f4eb89006806b92645b76068"],["/tags/Java/index.html","538cc5241369535250ce78777f3ad973"],["/tags/Mac/index.html","232c6df546b4482e1d47aa7662ef4dd9"],["/tags/Parallels-Desktop/index.html","a9c1171557ed08ee9602632f56413868"],["/tags/Python/index.html","fff638e26cf01b52b04eda673f9a8dbb"],["/tags/Qt/index.html","edd6bd6e10597fba3e6fa629a694dbd8"],["/tags/SQL/index.html","af7c9b7d7f5392b7a2b453704048d5f1"],["/tags/Sql-Server/index.html","2fa34d004b889a7cedba9583c57d88ab"],["/tags/abbrlink/index.html","1ce90b5f0586ec257b1624d1fd28f410"],["/tags/create-database/index.html","57a92d7003a1537005b8c2e68478e659"],["/tags/create-table/index.html","9bbc349f3128afcba274ffcbf97a44b2"],["/tags/index.html","fbaaf36597382d4b72b9cfeb6c2f003b"],["/tags/insert-into/index.html","da7a69f811afad4859cbcf9f231cd2f1"],["/tags/冒泡排序/index.html","fc900c97e7390283b1bc8ad58089fc46"],["/tags/双向循环链表/index.html","d26efdb093ae5cce99f52d0bb7f72257"],["/tags/双向链表/index.html","45bd9b9ec86f7a3935cdb6d0142dbd56"],["/tags/希尔排序/index.html","da9be85ebc01511a1f918d41c3420abd"],["/tags/插入排序/index.html","4e7a18c03f4971b14e639b812285762b"],["/tags/数据结构/index.html","573dbbf72e64bd77fbb7afa6ee069946"],["/tags/数据结构/page/2/index.html","5673fb4e56e530c245f9bda2f9dfd6c8"],["/tags/杨辉三角/index.html","ef4b4a7403e906231f1f85d434074a6c"],["/tags/栈/index.html","438d2bdfd13bc84d1fdcf6b03adc1c6a"],["/tags/类模板/index.html","2a0521fec71d67bc739186b88e41b8d8"],["/tags/线性表/index.html","fe2880fa6eb0038522b65a0c98578ac8"],["/tags/选择排序/index.html","7682de70dd660fa4c35f2486afd8edeb"],["/tags/链式栈/index.html","42581ff32c090ad980e34338912d7595"],["/tags/链式队列/index.html","d7341788ca28fd7443ff21d7e8a853ae"],["/tags/队列/index.html","19f2b93c594f65e42a5e4ec08a3f7b0c"],["/tags/顺序存储结构/index.html","c9d12bccb9feac6bb2be5a2606aac478"],["/top/index.html","050b20ba8913c561a9dd798102f42ff0"]];
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
