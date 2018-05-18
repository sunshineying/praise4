import {Star} from "./PraiseButton.es6";
const p = new Star();
let t = "";

xtag.register("x-star", {
  content:
    '<div class="container">' +
    '<div id="star"></div>' +
    '</div>' +
    "<span class='hide' id='animation'>+1</span>",

  lifecycle: {},

  methods: {
    praise: function() {
      let self = this;
      p.handlePraise();
      let animation = self.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function() {
        animation.className = "hide";
      }, 800);
    }
  },

  events: {
    click: function(e) {
      let self = this;
      if (e.target.id == "star") {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          self.praise();
        }, 800);
      }
    }
  }
});
