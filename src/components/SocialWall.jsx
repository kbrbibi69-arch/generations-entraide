import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialWall = () => {
    const socials = [
        {
            name: 'Instagram',
            icon: Instagram,
            image: '/assets/img/social-insta.jpg',
            link: 'https://www.instagram.com/generations_entraide/',
            color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
            placeholder: 'Screenshot feed Instagram'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            image: '/assets/img/social-fb.jpg',
            link: 'https://www.facebook.com/p/Generations-Entraide-61559004082171/',
            color: 'bg-[#1877F2]',
            placeholder: 'Screenshot feed Facebook'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            image: '/assets/img/social-linkedin.jpg',
            link: 'https://www.linkedin.com/company/generations-entraide/',
            color: 'bg-[#0A66C2]',
            placeholder: 'Screenshot feed LinkedIn'
        }
    ];

    return (
        <section id="suivez-nous" className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-secondary text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Suivez-nous
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {socials.map((social, index) => (
                        <motion.div
                            key={index}
                            className="glass-card flex flex-col h-full rounded-[30px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-white/80"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="bg-gray-50 flex-grow relative min-h-[400px]">
                                {/* <!-- PLACEHOLDER POUR IMAGE PJ : [${social.placeholder}] --> */}
                                <img
                                    src={social.image}
                                    alt={`Flux ${social.name}`}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 font-medium p-4 text-center"><span class="mb-2 text-2xl">📱</span>${social.placeholder}</div>`;
                                    }}
                                />
                            </div>
                            <div className="p-6 bg-white">
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-3 ${social.color} hover:opacity-90 transition-opacity`}
                                >
                                    <social.icon className="w-5 h-5" />
                                    SUIVRE SUR {social.name.toUpperCase()}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialWall;
