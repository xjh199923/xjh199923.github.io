/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","b96f3015675ef11d92dfd1ed41e42399"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","135871f3e1004e4adfce76a6a0606ed0"],["/archives/2019/11/index.html","548122f8d7f27f9ff74e8a97a7a828ba"],["/archives/2019/12/index.html","45fe02ff34c615b5603cd726b9027091"],["/archives/2019/index.html","05fedd61236962c3c7433fc733530f8b"],["/archives/2020/01/index.html","061d55e73159e58b3bb671981ce8a092"],["/archives/2020/02/index.html","6fd67b5bade39382f9c4cfe66c190cee"],["/archives/2020/03/index.html","343369d00443f57646583ed683ad566f"],["/archives/2020/index.html","4fbd3abe8de53bfa775e869036b55809"],["/archives/2020/page/2/index.html","69ef9c20639144f0b510a1b540a79444"],["/archives/index.html","f92dcf581cc9bdcc05a05160bfc35135"],["/archives/page/2/index.html","3b26906c8a381953e57762bdee331078"],["/archives/page/3/index.html","e56f073d51fc5a71e45bea49cc3b9b86"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","44de456453abd8ab2e7e9f2885d25b12"],["/categories/C语言/index.html","8bdb04e01bacfb2d5bef433baba9b7d7"],["/categories/C语言/数据结构/index.html","7de4f65857fe182d86fd342c66126f83"],["/categories/Hexo/index.html","d616ce3652e9241e47660e37bb674304"],["/categories/Mac/Qt/index.html","e271478b9211ef1559ebb39b19aeef03"],["/categories/Mac/Sql-Server/index.html","9cfbbf74692ae92708eb90382d078ce9"],["/categories/Mac/index.html","08ffd8e8d47b59cce897446a17afb547"],["/categories/Ubuntu/Hadoop/index.html","af5cba424de179b8f4382d1afedc597b"],["/categories/Ubuntu/index.html","3f9d0899790132c2fe823bcdcccdbfab"],["/categories/index.html","80c3bc274bea08e36a852ffb8b062aeb"],["/categories/数据结构/C/Java/Python/index.html","122b43796099cd1776af46bf0ce2122b"],["/categories/数据结构/C/Java/Python/排序/index.html","9217e599eb5d87ba026d8416e45b4052"],["/categories/数据结构/C/Java/index.html","c1b5d85ffb3fdbd8c679281cb470f317"],["/categories/数据结构/C/index.html","2d778b2f8f30a0a1a6be5891f0cfa977"],["/categories/数据结构/C/page/2/index.html","7e20eb6c41c0cf85dbcb1f56d3f35645"],["/categories/数据结构/C/双向循环链表/index.html","98a155ddbcdae499aa3d1c86b955b4af"],["/categories/数据结构/C/双向链表/index.html","b577a7b8b073e83c6edf3e96d13df982"],["/categories/数据结构/C/顺序存储结构/index.html","1e769cd67c25944c0511944c4f8c08da"],["/categories/数据结构/index.html","1bed9c0d3533ec824119fdf00cf283b0"],["/categories/数据结构/page/2/index.html","9b7006c9a6215d10c7e33af7e11be7bd"],["/categories/玩转Mac/index.html","acda6270914a7fdfbc2db87f0c092ee9"],["/categories/链式栈/index.html","0bbb841452abe94c7ba8cec7681e584e"],["/categories/链式栈/数据结构/index.html","db1d8454c938f415beb3133b89b91d7d"],["/categories/顺序栈/index.html","73f948e1c24b6e37731726ebc98fab09"],["/categories/顺序栈/数据结构/index.html","41f618f770c6c2b35c6fe72a2f463b23"],["/categories/顺序队列/index.html","ed2e69a6b3e93e2b3e84d7b674b6e93e"],["/categories/顺序队列/数据结构/index.html","9aea1df6950ccf6386bbfc8f98ef6714"],["/css/main.css","b3b667df21209f16d0013957ea276a40"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","c6482060c8f6222a4f367f46f2fa0993"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","3075d0d8e3f4beb2fbe978abfd5d589f"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","1b5e91764db98b135950be85d8061e6a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","369b058f6aedfe2805380ec46a039674"],["/js/src/algolia-search.js","f5eb5116656b9318ad7fc0779c376354"],["/js/src/bootstrap.js","eb738de33c5966d7554bc2962c51b0d6"],["/js/src/bubble.js","b01252d3de08c426a89e5a0b2fbe3cf9"],["/js/src/clipboard-use.js","f383ea17bbe6f598d10ece0b7ce4c90b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","9c819ca35e9e0d030cf0a147a65a3dfa"],["/js/src/exturl.js","1803a2721a47716ba95d59b3f47c371d"],["/js/src/hook-duoshuo.js","37197dcf42b5176b171c58a9d1b0329a"],["/js/src/js.cookie.js","8b8d49b05121c4f1143f959e5960359b"],["/js/src/linkcard.js","c70fa1d16a88da1473521d64161b2fd6"],["/js/src/motion.js","1203cdb20d770634f9afe28bed4efe5c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","76873877919b9ae89d9a37ed4863f4a0"],["/js/src/schemes/pisces.js","3fa3c91fd6f1ea5e7c09de4c1545cb93"],["/js/src/scroll-cookie.js","5a3b3282090dc873e4d39d0a5f30544b"],["/js/src/scrollspy.js","e2cdacc8bb0333bed15a5da8bffb6d83"],["/js/src/utils.js","8bc11189a582ea9b2c531f0e11b84791"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","3ac02408f0f6d7c3e8049456e7e773cb"],["/lib/Han/dist/han.js","7518a21eddefef46d634e29583726aa3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b5d6ca2803a82e0e31bc82d5422960ea"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1c185afdbaf9cba65e35ebb187f4d1f9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fb39a382163c768a79036d209f25572a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","54781ddcc87e7639296f55cf22c8f748"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","61a679b583603c4b26659d3dee073b95"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a15553f5dd1c39a51f89e5b9f09d616a"],["/lib/fancybox/source/jquery.fancybox.css","3623d1d22792404280de87bf8e3cf556"],["/lib/fancybox/source/jquery.fancybox.js","1802e2ad5b84f666d1deef4232726a79"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","12fcd30b5f4c34d6fcfec7c2d34af5af"],["/lib/fastclick/lib/fastclick.js","62277b7b1db58e2c2a7f6c97f243df0d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","396cc697eca7327e7f43ce9cf04b723b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b533940431939d6a2bce39dd06daf855"],["/lib/jquery_lazyload/README.html","9452b354bbbb2207865b533f984816ed"],["/lib/jquery_lazyload/jquery.lazyload.js","d1c821d7f6cf670243d403446a32a146"],["/lib/jquery_lazyload/jquery.scrollstop.js","a11918b588f83904564f31dc54d28edd"],["/lib/needsharebutton/font-embedded.css","85f01c83af0c42bfd239abcaf40ac91d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6b7c81c5c765b44a1ce240cc5805261c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2ec2147fe147569fc9fc1a77ef6642c3"],["/lib/velocity/velocity.js","e01b67f19a60f9bef71da603a4ed1854"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4dec8e83ce34c7ed008b619370ad62b5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b491075ebb531965d36c40fffcd43665"],["/links/index.html","21081b606572497bd860846762ef1925"],["/live2d-widget/README.html","7814a4cf84f2197664554ac1db260be3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b65c209fe3613129ab474d45c4682b98"],["/live2d-widget/demo/demo1.html","cb9cfa63bb7f1d3ebdc1d2e995f13582"],["/live2d-widget/demo/demo2.html","8cb4eda7cb780a1df55c2cbc3c7152c1"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","d1e07e49ce1cc9fc72019a38f13621d1"],["/movies/index.html","c83840e78d78854c35167259d9110e75"],["/music/index.html","bbd2247c3dd9fcd01bd7a09dfedece41"],["/page/2/index.html","dcf8a090a0f94c935966aa3fc79044f0"],["/page/3/index.html","e5a6792b573f5c61566ca74afaf94408"],["/page/4/index.html","31533eb51fc192529cbaf3d9f3064c98"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","aaa3b20115c54d8727836ba60a0dfcea"],["/posts/15468.html","2b2e331ccac77280d5f90747ef5fa16b"],["/posts/16107.html","dfe8231715ca2ec54912433e3273eda4"],["/posts/201e1121.html","fdbd24249982882e12130b5f2f7aab09"],["/posts/20352.html","e60f2446ad63e3c7c5cc9b4737a18202"],["/posts/21238.html","b55e423f197b73289e3498ac91424d4c"],["/posts/22281.html","60abfbaed921cbe03f516a590352e219"],["/posts/278598dc.html","ea02e3ccbc72c2d7112222c99c2b5aa2"],["/posts/2d063bc3.html","162dbe449f793f8eef67049e64221e3c"],["/posts/30c404a6.html","a1e27910a8e436b9c9f1e4bd06fe1fba"],["/posts/51203.html","f5951dabaf54f0e2cc50c4450b1789d6"],["/posts/538e5180.html","e3847c805a8c7123e3ef5281d6a3324f"],["/posts/5394fce7.html","da5e4a606cb5134be0a00bed70c64a7a"],["/posts/59037.html","a04ca27b6278220306bd8f23188537cf"],["/posts/60816b5a.html","834165a6f4696d96525d8c305ae30776"],["/posts/6163d4b5.html","c898c88b10eb6ba9b1e1d4bf3281f2dc"],["/posts/69978469.html","e119de06c3f0417c7678dcd2f6111bca"],["/posts/6a752619.html","2fda79a1b58c1a6d9a0bb3f6d81798d8"],["/posts/7fcb11a7.html","d5bdb2bff074168432d1b2d8cb291e39"],["/posts/8cc73e65.html","371990e33b157e6773b934d31d6ecb41"],["/posts/9b621d6f.html","d1b43beed4de1d95682d12ae2ff77e25"],["/posts/a530f7f0.html","e80033696d21f5cc38134a49226df907"],["/posts/ae1da46b.html","26d649398075306fa23698139e2d4bd7"],["/posts/beb5106a.html","e7b0258c866dc4b1b04727a1c245b5be"],["/posts/dd845106.html","be406206ebb96bc19ed0f211a512cffd"],["/posts/e35620b3.html","67ae1e2f52ac896e4653f94e059c96ca"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a7700a3bcc26ab9f9598fcf3b6bc372f"],["/tags/C-语言/index.html","ee9d7465ffe9615f48dc7b79f0cff36f"],["/tags/C/index.html","80fda264f807ff4a8eb2769a2ebcf47e"],["/tags/C/page/2/index.html","cab1ee53f13ce02d14cd06353bf80035"],["/tags/C语言/index.html","fbcdc5293da1c8f73c4149ad6c82a490"],["/tags/Hadoop/index.html","b1519ef88bcfa3ea6a16de343c98222f"],["/tags/Hexo/index.html","43fb6eeed7339482dff81cad624f6545"],["/tags/Java/index.html","b4333c5188adfd3d12fa5e3bba010999"],["/tags/Mac/index.html","7f88dd09aa030b20bedfd2ec8a77def6"],["/tags/Parallels-Desktop/index.html","4c1a80627f6394c2c42b3b2fd3bd4ed7"],["/tags/Python/index.html","83e46dafc73e936ff7661ad825fe4c02"],["/tags/Qt/index.html","32402b1c84c1f72ad0ed0f1f0ec3f6e4"],["/tags/Sql-Server/index.html","f6b9662d9c00edad0df470d5bfeebdf0"],["/tags/abbrlink/index.html","6c0a7ac4008e0e50dc490237eb377dcc"],["/tags/index.html","2cc50a51b21f534e7b5443651a2acea6"],["/tags/冒泡排序/index.html","ddc1dca096ba148aa90f949214e91bf0"],["/tags/双向循环链表/index.html","9020a203b428f380e15556a968173d4f"],["/tags/双向链表/index.html","eb365d27eb5ab859aa6140e0cf8c7f6d"],["/tags/希尔排序/index.html","b945f697b10a84b480ed001e3c662a65"],["/tags/插入排序/index.html","f6467c60dbb4c07fee26d048f4324917"],["/tags/数据结构/index.html","703bb5a3563e639539f65db778c8429d"],["/tags/数据结构/page/2/index.html","7c8acca1826c152b279a89e5f4d338a9"],["/tags/杨辉三角/index.html","103d22198f9c8cc89e2ab73617a50e07"],["/tags/栈/index.html","44f656b49daf00b659c3c1e0f03fb8df"],["/tags/类模板/index.html","a824e2f431a1408a6dd98e7794b030c0"],["/tags/线性表/index.html","05923ce778147974b0b693c9353a6a65"],["/tags/选择排序/index.html","3bf2da7f378fdb62290193fa4f61c38b"],["/tags/链式栈/index.html","ec83a103a81da0e786c6908aa45518dd"],["/tags/链式队列/index.html","fd27b9eeb6f3b620a8ee95d72273d375"],["/tags/队列/index.html","a909cea6028af108f1d91c9769cc9baa"],["/tags/顺序存储结构/index.html","d44a4745b49e4bc47d8d21494b736dff"],["/top/index.html","1fe70af0e18f3760aad93a3cca272ec7"]];
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
