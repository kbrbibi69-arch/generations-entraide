import React from 'react';
import { motion } from 'framer-motion';
import { Users, Utensils, ArrowRight, BookOpen } from 'lucide-react';

const Actions = () => {
    const actions = [
        {
            title: "Lien Social",
            subtitle: "Briser la solitude",
            description: "Nous organisons des rencontres intergénérationnelles et des événements conviviaux pour combattre l'isolement et recréer du lien au cœur des quartiers.",
            icon: <Users className="w-10 h-10 text-orange-500" />,
            delay: 0.2
        },
        {
            title: "Aide Alimentaire",
            subtitle: "Lutter contre la précarité",
            description: "Distribution de colis alimentaires et de repas chauds pour les familles et les personnes en situation de grande précarité, dans le respect de la dignité.",
            icon: <Utensils className="w-10 h-10 text-orange-500" />,
            delay: 0.4
        },
        {
            title: "Accompagnement",
            subtitle: "Soutien scolaire et administratif",
            description: "Des bénévoles dédiés pour le soutien scolaire des enfants et l'aide aux démarches administratives pour faciliter l'intégration sociale.",
            icon: <BookOpen className="w-10 h-10 text-orange-500" />,
            delay: 0.6
        }
    ];

    return (
        <section id="nos-actions" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                        Nos Actions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment nous agissons au quotidien pour tisser des liens, soutenir les plus démunis et accompagner les générations futures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {actions.map((action, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[30px] shadow-lg hover:shadow-2xl transition-all group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: action.delay }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {action.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{action.title}</h3>
                            <h4 className="text-orange-600 font-semibold mb-4 text-lg">{action.subtitle}</h4>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {action.description}
                            </p>

                            <a href="#" className="inline-flex items-center text-secondary font-bold group-hover:text-orange-600 transition-colors">
                                En savoir plus
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Actions;
