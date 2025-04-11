
import React from 'react';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import GlassButton from '../../components/GlassButton';
import { CheckCircle2, Clock, Cpu, Database, Leaf, Zap } from 'lucide-react';

const Practices = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Guide to Sustainable AI Practices" 
            subtitle="Practical strategies for reducing the environmental impact of AI development and deployment"
          />
          
          {/* Main Tips Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                  <Leaf className="h-7 w-7 text-verdex-accent" />
                </div>
                <h3 className="text-xl font-semibold">Choosing Efficient Models</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Select AI models that balance performance with environmental impact, especially for frequently run tasks.
              </p>
              
              <div className="space-y-4">
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Right-size Your Models</h4>
                  <p className="text-gray-300 text-sm">
                    Choose the smallest model that can adequately perform your task. Larger isn't always better, 
                    and the environmental cost increases significantly with model size.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Consider Efficiency Ratings</h4>
                  <p className="text-gray-300 text-sm">
                    Use Verdex's efficiency ratings to identify models that deliver good performance with lower energy consumption.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Specialized vs. General Models</h4>
                  <p className="text-gray-300 text-sm">
                    When possible, choose models specialized for your specific task rather than larger general-purpose models.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                  <Zap className="h-7 w-7 text-verdex-accent" />
                </div>
                <h3 className="text-xl font-semibold">Optimizing Inference</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Implement practices that reduce the energy footprint of model inference in production environments.
              </p>
              
              <div className="space-y-4">
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Model Compression</h4>
                  <p className="text-gray-300 text-sm">
                    Use techniques like quantization, pruning, and knowledge distillation to create more efficient versions 
                    of models without significant performance loss.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Batching Requests</h4>
                  <p className="text-gray-300 text-sm">
                    Process multiple requests together when possible to reduce the overhead of repeated model initialization 
                    and improve compute efficiency.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Caching Common Results</h4>
                  <p className="text-gray-300 text-sm">
                    Store and reuse results for frequent or identical queries to avoid unnecessary recomputation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                  <Database className="h-7 w-7 text-verdex-accent" />
                </div>
                <h3 className="text-xl font-semibold">Managing Data Wisely</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Implement data strategies that reduce unnecessary computation while maintaining model quality.
              </p>
              
              <div className="space-y-4">
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Quality Over Quantity</h4>
                  <p className="text-gray-300 text-sm">
                    Focus on curating high-quality, diverse training data rather than simply increasing dataset size, 
                    which can lead to diminishing returns and higher energy costs.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Efficient Data Preprocessing</h4>
                  <p className="text-gray-300 text-sm">
                    Optimize data preprocessing pipelines to reduce computational overhead during training and inference.
                  </p>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Transfer Learning</h4>
                  <p className="text-gray-300 text-sm">
                    Adapt pre-trained models for your specific tasks rather than training from scratch, 
                    significantly reducing the computational and environmental cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Tips Section */}
          <div className="glass p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Quick Sustainability Tips</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Optimize Your Code</h4>
                  <p className="text-gray-300 text-sm">Efficient code implementation can significantly reduce energy consumption.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Use Efficient Hardware</h4>
                  <p className="text-gray-300 text-sm">Choose hardware specifically designed for the AI tasks you're performing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Consider Off-Peak Computing</h4>
                  <p className="text-gray-300 text-sm">Schedule intensive tasks during times when cleaner energy is available.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Track Your Impact</h4>
                  <p className="text-gray-300 text-sm">Monitor and measure the environmental footprint of your AI operations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Early Stopping</h4>
                  <p className="text-gray-300 text-sm">Implement early stopping in training to avoid unnecessary computation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Green Hosting</h4>
                  <p className="text-gray-300 text-sm">Deploy AI services in data centers powered by renewable energy.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Example Section */}
          <div className="glass p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">How to Choose an Efficient Model on Verdex</h3>
            
            <div className="glass bg-white/5 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-4">Step-by-Step Guide</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-semibold mb-2">Define Your Task Requirements</h5>
                    <p className="text-gray-300">
                      Start by clearly defining what you need the AI model to do and what level of performance is truly necessary. 
                      Be specific about accuracy requirements, response time needs, and other constraints.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-semibold mb-2">Compare Models in the Verdex Directory</h5>
                    <p className="text-gray-300">
                      Visit the Models section to browse and filter models that match your task requirements. Pay special attention 
                      to the efficiency ratings and energy consumption metrics for each model.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-semibold mb-2">Run Comparative Analysis</h5>
                    <p className="text-gray-300">
                      Use the Analyze feature to simulate your specific task with different models and compare their environmental 
                      impact side-by-side. This helps you make data-driven decisions about which model offers the best balance of 
                      performance and efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3 flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-semibold mb-2">Consider Deployment Context</h5>
                    <p className="text-gray-300">
                      Factor in how and where you'll deploy the model. For high-volume services, even small efficiency 
                      improvements can lead to significant environmental benefits at scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <GlassButton to="/analyze" variant="primary">
              Analyze Your Task's Impact Now
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Practices;
