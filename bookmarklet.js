// Readable source of the "motivational quotes" bookmarklet.
// The one-line version in index.html is from this code.

(() => {
  const QUOTES = [
    "Don't make it perfect like you. Because you are far from perfect.",
    "Make it as stable as possible, we don't want it to be like your life.",
    "I was gonna roast you, but man... no roast is enough for someone like you.",
    "Wanna hear a joke? Your code.",
    "If you code in HTML, you're not a programmer. But keep dreaming, perhaps you'll become one! In your dreams.",
    "You know, code doesn't need your contribution. It's already bad enough.",
    "We all know that you code in Lua. Tsk tsk, what a shame.",
    "Go to bed.",
    "Please go to bed.",
    "Ew, your browser is so dirty, do you clean it? Your search history is also really dirty...",
    "Think twice before pushing your code. Actually, think about it... 9... 10... yeah, 10 thousand times.",
    "Your code works, you don't.",
    "Do you have 8GB of RAM? Or storage?",
    "Delete those TODO comments, no one is implementing them anyway.",
    "You're getting fired, and you don't have a job.",
    "When your program panics, you panic more.",
    "'ChatGPT, fix this bug, because I can't. Make no mistakes.'",
    "I'm sure the code needs a break from you.",
    "You call Reddit posts 'AI slop', while having 20 open Claude and ChatGPT tabs.",
    "Is HTML a programming language by itself? No. Then why do you consider yourself a programmer!?",
    "Your code is worse than your life. Incredible. Feel proud of yourself."
  ];

  const BOX = document.createElement("div");
  BOX.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  BOX.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 300px;
    padding: 16px 20px;
    background: #1e1e2e;
    color: #cdd6f4;
    font: 600 16px system-ui;
    border-radius: 4px;
    box-shadow: 0 8px 30px rgba(0,0,0,.5);
    z-index: 2147483647;
    cursor: pointer;
  `;

  BOX.onclick = () => BOX.remove();
  document.body.append(BOX);
  setTimeout(() => BOX.remove(), 6000);
})();
