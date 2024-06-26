<script>
    import { Router, Route, Link } from 'svelte-routing';
    import HomePage from './routes/HomePage.svelte';
    import ContactPage from './routes/ContactPage.svelte';
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger';
    import { onMount } from 'svelte';
    // import { routes } from './routes.js';
    import { activeSection, currentPath } from './store.js';


    let isClickScrolling = false; // Track if scroll is initiated by clicking
    $: currentSection = $activeSection; // Reactive assignment to keep `currentSection` up-to-date

    onMount(() => {
        // Listen to manual scroll events to reset isClickScrolling flag
        window.addEventListener('scroll', () => {
            // Reset the flag as the user scrolls manually
            isClickScrolling = false;
        }, { passive: true });

        document.addEventListener('clickScrollingEnded', () => {
            isClickScrolling = false;
        });
    });

    // Adapt your existing handleMenuItemClick for this context
    function handleMenuItemClick(event, targetId) {
        event.preventDefault();
        isClickScrolling = true;
        activeSection.set(targetId);
        
        // Step 1: Disable ScrollTrigger
        gsap.utils.toArray('.project').forEach((project) => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === project) {
                    trigger.disable();
                }
            });
        });

        // Step 2: Smooth Scroll
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Step 3: Re-enable ScrollTrigger after a delay
            setTimeout(() => {
                ScrollTrigger.getAll().forEach((trigger) => {
                    trigger.enable();
                });
                
                // Ensure we reset isClickScrolling flag after scroll completes
                isClickScrolling = false;
            }, 1000);
        }
    }

    activeSection.subscribe(value => {
        currentSection = value;
    });
</script>

<Router>
    <div id="menu">
        <div class="menu-container container">
            <div class="logo">
                <Link to="/"><img src="/images/EL-color-no-bg-name-no-padding.png" alt="EL-Websolutions Logo"></Link>
            </div>
            <div class="menu">
                <ul>
                    <!-- Conditionally render different menus based on the currentPath -->
                    {#if $currentPath === '/'}
                        <!-- Homepage Menu -->
                        <li class="menu-item" class:active={$activeSection === 'about-me'}>
                            <a href="#about-me" on:click={event => handleMenuItemClick(event, 'about-me')}>Over mij</a>
                        </li>
                        <li class="menu-item" class:active={$activeSection === 'services'}>
                            <a href="#services" on:click={event => handleMenuItemClick(event, 'services')}>Diensten</a>
                        </li>
                        <li class="menu-item" class:active={$activeSection === 'projects'}>
                            <a href="#projects" on:click={event => handleMenuItemClick(event, 'projects')}>Projecten</a>
                        </li>
                        <!-- <li class="menu-item" class:active={$activeSection === 'reviews'}>
                            <a href="#reviews" on:click={event => handleMenuItemClick(event, 'reviews')}>Reviews</a>
                        </li> -->
                        <li class="primary-btn">
                            <Link to="/contact">Contact</Link>
                            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                                <defs>
                                    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="5%" stop-color="rgba(103,65,153,1)"/>
                                        <stop offset="50%" stop-color="rgba(17,105,172,1)"/>
                                        <stop offset="95%" stop-color="rgba(61,188,194,1)"/>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#buttonGradient)" d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                            </svg>
                        </li>
                    {:else}
                    <!-- Contactpage Menu -->
                        <li class="menu-item">
                            <Link class="menu-a" to="/">Home</Link>
                        </li>
                        <li class="primary-btn active">
                            <Link to="/contact">Contact</Link>
                            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                                <defs>
                                    <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="5%" stop-color="rgba(103,65,153,1)"/>
                                        <stop offset="50%" stop-color="rgba(17,105,172,1)"/>
                                        <stop offset="95%" stop-color="rgba(61,188,194,1)"/>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#buttonGradient)" d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                            </svg>
                        </li>
                    {/if}
                </ul>
            </div>
        </div>
    </div>

    <Route path="/" component={HomePage} />
    <Route path="/contact" component={ContactPage} />
</Router>

<style>
    #menu{
        position: fixed;
        height: 60px;
        background-color: rgba(255,255,255,0.8);
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 999;
    }
    #menu .menu-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        right: 3px;
        position: relative;
    }
    #menu .logo, #menu .logo img{
        height: 50px;
    }
    #menu .menu ul{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        height: 60px;
    }
    #menu .menu ul li.menu-item{
        margin: 0px 20px;
        display: flex;
        align-items: center;
        background: none;
        border-radius: 8px;
        position: relative;
        &:before {
            width: 0px;
            content: '';
            height: 3px;
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin-bottom: -3px;
            border-radius: inherit;
            background: var(--primary-gradient);
            transition: width 0.4s ease;
        }
    }
    #menu .menu ul li.menu-item:hover:before, #menu .menu ul li.active:before {
        width: 100%;
    }
    /* styling for a tags inside global.css */
    #menu .menu ul li.primary-btn{
        margin-left: 10px;
    }
</style>