import React from 'react';
import { ArrowRight, Heart, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-white/90 z-10"></div>
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                <img
                    src="/assets/img/hero-bg.jpg"
                    alt="Bénévoles Générations Entraide"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.parentElement.style.backgroundColor = '#EADDD8';
                    }}
                />
            </motion.div>

            <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    L'UNION DES CŒURS <br />
                    <span className="text-white/90">& DES GÉNÉRATIONS</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-white font-medium max-w-3xl mb-10 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Lutter contre la pauvreté et l'indifférence en retissant le lien social. Une approche humaine et lumineuse.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.a
                        href="#devenir-benevole"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full flex items-center justify-center gap-2 text-lg shadow-xl hover:shadow-2xl transition-all"
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        DEVENIR BÉNÉVOLE
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        href="#faire-un-don"
                        className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold rounded-full flex items-center justify-center gap-2 text-lg hover:bg-white/30 transition-all"
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        NOUS SOUTENIR
                        <Heart className="w-5 h-5" />
                    </motion.a>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {[
                        { title: "Lien Social", desc: "Briser la solitude en créant des moments de partage entre les générations.", delay: 0.8 },
                        { title: "Aide Alimentaire", desc: "Distribution de repas et produits essentiels pour lutter contre la précarité.", delay: 1.0 },
                        { title: "Accompagnement", desc: "Soutien scolaire et aide administrative pour favoriser l'insertion.", delay: 1.2 }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg hover:bg-white/20 transition-all text-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: card.delay }}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-white/80 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
