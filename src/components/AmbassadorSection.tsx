'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, Gift, ArrowRight } from 'lucide-react';

export default function AmbassadorSection() {
  const benefits = [
    {
      icon: Users,
      title: 'Empower Others',
      description: 'Tools and training to inspire your community'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Income',
      description: 'Commission-based earnings and bonus rewards'
    },
    {
      icon: Gift,
      title: 'Exclusive Access',
      description: 'Wellness products and challenges'
    },
    {
      icon: Award,
      title: 'Build Networks',
      description: 'Create communities around healing and prevention'
    }
  ];

  const requirements = [
    'Heart and consistency',
    'Belief in better health',
    'Commitment to helping others',
    'No medical degree required'
  ];

  return (
    <section className="py-24 bg-primary-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-accent-gold" />
            <span className="text-sm font-medium text-primary-white">Leadership Opportunity</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-white mb-6">
            BECOME A CERTIFIED
            <span className="block bg-gradient-to-r from-accent-gold to-primary-teal bg-clip-text text-transparent">
              LONGEVITY AMBASSADOR
            </span>
          </h2>
          
          <p className="text-xl text-primary-white/90 max-w-3xl mx-auto leading-relaxed">
            Lead others into a future of strength, vitality, and regenerative breakthroughs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-primary-white/80 leading-relaxed">
                From pain relief to disease prevention, stem cell therapies are transforming lives—naturally 
                and powerfully. Build a purpose-driven income by connecting your community to science-backed 
                rejuvenation.
              </p>
              
              <p className="text-lg text-primary-white/80 leading-relaxed">
                As a Certified Longevity Ambassador, you can lead others toward real, evidence-based 
                wellness—while creating a scalable, purpose-driven income stream.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-white/5 backdrop-blur-sm border border-primary-white/10 rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-white mb-1">{benefit.title}</h4>
                      <p className="text-primary-white/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-primary-teal/10 border border-primary-teal/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-primary-white mb-4">What You Need:</h4>
              <div className="space-y-2">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                    <span className="text-primary-white/90">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3865556/pexels-photo-3865556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Community collaboration and leadership"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-accent-gold rounded-xl p-3 shadow-lg"
              >
                <Award className="w-6 h-6 text-primary-navy" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-primary-white rounded-xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-navy">$5K+</div>
                  <div className="text-xs text-primary-navy/70">Monthly Potential</div>
                </div>
              </motion.div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-accent-gold/20 to-primary-teal/20 backdrop-blur-sm border border-primary-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-white mb-4">
                Ready to Lead the Movement?
              </h3>
              <p className="text-primary-white/80 mb-6">
                You don't need to be a doctor. You don't need a degree. You need heart, 
                consistency, and a belief in better. We'll give you the rest.
              </p>
              
              <button className="group bg-accent-gold hover:bg-accent-gold/90 text-primary-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                Become an Ambassador
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}