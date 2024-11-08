var cat = new Array(4);
var curPosition = 0;
var jumping;
var direction = "up";

cat[0] = new Image();
cat[0].src = "images/p1.png";
cat[1] = new Image();
cat[1].src = "images/p2.png";
cat[2] = new Image();
cat[2].src = "images/p3.png";
cat[3] = new Image();
cat[3].src = "images/p4.png";

function Jump() {
  if (direction == "up") {
    if (curPosition == 3) {
      --curPosition;
      direction = "down";
    } else {
      ++curPosition;
    }
  } else {
    if (curPosition == 0) {
      ++curPosition;
      direction = "up";
    } else {
      --curPosition;
    }
  }
  document.cat.src = cat[curPosition].src;
}

function startJumping() {
  if (jumping) {
    clearInterval(jumping);
  }
  jumping = setInterval("Jump()", 200);
}
