<script>
    import AboutMe from '../components/AboutMe.svelte';
    import Services from '../components/Services.svelte';
    import Projects from '../components/Projects.svelte';
    import Reviews from '../components/Reviews.svelte';
    import Footer from '../components/Footer.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            rootMargin: "-50% 0px -50% 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentSectionId = entry.target.id;
                    // Update your menu items here if needed, or manage state
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    });
</script>

<AboutMe />
<Services />
<Projects />
<Reviews />
<Footer />