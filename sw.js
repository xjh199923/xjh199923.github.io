/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8eab9e76d15f1c88ca20a6f8a36a7e34"],["/archives/2019/10/index.html","5f72d25c2e8e997ade01e9538c8971b9"],["/archives/2019/11/index.html","32ed30db19e3579542488a87336660e2"],["/archives/2019/12/index.html","002dc6a1228299aa5cb0f7caf3ce7486"],["/archives/2019/index.html","994423e671fb04d903ee70290809a2f5"],["/archives/2020/01/index.html","64278bbc1e08f0557841edba51c8f6de"],["/archives/2020/02/index.html","3f4a970d97485d1056da07ddfb618dae"],["/archives/2020/index.html","840ce642b70acb97579f8fb657c41fd6"],["/archives/2020/page/2/index.html","91b8e50bebe9741e15f526d6b52a023c"],["/archives/index.html","4a8124790dfd9392f03775e2f959f65b"],["/archives/page/2/index.html","ae40a684f31e9294e962f4fa239f321e"],["/archives/page/3/index.html","e6d0e2941ccef087046c92feda7deceb"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0551c7feb1cb0db56d8a179fd4c13f1b"],["/categories/C语言/index.html","91ae134735225442b077ab4ad92040c8"],["/categories/C语言/数据结构/index.html","7db37f01392baa560663343706db8f5b"],["/categories/Hexo/index.html","4a388701eb41fc81049a58081609dd60"],["/categories/Mac/Qt/index.html","d9c3391f0fdab4f8af51ff757499cd39"],["/categories/Mac/index.html","f8678351e3da6a85becd1e0dfaa54b93"],["/categories/index.html","163d7e73cd5640dbbb90a852929eabcb"],["/categories/数据结构/C/Java/Python/index.html","9882155fa83314c5af4344ebed05f17d"],["/categories/数据结构/C/Java/Python/排序/index.html","9562aeddbf4b596dc4766c9185d8cd19"],["/categories/数据结构/C/Java/index.html","ef0066b964b57203e21d902f024f16fa"],["/categories/数据结构/C/index.html","6b12816e264b000088145431ff8b3268"],["/categories/数据结构/C/page/2/index.html","5e20555edd6f7a11ef85ece7d06a4cf4"],["/categories/数据结构/C/双向循环链表/index.html","d50bae6067092df5f5ce6041f53abc7f"],["/categories/数据结构/C/双向链表/index.html","e4fbe14f5686b39a1b431bf87d67de08"],["/categories/数据结构/C/顺序存储结构/index.html","03084999eeb55eb0ca950bb4b3460248"],["/categories/数据结构/index.html","28b7f0436aa7c06a76fa5e8a00eff0dd"],["/categories/数据结构/page/2/index.html","c81e056ed419892686e661f15d82947c"],["/categories/玩转Mac/index.html","5cdb8a54cd39788d2c81e408f2537899"],["/categories/链式栈/index.html","d87e2282135b6efe7edc66825d9babca"],["/categories/链式栈/数据结构/index.html","294c087e8c616759968b04ffc4ab6141"],["/categories/顺序栈/index.html","df02411e5a2ab189aa9941cef7d580f9"],["/categories/顺序栈/数据结构/index.html","8ba3f767386ef5451db95e918ecac192"],["/css/main.css","1dc1d97775ac0fcb4e39c99e57885a92"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","66991708869e2aeefd0ded5dcbe91423"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","237a1424880b0585531aa26a4713b1bf"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","6df5c1d3af11433689d4407f0bece2f0"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b6668cfcd3d43398e71311f75a571a18"],["/js/src/algolia-search.js","cedcbcc51673f713eeed6a037449bc2a"],["/js/src/bootstrap.js","33be66fb63199b91be12914aa7cfdc45"],["/js/src/bubble.js","e1050199572b7338cabaef3cdbb69e3e"],["/js/src/clipboard-use.js","b7bd095fa8980d8c0537a7cc345f1093"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","20e2f9a1101bf0f8399a6f84ba768f1e"],["/js/src/exturl.js","83f583be24eef4bf94e57ecfcb03b9fb"],["/js/src/hook-duoshuo.js","f6436b36379cc198984eec627974de0a"],["/js/src/js.cookie.js","6fb4956bd9f1a2719efd7df48e912928"],["/js/src/linkcard.js","457173561277cd7cdb60fe035e455a62"],["/js/src/motion.js","2ddb925cf328859afdbc33417e5735dc"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","19be3c1358a2e5dbf20a38852197b8c8"],["/js/src/schemes/pisces.js","2835fe2143cf64fda4fe607c8c73c808"],["/js/src/scroll-cookie.js","1412eb0b34c2a4219a1d0081be628b89"],["/js/src/scrollspy.js","84b74c4f6bee4f2a9a37845ef41fdc8c"],["/js/src/utils.js","56c2a9abfc93af557ffd81efb86c239d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","13d96d0efa6edb0564ceafba4cc7414d"],["/lib/Han/dist/han.js","f2e66a508e01083049bbebd746888cdc"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e980488efa59b9a11828e61fc5dc4ab7"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c796bba153cb837d4d9fdf0fc9d75d52"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","68dcf9af01c482c90dd0baa592a824c5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7077ba8574e79ae54a44356a7b16394b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9d5fc494bcdae029dd70cc4a4d44201a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","2a65df543c72ad43b658a41387d5dc10"],["/lib/fancybox/source/jquery.fancybox.css","9faefd139da39c3702fee21d5faf1662"],["/lib/fancybox/source/jquery.fancybox.js","d5d5a169522726999143f75653f429a3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9ca9255e207d0fa77effb778eca4ba7a"],["/lib/fastclick/lib/fastclick.js","b67bb901144ec5297c8212c1b40e2e0e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5f22a04bc512b6bf18b36b8cbe5a469f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","df641d043d4c6e60fa19cd5c5ec0119c"],["/lib/jquery_lazyload/README.html","10e6bbef9aac58d1373bb63e490429af"],["/lib/jquery_lazyload/jquery.lazyload.js","5b9d33a4bf1b9d0ab8603c9ea16110bf"],["/lib/jquery_lazyload/jquery.scrollstop.js","f60b20d0a0f9bdf1835c1218c4bf4627"],["/lib/needsharebutton/font-embedded.css","f64e490a06744425e1578a5050b56efe"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","e97c0e09a57c252d1a977fd1ba424dcc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","07fefb98ea684f9e2b7012165c3058d8"],["/lib/velocity/velocity.js","9ac4131ee953312d0e66cb28eb58a53d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","136a4956da01271df142b74603385a99"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","73757d9139bc8fdb5b745dacb818e43d"],["/links/index.html","fad85baf17b297e64be83daf9dd87719"],["/live2d-widget/README.html","84ca985d53c80d2a9a92c2fd4762cc6a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d7362755863ac83e7a5db310b55375eb"],["/live2d-widget/demo/demo1.html","1b6127c5120555561dd8e40b195dd26b"],["/live2d-widget/demo/demo2.html","66c4060bd2b76086c85048a8e3a2ed1f"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","5b6b43fdfc3841447da733ebfdb68990"],["/movies/index.html","7dbd598f9836e709de8d9c0e316e681e"],["/music/index.html","56ff12eb67433fa6dfa5563522a1bf7f"],["/page/2/index.html","a712ae7807cdcdff8ae652388b586871"],["/page/3/index.html","f86d0aab3be6cf7c0ea0b1488d1a1546"],["/page/4/index.html","0f517992d44f1b87b464d4b1319ab31a"],["/photos/index.html","90d6010a442f7bfbceb9af0e697c73b0"],["/posts/14311.html","01da5d05e557965a244e82f9ab391a5d"],["/posts/15468.html","b1de448b3b5b2d7787aa3c89693c3c2e"],["/posts/16107.html","7b39298c601722bf16f4a59bf4f9a575"],["/posts/201e1121.html","5f2a7be9ef3a995603178ab13c63be6b"],["/posts/20352.html","e9795731dfc2fb09f28cf99686c21ca7"],["/posts/21238.html","a6d630d74f68474684533d7fcf298196"],["/posts/22281.html","6b14cf3de76b0ac5fe3c6b65fdca1be2"],["/posts/278598dc.html","8d172c7dbc95eaa0a7b9d3093c1d1196"],["/posts/30c404a6.html","859f0c8df779fa9b0ab7f51b3d6403cf"],["/posts/51203.html","8babb045abd83384d9cbeb0f7268a69f"],["/posts/538e5180.html","e3b67a59b22b47b1813af8d4f0030c0a"],["/posts/5394fce7.html","dc783841bb98f6d712db19488495e46b"],["/posts/59037.html","59c41030f08cfd7b7e52e97e345cc73b"],["/posts/60816b5a.html","8725ab8d66368103ae404cbf58400c78"],["/posts/6163d4b5.html","db62440a2e1147c1072b1e721d9ee0b9"],["/posts/69978469.html","bcdd6dd0ec8640ed3cadf2ef5e971eb8"],["/posts/6a752619.html","dbff8315d18b580cf47fe5e90c6fded7"],["/posts/8cc73e65.html","476e6c26ab69076bf7e79cd65557de5a"],["/posts/9b621d6f.html","135ee04784017a09e54d3e695be22702"],["/posts/a530f7f0.html","eb21c90a60315a9ea89981674d27bed0"],["/posts/beb5106a.html","0ff2041197f8056828cfa69ba2bfac5f"],["/posts/dd845106.html","c7628af2f4a2fc3d8e2c0d0e73094d77"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7fbd51d059d0a70a0b3192f1deea5b8d"],["/tags/C-语言/index.html","f1e474fdc591201790a761e9af9a844b"],["/tags/C/index.html","33ac4d5f730716d62aa690ad449a9a39"],["/tags/C/page/2/index.html","6ff4cbff8c03f53d90ba0170721f2496"],["/tags/C语言/index.html","6d83555f45d8e56fefde95d2023c7724"],["/tags/Hexo/index.html","d1d1681270cdfe6079de7561a5fdb73b"],["/tags/Java/index.html","f1d7ae2cf9efb8d145e39086f99d799f"],["/tags/Mac/index.html","f6f3993e997579217a164f61ff28c04a"],["/tags/Parallels-Desktop/index.html","75381a09dace738b348aa6e19c539428"],["/tags/Python/index.html","5184192ce49e803144a032ad418e1130"],["/tags/Qt/index.html","814a23290a57aaf96b8da7ebc9011dc8"],["/tags/abbrlink/index.html","e49fba601a6c4dcc590baa6b01b1b734"],["/tags/index.html","0cbbf527a20bbebfd068b0d62549c7d5"],["/tags/冒泡排序/index.html","bbb7ed0da8a7faa95d78d297b56dc870"],["/tags/双向循环链表/index.html","4c150afe85680654b7ce89b7af17daaf"],["/tags/双向链表/index.html","78e38a7a2bb03b6ea1b1626d16071e79"],["/tags/希尔排序/index.html","68b48024afeca1d9a7cdd0341cc3b124"],["/tags/插入排序/index.html","76d7cc9aeabd761bb44d7736a4e5c1f9"],["/tags/数据结构/index.html","0aee0587456ee409f98997d5295d056d"],["/tags/数据结构/page/2/index.html","4e41398002cb12f08a7494f2548a426f"],["/tags/杨辉三角/index.html","080cc1176e70b357ee21a6e360488696"],["/tags/栈/index.html","7a5163f2cab9e9ad6559da4f0c476e6b"],["/tags/类模板/index.html","7340bf79d2aa38690014408c90b32885"],["/tags/线性表/index.html","bbd490ff976958c1219dc6aca2d87ec3"],["/tags/选择排序/index.html","b5b043d1ebf697753803f1808762c113"],["/tags/链式栈/index.html","21b0ecdb976d7aefeb16ea3cfe99cf05"],["/tags/队列/index.html","d691680d1e341cc4b578594f661fc97d"],["/tags/顺序存储结构/index.html","3761ad61e20fd8e307ef288e3143264a"],["/top/index.html","cd2588d7fed414083e6f25351e42f958"]];
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
