class ConfettiEffect extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          background-color: #f0f;
          opacity: 0.8;
          animation: fall linear forwards;
          z-index: 9999;
        }
        
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      </style>
    `;
    
    this.createConfetti();
  }
  
  createConfetti() {
    const colors = ['#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#fcd34d', '#fbbf24', '#f59e0b'];
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `-10px`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = `${Math.random() * 8 + 4}px`;
      confetti.style.height = `${Math.random() * 8 + 4}px`;
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      
      this.shadowRoot.appendChild(confetti);
      
      // Remove confetti after animation completes to prevent memory issues
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }
}

customElements.define('confetti-effect', ConfettiEffect);
