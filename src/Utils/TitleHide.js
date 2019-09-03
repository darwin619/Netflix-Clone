import $ from "jquery";

export const TitleHide = (node) => {
	let title = node.querySelector('h1');
	let preview = node.querySelector('.box');

	preview.addEventListener("mouseover", function(){
    setTimeout(function(){
        title.setAttribute("style", "opacity:0; ")
    }, 250);
});

	preview.addEventListener("mouseleave", function(){
    setTimeout(function(){
        title.setAttribute("style", "opacity:1; ")
    }, 250);
});
	
	// var parent = node.querySelector('.preview');
	// parent.removeChild(parent.lastElementChild);
	// var child = parent.querySelectorAll('.box');
	// console.log(parent)

	// 	parent.addEventListener("mouseover", function(){
 //        child.forEach(item=> item.setAttribute("class", "late"))
 //    });
}