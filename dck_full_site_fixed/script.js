const canvas = document.getElementById("spray");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

window.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 1.0,
      size: Math.random() * 6 + 2
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(154,0,255,${p.life})`;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.02;
  });
  particles = particles.filter((p) => p.life > 0);
  requestAnimationFrame(animate);
}
animate();
