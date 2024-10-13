document.getElementById("name").focus();

document.getElementById("name").onblur = function () {
  this.value = ChuanhoaTen(this.value);
};

document.getElementById("name").onkeyup = function (e) {
  DoKeyup(e, this, "address");
};

document.getElementById("address").onkeyup = function (e) {
  DoKeyup(e, this, "nam");
};

document.getElementById("nam").onkeyup = function (e) {
  DoKeyup(e, this, "nu");
};

document.getElementById("nu").onkeyup = function (e) {
  DoKeyup(e, this, "ngaysinh");
};

document.getElementById("ngaysinh").onkeyup = function (e) {
  DoKeyup(e, this, "email");
};

document.getElementById("email").onblur = function () {
  if (!laEmail(this.value)) {
    document.getElementById("loi_email").innerHTML =
      "E-mail không đúng định dạng";
  } else {
    document.getElementById("loi_email").innerHTML = "";
  }
};

document.getElementById("email").onkeyup = function (e) {
  DoKeyup(e, this, "codinh");
};

function DoKeyup(e, myself, nextcontrolid) {
  if (window.event) e = window.event;
  if (e.keyCode == 13) {
    document.getElementById(nextcontrolid).focus();
  }
}

function Chapnhan() {
  var okie = true;
  document.getElementById("err_name").innerHTML = "";
  document.getElementById("loi_ngaysinh").innerHTML = "";
  document.getElementById("loi_email").innerHTML = "";
  document.getElementById("loi_username").innerHTML = "";
  document.getElementById("loi_pass").innerHTML = "";
  document.getElementById("loi_repass").innerHTML = "";

  if (document.getElementById("pass").value == "") {
    document.getElementById("loi_pass").innerHTML = "Quý vị chưa nhập mật khẩu";
    document.getElementById("pass").focus();
    okie = false;
  } else if (document.getElementById("repass").value == "") {
    document.getElementById("loi_repass").innerHTML =
      "Quý vị chưa gõ lại mật khẩu";
    document.getElementById("repass").focus();
    okie = false;
  } else if (
    document.getElementById("pass").value !=
    document.getElementById("repass").value
  ) {
    document.getElementById("loi_pass").innerHTML =
      "Mật khẩu và gõ lại mật khẩu không trùng nhau";
    document.getElementById("pass").focus();
    okie = false;
  }

  if (document.getElementById("username").value == "") {
    document.getElementById("loi_username").innerHTML =
      "Quý vị chưa nhập tên sử dụng";
    document.getElementById("username").focus();
    okie = false;
  } else if (!laTenSD(document.getElementById("username").value)) {
    document.getElementById("loi_username").innerHTML =
      "TĂªn sá»­ dá»¥ng khĂ´ng Ä‘Ăºng Ä‘á»‹nh dáº¡ng";
    document.getElementById("username").focus();
    okie = false;
  }

  if (document.getElementById("email").value == "") {
    document.getElementById("loi_email").innerHTML = "Quý vị chưa nhập e-mail";
    document.getElementById("email").focus();
    okie = false;
  } else if (!laEmail(document.getElementById("email").value)) {
    document.getElementById("loi_email").innerHTML =
      "E-mail không đúng định dạng";
    document.getElementById("email").focus();
    okie = false;
  }

  if (document.getElementById("ngaysinh").value == "") {
    document.getElementById("loi_ngaysinh").innerHTML =
      "Quý vị chưa nhập ngày sinh";
    document.getElementById("ngaysinh").focus();
    okie = false;
  } else if (!laNgayThang(document.getElementById("ngaysinh").value)) {
    document.getElementById("loi_ngaysinh").innerHTML =
      "Ngày sinh không đúng định dạng";
    document.getElementById("ngaysinh").focus();
    okie = false;
  }

  if (document.getElementById("name").value == "") {
    document.getElementById("err_name").innerHTML = "Quý vị chưa nhập họ tên";
    document.getElementById("name").focus();
    okie = false;
  }

  if (okie) document.getElementById("form1").submit();
}

function laEmail(s) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(s);
}

function laTenSD(s) {
  return true;
}

function laNgayThang(d) {
  s = d.split("/");

  if (s.length != 3) return false;
  if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;

  ngay = parseInt(s[0]);
  thang = parseInt(s[1]);
  nam = parseInt(s[2]);

  if (thang > 12 || thang < 1) return false;
  if (
    thang == 1 ||
    thang == 3 ||
    thang == 5 ||
    thang == 7 ||
    thang == 8 ||
    thang == 10 ||
    thang == 12
  ) {
    if (ngay > 31) return false;
  } else if (thang == 2) {
    if (nam % 4 == 0 && nam % 100 != 0) {
      if (ngay > 29) return false;
    } else if (ngay > 28) return false;
  } else if (ngay > 30) return false;

  if (ngay < 1) return false;

  date = new Date();
  if (nam > date.getFullYear() || nam < 1950) return false;

  return true;
}

function ChuanhoaTen(ten) {
  dname = ten;
  ss = dname.split(" ");
  dname = "";
  for (i = 0; i < ss.length; i++)
    if (ss[i].length > 0) {
      if (dname.length > 0) dname = dname + " ";
      dname = dname + ss[i].substring(0, 1).toUpperCase();
      dname = dname + ss[i].substring(1).toLowerCase();
    }
  return dname;
}

function Boqua() {
  document.location.href = "../";
}

document.getElementById("FileUpload1").onchange = function () {
  let preview = document.querySelector("img.preview");
  let file = this.files[0];
  let reader = new FileReader();
  reader.onload = function () {
    preview.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
    preview.classList.remove("nodisplay");
  }
};

document.getElementById("ngaysinh").oninput = function () {
  var value = this.value;

  // Loại bỏ tất cả các ký tự không phải là số và dấu '/'
  value = value.replace(/[^0-9\/]/g, "");

  // Nếu nhập đủ 2 ký tự cho ngày hoặc tháng, tự động thêm dấu "/"
  if (value.length === 2 || value.length === 5) {
    if (value.charAt(value.length - 1) !== "/") {
      value += "/";
    }
  }

  // Giới hạn độ dài chuỗi ở mức 10 ký tự (dd/mm/yyyy)
  this.value = value.substring(0, 10);
};
