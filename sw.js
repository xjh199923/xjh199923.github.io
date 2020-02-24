/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","02667a2741602e66d91b8061a0e97659"],["/archives/2019/10/index.html","f0b76ff26c918721a85029e28be6174c"],["/archives/2019/11/index.html","a459827fbcd84f6df3e80e2e7407c713"],["/archives/2019/12/index.html","677546f641e30d4ef8519d29f51b02d2"],["/archives/2019/index.html","09cfa01194ae4f9a61555dcdac1c3bcc"],["/archives/2020/01/index.html","e30827b93d7e548d8dccb22e99cc1efb"],["/archives/2020/02/index.html","9f764d7cfc8551acca217f5c7e975ba8"],["/archives/2020/index.html","c8fc026da2ae3bcee19107c6e3357718"],["/archives/2020/page/2/index.html","811aac742b3b3b3a458baca8df1dd882"],["/archives/index.html","9857cb9864dbed3183fddbc617554d7a"],["/archives/page/2/index.html","f25a7e790268fc261e60cd7c6f76ed02"],["/archives/page/3/index.html","6a6c4e1c7e731315eb729b0f01140f3d"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","73fd7ac515532d278e9b09333c43e82a"],["/categories/C语言/index.html","258f79e3e1356257d16156ccf976c9ef"],["/categories/C语言/数据结构/index.html","76f52960c0e7afb017c9505167cdf42f"],["/categories/Hexo/index.html","9685a261e2f203460f63511f1c1b5873"],["/categories/Mac/Qt/index.html","625d16c782dc4b07d4606343a7275411"],["/categories/Mac/Sql-Server/index.html","8db2f29b598267e7b9c0cd2397af98c4"],["/categories/Mac/index.html","c2edf8260ebfa38a89fe8467ce45dd30"],["/categories/index.html","4b52f863235216b5abf31a568950bdc7"],["/categories/数据结构/C/Java/Python/index.html","e49d86c0db06d1da1701fc6341a3d7db"],["/categories/数据结构/C/Java/Python/排序/index.html","0b2815c2f0113c3f2303aa5f979eee13"],["/categories/数据结构/C/Java/index.html","1a2ff0ebdb74a03c30cd333a555c4206"],["/categories/数据结构/C/index.html","880a78bbe376725daf2e125848ec127f"],["/categories/数据结构/C/page/2/index.html","880868531457f310f2210f7d7a75a596"],["/categories/数据结构/C/双向循环链表/index.html","b9ecba69a7040324ff2d55444c4ac53e"],["/categories/数据结构/C/双向链表/index.html","945924452a9e9055d93107a2160087a1"],["/categories/数据结构/C/顺序存储结构/index.html","debc66eb61fb26095d6ff0d3e9849cb4"],["/categories/数据结构/index.html","f1db9a51637850d0c64f2000b0b578a3"],["/categories/数据结构/page/2/index.html","d1f581dedd384ec128775cada0d5b841"],["/categories/玩转Mac/index.html","25307c81db1cf20703eca31235d613b1"],["/categories/链式栈/index.html","7c3b64c354720b3fa6cfc37a75c59a0c"],["/categories/链式栈/数据结构/index.html","c534c0e1b7feb7a2de5e843249d8556a"],["/categories/顺序栈/index.html","9fabd38811a923afd3f6090b57cf53c9"],["/categories/顺序栈/数据结构/index.html","938ee35f589b982f244318df5d2e1741"],["/categories/顺序队列/index.html","f35bbcaabd91c5914ccfbce5e8ea80b3"],["/categories/顺序队列/数据结构/index.html","6cdd961229412668bacc169f9254b288"],["/css/main.css","56dbf3fed7785cbb2268f8eb2de379b7"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","e7d49a7a8fb8001545c572e197591863"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b43870dca860e13f057a2a853bb979d4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2c64cb2b3f00ddb19836a1f829126480"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8ec40f59d82320e2ef5700da3a68e381"],["/js/src/algolia-search.js","dce569c64b02edf1a8184247e6365d40"],["/js/src/bootstrap.js","4e29f924c3415b78302333aa98eff29a"],["/js/src/bubble.js","3ac0ca9714ac29dd5a75acdbe5caf942"],["/js/src/clipboard-use.js","25070ca763b1321d753e2209daa5bbe7"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","af55c2bdd4559ad22b2c9eb73201c886"],["/js/src/exturl.js","09fff8e9b80ed5825ec469bf8043699a"],["/js/src/hook-duoshuo.js","89f888c164d01b7a0c3e743aa45ea433"],["/js/src/js.cookie.js","71f7e7886caeddf2578949aaaf8750e3"],["/js/src/linkcard.js","34671445f8202702644fd7ffe9aafc19"],["/js/src/motion.js","91111a0ed0412d3c7c3e1294c7833d26"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","bec71c01203f29aa393abc152f1e0ade"],["/js/src/schemes/pisces.js","636de99e1d3f95026a974fe9a54ca856"],["/js/src/scroll-cookie.js","1787abce7ee72a0aeb93376a0fd8ffed"],["/js/src/scrollspy.js","69fc22abc0fa605c65341e4f30c1c9cc"],["/js/src/utils.js","8c8ff3eb31cfb863e234ec0fbe416a07"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","696e07fbfcd28650b3b7bd2465f9636e"],["/lib/Han/dist/han.js","50766b00059cc881a9d00ceebfe30246"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0510a1d447f783b586684ac8ea170bfd"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","535dae5c8c94a990136fff376e9bf991"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","197564782b0ad924d8d075e243f2a325"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","21ee86ebd173954144240b796c8068c6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","babb5b6ee8600bb79422d14b9aed2559"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","28ca4d294449d52330bde0aabaaf3635"],["/lib/fancybox/source/jquery.fancybox.css","00870bb514285d501dc9a8a5c1b437a3"],["/lib/fancybox/source/jquery.fancybox.js","8c0f3bb92a2ac4dd779f1277ee7c6f35"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","270963652483113673522aaac1abf9bf"],["/lib/fastclick/lib/fastclick.js","34b2e13149d845f051f6ac632b6dd54c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bf47f256d6caa77fa08c0e307e2a5954"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","dae40106b5a62c03b03338ad849124df"],["/lib/jquery_lazyload/README.html","dd7ff60dc99ab59ff9597705abcbd607"],["/lib/jquery_lazyload/jquery.lazyload.js","a61af73bdb4a25ee25fef8626b1bf6fd"],["/lib/jquery_lazyload/jquery.scrollstop.js","f4c9b4eb2411bf065e44741840f3e23f"],["/lib/needsharebutton/font-embedded.css","f4252793b74a8c90112bb18e04d83569"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","eb4b97ec5cb9ea8be58f82b0db3e8524"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ac5e4aca8cc6f818c3ecf1f02b10821a"],["/lib/velocity/velocity.js","a0c4f7cdb5b8e6d157a9373e37c4c352"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","13e77c73aee876688655c8a992421299"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","9e862beb8678eed5ffab710bd7231aed"],["/links/index.html","65adade69ff08a728ae071e03428a719"],["/live2d-widget/README.html","c51c96edbb8a7024eb185b037d5dba29"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d50675479a635ea55bd3b6f3ca7c047b"],["/live2d-widget/demo/demo1.html","251a2d39afa37c522764d31b8c7db5d1"],["/live2d-widget/demo/demo2.html","79c057fdecb2799859e98699329e5572"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","f364acdba8dfda49cd4b910805165d06"],["/movies/index.html","e660ce13fb395f58d6e9c56644561db4"],["/music/index.html","89aa92febab9ed7d048aab905e7806ce"],["/page/2/index.html","ba5044dc7e8a3c41ff2d3b43b065e6bf"],["/page/3/index.html","6e73d65095a4f052aaf38ff6268451f9"],["/page/4/index.html","6c6037706c043b82966e78b1060bd898"],["/photos/index.html","5926f6c8a95c122c40dbd51b58117cb2"],["/posts/14311.html","8089947d260cdce3821cc99e56a8def0"],["/posts/15468.html","c406b6628789482847b492f340cf017f"],["/posts/16107.html","1b68c35c80bb39f9429fdc952fc7708f"],["/posts/201e1121.html","b62e8cbf91120e06ebd8bbf35d35c4b9"],["/posts/20352.html","00b5610b5b34edd6b8e7f2d9fb9d61e5"],["/posts/21238.html","926497ab4c81b8c83106592045c9d478"],["/posts/22281.html","97ed8c79086e6f1533d8d1f21540e095"],["/posts/278598dc.html","80cad6855bd696e84d9aaa3544c28843"],["/posts/2d063bc3.html","278e07ff0a3bcf0ca269f38d2ee57e88"],["/posts/30c404a6.html","549d367346554b36c8007d56423f7eea"],["/posts/51203.html","81c2461d675ac2d70c2ee3ebe0ed9f35"],["/posts/538e5180.html","ef4b8bdf7ede025ac57f291eb31f13c7"],["/posts/5394fce7.html","f6c7276aa90ed72e625b0255ee80a049"],["/posts/59037.html","2364d5d6826413bf019efe360247d86f"],["/posts/60816b5a.html","1ef92017578562c2434ed58ce8f5aac3"],["/posts/6163d4b5.html","b77a1100e38d928445a1e6018f1b36bd"],["/posts/69978469.html","3621003b90fd235d6a908bbb8d6d68a7"],["/posts/6a752619.html","960e9850e98ce9346a949337181561eb"],["/posts/8cc73e65.html","11f77afec8570fd1dc2fa375a00a53c6"],["/posts/9b621d6f.html","6c3745641c5d0cd01db245af273cfc33"],["/posts/a530f7f0.html","64dae0546d4276283fb0d14a1e429cda"],["/posts/beb5106a.html","8c7df18cf5d3304daced2c3c5ff76df4"],["/posts/dd845106.html","d1deeaf883eba8b840d8f210dc79ad49"],["/posts/e35620b3.html","588bed41e6adf1e8a85ca6411707ff8a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","78c0dd766a57d418049863be38aece8e"],["/tags/C-语言/index.html","0ec8742108266ace057afc8efecee3df"],["/tags/C/index.html","758ea44c01984ce6f2ebd245ec4e4396"],["/tags/C/page/2/index.html","9a3c200b9c84e56e44562e12c3b92923"],["/tags/C语言/index.html","9a03d126ca70225562eab15375f88e3d"],["/tags/Hexo/index.html","965e21ef3b5556eab8b7f229ee63c23f"],["/tags/Java/index.html","1048a920d31d9cb71fc149f1b622687c"],["/tags/Mac/index.html","993824ef38ed34266ff84fb7b3f13ab6"],["/tags/Parallels-Desktop/index.html","94018935f2f070d3219d541800d4fb82"],["/tags/Python/index.html","c1621218522186ee207eca338ae6cd19"],["/tags/Qt/index.html","fe05cc21756c73b2ff86aab73a7bde72"],["/tags/Sql-Server/index.html","29eeec78acd300f98a51b0ae2351b914"],["/tags/abbrlink/index.html","55867bcf11ad8bc20c96a7edc4b42da9"],["/tags/index.html","46931a83cedfc678364d138b1ac3999f"],["/tags/冒泡排序/index.html","0651871a1d23b5468f27e32e72c41a40"],["/tags/双向循环链表/index.html","fb5b14c350dc85034e06fdfd43ef5102"],["/tags/双向链表/index.html","9947648fd5efa3825efa9d0061551c3c"],["/tags/希尔排序/index.html","e9f5606faf30b4f2ad3c5180661619c9"],["/tags/插入排序/index.html","2baaa133443fdfcdc6afb95e92c82252"],["/tags/数据结构/index.html","a9d647b1fc48233c8faab5672219f517"],["/tags/数据结构/page/2/index.html","3953d973a8c6670b1c21f8f6795d145d"],["/tags/杨辉三角/index.html","c470cd5a6307358e0194865579c9b52a"],["/tags/栈/index.html","0b5b028fb4091da7d2d007167e3ccfaf"],["/tags/类模板/index.html","d253e829dfcc7ce984786507c37cbb51"],["/tags/线性表/index.html","2652ac2b365c749a75fb7d17263a030a"],["/tags/选择排序/index.html","aba2e2c5ffb97ee01e2f56ec2a67a86e"],["/tags/链式栈/index.html","05f4f230807ffa9054bfac036453f728"],["/tags/队列/index.html","5cf5d8537808dea10041368f10478a6e"],["/tags/顺序存储结构/index.html","56ea00a2600fe8aab4670703ff252f9b"],["/top/index.html","34b5c5b2b751ff2d71fd951ddf1fa0c1"]];
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
