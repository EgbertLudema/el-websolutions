// Import your page components
import HomePage from './routes/HomePage.svelte';
import ContactPage from './routes/ContactPage.svelte';

// Define your route configuration
export const routes = {
    '': HomePage,
    '/contact': ContactPage,
};
