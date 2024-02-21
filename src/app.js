/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let excuseGenerator = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoInx = Math.floor(Math.random() * who.length);
    let actionInx = Math.floor(Math.random() * action.length);
    let whatInx = Math.floor(Math.random() * what.length);
    let whenInx = Math.floor(Math.random() * when.length);
    return (
      who[whoInx] +
      "" +
      action[actionInx] +
      "" +
      what[whatInx] +
      "" +
      when[whenInx]
    );
  };
  document.querySelector("#excuse").innerHTML = excuseGenerator();
  console.log(excuseGenerator);
};
