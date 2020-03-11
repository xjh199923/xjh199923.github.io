/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c45b3b8c757e247d85dc953bbba1686c"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","14b3c88580476de5355586d2ed0da718"],["/archives/2019/11/index.html","ba82b6a57d4139af8102e67937eba52b"],["/archives/2019/12/index.html","417979c255bf844cc6c6e44e3aa46b5d"],["/archives/2019/index.html","caf1baafe871952f50caa45c9969b624"],["/archives/2020/01/index.html","bf177a64017ecf93e93cbdd73c06c506"],["/archives/2020/02/index.html","b3f09d7b8adbeb2630601a1bd6506b1b"],["/archives/2020/03/index.html","54906900c1e257f561fe7c01bc59a182"],["/archives/2020/index.html","6fff612f9581103394882d246b6974ff"],["/archives/2020/page/2/index.html","7edbe8b48f42bed2b99cc4913a6765a0"],["/archives/index.html","6557215e96f1c0c9cbefd9b13396b484"],["/archives/page/2/index.html","df009b566e0a10800c7c3b68885a356b"],["/archives/page/3/index.html","dddb63cdb6685316e0d5b00bc19fa6c5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","7468109a06a8cb12b78e6b22ca80374b"],["/categories/C语言/index.html","67df816b8d3a2ef39f24d105af99e234"],["/categories/C语言/数据结构/index.html","358201548a363ec96b70d183a1467bbc"],["/categories/Hexo/index.html","d7fb52463d604691492bde1c82859891"],["/categories/Mac/Qt/index.html","3bf7bcaa13b3e3fdf54b134bb5e108e4"],["/categories/Mac/Sql-Server/index.html","893bf0b2b3ae7eac68d23f938467118f"],["/categories/Mac/index.html","3be03d6e8a786cb8d8a1202cc8b07d05"],["/categories/Ubuntu/Hadoop/index.html","0f6740416acb6a0857d7d4d2e795de23"],["/categories/Ubuntu/index.html","5e878edf1ceaf4497fe3ae3705471660"],["/categories/index.html","2ee805c4ed9bd6f806c2422c8a718ff9"],["/categories/数据结构/C/Java/Python/index.html","bd1d46b97a20c3adea0b690d6aef50db"],["/categories/数据结构/C/Java/Python/排序/index.html","4fec874cd1b4a57ad83b8f8c18f59646"],["/categories/数据结构/C/Java/index.html","7feb116716fd2a50b0fc43806e4b71bd"],["/categories/数据结构/C/index.html","01998f166fc6226d47bd111250faa46a"],["/categories/数据结构/C/page/2/index.html","690f4f699e34d982dd1ee3cc47e5e9f1"],["/categories/数据结构/C/双向循环链表/index.html","eb5f31c47577f0c4dd5902daec8d735b"],["/categories/数据结构/C/双向链表/index.html","caeef420d6685526bbb40c8f77d2ab00"],["/categories/数据结构/C/顺序存储结构/index.html","6a1773dbcd7d264d4ec44eedd8d5c5c7"],["/categories/数据结构/index.html","e095cb79b1685e3653ce7b17e6852194"],["/categories/数据结构/page/2/index.html","a434bcdefca43bb031bc5a3f36dda64a"],["/categories/玩转Mac/index.html","8ea8266a0ff74789b5abaf263f8181f9"],["/categories/链式栈/index.html","b619c548023776ec27251380d4e4ab42"],["/categories/链式栈/数据结构/index.html","f82973806d4b3076c14997821d6c0cf3"],["/categories/顺序栈/index.html","ffe3e355a30bcaf40890425a953a7fb7"],["/categories/顺序栈/数据结构/index.html","4336c91e63e999c1692b240a5afdf831"],["/categories/顺序队列/index.html","d57b285a4e07a3da698bcb6271f66d0f"],["/categories/顺序队列/数据结构/index.html","d01e2b974e0d4f1897e0872687406c47"],["/css/main.css","8aed2253ab7db7e05ecb456a79971844"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","220aa4f90fcc5eab6c09392f4324bbda"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b6d32fdfb40aeeac9d9c8ee2c312b2b7"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","42c95169d6540d3f9ca65c566675211a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","964452f28035821b93746cfe615e7b55"],["/js/src/algolia-search.js","6d03b3c48ac301305072ec0f407bc7ba"],["/js/src/bootstrap.js","0a4f5a66abaa8d45d4c9d76412f8085a"],["/js/src/bubble.js","3815deba44e7b135b762eecbaf1ec719"],["/js/src/clipboard-use.js","1ef9fa47508b0b9bb991145d5b170af3"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","24f939c467d08928424b7cff265d4d03"],["/js/src/exturl.js","ffdae0b7378101c8f70c2a7d1ca5b231"],["/js/src/hook-duoshuo.js","5b72e1fd25564e26624dbb57b7d7a9f0"],["/js/src/js.cookie.js","0b301b57df5d76a5a03d98bb342e7161"],["/js/src/linkcard.js","020e4f3c39de86498b59b0c8f6624e0b"],["/js/src/motion.js","9704d249ca95b7cc39bf0539a3d32fa4"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","7dc8477a3464730ce74b415ae90571a2"],["/js/src/schemes/pisces.js","fe6f44123e7b136a73cd6455c86a54e4"],["/js/src/scroll-cookie.js","db8a958fd7339de3841e3830099351d2"],["/js/src/scrollspy.js","a3b8430b31a7722a58c7ca8e053cbec0"],["/js/src/utils.js","aadf17d5bb52b8b3192e077cac4d68d3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","5daaa0929efda91ab7d9181c22c0f694"],["/lib/Han/dist/han.js","900e0868934915b80067d1ced7366c1d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7c316da496ec645dbe59dff760e3878c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","40d6e6498b7134a42409d62a1ad91b66"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","25dd51645583d8b112a3fcdd0bf4622e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0e6e13727f7f33d83125f29fa5f1c126"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4e8161697972d03626fed1b42a9204d1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","ddf3a8e777567c14b2f85c065ad61cc1"],["/lib/fancybox/source/jquery.fancybox.css","70aa551824c60c93d3cf3d9383fd6a4f"],["/lib/fancybox/source/jquery.fancybox.js","0b3c1b0a730892c81e0f2b7fa9c03d74"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","435ec20a0c9b6de2c425bb9d17cde049"],["/lib/fastclick/lib/fastclick.js","8767c78407754b1757257960b8a75c7d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ef277e31e9ab068a314bc91f962e955d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7bb4a2688232532cee805cf725b0529c"],["/lib/jquery_lazyload/README.html","6e2ce7999072f65f38f03fd17197c5a1"],["/lib/jquery_lazyload/jquery.lazyload.js","32d17a555d777f9a534192839bd10da0"],["/lib/jquery_lazyload/jquery.scrollstop.js","38254714bf09ac7fa22b3c9dfe42d37a"],["/lib/needsharebutton/font-embedded.css","3a74a53241096a945d585786e2b65420"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","0da0eabbcb94d665d62ea9729ef2fee3"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","eda236635ccc5678573cece82508a86c"],["/lib/velocity/velocity.js","317f9ae8eb13d537c171f08cdf33ff77"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","61e818b336fbdceb953759f3d744a95a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b01aa2fb5f4b906b820e9726d3f13e8c"],["/links/index.html","70e76e5320759e941426703fdc0a08b1"],["/live2d-widget/README.html","906d3c2673a33c52375d7ad3e07ebf4c"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d519c07668eeedd3b52e2ce98911d0af"],["/live2d-widget/demo/demo1.html","0e267bb0841cc4bb6752949f6337eab0"],["/live2d-widget/demo/demo2.html","bc964386eca1c243346a05d3ce79c5af"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","ab784949b53c77b52c93730f6bfc97a9"],["/movies/index.html","6d892cb68241a0560a1aa7e72a0840bd"],["/music/index.html","ab6451682be75d0b7bf4a2a854b6cc89"],["/page/2/index.html","7ce42e32eea4f3237b0d92a71e67d3c7"],["/page/3/index.html","d601361da03199bb5e7c26a2bdfe8238"],["/page/4/index.html","987071d991cd8c261a1b2f35294d69f1"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","a00b65621944eac87a0bcbb952208273"],["/posts/15468.html","78ead6b76cd43ee5ac2307d6f7316315"],["/posts/16107.html","bcc8f39f4ee7dfbcc001ce249b7dc0e3"],["/posts/201e1121.html","eed11d84d1971105499c1ef4081d0af6"],["/posts/20352.html","d4be6cb9737e39633c713345f260ded9"],["/posts/21238.html","0e73a3df052938cab6e1c64358e9e1d3"],["/posts/22281.html","2daefd2195976d04e622ef8dcbcca957"],["/posts/278598dc.html","ecf06a1b4c122243b63f2ca8c922bbb2"],["/posts/2d063bc3.html","f6fc3ff3d4c8a733e36bc42a929bec3e"],["/posts/30c404a6.html","6080086dec4603fdbab1c900b78e680d"],["/posts/51203.html","3fbab2e2837989eb170f881086b3dc57"],["/posts/538e5180.html","409f9c2fbaa09596994678ee44f75347"],["/posts/5394fce7.html","5af713b52dd752d17b9a1ff29152da55"],["/posts/59037.html","7e46fcb0b4d3379666d41cfcee3ace6c"],["/posts/60816b5a.html","e1e6d81fcd14932effc63aaf7d4c7e59"],["/posts/6163d4b5.html","de346d0b3fc6374da8971927583948f9"],["/posts/69978469.html","1fba5b2a028379ca51a9fc27bea4b87a"],["/posts/6a752619.html","3b8a26fd06ddb6a2acc22314826e8bd8"],["/posts/7fcb11a7.html","81d31f5fa12daaced0978fe7f91bdacd"],["/posts/8cc73e65.html","42394a51e704bca3b691f9a8e18b768b"],["/posts/9b621d6f.html","5ffd4f438633d335c16e7407f45041e3"],["/posts/a530f7f0.html","a4c6419390253267c834f9bf61dd7b33"],["/posts/ae1da46b.html","db3a7b5e4234001a8d2929fdb8932349"],["/posts/beb5106a.html","3a560acd9ba4274a87bcf0f2e1843ee3"],["/posts/dd845106.html","6289d6a4a64fd1f2eda8fadeb40a2b3c"],["/posts/e35620b3.html","f73359d5fab68d606319322d1159e8f8"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","df6834a940b76cec6362d3aaf901dbe2"],["/tags/C-语言/index.html","d98960ee2acf49172684f971071e9f04"],["/tags/C/index.html","2b8d9fe85581007053e147cbc4f8f041"],["/tags/C/page/2/index.html","447178bb820d039f5f23123d9bf970e0"],["/tags/C语言/index.html","00d83b79f8bf4a441dab5b2e48f147ff"],["/tags/Hadoop/index.html","5bb1ff4d008a6fbed934c22dfbe77a74"],["/tags/Hexo/index.html","ada562b21d479af5063a563ba4b59b4b"],["/tags/Java/index.html","cdf30083a04c02f879907a6313121335"],["/tags/Mac/index.html","6fbb360048f067359d6e5b5641456f5a"],["/tags/Parallels-Desktop/index.html","54bfb73a426d96440bfcc3627493e1cc"],["/tags/Python/index.html","31b55bf6ac4bde90fc797e7f4e7ae231"],["/tags/Qt/index.html","1563f1bdfd5a56026e4b30830ceb9147"],["/tags/Sql-Server/index.html","22f01c8cccb4114f8b92babda0d90437"],["/tags/abbrlink/index.html","43c52cf615efa4259b1d34318a928094"],["/tags/index.html","24c9a20688e3c1acc99d8acd463bf088"],["/tags/冒泡排序/index.html","05d56b2d920e04bc5c00bfdec4c12f9c"],["/tags/双向循环链表/index.html","3899d877acf2a9d38f7336b46586b6ce"],["/tags/双向链表/index.html","47fc0406f76e2d1bde1285b0ea465bcd"],["/tags/希尔排序/index.html","306b88f0c608f57539db2fb232b6cd55"],["/tags/插入排序/index.html","12acc064f05846470a77adb73eeb902b"],["/tags/数据结构/index.html","c156600c739d8d2203644ece1f9778c3"],["/tags/数据结构/page/2/index.html","2f0c5d6fce2df7708726b75e538d6987"],["/tags/杨辉三角/index.html","77e7ead2051e0495fd580df0dd72653c"],["/tags/栈/index.html","6c21b8c62f01ade663f4bad552ae241b"],["/tags/类模板/index.html","8c59c1c9227871148e506453b410dbf9"],["/tags/线性表/index.html","cd0ba7011e03a8c5e364eccd09568cf3"],["/tags/选择排序/index.html","1d224fc8b2f9d6aa40d05de4743c393b"],["/tags/链式栈/index.html","2e2acd918991144e2aadfb18f3f88a1a"],["/tags/链式队列/index.html","a38e071afc8ca8477043f34fed9d5b63"],["/tags/队列/index.html","1d514174837be6c98c2428899639e042"],["/tags/顺序存储结构/index.html","c22a5e45fee1256d6d45a1c30c1a53f7"],["/top/index.html","4b45dd9b2744c4b09aa934797dd40bbf"]];
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
