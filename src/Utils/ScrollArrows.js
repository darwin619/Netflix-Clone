import $ from "jquery";

export const LeftArrow = (node) => {
    var move = node.current;
    var exclude = $(move).not($(move).children('.title'))
     console.log(exclude)
    $(exclude).animate({
        scrollLeft: '+=256px'
});
}
    
export const RightArrow = (node) => {
    var move = node.current;
    var title = move.querySelector('.title')
    var arrow = move.querySelector('.fix')
    $(move).remove(title,arrow).animate({
        scrollLeft: '+=256px'
     })
};
