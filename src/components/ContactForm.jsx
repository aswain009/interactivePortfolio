import React, { useRef } from 'react';

function ContactForm() {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

        window.location.href = `mailto:swain.adam.v@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your Name"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your message..."
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
