
import React from 'react';
import Layout from '../components/Layout';
import GlassSectionTitle from '../components/GlassSectionTitle';

const About = () => {
  // Team members (placeholder)
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Co-Founder',
      bio: 'Environmental engineer with a passion for sustainable technology and AI ethics.'
    },
    {
      name: 'Dr. Maya Chen',
      role: 'CTO & Co-Founder',
      bio: 'Former AI researcher with expertise in energy-efficient deep learning architectures.'
    },
    {
      name: 'Sam Okonkwo',
      role: 'Lead Data Scientist',
      bio: 'Specializes in measuring and optimizing the carbon footprint of computational systems.'
    },
    {
      name: 'Olivia Kim',
      role: 'Head of Sustainability',
      bio: 'Advocate for responsible AI with background in environmental policy and carbon markets.'
    }
  ];
  
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="About Verdex" 
            subtitle="Bringing transparency to AI's environmental impact through accessible metrics and insights"
          />
          
          {/* Mission Section */}
          <div className="glass p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            
            <p className="text-gray-300 mb-6">
              Verdex ("verde" + "index") was founded with a clear mission: to bring transparency to the environmental impact of
              artificial intelligence. As AI systems become increasingly central to our society, understanding and optimizing their
              environmental footprint becomes crucial for sustainable technological progress.
            </p>
            
            <p className="text-gray-300 mb-6">
              We believe that clear metrics and accessible information are essential catalysts for change. By making the environmental
              impact of AI models and tasks transparent, we empower developers, organizations, and individuals to make more
              informed, sustainable choices about their AI usage.
            </p>
            
            <p className="text-gray-300">
              Our platform combines rigorous measurement methodologies with user-friendly interfaces to transform complex
              environmental data into actionable insights. Through education, analysis tools, and comprehensive model
              information, we aim to foster a more environmentally responsible AI ecosystem.
            </p>
          </div>
          
          {/* Vision Section */}
          <div className="glass p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Vision for Sustainable AI</h2>
            
            <p className="text-gray-300 mb-6">
              We envision a future where environmental considerations are seamlessly integrated into AI development and deployment
              decisions. A world where choosing energy-efficient models is standard practice, where the carbon footprint of AI
              systems is regularly measured and optimized, and where technological advancement happens in harmony with
              environmental sustainability.
            </p>
            
            <p className="text-gray-300">
              Through our platform, we're working to make this vision a reality by building awareness, providing practical tools,
              and fostering a community committed to sustainable AI practices. We believe that technological progress and
              environmental responsibility can and must go hand in hand.
            </p>
          </div>
          
          {/* Team Section */}
          <div className="mb-12">
            <GlassSectionTitle title="Our Team" className="mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-verdex-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-verdex-accent text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-verdex-accent mb-3">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
