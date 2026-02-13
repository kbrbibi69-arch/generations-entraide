import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

const Partners = () => {
    // Mock partners data (Mocking logos with icons/text for now)
    const partners = [
        { name: "Mairie de Paris", id: 1 },
        { name: "Fondation Abbé Pierre", id: 2 },
        { name: "Carrefour Solidarité", id: 3 },
        { name: "Banque Alimentaire", id: 4 },
        { name: "CAF", id: 5 },
        { name: "Croix Rouge", id: 6 },
        { name: "Secours Populaire", id: 7 },
        { name: "Entreprise Locale", id: 8 },
        { name: "Association Quartier", id: 9 },
        { name: "Sponsor Privé", id: 10 },
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-secondary mb-4">
                        Ils nous soutiennent
                    </h2>
                    <p className="text-xl text-gray-500">
                        Merci à nos partenaires engagés. Leur soutien précieux nous permet d'agir chaque jour.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            className="glass-card bg-gray-50 border border-gray-100 p-8 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="text-center">
                                <Building2 className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                <span className="font-bold text-gray-600 text-sm">{partner.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="#contact" className="inline-flex items-center px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 group">
                        Devenir partenaire
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
