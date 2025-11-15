document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value;
            
            // Simple validation - password is the birth year (example: 1990)
            if (name == "Mildred" && password === "151104") { // Change 1990 to actual birth year
                window.location.href = "massege.html";
            } else {
                alert("Oops! Try again. Hint: The password is your birth year.");
            }
        });
    }
    
    // Quiz questions and answers
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        const questions = [
            {
                question: "Where did we first meet?",
                options: ["High School", "College", "Work", "Coffee Shop"],
                answer: "College"
            },
            {
                question: "What's your favorite color?",
                options: ["Pink", "Blue", "Black", "Green"],
                answer: "Black"
            },
            {
                question: "What's the common name that i always call you with?",
                options: ["Dr Mil", "Mil", "Mildred", "Mune"],
                answer: "Mil"
            },
            {
                question: "which month did you and i become friends?",
                options: ["September", "January", "February", "December"],
                answer: "January"
            }
        ];
        
        // Render quiz questions
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'space-y-2';
            
            questionDiv.innerHTML = `
                <h3 class="font-medium text-gray-800">${index + 1}. ${q.question}</h3>
                <div class="space-y-2 pl-4">
                    ${q.options.map(opt => `
                        <div class="flex items-center">
                            <input type="radio" id="q${index}_${opt}" name="q${index}" value="${opt}" class="mr-2">
                            <label for="q${index}_${opt}" class="text-gray-700">${opt}</label>
                        </div>
                    `).join('')}
                </div>
            `;
            
            quizContainer.appendChild(questionDiv);
        });
        
        // Check answers
        document.getElementById('submit-btn').addEventListener('click', function() {
            let allCorrect = true;
            const resultDiv = document.getElementById('result-message');
            
            questions.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
                if (!selectedOption || selectedOption.value !== q.answer) {
                    allCorrect = false;
                }
            });
            
            if (allCorrect) {
                resultDiv.innerHTML = `
                    <div class="bg-green-100 text-green-800 p-3 rounded-lg">
                        <i data-feather="check-circle" class="inline mr-2"></i>
                        Perfect! You know yourself so well! Redirecting to your surprise...
                    </div>
                `;
                feather.replace();
                setTimeout(() => {
                    window.location.href = "present.html";
                }, 2000);
            } else {
                resultDiv.innerHTML = `
                    <div class="bg-pink-100 text-pink-800 p-3 rounded-lg">
                        <i data-feather="x-circle" class="inline mr-2"></i>
                        Almost there! Try again, birthday girl! 💕
                    </div>
                `;
                feather.replace();
            }
            
            resultDiv.classList.remove('hidden');
        });
    }

    // Present Box Video Functionality
    const presentBox = document.querySelector('.relative.mb-8');
    if (presentBox) {
        presentBox.addEventListener('click', openPresent);
    }

    function openPresent() {
        const lid = document.getElementById('present-lid');
        const content = document.getElementById('present-content');
        const video = document.getElementById('birthday-video');
        const giftIcon = content.querySelector('i');
        
        // Prevent multiple clicks
        presentBox.style.pointerEvents = 'none';
        
        // Animate lid opening
        lid.style.transform = 'translateY(-100%)';
        lid.style.opacity = '0';
        
        // Show content and video
        setTimeout(() => {
            content.style.opacity = '1';
            if (giftIcon) giftIcon.style.display = 'none';
            if (video) {
                video.style.display = 'block';
                video.play().catch(e => {
                    console.log('Video play failed:', e);
                    // Fallback: show message if video can't autoplay
                    content.innerHTML = '<p class="text-pink-600 font-semibold">Click the play button to watch your surprise video! 🎥</p>';
                });
            }
        }, 800);
    }

    // Optional: Add hover effect to present box
    if (presentBox) {
        const lid = document.getElementById('present-lid');
        presentBox.addEventListener('mouseenter', function() {
            lid.style.transform = 'translateY(-5px)';
        });
        
        presentBox.addEventListener('mouseleave', function() {
            if (!lid.style.transform.includes('-100%')) {
                lid.style.transform = 'translateY(0)';
            }
        });

        // Add cursor pointer to indicate it's clickable
        presentBox.style.cursor = 'pointer';
    }
});
