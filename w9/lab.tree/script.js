function Folder_Toggle(myself) {
  if (myself.nextSibling.nextSibling.nextSibling.style.display == "") {
    myself.nextSibling.nextSibling.nextSibling.style.display = "none";
    myself.src = "images/plus.png";
  } else {
    myself.nextSibling.nextSibling.nextSibling.style.display = "";
    myself.src = "images/minus.png";
  }
}
