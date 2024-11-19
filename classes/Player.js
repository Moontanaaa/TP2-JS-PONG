export default class Player {
  constructor(x, y, width, height, color) {
    this.y = y;
    this.x = x;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(direction, canvas) {
    const speed = 10;
    if (direction === 'up' && this.y > 0) this.y -= speed;
    if (direction === 'down' && this.y + this.height < canvas.height) this.y += speed;
  }
}



