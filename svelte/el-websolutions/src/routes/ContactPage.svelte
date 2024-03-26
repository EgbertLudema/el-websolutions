<script>
    // Import onMount from Svelte for script injection
    import { onMount } from 'svelte';

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
    <div class="container">
        <div class="contact-left">
            <h2>Contact</h2>
            <p>Voor al je vragen kun je contact op nemen d.m.v. het formulier.</p>
            <div class="socials">
                <a target="_blank" href="https://www.instagram.com/el_websolutions/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a target="_blank" href="facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
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
<style>
#contact{
    background: var(--primary-gradient);
}
.container{
    display: flex;
    flex-direction: row;
    background: #fff;
    justify-content: space-between;
    margin-top: 60px;
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
.socials{
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
}
.socials a{
    width: 40px;
    height: 40px;
    background: #fff;
    border: 2px solid var(--primary-blue);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    transition: all 0.3s ease;
}
.socials a svg{
    fill: var(--primary-blue);
}
.socials a:hover{
    background: var(--primary-blue);
}
.socials a:hover, .socials a:hover svg{
    fill: #fff;
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