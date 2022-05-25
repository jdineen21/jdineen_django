import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const [submitted, setSubmitted] = React.useState(false);
    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (data.g_recaptcha_response != null) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(data)
            };
        
            const response = await fetch('/api/contact/', requestOptions);
            const jsonData = await response.json();
    
            setSubmitted(true);
        } else {
            setError('g_recaptcha', { type: 'required', message: 'ReCAPTCHA is required' });
        }
    }

    function onChange(value) {
        setValue('g_recaptcha_response', value);
    }

    if (submitted) {
        return <p className="contact_prompt">Thank you! Your message has been sent.</p>;
    }

    return (
        <div>
            <p className="contact_prompt">Have a question?</p>
            <form onSubmit={handleSubmit(onSubmit)} className="contact_form" id="contact_form">
                <input {...register("name", { required: true, maxLength: 20 })} className="contact_input" placeholder="Name" />
                {errors.name?.type === 'required' && <p>Name is required</p>}

                <input {...register("email_address", { required: true, maxLength: 20 })} className="contact_input" placeholder="Email" />
                {errors.email_address?.type === 'required' && <p>Email address is required</p>}

                <input {...register("message", { required: true, maxLength: 20 })} className="contact_textarea" placeholder="Message" />
                {errors.message?.type === 'required' && <p>Message is required</p>}

                <ReCAPTCHA {...register("g_recaptcha")} sitekey="6LfUhX4fAAAAABXqC-2PGmk2crPNQw-wGhM0oV5p" onChange={onChange} />
                {errors.g_recaptcha?.type === 'required' && <p>{errors.g_recaptcha.message}</p>}
                <input className="contact_submit" type="submit" />
            </form>
        </div>
    );
}