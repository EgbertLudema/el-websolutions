<script>
    import { onMount } from 'svelte';

    let reviews = [];

    // onMount(async () => {
    //     const response = await fetch('/api/reviews');
    //     if (response.ok) {
    //         reviews = await response.json();
    //     } else {
    //         console.error('Failed to fetch reviews');
    //     }
    // });
    // API CODE: AIzaSyD62g3AeFhctC0HrftHrh2yPHoPbFKTiAg
</script>

<section id="reviews">
    <h2>Reviews</h2>
    <!-- {#if reviews.length > 0}
        <div class="reviews-container">
            {#each reviews as review (review.author_name)}
                <div class="review">
                    <p>{review.author_name}</p>
                    <p>{review.rating} stars</p>
                    <p>{review.text}</p>
                </div>
            {/each}
        </div>
    {/if} -->
</section>
