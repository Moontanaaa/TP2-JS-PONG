export default class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = 3;
        this.speedY = 3;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move(canvas, player1, player2) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.speedY *= -1;
        }
        if (this.checkCollision(player1) || this.checkCollision(player2)) {
            this.speedX *= -1;
        }
    }

    checkCollision(player) {
        return (
            this.x - this.radius < player.x + player.width &&
            this.x + this.radius > player.x &&
            this.y > player.y &&
            this.y < player.y + player.height
        );
    }

    reset(canvas) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX *= -1; 
        this.speedY = 3 * (Math.random() > 0.5 ? 1 : -1); 
    }
}

