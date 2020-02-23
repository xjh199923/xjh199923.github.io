/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","96734adcca167cf66f928cdd7f771c6e"],["/archives/2019/10/index.html","ff5918fd76c6288841287e40ae3247ee"],["/archives/2019/11/index.html","88baf359b1af21ce3dfc95ed990afa22"],["/archives/2019/12/index.html","374d333dd5d1bc80c692baf52b5f4ddf"],["/archives/2019/index.html","09030a0f72f6dfd3353bc0a5ae2a3511"],["/archives/2020/01/index.html","60b0490cfe8af8e072b90c33900315bd"],["/archives/2020/02/index.html","04b590d5ab0eb783b5ea338c6f6d2150"],["/archives/2020/index.html","1fa79141a09c2eb29f08c6364be45490"],["/archives/2020/page/2/index.html","ebdab21a5fc7802a104dbae13390fd1a"],["/archives/index.html","620f2b57d022772fce4d860a26223844"],["/archives/page/2/index.html","7a3da188515dee145509fea78dc7ed46"],["/archives/page/3/index.html","d0d9f8b060e01ae071b82b1ecbdabad6"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1f55efb82be4e3d226aa758ee8263f92"],["/categories/C语言/index.html","7940f4ddd2b003c7a578d46f982d7cb7"],["/categories/C语言/数据结构/index.html","0a8f2200ae475837fe79de97c0aa3cf7"],["/categories/Hexo/index.html","7a659c8f578f2ab046ece8724285c8c6"],["/categories/Mac/Qt/index.html","9845ce998e12d2e2042f17b1aab90588"],["/categories/Mac/Sql-Server/index.html","c6d6bc176316ff883ccdd0fff2aa6ee9"],["/categories/Mac/index.html","9ae673613ee8e14c5fc7d9be5b55cc41"],["/categories/index.html","2155245b4c5535b16170bd8160ac4aa6"],["/categories/数据结构/C/Java/Python/index.html","da16a44a7f37dc2b7f5b33777934b589"],["/categories/数据结构/C/Java/Python/排序/index.html","e372107ec34cab997fc827e0c6d9f697"],["/categories/数据结构/C/Java/index.html","37de27b7dbd3337bcb5e517ce3a5c744"],["/categories/数据结构/C/index.html","ff2798ac3167102b88b2e6fd9373932c"],["/categories/数据结构/C/page/2/index.html","f4a12e06a92c29e5ce6ccbeeb64d9b2e"],["/categories/数据结构/C/双向循环链表/index.html","569ba6723f92a2f5258c1d729bd3a529"],["/categories/数据结构/C/双向链表/index.html","905a760b6ce96f5e5d4a26ad83536363"],["/categories/数据结构/C/顺序存储结构/index.html","0c30e6882ef2921adb176eab25f2f451"],["/categories/数据结构/index.html","d19dd67272c3922fc8b6cc1611c339a2"],["/categories/数据结构/page/2/index.html","c9f21463dc2e6bfc85867c41bc8df539"],["/categories/玩转Mac/index.html","6ed4a232d522d6ddc711db44f1b64225"],["/categories/链式栈/index.html","d03802eeaf55a0848e3f522e74c2cde4"],["/categories/链式栈/数据结构/index.html","7f6c9f2b478553951fe33eeb7333f91d"],["/categories/顺序栈/index.html","66b8739e2baffe8dbf3dd9da58cdbfec"],["/categories/顺序栈/数据结构/index.html","8e54bcce293fa82d3cb5a78730a5f546"],["/categories/顺序队列/index.html","1ea0955323ecd3545d783eafb9b9f458"],["/categories/顺序队列/数据结构/index.html","b9477bd27d7526f64e03612aa7f5c978"],["/css/main.css","5ab7439312f00d4700f88717de65cde3"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","82e1fd4b35081960d244402c15eb8162"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","db8fd3324d87d15ef506443a42d111c7"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","cd1b88083a60b2ba173c47b5a22dd128"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","38f84869fe72b4fa7f88c42bd7efee0a"],["/js/src/algolia-search.js","15e419cdca09fbd83c6fb4290b4d0463"],["/js/src/bootstrap.js","6d4bf0ea989567142b6b205fc9f5071b"],["/js/src/bubble.js","205b4cf1a8f058c60b4f9cbbbf7c0496"],["/js/src/clipboard-use.js","2446159d3b76095869bf2d87454c1e0e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","deaea1a251d9ce713e1cea85d3afe062"],["/js/src/exturl.js","65527d9666bfa4c0dc637c345737b5b5"],["/js/src/hook-duoshuo.js","ae2eb62b26ed7c0fb7d364105e0190f1"],["/js/src/js.cookie.js","3fa59b9b8f21d4b0f0ce54794511adc7"],["/js/src/linkcard.js","f51a5fdd0080391264986f3ae87cc728"],["/js/src/motion.js","1b63d305938019d83132cd0ac44c8d41"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","faa5689b58c1d2f85898f8f1a9f4d478"],["/js/src/schemes/pisces.js","38badcc18687d5db9410fd08bfe2ae64"],["/js/src/scroll-cookie.js","903538ee3af6e1539830de6dc27236a3"],["/js/src/scrollspy.js","d8a13d8ab10901cd14d6985a964c8a85"],["/js/src/utils.js","570689ef880da0eb15762627b27f0e27"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","5dcdb60338856036d9100cb17892b545"],["/lib/Han/dist/han.js","3007360914e6fa8b3ff3529d2431f3e1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5e24e5b05d32b0f5c9577d4d4f0a7d4d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","00f25bd931a0d2b415e1216114fd68f3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","08f36dfe9764a4ddf2e450c56afc78ef"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","44dcf7acf127847d34432069aec16a8e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","cc1fd581b2f27d749372610597abfc92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0635f267ec1b9829e12a282932187ca6"],["/lib/fancybox/source/jquery.fancybox.css","33009ab98cbdf78af3c5751ae5e03bc1"],["/lib/fancybox/source/jquery.fancybox.js","cff2b38c8c53fefd193f9ef94f959696"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9793fb6bb8ff51706761e21cd20dc79d"],["/lib/fastclick/lib/fastclick.js","c2341c1f5f0c8275e1478e47b1dab145"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b5e8bc9734b844146cbd77089ef6ccd9"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","aedc8952a24ca5806501b3e57384b1e7"],["/lib/jquery_lazyload/README.html","c202c89322e734ade2cd2c66bff8e338"],["/lib/jquery_lazyload/jquery.lazyload.js","23f7f2d76876017e60bb2a8c8f3b19a5"],["/lib/jquery_lazyload/jquery.scrollstop.js","9f9aa7f8044e3b51a6a02d98fed775f0"],["/lib/needsharebutton/font-embedded.css","71e619335f8d85d2ec8d08349242f060"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","26c79fac4c1c3575c6a66055ad2db31c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6cb719405bf141bb77c855f73fcf8fb7"],["/lib/velocity/velocity.js","a48684fca9167e83c3b55fe2ac34e65d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","496bf76a852d4f2ed2927018ffe29f61"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f71b2e650682610d3926f91f086d29d8"],["/links/index.html","42a2487e25347a6fdaa36b390482e370"],["/live2d-widget/README.html","56113b85eb18e17b99fe26bb97a1f33e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","554d87db02f9ca7fd580d1edfa144729"],["/live2d-widget/demo/demo1.html","a2a2796606b0ae062feea381aa4b6103"],["/live2d-widget/demo/demo2.html","b3b8c9a24f2175c80e3de09408ec8b9f"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7a6d1e60634408e99c82ec50316e6431"],["/movies/index.html","40630df29ace37d52e31b98c582e8069"],["/music/index.html","dcfdb8811ed067e09bd6b91a4127f8a7"],["/page/2/index.html","015e01eff00e02a4758c72e4d161281e"],["/page/3/index.html","c720eb7a0ad6a94ab104048d29767668"],["/page/4/index.html","53a33b9d08bd93dd5721c14db32dcda0"],["/photos/index.html","91ddd02e14f2a7cc395ccd8b277bc5aa"],["/posts/14311.html","aa8648afba0e2e2e9e9cad0f16533732"],["/posts/15468.html","97721c2464939cadd3b67175007742c7"],["/posts/16107.html","eed508d859697e0cac8e13b82921524e"],["/posts/201e1121.html","08b483e9b0e8bdb6cc279150ffee9326"],["/posts/20352.html","6012ad89a2a1e1724f09d3624bc03358"],["/posts/21238.html","dfcb499688ca86146aa91f2737892670"],["/posts/22281.html","cbf8ef2a4b5a3b88cb51d261279f2c44"],["/posts/278598dc.html","512024953058f18d5b34a93000944505"],["/posts/2d063bc3.html","3ba8abfd85d5271f681860f2e8e1342f"],["/posts/30c404a6.html","bcd5bcb732018c644332348e7b7ac7df"],["/posts/51203.html","b24d24d9904ba9faccd13117e90838fd"],["/posts/538e5180.html","2c1f8c250b8996c40022b3682b0f9675"],["/posts/5394fce7.html","413eddf9a2e65ef3648fe9f8c68472a1"],["/posts/59037.html","fe3f097547b725546e199ce6ba847127"],["/posts/60816b5a.html","1d48710599252030bce7d7fc3ad578e2"],["/posts/6163d4b5.html","6e2ff17de9d4e8e68c40af46a5460de3"],["/posts/69978469.html","22f25ca29f60a4200d3b6d64ed008fe8"],["/posts/6a752619.html","44d07479df8913496224a23f46ecb780"],["/posts/8cc73e65.html","23004853bc8fb626c647553c86058715"],["/posts/9b621d6f.html","49173d96cc89d87ed7d867531a3027a0"],["/posts/a530f7f0.html","c3d41c9d7d71bc9a3f35c586f8c9f042"],["/posts/beb5106a.html","4ded68b7fd2ee653b4c580853b0e76af"],["/posts/dd845106.html","cdf6b1ed226ff6bb94a02509ce1ca370"],["/posts/e35620b3.html","e2254eeed3dbc096c9bec2b43167e96d"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ad58b937145f577de6df16b74a8470c3"],["/tags/C-语言/index.html","a1bcd611be177dfa173cefa86a1ad390"],["/tags/C/index.html","d05a49a1876cbffb177110b91f151c95"],["/tags/C/page/2/index.html","f7527c1c4dd4b7012fdcd7cc3fe6fd4b"],["/tags/C语言/index.html","7f723d4172f3c6709daf383a0e108163"],["/tags/Hexo/index.html","53d3cd6022b0175053925aee9257343d"],["/tags/Java/index.html","2f9a563850e48f62ccf2726e87e356f7"],["/tags/Mac/index.html","417077443111a1daa6466eee76adc58e"],["/tags/Parallels-Desktop/index.html","9bb4ac614e9036891ec44a8cd5ce7dc7"],["/tags/Python/index.html","38b6bf74de72b1b49c323b51fbad9edc"],["/tags/Qt/index.html","e06b3d15127d56ab53c2b709db7d6f22"],["/tags/Sql-Server/index.html","ca353011df78896cece9b2d26d84c290"],["/tags/abbrlink/index.html","e0b11ed1bf2c5c0831d6c0ac80e1f3ff"],["/tags/index.html","778e8021fb41950eaf6711d3d2b9d5b2"],["/tags/冒泡排序/index.html","ab632d60fb3ad70d259b3466cceeb855"],["/tags/双向循环链表/index.html","2a3d65941a0dab54f42b519bccb025ad"],["/tags/双向链表/index.html","5de6e47d89b8ada9e7417efdccc5fcb4"],["/tags/希尔排序/index.html","e10c9d5aefff9cfd34481761fad070f4"],["/tags/插入排序/index.html","0bf325a567d3262b0ace8f75382f6b7e"],["/tags/数据结构/index.html","d6193271c6c083f67a3718c93eab34b2"],["/tags/数据结构/page/2/index.html","69306fc80e6860fdcb78e56512a006fb"],["/tags/杨辉三角/index.html","fc6ff2050316df12f696d327788d10d2"],["/tags/栈/index.html","b6415dc399381197fd4135f59436a704"],["/tags/类模板/index.html","d4e3e9c957530d93f95a77e57207a886"],["/tags/线性表/index.html","3ff43efcea8281a6372f244638ee1867"],["/tags/选择排序/index.html","e486c2ee45a9d46b84f6c5df14df20d5"],["/tags/链式栈/index.html","e6c664393740e7bbd912c4a7d2d219fa"],["/tags/队列/index.html","a3f36d34a585611f6cf68078830fbd19"],["/tags/顺序存储结构/index.html","d2e2330d1c1f35a1f1dd19e50422afb8"],["/top/index.html","a688057968bc356271a2b6ee85019d13"]];
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
