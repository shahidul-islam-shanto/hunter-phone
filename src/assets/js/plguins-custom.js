"use strict";
document.addEventListener("DOMContentLoaded", function () {
  $(function ($) {
    /*=============== magnific Popup start ===============*/
    $("#inline-popups").magnificPopup({
      delegate: "a",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });
    /*=============== magnific Popup end ===============*/
  });
});
