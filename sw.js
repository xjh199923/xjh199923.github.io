/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","feedf3c76ea55254a2fe55ac22813099"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","671cad6e6521b1d23aeec4cfe502ba9d"],["/archives/2019/11/index.html","caa7cda8ecc57e9fe1a8d326510a56d4"],["/archives/2019/12/index.html","ca2c70c455023455b05d626a0c1f470a"],["/archives/2019/index.html","a1d5111b522cd7942dfcb421b7f4b34d"],["/archives/2020/01/index.html","9a1c50900d26cc125f17ada03cc8a8b5"],["/archives/2020/02/index.html","bf24189c619eb90859cca7afe88544c4"],["/archives/2020/03/index.html","540688a55b5c9594112d5c34d27d3ee2"],["/archives/2020/04/index.html","9b037929f03f6e997d1819fa3bbf29ba"],["/archives/2020/index.html","25b0ddf9315a9bb21ea5f4bb69154bea"],["/archives/2020/page/2/index.html","0d7d07110825ef14632e5791f121c9b4"],["/archives/2020/page/3/index.html","a8eb625898df710b79ef2276a3f9e45f"],["/archives/index.html","34d5276a2631e431a856d105a3940201"],["/archives/page/2/index.html","05fd73aa11734cff45db941c1351578f"],["/archives/page/3/index.html","06345d9a55cfefd9b0504291f1c0c198"],["/archives/page/4/index.html","b3933697fad092767070bea478b7248c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","334fb9b0991b0b30730e06198e1330dd"],["/categories/C语言/index.html","b76dedd7ebc3030801fea71a308dacca"],["/categories/C语言/数据结构/index.html","f790b7c93180baf0a95c5165952d6d2a"],["/categories/Hadoop学习笔记/index.html","293262d4aff7a6494ac6c165a46e5f18"],["/categories/Hexo/index.html","a25f350ae7c857ec1284e16b78cc32b1"],["/categories/Mac/Qt/index.html","2acf2303c016e219f5ee204f072054a9"],["/categories/Mac/Sql-Server/index.html","30b6949384e3e776c9cd551db4ffee9e"],["/categories/Mac/index.html","17d8a76a97c114f3701249ba636f4cf5"],["/categories/index.html","a16e86371a7515f34deab94d6291097b"],["/categories/数据结构/C/Java/Python/index.html","d59bdfacad5e96eacbfdba5a1507a946"],["/categories/数据结构/C/Java/Python/排序/index.html","f117a7c5e862309b7247c7309f81f3bd"],["/categories/数据结构/C/Java/index.html","ae33763efef8678642bd5f93595df8ba"],["/categories/数据结构/C/index.html","1077cfc00f9c573562bdfcd986482962"],["/categories/数据结构/C/page/2/index.html","a0bdf99aa4e0c749c2ce4aa493972972"],["/categories/数据结构/C/双向循环链表/index.html","e1361f4b5875822a385e7a4d4e954b54"],["/categories/数据结构/C/双向链表/index.html","600fa9b6dc4b71f3f11ab14c928616ea"],["/categories/数据结构/C/顺序存储结构/index.html","62935dce69c0b70975f26121d8410ec3"],["/categories/数据结构/index.html","cff108db84c238e1892743ec4b0aefda"],["/categories/数据结构/page/2/index.html","4154441cbc1bdb9131a3416bc35324a9"],["/categories/玩转Mac/index.html","45963b6e4bbc8664aa893cae5f3fb14b"],["/categories/计算机系统笔记/index.html","1bb5c29ce7ae4cfbeca2f290b320c062"],["/categories/链式栈/index.html","909abc6454ba8f9cdfa3dff7d2084f05"],["/categories/链式栈/数据结构/index.html","e316fb59047db6fe0b7495f92800e239"],["/categories/顺序栈/index.html","69073651dc36a6cccb3283506c4b9ba4"],["/categories/顺序栈/数据结构/index.html","3a0c6a221c163a63869eb16d1a095465"],["/categories/顺序队列/index.html","983d285db095d0e5815ec97b805b4f13"],["/categories/顺序队列/数据结构/index.html","31fc4de56b51c1b9ee7edd57826e2e2e"],["/chest/index.html","f5d145a265ebd04282eafa7c7c8f45e5"],["/css/main.css","1929dbb126d66079385b25979f1a7ce4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/emoji/OK.gif","c7514ff6ec190597f522e848d5ea6690"],["/emoji/aini.gif","b097fb0e06d460d0bbd297e9d4d99709"],["/emoji/aixin.gif","6b9fa9b7943c5b246797693c3db4ee84"],["/emoji/aoman.gif","7e12f2845e4a4e720fa3fe066edc9d45"],["/emoji/baiyan.gif","2de3b3a684755d1f5f407750eb78a808"],["/emoji/bangbangtang.gif","1869b6a355c6f0f5c4193088bf6dc327"],["/emoji/baojin.gif","89f41744c6cb1b8a0a297dfaf17d7784"],["/emoji/baoquan.gif","3ae1c706081d4ef86be8dfb3dac7d36e"],["/emoji/bishi.gif","ebe66c9a99e64779a17f2163ab7136c6"],["/emoji/bizui.gif","7e38a61a43fd47a8716695a816c590bf"],["/emoji/c_coolb.png","2370f3ca97733d45618d18b26a5a028f"],["/emoji/c_fived.png","d716ac9bb62775f8debff31adec47b44"],["/emoji/c_fivef.png","cc217d104e2cc5fdd5140420844e9336"],["/emoji/c_fivem.png","196581d0c0ef022a727350592543d04e"],["/emoji/c_fiveo.png","864d65e31ad65aba195504041ce2cf60"],["/emoji/c_fivey.png","8aebb6c8228e8458f9f89461dd385f8d"],["/emoji/c_fy.png","0d34bb0e4922ef2ef3e0fa7fc0734cba"],["/emoji/c_oned.png","766fcd652933c07959215ad4886fd2f7"],["/emoji/c_onef.png","ea35ed1ee9ab4cb4addaf564397d714f"],["/emoji/c_onem.png","34ecef9de994d60c0ee483499e78142b"],["/emoji/c_oneo.png","da28438db246f62fbfbacd15dccceec7"],["/emoji/c_oney.png","ab4fb91a4aa73fcf719c697e88ee386c"],["/emoji/c_oy.png","ba4bef915d99ca8314e2b9a214465d8d"],["/emoji/c_teny.png","bac9c769d1c721595919b809cf888324"],["/emoji/c_twod.png","c3287cebc576d9b4b059aa2e69412f2e"],["/emoji/c_twof.png","3d2c1829ffc89e93a225655103e9dbd9"],["/emoji/c_twom.png","e1492b86236d41da1e585d8577790a15"],["/emoji/c_twoo.png","287f5f860cbb25898b6d9c9b724ddf47"],["/emoji/c_twoy.png","2015201b64899e3c014479bb30cbdc80"],["/emoji/c_ty.png","f76ece24989f31af6d73573afa31d669"],["/emoji/cahan.gif","b65dba32a123a79c184c889d86e304d6"],["/emoji/caidao.gif","984d90b0d092e8fdf74837d84757e038"],["/emoji/chi.gif","7dacc46ab1c1ceb8e8201f3b51405df7"],["/emoji/ciya.gif","f5ad875bfdce81063991dab62b2971f9"],["/emoji/coolapk_emotion_100_qqdoge.png","957fc0201bd73155ba35a043c6c71d55"],["/emoji/coolapk_emotion_1010.png","9f0723d4df27fed09c9e1e81a6d664a8"],["/emoji/coolapk_emotion_1011.png","4c1c988d915f1ee370b16d84d5875565"],["/emoji/coolapk_emotion_1012.png","35960df9c5777b52cbf1f9766701e16c"],["/emoji/coolapk_emotion_1013.png","5ed1840b7aa4081a265c64e20a93866d"],["/emoji/coolapk_emotion_1014.png","3b9459e47b27b70a793954aa75dc06f0"],["/emoji/coolapk_emotion_1015.png","ea509623e26a7d43b90f04a8eabeca8f"],["/emoji/coolapk_emotion_1016.png","31aede1faa0bb64aa563db024de799c2"],["/emoji/coolapk_emotion_1017.png","1902222811376eb1880a80ccb8fa5866"],["/emoji/coolapk_emotion_1018.png","20294b20b5a0cebc95b4d9286d9ca559"],["/emoji/coolapk_emotion_1019.png","a44eefea97650f92d681f94ad4888451"],["/emoji/coolapk_emotion_101_pyjiaoyi.png","cdce53929ae2ce463b7e04eea8dc5c10"],["/emoji/coolapk_emotion_1020.png","8e1f3a4a0a274974eaf1c566ac090e80"],["/emoji/coolapk_emotion_1021.png","3f4d6ef56bc9c28011b18a2c08a0c890"],["/emoji/coolapk_emotion_102_fadai.png","d425491a0d04e6635395ef406854a716"],["/emoji/coolapk_emotion_103_nb.png","14dfcd25b22361cd6241b3a8f66bf144"],["/emoji/coolapk_emotion_104.png","9a5b0ca14ddac12a967545214d262f4e"],["/emoji/coolapk_emotion_105.png","714cb25616303d2ba90214970dc3fd8f"],["/emoji/coolapk_emotion_106.png","ccde1de5843547b602d5f4c3783b2833"],["/emoji/coolapk_emotion_107.png","f594540aa5c15f3172370f646fe71ccb"],["/emoji/coolapk_emotion_108.png","8287c4def3e6d3ad5abc5cd37a884d94"],["/emoji/coolapk_emotion_109.png","fd4e9933553f46c5e53ed5fafe0ac226"],["/emoji/coolapk_emotion_10_aoman.png","797a802d24cd42fa1f01d14645bbf2a7"],["/emoji/coolapk_emotion_11_yiwen.png","d0532af3790c40e485ebe8d68afb8be6"],["/emoji/coolapk_emotion_12_wuyu.png","a9609be9b0dbc043ca04bec27dfb9ec3"],["/emoji/coolapk_emotion_13_huaixiao.png","7b3d0913c1768472b5559864e10a8bd0"],["/emoji/coolapk_emotion_14_bishi.png","0cc52b814226a4c4b36fa9acebd7581c"],["/emoji/coolapk_emotion_15_fanu.png","4e931452f5cfe931d6e605668a813da7"],["/emoji/coolapk_emotion_16_tuosai.png","cd996074ca5737fdd93be7949ac234bd"],["/emoji/coolapk_emotion_17_tushe.png","99247a36ffe105a136161aa9739f5f86"],["/emoji/coolapk_emotion_18_han.png","fc552c84d28e45724cc9260c893158f4"],["/emoji/coolapk_emotion_19_koubi.png","52f3bae86b0bd7a24f7fbd7ae2ad5597"],["/emoji/coolapk_emotion_1_hahaha.png","c7a03093b4f57812bdfe1cfa23840bf9"],["/emoji/coolapk_emotion_20_qinqin.png","2be24f4db17f532a2b61f38ea4470326"],["/emoji/coolapk_emotion_21_penxue.png","121b5fc758501d45045f2b3912e6d6da"],["/emoji/coolapk_emotion_22_xiaoyan.png","7d758ef65f58329499880ad4e211abdb"],["/emoji/coolapk_emotion_23_shui.png","72efa438b621e2e22c45d914a2f77ed4"],["/emoji/coolapk_emotion_24_wuzuixiao.png","5e25872a7dfbefba43336a59b50aa33c"],["/emoji/coolapk_emotion_25_zaijian.png","f4d94adb134ef98b47453aa6534b3288"],["/emoji/coolapk_emotion_26_kelian.png","680b4cb4b0960f7462fba5d77cc54cef"],["/emoji/coolapk_emotion_27_qiang.png","20e38c6360c285794f3a60dd9f95138e"],["/emoji/coolapk_emotion_28_ruo.png","3caf37719a3aef06f914ada8b59850c9"],["/emoji/coolapk_emotion_29_baoquan.png","8c4453e5d539fc44f67997afb3f5ee3f"],["/emoji/coolapk_emotion_2_jingya.png","5e94c57b3277a11d091159a7b5305258"],["/emoji/coolapk_emotion_30_ok.png","5b1dd3b99cda9b7328346dbe89b45349"],["/emoji/coolapk_emotion_31_xiaoku.png","f89c503f3df8a9b87ccb7c217cf194a8"],["/emoji/coolapk_emotion_32_heiha.png","3e5aa0c112203e74e5326d1636e0c36f"],["/emoji/coolapk_emotion_33_wulian.png","47506e31b724bd437be22cd9df9345b3"],["/emoji/coolapk_emotion_34_jizhi.png","3fe5ffdd6e76c3e38cd1ffa5397e0eb1"],["/emoji/coolapk_emotion_35_ye.png","446d1b55642d8a22c7cfe958e282e523"],["/emoji/coolapk_emotion_36_ku.png","1a849c6e25a75ad2e55b3fb0a5ad5268"],["/emoji/coolapk_emotion_37_doge.png","5c7d8d2e7a3cdc3b26337ca74bf70f7e"],["/emoji/coolapk_emotion_38_wozuimei.png","931518820184c319a9367596d113f45a"],["/emoji/coolapk_emotion_39_caidao.png","d71662b57c6b96652dc3153f45730558"],["/emoji/coolapk_emotion_3_ciya.png","b07be3392b9096584b055ce954053b95"],["/emoji/coolapk_emotion_40_aixin.png","614d3cb41147d95f7a2a8a6ef00e75ea"],["/emoji/coolapk_emotion_41_meigui.png","11bf900bcdc9295a2ae161b990bd41e1"],["/emoji/coolapk_emotion_42_diaoxie.png","dd16f3f94f301cffa453daa0aa0a3cc4"],["/emoji/coolapk_emotion_43_heixian.png","dea819cda01cd37c8ce67346d138fefd"],["/emoji/coolapk_emotion_44_pen.png","6dd16f4f726b5b0410d0f41af208ca23"],["/emoji/coolapk_emotion_45_yinxian.png","0e9ca26045d6e2c49fc371cf65ee0167"],["/emoji/coolapk_emotion_46_nanguo.png","3bad13ab29f5f869aa987ccf60f0eecf"],["/emoji/coolapk_emotion_47_weiqu.png","c4b47475e6f557091ed91a1a9db63116"],["/emoji/coolapk_emotion_48_weiweiyixiao.png","e95f1200a21bce61e627ca7ec0950767"],["/emoji/coolapk_emotion_49_huanhu.png","061c4f84d478872dd5ff49df2f35d7aa"],["/emoji/coolapk_emotion_4_liulei.png","e275787332dc18d54122247459381508"],["/emoji/coolapk_emotion_50_xinsui.png","b236b1999f07bb5fa12307d9ad80edae"],["/emoji/coolapk_emotion_51_chigua.png","98356dc547048fd5af6f9a88bd1a415a"],["/emoji/coolapk_emotion_52_hejiu.png","d2d1998522e0e8d142aa9813c685c1e1"],["/emoji/coolapk_emotion_53_pu.png","9f437a836bf858a6d1d7a6f9d85ea5b3"],["/emoji/coolapk_emotion_54_hongyaowan.png","9ad9f1c6fa6e39d7122a941bf05a34c4"],["/emoji/coolapk_emotion_55_lvyaowan.png","46eef6c373f6dc623de00232abf4d1b0"],["/emoji/coolapk_emotion_56_dogexiaoku.png","6441b1b40f6ff81a6d45812df5e3d5b6"],["/emoji/coolapk_emotion_57_dogehechi.png","6cf032057b40f20aa0638080b2710757"],["/emoji/coolapk_emotion_58_dogeyuanliangta.png","ae843489d03d4da9d18447ccb81314d7"],["/emoji/coolapk_emotion_59_erha.png","931289a5cd820c963cc4874201c54133"],["/emoji/coolapk_emotion_5_keai.png","145b3ddef07d59549e68ac7c9d8e8d32"],["/emoji/coolapk_emotion_60_kuan.png","a8a0474cf76ebab178e710bbd9ab3857"],["/emoji/coolapk_emotion_61_lvmao.png","a406729a06e864adc4861daa554e501c"],["/emoji/coolapk_emotion_62_huaji.png","13ec054e2a0275ca31a6bdcfcd1b2855"],["/emoji/coolapk_emotion_63_liuhanhuaji.png","54694707dd3e382c6dbb2a8693b54218"],["/emoji/coolapk_emotion_64_shounuehuaji.png","1b5457e81385af39c4cd518e55732304"],["/emoji/coolapk_emotion_65_coshuaji.png","6fdd161a83d27d3b8b17e9c5fb745fb6"],["/emoji/coolapk_emotion_66_doujiyanhuaji.png","9e449209158b9158266af5ec3325c27b"],["/emoji/coolapk_emotion_67_mojinghuaji.png","6f20fcedf9aac97cf995472f50c5cd86"],["/emoji/coolapk_emotion_68.png","1bf06eebf68a4cd5bfd624f5c51e2e9b"],["/emoji/coolapk_emotion_69.png","036c2977686f9695ff61abf5d078edff"],["/emoji/coolapk_emotion_6_weixiao.png","caf97721da939a49fa2dd729a8da4b65"],["/emoji/coolapk_emotion_70.png","52bb464717d9234c5ec58d4200fb022c"],["/emoji/coolapk_emotion_71.png","143d8dd74602f5f9fde43f4dd0bb1dea"],["/emoji/coolapk_emotion_72.png","7a10c5f3c0ec6c42355907984f8a1bdc"],["/emoji/coolapk_emotion_73.png","fbda899da13bce4d9d13f3c9745d7a54"],["/emoji/coolapk_emotion_74.png","15bc06765533487e49e44361659f1610"],["/emoji/coolapk_emotion_75.png","b42d473a2cefcb12a48d7a56eb5fc056"],["/emoji/coolapk_emotion_76.png","46e53a44ee080088d7cc69f009533955"],["/emoji/coolapk_emotion_77.png","7834c9379a685409b47d176c9df5f279"],["/emoji/coolapk_emotion_78.png","d48c0eb334280624d9abc3a643e7fb14"],["/emoji/coolapk_emotion_79.png","7a5a14421cbc5badf2a4c3634dfa2c53"],["/emoji/coolapk_emotion_7_hehe.png","9702a153d84e00335320aa60c52184e7"],["/emoji/coolapk_emotion_80.png","7a74bad1225d78c163b0302865fff35f"],["/emoji/coolapk_emotion_81_naikezui.png","77f71bddc7f37d4823422a4c1c7d02df"],["/emoji/coolapk_emotion_82_miaomiao.png","07dd8b8653f20c297ce4800828fd711d"],["/emoji/coolapk_emotion_83_huoba.png","9ac77bf866921ec21ec4d47f19cb1e2d"],["/emoji/coolapk_emotion_84_baiyan.png","c01c6cc10f9c6734997503a46228a191"],["/emoji/coolapk_emotion_85.png","a1841a7e0f2a851f9b172e2bb2d7c8be"],["/emoji/coolapk_emotion_86.png","e407f75dc9357a1ed53f8c1bbab4f83e"],["/emoji/coolapk_emotion_87.png","2390bb38b428408f4ceb46a6c19e6a30"],["/emoji/coolapk_emotion_88.png","513bb3dd6e73afedfe8d921c2bfa45b3"],["/emoji/coolapk_emotion_89.png","35a0639289e2e24613f125a633a4623d"],["/emoji/coolapk_emotion_8_piezui.png","02e8b4e76408f8691f4194ea2d77dba1"],["/emoji/coolapk_emotion_90.png","03a514524ed56a188ac11afd55d460e0"],["/emoji/coolapk_emotion_91.png","6d5e3e3afd467aa7076632e4e638f534"],["/emoji/coolapk_emotion_92.png","a8a118bbfd5fe7ef8840071ce64b0e90"],["/emoji/coolapk_emotion_93.png","1a21982d855278eb2f51631f2269cd3e"],["/emoji/coolapk_emotion_94.png","6f976ee0fac99c23e2884b1a460fbd73"],["/emoji/coolapk_emotion_95_erhading.png","ef2c0cbc44bf9476ff1307ce9c07c7a9"],["/emoji/coolapk_emotion_96_kuanlvmao.png","f24099479980538c82d369ad395b3bac"],["/emoji/coolapk_emotion_97_haixiu.png","d217546e05ea1bf84733edb2402aaa02"],["/emoji/coolapk_emotion_98_wunai.png","6bcb35d6a12b55b60792e032597d0433"],["/emoji/coolapk_emotion_99_zhoumei.png","4cdf66466a5ca5c4827a35288b96f870"],["/emoji/coolapk_emotion_9_se.png","912e623e08fe12c4be750ef82139faba"],["/emoji/d_1.png","dcf6867da837ff4cd689469b98d07aaa"],["/emoji/d_22.png","60b0951480b897c103a83315b8502447"],["/emoji/d_23.png","53859f4ca9070df3de77626a062fd787"],["/emoji/d_24.png","176bc5c277d95b619b17ba910f266074"],["/emoji/d_25.png","85360862ab6de5784b6ec8c89658b63e"],["/emoji/d_26.png","35298c8885d76c40341337825e449486"],["/emoji/d_27.png","c590ace36999eab9593c3cb692806327"],["/emoji/d_28.png","5737d3f11e785149177468dcdf96ceae"],["/emoji/d_29.png","786935567e08dbd4fbc8e67ce98a3e7e"],["/emoji/d_30.png","99c06e36439c157d68689e0f90bb318d"],["/emoji/d_31.png","2b9a4c49c1c459e3c20459141c2f7750"],["/emoji/d_32.png","bca80903eaf22bd632aa8539ccf25625"],["/emoji/d_33.png","b421d9abb21a606d03e64b64fe6b6bcd"],["/emoji/d_4.png","7e2f05690052110ee3f4766f6ad89d52"],["/emoji/d_5.png","12a5d0ce165fb4d3474dd75652252b04"],["/emoji/d_6.png","65ba99555f2c6c25f970351e3a0be500"],["/emoji/d_7.png","505115c17711a54466b3abcb94756a61"],["/emoji/d_8.png","10895fe82b90499a7cc1ea7df26e3584"],["/emoji/d_9.png","33d004be6a161d346ee11f2e6684f3c4"],["/emoji/d_aini.png","9717e4f497b81ac8fb1743a7d521383e"],["/emoji/d_aoteman.png","c46e131c876e5d856b394fde2c340855"],["/emoji/d_bingbujiandan.png","9ffeb9f08cecda2259d8ecbb9fa190b0"],["/emoji/d_bishi.png","8048127cf9cfbcf5370a76c67b968aa4"],["/emoji/d_dahaqi.png","78c9179ba74f8908ed0d48b64092b5e5"],["/emoji/d_dalian.png","cfd43ffa19a8c253fceadfdea86215f7"],["/emoji/d_ding.png","d99a896e0e1eab228ad1a6b1beb8d6c4"],["/emoji/d_dlamcj.png","e58e78b17aa378d473d66c9aa086d164"],["/emoji/d_dlamx.png","3a93dbed4154e765e4309fc79d989492"],["/emoji/d_feizao.png","dcc7a375e0b143871d912d01d999a0ee"],["/emoji/d_ganmao.png","f66bb2962f4e0f54e3932d2bbe2e859e"],["/emoji/d_guile.png","888dd4b8cb5142d0a4b758409d5f0960"],["/emoji/d_guzhang.png","cd47eac48e32f45df7878025f653b952"],["/emoji/d_heng.png","85ab7519c29951344cc04c64200b0645"],["/emoji/d_huaxin.png","93218261bd7e29010474f48d9a97fa07"],["/emoji/d_keai.png","31e67f3f6d3df449a0c856b0e7fa594e"],["/emoji/d_ku.png","1ae7a85b522d4ac0345e92fa389726be"],["/emoji/d_lei.png","a531d21039329247b965ae4bdebd4a2f"],["/emoji/d_qian.png","f0ffabc5c38a489bffde9480a39e1fe0"],["/emoji/d_shenshou.png","9c52efb5bd439ea6c017f381cebdc4a8"],["/emoji/d_shiwang.png","b4dc0e6c68c23427b0c7309363d254fa"],["/emoji/d_shuai.png","93b27f9f0116039ac3eea3e830739f8c"],["/emoji/d_sikao.png","d16db751079b66d48a451cb0d6fde14e"],["/emoji/d_taikaixin.png","7805e8baa23338872430345c13a2afad"],["/emoji/d_tu.png","2706bfc38df015620c7a49d1a8326c67"],["/emoji/d_tuzi.png","a54f50a195c6b090a85a2ddf68b078fb"],["/emoji/d_xiongmao.png","4131688fc9c21efacd3b79817f7ea947"],["/emoji/d_xixi.png","dedbd49e8301d70d0d063624cdea1a25"],["/emoji/d_xu.png","09b53b165fceb497879d088f2668afba"],["/emoji/d_youhengheng.png","93a072b120bf063a09a92bd4aa7d99ec"],["/emoji/d_yun.png","77d3303b7f7673260b94a7b91c972049"],["/emoji/d_zhuakuang.png","8f4dfdb20361702f7dbc6887e5110374"],["/emoji/d_zhutou.png","5d903b07ad260a064adeb61b506dee3e"],["/emoji/d_zuiyou.png","545932976fd82744eb09ae999c04e4cc"],["/emoji/d_zuohengheng.png","119bc31eb172d476161672fcbe514097"],["/emoji/dabing.gif","7c84f2fa2a307128bf7ec4de59c75dd9"],["/emoji/daku.gif","ac2375c55ddc1040187fd6cfbc4c2298"],["/emoji/dan.gif","089785aee766ca747b0dbf6d7cd3200c"],["/emoji/deyi.gif","c042196f9dc156e05e85c8b3ac311f1e"],["/emoji/doge.gif","a39c07081e1f14b2e64d30da0ca9b4d4"],["/emoji/doge2.gif","9b0e0505a5f3f2d0f2568392d0a4b23d"],["/emoji/f_geili.png","29d2add17a20edf6e99330a71b577b3e"],["/emoji/f_hufen.png","3e2be2a855a22561032ec38a9eeaa855"],["/emoji/f_jiong.png","4d78cc549aeed985060ea14de7b5a214"],["/emoji/f_meng.png","73050b5cf2a998d3bde687db71426396"],["/emoji/f_shenma.png","580fc6c65678751918550891d5b3eb29"],["/emoji/f_v5.png","96ef9e351489b9c095b1fb0b66580c76"],["/emoji/f_xi.png","29fe1a3b6fc20766bdac27a1afdd78e7"],["/emoji/f_zhi.png","54fb774a837eff2015b3bd0949421b16"],["/emoji/fadai.gif","346e38b30d63e6fb9366b7fb33fbeb6e"],["/emoji/fanu.gif","203d1bec6d3074a618f6470952bfd40c"],["/emoji/fendou.gif","d511c0a1f4f37056d3d5956db0294481"],["/emoji/ganga.gif","d380c56dd1f9404be6844cbdb8ee8b66"],["/emoji/gouyin.gif","1c92381f90ca0a1f72bf06e762d0bf0d"],["/emoji/guzhang.gif","b354c96efe9e245d80d7a529af0c841a"],["/emoji/haixiu.gif","13cb59b7c4cf2f2dabd5b082f961bf0b"],["/emoji/hanxiao.gif","3f6a7e69aa0bb08615db2601563715fb"],["/emoji/haobang.gif","4c31c421c63ca6230801548b47bb88a4"],["/emoji/haqian.gif","381b28f76e0726d133b8d4339e7d61c5"],["/emoji/hecai.gif","e5365f980e2b08aeb398678251abe0ef"],["/emoji/hexie.gif","fe1fca5d3d22a6e71f227b39161f170d"],["/emoji/huaixiao.gif","e053159c137a9b71a368ed9048adfaeb"],["/emoji/jie.gif","dfd9536a2f935f1a9cfe6afe7746ab09"],["/emoji/jingkong.gif","0ed257343d98d452a396c83a66913a03"],["/emoji/jingxi.gif","59f3f7354334cbc861952ce951920149"],["/emoji/jingya.gif","2a3adfe1ea74fcb8e8948d102653961b"],["/emoji/juhua.gif","226c45ff3f25fc198e82b78677e2224f"],["/emoji/keai.gif","2abe31b886de466bf51113eb57a8f143"],["/emoji/kelian.gif","7b5c8b77bee2346c49d4201b81d0c6a8"],["/emoji/koubi.gif","5312414013bc4408ba904f6ef3351892"],["/emoji/ku.gif","30bb1ddcfbf85df7008b3603476e2822"],["/emoji/kuaikule.gif","5b7b6777a29bca1f8618755fa839a74d"],["/emoji/kulou.gif","d5887f39570e14c02780b4cc6a5e874d"],["/emoji/kun.gif","5b0f98e33ff15a0a57c0066420542c67"],["/emoji/lanqiu.gif","5f8c4e4032ab95ca97ff4b9785be4b88"],["/emoji/leiben.gif","30dc4c5f8edeb213b1113fdec5fa1da8"],["/emoji/lenghan.gif","4eac0838dd1ebee218545212c2be2c88"],["/emoji/liuhan.gif","47556db70a60d2da343e7cbf48527caf"],["/emoji/liulei.gif","e76bb8785309a731194a0621fc50714e"],["/emoji/nanguo.gif","e172fff7530d732e256bfbe62ec0811e"],["/emoji/penxue.gif","e64651c2321e594764e305c9eef2030f"],["/emoji/piezui.gif","eab545a23bc9262c1b3b7094af4ebb8a"],["/emoji/pijiu.gif","69479f8de2fe7822904215f37aa5b3ec"],["/emoji/qiang.gif","a0e172d3a8ba0fab8e54db71477f96a9"],["/emoji/qiaoda.gif","48acffbcf01638651c3b2a993aead4fc"],["/emoji/qinqin.gif","b1b856fd99bbbb6ec3215195b1c9d026"],["/emoji/qiudale.gif","28995ae9aac54f675b7f6c99e0a77db7"],["/emoji/quantou.gif","781907d611254c328819069f4d562639"],["/emoji/saorao.gif","fc47e97035bede3b87558e72e20b4011"],["/emoji/se.gif","230d39b867f4ba9a64703f9900af10f4"],["/emoji/shengli.gif","5bac82d962925b3a0a7787971566251b"],["/emoji/shouqiang.gif","2fb027a8ec309e15b8d28cf442e2b94e"],["/emoji/shuai.gif","7f8a3d8beef41def570272e9b74afd20"],["/emoji/shui.gif","56d2cd255114aab2bb529fbc5a08a9b1"],["/emoji/tiaopi.gif","58354d04d33fa2eb687842a27a732443"],["/emoji/touxiao.gif","9979169dae90d4534bc0c20b6f4c64ba"],["/emoji/tu.gif","a936eab23798e7614961558b3a1f9bad"],["/emoji/tuosai.gif","fe7a620f5dbfe0de7e7c5510b90fea9d"],["/emoji/weibo_dog1.png","654f9601899d7e6c4f5bdf1a3f097fb8"],["/emoji/weibo_dog11.png","96fdc9b13dd48a4ce1dcafa95f5362d7"],["/emoji/weibo_dog12.png","bdcf973832e7d3959abb2a089c7f831f"],["/emoji/weibo_dog3.png","c5c116a176508a76cd84f2a0b16e5481"],["/emoji/weibo_dog4.png","5a769f1b9e2f7636df5fb0c0cc5594fe"],["/emoji/weibo_dog5.png","b16058ea384755ea34b871c178ef8d52"],["/emoji/weibo_dog6.png","ce4d23f098ae4a9faf0f377fa4dc047c"],["/emoji/weibo_dog7.png","5b86e5ebadfdec267c7f11289c126236"],["/emoji/weiqu.gif","590cbeac2b172f6f4a3d2a9ff48d7b31"],["/emoji/weixiao.gif","c1b8a75255837fb9fdab60c87586c298"],["/emoji/woshou.gif","f23d751fbaeeef9b4568572d8ebb4de3"],["/emoji/wozuimei.gif","6c16943c19ebc54f9f1cb0a78f66f5a7"],["/emoji/wunai.gif","5df40381ad3384b3dea912b6444be992"],["/emoji/xia.gif","c0d55d103b658f03f3d4f519623c8ad0"],["/emoji/xiaojiujie.gif","feec45c9d58241f4ebfe501a601c779b"],["/emoji/xiaoku.gif","a337cbf004947f98b1159f8fa8901846"],["/emoji/xiaoyanger.gif","3c33332c21171b7a93a0feed215db17c"],["/emoji/xieyanxiao.gif","bbf14e9548147e7e12e8aa59eb7fe7f7"],["/emoji/xigua.gif","80547a3bec0b074af26ecf98fd6b3f95"],["/emoji/xu.gif","1be99ed0a9b0022436ee146331330530"],["/emoji/yangtuo.gif","e9bc58ea4425cba7b3a0d9d7d220e629"],["/emoji/yinxian.gif","f918b83200e5923175f464c70a1ee8a3"],["/emoji/yiwen.gif","0e519e84db3957985ca95cdf838f8ad0"],["/emoji/youhengheng.gif","4ac97da57b04f681f47c246a7da9bfc6"],["/emoji/youling.gif","f9fb85ff6b519a6f07050704e5049e4e"],["/emoji/yun.gif","daa0a7f1c637e74661722b2a4a3f82b9"],["/emoji/zaijian.gif","087eaf1637ba3dc212cfc1ff447e9f26"],["/emoji/zhayanjian.gif","c1b8a75255837fb9fdab60c87586c298"],["/emoji/zhemo.gif","c763703fd77d3cd22253f8dc603e17ec"],["/emoji/zhouma.gif","b382537da9cf83e8cb93ec7f127f5f80"],["/emoji/zhuakuang.gif","3f61102324151465135132d3fbbbd0ff"],["/emoji/zuohengheng.gif","a0a7d8befe76e5b4e080e3d7e721f6d0"],["/emoji/亲亲.gif","d5e1420f267d5f387cffc9072da40b25"],["/emoji/偷笑.gif","8abb32277128bad47e1b69115943dfa8"],["/emoji/再见.gif","d94db59787adb7cafcf29a1b7345369f"],["/emoji/发怒.gif","ad688bac675335d515b8d871c8e278e4"],["/emoji/发财.gif","9f2796532fb3b3e55c5d7736cc61a145"],["/emoji/可爱.gif","743ccc6e990bc198d19221cf58cfa8b7"],["/emoji/吐血.gif","8ed6dd68a4bebfaca1e3f3b29d0a139c"],["/emoji/呆.gif","7eddd4f57659ecbd6d4d52188951063e"],["/emoji/呕吐.gif","56f3119ac597f86402a685e8df6b3365"],["/emoji/困.gif","6abf3a370fbf8d7d496fce7525548cc1"],["/emoji/坏笑.gif","f0446e503a38e130cbca1fe1156c44e2"],["/emoji/大佬.gif","2af962f9bd6cd2773b4db7616f301fb7"],["/emoji/大哭.gif","c2eb7748b2bf717998745cb3eeeef44a"],["/emoji/委屈.gif","5904249088e9440428c5f41da24437d0"],["/emoji/害羞.gif","72e64337dec59e1c250d6a8eefd5dafe"],["/emoji/尴尬.gif","4f7fbe2d30d762496f8ca0c745b5cc7b"],["/emoji/微笑.gif","c9c652125c622dcfc1cd2b848a511555"],["/emoji/思考.gif","dab9cffd5fe7fca4d126403bcde714f0"],["/emoji/惊吓.gif","ab1f01fffc3d64bb823a07a9666de988"],["/emoji/打脸.gif","d108cda2bc5fbf1843435ef89deb207f"],["/emoji/抓狂.gif","831f1213b36203fbe665614b17723f35"],["/emoji/抠鼻子.gif","6c3b6d4e9ce526a7530d3d4cab9e8566"],["/emoji/斜眼笑.gif","9a100c5af9ee91de3eed2988cdd7157b"],["/emoji/无奈.gif","fe0a848f487433e8ae86294a9dfc2c6e"],["/emoji/晕.gif","7b787b106746bc0d779cc9a0075f3be3"],["/emoji/流汗.gif","8629da5cfbd42656f6c61face305474a"],["/emoji/流鼻血.gif","f65d36b12e07a627468b3267dd3d8512"],["/emoji/点赞.gif","3bb7e43e413863f5f6424404555ca84d"],["/emoji/生气.gif","88f25e19671624d955dbc2e447aa4c3d"],["/emoji/生病.gif","7bd0f6053b4012d84cf05944f580f67d"],["/emoji/疑问.gif","d60597ff5d4f727f6d126c9980a65eb3"],["/emoji/白眼.gif","07db6ae2803b0e78261e554e640c70bd"],["/emoji/睡着.gif","f39d378540ab28a462244418663684a3"],["/emoji/笑哭.gif","2bd1b18f4d4287d4c3cfa4c8fd389b0a"],["/emoji/腼腆.gif","3e8b5cf2a71389e3170abf402b2de3b6"],["/emoji/色.gif","aeb72c88ee76e1f64b0f5c6acb745b3e"],["/emoji/调皮.gif","daf87258664df81a4fc2e6baf491e96d"],["/emoji/鄙视.gif","5dce6485b750eaf7df6a0b57494710d6"],["/emoji/闭嘴.gif","4fb68fe83ea0e674f87c92614dee1de5"],["/emoji/难过.gif","e94d187ccaec2c9fa2dd0cb5e098d216"],["/emoji/馋.gif","7bbac0ac420499b191b6a9be951eaf5d"],["/emoji/黑人问号.gif","b2f07f52ea73dc0d4df3e433a856e949"],["/emoji/鼓掌.gif","bef94100e54ab2eb34c5875d9371a6a0"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d8f53774c675e01f3afb04e59e1d0484"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","0c60aec73bbac509cebfdca37ae3a4dd"],["/images/favicon-32x32-next.png","0c60aec73bbac509cebfdca37ae3a4dd"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","6494250e78cf19278feefbab8d3e0d4d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","1c3e51dd539b465f3cd09b19b94d9be0"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/src/vue.min.js","915c889a16e40bffd3ba95936f97c057"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","8126764c44548063629ea695ef302d3f"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5cbaeeb2498fb4842e2afb822041fe3e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c086eb8d2bac7e70538b95689b6a04c1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","68faee17aa3ac37beaf8db9e637f9893"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8cd2db6c5be3287ceaf0159fd1810980"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","9cc76a1c2ea38c791282f62e437e0da4"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","763fd36e85322ab114f2a16aa2c92899"],["/links/index.html","b6ba3bf798b27c4109d8b568d5af30ca"],["/live2d-widget/README.html","1daaef008d39381f859b3cdbd2979638"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","52b993b0b254ef5b8004f84264d450b2"],["/live2d-widget/demo/demo2.html","5bdc7060a4464a08649e2ac4cbd99937"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7c7c0f855ec64db905427e6b939399ad"],["/movies/index.html","60154337eeafc4397eec78ba3cebd95e"],["/music/index.html","0980ef4b845505b331c7886c460ffa0b"],["/page/2/index.html","ff1f242414bde6a8b40ec230f1b5e70f"],["/page/3/index.html","d6dcd4f481c4c8b048757ef87aae81b1"],["/page/4/index.html","563bcf9dab6f655e4e081f6c8adc5fda"],["/page/5/index.html","39224cb3de323fc932bb027809e62208"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","2e5b2cf493145b6c3b82860593caeaff"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","c4597d45bc24fc8d0a12cac28ea3ebb0"],["/posts/15468.html","6116dd9b247370828ab2cc2ba08f8eb3"],["/posts/16107.html","17977e03ad5e4e22e6e9143ac0c15836"],["/posts/1dc7f47e.html","db43e06ba66c08ee979f97ef161d37a0"],["/posts/1fa5155e.html","12517c9be65f4789bfc87cc1868d4c9e"],["/posts/201e1121.html","b54d3e96e6552e22e9c336dd5a462f24"],["/posts/20352.html","320549c24d65ad8575a93b9c2dc0b67a"],["/posts/206ff928.html","778d6e9cd32fec42f22e5bb68676dfae"],["/posts/21238.html","1a22dabb2f338b54ae28acaf6e103c01"],["/posts/22281.html","e46b22b989b48cc0a2c92540951a5ede"],["/posts/278598dc.html","894f16c84276f1f08ff94d87fba5b2a6"],["/posts/2d063bc3.html","6359a6e53da19ee6999689c094259b4c"],["/posts/30c404a6.html","642be0d6e4d9af88bdafc4429523ab49"],["/posts/3e8e6c1f.html","58c345fc7ffa6664258b340c95b32229"],["/posts/51203.html","f27c9ecc1415ecb1f7e97fa4667dabe1"],["/posts/538e5180.html","06941acd78feb691bbbc23948cc608cd"],["/posts/5394fce7.html","af15bc079eeae32266283c0d35bf2215"],["/posts/59037.html","04c62ffcaa7ed41f8a7e6146982f666a"],["/posts/60816b5a.html","01aec54343659d895b6f0d7261a6b808"],["/posts/6163d4b5.html","ace5e88860975d7ec89b46acc414ccdf"],["/posts/69978469.html","66445bb1e32553d482287f223053b469"],["/posts/6a752619.html","9577cbdc20a1d656ad4c6f73775582cf"],["/posts/7fcb11a7.html","78ba84070d3d517ddde7ac38fe0a4513"],["/posts/8cc73e65.html","906fba44e4cbf016c0e30f58953d4434"],["/posts/9b621d6f.html","53b6cb2864a1a5976b48a0ee15b5933f"],["/posts/a530f7f0.html","db26c9d3f66eef8229c6d8e1d55b223f"],["/posts/ae1da46b.html","13e7a92291a98faa45bd5740c1937312"],["/posts/b4a48522.html","3171449eb8b6d21b5a9326364290067e"],["/posts/beb5106a.html","a766b43e7e5993f0e1b79fa3ace00efe"],["/posts/d66292e9.html","8acb260a872cdcb97bfad685fe251eb7"],["/posts/dd845106.html","cbd4cab094c8eb2e439dfe13cea8e512"],["/posts/e35620b3.html","827cc58b979d71445caae9e3c784b055"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","2376ae7711088455caee2d3a2f9269c2"],["/tags/C-语言/index.html","091c952ea974c5e31c58489e6047678b"],["/tags/C/index.html","3ac29c890e5768c2522db24c37dba189"],["/tags/C/page/2/index.html","fea7843918d51195fcbdaff1ed3e10ae"],["/tags/C语言/index.html","48e740f0431e33c260217e91917a4ffb"],["/tags/GCC命令/index.html","9acf6a3e37e4086f381ce150c8479899"],["/tags/GDB命令/index.html","c35f12070a90001c3a1e65b83cfba8d1"],["/tags/HBase常用Shell命令/index.html","738ecd462536334985fd809c1398bbe5"],["/tags/HDFS的Java编程方法/index.html","17626c9021257600b60ef72ef164677c"],["/tags/Hadoop的shell命令使用/index.html","5a47b425c84d7dff78a80894c9348fea"],["/tags/Hadoop的安装/index.html","17ec3cc41d7570f4c187edeedfd271d5"],["/tags/Hbase的安装及其配置/index.html","cd928b9772c5df9e572fb7eda80a8bf6"],["/tags/Hexo/index.html","d578885eb5883c1f3f8016d42eb4ea2b"],["/tags/Java/index.html","d877b42917d892c431305e99910ac0ad"],["/tags/Mac/index.html","492dc0c5439656a5aba6e567017d6685"],["/tags/Parallels-Desktop/index.html","b3a9f7660748d071b5d560941da73068"],["/tags/Python/index.html","56a897428fd0c72d610b1eb433204a45"],["/tags/Qt/index.html","c165ffb4f56d7669586d83a7c98abf31"],["/tags/Sql-Server/index.html","d9f4be371545db327c5b291eada0823e"],["/tags/abbrlink/index.html","dd4859fc43ce6acf321b0dbeec2108c5"],["/tags/index.html","59ebc2d6f108e45d0396342ef02497bf"],["/tags/obidump命令/index.html","0bf8e8e18f342302aee2c2cc1bb3e271"],["/tags/冒泡排序/index.html","d46c3c6736d1696d5b95eebc20379a7f"],["/tags/双向循环链表/index.html","3521283c05dad067ccec192b80d591d0"],["/tags/双向链表/index.html","9cfd78e77c44f8c4e7e39472bc393410"],["/tags/希尔排序/index.html","0ba3edc10708ce89e7a4f5700d3003fe"],["/tags/插入排序/index.html","b9dd047deb731cd669fdc765f43eb2a0"],["/tags/数据的位运算操作/index.html","4c8a01e77a6127792cc1c9825528aa68"],["/tags/数据结构/index.html","88d0062b53156280b4d576a437400fe3"],["/tags/数据结构/page/2/index.html","0611434819023634f24d958cd9d4d61a"],["/tags/杨辉三角/index.html","6b0eb2053be21eed7cff80e0d79d3d2d"],["/tags/栈/index.html","666849c8042c9f664037815b8ed15908"],["/tags/类模板/index.html","42d09763de668a1ea68e645e3b537405"],["/tags/线性表/index.html","e22480f2e47e5147c6e01397f0cc1dfa"],["/tags/计算机系统/index.html","5dd025c849ecc42ffac3b860c0674d79"],["/tags/选择排序/index.html","046f846a587f04a67c23d7451f3f9ee2"],["/tags/链式栈/index.html","18d60e713885e34632fc406b610177fe"],["/tags/链式队列/index.html","c1ecbb09fcd236a657446ab3d5238c26"],["/tags/队列/index.html","3cecdbd13299d4fefcc809b18943b8e7"],["/tags/顺序存储结构/index.html","0b2201af419a5ece3b46f911389ae0d5"],["/top/index.html","cd5ab039a881fc5f7ef9ebd64e1fc741"]];
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
