document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you for your message, " + name + "!");
      form.reset();
    });
  }
});

const marquee = document.querySelector('.marquee');
if (marquee) {
  marquee.innerHTML += ' ‒ ' + marquee.innerHTML;
}
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
document.querySelectorAll('.zoom').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';

    const imgClone = img.cloneNode();
    imgClone.style.width = '80%';
    imgClone.style.borderRadius = '10px';
    modal.appendChild(imgClone);

    modal.addEventListener('click', () => modal.remove());
    document.body.appendChild(modal);
  });
});

const runner = document.querySelector('.runner-gif');
if (runner) {
  runner.addEventListener('click', () => {
    runner.style.animationPlayState = 
      runner.style.animationPlayState === 'paused' ? 'running' : 'paused';
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});

