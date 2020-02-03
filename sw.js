/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f51c0e6894a68f16125126f4ae959b51"],["/archives/2019/10/index.html","69073c52c84534a0d112e2c6b0cee69d"],["/archives/2019/11/index.html","aff753931f7b92c623c1206a7e1a2876"],["/archives/2019/12/index.html","de5f0584477468a9fbeae7e41f92a0cc"],["/archives/2019/index.html","00613fb19e58b1ff0c8f95f742aface6"],["/archives/2020/01/index.html","1f37de9b31a04b6f7d052701a3a0823d"],["/archives/2020/02/index.html","1d11a2ff886b36719766a5963f8e68c9"],["/archives/2020/index.html","5354ef2222fa12eee706e4b28cec1f6f"],["/archives/2020/page/2/index.html","88b2b07b040df412d60d02a79972f441"],["/archives/index.html","ea06363cb85a215cc4a8c802857b11a3"],["/archives/page/2/index.html","31468e5beb463a6fb880fbe1a006d2f0"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","d2e28aab7a53ba364d59029523460c0a"],["/categories/C语言/index.html","e3568a808a3faa6f81646784c97db242"],["/categories/C语言/数据结构/index.html","865517a0cc8d0c4c6c374cbad05595fe"],["/categories/Hexo/index.html","fdd626a369190cf678cf0338666a11cc"],["/categories/Mac/Qt/index.html","f3e28630898c6cfc7ca6a2775b0cf090"],["/categories/Mac/index.html","c6a8bb279d922c67ae2c434e19c9395d"],["/categories/index.html","fad8900dc88b1fa1dc62953439499807"],["/categories/数据结构/C/Java/Python/index.html","b92e6849542b3166d56b5c65850a47a2"],["/categories/数据结构/C/Java/Python/排序/index.html","829d39e0b30479fcbf35cf011f4033fd"],["/categories/数据结构/C/Java/index.html","acc45be2eae66f86542aceb3dffe6b0c"],["/categories/数据结构/C/index.html","90d0b43771c18080ec40d95cd04d81be"],["/categories/数据结构/C/双向链表/index.html","f4a3d54ec04114f3cf635fdeafdab1c8"],["/categories/数据结构/C/顺序存储结构/index.html","d5cb6b951888e2e4cb393a501cee5e2b"],["/categories/数据结构/index.html","6e9bb44a7bff05c03c5e0dfbf7feda4a"],["/categories/数据结构/page/2/index.html","b45b6572e65944f13672e9ffc674b243"],["/categories/玩转Mac/index.html","87f4f0c2432fb94fbafa1c8988526340"],["/categories/顺序栈/index.html","48919e1c8643e2785f1838ffc071fb40"],["/categories/顺序栈/数据结构/index.html","90738ca3fc6e577ef31b9ad481ff2f2d"],["/css/main.css","7c15db1a8b1fe1171c809b3b83ca022a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f955025db459d06e4b3ad17cdbd9fb13"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","5d0a75c43e34053ac0fb4da239aff6eb"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f89bbb3c30a633f01c352baae6150980"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","cf3a4f6926dec54117dcfbc0034159ee"],["/js/src/algolia-search.js","6ec612a22afed51124280c666c5a6558"],["/js/src/bootstrap.js","551fa11370e42d32b309fa3b48e76516"],["/js/src/bubble.js","9d268fa8687ad3105bb833fd06d66bb3"],["/js/src/clipboard-use.js","119314ef00e9e9c958e0a50487809219"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1c1f69966bd5ca204429278afdac70a3"],["/js/src/exturl.js","2490cf04b7c91a19658fad033ef6537c"],["/js/src/hook-duoshuo.js","5a21692329113dbecb696a7efd76e0fd"],["/js/src/js.cookie.js","42e88fae01b3273c00c34823271fcadc"],["/js/src/linkcard.js","52efd99624f42154aed1130e68378ee3"],["/js/src/motion.js","38f7169e07d76bc707d373c280cafba2"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","10eea610d52fc2ed60bcad3ac47e77af"],["/js/src/schemes/pisces.js","5c437c8f2d439a7132ab0f72da6193e4"],["/js/src/scroll-cookie.js","ca871442c627868f835856e9fc109daf"],["/js/src/scrollspy.js","4307509f2a09b9107ceed11f254dc19a"],["/js/src/utils.js","947a2064d984c6b05add9d64b3f5c670"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","09cb8a0e4a969d3ea6cdae18186eb1a4"],["/lib/Han/dist/han.js","5ea90b27aada21a5732f3917cdca1cd1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a9cc2ae559d1fd4ddb9ddcf3fe84e4aa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e7b9ab9cd2b95e8ded6d3bb650ee3f5a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b4a704d38864a8dc2328fbbe4a37901b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d16f15355ba20f299a3b44dde7e24165"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4558e5612142e5f58c18cd7839b1e3df"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3273941319637531f4e6bc47e99c4b30"],["/lib/fancybox/source/jquery.fancybox.css","fced7d0152a28368b389ad38573cc516"],["/lib/fancybox/source/jquery.fancybox.js","e6f5925253f75f6a1645894acb7fdf00"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9b42cb84d8f6bd645c8a3561b7c34385"],["/lib/fastclick/lib/fastclick.js","8e588f0be6937d80ddaeb96c9e6c531a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3920e64c35e766b3627689988bb274e5"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","dd95128914a89fc83b52d81977e8d05c"],["/lib/jquery_lazyload/README.html","0c82163c9cef668ff5a9d9d2be490715"],["/lib/jquery_lazyload/jquery.lazyload.js","991e754788f6abbc7f24dacf76847a1b"],["/lib/jquery_lazyload/jquery.scrollstop.js","f25be18cb08f80195242d367c5d68bb6"],["/lib/needsharebutton/font-embedded.css","fa0be06e549f7cdaaa7e19810ee46200"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","5dfea697cb03f3eeced722bcc3d8ff1e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9e46283b67807a2d31557cc997adfd66"],["/lib/velocity/velocity.js","ea4c4fe9e3fd6cd20806eecd13d71551"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","fb0d046d0d802029e7874fad70a0e146"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b662cee11a48ccb0758878cdecd6649b"],["/links/index.html","fc9b906adfeb888118f0f3e89c3f1406"],["/live2d-widget/README.html","339c49a86fef641ab81903a277de7535"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","94dc623e4e064bd52178ea8de52aaa5d"],["/live2d-widget/demo/demo1.html","5e22cd9f5fca649401d0a3c1c62150b8"],["/live2d-widget/demo/demo2.html","d71b46da6fa2e06506e8e5df474d7780"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","2b84a54c32fdde51252cc4fbd55ac428"],["/movies/index.html","c7e9f1945284df1838a5a389688e85a7"],["/music/index.html","e385f6902d608faaf8d4796e2d19f2c3"],["/page/2/index.html","0f78154e4a4dde7e67af929c272298fb"],["/page/3/index.html","c891cf86883559f9c1a395dc81e48af7"],["/photos/index.html","95165b4b166c5e083149bcbc2c598ac8"],["/posts/14311.html","c56aeddb5a4cfd05aed2ba2a0fcfea1f"],["/posts/15468.html","c190fcd2de059b695ad5adae8863d50c"],["/posts/16107.html","29fb6322f291a87c2ec7e82d0f867072"],["/posts/201e1121.html","d9896b2d987c4d2138e86c4e6759d975"],["/posts/20352.html","2c264fc9f1083abbfa1b48b54731e9a9"],["/posts/21238.html","1df41da247ede4839aa2b5f75e2ccb30"],["/posts/22281.html","111b3ebf46e56a16f974d29401ae6928"],["/posts/278598dc.html","0b17f146b6899d169d572c37b57298f0"],["/posts/30c404a6.html","a16f2cc10abe29574c78b44295e3e00a"],["/posts/51203.html","e74711b0bcf10a0b97e111b30669657c"],["/posts/538e5180.html","3cf69f0380255a2fb03491d8f435f35a"],["/posts/5394fce7.html","fa32d9c9716d22009b9d70233ada2f33"],["/posts/59037.html","af139dd808de94b17b9a1f0ed9f1ec71"],["/posts/60816b5a.html","1dced96df161392cdf07c4f5bdb630c0"],["/posts/69978469.html","940285a00f051c08ef24d3460f237b6e"],["/posts/6a752619.html","56cb0b92f7734cca097d6f84a73112f9"],["/posts/8cc73e65.html","3d048d1a419f1f37e2d191e0d8b9f1bb"],["/posts/9b621d6f.html","6379b18f1c03be50b6a80b23539678ce"],["/posts/beb5106a.html","502dbcb0def43019a59b0515587cc748"],["/posts/dd845106.html","89ed02a0fa5405edab355b69a39876f1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6cba7a99b6268aa349cd911ad32962c7"],["/tags/C-语言/index.html","9ff31cfce8bb96ef272abd300d50ef22"],["/tags/C/index.html","99b1ce3604eb1bf7d3915c5352012242"],["/tags/C语言/index.html","d17ec3619438a03eef9c9f4533e484bc"],["/tags/Hexo/index.html","04322970b7e3eacd9f056246f57620b4"],["/tags/Java/index.html","e3bcd1e6b7bc5d1730dd63af5fbf653e"],["/tags/Mac/index.html","9a1f19e9c68f7683209258f22dd4b084"],["/tags/Parallels-Desktop/index.html","a015862d896fc2114be18238325f513f"],["/tags/Python/index.html","bfa86ef74940e5b797aaafd135bbeb4f"],["/tags/Qt/index.html","80856e2a0a1ffac07aea73fc80cddb21"],["/tags/abbrlink/index.html","8c719689a86cc28b6a72cac510cf5e84"],["/tags/index.html","d733b5dda4d6128baaea3ed7c7036191"],["/tags/冒泡排序/index.html","bdc446b2b861b35c7f8ab4e3c5fea30f"],["/tags/双向循环链表/index.html","b016169162e025e1b58a1310c87daaca"],["/tags/双向链表/index.html","82523e0b2cd5c7aa7962124b8d589f0c"],["/tags/希尔排序/index.html","0d7f59fa1d2145ba3ef0b6de98376c24"],["/tags/插入排序/index.html","6cecb12042642e6e54641511d7e85225"],["/tags/数据结构/index.html","23ad4040706b419ffec952a5236e1e91"],["/tags/数据结构/page/2/index.html","83ed25766d4ad5b4decba8be857598b2"],["/tags/杨辉三角/index.html","850fcecccb9d6128207ab9e035c10d09"],["/tags/栈/index.html","89d628e6f9849b0721100e8503305c95"],["/tags/类模板/index.html","6f9df1124bd9061be226e096800134bb"],["/tags/线性表/index.html","f70b1e48982470a2e9881304ef127a56"],["/tags/选择排序/index.html","50198c73493576c3a40fa118fa2e0edf"],["/tags/链式栈/index.html","9b9f9efcb62bcadf5a181bc0c3d034f0"],["/tags/队列/index.html","c822bcdf0f163f79f3ba0f7bb59badff"],["/tags/顺序存储结构/index.html","c7d77908b713bf3bd92b05c7f857f991"],["/top/index.html","341c486c1a705779519be59efa65aee0"]];
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
