/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/about.css","c804bd8b49d2530aae4bc9424a6190c2"],["/about/all.css","d200e638586037eef3373724151d599c"],["/about/index.html","c83749fff52eb5acb0b4f22e382f0b2f"],["/about/sakura.js","28ce86233352fe1cc178357d02d667f3"],["/archives/2019/10/index.html","0f796c90dced6ea13cf48ca0738bac94"],["/archives/2019/11/index.html","f7d607e4e6c845ddf57828f9410a8fd2"],["/archives/2019/12/index.html","78196d616ad52dd893e4a92dbbc7511b"],["/archives/2019/index.html","8a5602a0bee27773d32a112ba56b129c"],["/archives/2020/01/index.html","2161c3c529ff559e46213f638c492329"],["/archives/2020/02/index.html","480561f7e599f58b1d2a30db2242baa0"],["/archives/2020/03/index.html","4998689c13a136cee619ddcf8a594a56"],["/archives/2020/index.html","2fa9ebd45209e3dc3ec69701cc228165"],["/archives/2020/page/2/index.html","fc97b9021bc583a8db40e30d724eac52"],["/archives/index.html","24bb362cf080392726daeb57ee8a589b"],["/archives/page/2/index.html","55dfb356e1267996874d268ef98e146b"],["/archives/page/3/index.html","597000ac4e679db49487031b2527e1d1"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","8cdeae2286c080dc4830cedb2dab403a"],["/categories/C语言/index.html","1d61fb048805ffd9f7ae72ab8c76cfa2"],["/categories/C语言/数据结构/index.html","88fcddc18d29e3549c2bcc5aa2f8e4aa"],["/categories/Hexo/index.html","829c4e36a0b6f2018311f82a4441fa73"],["/categories/Mac/Qt/index.html","62732a2a94df2fb906ed93f9b21d61ed"],["/categories/Mac/Sql-Server/index.html","49da37103f8e886d75b48878ab131eaa"],["/categories/Mac/index.html","58f4c95780c9fa7c0e25365ad38d18ef"],["/categories/index.html","e3ab50fb3365e88002df97464fc0e126"],["/categories/数据结构/C/Java/Python/index.html","731f8f54a8884fb1c4e92c0e445148fc"],["/categories/数据结构/C/Java/Python/排序/index.html","337232700a04b84e183d361234ccd4d9"],["/categories/数据结构/C/Java/index.html","507243762d25eb200bf1a3fe84aa7b64"],["/categories/数据结构/C/index.html","d0306ec890d1a22d24cc56fbf34b7aac"],["/categories/数据结构/C/page/2/index.html","e3ddc1f59d8daf6ea0e5a5e182e04791"],["/categories/数据结构/C/双向循环链表/index.html","744c38f8fcfb782c70bc5e725ec7ff02"],["/categories/数据结构/C/双向链表/index.html","d2ecec47d95efacd6f37e90abcbab376"],["/categories/数据结构/C/顺序存储结构/index.html","024bdba5063e653346e58d1f74810318"],["/categories/数据结构/index.html","f65a1b4b58c6ac7b117739935f43bde4"],["/categories/数据结构/page/2/index.html","dd0e25be58a499be29d89f0573d5245b"],["/categories/玩转Mac/index.html","dfc12944884f4f9f67f64bb0271df2fb"],["/categories/链式栈/index.html","6b1230199d508395245ee8f93689f6f0"],["/categories/链式栈/数据结构/index.html","cd3e315262085600d5c9dab3a32b248a"],["/categories/顺序栈/index.html","349ac72def977253bd0ac4b1ba0732bd"],["/categories/顺序栈/数据结构/index.html","e5071147821a6e3bde2d78ecd9022a1f"],["/categories/顺序队列/index.html","2f5632d421fb2b9aa3c893d4f6c554b0"],["/categories/顺序队列/数据结构/index.html","deaf4de36c7eed78a74360c62202907a"],["/css/main.css","43e8460e17daf114d0fdac65bd1a13f4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e72ac65c1e1d814cb8da912866db6657"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","42ff7659209f167f9e18ecdfe3325e05"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","b475c9bb25b372a3e19355c63a382f91"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","ba0661643f53bb8a206dbdf9e32cdd53"],["/js/src/algolia-search.js","277a90b311c60529951d100477eee60b"],["/js/src/bootstrap.js","b7b855d46c083890c0155c8fe7651432"],["/js/src/bubble.js","b82c799dd9109620afc6d3831ca638c1"],["/js/src/clipboard-use.js","d77c522d260913293be9ff15569f77f9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","dfe6fa1a7c1b3d2eab09ff73421a32ae"],["/js/src/exturl.js","24f5ec2ced2c2fe61add7fdcef01aac6"],["/js/src/hook-duoshuo.js","bbe6a18e3253af3d42f410284f71cf6c"],["/js/src/js.cookie.js","f4eb670f36c6ffc56cb553c50083fc7e"],["/js/src/linkcard.js","d1f14a3d1ad28ef79b18bc0cacdaf30d"],["/js/src/motion.js","42feff4335df19f957db88fe5366e9cf"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","3076d709ddb27d20efbfbdcaa04a6458"],["/js/src/schemes/pisces.js","9aaf4690e132a4698e2f00774b5abcf9"],["/js/src/scroll-cookie.js","0e19b9389fc019e643928d6bf576c8e5"],["/js/src/scrollspy.js","1f985249b8a3dd8919a24656a8b49013"],["/js/src/utils.js","07ac35b359f9a9837f2b2d3f98401faf"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9d813e9ff75d4de6b50b66169c9ad582"],["/lib/Han/dist/han.js","1ac81f728a01a6e82757b45ac4a11e84"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e129fb616aa1f781e20e08a2e77d6004"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","66229df2305f2655a9508b9cdcbece90"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a52d628648f5337fc63d8d26f7a161eb"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e001bf957732f4e5acb916c421118690"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7532e0111bb01c0b18deea5fecfb13c2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5298477741309542e1648bd7f9c60c78"],["/lib/fancybox/source/jquery.fancybox.css","06a6bb2bb3d5af50dc912e06e081041f"],["/lib/fancybox/source/jquery.fancybox.js","bb645dc2fb4eccafb9f5eef1ce985b99"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","97ebcf415c96beb74bc37a82d098c806"],["/lib/fastclick/lib/fastclick.js","e41a9aa9bf3d302c30ae52f369be439d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","53df192893cccfd4ee820b93bc33f447"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8919f94ab898a2e1aefa4627806d05da"],["/lib/jquery_lazyload/README.html","85a0e1e2f105b8f626ac010e418d4af1"],["/lib/jquery_lazyload/jquery.lazyload.js","b6cb308e7c6e710e36c0b0419aea7704"],["/lib/jquery_lazyload/jquery.scrollstop.js","3a70232e53579a68ad6c68b6beea299d"],["/lib/needsharebutton/font-embedded.css","1f57401f35a068c6744e2c33e68b44c7"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","4d38025a6463aee7bd0d432906c8a8db"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1dde85a2b7cbaf35421282620a1484ad"],["/lib/velocity/velocity.js","e217e911768ede545a2a64a0cdc6640f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","7b28c1fd9e1de7b682dbaa9a33dc8c83"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","fd1646727e818cbd9c94d768c05b3c55"],["/links/index.html","7a0610bd561c2b3c2e3b22f47f98f7d6"],["/live2d-widget/README.html","40d59680167fc276e3250ce4d1a739a8"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a460849f471b0c3dd61248577506af90"],["/live2d-widget/demo/demo1.html","2063c87b3eba476cfea2e92951a160fb"],["/live2d-widget/demo/demo2.html","5f279eb2b54fd14c2d20dfff7e41812c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","45d5062572bbb040b1fcc75ddbcf819c"],["/movies/index.html","8541971fd772f8b43870403022fe85ff"],["/music/index.html","e00c82983c6033248e69bd29ee20de64"],["/page/2/index.html","319fc9c9cdb5d200072b06f8c117a591"],["/page/3/index.html","57dac83998f942ab4f51840120beac09"],["/page/4/index.html","4521ee80dd6bc56d56ed248159359101"],["/photo/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/photo/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/photo/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/photo/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/photo/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/photo/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/photo/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/photo/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/photo/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/photo/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/photo/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/photo/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/index.html","a6e4f6678a7140a2283521a2fea3f51d"],["/photo/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/photo/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/photo/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/photo/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/photo/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/photo/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/photo/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/photo/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/photo/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/photo/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/posts/14311.html","47495d7a610a99c76fadb74fdb7396b8"],["/posts/15468.html","1d1ed72493a0296d5cf331b6c2853a6c"],["/posts/16107.html","d5b3f7cf45d4290f7da76777719aa5cd"],["/posts/201e1121.html","6356e1fc5d2395e7c18bf07d3c9ac785"],["/posts/20352.html","fe01812b8481850377be8f07149c94a6"],["/posts/21238.html","2704482f302fca140607bb93a6f5c26b"],["/posts/22281.html","67ee7aed48c84a6a3c17adad3e2b74b9"],["/posts/278598dc.html","d6a520d1a554c6209434cab9ba5a7869"],["/posts/2d063bc3.html","bdd22f89b2407263754511c8b1b282b8"],["/posts/30c404a6.html","6c7dfef3a88a89ccc0fc51add91f1875"],["/posts/51203.html","07e34507245ebe97decca560162a3b85"],["/posts/538e5180.html","76e66c646bc1664dc568c3b09d652c3d"],["/posts/5394fce7.html","c5c8399eba519446f3e01a00b77a323b"],["/posts/59037.html","7affcda23b6e068e86c90dc8e67b6d48"],["/posts/60816b5a.html","dda9f7dad037f55164cc2a57a2150e27"],["/posts/6163d4b5.html","d29aa427fd13999f6a2f8babe311c3cd"],["/posts/69978469.html","f0ef9edc5b9050d450a6ce899b6eaf01"],["/posts/6a752619.html","f33b7608e7de2ce03522ce4886ca02bf"],["/posts/7fcb11a7.html","2e1f15396c5ce39980738c0acde497a2"],["/posts/8cc73e65.html","cd04a153f72c90c3daea22762a9a650e"],["/posts/9b621d6f.html","0d5e1f76cf6f38f7c4b408679f3f7f34"],["/posts/a530f7f0.html","fabcacb371360aa04b5994e84363369c"],["/posts/beb5106a.html","b0b80c3a2d208fcd98a1fea1448b11b9"],["/posts/dd845106.html","c1bf776e4937d5ce396f97ce4b1cb057"],["/posts/e35620b3.html","c2d23b7f63ff1991895c9b06218caab5"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","4235ada79ac7e687c217d1fb468b66f4"],["/tags/C-语言/index.html","12f7ddff0ebb90f0c919c6263c386c20"],["/tags/C/index.html","79090f562a466092d0ee435442d7773a"],["/tags/C/page/2/index.html","66f744585ff53bd2f90a295ceb3aa508"],["/tags/C语言/index.html","c29023604c194c170c8dd12af16c4bd3"],["/tags/Hexo/index.html","d0844ab4fededfc00e9b3e81766239f8"],["/tags/Java/index.html","444d60a9a6b36a76d2d5b552c81c4e90"],["/tags/Mac/index.html","13cd929c2a5c1691800aba5e8a4e697f"],["/tags/Parallels-Desktop/index.html","23fa026a51f89588010544afba100614"],["/tags/Python/index.html","7fc494bc52c60d86e851ece1a4d10071"],["/tags/Qt/index.html","0cb75b3c5351293e4861f5ceab80be80"],["/tags/Sql-Server/index.html","f97677836c1e19c7bd90b8e5cae97d7b"],["/tags/abbrlink/index.html","71e2d0f5677d733ffdb1de3897dee759"],["/tags/index.html","55bfb2a576a44bd7ce9de2257c57e4ef"],["/tags/冒泡排序/index.html","74b6909eb496d522f8ac5237afbfb690"],["/tags/双向循环链表/index.html","e44b71ade45be90138e27fb095608b65"],["/tags/双向链表/index.html","e81ac15b385f7dba1dd0c9c0a5e49bdf"],["/tags/希尔排序/index.html","85078d3643d6a843a7e5c34ae4341c29"],["/tags/插入排序/index.html","eb3a2892939026e49dd8fda1b55f321f"],["/tags/数据结构/index.html","a9eadd1ffeeb8059c04a5d4a8162209e"],["/tags/数据结构/page/2/index.html","c87c18f9900b358807803864ab6302d6"],["/tags/杨辉三角/index.html","573c5d6dde7b9fd8d730545b07cdcd38"],["/tags/栈/index.html","4634cd2c0c04d6fb2fbc6b051b9c2179"],["/tags/类模板/index.html","cd189baced1a216c6f9e4c1af6cbfa90"],["/tags/线性表/index.html","aae5f750274491b3d10b6567e02fe6b7"],["/tags/选择排序/index.html","29fadab5d77f56f8661e34693664f331"],["/tags/链式栈/index.html","d49f503fd42d0015c05495b71975fda6"],["/tags/链式队列/index.html","4a106e187271184b4c31a46430428c56"],["/tags/队列/index.html","65a25add49c12f4cd40d13f802babca7"],["/tags/顺序存储结构/index.html","5eef44a48b42582196a39f6e208133b3"],["/top/index.html","a317582c8f2a9c97e721a573705eba2a"]];
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
