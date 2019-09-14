import $ from "jquery";

export const LeftGridArrow = node => {
  var move = node.current;
  var width = window.innerWidth;
  var pixelWidth = width + "px";
  console.log(pixelWidth);
  $(move).animate(
    {
      scrollLeft: "-=" + pixelWidth
    },
    "slow"
  );
};

export const RightGridArrow = node => {
  var move = node.current;
  var width = window.innerWidth;
  var pixelWidth = width + "px";
  $(move).animate(
    {
      scrollLeft: "+=" + pixelWidth
    },
    "slow"
  );
};
