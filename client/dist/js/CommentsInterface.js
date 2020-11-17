!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/legacy/CommentsInterface.js")}({"./client/src/legacy/CommentsInterface.js":function(e,t,n){"use strict";(function(e){!function(e){e(function(){e.validator.methods.url=function(e,t){return this.optional(t)||/^(?:(?:(?:https?|ftp):)?\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)},e(".comments-holder-container form").each(function(){e(this).validate({ignore:":hidden",errorClass:"required",errorElement:"span",invalidHandler:function(t,n){e("html, body").animate({scrollTop:e(n.errorList[0].element).offset().top-30},200)},errorPlacement:function(e,t){e.addClass("message").insertAfter(t)}})}),e(".comment").children(".info").not(window.document.location.hash).nextAll(".comment-replies-container").children(".comment-reply-form-holder").hide(),e(".comments-holder").on("click",".comment-reply-link",function(t){var n=e(".comment-reply-form-holder"),r="#"+e(this).attr("aria-controls"),o=e(r).closest(".comment-reply-form-holder");e(this).attr("aria-expanded",function(e,t){return"true"==t?"false":"true"}),t.preventDefault(),o.is(":visible")?n.slideUp():(n.not(o).slideUp(),o.slideDown())}),e(".comments-holder .comments-list").on("click","div.comment-moderation-options a",function(t){t.stopPropagation();var n=e(this);if(n.hasClass("delete")){var r=ss.i18n._t("CommentsInterface_singlecomment_ss.DELETE_CONFIRMATION");if(!window.confirm(r))return t.preventDefault(),!1}var o=n.parents(".comment:first");e.ajax({url:e(this).attr("href"),cache:!1,success:function(t){n.hasClass("ham")?(o.html(t),o.removeClass("spam")):n.hasClass("approve")?(o.html(t),o.removeClass("unmoderated")):n.hasClass("delete")?o.fadeOut(1e3,function(){o.remove(),0===e(".comments-holder .comments-list").children().length&&e(".no-comments-yet").show()}):n.hasClass("spam")&&o.html(t).addClass("spam")},failure:function(e){var t=ss.i18n._t("CommentsInterface_singlecomment_ss.AJAX_ERROR");alert(t)}}),t.preventDefault()})})}(e)}).call(t,n(0))},0:function(e,t){e.exports=jQuery}});