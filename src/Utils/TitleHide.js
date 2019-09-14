export const TitleHide = node => {
  let title = node.querySelector("h1");
  let preview = node.querySelector(".collection-item");

  if (preview) {
    preview.addEventListener("mouseover", function() {
      setTimeout(function() {
        title.setAttribute("style", "opacity:0; ");
      }, 250);
    });
  }

  if (preview) {
    preview.addEventListener("mouseleave", function() {
      setTimeout(function() {
        title.setAttribute("style", "opacity:1; ");
      }, 250);
    });
  }
};
