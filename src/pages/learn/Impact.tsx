
import React from 'react';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import GlassButton from '../../components/GlassButton';
import { Zap, Droplets, BarChart3 } from 'lucide-react';

const Impact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Understanding the Environmental Footprint of AI" 
            subtitle="A closer look at the energy, carbon, and resource implications of artificial intelligence"
          />
          
          {/* Main Content */}
          <div className="glass p-8 mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Artificial Intelligence has revolutionized numerous sectors, from healthcare to transportation, 
                but its rapid growth brings significant environmental considerations that are often overlooked.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">The Growing Environmental Challenge</h2>
              
              <p className="text-gray-300 mb-4">
                As AI systems become more complex and widespread, their energy demands grow correspondingly. 
                Training large AI models can consume substantial computational resources, while the ongoing 
                inference processes required to run these models add to the cumulative environmental impact.
              </p>
              
              <p className="text-gray-300 mb-4">
                The environmental footprint of AI spans multiple dimensions:
              </p>
              
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Energy Consumption:</strong> The computational power required for both training and running AI models
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Carbon Emissions:</strong> The greenhouse gases released as a result of this energy usage
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Water Usage:</strong> The water required for cooling data centers that house AI infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Hardware Production:</strong> The resources and emissions involved in manufacturing specialized AI hardware
                  </span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Training vs. Inference: Different Impacts</h2>
              
              <p className="text-gray-300 mb-4">
                The environmental footprint of AI can be divided into two main phases:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Training Phase</h3>
                  <p className="text-gray-300">
                    Training a large AI model is an intensive, one-time process that can consume significant energy. 
                    For example, training a large language model can emit as much carbon as five cars would produce 
                    during their entire lifetimes. This phase involves iterative computations over vast datasets, 
                    often requiring specialized hardware running for weeks or months.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Inference Phase</h3>
                  <p className="text-gray-300">
                    Once trained, using an AI model (inference) requires less energy per instance, but the cumulative 
                    impact can be substantial when models are deployed at scale. Popular AI services may process 
                    millions of requests daily, each contributing to the overall environmental footprint. For widely 
                    used models, the total inference footprint can eventually exceed the training footprint.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">The Scale of the Impact</h2>
              
              <p className="text-gray-300 mb-6">
                Research estimates suggest that the information and communication technology (ICT) sector, 
                which includes AI, currently accounts for 2-3% of global carbon emissions – comparable to 
                the airline industry. With AI adoption growing rapidly, this percentage could increase 
                significantly without focused efficiency improvements and sustainable practices.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">The Path Forward</h2>
              
              <p className="text-gray-300 mb-4">
                Addressing the environmental impact of AI requires a multi-faceted approach:
              </p>
              
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Efficiency Improvements:</strong> Developing more energy-efficient algorithms and hardware
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Green Energy:</strong> Powering AI infrastructure with renewable energy sources
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Right-sizing:</strong> Using appropriately sized models for specific tasks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Transparency:</strong> Measuring and reporting the environmental impact of AI systems
                  </span>
                </li>
              </ul>
              
              <p className="text-gray-300">
                By understanding and addressing these impacts, we can ensure that AI's advancement continues to benefit 
                society while minimizing its environmental footprint. This balance is crucial for sustainable technological 
                progress in the coming decades.
              </p>
            </div>
          </div>
          
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
                  <Zap className="h-8 w-8 text-verdex-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy Usage</h3>
                <p className="text-gray-300">
                  AI systems, particularly during training, can consume substantial electricity. A single large model training run 
                  can use as much energy as several households do in a year.
                </p>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
                  <BarChart3 className="h-8 w-8 text-verdex-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Carbon Emissions</h3>
                <p className="text-gray-300">
                  The carbon footprint of AI depends on both energy use and the source of that energy. Models trained in regions 
                  with carbon-intensive electricity grids have a larger climate impact.
                </p>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
                  <Droplets className="h-8 w-8 text-verdex-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Water Usage</h3>
                <p className="text-gray-300">
                  Data centers require significant water for cooling systems. Some large AI training runs may indirectly use 
                  thousands of gallons of water for temperature management.
                </p>
              </div>
            </div>
          </div>
          
          {/* Key Takeaways */}
          <div className="glass p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Key Takeaways</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-verdex-accent/20 mr-3 mt-1">
                  <span className="text-verdex-accent font-bold text-sm">1</span>
                </div>
                <p className="text-gray-300">
                  AI's environmental impact is significant and growing, with energy consumption and resulting carbon emissions 
                  as primary concerns.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-verdex-accent/20 mr-3 mt-1">
                  <span className="text-verdex-accent font-bold text-sm">2</span>
                </div>
                <p className="text-gray-300">
                  Both training and inference phases contribute to the environmental footprint, but in different ways and across 
                  different timeframes.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-verdex-accent/20 mr-3 mt-1">
                  <span className="text-verdex-accent font-bold text-sm">3</span>
                </div>
                <p className="text-gray-300">
                  Measuring and understanding this impact is crucial for making informed choices about AI development and usage.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-verdex-accent/20 mr-3 mt-1">
                  <span className="text-verdex-accent font-bold text-sm">4</span>
                </div>
                <p className="text-gray-300">
                  Solutions exist to reduce these impacts, including more efficient models, renewable energy, and thoughtful 
                  deployment strategies.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GlassButton to="/learn/methodology" variant="secondary">
              Learn About Our Methodology
            </GlassButton>
            <GlassButton to="/learn/practices" variant="primary">
              Discover Sustainable Practices
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impact;
