import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">🤝</span>
                            <span className="text-2xl font-bold">Générations<br />Entraide</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Favoriser le lien social et lutter contre la pauvreté à travers des actions de solidarité locale.
                            Ensemble, nous bâtissons un avenir plus juste.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
                        <ul className="space-y-4">
                            <li><a href="#qui-sommes-nous" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">Qui sommes-nous</a></li>
                            <li><a href="#nos-actions" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">Nos Actions</a></li>
                            <li><a href="#participer" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">Faire un don</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
                                <span className="text-gray-400">123 Rue de la Solidarité,<br />75000 Paris, France</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-orange-500 shrink-0" />
                                <span className="text-gray-400">+33 1 23 45 67 89</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-orange-500 shrink-0" />
                                <span className="text-gray-400">contact@generations-entraide.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <div className="flex">
                            <input type="email" placeholder="Votre email" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-orange-500 transition-colors" />
                            <button className="bg-orange-500 px-4 rounded-r-lg hover:bg-orange-600 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Générations Entraide. Tous droits réservés.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white">Mentions légales</a>
                        <a href="#" className="hover:text-white">Politique de confidentialité</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
