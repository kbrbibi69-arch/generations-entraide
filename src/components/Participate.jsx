import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, CheckCircle, Backpack, Utensils, Lock } from 'lucide-react';

const Participate = () => {
    // Donation options
    const donationOptions = [
        {
            amount: "10€",
            title: "Panier Repas",
            desc: "Offrez un repas chaud complet.",
            icon: <Utensils className="w-8 h-8 text-orange-500" />,
            color: "bg-orange-50",
            link: "https://www.paypal.com/paypalme/GenerationsEntraide/10"
        },
        {
            amount: "20€",
            title: "Kit Scolaire",
            desc: "Financez les fournitures pour la rentrée.",
            icon: <Backpack className="w-8 h-8 text-blue-500" />,
            color: "bg-blue-50",
            link: "https://www.paypal.com/paypalme/GenerationsEntraide/20"
        },
        {
            amount: "Libre",
            title: "Soutien Global",
            desc: "Choisissez le montant de votre aide.",
            icon: <Heart className="w-8 h-8 text-red-500" />,
            color: "bg-red-50",
            link: "https://www.paypal.com/paypalme/GenerationsEntraide"
        }
    ];

    return (
        <section id="participer" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/assets/img/pattern.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* DONATION SECTION */}
                <motion.div
                    id="faire-un-don"
                    className="mb-24 text-center scroll-mt-32"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-bold text-sm mb-4">
                        Faire un don
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                        Soutenez nos actions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                        Votre générosité est notre force. Chaque don permet d'agir concrètement sur le terrain.
                        <br />
                        <span className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-2">
                            <Lock className="w-4 h-4" /> Paiement 100% sécurisé & Déductible à 75%
                        </span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
                        {donationOptions.map((option, index) => (
                            <motion.a
                                key={index}
                                href={option.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card bg-white p-8 rounded-[30px] shadow-lg border-2 border-transparent hover:border-orange-500/30 hover:shadow-2xl transition-all duration-300 flex flex-col items-center group relative overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`w-20 h-20 rounded-full ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {option.icon}
                                </div>
                                <h3 className="text-4xl font-extrabold text-secondary mb-2">{option.amount}</h3>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h4>
                                <p className="text-gray-500 mb-8">{option.desc}</p>

                                <span className="w-full py-3 bg-secondary text-white font-bold rounded-xl group-hover:bg-orange-500 transition-colors">
                                    Je donne
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>


                {/* VOLUNTEER / CONTACT SECTION */}
                <div id="devenir-benevole" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="glass-card bg-secondary/95 text-white p-10 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Circle Decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>

                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                            Rejoignez l'aventure humaine
                        </h2>
                        <p className="text-secondary-100 text-lg mb-8 leading-relaxed">
                            Vous avez du temps, des compétences ou simplement l'envie d'aider ?
                            Devenez bénévole et participez à nos actions sur le terrain.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-orange-300" />
                                </div>
                                <span className="font-medium">Participation aux maraudes</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-orange-300" />
                                </div>
                                <span className="font-medium">Soutien scolaire</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-orange-300" />
                                </div>
                                <span className="font-medium">Aide administrative</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-secondary mb-6">Nous contacter</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                                    <input type="text" id="name" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Votre nom" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="votre@email.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Sujet</label>
                                <select id="subject" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all">
                                    <option>Je souhaite devenir bénévole</option>
                                    <option>Je souhaite faire un don matériel</option>
                                    <option>Demande d'information</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Votre message..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-secondary text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                                Envoyer
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Participate;
