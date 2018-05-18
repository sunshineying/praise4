import css from "../css/index.css";

class PraiseButton {
  constructor() {}

  handlePraise() {
    axios
      .get("/index/update")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

class Star extends PraiseButton {
  constructor() {
    super(); // 子类必须在constructor方法中调用super方法，否则新建实例时会报错
  }
}

class Thumb extends PraiseButton {
  constructor() {
    super();
  }
}

export {Star, Thumb};
