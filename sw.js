/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4115fa2933740d56a0eca929dddfa8b8"],["/archives/2019/10/index.html","5db4fcc52a4992bcd7225ef72a24f541"],["/archives/2019/11/index.html","123362b68c205a390110b6d5cc489801"],["/archives/2019/12/index.html","5f962ccc08a6d5355ff640fd63e77b27"],["/archives/2019/index.html","2850c8ff81b911b0e4e921d4bfddd71e"],["/archives/2020/01/index.html","fae5f7758a50083f6f30fc7bf8c13c13"],["/archives/2020/02/index.html","1d77212adc24840054f6e73bd36c0868"],["/archives/2020/index.html","38657b7b1bea1abca5b76c3c579d7154"],["/archives/2020/page/2/index.html","f34a7da1d5e28d0c6e5343459a7a8a5f"],["/archives/index.html","dece7542fed6b7cf6b07bd0de433cc26"],["/archives/page/2/index.html","56c9b51c4ac7e7d627ebb693c50d5a77"],["/archives/page/3/index.html","dae547a6c430609cc1a6e033a7734c09"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0978dc99e33e3997e98462809e8b250a"],["/categories/C语言/index.html","0abd36f31ef6a875e5aef2f0f46e19e7"],["/categories/C语言/数据结构/index.html","b092a4c035cd7da350f901c02adce111"],["/categories/Hexo/index.html","55ab86866a521ec67142e6a388fcfc25"],["/categories/Mac/Qt/index.html","0438b01b56eff063d5bb6f937231cd25"],["/categories/Mac/Sql-Server/index.html","32b09507d7d38c55b3a62f5e2d102783"],["/categories/Mac/index.html","7181581a4406bd9a6977d20df83048e8"],["/categories/index.html","7a39a7afeff21f6199fd6fd724bdb9c9"],["/categories/数据结构/C/Java/Python/index.html","e0c1295e66f11fdc6af7488c1f93a00e"],["/categories/数据结构/C/Java/Python/排序/index.html","0c4c36fd265556babc7ba4216345177d"],["/categories/数据结构/C/Java/index.html","5f28c09b1d21068fc4070b84050c147b"],["/categories/数据结构/C/index.html","91f883316d2091cb2ae6f754771b24c9"],["/categories/数据结构/C/page/2/index.html","ad35aea6f57bf842727d068adb46086c"],["/categories/数据结构/C/双向循环链表/index.html","5da79497e609f50aabc13fea6f458742"],["/categories/数据结构/C/双向链表/index.html","13f7bb4fb1b77f2a473a58ed95f1bc49"],["/categories/数据结构/C/顺序存储结构/index.html","b34a5606eb2c37b2b9ed0708ae511100"],["/categories/数据结构/index.html","a02f64a3f0b2a91a58acde755f78d54b"],["/categories/数据结构/page/2/index.html","8a02e78e0cc4c86c9f9592a616dc9525"],["/categories/玩转Mac/index.html","79f10202e8d81a353f85b32e91d4938b"],["/categories/链式栈/index.html","1f385119d3aad82857b383cf048053f4"],["/categories/链式栈/数据结构/index.html","91ef7f30743ad14aba30af3aa496ca7c"],["/categories/顺序栈/index.html","5f1402a42658cb1b96cfc52260796920"],["/categories/顺序栈/数据结构/index.html","5daadb4767c66cce9cb3acad174a5fde"],["/categories/顺序队列/index.html","9faa4705f4853af7f8d55937f221b64b"],["/categories/顺序队列/数据结构/index.html","d8f7ab388aa8d59014f066e365806d8a"],["/css/main.css","7e14ffe3195d88a8c1003c1726b1b90d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9cbc28fb425693951c276b67f0ff6803"],["/essay/index.html","4b64247cb7a02523c83110456279b846"],["/essay/res/css/main.css","1e136aded82446ff446f0219fabbda31"],["/essay/res/img/banner.jpg","e3f011d0d517e34f50e5258d90aeeb67"],["/essay/res/img/down_img.jpg","9d260c8258c0f1754615e8a41e17c6ab"],["/essay/res/img/erweima.jpg","a0b1ea3104a491826ed66558be5837b1"],["/essay/res/img/gr_img2.jpg","de21c2ed86354b70a91571a70f189567"],["/essay/res/img/gr_img3.jpg","4ca67615db0672fefe7e0d331a6165b0"],["/essay/res/img/gr_img4.jpg","2dee8f8a36d31ebf9de283eab85641b8"],["/essay/res/img/gr_img5.jpg","18e5d898dbc3278a8ea67ca5159b2861"],["/essay/res/img/header.png","1a7f862551a8265d50c346d91bd94903"],["/essay/res/img/header2.png","68fe0e9f5193cda524ea99563b190b73"],["/essay/res/img/jiantou.png","872da54fd6f68f523b0f28e7944dbd8f"],["/essay/res/img/liuyan.jpg","38d1e9b79036ac6486eee15fb9f8eeae"],["/essay/res/img/logo.png","836c02184e58ded3cd3a10f2e41e7c51"],["/essay/res/img/sy_img1.jpg","96b946df0e051aae5c89799035ff79b1"],["/essay/res/img/sy_img2.jpg","179d5bdbaaf4352660516d714b93ea18"],["/essay/res/img/sy_img3.jpg","32fb1c3053545714db36159ff8940f8a"],["/essay/res/img/sy_img4.jpg","17182f672cef4ab645e230b0ba15403f"],["/essay/res/img/sy_img5.jpg","fe60f1e9ef75a7ce9249a82875ddf9bb"],["/essay/res/img/wy_img1.jpg","0433f765ad2d9d3867f363555b1a1f86"],["/essay/res/img/wy_img2.jpg","305be6a26dd80ef5d04d9fac2fb1b69f"],["/essay/res/img/wy_img3.jpg","20f042d001183aa4a422d605f57e3d96"],["/essay/res/img/wy_img4.jpg","7dd99cf59705a15abba6f168a50ee412"],["/essay/res/img/wy_img5.jpg","8bd051d0b020fd2b69065a77efcbc6af"],["/essay/res/img/wz_img1.jpg","9e2ea6df2528bd0e62e958cc95b5dbb2"],["/essay/res/img/xc_img1.jpg","930319734d9842f9a25932f1f691d682"],["/essay/res/img/xc_img3.jpg","30c0c08e318a76adf313659cd75cf0e0"],["/essay/res/img/xc_img4.jpg","5b8a2bba830b2015c2a1ae85043f888c"],["/essay/res/img/xc_img5.jpg","d533ddabcaf3800532578244719b0243"],["/essay/res/js/util/menu.js","8aed266b2c09ab373ca7b27e19ac47d4"],["/essay/res/js/util/mm.js","85ca4b7d85498f56058bb2c6da163b04"],["/essay/res/layui/css/layui.css","fc1db8eb1b3ddf7858e9fffc6618c54d"],["/essay/res/layui/css/layui.mobile.css","a1f1603965937366fc84976ae74bb89d"],["/essay/res/layui/css/modules/code.css","37ef37181654c48d0e5a1972ccd6e170"],["/essay/res/layui/css/modules/laydate/default/laydate.css","4a8a52ccd154a5ab410b688f3048a4a9"],["/essay/res/layui/css/modules/layer/default/icon-ext.png","ba81b24c06e2e0eac1e219405b33766b"],["/essay/res/layui/css/modules/layer/default/icon.png","551539f873d9ebe0792b120a9867d399"],["/essay/res/layui/css/modules/layer/default/layer.css","ba3e7d46e810d43d2501753275fa3d19"],["/essay/res/layui/css/modules/layer/default/loading-0.gif","a72011ccdc2bcd23ba440f104c416193"],["/essay/res/layui/css/modules/layer/default/loading-1.gif","1140bc5c7863f8e54a3c2b179e640758"],["/essay/res/layui/css/modules/layer/default/loading-2.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/essay/res/layui/font/iconfont.eot","0208023e7b4a46473764cc8a59eef107"],["/essay/res/layui/font/iconfont.svg","5d06b4882837abc22aea91ea51d55b11"],["/essay/res/layui/font/iconfont.ttf","d8583a8444b3b76b28c9c7436abc7cbe"],["/essay/res/layui/font/iconfont.woff","e9caaa0617fa61c01f765960d10da0ef"],["/essay/res/layui/images/face/0.gif","a06a2e3ed6da3796fbb731367d039a0a"],["/essay/res/layui/images/face/1.gif","913e2f3dd1962d2a80b4ae66ddddceb3"],["/essay/res/layui/images/face/10.gif","611117291370fea2ceac62c29e3895bd"],["/essay/res/layui/images/face/11.gif","199be3fbe9ed7e5191c8635e05bcc0e9"],["/essay/res/layui/images/face/12.gif","7621ac2727678687a5318762f580142e"],["/essay/res/layui/images/face/13.gif","8621f66098b5c352706832525ca98430"],["/essay/res/layui/images/face/14.gif","c30514bf7d87214840be9409e0543aa9"],["/essay/res/layui/images/face/15.gif","485a20018f6fd278510c2953697ba65c"],["/essay/res/layui/images/face/16.gif","3d4ee858ebba0e46a7850e13185b7c9b"],["/essay/res/layui/images/face/17.gif","1e345b472299bbc72d854fea14377b19"],["/essay/res/layui/images/face/18.gif","f81ed31a2829c0609354f25e1da62006"],["/essay/res/layui/images/face/19.gif","fa7da45a4cf11818476a64b11972beba"],["/essay/res/layui/images/face/2.gif","aec972de4da971327e4452c5b4b5fda1"],["/essay/res/layui/images/face/20.gif","435dbb7f69e76dbe51c64d0208478bd5"],["/essay/res/layui/images/face/21.gif","21ed3c01c99c75162cc7d5c09e557468"],["/essay/res/layui/images/face/22.gif","7873504cf41c6bf81dc385e7a63e06c2"],["/essay/res/layui/images/face/23.gif","84b3bd065735379c7ebf902bd356eb24"],["/essay/res/layui/images/face/24.gif","9044159f1635cce276f79f2750e44bab"],["/essay/res/layui/images/face/25.gif","55ff58341b23eb412186f8e89963f3ed"],["/essay/res/layui/images/face/26.gif","7e64a36433e1f756dafc74093e71c678"],["/essay/res/layui/images/face/27.gif","4e10558193648444470bb9a1dd7007da"],["/essay/res/layui/images/face/28.gif","ed40b41d05a3020271be545a607d6d78"],["/essay/res/layui/images/face/29.gif","4fb6439d891b34c4936ae34a79725b59"],["/essay/res/layui/images/face/3.gif","bf97be0b15ace15dedf22f266a5c429c"],["/essay/res/layui/images/face/30.gif","0b7ff8f1bbb91be880ef190767774c78"],["/essay/res/layui/images/face/31.gif","dcc636d88b53e73852db566a4d9d2f20"],["/essay/res/layui/images/face/32.gif","8d9e9cc9b52ca46e854480fa4900158e"],["/essay/res/layui/images/face/33.gif","2f9e45312f49e02f32ce853db930295f"],["/essay/res/layui/images/face/34.gif","f81a7f4f93f254d58c0e943a07d2cc0b"],["/essay/res/layui/images/face/35.gif","cc8ff0383ce624c0721682aaa500b672"],["/essay/res/layui/images/face/36.gif","645be9a08ae4d8aac61e6b5fb47215e5"],["/essay/res/layui/images/face/37.gif","4c9e106e702751cb61861778269e2b26"],["/essay/res/layui/images/face/38.gif","15bd343617ec5ea02eedfdfe575c656c"],["/essay/res/layui/images/face/39.gif","edfe69e1b1f20cfa8110d9e9d2536c68"],["/essay/res/layui/images/face/4.gif","4d2933c0445dc04bdaaad41f2b557137"],["/essay/res/layui/images/face/40.gif","c94db1a006caf85ccb8a194335ce5621"],["/essay/res/layui/images/face/41.gif","55565f0156566feef1e329177f6d83f1"],["/essay/res/layui/images/face/42.gif","f24d53dee3bd1050b26d6d7cd5bca68d"],["/essay/res/layui/images/face/43.gif","599c45d8a2832cc01617fb42091993df"],["/essay/res/layui/images/face/44.gif","b0f285b595f10a1277774bf6844da76b"],["/essay/res/layui/images/face/45.gif","d17783318c1587204b6155c2fa9986fe"],["/essay/res/layui/images/face/46.gif","b72ecabbadc13888d4775ec53c9150f8"],["/essay/res/layui/images/face/47.gif","8ede6bd1d173ddeb6f3f4b241c8f3513"],["/essay/res/layui/images/face/48.gif","2a4c6936a09b0219d1c74f0167577b30"],["/essay/res/layui/images/face/49.gif","21069e4a6b8a4f6a0af40c87a168f321"],["/essay/res/layui/images/face/5.gif","8ae6b6ec8d2941a6adaee9555839e81c"],["/essay/res/layui/images/face/50.gif","96664d71d30c946747bcc651d085ed7a"],["/essay/res/layui/images/face/51.gif","c6c1e6c64c16d3747e251200e014f219"],["/essay/res/layui/images/face/52.gif","ff4d93b3615d5d975f0b6786670b702f"],["/essay/res/layui/images/face/53.gif","bc06dab3c63c4e2300c5cd4524819370"],["/essay/res/layui/images/face/54.gif","aff05197849e8c8f55b2d5fe56bb56f7"],["/essay/res/layui/images/face/55.gif","d7bdca562fd0b53f816eedb23148e158"],["/essay/res/layui/images/face/56.gif","8c6f0b4cdd0fa9d68205bab3d8df29e4"],["/essay/res/layui/images/face/57.gif","e37c81739515617cf5bc51232ad873b7"],["/essay/res/layui/images/face/58.gif","89d291439d6eae4b2db6746e589f6134"],["/essay/res/layui/images/face/59.gif","1cb4f698dd69602dd6f6eff121663a17"],["/essay/res/layui/images/face/6.gif","9946d6232e406ba2c10b60221c5b698b"],["/essay/res/layui/images/face/60.gif","71712fa565d89315b6ef2a45b3d581b5"],["/essay/res/layui/images/face/61.gif","4bde9630ca80c61063813274729af4ba"],["/essay/res/layui/images/face/62.gif","c0ed0920ba0d752ad77aca762050b12d"],["/essay/res/layui/images/face/63.gif","907b3e81d16afb9df5ef023ede0eddf1"],["/essay/res/layui/images/face/64.gif","959bacfef9ac0d3bb275504623c62375"],["/essay/res/layui/images/face/65.gif","a27ed9871926a8e37c522f6c1542df9a"],["/essay/res/layui/images/face/66.gif","02709c83458b72b0c73585297cc291f3"],["/essay/res/layui/images/face/67.gif","ab1c7c7a43aa6f43963c7b0afc9ec787"],["/essay/res/layui/images/face/68.gif","a1c8f21f98fc6eff21cb3e4d08baee2b"],["/essay/res/layui/images/face/69.gif","877ff95213ae5c45721761c540810053"],["/essay/res/layui/images/face/7.gif","3880bad4694b3ef38e2e58be68b875ef"],["/essay/res/layui/images/face/70.gif","b7f69e6df691b1c885f541ec604c59df"],["/essay/res/layui/images/face/71.gif","55a42691f8560bf2fbfed7c19389e4cf"],["/essay/res/layui/images/face/8.gif","8bfcb8fe88a3b666b5460743fb2cdc49"],["/essay/res/layui/images/face/9.gif","92bf7127158347196c4f9aef0d0ab301"],["/essay/res/layui/lay/modules/carousel.js","0f2916883c581a0f3e254d76c2af2137"],["/essay/res/layui/lay/modules/code.js","108e4989a1f45aa6a11b7d720967a384"],["/essay/res/layui/lay/modules/colorpicker.js","0aa56ead4c0ea94daddba1bb65e80039"],["/essay/res/layui/lay/modules/element.js","8213192b8e67b781849bdaab42dcc705"],["/essay/res/layui/lay/modules/flow.js","991888fc6096b52ae2e1edd19f279512"],["/essay/res/layui/lay/modules/form.js","cff39bc7b3d7442725705899cea581b2"],["/essay/res/layui/lay/modules/jquery.js","71980fae3076c6a1f1b4ee631e63d394"],["/essay/res/layui/lay/modules/laydate.js","e9778f7e25b1e35b6d9000c2c99a3a0c"],["/essay/res/layui/lay/modules/layedit.js","0b1b548f91cfc8f57c398a4c71987a8f"],["/essay/res/layui/lay/modules/layer.js","68ff582d8490c48ccb5576ea27a35c8d"],["/essay/res/layui/lay/modules/laypage.js","9cbf571039d1afaf597c3463f1f0247b"],["/essay/res/layui/lay/modules/laytpl.js","18b455f4807311fc508d80f5f07bc07c"],["/essay/res/layui/lay/modules/mobile.js","d5a79f8ce66c15f3cfb5ddaa14ef9ddf"],["/essay/res/layui/lay/modules/rate.js","1b76c385e5762d3184ee09a045e06b57"],["/essay/res/layui/lay/modules/slider.js","226b4f18d5bf282ed6c6dd53afc6034a"],["/essay/res/layui/lay/modules/table.js","da866a2a32ae1c86da6b73a1c060dea1"],["/essay/res/layui/lay/modules/tree.js","a014d576adfcf791a150e84c5facc685"],["/essay/res/layui/lay/modules/upload.js","8b670942bffbc1a655a2f7c8756a5e07"],["/essay/res/layui/lay/modules/util.js","3ae9051c654949844a565a1da9a67c9b"],["/essay/res/layui/layui.all.js","ff72aa61a7f5fa577afcf51c2fc37951"],["/essay/res/layui/layui.js","d9328fba9720a5a8444146e458ec6d1a"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b9407c109a69c994c241a0e2f723c1b2"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9220632b1422b7f21af01f0c68426a26"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","3f5705eeffa62d094ff9b54843faecd3"],["/js/src/algolia-search.js","5a295b909978659e677c9ef1b44f5fea"],["/js/src/bootstrap.js","4756b6414448f354014361025ca5db29"],["/js/src/bubble.js","0448e0ed0f69a36981f7eea4c623024c"],["/js/src/clipboard-use.js","221819791bb4f39f267e14b94dc15bc6"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4a73ea7934067df5e50d32b4459fa0dd"],["/js/src/exturl.js","c1881a0162e4ae25d6659fffe4bb28d9"],["/js/src/hook-duoshuo.js","01d09c7991f3a146121bdb04fbeb3bbe"],["/js/src/js.cookie.js","7c9002a743602dc3d85d2c4f4cb34426"],["/js/src/linkcard.js","9de044ddccc58a5ce14c3cb404b65d3d"],["/js/src/motion.js","ee58ae9566a2a7b8c402f60fc5d238a7"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ae6f510bd63046435bd0353e3c692564"],["/js/src/schemes/pisces.js","1f3c3d357cfb6dcc8f5dccd2604d3dba"],["/js/src/scroll-cookie.js","49c386ded62b5392bc50b993a44318eb"],["/js/src/scrollspy.js","609aa4279cbdd6de70f4f7b61bbd83e0"],["/js/src/utils.js","ee4d46b85f48aae517c143f0358b81a5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","4db90f44bcba7a0924fce1dfe3b2dc4e"],["/lib/Han/dist/han.js","fc9d167e54ac893249656d875178510a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c9d7557c047cc990d128043c82fb5914"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1d6a8afbdb06687c2f24fa1ea41cb564"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","179e7db616316859c097e58ba5d811f6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4719e3b0c32720bc4e68d688c5f4bcbb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","312e1b7c69478476390598366b28d493"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1d45cdfc63549eba40b9d624d67f6282"],["/lib/fancybox/source/jquery.fancybox.css","35539c796f2ecfcad5114c57e8d227e4"],["/lib/fancybox/source/jquery.fancybox.js","9ee2eac163413056f6fbf6477f8f35d7"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","831c75783b5465fbcf5beeb18e690faf"],["/lib/fastclick/lib/fastclick.js","8cada8b0e5cfc50ba7cc401184a7962b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d09d4bb5007ba34d3cc4db0ae6393269"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","1bcbfc44ddc8204ea811a54f76bbe176"],["/lib/jquery_lazyload/README.html","08eccbc32164e4a942f38fb4dc95793f"],["/lib/jquery_lazyload/jquery.lazyload.js","1055c71d631da8ba8f598ae8bec1f145"],["/lib/jquery_lazyload/jquery.scrollstop.js","f3c3b1ba6ac47aeff240e9933d1c9bc8"],["/lib/needsharebutton/font-embedded.css","4be14becd51fa88f4b56eb8ab01f6a8f"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","88daaa1f9055465dbc11182014156e6d"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e78d2bcc7c7d4ea2a769706e0e6dca51"],["/lib/velocity/velocity.js","d05acb179695aa044ed843d71bb06506"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8234bb9658e9f177e15c733548870734"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e2b9b9bfec4c8a26e19dffcee92766f4"],["/links/index.html","47e30f8944a65cec184279916e586557"],["/live2d-widget/README.html","d568cecf2a3be38206fe4bdd972bacb7"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5e0aec8d4797cbf38c07ac9213bb53bb"],["/live2d-widget/demo/demo1.html","2f9004616f53b02d0209d367bb1661c6"],["/live2d-widget/demo/demo2.html","81310adcfccc0da8bb9f0f9a367ad8b2"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8a44c00491e735f80515535406fabfb6"],["/movies/index.html","06f1f897677f88f53c24ebc3f6090764"],["/music/index.html","5bd3d071d4ff3b1e775f3fe40a3822bf"],["/page/2/index.html","fe9bfcfd389e9e236b7c40003f19049c"],["/page/3/index.html","64b25f76c9d8c158349354ba42df5b48"],["/page/4/index.html","d9529ca4fa5e810756f568919da19d9a"],["/photos/index.html","926f6a3fd20970500ab36a6be7b2dedb"],["/posts/14311.html","b8e8d2a0e10731b1056e3edcd46a02e8"],["/posts/15468.html","cf8532b31d8ef5442936d72734feb7de"],["/posts/16107.html","a0f4c435a941531d75382de1fe751ed2"],["/posts/201e1121.html","554dfed452661b06549036166f040974"],["/posts/20352.html","c4947a46bc1fbecb0381cfc99efdecc7"],["/posts/21238.html","a7dc716ce8e3bd04cb20888fe4d28b40"],["/posts/22281.html","7ad5e3838d5cdf3747a93ba752cff518"],["/posts/278598dc.html","d9ac94a8346f106f98cbaa22e6ddbca8"],["/posts/2d063bc3.html","102caac1e903202a2963ef6e6fb70dff"],["/posts/30c404a6.html","67987a6c45ab7cb20a9394afcb34767f"],["/posts/51203.html","b5d55e3c65efe28c768a46822903b64c"],["/posts/538e5180.html","9be5a79aa93e84a5be5ac5a6e39c4818"],["/posts/5394fce7.html","9b931599932a680ad93d17ba9c6ca588"],["/posts/59037.html","78e3b90a0f8350f1f0e6d9f68d094202"],["/posts/60816b5a.html","e4dbd7df634185ab7bb5898ea08c544c"],["/posts/6163d4b5.html","ed34a45ed5bbccbf10e317993ee616ea"],["/posts/69978469.html","080c34e9938200e2450162e7238f296c"],["/posts/6a752619.html","1a6fb079255b40891cad1e651759583e"],["/posts/8cc73e65.html","ece59cc43ec51dee40bd696f89369167"],["/posts/9b621d6f.html","2f03f992cf3d765d7b82b2423b6a411e"],["/posts/a530f7f0.html","b4bcc3c0deb8196f9c3ae3ac447ecd48"],["/posts/beb5106a.html","4fd8d06020178d446abfad7e1969a1c4"],["/posts/dd845106.html","508dc693dd4435adda88c2b6887705ec"],["/posts/e35620b3.html","d6745854c276b63dcff906fb2a26df0f"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7619c36abe9d432818abf966a19d92e4"],["/tags/C-语言/index.html","be2d337386a40d3ba679cb9c9d6ad30d"],["/tags/C/index.html","dcf2dca7311573fd0933374d1282d11d"],["/tags/C/page/2/index.html","458b5c5b0146539f2f4d7ec004f6ad35"],["/tags/C语言/index.html","496d22f3aec360b1f77e9d96459757bc"],["/tags/Hexo/index.html","767f3ae59178a73b653782d2e3dc6c2b"],["/tags/Java/index.html","f443ca6c2709d13d29a9300ecb81b027"],["/tags/Mac/index.html","3027f4ff10754780550f0aae3e3dd882"],["/tags/Parallels-Desktop/index.html","bd5e99764c5507addcdbc3f40a5fc045"],["/tags/Python/index.html","42b2f40e483a7aba62a4efe0b3dc317b"],["/tags/Qt/index.html","fc8aaf5bdb08c29c1a20432a1b5d0ad4"],["/tags/Sql-Server/index.html","e9424ca01ba81693e3c1087b4e845569"],["/tags/abbrlink/index.html","54a02eb8b39652d6c9979189bf273b11"],["/tags/index.html","0aec1485c0aa1f80485a6a1a41b99b2f"],["/tags/冒泡排序/index.html","353eddcda2ec7ea6ddf3f3a8a75165c8"],["/tags/双向循环链表/index.html","8aacc6b22db06b4693825b02d88dd50f"],["/tags/双向链表/index.html","de1122a25a6e4ba01d735099272fdbe4"],["/tags/希尔排序/index.html","1e6c867d1d44219993bb8c3bece7c9f7"],["/tags/插入排序/index.html","c9285018e8336ee71c7ffb3af4e06189"],["/tags/数据结构/index.html","2f50a74066c2bd298b041e4bb3185b84"],["/tags/数据结构/page/2/index.html","f0d06fe464f98437e1ebdb9d8480cf88"],["/tags/杨辉三角/index.html","fed3c0f7efac2e96edb2301f9062bb97"],["/tags/栈/index.html","d7ae4fbc2f9a239264e251188cb6c51b"],["/tags/类模板/index.html","a6a140bdf5a9cb4c63fe028692f252be"],["/tags/线性表/index.html","5bb762b26dce67273d104007ab3a713a"],["/tags/选择排序/index.html","335564e2b8024280ee2c7e6e14a8486b"],["/tags/链式栈/index.html","99220495c37a8ead65e918b38d631cc3"],["/tags/队列/index.html","0c5671567b7a8ab72cb6e8afe24e8251"],["/tags/顺序存储结构/index.html","3572060dd84c65f8f3b3b51e08a618b7"],["/top/index.html","0cd51e4c1432c25a6c8b16af8a818a90"]];
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
