<script>
    import AboutMe from '../components/AboutMe.svelte';
    import Services from '../components/Services.svelte';
    import Projects from '../components/Projects.svelte';
    // import Reviews from '../components/Reviews.svelte';
    import Footer from '../components/Footer.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { activeSection, isClickScrolling, currentPath } from '../store.js';

    let observer;

    onMount(() => {
        currentPath.set('/');
        ScrollTrigger.refresh();
        window.scrollTo(0, 0);
        setupObserver();
    });

    function setupObserver() {
        const observerOptions = { rootMargin: "-50% 0px -50% 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !$isClickScrolling) {
                    activeSection.set(entry.target.id); // Update active section
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll("section");
        sections.forEach(section => observer.observe(section));
    }

    onDestroy(() => {
        if (observer) observer.disconnect();
    });
</script>

<AboutMe />
<Services />
<Projects />
<!-- <Reviews /> -->
<Footer />