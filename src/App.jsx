import React from 'react';

// Main App Component
function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
            {/* Navbar - Simple navigation for sections */}
            <nav className="fixed w-full bg-gray-800 bg-opacity-90 z-20 shadow-lg py-4">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                    <a href="#hero" className="text-2xl font-bold text-indigo-400 rounded-lg px-3 py-1 hover:bg-indigo-700 transition-colors duration-300">Adam Swain</a>
                    <div className="space-x-4">
                        <a href="#projects" className="text-lg hover:text-indigo-400 transition-colors duration-300 rounded-lg px-3 py-1 hover:bg-gray-700">Projects</a>
                        <a href="#skills" className="text-lg hover:text-indigo-400 transition-colors duration-300 rounded-lg px-3 py-1 hover:bg-gray-700">Skills</a>
                        <a href="#contact" className="text-lg hover:text-indigo-400 transition-colors duration-300 rounded-lg px-3 py-1 hover:bg-gray-700">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
                {/* Background gradient for visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 opacity-75"></div>
                {/* Animated shapes for a modern touch */}
                <div className="absolute animate-blob mix-blend-multiply filter blur-xl opacity-70 w-72 h-72 rounded-full bg-purple-500 top-0 left-0"></div>
                <div className="absolute animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl opacity-70 w-72 h-72 rounded-full bg-blue-500 bottom-0 right-0"></div>
                <div className="absolute animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl opacity-70 w-72 h-72 rounded-full bg-indigo-500 top-1/4 right-1/4"></div>

                <div className="relative z-10 max-w-4xl mx-auto bg-gray-800 bg-opacity-70 rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse-slow">
                        Hi, I'm Adam Swain
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-300 mb-6">
                        I am passionate Web Developer & Software Engineer building modern, responsive, and user-friendly web applications. I have been building web applications for over 8 years.
                        I have a strong foundation in front-end and back-end technologies, and I love creating solutions that make a difference.
                    </p>
                    <a
                        href="#projects"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                        View My Work
                    </a>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Project Card 1 */}
                        <div className="bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-indigo-500">
                            <h3 className="text-2xl font-semibold mb-3 text-white">PWA Storefront</h3>
                            <p className="text-gray-400 mb-4">
                                A Progressive Web Application storefront, functional and designed for a seamless user experience across devices.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-purple-700 text-purple-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">React</span>
                                <span className="bg-blue-700 text-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">Tailwind CSS</span>
                                <span className="bg-green-700 text-green-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">PWA</span>
                            </div>
                            <a
                                href="https://github.com/aswain009/PWA"
                                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                            >
                                View Project &rarr;
                            </a>
                        </div>

                        {/* Project Card 2 */}
                        <div className="bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-indigo-500">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Interactive Portfolio (This one!)</h3>
                            <p className="text-gray-400 mb-4">
                                A dynamic and visually appealing portfolio website showcasing modern web development skills and projects.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-purple-700 text-purple-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">React</span>
                                <span className="bg-blue-700 text-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">Tailwind CSS</span>
                                <span className="bg-yellow-700 text-yellow-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">Animations</span>
                            </div>
                            <a
                                href="https://github.com/aswain009/interactivePortfolio"
                                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                            >
                                View Project &rarr;
                            </a>
                        </div>

                        {/* Project Card 3 - Placeholder */}
                        <div className="bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-indigo-500">
                            <h3 className="text-2xl font-semibold mb-3 text-white">Python FastAPI</h3>
                            <p className="text-gray-400 mb-4">
                                This is the code for a Python FastAPI backend application, demonstrating RESTful API development and integration.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-red-700 text-red-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">Python</span>
                                <span className="bg-teal-700 text-teal-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">FastAPI</span>
                                <span className="bg-orange-700 text-orange-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">SQLModel</span>
                            </div>
                            <a
                                href="https://github.com/aswain009/pythonAPI"
                                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-300"
                            >
                                View Project &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">My Skills</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Skill Card 1 */}
                        <div className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-purple-500">
                            <i className="fab fa-react text-4xl text-blue-400"></i>
                            <span className="text-xl font-medium text-white">React.js</span>
                        </div>
                        {/* Skill Card 2 */}
                        <div className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-blue-500">
                            <i className="fab fa-js-square text-4xl text-yellow-400"></i>
                            <span className="text-xl font-medium text-white">JavaScript (ES6+)</span>
                        </div>

                        {/* Skill Card - Python */}
                        <div
                            className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-yellow-500">
                            <i className="fab fa-python text-4xl text-blue-400"></i>
                            <span className="text-xl font-medium text-white">Python</span>
                        </div>

                        {/* Skill Card - Fast API */}
                        <div
                            className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-green-500">
                            <i className="fas fa-bolt text-4xl text-green-400"></i>
                            <span className="text-xl font-medium text-white">Fast API</span>
                        </div>

                        {/* Skill Card - SQL */}
                        <div
                            className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-purple-500">
                            <i className="fas fa-database text-4xl text-purple-400"></i>
                            <span className="text-xl font-medium text-white">SQL</span>
                        </div>

                        {/* Skill Card - PHP */}
                        <div
                            className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-indigo-500">
                            <i className="fab fa-php text-4xl text-indigo-400"></i>
                            <span className="text-xl font-medium text-white">PHP</span>
                        </div>

                        {/* Skill Card 3 */}
                        <div className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-orange-500">
                            <i className="fab fa-html5 text-4xl text-orange-400"></i>
                            <span className="text-xl font-medium text-white">HTML5</span>
                        </div>
                        {/* Skill Card 4 */}
                        <div className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-red-500">
                            <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
                            <span className="text-xl font-medium text-white">CSS3 & Tailwind CSS</span>
                        </div>
                        {/* Skill Card 5 */}
                        <div className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-teal-500">
                            <i className="fab fa-node-js text-4xl text-green-400"></i>
                            <span className="text-xl font-medium text-white">Node.js</span>
                        </div>
                        {/* Skill Card 6 */}
                        <div className="bg-gray-900 rounded-full shadow-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-transform duration-300 border border-gray-700 hover:border-white-500">
                            <i className="fab fa-github text-4xl text-gray-400"></i>
                            <span className="text-xl font-medium text-white">Git & GitHub</span>
                        </div>
                        {/* Add more skills as needed */}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">Get In Touch</h2>
                    <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
                        <p className="text-lg text-gray-300 text-center mb-8">
                            I'm currently looking for new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <form
                            action="mailto:swain.adam.v@gmail.com"
                            method="POST"
                            encType="text/plain"
                            className="space-y-6"
                        >
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
                            <input
                                type="submit"
                                value="Send Email"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300"
                            />
                        </form>
                        <div className="mt-8 text-center text-gray-400">
                            <p>Or connect with me on:</p>
                            <div className="flex justify-center space-x-6 mt-4">
                                <a href="https://www.linkedin.com/in/adam-s-b217a610a/" className="text-3xl hover:text-indigo-400 transition-colors duration-300">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/aswain009" className="text-3xl hover:text-indigo-400 transition-colors duration-300">
                                    <i className="fab fa-github"></i>
                                </a>
                                {/* Add more social links as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-8 text-center text-gray-400 text-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p>&copy; {new Date().getFullYear()} Adam Swain. All rights reserved.</p>
                    <p className="mt-2">Built with React & Tailwind CSS</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
