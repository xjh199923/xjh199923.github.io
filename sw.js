/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7be90865c84e70722dcb10f15b1b8628"],["/archives/2019/10/index.html","ac3add71848e0112a21c8719ab74e630"],["/archives/2019/11/index.html","3ab800f133a84a2fc92506797c872832"],["/archives/2019/12/index.html","24181de37a746bc93eb9a95115a5e172"],["/archives/2019/index.html","460314241a20a309d7c00f386a5a46e9"],["/archives/2020/01/index.html","dcf2c68e907eb03595fb9d5c8976bdf7"],["/archives/2020/02/index.html","ac20d3d9c02c6c3ae81e6f5d05ee4766"],["/archives/2020/03/index.html","129d97f4471003e151cb57497768258e"],["/archives/2020/index.html","233d362f3fe2e9ff38555541aca5fd75"],["/archives/2020/page/2/index.html","e05f57eaac113ed788c07cfdef7c5ef5"],["/archives/index.html","6337b300db835c05afc193641c166b69"],["/archives/page/2/index.html","cb9bde8298e709e3fbf7a562076c05ec"],["/archives/page/3/index.html","4377f445655aa6964c5b5a1ae9336fac"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","555068f8e608b555347e69191557247b"],["/categories/C语言/index.html","726d669c26a59a7307c92ac05b63ce60"],["/categories/C语言/数据结构/index.html","c52c1c91e10cf97709ac2743fb3497ed"],["/categories/Hexo/index.html","78441bc45b0d245f72945bfff72e075b"],["/categories/Mac/Qt/index.html","d1400e631f91fbc99b979b771dffdaac"],["/categories/Mac/Sql-Server/index.html","06b4c5275e4b5524be8594db09db4d9b"],["/categories/Mac/index.html","088183770b0e97e57516454d0ab6b974"],["/categories/index.html","efdd714933adf9b4870794dde75c1f57"],["/categories/数据结构/C/Java/Python/index.html","948e5b5b9c54f7c7e5b8798321f1b01f"],["/categories/数据结构/C/Java/Python/排序/index.html","1e941400d44d6c41ed5ea0ddfee1fe3c"],["/categories/数据结构/C/Java/index.html","8558dcd2f259ee09184174cb9c9831cd"],["/categories/数据结构/C/index.html","9a9ae8a9747ae243b6fc9592bdbb5eed"],["/categories/数据结构/C/page/2/index.html","a5b6639845ba54c0889e4e2055737c82"],["/categories/数据结构/C/双向循环链表/index.html","138d61de91d079036da9be6c4b0a4d3a"],["/categories/数据结构/C/双向链表/index.html","deb2926342287d250293c3009afe08c3"],["/categories/数据结构/C/顺序存储结构/index.html","08e389c921ceb515876f36495582c37c"],["/categories/数据结构/index.html","7bbdb3afe64f761433d6422a7d129902"],["/categories/数据结构/page/2/index.html","7db1d91f7cbc2c20c77b798631206e4b"],["/categories/玩转Mac/index.html","fe9f4574f47c4cbef636bba0666c09e9"],["/categories/链式栈/index.html","7ad549fc0f351c3d45075142b41df89b"],["/categories/链式栈/数据结构/index.html","188612d32db7e029e4da072c8285dcf5"],["/categories/顺序栈/index.html","be519445b64c41f5c1692a33aff6397b"],["/categories/顺序栈/数据结构/index.html","982e509099b7cd35d0998e852bae1a59"],["/categories/顺序队列/index.html","c8204736730bb7e4272b76865d148534"],["/categories/顺序队列/数据结构/index.html","b15bf8e81cbbeba94d01b23cd937be45"],["/css/main.css","693e224d9e328ef2621ebe810c7366a9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","68ea7d44d6d7fdad11d2fffdde4c0288"],["/essay/css/animate.css","6cea915825f29b8436f0ccf6e053e3d2"],["/essay/css/icomoon.css","b5dc007d62cc1bfc52c100a9630c2b9a"],["/essay/css/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/css/magnific-popup.css","bfc851a5bf981194410ca3c673da8321"],["/essay/css/salvattore.css","6fe7cb15404dae068eee0460135af344"],["/essay/css/style.css","b26f2bf3e80d7e38128e7668c902af58"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/essay/fonts/bootstrap/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/essay/fonts/bootstrap/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/fonts/icomoon/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/essay/fonts/icomoon/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/essay/fonts/icomoon/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/essay/fonts/icomoon/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/essay/fonts/icomoon/icomoon/demo-files/demo.css","071f156b6f6f6348827fa08b52d5cb35"],["/essay/fonts/icomoon/icomoon/demo-files/demo.js","adede6293d434c49dd135e4049dfab17"],["/essay/fonts/icomoon/icomoon/demo.html","ecd226f8297df9254a54747f5620c240"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.eot","d0cd0956eb80f44ee7e0046438501272"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.svg","35f0ad6edb43ce090196997dfe7d5602"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.ttf","85941573fae81a23eb2b3d5b4a2d3468"],["/essay/fonts/icomoon/icomoon/fonts/icomoon.woff","ecb7593fb8056e80f272694aa6ef92b3"],["/essay/fonts/icomoon/icomoon/style.css","62f7d086075e5a90549178e0f461c36f"],["/essay/fonts/icomoon/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/fonts/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/images/img_1.jpg","0fd6f56571359e5cc037bb83b234fb0d"],["/essay/images/img_10.jpg","8d1f9612dd3aa5eb1412d29083042c73"],["/essay/images/img_11.jpg","6ec3a958372d4612dbaef0ff6852ffca"],["/essay/images/img_12.jpg","ced15a4261eebd442ac0fabfea771115"],["/essay/images/img_13.jpg","3e3385199e8a90f687ca3d52946816d1"],["/essay/images/img_14.jpg","fab9d290c1a8af7550980ddece1fec03"],["/essay/images/img_15.jpg","f7db793b51f98607583d0b6d6f8f652a"],["/essay/images/img_16.jpg","5c2ea065c7c103adf941fd7aaa4d694a"],["/essay/images/img_17.jpg","5b37e6337af7741ac48e52be0437ec3b"],["/essay/images/img_18.jpg","64818da5d0636b44b8b85755847df9c1"],["/essay/images/img_19.jpg","aa194c7662732bcf681c432199b2009e"],["/essay/images/img_2.jpg","6509a6506b26b55f083b1d58acfcf366"],["/essay/images/img_20.jpg","ec18f1379c261f7ca798adbe6c8aa2df"],["/essay/images/img_21.jpg","91b5a0f826a7e260b32ed3119f9202ca"],["/essay/images/img_22.jpg","4819d2ff52d7b4c74d08773dc28d4707"],["/essay/images/img_23.jpg","ec04cf3d6d710b98ff93ea86ebfbbfff"],["/essay/images/img_24.jpg","ae7997a269313671e3785f506fa24e79"],["/essay/images/img_25.jpg","14b22f05fe499e38237fc06261b7f592"],["/essay/images/img_26.jpg","1b378e82d587172eb42093e4d5412418"],["/essay/images/img_27.jpg","65fc7f13d5ac1936fc864bdc88e382e9"],["/essay/images/img_28.jpg","766f5c22428dbf13986ad7e1b1e7d61f"],["/essay/images/img_29.jpg","61eea66d37c5f556d5571c10ec8a469e"],["/essay/images/img_29_large.jpg","58afbbbf51466c4f330947bd4dc233d0"],["/essay/images/img_3.jpg","b4a9c0cb6748f29358d4290c103ef77c"],["/essay/images/img_30.jpg","109fa0a0c22992bf3db06d92fe687c70"],["/essay/images/img_4.jpg","2fd923a6b53f1a66424be7ef98489804"],["/essay/images/img_5.jpg","db5e773ba8e95a8a51d8d55c3cab1b20"],["/essay/images/img_6.jpg","28a66f01315b550c1bd077cb0ecad83f"],["/essay/images/img_7.jpg","8685e94e9dc72bd1c76e485fd37c3c3d"],["/essay/images/img_8.jpg","f4f52c5a3e68f7f63ffcb25302d8fdb9"],["/essay/images/img_9.jpg","06f13ec2dc9c07f2ed87eca4381281af"],["/essay/images/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/index.html","dab7e2c5ecc73e67c995f4721ad2add2"],["/essay/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/essay/js/index.html","7c3e7a1c850f26aa9d7b727802422cc7"],["/essay/js/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["/essay/js/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["/essay/js/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["/essay/js/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["/essay/js/main.js","618e75d7d69c5aa3b8fc44d441ae70af"],["/essay/js/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["/essay/js/respond.min.js","fda355038387a38685fb8213c2c2374b"],["/essay/js/salvattore.min.js","33c617953c5a4858f09586eda7619117"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","73a202f657acde1e3330580f838483e4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","e81ef3349207d84fe93b898abb0c62d8"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0547b03aee2d1db09c39da5b88dd9a38"],["/js/src/algolia-search.js","7a62c27e09d2ae403ed5f6959f0735d4"],["/js/src/bootstrap.js","17013cb36e2c1d5d09a119d1279ec958"],["/js/src/bubble.js","de3dfe5b6f3cdd92761dc1c83182eaaa"],["/js/src/clipboard-use.js","a475abcc8f91e69886bf78b1f53ab790"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","44826ccd2f79e2fa9be3e5c8c08a4ab8"],["/js/src/exturl.js","9912f64356253458179e17ce69b3fd15"],["/js/src/hook-duoshuo.js","d14d5fa0cbe9fede3fe5491800fd6471"],["/js/src/js.cookie.js","5dd9366385ea1ab4669ebc6b6f2d740f"],["/js/src/linkcard.js","42dab9a6638e02ab57ff79bb11610072"],["/js/src/motion.js","cdc420292146c774553a5a27b64b8aae"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","eac1a6d3011fbf8ffa0685fbec0736dd"],["/js/src/schemes/pisces.js","a3e1405ed706542cf11e8b4c9b690a02"],["/js/src/scroll-cookie.js","e0fe04f15c5ae4400f8f6653837070c9"],["/js/src/scrollspy.js","79c84739f45f4684de77a57af54060d1"],["/js/src/utils.js","61dad6e582090d76b37b1a48f367ba02"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","8f935f8179af5dcb2d78be8b4d8e496b"],["/lib/Han/dist/han.js","abe30616bd51708339b27e37ebf6e252"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f914a772caa0b4f8b1daa99f6f71b9cd"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3b7ed2dec746c1da9d5c1cf3e483361e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","28c17ce513cae72332d4d951dad018ef"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5005e277cd2991aa24beec0f6e9eed40"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","51861b61f41fd1e3ca3bdfff7e022e06"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5acbd0af1befce7f6bc526046e7780b2"],["/lib/fancybox/source/jquery.fancybox.css","43f76b5e7175f71a42fbca1d0cf8941d"],["/lib/fancybox/source/jquery.fancybox.js","203b4ff81249f39f9d054c9fca015b8e"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f970263b63bb8d51debe5cc9ed73e41d"],["/lib/fastclick/lib/fastclick.js","3c5c11203ec173fc1860146bd50f3bf0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","eef16463cde6e814a9afef63985a5807"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d86689d0832b9e7f074ee36860e1a082"],["/lib/jquery_lazyload/README.html","fd2839b5fb0bb819b54412bbfe1f0986"],["/lib/jquery_lazyload/jquery.lazyload.js","522b878197bc8dcb41c32e4ae6bee686"],["/lib/jquery_lazyload/jquery.scrollstop.js","a61db81835481735b798bdbea509ea1a"],["/lib/needsharebutton/font-embedded.css","b8d912289f986673741e81b961f2edbc"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","dbbba87a3fa72b7a33b63000efe25c87"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8600259fbe1d46bd57cba2c8e9a27d21"],["/lib/velocity/velocity.js","f455e915afdccc0edfdb5c4fbf6fb69d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4b37b9c1f1d3fe6f2e0cf9228ed3ba97"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4a8099b0d8475bd017515b589e2bfb20"],["/links/index.html","8e54822fe4a16e179aa1552f47794b22"],["/live2d-widget/README.html","d18e657d7f8f8d0800ffd785d2994a9d"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","dbd9ffe54e1bca2ed8bddd4c9513b708"],["/live2d-widget/demo/demo1.html","592773218be735f63b78df3dbc6d4e0d"],["/live2d-widget/demo/demo2.html","87ad164b8cbcd1a96b7dac125cd65241"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","2c3d7f14637e715820811aea40a0f677"],["/movies/index.html","5d18d6f4e953524cde9acee40ed04f72"],["/music/index.html","5fdaaa440cc6cdf7e347a5fc1bc9709c"],["/page/2/index.html","7601b6fe3cae6e5ab6e5d288e1a80aa8"],["/page/3/index.html","552d3dcd9eb3f8882c2d54be30d68ddc"],["/page/4/index.html","032ccaca80ee68e9cd51aa5825e56de8"],["/photos/index.html","32eb5d587715f41c54c9d2e4d3327122"],["/posts/14311.html","ab4ed8ee5708e76b067634dbb7a44663"],["/posts/15468.html","661bf2c086a87186d779e2bc7c7434fa"],["/posts/16107.html","a5314a786430796df7eb109fa77bb623"],["/posts/201e1121.html","1f18b850a6ad020809dfb8ea2f341935"],["/posts/20352.html","e4c091ee205d0e8642993c6f5d62ae30"],["/posts/21238.html","6ad69d10e98317d248eaa3261df4e928"],["/posts/22281.html","42a3131d16caff5d11366c890de963cd"],["/posts/278598dc.html","c310a7da536b0d6ec011c6729dee76fd"],["/posts/2d063bc3.html","f910afb059f75ef5c7a0a8ab4b3fd826"],["/posts/30c404a6.html","0a87414f01eb022a5cf999241b45f8f8"],["/posts/51203.html","ecfdaa7397cfcca1062f9e1d3888b5e4"],["/posts/538e5180.html","6be8a1468bc4577fde267b9fe84bea8d"],["/posts/5394fce7.html","2a21910156964865de4ecb8e08f4ca62"],["/posts/59037.html","31bcb3b6f80864d89e1dbaf7c2987524"],["/posts/60816b5a.html","1b9f30d95063094f95bf6bca60cc0909"],["/posts/6163d4b5.html","56b499e445e8a550a2a8dfa2c2a9fd42"],["/posts/69978469.html","f5d77b938d452639f8d85549a782b38a"],["/posts/6a752619.html","dceb41af4aecc56ea6eea845634783a2"],["/posts/7fcb11a7.html","b36fe17db6725bcce2ba826949fc66c9"],["/posts/8cc73e65.html","10776779e13486b0fcb97ff850aca713"],["/posts/9b621d6f.html","10dadfc3f31668d25bf4685a833df46c"],["/posts/a530f7f0.html","312a6b4993f3bbcc7d0c8b032ffd4025"],["/posts/beb5106a.html","b988f99b1f889e67887f20bc2cf2b8a9"],["/posts/dd845106.html","159f45fc80da2a84ff61ebd8ca7e527e"],["/posts/e35620b3.html","4e35cf52080cd523c70e95fc505fecd3"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","60c690a300078b446b1b200fa82aacae"],["/tags/C-语言/index.html","3cd022a1116346b2cac9df0679ab3df1"],["/tags/C/index.html","99a99a5cd0943a10bca7969826eb4901"],["/tags/C/page/2/index.html","e9a9ba204b5c982a84331801db65a995"],["/tags/C语言/index.html","131c2b1a8121e5e499d2926c514ea141"],["/tags/Hexo/index.html","955b610d079718f7352f4ec3f9a69e2d"],["/tags/Java/index.html","c88ed4051aae5fa9e35212a8c70b933a"],["/tags/Mac/index.html","07ec3dc83989e041f56f223694f45dc9"],["/tags/Parallels-Desktop/index.html","3aeeae89678ac41c87c49351cbfb22de"],["/tags/Python/index.html","eee77b8bec39c0c3b768a1d466466ec9"],["/tags/Qt/index.html","097aafb5f5b9f8dd41d1ae3ba1724dcd"],["/tags/Sql-Server/index.html","77f8487b70fdccee6ba84f50853abe91"],["/tags/abbrlink/index.html","6a8bef4a9b3b61b470adc2e3a6faae31"],["/tags/index.html","c5c678320178f5542f3eb6f49dd4b0a8"],["/tags/冒泡排序/index.html","992d512ad9446a2bff838a6b47c7be0a"],["/tags/双向循环链表/index.html","e6e226c54e949bb9090085bf8bda1def"],["/tags/双向链表/index.html","39cd3d1f900fd482eb9b6d0b178b3fd4"],["/tags/希尔排序/index.html","20af4d191da0516257e8266571576816"],["/tags/插入排序/index.html","640cf07ba9a72d33e62161b8ba751b89"],["/tags/数据结构/index.html","25dc460b3a7e62d266b5864082726913"],["/tags/数据结构/page/2/index.html","1db099e7d5f9cfccc25c5a02bd9433e0"],["/tags/杨辉三角/index.html","65d0b65712571254c154438b529260ba"],["/tags/栈/index.html","f83e30114f99b4b7e4162a694665d4bf"],["/tags/类模板/index.html","8d5400e7238edd7e26cc1a1bbfd37ebb"],["/tags/线性表/index.html","b5ba82af59fd52b4f105606e4c7657e7"],["/tags/选择排序/index.html","2ad22b5657387981f89026083acf9581"],["/tags/链式栈/index.html","bee749514ab2f69e1c95c68e7dfc57dc"],["/tags/链式队列/index.html","c7a9d139958b0fe1941c8c45c357b7da"],["/tags/队列/index.html","d94f4ffbd4e5f59aed14d14979837b58"],["/tags/顺序存储结构/index.html","a773bfe55698de5eb387a736dc7d5139"],["/top/index.html","256e3fe2105dd62f00466f36294b7190"]];
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
