export const TitleHide = (node) => {
	let title = node.querySelector('h1');
	let preview = node.querySelector('.box');
	preview.addEventListener('mouseover', function(){
    title.setAttribute("style", "opacity:0; ")
})
	preview.addEventListener('mouseleave', function(){
    title.setAttribute("style", "opacity:1; ")
})
	node.querySelector('.box');
}