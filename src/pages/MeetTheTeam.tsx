import React from 'react';
import { motion } from 'framer-motion';

// Assuming images are in public/ (update paths if they're elsewhere)
const teamMembers = [
  {
    name: 'Brianna Cruise',
    role: 'Financial Consultant',
    bio: [
      'A passionate, family-centered professional who knows what it takes to succeed.',
      'As a proud mother, her children are her greatest inspiration and the reason she strives every day to create a future of freedom and opportunity. That same drive fuels her commitment to helping other families secure their futures, ensuring they have the peace of mind and financial confidence they deserve.',
      'She brings a quick wit, a sharp mind, and a heartfelt determination to every conversation. Brianna believes that true success comes not just from working hard, but from learning, growing, and sharing knowledge that empowers others.',
      'When she’s not helping others, Brianna cherishes time with her kids, building memories and modeling what dedication and perseverance look like.'
    ],
    image: '/brianna-cruise.webp',
    quote: 'Family is why I do this, and family is why I’ll always give my best.'
  },
  
  {
    name: 'Matt Barnes',
    role: 'Legacy Advisor',
    bio: [
      'For Matt, family means love. He grew up with the gift of a life insurance policy his parents set up for him, and over the years he has seen firsthand the power of planning ahead.',
      'Matt is a student of life, always learning, adapting, and refining his approach. He digs into the details, ensuring he knows exactly how every strategy works before sharing it with the people he cares about.',
      'As a proud uncle, Matthew is driven by the vision of passing on tools and wisdom that his nieces and nephews can use for decades to come. What inspires him most is knowing that strategies once reserved for the wealthy are now available to anyone willing to take action.'
    ],
    image: '/matt-barnes.webp',
    quote: 'When knowledge meets action, generations rise.'
  },
  {
    name: 'Shina Kaur',
    role: 'Student Coordinator & Entrepreneur',
    bio: [
      'Shina Kaur’s journey is proof that age is no barrier to impact. As a student coordinator at her university, she quickly earned a reputation for inspiring others with her leadership and vision.',
      'Her ability to break through obstacles has left an impression not only on her peers, but also on her family and friends. By helping them see the bigger vision, Shina has become a source of strength and motivation.',
      'Beyond her academic achievements, Shina is also the proud owner of multiple companies. Despite her success, she continues to lay the groundwork due to its fundamentals and importance.'
    ],
    image: '/shina-kaur.webp',
    quote: 'Barriers exist only until someone breaks them — and I live to break them.'
  },
  {
    name: 'Eaklavya Kakkar ',
    role: 'Financial Strategist',
    bio: [
      'I joined this industry because I saw how money is at the center of almost everything in people’s lives. If it’s handled right, it makes life easier. If it’s not, it causes stress, arguments, and limits people from living the way they want.',
      'What keeps me going is the growth that comes with it. I’ve pushed myself to improve in every area of life, and I get to help clients do the same—whether that’s building better money habits, saving more, or just having peace of mind.',
      'One experience that really showed me why this work matters was with a single mother. We set up a small savings and insurance plan for her, and when she passed unexpectedly, it gave her two young kids stability when they needed it most.'
    ],
    image: '/ek.webp',
    quote: 'Money isn’t just numbers on a page — it’s the difference between stress and peace, limits and freedom, hardship and legacy.'
  },
  {
    name: 'Raman Kaur',
    role: 'Community Wealth Educator',
    bio: [
      'Raman Kaur is a source of joy, dependability, and motherly love — not only to her own children, but to the countless young lives she touched during her years as a teacher.',
      'When Raman discovered the wealth strategies that had long been reserved for the few, she was ecstatic to finally bring these tools to her community. She has a gift for helping people see a light they may have never noticed before, guiding them toward the path they were always meant to walk.',
      'Her daily practices of meditation, prayer, and unwavering faith in a higher power keep her centered and strong. For Raman, true wealth is more than money — it’s a life filled with love, abundance, and service.'
    ],
    image: '/raman.webp',
    quote: 'True wealth is love in action — and I live it every day.'
  },
  {
    name: 'Eknoor Bains',
    role: 'Community Wealth Educator',
    bio: [
      'Eknoor has a unique talent for bringing people together and helping them see a bigger vision for themselves. With the ability to paint a clear picture of what’s possible, he inspires others to believe in their own potential.',
      'From a young age, Eknoor achieved great feats that placed him at the forefront of his industry. Even with his early success, he has never stopped striving forward — not just for his own growth, but to lift others up to new levels.',
      'What sets Eknoor apart is the way he operates with loyalty, integrity, and confidence in every relationship and endeavor. For Eknoor, success is not just about reaching the top — it’s about bringing others with him.'
    ],
    image: '/eknoor.webp',
    quote: 'True leadership isn’t about titles — it’s about building people.'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100/50 max-w-4xl mx-auto`}
    >
      <div className="flex justify-center mb-6 lg:mb-0">
        <img
          src={member.image}
          alt={`${member.name} profile`}
          className=" h-auto object-contain  transition-transform duration-300"
         
          loading="lazy"
        />
      </div>
      <div className="lg:w-2/3 flex flex-col justify-center text-center lg:text-left px-0 lg:px-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-lg font-medium text-lime-600 mb-4">{member.role}</p>
        <ul className="text-base text-gray-600 leading-relaxed mb-4 space-y-3">
          {member.bio.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-lime-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm lg:text-base text-gray-500 italic tracking-wide">"{member.quote}"</p>
      </div>
    </motion.div>
  );
};

const MeetTheTeam = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(132,204,22,0.2)_0%,_transparent_70%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(107,114,128,0.2)_0%,_transparent_70%)] opacity-70" />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Meet the Team Behind
            <span className="block bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent mt-2">
              Empower Life
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of dedicated professionals from finance, strategy, and client service is united by a shared commitment to helping families secure their financial futures with clarity and confidence.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10 lg:space-y-12"
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;