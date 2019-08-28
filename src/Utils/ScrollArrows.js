import $ from "jquery";

    export const LeftArrow = (node) => {
        var move = node.current;
        $(move).animate({
            scrollLeft: '-=456px'
    },'slow');

    }
    
export const RightArrow = (node) => {
    var move = node.current;
    $(move).animate({
        scrollLeft: '+=456px'
     },'slow')
};
