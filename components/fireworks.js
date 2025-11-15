class FireworksEffect extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .firework {
          position: fixed;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px;
          animation: explode 1s ease-out forwards;
          z-index: 9999;
        }
        
        @keyframes explode {
          0% {
            transform: translate(var(--x), var(--y)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(20);
            opacity: 0;
          }
        }
      </style>
    `;
    
    this.createFireworks();
    setInterval(() => this.createFireworks(), 1000);
  }
  
  createFireworks() {
    const colors = ['#f472b6', '#ec4899', '#db2777', '#fcd34d', '#fbbf24', '#f59e0b'];
    
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = `${x}vw`;
      firework.style.top = `${y}vh`;
      firework.style.color = color;
      firework.style.setProperty('--x', `${(Math.random() - 0.5) * 100}px`);
      firework.style.setProperty('--y', `${(Math.random() - 0.5) * 100}px`);
      
      this.shadowRoot.appendChild(firework);
      
      // Remove firework after animation completes
      setTimeout(() => {
        firework.remove();
      }, 1000);
    }
  }
}

customElements.define('fireworks-effect', FireworksEffect);
