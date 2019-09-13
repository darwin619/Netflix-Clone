import $ from "jquery";

export const LeftArrow = node => {
  var move = node.current;
  var margin =  parseInt($(move).css('margin-left'));
  console.log(margin)
  if(margin < 0) {
    $(move).animate(
      {
        marginLeft: "+=330px"
      },
      "slow"
    );
}
};

export const RightArrow = node => {
  var move = node.current;
  var margin = parseInt($(move).css('margin-left'));
  console.log(margin)
    $(move).animate(
      {
        marginLeft: "-=330px"
      },
      "slow"
    );
};
