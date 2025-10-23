document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const body = document.getElementById('page-body');
    const mainCard = document.getElementById('main-card');
    const bgStage1 = document.getElementById('bg-stage1'); 
    const bgStage2 = document.getElementById('bg-stage2');
    const bgStage3 = document.getElementById('bg-stage3');
    const bgFinal = document.getElementById('bg-final');
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');

    const allBackgrounds = [bgStage1, bgStage2, bgStage3, bgFinal]; 
    
    // --- CONSTANT DATA (REMEMBER TO FILL THIS IN!) ---
    const WIFES_NAME = "Sunihra Waseem"; // <--- CHANGE THIS NAME!
    
    const compliments = [
        "Your kindness is a masterpiece.",
        "Your smile melts all my worries away.",
        "You make time stand still when I'm with you.",
        "Your beauty takes my breath away, every single day.",
        "Every moment with you is precious.",
    ];

    const affirmations = [
        "**Husband & Wife Bond:** You're my peace, my Skoon, my everything.",
        "**Our Foundation:** We are better together; you are my greatest strength.",
        "**True Love:** You brought pure, unconditional love into my life.",
        "**Partnership:** My life's adventure is only complete with you by my side.",
        "**Home:** Wherever you are, that is my home and my ultimate peace.",
    ];

    const memoryContent = [
        { title: "💌 The Heartbeat", text: "You walked into our home and instantly became the heartbeat of my life. The change you brought was magic." },
        { title: "💞 Our First Meeting", text: "My heart raced so fast I could hardly speak. Do you remember? You made me nervous and happy all at once." },
        { title: "🌸 Melting My Worries", text: "When I was sad, you always tried everything to bring back my smile. Your care, your words, your presence — they all healed me." },
        { title: "💍 Engagement Day Glow", text: "You looked so breathtaking that day — so confident and glowing. I truly couldn’t take my eyes off my future wife." },
        { title: "💕 The College Ride", text: "When I dropped you to **Hashamsar College**, we talked the entire way. It was one of those moments I wished would never end. That road is special." },
        { title: "🫶 Skoon (Our First Hug)", text: "That first hug... do you remember the feeling of **SKOON**—the deep, quiet peace that filled our hearts? I’ll never forget that moment." }
    ];

    // --- NAVIGATION & STAGE MANAGEMENT ---
    function setBackground(bgElement) {
        allBackgrounds.forEach(bg => bg.classList.remove('active'));
        if (bgElement) bgElement.classList.add('active');
    }
    
    // STAGE 0: Cover Page
    function loadStage0() {
        // Ensure body background is set to the light theme gradient
        body.style.background = 'linear-gradient(135deg, var(--primary-bg-light) 0%, var(--secondary-bg-light) 50%, #FFB6C1 100%)';
        
        // Set card style for the cover page
        mainCard.className = 'card'; 
        
        setBackground(null); // Clear image background for the cover
        mainCard.innerHTML = `
            <h1 class="cover-title">Our Beautiful Story</h1>
            
            <div class="cover-names">
                <span class="name-callout-light">Waseem Abbas</span>
                <span class="ampersand-light">&</span>
                <span class="name-callout-light">${WIFES_NAME}</span>
            </div>
            
            <img src="waseem_profile.jpg" alt="Waseem Abbas" id="waseem-cover-photo"> 
            
            <p class="cover-date-text">
                October 22nd
                <span>The day our forever began.</span>
            </p>
            <button class="btn btn-start-journey" id="start-journey">Begin Our Journey →</button>
        `;
        document.getElementById('start-journey').onclick = loadStage1;
        clearInterval(window.heartIntervalStage2);
        // Start the heart animation for the cover page
        window.heartIntervalInitial = window.heartIntervalInitial || setInterval(createFloatingHeart, 700);
    }

    // STAGE 1: Original Anniversary Greeting
    function loadStage1() {
        body.style.background = 'linear-gradient(135deg, var(--primary-bg-light) 0%, var(--secondary-bg-light) 50%, #FFB6C1 100%)';
        mainCard.className = 'card'; 
        
        setBackground(bgStage1);
        mainCard.innerHTML = `
            <p class="cursive-header">To My Dearest Wife, Sunihra</p>
            <h1>Happy Anniversary!</h1>
            <p class="date-callout">October 22nd is a day coded into my heart forever.</p>
            <p>This is a small journey through our big love story, from Waseem Abbas to the one who brought Skoon to my life.</p>
            <button class="btn" id="start-stage2" style="animation: none;">Begin Our Story →</button>
        `;
        document.getElementById('start-stage2').onclick = loadStage2;
        clearInterval(window.heartIntervalInitial); 
        // Start hearts for this stage (or let the next stage handle it if it needs faster frequency)
        window.heartIntervalStage1 = window.heartIntervalStage1 || setInterval(createFloatingHeart, 700);
    }

    // STAGE 2: Affirmations & Compliments
    function loadStage2() {
        body.style.background = 'linear-gradient(135deg, var(--primary-bg-light) 0%, var(--secondary-bg-light) 50%, #FFB6C1 100%)';
        mainCard.className = 'card'; 
        
        // Use the simplified button labels
        const COMPLIMENT_LABEL = "💖 Your Best Quality";
        const AFFIRMATION_LABEL = "💍 Our Forever Promise";
        
        setBackground(bgStage2);
        mainCard.innerHTML = `
            <h2>Our Bond: Affirmations & Compliments</h2>
            <p>I could spend forever telling you how much I love you. Click to reveal what makes our bond so beautiful.</p>
            <div id="display-text" style="font-size: 1.3em; font-weight: 700; color: var(--accent-color-red); min-height: 50px; margin: 20px 0; opacity: 0; transition: opacity 0.5s;">Click a button below!</div>
            
            <div class="btn-group" style="animation: none;">
                <button class="btn btn-outline" id="get-compliment">${COMPLIMENT_LABEL}</button>
                <button class="btn btn-outline" id="get-affirmation">${AFFIRMATION_LABEL}</button>
            </div>

            <div class="btn-group" style="animation: none; margin-top: 40px;">
                <button class="btn btn-outline" id="go-back2">← Back</button>
                <button class="btn" id="continue-stage2">Continue to Memories →</button>
            </div>
        `;
        
        const displayText = document.getElementById('display-text');
        const revealMessage = (messageArray) => {
            const randomMessage = messageArray[Math.floor(Math.random() * messageArray.length)];
            displayText.style.opacity = 0; 
            setTimeout(() => {
                displayText.innerHTML = randomMessage;
                displayText.style.opacity = 1; 
            }, 300);
            
            // Speed up the hearts when engaging with content
            if (!window.heartIntervalStage2) {
                 clearInterval(window.heartIntervalStage1);
                 window.heartIntervalStage2 = setInterval(createFloatingHeart, 400); 
            }
        };

        document.getElementById('get-compliment').onclick = () => revealMessage(compliments);
        document.getElementById('get-affirmation').onclick = () => revealMessage(affirmations);
        document.getElementById('go-back2').onclick = loadStage1;
        document.getElementById('continue-stage2').onclick = () => {
            clearInterval(window.heartIntervalStage1);
            clearInterval(window.heartIntervalStage2);
            loadStage3();
        };
    }

    // STAGE 3: Memory List
    function loadStage3() {
        body.style.background = 'linear-gradient(135deg, var(--primary-bg-light) 0%, var(--secondary-bg-light) 50%, #FFB6C1 100%)';
        mainCard.className = 'card'; 
        
        setBackground(bgStage3);
        mainCard.innerHTML = `
            <h2>Our Beautiful Memories</h2>
            <p>Every step of our journey is a gift. Scroll through these moments that always make me smile.</p>
            <div id="memory-list" class="memory-container"></div>
            <div class="btn-group" style="animation: none; margin-top: 40px;">
                <button class="btn btn-outline" id="go-back3">← Back</button>
                <button class="btn" id="continue-stage3">Our Eternal Vow →</button>
            </div>
        `;
        
        document.getElementById('go-back3').onclick = loadStage2;
        document.getElementById('continue-stage3').onclick = loadFinalStage;

        const memoryList = document.getElementById('memory-list');
        memoryContent.forEach(mem => {
            const item = document.createElement('div');
            item.classList.add('memory-item-card');
            // Use regex to replace the markdown bolding (**) with HTML <b>
            item.innerHTML = `
                <h3>${mem.title}</h3>
                <p>${mem.text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</p>
            `;
            memoryList.appendChild(item);
        });
        window.heartIntervalInitial = window.heartIntervalInitial || setInterval(createFloatingHeart, 700);
    }

    // STAGE 4: Final Vow
    function loadFinalStage() {
        body.style.background = 'linear-gradient(135deg, var(--primary-bg-light) 0%, var(--secondary-bg-light) 50%, #FFB6C1 100%)';
        mainCard.className = 'card'; 
        
        setBackground(bgFinal);
        mainCard.innerHTML = `
            <p class="cursive-header">My Eternal Vow</p>
            <h1>Forever Yours</h1>
            <p class="final-vow-text">
                Our story is not just made of beautiful memories—it’s built on love, respect, and a bond that will never fade.
                From our first meeting to our endless talks, you've brought pure **Skoon** to my life.
                I promise to cherish you, protect you, and love you more deeply every single day.
            </p>
            <div style="margin-top: 40px;">
                <p style="font-size: 1.2em; margin-bottom: 5px;">With All My Love,</p>
                <p class="signature">Waseem Abbas ❤️</p>
            </div>
            
            <div class="btn-group" style="animation: none; margin-top: 40px;">
                <button class="btn btn-outline" id="go-back-final">← Back to Memories</button>
                <button class="btn" id="start-over">Start Over ↺</button>
            </div>
        `;
        
        document.getElementById('go-back-final').onclick = loadStage3;
        document.getElementById('start-over').onclick = loadStage0; // Go back to the cover page
        clearInterval(window.heartIntervalStage1); 
        clearInterval(window.heartIntervalStage2);
    }

    // --- FLOATING HEARTS EFFECT ---
    function createFloatingHeart() {
        const heart = document.createElement('span');
        heart.classList.add('floating-heart');
        const heartIcons = ['❤️', '💖', '✨', '🌟'];
        heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        
        const size = Math.random() * 1.5 + 1;
        heart.style.fontSize = `${size}em`;
        heart.style.left = `${Math.random() * 90 + 5}%`;
        heart.style.animationDuration = `${Math.random() * 4 + 6}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        
        document.body.appendChild(heart);
        setTimeout(() => {
            if (heart && heart.parentNode) heart.parentNode.removeChild(heart);
        }, 10000);
    }

    // --- INITIAL LOAD ---
    setTimeout(() => {
        body.style.opacity = 1;
    }, 100);
    loadStage0(); // Start at the Cover Page
    
    // --- MUSIC CONTROL ---
    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play().catch(e => {
                console.error("Music play blocked:", e);
                // Inform user if play fails (often due to browser restrictions)
                musicBtn.innerText = "Error: Click again (or auto-play blocked)";
            });
            musicBtn.innerText = "Pause Music ⏸️";
        } else {
            music.pause();
            musicBtn.innerText = "Play Music 🎵";
        }
    });
});