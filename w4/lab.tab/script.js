sel_ = document.getElementById("m1");
sel_.className = "tab-default";

function MO(r) {
  if (r != sel_) r.className = "tab-dechuot";
}

function MOut(r) {
  if (r != sel_) r.className = "tab-binhthuong";
}

function MC(r) {
  if (sel_ != null)
    //thuc don hien tai duoc chon
    sel_.className = "tab-binhthuong";

  sel_ = r; //thuc don moi duoc chon
  sel_.className = "tab-duocchon";

  //thuc hien cac viec khi noi dung nay duoc chon
  frm = document.getElementById("myframe");
  if (sel_.id == "m1") {
    frm.src = "https://docnhanh.vn/";
  } else if (sel_.id == "m2") {
    frm.src = "http://dantri.com.vn";
  } else if (sel_.id == "m3") {
    frm.src = "https://thanhnien.vn/";
  } else if (sel_.id == "m4") {
    frm.src = "http://zing.vn";
  }
}
