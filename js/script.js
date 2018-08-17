function setup() {
  createCanvas(690, 690);
}

function draw() {
  fill("#E5F50C");
  ellipse(mouseX, mouseY, 300, 300);
  fill("#A51425");
  ellipse(200, 200, 50, 50);
  fill("#143EA5");
  ellipse(300, 200, 50, 50);
  fill("#0CF531");
  rect(mouseX, mouseY, 120, 20);
}
