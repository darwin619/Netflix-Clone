import $ from "jquery";

export const LeftArrow = node => {
  var move = node.current;
  var margin = parseInt($(move).css("margin-left"));
  console.log(margin);

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (margin < 0) {
      $(move).animate(
        {
          marginLeft: "+=330px"
        },
        "slow"
      );
    }
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    if (margin < 0) {
      $(move).animate(
        {
          marginLeft: "+=275px"
        },
        "slow"
      );
    }
  }
};

export const RightArrow = node => {
  var move = node.current;
  var margin = parseInt($(move).css("margin-left"));
  console.log(margin);

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (margin > -1650) {
      $(move).animate(
        {
          marginLeft: "-=330px"
        },
        "slow"
      );
    }
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    if (margin > -1800) {
      $(move).animate(
        {
          marginLeft: "-=275px"
        },
        "slow"
      );
    }
  }
};
