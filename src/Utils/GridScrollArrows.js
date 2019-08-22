import $ from "jquery";

export const LeftGridArrow = (node) => {
    var move = node.current
    console.log(move)
     $(move).animate({
        scrollLeft: '-=1366px'
     },'slow')
};
    
export const RightGridArrow = (node) => {
     var move = node.current
     console.log(move)
     $(move).animate({
        scrollLeft: '+=1366px'
     },'slow')
};
