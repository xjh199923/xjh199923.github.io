/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","44637873218f452bdad8e0dd69150887"],["/archives/2019/10/index.html","09ce1179df18b81a856e6f11932726c6"],["/archives/2019/11/index.html","c5b05ee88c42fa31c83e086163c68827"],["/archives/2019/12/index.html","04270d240242916c2124b28551b002fc"],["/archives/2019/index.html","4d201fcd3838850b0a4527c903784173"],["/archives/2020/01/index.html","6dfa60e454b3e49b737bf6d7ce924bf6"],["/archives/2020/02/index.html","8594ae21f6eb3059549e14a04881ed58"],["/archives/2020/03/index.html","25d5607d8485e77e75317407a911db2a"],["/archives/2020/index.html","79839f6be9a78711132b146db3d498ee"],["/archives/2020/page/2/index.html","1da056c8fa521e4535b697f87789187f"],["/archives/index.html","d9346f9a0fbc8da056a07ca82a0b3b03"],["/archives/page/2/index.html","c46c21fb0cc454cefb304ca79a55ec87"],["/archives/page/3/index.html","8b25afceb76545187a4025c2679ba019"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","6c88c159308bdc5956ab83a17a800ee4"],["/categories/C语言/index.html","ba93d454c29ce3844454292f59b1796f"],["/categories/C语言/数据结构/index.html","c5f58dad5a2546a81a3ce83835d9e977"],["/categories/Hexo/index.html","1f3b063664cfddefba46c4e20f9e6587"],["/categories/Mac/Qt/index.html","a2d85bde5c5bafd338d4698251f3f7bd"],["/categories/Mac/Sql-Server/index.html","f2b42085cd00d9feee84fbeaf1de1dea"],["/categories/Mac/index.html","c3c363a96b895d05edacfd58223a5a8e"],["/categories/index.html","521fe914300329e531952d7509633cb0"],["/categories/数据结构/C/Java/Python/index.html","0c1bc0f5c9b6ba48b49f30ad840910d8"],["/categories/数据结构/C/Java/Python/排序/index.html","543ef8a7deca167145aeaa26dbaed474"],["/categories/数据结构/C/Java/index.html","f988a552700a021caae2e421badb3ed9"],["/categories/数据结构/C/index.html","fafbdbb602964aca86843ef204b95098"],["/categories/数据结构/C/page/2/index.html","111360b6634925a75999d1c8faee916f"],["/categories/数据结构/C/双向循环链表/index.html","598e0301ce14511fb6f57e7af48fc6e3"],["/categories/数据结构/C/双向链表/index.html","149c96e6ca55d9c4d73eff3594a99c14"],["/categories/数据结构/C/顺序存储结构/index.html","ea01f81f1bf081d46f35d3630ab3e45f"],["/categories/数据结构/index.html","20035315f4ae4a394ef1624b693e4af1"],["/categories/数据结构/page/2/index.html","4329f87748c74f7d4b538905719914fc"],["/categories/玩转Mac/index.html","4c5e07cf96896e874e529b86282c8418"],["/categories/链式栈/index.html","c5f5339d98797bbb4aac93e62531f33a"],["/categories/链式栈/数据结构/index.html","330b5aec434f73e7b35a05cf1f701b0a"],["/categories/顺序栈/index.html","1e35922d71cc07338cb9637d34c744b2"],["/categories/顺序栈/数据结构/index.html","0798ae52719b1da2e3652a8070341a26"],["/categories/顺序队列/index.html","d7e5c490a140c126e7b65e662c63b42e"],["/categories/顺序队列/数据结构/index.html","96fd0e2e92cef07bca1de11e03cba8de"],["/css/main.css","3e1f14e5bb9d2a5d6fa6b890a491e730"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9de53a30886a3b7b6bf6ed29acb58b9a"],["/essay/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/essay/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/essay/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/essay/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/essay/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/essay/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/essay/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/essay/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/essay/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/essay/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/essay/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/essay/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/essay/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/essay/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/images/img_1.jpg","0fd6f56571359e5cc037bb83b234fb0d"],["/essay/images/img_10.jpg","8d1f9612dd3aa5eb1412d29083042c73"],["/essay/images/img_11.jpg","6ec3a958372d4612dbaef0ff6852ffca"],["/essay/images/img_12.jpg","ced15a4261eebd442ac0fabfea771115"],["/essay/images/img_13.jpg","3e3385199e8a90f687ca3d52946816d1"],["/essay/images/img_14.jpg","fab9d290c1a8af7550980ddece1fec03"],["/essay/images/img_15.jpg","f7db793b51f98607583d0b6d6f8f652a"],["/essay/images/img_16.jpg","5c2ea065c7c103adf941fd7aaa4d694a"],["/essay/images/img_17.jpg","5b37e6337af7741ac48e52be0437ec3b"],["/essay/images/img_18.jpg","64818da5d0636b44b8b85755847df9c1"],["/essay/images/img_19.jpg","aa194c7662732bcf681c432199b2009e"],["/essay/images/img_2.jpg","6509a6506b26b55f083b1d58acfcf366"],["/essay/images/img_20.jpg","ec18f1379c261f7ca798adbe6c8aa2df"],["/essay/images/img_21.jpg","91b5a0f826a7e260b32ed3119f9202ca"],["/essay/images/img_22.jpg","4819d2ff52d7b4c74d08773dc28d4707"],["/essay/images/img_23.jpg","ec04cf3d6d710b98ff93ea86ebfbbfff"],["/essay/images/img_24.jpg","ae7997a269313671e3785f506fa24e79"],["/essay/images/img_25.jpg","14b22f05fe499e38237fc06261b7f592"],["/essay/images/img_26.jpg","1b378e82d587172eb42093e4d5412418"],["/essay/images/img_27.jpg","65fc7f13d5ac1936fc864bdc88e382e9"],["/essay/images/img_28.jpg","766f5c22428dbf13986ad7e1b1e7d61f"],["/essay/images/img_29.jpg","61eea66d37c5f556d5571c10ec8a469e"],["/essay/images/img_29_large.jpg","58afbbbf51466c4f330947bd4dc233d0"],["/essay/images/img_3.jpg","b4a9c0cb6748f29358d4290c103ef77c"],["/essay/images/img_30.jpg","109fa0a0c22992bf3db06d92fe687c70"],["/essay/images/img_4.jpg","2fd923a6b53f1a66424be7ef98489804"],["/essay/images/img_5.jpg","db5e773ba8e95a8a51d8d55c3cab1b20"],["/essay/images/img_6.jpg","28a66f01315b550c1bd077cb0ecad83f"],["/essay/images/img_7.jpg","8685e94e9dc72bd1c76e485fd37c3c3d"],["/essay/images/img_8.jpg","f4f52c5a3e68f7f63ffcb25302d8fdb9"],["/essay/images/img_9.jpg","06f13ec2dc9c07f2ed87eca4381281af"],["/essay/images/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/index.html","d3ffb04df7ac50e98af5c7e5e11d6167"],["/essay/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/essay/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/essay/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/essay/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/essay/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/essay/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/essay/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/essay/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/essay/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7e26be49ff9074feb92dc445bd23a613"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ba1ca199498328dae8e11817273c4175"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","aac9ea313f0d83b01d986317c4a51f59"],["/js/src/algolia-search.js","dd28e80133e697450739ba8fdb3d2ac1"],["/js/src/bootstrap.js","3cdf0308e75ebf35233dbb7e2a0ef294"],["/js/src/bubble.js","43e133f628c07f33e9815627b40eafda"],["/js/src/clipboard-use.js","da6c8e95b392e91198c6dfb0e11a3a42"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","baa0b6758ef51779a8e5142579cf87e7"],["/js/src/exturl.js","87836f904d3df6ee449dc69f98af97f2"],["/js/src/hook-duoshuo.js","3c9a9a1b2bb51f70fa343bd2d625dc9d"],["/js/src/js.cookie.js","f1c6eae7f308d797f5c82ac31e4ed541"],["/js/src/linkcard.js","74393c278047ed6f56cef3c1ce239c53"],["/js/src/motion.js","e2a0a3c79501b70068b9c559153dc950"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","e0a70282d4be6822d5423f7f6aa84774"],["/js/src/schemes/pisces.js","a3453602e8d012616b572a2afce28cf7"],["/js/src/scroll-cookie.js","b5d0ee624597db9dcf78197164d3169d"],["/js/src/scrollspy.js","a84457da39701e366ae97cf2413d9f2b"],["/js/src/utils.js","cbcd3e84f1d6b7d48c55f03d00a0d853"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","f2a49667bc933cee9c91a190e0d7dba0"],["/lib/Han/dist/han.js","6aff4191989f69c6ab8f029fe332bb2d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","7f74a3aeca7a4600dd1d6c33a5dee2b0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c214a22f1c62cd220eb356fdd1cff040"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ff128d28cfc1f7cdc0376cfd0facfe1a"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","585e7034ae65827c00e19566c9d02f5b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e0340b2d3c23ba5ab0168db38e9e3eaf"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","508b6721564750ad99683454fac7649f"],["/lib/fancybox/source/jquery.fancybox.css","4325fa3913e79a1f3d80c8235d8dddfc"],["/lib/fancybox/source/jquery.fancybox.js","0925e2c2be9591d22c51a0e508210fb4"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f97739a7a7197312c9997997cb88b9c3"],["/lib/fastclick/lib/fastclick.js","c3975a68c9dc9d054c404ee651006e6d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ac1791f4bbf43b022519307a244e4fa0"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e7380a5af73e5aba1406115b1271859e"],["/lib/jquery_lazyload/README.html","c42a16d25940ef0f235828274044896f"],["/lib/jquery_lazyload/jquery.lazyload.js","bf3298591caad4e4d3095311c1288072"],["/lib/jquery_lazyload/jquery.scrollstop.js","6693ab28a23cf56729ee51e6cd685178"],["/lib/needsharebutton/font-embedded.css","2b2b10830a134a026c9360b6bda95f7d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","b13605046ddc6e7a3f7f212b15117c54"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4e553c3b94b74f85bcfeb2b020cbbb72"],["/lib/velocity/velocity.js","056dc960853ff19227aca2183f97a7e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1510bdf01e40816163a5ac4856105911"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5e636c49d8f1579a8f73c47db68c4405"],["/links/index.html","39b1158186b6ab7096741fcce0cf445f"],["/live2d-widget/README.html","b6893255d931ecf62849b7ece3684a49"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","ff09f48e3eb735fe47db8f3222dfce6d"],["/live2d-widget/demo/demo1.html","cc0eeda3cdc6a4908bb6e06c89dabb77"],["/live2d-widget/demo/demo2.html","937cb5fb717a3f9d77f66544eb71f7b1"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","9d6b95df4d4e47cafb80ca3a7e43dcb3"],["/movies/index.html","0ca04296c008f673f21097ff2b8abca3"],["/music/index.html","a6930c40aeb1372aa9f34c075128928e"],["/page/2/index.html","2c3e63316a6da0385934a2d5ebb313b0"],["/page/3/index.html","96a71dbfcaf81be05e59e5d060b7d52b"],["/page/4/index.html","0a4de5ef247aa61df0ddadea450d8f4f"],["/photos/index.html","68b2db070fe08d24a18169fd1dc29b82"],["/posts/14311.html","d3697b794c525d8b14f4e254e734a920"],["/posts/15468.html","712c74123632f0c54ffda53144068d94"],["/posts/16107.html","04df5b1be90d9764da936d6262e0ea60"],["/posts/201e1121.html","8a8938c83f4ac22b14c3ff9d21c77d85"],["/posts/20352.html","98a9a53c59a65cc2c3643e8a97789eaf"],["/posts/21238.html","299363d888234928b0cb56cd0d804062"],["/posts/22281.html","65b834adb4d3b369129c63de679cf2d8"],["/posts/278598dc.html","5d3ee69926035ff087b2c58298b19c26"],["/posts/2d063bc3.html","da61e62c9fcb855220db9ab363fff130"],["/posts/30c404a6.html","013854e2875d639fdae9f8ed2b93b2c1"],["/posts/51203.html","3c7649fd41103643d4742d2638e09247"],["/posts/538e5180.html","f138768bae3503c6ee93bb6cfc95808a"],["/posts/5394fce7.html","0bbdee9165917aabb8b558fbfb601e76"],["/posts/59037.html","96e42c69ca110ae31d142c9d53bbdaba"],["/posts/60816b5a.html","069a1e67f5284e1816ee258d060b5945"],["/posts/6163d4b5.html","483efef574093045c0456f318a298442"],["/posts/69978469.html","e64232dacde5aa054dc813a04317f59a"],["/posts/6a752619.html","acaa42a97c28982dbdb3cc20fb37e382"],["/posts/7fcb11a7.html","124771b5f838bf6a07d413250389b75d"],["/posts/8cc73e65.html","6ccd6d3db5ca65156aca326cbeee4f3b"],["/posts/9b621d6f.html","981ae586d8d2f16c93bcdade2cfea0d4"],["/posts/a530f7f0.html","ad8d8f50d622200ac17cdf01681d3618"],["/posts/beb5106a.html","1f2d6ef6a9fb6f1399f90b78dd3eef84"],["/posts/dd845106.html","036dfe34a53bb2b66b8690f9428e1522"],["/posts/e35620b3.html","4111c52ffe2c73639229245f797b8be1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","2e7ebb1b214f3177494a1ae9dc9ced54"],["/tags/C-语言/index.html","71affe7f89c1ae44ffbb2b670d54b273"],["/tags/C/index.html","7d9fdbef7909bf6276a7a67752bb1a11"],["/tags/C/page/2/index.html","e24aaa6051ee08f11eb0d84118593f1c"],["/tags/C语言/index.html","b3a855ace1778e53e865e06bc4b916f4"],["/tags/Hexo/index.html","18f1e4b17b8f8c9b8d03a65d6f16fe44"],["/tags/Java/index.html","f9d3891823b66c67c7be09d6db045261"],["/tags/Mac/index.html","0ba5cefe1f2639fb5b08dbfb1034ba1d"],["/tags/Parallels-Desktop/index.html","ab8cb81bea22507da159e35d1bd356ff"],["/tags/Python/index.html","34a383c752b8984163cd8c1690298e3f"],["/tags/Qt/index.html","1c1e73df3a9af3ea0c688c23042abe69"],["/tags/Sql-Server/index.html","81480e5a5bf33fa2fa3144100c43c89a"],["/tags/abbrlink/index.html","cc4981a21fc60b23561f5fb796352c51"],["/tags/index.html","c6a172b81aaa0fe414809d69dab42979"],["/tags/冒泡排序/index.html","ca84211580c6472add89b486c73c95db"],["/tags/双向循环链表/index.html","43944e83a225789391720ba2c0a319f4"],["/tags/双向链表/index.html","e47676c64cda4a3754f0bc9bde8e1c9a"],["/tags/希尔排序/index.html","0cf3f765c5ae8cf19a061933a223d910"],["/tags/插入排序/index.html","b4c8f273fb7f3cd01c2be998ecbb5c9d"],["/tags/数据结构/index.html","2f2d5516ff44ad766043f478042273e4"],["/tags/数据结构/page/2/index.html","7bae6390259e89ddbae37f19b20cd9d5"],["/tags/杨辉三角/index.html","595079b8575651a82e2a699ff38e803f"],["/tags/栈/index.html","c8f54f81f73866e9688209019be368d6"],["/tags/类模板/index.html","32b25a2dbb3f898cc46fe4d4edc19d66"],["/tags/线性表/index.html","c7a6fb10e6084e763d6a3807ec318c14"],["/tags/选择排序/index.html","dd0c247f2173cbc31bd26d36a925bbfe"],["/tags/链式栈/index.html","bebc8cd58e39fa4dbcbe1f7b28805154"],["/tags/链式队列/index.html","c16500089c5eb66106cd3c86a14fb43b"],["/tags/队列/index.html","4ce22849f000b95f71e1a5126dac8057"],["/tags/顺序存储结构/index.html","0faba6579a5d50157279b2bb753f1e33"],["/top/index.html","16f8074cbb2a37aa0bbd96fc84095e9d"]];
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
