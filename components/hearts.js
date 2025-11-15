class FloatingHearts extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .heart {
          position: fixed;
          color: #f472b6;
          font-size: 20px;
          pointer-events: none;
          animation: float-up linear forwards;
          z-index: 10;
        }
        
        @keyframes float-up {
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      </style>
    `;
    
    this.createHearts();
    setInterval(() => this.createHearts(), 2000);
  }
  
  createHearts() {
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${100 + Math.random() * 20}vh`;
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.opacity = Math.random() * 0.5 + 0.5;
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
      
      this.shadowRoot.appendChild(heart);
      
      // Remove heart after animation completes
      setTimeout(() => {
        heart.remove();
      }, 10000);
    }
  }
}

customElements.define('floating-hearts', FloatingHearts);
