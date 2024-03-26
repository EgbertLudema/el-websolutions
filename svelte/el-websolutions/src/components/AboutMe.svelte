<script>
    import Typed from 'typed.js';
    import { onMount } from 'svelte';

    onMount(() => {
        // Initialize the first Typed instance for the greeting
        const greetingOptions = {
            strings: ['Hoi! Mijn naam is <strong>Egbert Ludema</strong>.'],
            typeSpeed: 60,
            showCursor: false,
            onComplete: (self) => {
                // Initialize the alternating texts
                initAlternatingTexts();
            }
        };

        new Typed('#greeting', greetingOptions);

        // Function to initialize the second Typed instance for alternating texts
        function initAlternatingTexts() {
            const alternatingTextsOptions = {
                strings: [
                    'Ik ben een <strong>webdeveloper</strong>.',
                    'Ik ben een <strong>designer</strong>.'
                ],
                typeSpeed: 60,
                backSpeed: 30,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                startDelay: 2000
            };

            new Typed('#alternating-texts', alternatingTextsOptions);
            customizeCursor(); 
        }

        // Function to customize the cursor's appearance
        function customizeCursor() {
            // Apply cursor customization shortly after initializing Typed.js to ensure the cursor element is present
            setTimeout(() => {
                const cursorElement = document.querySelector('.typed-cursor');
                if (cursorElement) {
                    cursorElement.style.cssText = `
                        opacity: 1;
                        animation: blink 1s infinite;
                        font-size: 32px;
                        color: #fff;
                    `;
                }
            }, 10);
        }
    });
</script>

<section id="about-me">
    <div class="about-me-container">
        <div class="container">
            <div class="about-me-left">  
                <div class="white-circle">
                    <img class="about-me-img" src="/images/Portret_Egbert_NoBG.png" alt="Portret Egbert">
                </div>
                <img class="about-me-img-head" src="/images/Portret_Egbert_NoBG.png" alt="Portret Egbert">            
            </div>
            <div class="about-me-right">
                <span id="greeting"></span>
                <br>
                <span id="alternating-texts"></span>
            </div>
        </div>
    </div>
    <div class="scroll-down-arrow">
        <svg class="arrow-down arrow" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 81.9 177.81">
            <defs>
                <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="5%" stop-color="rgba(61,188,194,1)"/>
                    <stop offset="50%" stop-color="rgba(17,105,172,1)"/>
                    <stop offset="95%" stop-color="rgba(103,65,153,1)"/>
                </linearGradient>
            </defs>
            <path fill="url(#buttonGradient)" d="M7,177.81c-1.58,0-3.16-.53-4.47-1.62-2.97-2.47-3.38-6.88-.91-9.86l64.2-77.27L1.95,11.45C-.5,8.46-.07,4.05,2.91,1.59,5.9-.86,10.31-.43,12.76,2.55l67.54,82.08c2.13,2.59,2.13,6.34-.02,8.92L12.38,175.28c-1.38,1.67-3.38,2.53-5.39,2.53Z"/>
        </svg>
    </div>
</section>
<style>
    section#about-me{
        min-height: 100dvh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .about-me-container{
        /* Full height of parent - height of scroll down arrow */
        min-height: calc(100dvh - 80px);
        background: var(--primary-gradient);
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .about-me-container .container{
        min-height: calc(100% - 60px);
        margin-top: 60px;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
    .about-me-left, .about-me-right{
        width: 50%;
    }
    .about-me-left {
        display: flex;
        justify-content: center;
        position: relative;
        animation: hover 10s infinite ease-in-out;
    }
    .white-circle{
        background-color: #fff;
        width: 60%;
        aspect-ratio: 1;
        animation: border-radius-animation 10s infinite ease-in-out;
        position: relative;
        border: 6px solid #fff;
        overflow: clip;
    }
    .about-me-img {
        position: absolute;
        width: 378px;
        top: -65px;
        background-color: #fff;
    }
    .about-me-img-head {
        position: absolute;
        width: 378px;
        top: -59px;/* equal the same as other img minus border of .white-circle */
        clip-path: inset(0% 0% 40% 0%);
    }
    #about-me span{
        color: #fff;
        font-weight: 300;
        font-size: 32px;
        display: inline;
    }
    .scroll-down-arrow{
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scroll-down-arrow .arrow{
        animation: arrow-notify 5s infinite;
        animation-delay: 3s;
    }
    @keyframes arrow-notify {
        0%, 100% {
            transform: scale(1) rotate(90deg);
        }
        40%{
            transform: scale(1) rotate(90deg);
        }
       45%{
            transform: scale(1.1) rotate(90deg);
        }
        50%{
            transform: scale(1) rotate(90deg);
        }
        55%{
            transform: scale(1.1) rotate(90deg);
        }
        60%{
            transform: scale(1) rotate(90deg);
        }
    }
    @keyframes hover {
        0%, 100% {
            transform: translateY(0);
        }
        25%, 75% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(5px);
        }
    }
    @keyframes border-radius-animation {
        0%, 100% {
            border-radius: 60% 40% 56% 44% / 45% 74% 26% 55%;
        }
        25% {
            /* Overshoot the first target slightly */
            border-radius: 58% 42% 58% 42% / 60% 54% 50% 44%;
        }
        50% {
            /* Settle into the second shape */
            border-radius: 56% 44% 56% 44% / 58% 52% 48% 42%;
        }
        75% {
            /* Overshoot the return to the starting shape slightly */
            border-radius: 62% 38% 54% 46% / 43% 76% 24% 57%;
        }
    }
</style>