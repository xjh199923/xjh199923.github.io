/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","4b71e60f1595bbf4bde37117a1d6daef"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","ab59fda6cc395a82ed4dfe788a1e1ba0"],["/archives/2019/11/index.html","a3f2fc1b17381534b97ec7b45864b1e4"],["/archives/2019/12/index.html","e20d037a1c7423858ef41faaaf74538d"],["/archives/2019/index.html","d536b49ef87a725b498b01cf2a4df215"],["/archives/2020/01/index.html","89724bcfa8832036553eb3dffcbf96e8"],["/archives/2020/02/index.html","0e4a3548d5139aa828f1ae1823ac9fa0"],["/archives/2020/03/index.html","96d794ccc821a398b3ed4509d04ceda2"],["/archives/2020/index.html","e7434b96205f26a07d0efca9bde2d074"],["/archives/2020/page/2/index.html","4f359dc4c559290bbfb5157d5f9e6bf2"],["/archives/index.html","254a86c2ecd132fc805b1fbcce157502"],["/archives/page/2/index.html","1b273561da1d2965cd4d82813ad536b3"],["/archives/page/3/index.html","9220fe77cbb33dd50ccdddc0f1db315d"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0156d814d858b59884d9f41bafd3c299"],["/categories/C语言/index.html","77be25c00573fcd06319075c2877c3df"],["/categories/C语言/数据结构/index.html","39a720569d4cc25f235accb581440506"],["/categories/Hexo/index.html","817d2478a75cc9753fc7c569813ec062"],["/categories/Mac/Qt/index.html","2799683010ca156a2ab8324acf44990b"],["/categories/Mac/Sql-Server/index.html","eca0937be66ba9cc67f5a66218422862"],["/categories/Mac/index.html","9d074449d72bf7652e0fb7a0faec7b55"],["/categories/Ubuntu/Hadoop/index.html","2370386bc4701a3766ed89e501075cd5"],["/categories/Ubuntu/index.html","b3789495aed9baca33b63ba9b88691d5"],["/categories/index.html","27232a62aaf5d93ae20836ba0cdc836a"],["/categories/数据结构/C/Java/Python/index.html","25030b1ad3c5a6b248a427b55628e152"],["/categories/数据结构/C/Java/Python/排序/index.html","744a43df19d1bee8e70a599fbfc4519b"],["/categories/数据结构/C/Java/index.html","0a051151e4e0b0aed318d71794f912df"],["/categories/数据结构/C/index.html","4cd8a2602a64041ba722749378e8055e"],["/categories/数据结构/C/page/2/index.html","229882b930d4d0d8cfb0d15aa889cb1f"],["/categories/数据结构/C/双向循环链表/index.html","badc4a69b4990bb196adc22c7127f419"],["/categories/数据结构/C/双向链表/index.html","0fb82638377ee70d482aa3d5472d763c"],["/categories/数据结构/C/顺序存储结构/index.html","d9833287d645d30a648b97ea0d35c337"],["/categories/数据结构/index.html","e83ebd2b2b3b8ff169af0d8ea4c2a22b"],["/categories/数据结构/page/2/index.html","90e38e0f202c4ce2ceab39fc59793ebe"],["/categories/玩转Mac/index.html","a04fbd3abc6693dbda366c52445144fa"],["/categories/链式栈/index.html","f51fed7ca6b754aa4d0068070e22084b"],["/categories/链式栈/数据结构/index.html","f954daa08fb1b2696dce6baea589ea8c"],["/categories/顺序栈/index.html","726ab0357334892a76ccc2c4043bb741"],["/categories/顺序栈/数据结构/index.html","183ff548dad2db74b4f1c082b2b700ca"],["/categories/顺序队列/index.html","6b4ce4340bbe50b9513ca0a0a43ad5fc"],["/categories/顺序队列/数据结构/index.html","edede7f96d2d55be6ffb79163050ae78"],["/css/main.css","cf3c5cdb788a800e9aa021dd1cf765ed"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9edb44a225ccb8c73fea4a356cb478b4"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","64c561255bad4f09152fceed84dceeef"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2969031209245946853b341b2a50cbb9"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7cab09ab824b776f01194c591db72862"],["/js/src/algolia-search.js","a1fb1a9ded12ab7ad33fe22753c9cecc"],["/js/src/bootstrap.js","77c5e1a47b71b6a10918d3e5068e3b5a"],["/js/src/bubble.js","2fe9c566849e0fb13aa80878011ba385"],["/js/src/clipboard-use.js","3aa8daecf8288548c96fd0d8bca08d0f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","c53d4c79f6ef6ea131bfaa3e485e6fbd"],["/js/src/exturl.js","1bf0345d32a140ebcaacc330da19a2e5"],["/js/src/hook-duoshuo.js","fcfd4284f3ae4a77ec8357366e68db42"],["/js/src/js.cookie.js","fa3a6f2f5498bbf7ead0d142f84ff406"],["/js/src/linkcard.js","f2f626fe1e9521ced4384607de6fd737"],["/js/src/motion.js","b65c866470513ce26cbf0e3a95c84e1c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","569fc6eb1de5cce57751c5be6ee03775"],["/js/src/schemes/pisces.js","c434d3a4e451c980cb16172c5a16591a"],["/js/src/scroll-cookie.js","931378f95eae3a3fdb2a534454a69498"],["/js/src/scrollspy.js","561a28d418768a40afe0868621452e09"],["/js/src/utils.js","d764444bca398a2da55970ab34370ec2"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","57b1bc09111a889706dc39e04c86ea3c"],["/lib/Han/dist/han.js","50297aa3a29cbe28f76af589536ac371"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f85d105890f74067e560a9be2fab4035"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6afaa2dcdf313f0b9c38559d8bc6965c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c9cde6b577643e5bbe34d296da4e08ab"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7d0be8ad7321fe9a9b4f8c1488eec11e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bf7f1c06a55a921b8775388ae47151a6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0ddd6d47a4a31fa7376c64eaf9b05537"],["/lib/fancybox/source/jquery.fancybox.css","17c3b85f2049e26fe6efe5e974f513fe"],["/lib/fancybox/source/jquery.fancybox.js","2fbfe82e5ab5632941aa262ec8afc1d5"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","043fa58108666c59f131bab5bd495982"],["/lib/fastclick/lib/fastclick.js","2dab4d3fe1c0cdb20a5f75703b7b37b6"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3dd7bf4674adce8b17922d4b8f62bf1c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8fc3d488a18d6e2dacb786218d1df072"],["/lib/jquery_lazyload/README.html","8b4ccbc5b6cc6534cebcd72d99f7accd"],["/lib/jquery_lazyload/jquery.lazyload.js","7ad5bb3d250ff1238c447630782e9084"],["/lib/jquery_lazyload/jquery.scrollstop.js","dc6853fcae68e848d8efe1ba54970d9d"],["/lib/needsharebutton/font-embedded.css","ccc85cdf349878b00a25a44f38e690c4"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","a31576b3f45e7a7a451ceee6310397aa"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","547094fe37bee68f921591f974479c0f"],["/lib/velocity/velocity.js","63f567606afc0b5e4bbd9b1a6abe4797"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2c43f74dc051fe1a3f4e97296f9e516b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","cffa5033a1ee3d52241645ae64a13ca2"],["/links/index.html","d1241e8a8254df425fe69a23fc490848"],["/live2d-widget/README.html","984cb9063c170730ed3f8f45a8409502"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","41e0c756e9ea87af8a075d97b8dc6029"],["/live2d-widget/demo/demo1.html","6cffa313816be21187f1aaf778c60b0b"],["/live2d-widget/demo/demo2.html","e954ed718165df990d9c372a73429877"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","bfaf1f7be8f280793479beb7e3e03f68"],["/movies/index.html","44a8165f18d871894c233ffae20c145a"],["/music/index.html","6bc44de92d377663eb10d81f01083e67"],["/page/2/index.html","6086cc52f354c09d9951e49603ec3958"],["/page/3/index.html","3070c9cff4e15f933eee5f65c8f82126"],["/page/4/index.html","503bbeb5121ad7bebe5a8e5ce3d170c6"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","f7a2ca3090014b86499a1589ce57625d"],["/posts/15468.html","5294f80d36506243dbd427820ae50460"],["/posts/16107.html","d72bd5c5354ae21c0fac9698a63eac9e"],["/posts/201e1121.html","c0354875da0c290b758453a46684cfc0"],["/posts/20352.html","35369cc87fa069d7c4a56f4bd08260a2"],["/posts/21238.html","19416b20d4945baedbb9b3e7acad5187"],["/posts/22281.html","8688f7619f3d8fbc9b89efe7572f968e"],["/posts/278598dc.html","1eed92159a6aad2982934a1bac7993d8"],["/posts/2d063bc3.html","4ddf526a625614bf471acf7aa9f15f2e"],["/posts/30c404a6.html","468c4590f2d2ca09bd7048218518e875"],["/posts/51203.html","073697faba970c6f01648706cc9ede21"],["/posts/538e5180.html","898601f8bf8840dfe4b48edbe75a1218"],["/posts/5394fce7.html","a85ce88721e26b2b46b3e6ed3026991d"],["/posts/59037.html","6fc383613bbba8021b2046e7e349eca3"],["/posts/60816b5a.html","3798d062e4ff458601883af516081a80"],["/posts/6163d4b5.html","fe5aa5fdf9bda64722f751023159b313"],["/posts/69978469.html","ae6699229076ebb268e476244ba4d54b"],["/posts/6a752619.html","3c36a6bbe1f53ec5bde93f16ed3bc654"],["/posts/7fcb11a7.html","f19936ae7182dde61f8815177acd6367"],["/posts/8cc73e65.html","5589b21da81246f783f28f1836f80fe8"],["/posts/9b621d6f.html","887e31deec481838a073905576cf1fa8"],["/posts/a530f7f0.html","1f8c0a946840153242f4718b02bf8cea"],["/posts/ae1da46b.html","3bf0a200e8b60f74fec83bc21a6051bc"],["/posts/beb5106a.html","29be93fabd84be0c4c4c8d049b74b437"],["/posts/dd845106.html","d707f6a825da093f972ff54bb71cc1c2"],["/posts/e35620b3.html","4985695940b30b33c8f958f13a4bd826"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1ef3f785d083cdfa7f15cef37d4cce1f"],["/tags/C-语言/index.html","483d5a70f5d2740190bb4e1aa5a7bd0b"],["/tags/C/index.html","9923a1bef85d851a26286dcf2e5fdbba"],["/tags/C/page/2/index.html","04059eb0925d82366be5f385be513f10"],["/tags/C语言/index.html","cd19ccb7b355b1bcd48ca2babef446db"],["/tags/Hadoop/index.html","7c0ef4764799cefe9378fa1c58c2628e"],["/tags/Hexo/index.html","922ca774992c9602bd0906e88785233d"],["/tags/Java/index.html","d3ddd41dffdbc234a136b2128de9f674"],["/tags/Mac/index.html","2018c0d02b35387d8f7a27afec72d58d"],["/tags/Parallels-Desktop/index.html","4f0a87bfbd900483798b8a8927cc377a"],["/tags/Python/index.html","7d68d2aa7e4e1335fd15262252210ba2"],["/tags/Qt/index.html","c07261e5f33b90e28b60c1e5635c30b4"],["/tags/Sql-Server/index.html","6ac815b822a4705502211aee0646998d"],["/tags/abbrlink/index.html","40277407d13afb9d7eebcae874cca5c3"],["/tags/index.html","606b603d0c00174f465cbdd2d3412a1b"],["/tags/冒泡排序/index.html","df0b4df1806f5990203ae852abeefedc"],["/tags/双向循环链表/index.html","7f3590b75f4054f74bec6709e7b3ebc4"],["/tags/双向链表/index.html","a8f83815b88390a187729454bc4d80ab"],["/tags/希尔排序/index.html","849dfc9fa1cea58eedf7436e33c2577a"],["/tags/插入排序/index.html","602a5123c4069048e36d7091fd8e3cc9"],["/tags/数据结构/index.html","4cff8c85e8c97c891c1e316be6344f2d"],["/tags/数据结构/page/2/index.html","e98e7ccad3c018992850128b462371af"],["/tags/杨辉三角/index.html","3f5e860f9d83faa6631aaf3233af7b24"],["/tags/栈/index.html","85548e0496419c92dafb1cf8c5f6b3dc"],["/tags/类模板/index.html","d0cbb2627b578b077f885bbfa5797d8a"],["/tags/线性表/index.html","abe69ed130ee839e5bd0f3cdd6424db1"],["/tags/选择排序/index.html","0fd7c64159105a7631e285744925e624"],["/tags/链式栈/index.html","85282f7b86c13ec4168e933cf1bc5cd5"],["/tags/链式队列/index.html","397696b542a70f7f5eb7c761d7244c4b"],["/tags/队列/index.html","82ab06dc3a0c7ec85bd5c977a9f8243e"],["/tags/顺序存储结构/index.html","cb0cb3260299e9f0b25c14d5278cbed4"],["/top/index.html","2fedfafd01b916f1b6f48af348281e16"]];
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
