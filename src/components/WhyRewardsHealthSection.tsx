'use client';

import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users, Shield, Zap, Target } from 'lucide-react';

export default function WhyRewardsHealthSection() {
  const features = [
    {
      icon: Zap,
      title: 'Dynamic Movement & Longevity Rewards',
      description: 'Earn rewards for every step toward better health and vitality'
    },
    {
      icon: Heart,
      title: 'Regenerative Stem Cell Access',
      description: 'Connect to therapies that restore and heal naturally'
    },
    {
      icon: TrendingUp,
      title: 'Ambassador Income Model',
      description: 'Build wealth while leading others to wellness'
    }
  ];

  const values = [
    { label: 'Strength', description: 'Physical and mental resilience' },
    { label: 'Clarity', description: 'Mental sharpness and focus' },
    { label: 'Mobility', description: 'Freedom of movement' },
    { label: 'Freedom', description: 'Live life on your terms' }
  ];

  return (
    <section className="py-24 bg-primary-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-teal via-transparent to-accent-gold"></div>
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
          <div className="inline-flex items-center gap-2 bg-primary-navy/10 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-primary-navy" />
            <span className="text-sm font-medium text-primary-navy">Our Mission</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-navy mb-6">
            WHY
            <span className="block bg-gradient-to-r from-primary-teal to-primary-navy bg-clip-text text-transparent">
              REWARDSHEALTH?
            </span>
          </h2>
          
          <p className="text-xl text-primary-navy/80 max-w-3xl mx-auto leading-relaxed">
            Because we believe health is wealth—and that real wealth includes strength, clarity, 
            mobility, and the freedom to live on your terms.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-accent-mint/30 to-primary-white border border-primary-teal/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-white" />
              </div>
              
              <h3 className="text-xl font-bold text-primary-navy mb-4">{feature.title}</h3>
              <p className="text-primary-navy/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-navy-teal rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-primary-white mb-8">
            Real Wealth Includes
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                    <span className="text-primary-navy font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary-white mb-2">{value.label}</h4>
                <p className="text-primary-white/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-accent-mint/20 rounded-2xl p-8 border border-primary-teal/20">
            <p className="text-lg text-primary-navy/80 leading-relaxed mb-6">
              RewardsHealth is the first platform that combines a dynamic movement and longevity rewards program, 
              access to regenerative stem cell therapies that restore and heal, and an ambassador income model 
              that honors those who lead with wellness.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-primary-navy/60">
              <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
              <span className="font-medium">A platform with a mission</span>
              <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
              <span className="font-medium">A movement with momentum</span>
              <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
              <span className="font-medium">A model for shared health</span>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-primary-navy mb-4">
            Live stronger. Age slower. Lead boldly.
          </h3>
          
          <p className="text-lg text-primary-navy/80 mb-8 max-w-2xl mx-auto">
            Join RewardsHealth today—because your body deserves better, your community needs guidance, 
            and your time is now.
          </p>
          
          <button className="bg-primary-teal hover:bg-primary-teal/90 text-primary-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Join RewardsHealth Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}