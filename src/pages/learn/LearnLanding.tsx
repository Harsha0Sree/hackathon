
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import { BookOpen, FileText, Leaf, LibraryBig } from 'lucide-react';

const LearnLanding = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Learn About AI Sustainability" 
            subtitle="Explore our educational resources about AI's environmental impact and sustainable practices"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link to="/learn/impact" className="glass-card hover:translate-y-[-5px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-4">
                    <BookOpen className="h-8 w-8 text-verdex-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">AI's Environmental Impact</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Understand the energy consumption, carbon emissions, and water usage associated with training and running AI models.
                </p>
                
                <div className="mt-auto">
                  <span className="text-verdex-accent hover:underline flex items-center">
                    Learn more
                    <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/learn/methodology" className="glass-card hover:translate-y-[-5px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-4">
                    <FileText className="h-8 w-8 text-verdex-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">Our Measurement Methodology</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Explore how Verdex measures and calculates the environmental footprint of AI models and tasks.
                </p>
                
                <div className="mt-auto">
                  <span className="text-verdex-accent hover:underline flex items-center">
                    Learn more
                    <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/learn/practices" className="glass-card hover:translate-y-[-5px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-4">
                    <Leaf className="h-8 w-8 text-verdex-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">Sustainable AI Practices</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Discover practical guidelines and strategies for developing and using AI in a more environmentally responsible way.
                </p>
                
                <div className="mt-auto">
                  <span className="text-verdex-accent hover:underline flex items-center">
                    Learn more
                    <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/learn/glossary" className="glass-card hover:translate-y-[-5px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-4">
                    <LibraryBig className="h-8 w-8 text-verdex-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">Glossary of Terms</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Reference definitions for key terms related to AI, energy consumption, and environmental impact measurements.
                </p>
                
                <div className="mt-auto">
                  <span className="text-verdex-accent hover:underline flex items-center">
                    Learn more
                    <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="glass p-8 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Why These Topics Matter</h3>
            <p className="text-gray-300">
              As AI technology continues to advance and become more widespread, understanding its environmental impact becomes increasingly important. 
              By learning about these topics, you can make more informed decisions about AI usage, contribute to the development of more sustainable 
              AI practices, and help shape a future where technological progress and environmental responsibility go hand in hand.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xl mb-6">Ready to explore? Choose a topic above to learn more.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LearnLanding;
