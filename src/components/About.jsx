import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users2, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="qui-sommes-nous" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl transform translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-50/50 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Column */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white/70 backdrop-blur-md border border-white/60 p-10 rounded-[40px] shadow-xl relative">
                            {/* Decorative highlight */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-200/50 rounded-full blur-xl -z-10"></div>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 leading-tight">
                                Qui sommes-nous ?
                            </h2>
                            <h3 className="text-xl text-orange-600 font-semibold mb-6">
                                Une histoire de solidarité et d'engagement.
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Chez <strong>Générations Entraide</strong>, nous croyons que la chaleur humaine est le meilleur remède contre l'exclusion.
                                Depuis nos débuts, nous tissons des liens intergénérationnels pour construire une société plus juste où personne n'est laissé pour compte.
                                Notre mission est simple : rassembler les cœurs pour briser la solitude.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-10">
                                <div className="text-center">
                                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange-500">
                                        <Heart className="w-7 h-7" />
                                    </div>
                                    <span className="font-bold text-gray-700 text-sm">Solidarité</span>
                                </div>
                                <div className="text-center">
                                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange-500">
                                        <Users2 className="w-7 h-7" />
                                    </div>
                                    <span className="font-bold text-gray-700 text-sm">Respect</span>
                                </div>
                                <div className="text-center">
                                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-orange-500">
                                        <MapPin className="w-7 h-7" />
                                    </div>
                                    <span className="font-bold text-gray-700 text-sm">Proximité</span>
                                </div>
                            </div>

                            <a href="#projets" className="inline-block px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                                Découvrir notre histoire
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img
                                src="/assets/img/about-community.jpg"
                                alt="Communauté Générations Entraide"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.backgroundColor = '#f3f4f6';
                                    e.target.parentElement.innerHTML = '<div class="h-96 flex item-center justify-center flex-col text-center p-10"><p class="text-secondary font-bold text-xl mb-2">Photo Communauté</p><p class="text-gray-500">Une photo chaleureuse de groupe ici</p></div>';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[30px] shadow-xl max-w-xs hidden md:block"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                                    5k+
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Impact social</p>
                                    <p className="font-bold text-secondary">Repas partagés</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
