/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","ee47b31a16c756da94de1a8524e02ace"],["/archives/2019/10/index.html","4131ebab965f2dfc7867361526265ff2"],["/archives/2019/11/index.html","0e8fab563a6704ec524dc22617ec6ebe"],["/archives/2019/12/index.html","0beef630b3f1432e5b08ce7281f04ee5"],["/archives/2019/index.html","d04c1520ab03b212ebb2d0852f47377e"],["/archives/2020/01/index.html","1874d2877850c859b85cfcf44d1dd40b"],["/archives/2020/02/index.html","f7d812fdd627a407398f3385b8ceea0d"],["/archives/2020/03/index.html","3f1f8f6f2c02b4e7e6c2221c275c47ff"],["/archives/2020/index.html","218249ed46bb2b4b0bf952f89d4f1a84"],["/archives/2020/page/2/index.html","48bedc7dad8907550e4bee0ff96dbe6b"],["/archives/index.html","e76091b95af99bf88984a9b72742bb71"],["/archives/page/2/index.html","3a3c9a6177126d573c303f60b5028bf1"],["/archives/page/3/index.html","e7ebddce8fb2268472c2c653f4fd3828"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0d1fc5735d3f1a2383959729328da089"],["/categories/C语言/index.html","d64e1a245c66d5f6549fe589c2803475"],["/categories/C语言/数据结构/index.html","7ebaee1a62522412b363e7e8afb48001"],["/categories/Hexo/index.html","a7d8cca3700d6ea37232d7bebce5ebfe"],["/categories/Mac/Qt/index.html","1b6864c6ee6434cd9f3eda4629d067e6"],["/categories/Mac/Sql-Server/index.html","7b0aa491e9d94bba324d074e19b9e8a1"],["/categories/Mac/index.html","432d24bb852461d4f73e6b9458d4f53b"],["/categories/index.html","a2842a608536268e01a006f4bec43b1a"],["/categories/数据结构/C/Java/Python/index.html","9343b904eb3ee7ca18ae43a8e5d2e8a3"],["/categories/数据结构/C/Java/Python/排序/index.html","4978de86d63fec59135c3378c4598e01"],["/categories/数据结构/C/Java/index.html","0f91bb6ef83561934ff7f5ce986d7e4e"],["/categories/数据结构/C/index.html","c1f064eab1c5fec828c4d40ba8ddda23"],["/categories/数据结构/C/page/2/index.html","b50e8db85265e364ddae0b26807f7d3a"],["/categories/数据结构/C/双向循环链表/index.html","0f5c6e47cec08ed649f83a88d67e5198"],["/categories/数据结构/C/双向链表/index.html","1bc5df77df284bc409133d5d351bb96d"],["/categories/数据结构/C/顺序存储结构/index.html","0c75769484ae13feedd53c7636963af3"],["/categories/数据结构/index.html","5fa0ad7fb2ac6bfe3e823d2c74d4ddcf"],["/categories/数据结构/page/2/index.html","11e1ddd54559f18d0ed900490e3170a0"],["/categories/玩转Mac/index.html","ab90956addccfdd16d8099731a8301af"],["/categories/链式栈/index.html","01b089ac010d4dd8a5fbc36039101e32"],["/categories/链式栈/数据结构/index.html","93989004c703ab92163c189e885ab433"],["/categories/顺序栈/index.html","dd0bbf867a6ef4de98f50ac026d963d6"],["/categories/顺序栈/数据结构/index.html","58816cecfc46b8e70f2f8f0fea58be21"],["/categories/顺序队列/index.html","ba2392e429f5d3df024120c0863b5037"],["/categories/顺序队列/数据结构/index.html","45c551919ab0da4079c90014d2a34e3d"],["/css/main.css","acf7b43069ecf2e2030835d732e8a46c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d30ac4516a609ba8df973645b577c25d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","dd95a83abf6b466ffae30f424303bfec"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","02d2b23205fbc94f60e37f8d3153f4e5"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","680fd84c52f8b848abb369008cfaa20a"],["/js/src/algolia-search.js","5d809046e7685879d847f74b3b713421"],["/js/src/bootstrap.js","fd8b8e5dafdf37fe203366b844d018e5"],["/js/src/bubble.js","d2ac50d036e1f92a22f76f56750792f4"],["/js/src/clipboard-use.js","1e953e91866b6d5e9b78e1d84d0eb13e"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8cd4e5779e97725ae25920f847f26a51"],["/js/src/exturl.js","8a08b1cea07c22d2bf9518674ce8814d"],["/js/src/hook-duoshuo.js","300a6373a3c5b6c564bc0ad96dc555bf"],["/js/src/js.cookie.js","bd4a89d6971c4201d6c47915adf4339e"],["/js/src/linkcard.js","e865e922ccc0c0dab1234c43f95314d6"],["/js/src/motion.js","c0811ab52001f734ead681675013b698"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","bcf9a14ad0a9612660a16d90a5b8309a"],["/js/src/schemes/pisces.js","ece5c93eb73f50f79a0d6621dbe984e8"],["/js/src/scroll-cookie.js","e3d2d993de9129777e21787d1b0a8e8b"],["/js/src/scrollspy.js","ea098d3545ed1dca0932ca63539b1204"],["/js/src/utils.js","4bda17e7e7c6919d378b98770756db5f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cb2edede9ba6b10881f0c6eab24277f6"],["/lib/Han/dist/han.js","3cf2deb6ef41f4fb34ca9b24f7af7152"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","06b188944c8e618538bde754ce15b036"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","119628065b8fa5af8507e6ed0b2481db"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","44133b7cf84e6b3cbe28dfd00c25e1da"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","56382498fdd3058781b339ec7386ded7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","53846c53071af4410392d9bb89df18c5"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f91990c8b9b010a9cc913787a47cedba"],["/lib/fancybox/source/jquery.fancybox.css","9703a2d9d8a52c47de1d6d42902eceab"],["/lib/fancybox/source/jquery.fancybox.js","85daba07cb8111b6aadce0ca399cd03b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b2d185c8dea53cc263033eb316745f82"],["/lib/fastclick/lib/fastclick.js","8c72750a0c32d56b8e222528974ad68b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e9f0d23cbdd6c1708cb1fd40ab8379dd"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","374d9d3189ccd7f8a6584152b7e7708a"],["/lib/jquery_lazyload/README.html","519877f746cfd9a0dbb3dfa0c52dfda1"],["/lib/jquery_lazyload/jquery.lazyload.js","4d826a9e66a1a31d59d76518caf6b0a6"],["/lib/jquery_lazyload/jquery.scrollstop.js","725f80e3a76fef181ce68bd0432d97ae"],["/lib/needsharebutton/font-embedded.css","32399341c86460fdb59ff1a5e0d7e820"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6cdfde8722d970d75b0473ef18130de9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","11456c3dd65d87eeb66690c962cbf77a"],["/lib/velocity/velocity.js","61442fb2e087240ed72f51f5fe04eb61"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","68c8e5eb97a1af79d62c886e35a5e993"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","14517f84c4c88d95c9592922fecb537b"],["/links/index.html","ebfc27479ba7c8d31ddddc3fa99aebef"],["/live2d-widget/README.html","d04243957ff8031d01d946bac40414bc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","9d9cd249dd50a315a96cb692078cc05f"],["/live2d-widget/demo/demo1.html","d9e9853eef7995e7eb8f91bc6635ac72"],["/live2d-widget/demo/demo2.html","3d621991480373e5b409fdbcd0732157"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","557bc2394096ac02ba6b29feb6f93c6b"],["/movies/index.html","423ee65228cf5d83df6a31d8c667b299"],["/music/index.html","8da8bbbe3aabb7d3ad88d522bdf062da"],["/page/2/index.html","2e8a83c71f2cab9a84dc6915646feebc"],["/page/3/index.html","ee8b6dee432f5ea369952d17dc8b990d"],["/page/4/index.html","b4836eb629d340d799f5d91acd631c49"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","6d4c2be579b11728ef72d10b1114fcab"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","438f6d9b29bc0222f4d6066f7a8e6379"],["/posts/15468.html","ca8564eba7f5d38199602f70992f0d52"],["/posts/16107.html","73371e6e625a0a998f4578955b216388"],["/posts/201e1121.html","59c6462a796ed62b7df61c41b9848a47"],["/posts/20352.html","62c5e513decf15acdf5e24e25de49ba2"],["/posts/21238.html","796e352ee75856280159bbaa500fd8e3"],["/posts/22281.html","b45cff0fb5bad422bb37409556a36ea9"],["/posts/278598dc.html","648304e29f0c5d13097959ad59980edf"],["/posts/2d063bc3.html","88cf5533898ea1e08bf6eb6b0b70de02"],["/posts/30c404a6.html","6ec7e88e60710e7056a37fdff2fae6f7"],["/posts/51203.html","a40ffda89f3f42e6fb96e62dcd7dae80"],["/posts/538e5180.html","8d734d900cc6082868b4981a503ac351"],["/posts/5394fce7.html","6645767813b371d36d67f5ccf5230180"],["/posts/59037.html","7d5719777fcb77541e992e2751e1214a"],["/posts/60816b5a.html","66a6049b8b498bd12838cedf466a04c9"],["/posts/6163d4b5.html","f00e2bc6e888f75cd48abfe0f8c9ae6d"],["/posts/69978469.html","0773cf88a6f3b28f63d4e6f721827294"],["/posts/6a752619.html","5829e5ea7e760559b38805ec62c8b6be"],["/posts/7fcb11a7.html","b5696acc0d1557621272bd029c0ae18c"],["/posts/8cc73e65.html","5feae3ef2626c85aa86c0709f788c91b"],["/posts/9b621d6f.html","32c1c0bcd406414fec1dceb0cec0ed59"],["/posts/a530f7f0.html","ac20e1fe88490e0003504e74b7390571"],["/posts/beb5106a.html","b3ee6f75ef7daffc47db1e31ac318712"],["/posts/dd845106.html","31420b855a90185138529d771afa712e"],["/posts/e35620b3.html","3d78e8f8b2ba5d18b30ed5c6410d7b70"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","358d8f76ad6fcdf61345a1c81a4046f4"],["/tags/C-语言/index.html","1b595c885d45350d458c37d6b15540df"],["/tags/C/index.html","100c35216ca9bebb2bae88648090db7a"],["/tags/C/page/2/index.html","fec330243128c52d3f9110ade483fc21"],["/tags/C语言/index.html","51e48a3b9e427931026ff469d9b60a56"],["/tags/Hexo/index.html","6e28485156f78ea51e038fef350cbfa4"],["/tags/Java/index.html","a8a6ff9bbd37b1876b45a2ab76d06d15"],["/tags/Mac/index.html","adfec4d0f69c3e27bab29b6a457d15b5"],["/tags/Parallels-Desktop/index.html","85c1373570e4c0ad6b39991127cb68f3"],["/tags/Python/index.html","d963c516f448b0c4f79bb1e81d82de97"],["/tags/Qt/index.html","193af9e9cdbca33622b283079a9f997a"],["/tags/Sql-Server/index.html","76470f6076a4e46eb11dca118b2369f9"],["/tags/abbrlink/index.html","b537d5a68488ff3fd081579d4e83297e"],["/tags/index.html","d2cf367595781a34d51106348563351c"],["/tags/冒泡排序/index.html","431297a31321d4cf28f79e4fcdaf4911"],["/tags/双向循环链表/index.html","61406791aa9ff6ac6db2b5b316de91f7"],["/tags/双向链表/index.html","cfc9786fd9b4e752f8c898a09036b1c2"],["/tags/希尔排序/index.html","6f66819b29c2ca5e1ebb288473b92596"],["/tags/插入排序/index.html","19045130cf13f135b208ef9d95d1517c"],["/tags/数据结构/index.html","6d2a2a0a779e86e372b14ed1d3ed3921"],["/tags/数据结构/page/2/index.html","60a97375981457102b04d6d3e6946792"],["/tags/杨辉三角/index.html","76376931ebe89c93bbae74a6f83621ff"],["/tags/栈/index.html","4e3114faa58779026f004d5f91f412fd"],["/tags/类模板/index.html","bcb6bf4c83fcb52e339816c214199471"],["/tags/线性表/index.html","8193dbfce80006b42945f66b55a88527"],["/tags/选择排序/index.html","18ddcaebbca6cf90c8f5fcc9dc83a33b"],["/tags/链式栈/index.html","fae98862e1e888bdee54bb7a7f2955b2"],["/tags/链式队列/index.html","72dac7b3b8b9594b12dea3104e909857"],["/tags/队列/index.html","45509004f974f829e5043364d3335894"],["/tags/顺序存储结构/index.html","825a6f8fd527b3ec55cde1f97f0b113c"],["/top/index.html","5809dc025295797498980ac53d6a6d29"]];
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
