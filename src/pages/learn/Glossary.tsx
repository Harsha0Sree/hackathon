
import React from 'react';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import { Link } from 'react-router-dom';

const Glossary = () => {
  const glossaryTerms = [
    {
      term: 'AI (Artificial Intelligence)',
      definition: 'Computer systems designed to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.'
    },
    {
      term: 'Carbon Footprint',
      definition: 'The total greenhouse gas emissions caused directly and indirectly by an individual, organization, event, or product, expressed as carbon dioxide equivalent (CO2e).'
    },
    {
      term: 'Carbon Intensity',
      definition: 'The amount of carbon dioxide (CO2) emitted per unit of electricity generated, typically measured in grams of CO2 per kilowatt-hour (gCO2/kWh).'
    },
    {
      term: 'Carbon Offset',
      definition: 'A reduction in emissions of carbon dioxide or other greenhouse gases made to compensate for emissions made elsewhere.'
    },
    {
      term: 'Computation',
      definition: 'The mathematical calculations performed by computers, particularly those required to train and run AI models.'
    },
    {
      term: 'Data Center',
      definition: 'A facility that houses computer systems and associated components, such as telecommunications and storage systems, that organizations use to organize, process, store, and disseminate large amounts of data.'
    },
    {
      term: 'Energy Efficiency',
      definition: 'The ratio of useful output (like AI performance) to energy input, with higher efficiency indicating less energy needed for the same performance.'
    },
    {
      term: 'gCO2e (Grams of Carbon Dioxide Equivalent)',
      definition: 'A measure used to compare the emissions from various greenhouse gases based upon their global warming potential, with all emissions converted to the equivalent amount of CO2.'
    },
    {
      term: 'GPU (Graphics Processing Unit)',
      definition: 'A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images. GPUs are particularly efficient for AI tasks due to their ability to perform many calculations simultaneously.'
    },
    {
      term: 'Green Energy',
      definition: 'Energy derived from renewable sources such as solar, wind, and hydroelectric power, which have a lower environmental impact than fossil fuels.'
    },
    {
      term: 'Inference',
      definition: 'The process of using a trained AI model to make predictions or decisions based on new inputs, such as classifying an image or generating text.'
    },
    {
      term: 'kWh (Kilowatt-hour)',
      definition: 'A unit of energy equal to one kilowatt of power sustained for one hour, commonly used to measure electricity consumption.'
    },
    {
      term: 'Machine Learning',
      definition: 'A subset of AI that involves algorithms that improve automatically through experience and by the use of data.'
    },
    {
      term: 'Model',
      definition: 'In AI, a mathematical representation of a real-world process, trained on data to perform specific tasks like prediction, classification, or generation.'
    },
    {
      term: 'Model Compression',
      definition: 'Techniques to reduce the size and computational requirements of AI models while maintaining similar performance, including quantization, pruning, and knowledge distillation.'
    },
    {
      term: 'Parameter',
      definition: 'A configuration variable in an AI model that is learned from training data. The number of parameters often correlates with a model\'s capacity, complexity, and computational requirements.'
    },
    {
      term: 'Quantization',
      definition: 'A technique to reduce the precision of the numbers used in an AI model, decreasing its size and computational requirements with minimal impact on accuracy.'
    },
    {
      term: 'Right-sizing',
      definition: 'The practice of selecting AI models that are appropriately sized for the specific task, avoiding unnecessary computational overhead and energy consumption.'
    },
    {
      term: 'Sustainable AI',
      definition: 'The development and use of artificial intelligence in a way that meets current needs without compromising the ability of future generations to meet their own needs, particularly with respect to environmental impact.'
    },
    {
      term: 'TPU (Tensor Processing Unit)',
      definition: 'An AI accelerator application-specific integrated circuit (ASIC) developed by Google specifically for neural network machine learning, particularly using Google\'s TensorFlow software.'
    },
    {
      term: 'Training',
      definition: 'The process of teaching an AI model to perform a task by showing it examples, adjusting its parameters to minimize errors, often requiring significant computational resources.'
    },
    {
      term: 'Transfer Learning',
      definition: 'A machine learning technique where a model developed for one task is reused as the starting point for a model on a second task, reducing training time and computational requirements.'
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Glossary of AI Sustainability Terms" 
            subtitle="A comprehensive reference guide to key terms in AI environmental impact"
          />
          
          {/* Glossary List */}
          <div className="glass p-8">
            <div className="mb-8">
              <input 
                type="text" 
                placeholder="Search terms..." 
                className="glass bg-white/5 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-verdex-accent"
              />
            </div>
            
            <div className="space-y-6">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="glass bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-verdex-accent">{item.term}</h3>
                  <p className="text-gray-300">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Learn More About AI Sustainability</h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/learn/impact" className="btn-secondary">
                AI's Environmental Impact
              </Link>
              <Link to="/learn/methodology" className="btn-secondary">
                Our Measurement Methodology
              </Link>
              <Link to="/learn/practices" className="btn-secondary">
                Sustainable AI Practices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Glossary;
