// build time:Fri Jan 03 2020 19:01:17 GMT+0800 (中国标准时间)
+function(t){"use strict";var i=function(e,f){this.options=t.extend({},i.DEFAULTS,f);this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this));this.$element=t(e);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()};i.VERSION="3.3.5";i.RESET="affix affix-top affix-bottom";i.DEFAULTS={offset:0,target:window};i.prototype.getState=function(t,i,e,f){var o=this.$target.scrollTop();var n=this.$element.offset();var s=this.$target.height();if(e!=null&&this.affixed=="top")return o<e?"top":false;if(this.affixed=="bottom"){if(e!=null)return o+this.unpin<=n.top?false:"bottom";return o+s<=t-f?false:"bottom"}var a=this.affixed==null;var r=a?o:n.top;var h=a?s:i;if(e!=null&&o<=e)return"top";if(f!=null&&r+h>=t-f)return"bottom";return false};i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop();var e=this.$element.offset();return this.pinnedOffset=e.top-t};i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)};i.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var e=this.$element.height();var f=this.options.offset;var o=f.top;var n=f.bottom;var s=Math.max(t(document).height(),t(document.body).height());if(typeof f!="object")n=o=f;if(typeof o=="function")o=f.top(this.$element);if(typeof n=="function")n=f.bottom(this.$element);var a=this.getState(s,e,o,n);if(this.affixed!=a){if(this.unpin!=null)this.$element.css("top","");var r="affix"+(a?"-"+a:"");var h=t.Event(r+".bs.affix");this.$element.trigger(h);if(h.isDefaultPrevented())return;this.affixed=a;this.unpin=a=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(i.RESET).addClass(r).trigger(r.replace("affix","affixed")+".bs.affix")}if(a=="bottom"){this.$element.offset({top:s-e-n})}};function e(e){return this.each(function(){var f=t(this);var o=f.data("bs.affix");var n=typeof e=="object"&&e;if(!o)f.data("bs.affix",o=new i(this,n));if(typeof e=="string")o[e]()})}var f=t.fn.affix;t.fn.affix=e;t.fn.affix.Constructor=i;t.fn.affix.noConflict=function(){t.fn.affix=f;return this};t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this);var f=i.data();f.offset=f.offset||{};if(f.offsetBottom!=null)f.offset.bottom=f.offsetBottom;if(f.offsetTop!=null)f.offset.top=f.offsetTop;e.call(i,f)})})}(jQuery);
//rebuild by neat 