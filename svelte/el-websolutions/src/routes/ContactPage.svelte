<script>
    // Import onMount from Svelte for script injection
    import { onMount } from 'svelte';
    import { currentPath } from '../store.js';
    import Footer from '../components/Footer.svelte';

    let name = '';
    let email = '';
    let subject = '';
    let description = '';
    let emailValid = true;

    // Flags to check if the user has interacted with the fields
    let touched = {
        name: false,
        email: false,
        subject: false,
        description: false,
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reactive statement to validate email whenever it changes
    $: emailValid = emailPattern.test(email);

    onMount(() => {
        currentPath.set('/contact');
        // Load reCAPTCHA script
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LcM650pAAAAAPcScGKmOP84USajaX6pPdGWWjZY';
        document.head.appendChild(script);
    });

    // Function to mark a field as touched
    function markTouched(field) {
        touched[field] = true;
    }

    const submitForm = async (event) => {
        event.preventDefault();

        grecaptcha.ready(async () => {
            const token = await grecaptcha.execute('6LcM650pAAAAAPcScGKmOP84USajaX6pPdGWWjZY', { action: 'submit' });
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('description', description);
            formData.append('token', token); // Append the reCAPTCHA token to your form data

            // Post the data to the API
            const response = await fetch('https://el-websolutions.com/api/sendmail.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                name = email = subject = description = ''; // Reset form fields
            } else {
                console.log('Failed to submit form');
            }
        });
    };
</script>

<section id="contact">
    <div class="container contact-margin">
        <div class="contact-left">
            <h2>Contact</h2>
            <p>Voor al je vragen kun je contact op nemen d.m.v. het formulier, mij mailen, bellen, appen of een dm sturen via Instagram.</p>
            <div class="socials-row">
                <div class="socials">
                    <a href="mailto:info@el-websolutions.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="Outline" viewBox="0 0 24 24"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg>
                    </a>
                    <a href="tel:+31630081511">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"/></svg>
                    </a>
                    <a href="https://wa.me/+31630081511">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                            <g id="WA_Logo">
                                <g>
                                    <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/el_websolutions/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <!-- <a href="https://www.facebook.com/profile.php?id=61556290359961" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a> -->
                </div>
                <img class="contact-photo" src="images/Contact_foto.png" alt="EL-Websolutions Contact">
            </div>
        </div>
        <div class="contact-right">
            <form on:submit={submitForm}>
                <div class="form-row">
                    <div class="input-data">
                        <!-- On focus sets the touched status to true. Sets class invalid if the input is marked as touched and is empty -->
                        <input type="text" id="name" bind:value={name} required class:invalid={touched.name && name.trim() === ''} on:focus={() => markTouched('name')}>
                        <div class="underline"></div>
                        <label for="name">Naam</label>
                    </div>
                </div>
    
                <div class="form-row">
                    <div class="input-data">
                        <!-- On focus sets the touched status to true. Sets class invalid if the input is marked as touched and is not meeting the requirements of a email -->
                        <input type="email" id="email" bind:value={email} required class:invalid={touched.email && !emailValid} on:focus={() => markTouched('email')}>
                        <div class="underline"></div>
                        <label for="email">Mail</label>
                    </div>
                </div>
    
                <div class="form-row">
                    <div class="input-data">
                        <!-- On focus sets the touched status to true. Sets class invalid if the input is marked as touched and is empty -->
                        <input type="text" id="subject" bind:value={subject} required class:invalid={touched.subject && subject.trim() === ''} on:focus={() => markTouched('subject')}>
                        <div class="underline"></div>
                        <label for="subject">Onderwerp</label>
                    </div>
                </div>
    
                <div class="form-row">
                    <div class="input-data textarea">
                        <!-- On focus sets the touched status to true. Sets class invalid if the input is marked as touched and is empty -->
                        <textarea id="description" bind:value={description} required class:invalid={touched.description && description.trim() === ''} on:focus={() => markTouched('description')}></textarea>
                        <div class="underline"></div>
                        <label for="description">Schrijf je bericht</label>
                    </div>
                </div>
                
                <button class="submit" type="submit">Verstuur</button>
            </form>
        </div>
    </div>
</section>
<Footer />
<style>
#contact{
    background: var(--primary-gradient);
    padding-bottom: 180px;
}
.contact-margin{
    margin: 120px 0px 60px;
}
.container{
    display: flex;
    flex-direction: row-reverse;
    background: #fff;
    justify-content: space-between;
    position: relative;
}
.contact-left, .contact-right{
    padding: 20px;
}
.contact-left{
    width: 35%;
    display: flex;
    flex-direction: column;
}
h2{
    font-size: 40px;
    font-weight: 600;
    margin: 20px 0;
    color: var(--primary-purple);
}
p{
    margin: 5px 0;
}
.socials-row{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
}
.contact-photo{
    width: 260px;
}
.socials{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    justify-content: space-between;
}
.socials a{
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
}
.socials a svg{
    fill: var(--primary-blue);
    transition: all 0.3s ease;
}
.socials a:hover, .socials a:hover svg{
    fill: #1085de;
    transform: scale(1.05) translateY(-1px);
}
.contact-right{
    height: 100%;
    width: 65%;
}
form .form-row{
    display: flex;
    margin: 32px 0;
}
form .form-row .input-data{
    width: 100%;
    height: 40px;
    margin: 0 20px;
    position: relative;
}
form .form-row .textarea{
    height: 70px;
}
.input-data input,
.textarea textarea{
    outline: 1px solid #0000000a;
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid rgba(0,0,0, 0.12);
    padding-left: 5px;
}
.input-data input.invalid ~ label, .textarea textarea.invalid ~ label{
    color: var(--invalid);
    transform: translateY(-20px);
    font-size: 14px;
    opacity: 0.8;
}
.input-data input:valid ~ label, .textarea textarea:valid ~ label{
    transform: translateY(-20px);
    font-size: 14px;
    color: var(--primary-blue);
    opacity: 1;
}
.input-data input:focus ~ label, .textarea textarea:focus ~ label{
    transform: translateY(-20px);
    font-size: 14px;
    color: var(--primary-purple);
    opacity: 1;
}
.textarea textarea{
    resize: none;
    padding: 10px 0px 0px 5px;
    height: calc(100% - 7px);
    font-family: 'Roboto';
    font-size: 14px;
}
.input-data label{
    position: absolute;
    pointer-events: none;
    bottom: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    opacity: 0.6;
    margin-left: 5px;
    color: #000;
    transform: translateY(0px);
}
.textarea label{
    width: 100%;
    bottom: 40px;
}
.input-data .underline{
    position: absolute;
    bottom: -4px;
    height: 2px;
    left: 0px;
    right: 0px;
    width: calc(100% + 6px);
}

.input-data .underline:before{
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}
.input-data input.invalid ~ .underline:before,
.textarea textarea.invalid ~ .underline:before{
    transform: scale(1);
    background: var(--invalid);
}
.input-data input:valid ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
    transform: scale(1);
    background: var(--primary-blue);
}
.input-data input:focus ~ .underline:before,
.textarea textarea:focus ~ .underline:before{
    transform: scale(1);
    background: var(--primary-purple);
}
button.submit{
    color: #fff;
    background: var(--primary-gradient);
    border: none;
    font-size: 20px;
    padding: 8px 40px;
    transition: all 0.3s ease;
    opacity: 1;
    margin-left: 20px;
}
button.submit:hover{
    transform: scale(1.05) translateY(-4px);
    border-radius: 3px;
    box-shadow: 0 5px 20px -15px black;
}
button.submit:active{
    transform: scale(0.95);
    opacity: 0.95;
}
@media (max-width: 700px) {
    .container form{
        padding: 10px 0 0 0;
    }
    .container form .form-row{
        display: block;
    }
    form .form-row .input-data{
        margin: 35px 0!important;
    }
}
</style>