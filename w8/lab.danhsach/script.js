var chks = document.getElementsByName("chk");

for (let i = 0; i < chks.length; i++) {
  chks[i].onchange = function () {
    updateRowSelection(this);
  };

  chks[i].parentNode.parentNode.onclick = function (e) {
    if (e.target.tagName !== "INPUT") {
      chks[i].checked = !chks[i].checked;
      updateRowSelection(chks[i]);
    }
  };
}

document.getElementById("chkall").onchange = function () {
  let allChecked = this.checked;
  for (let i = 0; i < chks.length; i++) {
    chks[i].checked = allChecked;
    updateRowSelection(chks[i]);
  }
};

function updateRowSelection(checkbox) {
  if (checkbox.checked) {
    checkbox.parentNode.parentNode.classList.add("selectedr");
  } else {
    checkbox.parentNode.parentNode.classList.remove("selectedr");
  }

  let allChecked = Array.from(chks).every((chk) => chk.checked);
  document.getElementById("chkall").checked = allChecked;

  let anyChecked = Array.from(chks).some((chk) => chk.checked);
  document
    .querySelector("div.group-op")
    .classList.toggle("nodisplay", !anyChecked);
}

document.querySelector(".group-op-delete").onclick = function () {
  for (let i = chks.length - 1; i >= 0; i--) {
    if (chks[i].checked) {
      chks[i].parentNode.parentNode.remove();
    }
  }
};
