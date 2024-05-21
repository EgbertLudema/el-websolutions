<script>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onDestroy } from 'svelte';

    gsap.registerPlugin(ScrollTrigger);

    let projects = [
        {
            id: 'holdbaar',
            name: 'Holdbaar',
            imageUrl: './images/projects/holdbaar/website-Holdbaar.jpg',
            url: 'https://holdbaar.nl/',
            tags: [
                { name: 'Wordpress', url: 'https://wordpress.com/' },
                { name: '1-page', url: null },
                { name: 'Custom template', url: null },
                { name: 'Custom opmaak', url: null }
            ],
            description: `
                <p class="no-margin">Holbaar vroeg mij een website te bouwen die er duurzaam, maar ook modern uit moest zien.</p>
                <p>Ook moest het mogelijk zijn zelf teksten en posts aan te kunnen passen.</p>
                <p>Na de eisen te horen stelde ik voor een 1-page website te bouwen.</p>
                <p class="no-margin">Ik heb uiteindelijk het volgende gedaan:</p>`,
            tasks: [
                'Custom template gebouwd',
                'Projecten slider gemaakt',
                'Een aantal projecten toegevoegd',
                'Tutorials geleverd voor toevoegen projecten en aanpassen teksten'
            ]
        },
        {
            id: 'a7motoren',
            name: 'A7Motoren Sneek',
            imageUrl: './images/projects/a7motoren/website-A7Motoren-homepage.jpg',
            url: 'https://a7motoren-sneek.nl/',
            tags: [
                { name: 'Wordpress', url: 'https://wordpress.com/' },
                { name: 'Meerdere pagina\'s', url: null },
                { name: 'Custom template', url: null },
                { name: 'Custom opmaak', url: null }
            ],
            description: `
                <p class="no-margin">A7motoren vroeg mij een website te bouwen met de volgende pagina's: Homepage, Over mij, Services, Motoren & Scooters en een contact pagina.</p>
                <p>Hierbij moest het mogelijk zijn om nieuws posts op de homepage te kunnen plaatsten en motoren en scooters te kunnen posten om te kunnen laten zien wat er in de showroom stond.</p>
                <p>Verder was het belangrijk dat er een afbeelding slider op de homepage kwam.</p>
                <p class="no-margin">Ik heb uiteindelijk het volgende gedaan:</p>
            `,
            tasks: ['Custom template gebouwd', 'Homepage afbeelding slider', 'Post categoriën gemaakt', 'Tutorials geleverd voor toevoegen van posts'],
        },
        {
            id: 'pelletboerderij',
            name: 'PelletBoerderij',
            imageUrl: './images/projects/pelletboerderij/website-pelletboerderij-home.jpg',
            url: 'https://pelletboerderij.nl/',
            tags: [
                { name: 'Wordpress', url: 'https://wordpress.com/' },
                { name: 'WooCommerce', url: 'https://woocommerce.com/' },
                { name: 'Webshop', url: null },
                { name: 'Meerdere pagina\'s', url: null },
                { name: 'Custom template', url: null },
                { name: 'Custom opmaak', url: null }
            ],
            description: `
                <p class="no-margin">PelletBoerderij was op zoek naar een webshop waarbij de klanten ervoor kunnen kiezen het product af te halen of te laten verzenden. Hierbij moesten de verzendkosten berekend worden op basis van de afstand van PelletBoerderij naar de klant.</p>
                <p>Ik stelde voor met WooCommerce te werken en de plugin "distance based shipping" te gebruiken.</p>
                <p class="no-margin">Ik heb uiteindelijk het volgende gedaan:</p>
            `,
            tasks: ['Custom template gebouwd', 'Webshop gebouwd', 'Distance based shipping plugin toegevoegd', 'Betaal mogelijkheden(Creditcart & Ideal)', 'Tutorial geleverd voor aanpassen van teksten', 'Tutorial geleverd voor het toevoegen van producten'],
        }
    ];

    function gsapAction(node, params) {
        const { index } = params;
        const direction = index % 2 === 0 ? -800 : 800; // Alternate based on index

        gsap.from(node, {
            scrollTrigger: {
                trigger: node,
                start: "0% 60%",
                end: "100% 40%",
                toggleActions: "play reverse play reverse",
            },
            x: direction,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });
    }

    onDestroy(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    });
</script>

<section id="projects">
    <h2>Projecten</h2>
    <div class="container">
        {#each projects as project, i (project.id)}
            <div use:gsapAction={{ index: i }} class="project" id={project.id}>
                <div class="project-image">
                    <img src={project.imageUrl} alt={`Website ${project.name}`}>
                </div>
                <div class="project-content">
                    <h3>{project.name}</h3>
                    <div class="tags">
                        {#each project.tags as tag}
                            {#if tag.url}
                                <div class="tag"><a href={tag.url}>{tag.name}</a></div>
                            {:else}
                                <div class="tag"><span>{tag.name}</span></div>
                            {/if}
                        {/each}
                    </div>
                    <div class="text">
                        {@html project.description}
                        <ul class="no-margin">
                            {#each project.tasks as task}
                                <li>{task}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
                <div class="buttons">
                    <a target="_blank" href={project.url}><img src="./images/globe.png" alt={`Link naar ${project.name}`}>Bekijk de website</a>
                </div>
            </div>
        {/each}
    </div>
</section>
<style>
    #projects {
        background: linear-gradient(65deg, var(--primary-purple) 25%, var(--primary-blue) 50%, var(--primary-cyan) 80%);
        background-size: 600% 600%;
        -webkit-animation: BG-gradient-animation 11s ease-in-out infinite;
        -moz-animation: BG-gradient-animation 11s ease-in-out infinite;
        animation: BG-gradient-animation 11s ease-in-out infinite;
        padding-bottom: 180px;
    }
    h2{
        color: #fff;
        font-size: 40px;
        font-weight: 600;
    }
    .project{
        scroll-snap-align: center;
        display: flex;
        gap: 10px;
        background: #fff;
        border-radius: var(--primary-border-radius);
        padding: 10px;
        position: relative;
        overflow: clip;
        margin-bottom: 50px;
        height: calc(100vh - 240px);
        will-change: transform, opacity;
    }
    .project:not(:last-child){
        margin-bottom: 150px;
    }
    .project:nth-child(even){
        flex-direction: row-reverse;
    }
    .project-image{
        width: 55%;
        display: flex;
        justify-content: center;
        overflow-y: auto;
        align-items: flex-start;
    }
    .project-content{
        width: 45%;
        margin-bottom: 36px;
        overflow: hidden;
    }
    .project-content h3{
        font-size: 32px;
        margin: 10px 0px;
    }
    .project-content .text{
        overflow: auto;
        height: calc(100% - 105px);
        margin: 10px 0px;
    }
    .tags{
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: auto;
        gap: 5px;
        flex-wrap: wrap;
    }
    .tag a, .tag span{
        padding: 5px 8px;
        background-color: #fff;
        font-size: 12px;
        border-radius: 2px;
        text-decoration: none;
        border: 1px solid var(--primary-blue);
        border-left: 5px solid;
        color: var(--primary-blue);
        display: inline-block;
        white-space: nowrap;
    }
    .tag.wordpress a{
        border-color: var(--wordpress-primary);
    }
    .project:nth-child(even) .buttons{
        left: 10px;
    }
    .project:nth-child(odd) .buttons{
        right: 10px;
    }
    .buttons{
        position: absolute;
        bottom: 10px;
    }
    .buttons a{
        display: flex;
        padding: 8px;
        border-radius: 50px;
        color: #fff;
        text-decoration: none;
        align-items: center;
    }
    .buttons a img{
        width: 20px;
        margin-right: 5px;
    }
    /* Holdbaar */
    #holdbaar .project-content h3{
        color: var(--holdbaar-primary);
    }
    #holdbaar .buttons a{
        background-color: var(--holdbaar-primary);
    }
    /* A7Motoren */
    #a7motoren .project-content h3{
        color: var(--a7motoren-primary);
    }
    #a7motoren .buttons a{
        background-color: var(--a7motoren-primary);
    }
    /* Pelletboerderij */
    #pelletboerderij .project-content h3{
        color: var(--pelletboerderij-primary);
    }
    #pelletboerderij .buttons a{
        background-color: var(--pelletboerderij-primary);
    }
    /* Animations */
    @-webkit-keyframes BG-gradient-animation {
        0%, 100% {background-position: 0% 0%}
        25%, 75% {background-position: 27% 60%}
        50% {background-position: 100% 40%}
        90% {background-position: 0% 0%}
    }
    @-moz-keyframes BG-gradient-animation {
        0%, 100% {background-position: 0% 0%}
        25%, 75% {background-position: 27% 60%}
        50% {background-position: 100% 40%}
        90% {background-position: 0% 0%}
    }
    @keyframes BG-gradient-animation {
        0%, 100% {background-position: 0% 0%}
        20%, 70% {background-position: 27% 50%}
        45% {background-position: 100% 40%}
        80% {background-position: 0% 0%}
    }
</style>