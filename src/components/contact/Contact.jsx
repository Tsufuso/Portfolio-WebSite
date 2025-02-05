import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandLinkedin } from 'react-icons/tb';

const Contact = () => {
    const form = useRef();

    const handleSendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get('name');
        const subject = formData.get('subject') || `Message from ${name}`;
        const message = formData.get('message');

        // Construct the mailto link
        const mailtoLink = `mailto:mr.lalaoui.rayane@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        // Open the default email client (Outlook, Gmail, etc.)
        window.location.href = mailtoLink;

        form.current.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>mr.lalaoui.rayane@gmail.com</h5>
                        <a href="mailto:mr.lalaoui.rayane@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Lalaoui Hassani Rayane</h5>
                        <a href="https://www.linkedin.com/in/rayane-lalaoui-hassani/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={handleSendEmail}>
                    <input type="text" name='name' placeholder='Your Email' required />
                    <input type="text" name='subject' placeholder='Subject (Optional)' />
                    <textarea name='message' rows="7" placeholder='Your Message , be free to ask' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;