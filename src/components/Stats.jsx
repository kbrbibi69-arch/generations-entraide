import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, Calendar } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            number: "5000",
            suffix: "+",
            label: "Repas distribués / an",
            icon: <Utensils className="w-8 h-8 text-white" />,
            color: "from-orange-400 to-red-500"
        },
        {
            number: "150",
            suffix: "+",
            label: "Bénévoles actifs",
            icon: <Users className="w-8 h-8 text-white" />,
            color: "from-blue-400 to-blue-600"
        },
        {
            number: "10",
            suffix: " ans",
            label: "D'action solidaire",
            icon: <Calendar className="w-8 h-8 text-white" />,
            color: "from-green-400 to-emerald-600"
        }
    ];

    // Counter animation component
    const Counter = ({ value, suffix }) => {
        const [count, setCount] = React.useState(0);

        React.useEffect(() => {
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            let totalDuration = 2000;
            let increment = Math.ceil(end / (totalDuration / 16));

            let timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);

            return () => clearInterval(timer);
        }, [value]);

        return <span>{count}{suffix}</span>;
    };

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Image with Parallax effect simulation */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/img/stats-bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-20 blur-sm scale-110"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(to right, #1f2937, #111827)';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Notre Impact
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Des chiffres qui changent des vies. Chaque action compte.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="glass-card bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[30px] text-center group hover:bg-white/10 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, type: "spring" }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>

                            <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <Counter value={stat.number} suffix={stat.suffix} />
                                </motion.span>
                            </h3>

                            <p className="text-xl text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
