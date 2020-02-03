/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9c61f86226677cb55c5d059972bf3695"],["/archives/2019/10/index.html","63ca1424cd1ae302f1209921b65862e9"],["/archives/2019/11/index.html","f087b13ce5a6e7508c56954a27134d53"],["/archives/2019/12/index.html","ce57f88d0e96e530ea4df8aef4247780"],["/archives/2019/index.html","bc244bc76eadcdd09a01d2c0ea7718c1"],["/archives/2020/01/index.html","6b845d1ac3f171d68d0f769b9c9f7029"],["/archives/2020/02/index.html","ff41bd791d4d5ffb7799147d80c0fc2d"],["/archives/2020/index.html","97cecdd0bc58c8f71b31a242c1a3dc87"],["/archives/2020/page/2/index.html","baf2c43f49caa401dc0cb0ffabe37baa"],["/archives/index.html","ca822b4f62a22f62945da160a4d0982c"],["/archives/page/2/index.html","f081cbc60764366c55aef2fad29452a7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","d135f39d50d35ab469b242bd48d81f1b"],["/categories/C语言/index.html","fcb9104c5d96545e3db1d13ae15e303d"],["/categories/C语言/数据结构/index.html","4acc375f7b178d4f5da1888eba9580df"],["/categories/Hexo/index.html","0076789d296f4c1100f70ea386236c8e"],["/categories/Mac/Qt/index.html","41e0ddaf6a770f320612107b97c5b45d"],["/categories/Mac/index.html","c5a0c10c1a302305ee8ce3e46e442659"],["/categories/index.html","52b510a59d97d57f4d62a51bfbb86ca6"],["/categories/数据结构/C/Java/Python/index.html","c7582a9a718a5b769cb96c3c5053a169"],["/categories/数据结构/C/Java/Python/排序/index.html","0b0d6ce8c86df5a1b3ca6e9668bd09eb"],["/categories/数据结构/C/Java/index.html","064e8ce777d2567b128654f4cbcabfb6"],["/categories/数据结构/C/index.html","f23b07759368c272e52f73938d6c7119"],["/categories/数据结构/C/双向链表/index.html","833d99107e7de2247760a04ee0bbb09e"],["/categories/数据结构/C/顺序存储结构/index.html","66a0d6c7725fc063688f479240f868cc"],["/categories/数据结构/index.html","37ad4cf5ebc1ae517452ca18448cff2f"],["/categories/数据结构/page/2/index.html","0778380243a63741949748b14a697696"],["/categories/玩转Mac/index.html","c15d4a0b24e162645d499f1d9089134e"],["/categories/顺序栈/index.html","68663016f5ca282aee2da91e7963b3f0"],["/categories/顺序栈/数据结构/index.html","cdf9c7a6bdac32602f71980f2de068d4"],["/css/main.css","95cd917b033d28aceafdf1016a434e6f"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ebd0a09e7bdc5e00f2a1486fe17e4028"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","775adc1b9b1e9f832fe7b7b6183eeda3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","03e5436741ae819578c22ab5899e7a02"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c65776534210b74b8e3f78bf1d35630f"],["/js/src/algolia-search.js","dd10be865cbd2b2baa1642c5c8bd0da5"],["/js/src/bootstrap.js","29787930c7249e4b508ef9b260bc857e"],["/js/src/bubble.js","98f5cc9eb0fe1f458e607efbbf8546d8"],["/js/src/clipboard-use.js","572ab876c58047105a95c73ae6d38123"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5ed29dab2ffc251d7735ae6ef22a6852"],["/js/src/exturl.js","4a184a72e347480c865d24451993f9bc"],["/js/src/hook-duoshuo.js","0290b6cf575eb4761a12ad355475b05f"],["/js/src/js.cookie.js","b5e7c1ef6cdf6e4c8bae4cc0db34afe0"],["/js/src/linkcard.js","902384acdeb3cf7b1763ef02d220fe81"],["/js/src/motion.js","7f9d40d234745b2dccf158e50faefbc4"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","034ca1a82eebbbddac52783989a53d5f"],["/js/src/schemes/pisces.js","94c539b40da7d359a62f5ae5496c07b9"],["/js/src/scroll-cookie.js","2280a1aa70f6a92763fcf96d79ccc52f"],["/js/src/scrollspy.js","6ae2f710d864bb971255270b87357535"],["/js/src/utils.js","3e326faabfa363c9ffd9eed15734d582"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","8be182e0494bb6c85263cf2939126f5d"],["/lib/Han/dist/han.js","b6853e382dd6395f271ef57f0325fad3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","fc16f2ffc5529a28966961a398bf98b6"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","dc81d17cc59a515c95c3199923e75541"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5855e475b23db79d36b4b1ffd41e257c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5957aec6e69691d0275e22d9cff276c9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","b3008fea75738331e07c5363a879964b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5fe03f3dc6fee74ecc7120a602147548"],["/lib/fancybox/source/jquery.fancybox.css","424d8dc9f20f4da00e0c2c3f2f6f83f5"],["/lib/fancybox/source/jquery.fancybox.js","6fe827d0d793ef872ab056f44c89f9ba"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","22311a4a0f310dd1d1caf8336a32a7b2"],["/lib/fastclick/lib/fastclick.js","469b57fef638fe3d7784891204befaa2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bc30186506d980bd9b8511477f10681f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a4e211b1709b033327f61a5b377d56af"],["/lib/jquery_lazyload/README.html","95b0aaad9cb88b937198c51f20bd213f"],["/lib/jquery_lazyload/jquery.lazyload.js","bf0c3f978ade35746b3abfbb0f488e7c"],["/lib/jquery_lazyload/jquery.scrollstop.js","e9eccfaec67f31859fd072c613cd3028"],["/lib/needsharebutton/font-embedded.css","b037a00a7bfd2e1e1a092f40a935a648"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","25e1053817677777218c1712aaec7c5f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","2e77f90ff1d04a6a93f852f7a30fbcec"],["/lib/velocity/velocity.js","5c413d9e14b215cc9500384c51307551"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","0259e94713a5c4a70c5aab71925c9955"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","955fd3651301dec411c143b7fa214dca"],["/links/index.html","5ac7bd76dec188d29d87cd1c9e61ae3e"],["/live2d-widget/README.html","1750da5f17aa2026aa3966ebfd5577c5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","4694820c92761a810bfc8932ab458357"],["/live2d-widget/demo/demo1.html","1481df5ba4d2952dc9691c3bf5b1ad62"],["/live2d-widget/demo/demo2.html","bd6f5161c925544b9a5dab770e1dbc7c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","0c9b10b1fd77cd498b5cff2542688349"],["/movies/index.html","458aed77a7c6741624bdb7795c742f57"],["/music/index.html","685533df8c8da8bed0132784912f26ae"],["/page/2/index.html","66b1a92c770abc755d31e827c2cbc88a"],["/page/3/index.html","a793de8f7a40ad695e6bbcc3a713fb8e"],["/photos/index.html","86008e226c026765276af4d0503b01f0"],["/posts/14311.html","37329f1079a6eb5a55c9835b500d375e"],["/posts/15468.html","7178dd3c0027cb68097d0e51f3a107c1"],["/posts/16107.html","8e7412847b3fcfb14c6ad4e00182e511"],["/posts/201e1121.html","c30505fbf22316b9df008e44da38d705"],["/posts/20352.html","6f071ced2b3cf0fff9c14162b4f892cc"],["/posts/21238.html","aeba1b8fb0c61799f2597ee4b9819f25"],["/posts/22281.html","e70d47e30085cdd8abb3f8b69de5acd8"],["/posts/278598dc.html","4cc7e3576c9eefcb55abbfd85d2d92ac"],["/posts/30c404a6.html","8b35e48ff0b560b4392c7ca57ff5df80"],["/posts/51203.html","5975eec46ef702dbce1de09e4a6c7751"],["/posts/538e5180.html","bf4cdea34d2e6672720c4736e4ce4f9e"],["/posts/5394fce7.html","7e8e461e61a5c576d49c8ecbcf076306"],["/posts/59037.html","1dca41f224043181eb0c4fd7db1b73f1"],["/posts/60816b5a.html","90ab6ac3aa04f04321b66d3ad2054c57"],["/posts/69978469.html","67ff5e9cfaf775339b7c1b4a84cd4e00"],["/posts/6a752619.html","f694d029b59ad16a05a0279c03df87c2"],["/posts/8cc73e65.html","c1ae4e62cc832c43a67e4eef0735987d"],["/posts/9b621d6f.html","2327424cf077f42033504a9746f36a77"],["/posts/beb5106a.html","ac50e92944f1a66eafe7d662499ce4e2"],["/posts/dd845106.html","cb0687dd6ee4608265f51246279fea42"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","49688147cdc964ecf1795130475b8305"],["/tags/C-语言/index.html","953be2cc30cfe99d633d85f56f1cdb9b"],["/tags/C/index.html","032161f752b0dbd6ea8de7bddaf9c5ad"],["/tags/C语言/index.html","892ee63731cc594bc175fd71e3bd433c"],["/tags/Hexo/index.html","de4ee54991572bb8e57283181f291076"],["/tags/Java/index.html","312444dffd96419190c661bcf8e15a86"],["/tags/Mac/index.html","af690671bdf410dbe63590f80f8971cc"],["/tags/Parallels-Desktop/index.html","ea0dc8b2ef8dca6e656825f640ef24c1"],["/tags/Python/index.html","90ac6416c14211cc182fb59c1eed38e7"],["/tags/Qt/index.html","0767be6f42e1ab2ef9e55ebc84c5814d"],["/tags/abbrlink/index.html","f7de73c764e359c99ae5e000a26d185f"],["/tags/index.html","10be818d1a8ba581dcb62e9f2a1b2ae4"],["/tags/冒泡排序/index.html","c6f0e055cd6651797c2ac509ea2f7f2f"],["/tags/双向循环链表/index.html","d51de7c350b5e084c1aa990644278be6"],["/tags/双向链表/index.html","2a2885d1c9eeef29b04dfd63fe0302f9"],["/tags/希尔排序/index.html","21d1ab5ef836f17184ff77d2b7a7f008"],["/tags/插入排序/index.html","fa0213857a8fa9eee94d4abfe981a55b"],["/tags/数据结构/index.html","f3e6cc7dd5bf9f70e52bade97054e645"],["/tags/数据结构/page/2/index.html","9a78955a42f5a17524d6d739e53c429d"],["/tags/杨辉三角/index.html","fd5f0f19792a473b8a43887d75454f6e"],["/tags/栈/index.html","84cb3235707ad5da855128b4ac9e9223"],["/tags/类模板/index.html","1be195d7feea69d92e2913f12571fdc5"],["/tags/线性表/index.html","fd1acdc21c0b63a1a9afdd745a54fcac"],["/tags/选择排序/index.html","188184cf9b46ce490fdb58f6f810f46d"],["/tags/链式栈/index.html","7209a4ffafb2493dc42e4b4f4acb99bb"],["/tags/队列/index.html","9c638bae8b071c39b4678df54aced1d7"],["/tags/顺序存储结构/index.html","b4735520a338066370695f3b7be6b579"],["/top/index.html","a575e43c2ca53ea5cf249230ec77a69f"]];
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
