
// event function of button onclick
function scrollInto(id) {
 var elmnt = document.getElementById(id);
  elmnt.scrollIntoView({
      behavior: "smooth", 
      block: "start",
      inline: "nearest"
  });
}

