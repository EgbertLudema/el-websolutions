<script>
    import { Link } from 'svelte-routing';

    let showOverlay_1page = false;

    function toggleOverlay_1page() {
        showOverlay_1page = !showOverlay_1page;
    }
</script>

<section id="services">
    <div class="container">
        <h2>Diensten</h2>
        <!-- <h2>Design. Websites. Webshops. <br>Ik doe het allemaal</h2> -->
        <div class="services">
            <div class="service">
                <div class="header-service">
                    <svg xmlns="http://www.w3.org/2000/svg" id="W_Mark" data-name="W Mark" viewBox="0 0 666.67 666.67">
                        <title>Wordpress Logo</title>
                        <defs>
                            <style>
                                .cls-1, .cls-2 {
                                    fill: #0073AA;
                                    stroke-width: 0px;
                                }
                            </style>
                        </defs>
                        <g id="W_Mark-2" data-name="W Mark">
                            <path class="cls-1" d="M333.33,20c42.31,0,83.34,8.28,121.96,24.62,18.56,7.85,36.47,17.57,53.22,28.89,16.6,11.21,32.2,24.09,46.39,38.27,14.18,14.18,27.06,29.79,38.27,46.39,11.32,16.75,21.03,34.65,28.89,53.22,16.33,38.62,24.62,79.65,24.62,121.96s-8.28,83.34-24.62,121.96c-7.85,18.56-17.57,36.47-28.89,53.22-11.21,16.6-24.09,32.2-38.27,46.39-14.18,14.18-29.79,27.06-46.39,38.27-16.75,11.32-34.65,21.03-53.22,28.89-38.62,16.33-79.65,24.62-121.96,24.62s-83.34-8.28-121.96-24.62c-18.56-7.85-36.47-17.57-53.22-28.89-16.6-11.21-32.2-24.09-46.39-38.27-14.18-14.18-27.06-29.79-38.27-46.39-11.32-16.75-21.03-34.65-28.89-53.22-16.33-38.62-24.62-79.65-24.62-121.96s8.28-83.34,24.62-121.96c7.85-18.56,17.57-36.47,28.89-53.22,11.21-16.6,24.09-32.2,38.27-46.39,14.18-14.18,29.79-27.06,46.39-38.27,16.75-11.32,34.65-21.03,53.22-28.89,38.62-16.33,79.65-24.62,121.96-24.62M333.33,0C149.24,0,0,149.24,0,333.33s149.24,333.33,333.33,333.33,333.33-149.24,333.33-333.33S517.43,0,333.33,0h0Z"/>
                            <path class="cls-1" d="M55.56,333.32c0,109.95,63.89,204.97,156.56,249.99L79.61,220.28c-15.41,34.54-24.05,72.77-24.05,113.04ZM520.86,319.31c0-34.34-12.33-58.11-22.9-76.61-14.08-22.89-27.29-42.26-27.29-65.15,0-25.53,19.36-49.3,46.65-49.3,1.23,0,2.4.15,3.6.22-49.42-45.28-115.27-72.93-187.58-72.93-97.05,0-182.42,49.8-232.09,125.2,6.52.21,12.67.34,17.88.34,29.05,0,74.03-3.53,74.03-3.53,14.97-.88,16.74,21.12,1.78,22.89,0,0-15.05,1.76-31.79,2.64l101.15,300.88,60.8-182.31-43.27-118.57c-14.97-.88-29.13-2.64-29.13-2.64-14.97-.88-13.22-23.77,1.76-22.89,0,0,45.86,3.53,73.16,3.53,29.05,0,74.04-3.53,74.04-3.53,14.97-.88,16.74,21.12,1.77,22.89,0,0-15.07,1.76-31.79,2.64l100.39,298.59,28.66-90.8c12.73-39.68,20.19-67.8,20.19-91.57ZM338.21,357.62l-83.36,242.17c24.89,7.32,51.21,11.32,78.48,11.32,32.35,0,63.38-5.58,92.25-15.75-.74-1.19-1.43-2.45-1.99-3.83l-85.38-233.91ZM577.09,200.07c1.19,8.85,1.87,18.34,1.87,28.56,0,28.18-5.28,59.86-21.13,99.49l-84.84,245.3c82.58-48.15,138.12-137.61,138.12-240.09,0-48.29-12.34-93.7-34.02-133.26Z"/>
                        </g>
                    </svg>
                    <h3>1 page</h3>
                </div>
                <div class="content-service">
                    <p>Opzoek naar een <strong>simpele</strong>, <strong>mooie</strong> website?</p>
                    <ul>
                        <li><strong>Gemakkelijk</strong> zelf aanpasbaar</li>
                        <li>Alles op 1 pagina</li>
                        <li>Gebruiksvriendelijk</li>
                        <li>Responsive <div class="tooltip tooltip-right">?<span class="tooltiptext">Geoptimaliseerd voor mobiel, tablet, laptop en desktop!</span></div></li>
                        <li><strong>SEO</strong> optimalisatie <div class="tooltip tooltip-right">?<span class="tooltiptext">(Search Engine Optimalisation) beter vindbaar op google</span></div></li>
                        <li><strong>Gratis</strong> tutorial</li>
                    </ul>
                </div>
                <div class="footer-service">
                    <button class="secondair-btn" on:click={toggleOverlay_1page}><span>Meer info...</span></button>
                </div>
                
            </div>
            <div class="service">
                <div class="header-service">
                    <svg xmlns="http://www.w3.org/2000/svg" id="W_Mark" data-name="W Mark" viewBox="0 0 666.67 666.67">
                        <title>Wordpress Logo</title>
                        <g id="W_Mark-2" data-name="W Mark">
                            <path class="cls-1" d="M333.33,20c42.31,0,83.34,8.28,121.96,24.62,18.56,7.85,36.47,17.57,53.22,28.89,16.6,11.21,32.2,24.09,46.39,38.27,14.18,14.18,27.06,29.79,38.27,46.39,11.32,16.75,21.03,34.65,28.89,53.22,16.33,38.62,24.62,79.65,24.62,121.96s-8.28,83.34-24.62,121.96c-7.85,18.56-17.57,36.47-28.89,53.22-11.21,16.6-24.09,32.2-38.27,46.39-14.18,14.18-29.79,27.06-46.39,38.27-16.75,11.32-34.65,21.03-53.22,28.89-38.62,16.33-79.65,24.62-121.96,24.62s-83.34-8.28-121.96-24.62c-18.56-7.85-36.47-17.57-53.22-28.89-16.6-11.21-32.2-24.09-46.39-38.27-14.18-14.18-27.06-29.79-38.27-46.39-11.32-16.75-21.03-34.65-28.89-53.22-16.33-38.62-24.62-79.65-24.62-121.96s8.28-83.34,24.62-121.96c7.85-18.56,17.57-36.47,28.89-53.22,11.21-16.6,24.09-32.2,38.27-46.39,14.18-14.18,29.79-27.06,46.39-38.27,16.75-11.32,34.65-21.03,53.22-28.89,38.62-16.33,79.65-24.62,121.96-24.62M333.33,0C149.24,0,0,149.24,0,333.33s149.24,333.33,333.33,333.33,333.33-149.24,333.33-333.33S517.43,0,333.33,0h0Z"/>
                            <path class="cls-1" d="M55.56,333.32c0,109.95,63.89,204.97,156.56,249.99L79.61,220.28c-15.41,34.54-24.05,72.77-24.05,113.04ZM520.86,319.31c0-34.34-12.33-58.11-22.9-76.61-14.08-22.89-27.29-42.26-27.29-65.15,0-25.53,19.36-49.3,46.65-49.3,1.23,0,2.4.15,3.6.22-49.42-45.28-115.27-72.93-187.58-72.93-97.05,0-182.42,49.8-232.09,125.2,6.52.21,12.67.34,17.88.34,29.05,0,74.03-3.53,74.03-3.53,14.97-.88,16.74,21.12,1.78,22.89,0,0-15.05,1.76-31.79,2.64l101.15,300.88,60.8-182.31-43.27-118.57c-14.97-.88-29.13-2.64-29.13-2.64-14.97-.88-13.22-23.77,1.76-22.89,0,0,45.86,3.53,73.16,3.53,29.05,0,74.04-3.53,74.04-3.53,14.97-.88,16.74,21.12,1.77,22.89,0,0-15.07,1.76-31.79,2.64l100.39,298.59,28.66-90.8c12.73-39.68,20.19-67.8,20.19-91.57ZM338.21,357.62l-83.36,242.17c24.89,7.32,51.21,11.32,78.48,11.32,32.35,0,63.38-5.58,92.25-15.75-.74-1.19-1.43-2.45-1.99-3.83l-85.38-233.91ZM577.09,200.07c1.19,8.85,1.87,18.34,1.87,28.56,0,28.18-5.28,59.86-21.13,99.49l-84.84,245.3c82.58-48.15,138.12-137.61,138.12-240.09,0-48.29-12.34-93.7-34.02-133.26Z"/>
                        </g>
                    </svg>
                    <h3>Meerdere pagina's</h3>
                </div>
                <div class="content-service">
                    <p>Opzoek naar een <strong>simpele</strong>, <strong>mooie</strong> website met meer pagina's?</p>
                    <ul>
                        <li><strong>Gemakkelijk</strong> zelf aanpasbaar</li>
                        <li>Meerdere pagina's</li>
                        <li>Ruime mogelijkheden</li>
                        <li>Responsive <div class="tooltip tooltip-right">?<span class="tooltiptext">Geoptimaliseerd voor mobiel, tablet, laptop en desktop!</span></div></li>
                        <li><strong>SEO</strong> optimalisatie <div class="tooltip tooltip-right">?<span class="tooltiptext">(Search Engine Optimalisation) beter vindbaar op google</span></div></li>
                        <li><strong>Gratis</strong> tutorial</li>
                    </ul>
                </div>
                <div class="footer-service">
                    <button class="secondair-btn"><span>Meer info...</span></button>
                </div>
            </div>
            <div class="service">
                <div class="header-service">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" preserveAspectRatio="xMidYMid" version="1.1" viewBox="0 0 256 153">
                        <title>WooCommerce Logo</title>
                        <path d="m23.759 0h208.38c13.187 0 23.863 10.675 23.863 23.863v79.542c0 13.187-10.675 23.863-23.863 23.863h-74.727l10.257 25.118-45.109-25.118h-98.695c-13.187 0-23.863-10.675-23.863-23.863v-79.542c-0.10466-13.083 10.571-23.863 23.758-23.863z" fill="#7f54b3"/>
                        <path d="m14.578 21.75c1.4569-1.9772 3.6423-3.0179 6.5561-3.226 5.3073-0.41626 8.3252 2.0813 9.0537 7.4927 3.226 21.75 6.7642 40.169 10.511 55.259l22.79-43.395c2.0813-3.9545 4.6829-6.0358 7.8049-6.2439 4.5789-0.3122 7.3886 2.6016 8.5333 8.7415 2.6016 13.841 5.9317 25.6 9.8862 35.59 2.7057-26.433 7.2846-45.476 13.737-57.236 1.561-2.9138 3.8504-4.3707 6.8683-4.5789 2.3935-0.20813 4.5789 0.52033 6.5561 2.0813 1.9772 1.561 3.0179 3.5382 3.226 5.9317 0.10406 1.8732-0.20813 3.4341-1.0407 4.9951-4.0585 7.4927-7.3886 20.085-10.094 37.567-2.6016 16.963-3.5382 30.179-2.9138 39.649 0.20813 2.6016-0.20813 4.8911-1.2488 6.8683-1.2488 2.2894-3.122 3.5382-5.5154 3.7463-2.7057 0.20813-5.5154-1.0406-8.2211-3.8504-9.678-9.8862-17.379-24.663-22.998-44.332-6.7642 13.32-11.759 23.311-14.985 29.971-6.1398 11.759-11.343 17.795-15.714 18.107-2.8098 0.20813-5.2033-2.1854-7.2846-7.1805-5.3073-13.633-11.031-39.961-17.171-78.985-0.41626-2.7057 0.20813-5.0992 1.665-6.9724zm223.64 16.338c-3.7463-6.5561-9.2618-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0.10406-8.1171-1.665-14.881-4.9951-20.501zm-13.112 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93659-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0 2.7057-0.20813 5.3073-0.72846 7.7008zm-52.033-28.826c-3.7463-6.5561-9.3659-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0-8.1171-1.665-14.881-4.9951-20.501zm-13.216 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93658-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0.10406 2.7057-0.20813 5.3073-0.72846 7.7008z" fill="#fff"/>
                    </svg>
                    <h3>Webshop</h3>
                </div>
                <div class="content-service">
                    <p>Opzoek naar een <strong>Webshop</strong>? D.m.v. WooCommerce bouw ik de webshop die jij nodig bent.</p>
                    <ul>
                        <li><strong>Gemakkelijk</strong> zelf <strong>producten</strong> toevoegen</li>
                        <li>Duidelijk <strong>overzicht</strong> van alle verkopen</li>
                        <li>Meerdere pagina's</li>
                        <li>Responsive <div class="tooltip tooltip-right">?<span class="tooltiptext">Geoptimaliseerd voor mobiel, tablet, laptop en desktop!</span></div></li>
                        <li><strong>SEO</strong> optimalisatie <div class="tooltip tooltip-right">?<span class="tooltiptext">(Search Engine Optimalisation) beter vindbaar op google</span></div></li>
                        <li><strong>Gratis</strong> tutorial</li>
                    </ul>
                </div>
                <div class="footer-service">
                    <button class="secondair-btn"><span>Meer info...</span></button>
                </div>
            </div>
            <div class="service">
                <div class="header-service">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 409.6 409.6">
                        <title>Design icon</title>
                        <defs>
                          <style>
                            .design-svg {
                                stroke-width: 0px;
                                fill: var(--primary-blue);
                            }
                          </style>
                        </defs>
                        <path class="design-svg" d="M0,324c0-88.27,0-176.54,0-264.81.27-.88.63-1.73.8-2.63C4.84,35.46,22.36,19.82,43.71,18.26c7.71-.56,9.75,1.36,9.75,9.22,0,17.06,0,34.13,0,51.19,0,1.43,0,2.85,0,4.5,1.59.09,2.75.2,3.92.2,59.72,0,119.44.04,179.16-.11,2.07,0,4.62-1.2,6.12-2.68,24.61-24.4,49.07-48.96,73.61-73.44,8.87-8.84,19.31-8.84,28.19-.11,5.42,5.33,10.77,10.72,16.12,16.11,9.29,9.37,9.28,19.66-.05,29.06-9.11,9.18-18.27,18.3-27.4,27.46-.97.97-1.86,2.03-3.39,3.71,2.4,0,3.83,0,5.26,0,12.26,0,24.53,0,36.79,0,7.86,0,9.69,1.82,9.69,9.63,0,37.86,0,75.72,0,113.58,0,1.39.12,2.78.22,5.05,5.78-5.83,10.89-11.03,16.06-16.18,4.63-4.62,7.61-4.46,11.83.52v209.61c-2.32,2.33-4.95,3.41-8.41,3.41-66.65-.1-133.3-.08-199.96-.05-3.37,0-6.49-.28-7.94-3.94-1.38-3.5.69-5.79,2.93-8.02,9.82-9.79,19.62-19.6,29.41-29.41.95-.95,1.83-1.98,3.25-3.54-2.55,0-4.14,0-5.73,0-59.45-.01-118.91.09-178.36-.11-16.94-.06-29.96-7.94-38.32-22.58C3.44,336.07,2.11,329.81,0,324ZM157.01,232.89c.04.25.08.49.11.74h4.38c36.4,0,72.79,0,109.19,0,1.33,0,2.7-.13,3.99.11,3.3.62,5.3,2.68,5.18,6.07-.11,3.34-2.06,5.4-5.48,5.76-1.32.14-2.66.09-4,.09-17.6,0-35.2,0-52.8,0-36.14,0-72.28,0-108.41-.01-5.08,0-7.68-2.13-7.66-6.05.03-3.89,2.69-5.96,7.77-5.98,4.67-.02,9.35-.22,13.99.07,3.06.19,4.42-.85,5.4-3.73,5.55-16.22,11.17-32.43,17.11-48.51,1.33-3.6,3.6-7.1,6.22-9.91,6.81-7.31,14.05-14.23,21.13-21.29,1.32-1.32,2.6-2.69,4.04-3.87,2.77-2.25,5.98-2.09,8.26.26,2.29,2.36,2.33,5.49.04,8.28-.84,1.03-1.83,1.94-2.77,2.88-6.97,6.97-13.94,13.92-20.6,20.58,9.24,9.27,18.32,18.39,26.73,26.83,41.15-41.13,82.49-82.46,123.21-123.17-8.6-8.69-17.56-17.73-27.03-27.28-.7.9-1.48,2.18-2.51,3.21-25.62,25.66-51.27,51.31-76.92,76.94-1.13,1.13-2.25,2.31-3.56,3.19-2.57,1.73-5.16,1.3-7.29-.78-2.13-2.08-2.61-4.65-.95-7.27.77-1.22,1.84-2.27,2.87-3.31,9.13-9.16,18.28-18.3,27.42-27.45.9-.9,1.72-1.87,2.92-3.19H53.47v5.1c0,35.73,0,71.46-.02,107.2,0,1.71-.1,3.48-.55,5.12-.8,2.96-2.97,4.32-6.01,4.14-2.87-.17-4.77-1.68-5.29-4.52-.33-1.82-.44-3.7-.44-5.55-.02-57.06-.02-114.13-.02-171.19,0-1.69,0-3.38,0-5.28-1.33.17-2.13.19-2.88.37-15.85,3.98-26.23,18.21-26.24,36.17-.03,72.4-.01,144.79,0,217.19,0,1.11.16,2.21.28,3.92,7.39-7.37,15.44-12.43,25.16-14.18,3.15-.57,3.77-1.93,3.73-4.77-.13-10.93-.13-21.87,0-32.8.05-4.4,2.48-7.11,5.91-7.24,3.41-.13,6.27,2.7,6.31,6.86.12,14,.13,28,0,42-.04,4.53-2.51,6.61-7.1,6.94-2.25.16-4.52.36-6.72.84-20.92,4.61-35.57,29.16-22.15,50.08,7.05,10.98,17.49,15.51,30.16,15.52,60.79.03,121.59-.15,182.38.21,8.13.05,14.08-1.78,19.31-8.06,4.84-5.82,10.58-10.9,16.05-16.17,2.81-2.71,6.17-2.76,8.61-.49,2.59,2.41,2.62,5.82.03,8.93-.77.92-1.66,1.73-2.51,2.58-18.1,18.1-36.2,36.2-54.3,54.31-.95.95-1.83,1.98-2.98,3.22h183.2v-27.68c-.44-.21-.67-.41-.91-.42-2.93-.07-5.86-.04-8.79-.16-4.72-.19-7.26-2.47-7.13-6.27.12-3.56,2.76-5.78,7.17-5.89,3.16-.08,6.32-.02,9.66-.02v-17.33c-.43-.2-.66-.39-.89-.39-2.8-.05-5.6-.04-8.39-.12-4.74-.13-7.44-2.28-7.54-5.96-.12-3.91,2.52-6.18,7.54-6.34,3.03-.1,6.06-.02,9.2-.02v-17.96c-3.49,0-6.68.05-9.86-.01-4.3-.08-6.93-2.44-6.89-6.07.04-3.67,2.58-5.84,7.02-5.91,3.27-.05,6.54-.01,9.82-.01v-18.13c-3.36,0-6.53.08-9.7-.02-4.73-.15-7.26-2.42-7.13-6.24.12-3.56,2.76-5.79,7.16-5.89,3.16-.08,6.33-.01,9.65-.01v-51.7c-.35-.28-.69-.57-1.04-.85-.92,1.25-1.7,2.64-2.79,3.73-33.34,33.4-66.71,66.78-100.09,100.15-3.66,3.66-7.45,4.21-10.11,1.53-2.73-2.74-2.21-6.35,1.45-10.09.65-.67,1.32-1.32,1.98-1.98,26.4-26.4,52.77-52.82,79.24-79.14,2.24-2.23,3.26-4.43,3.25-7.64-.11-39.6-.07-79.2-.07-118.79,0-1.56,0-3.11,0-5.12-1.93,0-3.36,0-4.79,0-14.4,0-28.8.09-43.2-.07-3.08-.03-5.17.98-7.29,3.11-39.45,39.55-78.95,79.05-118.53,118.47-1.89,1.89-4.43,3.4-6.95,4.34-10.41,3.91-20.93,7.54-31.42,11.27ZM314.44,25.78c9.45,9.46,18.44,18.45,27.71,27.72,3.66-3.71,7.7-7.54,11.41-11.66,2.68-2.98,2.4-6.03-.69-9.21-5.74-5.92-11.56-11.76-17.49-17.49-3.37-3.25-6.43-3.22-9.85-.08-3.81,3.51-7.46,7.19-11.08,10.71ZM332.2,62.72c-8.99-8.99-17.98-17.99-26.52-26.54-3.32,3.19-6.91,6.62-10.22,9.8,8.94,8.87,17.96,17.82,27.01,26.81,3.14-3.25,6.54-6.77,9.74-10.07ZM155.23,190.7c-1.78,5.39-3.6,10.9-5.41,16.4,3.04,3.14,6.08,6.28,9.12,9.42.28.29.52.71.86.81.91.28,1.98.8,2.77.54,5.01-1.63,9.95-3.44,14.66-5.1-7.27-7.29-14.45-14.5-21.99-22.07Z"/>
                        <path class="design-svg" d="M327.22,366.37c-10.25,0-20.51-.05-30.76.03-3.28.03-6.2-.47-7.57-3.87-1.29-3.2.25-5.59,2.47-7.8,21.11-21.07,42.21-42.16,63.27-63.29,2.27-2.28,4.78-3.57,7.86-2.31,3.14,1.28,3.83,4.1,3.83,7.25-.03,20.64,0,41.28-.03,61.92,0,5.93-2.25,8.05-8.3,8.06-10.25.02-20.51,0-30.76,0ZM353.77,312.02c-13.84,13.84-28.3,28.31-42.12,42.14h42.12v-42.14Z"/>
                    </svg>
                    <h3>Design/Huisstijl</h3>
                </div>
                <div class="content-service">
                    <p>Heeft jouw bedrijf nog geen eigen <strong>indentiteit</strong>? Laat het ontwerpen!</p>
                    <ul>
                        <li>Logo's</li>
                        <li>Webdesign</li>
                        <li>Kleuren palet</li>
                    </ul>
                </div>
                <div class="footer-service">
                    <button class="secondair-btn"><span>Meer info...</span></button>
                </div>
            </div>
            <div class="service">
                <div class="header-service">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 408.94 325.15">
                        <title>Code icon</title>
                        <defs>
                            <style>
                              .code-svg {
                                stroke-width: 0px;
                                fill: var(--primary-blue);
                              }
                            </style>
                          </defs>
                        <path class="code-svg" d="M408.94,166.54c-3.21,4.13-6.11,8.55-9.68,12.35-29.03,30.94-58.2,61.74-87.28,92.63-4.03,4.28-8.57,7.26-14.68,6.44-6.18-.83-10.57-4.29-12.7-10.16-2.27-6.28-.42-11.73,4.04-16.45,12.96-13.74,25.92-27.48,38.88-41.21,14.87-15.76,29.75-31.51,44.88-47.54-1.14-1.24-2.18-2.4-3.25-3.53-26.75-28.34-53.49-56.68-80.25-85-4.56-4.82-6.62-10.3-4.3-16.75,2.12-5.88,6.52-9.32,12.69-10.16,5.76-.78,10.28,1.78,14.13,5.86,17.88,18.97,35.77,37.92,53.66,56.88,12.05,12.77,24.17,25.47,36.1,38.35,2.91,3.14,5.18,6.87,7.75,10.32v7.98Z"/>
                        <path class="code-svg" d="M166.95,306.59c1.85-12.14,3.96-26.05,6.09-39.96,3.59-23.49,7.19-46.98,10.78-70.48,3.88-25.33,7.75-50.66,11.62-75.99,3.85-25.2,7.69-50.4,11.54-75.6,1.6-10.5,3.11-21.02,4.85-31.49,1.39-8.36,8.99-14.03,16.9-12.93,8.62,1.19,14.46,8.02,13.39,16.77-1.7,13.83-3.95,27.6-6.05,41.38-3.85,25.33-7.75,50.66-11.63,75.99-3.88,25.33-7.77,50.66-11.64,75.99-3.85,25.2-7.68,50.4-11.52,75.6-1.34,8.79-2.58,17.61-4.08,26.37-1.38,8.08-9.05,13.84-16.67,12.8-8.67-1.18-14.22-7.93-13.59-18.44Z"/>
                        <path class="code-svg" d="M36.65,162.55c19.22,20.36,38.11,40.38,57.01,60.4,9.04,9.58,18.11,19.12,27.1,28.75,4.33,4.64,5.93,10.09,3.68,16.18-2.1,5.69-6.36,9.1-12.37,10.03-5.77.89-10.34-1.53-14.2-5.62-8.04-8.51-16.08-17.02-24.11-25.53-22.56-23.89-45.11-47.78-67.66-71.68-8.15-8.64-8.13-16.44.08-25.14,30.4-32.22,60.82-64.42,91.21-96.65,4.62-4.9,9.92-7.6,16.74-5.63,5.87,1.69,9.52,5.66,10.89,11.59,1.36,5.87-.88,10.64-4.85,14.84-18.1,19.14-36.17,38.3-54.25,57.45-9.67,10.24-19.33,20.49-29.26,31.03Z"/>
                    </svg>
                    <h3>Custom</h3>
                </div>
                <div class="content-service">
                    <p>Opzoek naar iets anders? Lees meer of neem contact op en bekijk wat er mogelijk is.</p>
                    <ul>
                        <li>Custom plugin</li>
                        <li>Zelf gebouwde website</li>
                        <li>Iets anders...</li>
                    </ul>
                </div>
                <div class="footer-service">
                    <button class="secondair-btn"><span>Meer info...</span></button>
                </div>
            </div>
        </div>
        <h3>Geen idee wat het<br>beste bij jou past?<br>Neem <Link class="link" to="/contact">contact</Link> op!</h3>
    </div>
    {#if showOverlay_1page}
    <div class="overlay">
        <div class="container overlay-container">
            <div class="overlay-row">
                <button class="overlay-close-btn" on:click|stopPropagation={toggleOverlay_1page}></button>
                <div class="overlay-content">
                    <h2>Wat houdt een 1 page in?</h2>
                    <div class="row">
                        <div class="row-80">
                            <p>
                                Een 1 page website houdt in dat alle content op 1 pagina staat. Neem als voorbeeld deze website van EL-Websolutions. 
                                Er is wel een menu, maar zodra je hierop klikt scrolt de website naar dit element toe! 
                                Het is dus ideal voor bedrijven die puur de mogelijkheid aan hun klanten willen geven om in het kort te laten zien wat het bedrijf doet met contact mogelijkheden.
                            </p>
                            <p>
                                Verder ontkomt je bij een website niet aan meerdere pagina's. Er komen altijd extra pagina's bij zoals; posts, algemene voorwaarden, etc., 
                                maar bij een 1page website blijft het de bedoeling dat alles te bereiken valt vanaf de homepage.
                            </p>
                        </div>
                        <div class="row-20 align-center">
                            <svg class="wp-logo" xmlns="http://www.w3.org/2000/svg" id="W_Mark" data-name="W Mark" viewBox="0 0 666.67 666.67">
                                <title>Wordpress Logo</title>
                                <g id="W_Mark-2" data-name="W Mark">
                                    <path class="cls-1" d="M333.33,20c42.31,0,83.34,8.28,121.96,24.62,18.56,7.85,36.47,17.57,53.22,28.89,16.6,11.21,32.2,24.09,46.39,38.27,14.18,14.18,27.06,29.79,38.27,46.39,11.32,16.75,21.03,34.65,28.89,53.22,16.33,38.62,24.62,79.65,24.62,121.96s-8.28,83.34-24.62,121.96c-7.85,18.56-17.57,36.47-28.89,53.22-11.21,16.6-24.09,32.2-38.27,46.39-14.18,14.18-29.79,27.06-46.39,38.27-16.75,11.32-34.65,21.03-53.22,28.89-38.62,16.33-79.65,24.62-121.96,24.62s-83.34-8.28-121.96-24.62c-18.56-7.85-36.47-17.57-53.22-28.89-16.6-11.21-32.2-24.09-46.39-38.27-14.18-14.18-27.06-29.79-38.27-46.39-11.32-16.75-21.03-34.65-28.89-53.22-16.33-38.62-24.62-79.65-24.62-121.96s8.28-83.34,24.62-121.96c7.85-18.56,17.57-36.47,28.89-53.22,11.21-16.6,24.09-32.2,38.27-46.39,14.18-14.18,29.79-27.06,46.39-38.27,16.75-11.32,34.65-21.03,53.22-28.89,38.62-16.33,79.65-24.62,121.96-24.62M333.33,0C149.24,0,0,149.24,0,333.33s149.24,333.33,333.33,333.33,333.33-149.24,333.33-333.33S517.43,0,333.33,0h0Z"/>
                                    <path class="cls-1" d="M55.56,333.32c0,109.95,63.89,204.97,156.56,249.99L79.61,220.28c-15.41,34.54-24.05,72.77-24.05,113.04ZM520.86,319.31c0-34.34-12.33-58.11-22.9-76.61-14.08-22.89-27.29-42.26-27.29-65.15,0-25.53,19.36-49.3,46.65-49.3,1.23,0,2.4.15,3.6.22-49.42-45.28-115.27-72.93-187.58-72.93-97.05,0-182.42,49.8-232.09,125.2,6.52.21,12.67.34,17.88.34,29.05,0,74.03-3.53,74.03-3.53,14.97-.88,16.74,21.12,1.78,22.89,0,0-15.05,1.76-31.79,2.64l101.15,300.88,60.8-182.31-43.27-118.57c-14.97-.88-29.13-2.64-29.13-2.64-14.97-.88-13.22-23.77,1.76-22.89,0,0,45.86,3.53,73.16,3.53,29.05,0,74.04-3.53,74.04-3.53,14.97-.88,16.74,21.12,1.77,22.89,0,0-15.07,1.76-31.79,2.64l100.39,298.59,28.66-90.8c12.73-39.68,20.19-67.8,20.19-91.57ZM338.21,357.62l-83.36,242.17c24.89,7.32,51.21,11.32,78.48,11.32,32.35,0,63.38-5.58,92.25-15.75-.74-1.19-1.43-2.45-1.99-3.83l-85.38-233.91ZM577.09,200.07c1.19,8.85,1.87,18.34,1.87,28.56,0,28.18-5.28,59.86-21.13,99.49l-84.84,245.3c82.58-48.15,138.12-137.61,138.12-240.09,0-48.29-12.34-93.7-34.02-133.26Z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h4>Wat kun je verwachten:</h4>
                    <ul>
                        <li>Een header(foto, video, tekst)</li>
                        <li><strong>Gemakkelijk</strong> zelf aanpasbaar</li>
                        <li>Alles op 1 pagina</li>
                        <li>Gebruiksvriendelijke & overzichtelijke pagina</li>
                        <li>Je eigen huisstijl wordt toegepast op de website(Logo's, kleuren, font)</li>
                        <li>Contact sectie</li>
                        <li>Responsive <div class="tooltip tooltip-right">?<span class="tooltiptext">Geoptimaliseerd voor mobiel, tablet, laptop en desktop!</span></div></li>
                        <li><strong>SEO</strong> optimalisatie <div class="tooltip tooltip-right">?<span class="tooltiptext">(Search Engine Optimalisation) beter vindbaar op google</span></div></li>
                        <li><strong>Gratis</strong> tutorial voor het aanpassen van content</li>
                    </ul>
                    <p>Overige opties:</p>
                    <ul>
                        <li>Van de header een carousel maken(laat om de 3seconden een andere foto zien)</li>
                        <li>Een lijst van posts(bijv. "het laatste nieuws")</li>
                        <li>De mogelijkheid voor een contact formulier</li>
                        <li>Een google maps pin locatie van jou bedrijf op de website.</li>
                    </ul>
                    <p>Verder ben ik erg flexibel en kun je bij mij met al je vragen terecht. Bij coderen is alles mogelijk, wel ga ik kijken of het ook efficiënter kan of wel nodig is.</p>
                    <h3>Vragen? Neem direct <Link class="link" to="/contact">contact</Link> op!</h3>
                </div>
            </div>
        </div>
    </div>
    {/if}
</section>
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        font-weight: 600;
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        text-decoration: none;
        font-size: 40px;
        text-align: center;
    }
    h3 {
        font-weight: 400;
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        text-decoration: none;
        font-size: 36px;
    }
    .services {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .service {
        background: var(--primary-gradient);
        border-radius: var(--primary-border-radius);
        box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 20px -10px;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        transform-style: preserve-3d; /* Allow 3D transformations */
        perspective: 1000px; /* Depth of 3D effect */
    }
    .service:hover {
        cursor: pointer;
        /* transform: translateY(-10px); */
        box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 35px -5px;
    }
    .header-service {
        height: 130px;
        background: #fff;
        margin: 4px 4px 0 4px;
        padding: 10px 0;
        border-radius: calc(var(--primary-border-radius) - 4px) calc(var(--primary-border-radius) - 4px) 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .header-service h3 {
        font-weight: 600;
        color: var(--primary-blue);
        font-size: 24px;
        margin: 5px;
    }
    .content-service {
        padding: 10px;
        color: #fff;
    }
    .content-service ul {
        padding-left: 25px;
    }
    .content-service ul li {
        font-weight: 300;
        font-size: 14px;
    }
    .footer-service {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    /* Overlay */
    .overlay {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary-gradient-opacity);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .overlay-row {
        width: calc(100% - 40px);
        height: 100%;
        background: white;
        padding: 20px;
        border-radius: var(--primary-border-radius);
        position: relative;
    }
    .overlay-content {
        overflow: auto;
        max-height: 80vh;
        margin-top: 30px;
    }
    .overlay .tooltip{
        background: #000;
        color: #fff;
        top: -1px;
    }
    .overlay h2{
        width: fit-content;
        margin: 0px;
    }
    .overlay .wp-logo{
        max-width: 150px;
    }
    .overlay-close-btn {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 20px;
        top: 20px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0px;
        &:before {
            content: "";
            position: absolute;
            height: 4px;
            width: 30px;
            background-color: var(--primary-blue);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            transition: ease-out .3s all;
            border-radius: 4px;
        }
        &:after {
            content: "";
            position: absolute;
            height: 4px;
            width: 30px;
            background-color: var(--primary-blue);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            transition: ease-out .3s all;
            border-radius: 4px;
        }
        &:hover, &:focus {
            &:before {
                transform: translate(-50%, -50%) rotate(135deg);
            }
            &:after {
                transform: translate(-50%, -50%) rotate(225deg);
            }
        }
    }
</style>