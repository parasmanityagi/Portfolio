"use client"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleForm = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    const resetForm = () => {
        setFormValues({ name: "", email: "", message: "" });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (formValues.name !== "" && formValues.email !== "" && formValues.message !== "") {
            emailjs
                .sendForm('service_le5rmi7', 'template_akqxsoq', form.current, {
                    publicKey: 'At0CzjN1AQBOoMM6K',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        resetForm();
                        setSuccess(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    useEffect(()=>{
        setTimeout(()=> {setSuccess(false)}, 2000)
    }, [success])

    return (
        <form ref={form} onSubmit={sendEmail} className="max-w-lg min-w-[300px] mx-auto p-4">
            <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    onChange={handleForm}
                    value={formValues.name}
                    className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleForm}
                    value={formValues.email}
                    className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
                />
            </div>
            <div className="mb-3">
                <textarea
                    placeholder="Your message"
                    name="message"
                    onChange={handleForm}
                    value={formValues.message}
                    className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
                    rows="4"
                />
            </div>
            <div>
                {success && <span className='text-green-500 px-10 bg-black'>Success</span>}
            </div>

            <br />
            <button className="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
                Send a message
            </button>
        </form>
    )
}

export default ContactForm
