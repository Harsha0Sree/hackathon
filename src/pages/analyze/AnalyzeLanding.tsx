
import React from 'react';
import Layout from '../../components/Layout';
import GlassButton from '../../components/GlassButton';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import { ArrowRight, BarChart3, FileSearch, Settings, Zap, Leaf } from 'lucide-react';

const AnalyzeLanding = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container text-center">
          <div className="glass p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Measure Your AI Task's Environmental Impact
            </h1>
            <p className="text-xl mb-10 text-gray-300">
              Gain insights into the energy consumption and carbon footprint of your AI tasks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton to="/analyze/select-task" variant="primary">Begin Analysis</GlassButton>
              <GlassButton to="/models" variant="secondary">Browse AI Models First</GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="section-container">
          <GlassSectionTitle 
            title="Simple 3-Step Process" 
            subtitle="Quickly analyze your AI task's environmental impact in just a few steps"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
                <FileSearch className="h-8 w-8 text-verdex-accent" />
              </div>
              <span className="text-verdex-accent font-bold text-lg mb-2">Step 1</span>
              <h3 className="text-xl font-semibold mb-3">Select Task Type</h3>
              <p className="text-gray-300">Choose the type of AI task you want to analyze, such as text generation or image recognition</p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
                <Settings className="h-8 w-8 text-verdex-accent" />
              </div>
              <span className="text-verdex-accent font-bold text-lg mb-2">Step 2</span>
              <h3 className="text-xl font-semibold mb-3">Configure & Choose Model</h3>
              <p className="text-gray-300">Set up your task parameters and select an AI model from our efficiency-rated options</p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-verdex-accent/20 mb-4">
                <BarChart3 className="h-8 w-8 text-verdex-accent" />
              </div>
              <span className="text-verdex-accent font-bold text-lg mb-2">Step 3</span>
              <h3 className="text-xl font-semibold mb-3">View Results & Impact</h3>
              <p className="text-gray-300">Get detailed insights into energy usage, carbon emissions, and recommendations for improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Measure Section */}
      <section className="py-20 bg-black/30">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="glass p-6 md:p-8">
                <GlassSectionTitle 
                  title="Why Measure AI Impact?" 
                  centered={false}
                  className="mb-6"
                />
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-verdex-accent/20 mt-1">
                      <Zap className="h-5 w-5 text-verdex-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Raise Awareness</h3>
                      <p className="text-gray-300">Understanding the environmental impact of AI is the first step toward sustainable practices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-verdex-accent/20 mt-1">
                      <BarChart3 className="h-5 w-5 text-verdex-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Make Informed Choices</h3>
                      <p className="text-gray-300">Compare different models to select the most efficient option for your specific needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-verdex-accent/20 mt-1">
                      <Leaf className="h-5 w-5 text-verdex-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Promote Sustainability</h3>
                      <p className="text-gray-300">Contribute to a more environmentally responsible AI ecosystem through thoughtful model selection</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <GlassButton to="/analyze/select-task" variant="primary" className="flex items-center">
                    Start Your Analysis <ArrowRight className="ml-2 h-5 w-5" />
                  </GlassButton>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="glass p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
                
                <div className="space-y-4">
                  <div className="glass bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3">1</div>
                      <h4 className="font-medium">User Input</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-11">You provide details about your AI task and requirements</p>
                  </div>
                  
                  <div className="glass bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3">2</div>
                      <h4 className="font-medium">Select Model</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-11">Choose from our curated list of efficiency-rated AI models</p>
                  </div>
                  
                  <div className="glass bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3">3</div>
                      <h4 className="font-medium">Energy Calculation</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-11">Our system calculates the energy requirements and corresponding CO2 emissions</p>
                  </div>
                  
                  <div className="glass bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-verdex-accent/20 text-verdex-accent font-bold mr-3">4</div>
                      <h4 className="font-medium">Results Display</h4>
                    </div>
                    <p className="text-gray-300 text-sm pl-11">View comprehensive results with visual comparisons and recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AnalyzeLanding;
