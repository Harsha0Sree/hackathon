
import React from 'react';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import GlassButton from '../components/GlassButton';
import GlassSectionTitle from '../components/GlassSectionTitle';
import { Activity, BarChart3, Leaf, LineChart } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-verdex-background opacity-90"></div>
          {/* Abstract background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-verdex-accent/20 filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px]"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="glass p-8 md:p-12 max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-verdex-accent">Verdex</span>: AI Energy Efficiency Transparency
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              Bringing transparency to AI's environmental impact, empowering more sustainable AI practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton to="/analyze" variant="primary">Start Analyzing</GlassButton>
              <GlassButton to="/models" variant="secondary">Explore Models</GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Core Features" 
            subtitle="Verdex provides comprehensive tools to understand and optimize AI's environmental footprint"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Activity} 
              title="Real-time Energy Tracking" 
              description="Monitor energy consumption of AI models during inference tasks"
            />
            <FeatureCard 
              icon={BarChart3} 
              title="CO2 Footprint Calculation" 
              description="Quantify the carbon emissions associated with AI computations"
            />
            <FeatureCard 
              icon={LineChart} 
              title="Impact Visualizations" 
              description="See environmental impact in relatable, easy-to-understand metrics"
            />
            <FeatureCard 
              icon={Leaf} 
              title="Model Recommendations" 
              description="Discover more efficient alternatives for your specific AI tasks"
            />
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="glass p-8 md:p-12 max-w-5xl mx-auto">
            <GlassSectionTitle 
              title="Making AI Impact Tangible" 
              subtitle="Understanding environmental impact through relatable metrics"
              centered={false}
              className="mb-8"
            />
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-verdex-accent/20 mt-1">
                  <Activity className="h-5 w-5 text-verdex-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Consumption in Context</h3>
                  <p className="text-gray-300">See how much energy your AI tasks consume, translated into everyday equivalents like hours of lightbulb usage or smartphone charges.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-verdex-accent/20 mt-1">
                  <BarChart3 className="h-5 w-5 text-verdex-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Carbon Emissions Visualized</h3>
                  <p className="text-gray-300">Understand carbon impact through comparisons to miles driven in a car or the number of trees needed to offset emissions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-verdex-accent/20 mt-1">
                  <Leaf className="h-5 w-5 text-verdex-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Efficiency Alternatives</h3>
                  <p className="text-gray-300">Discover and compare more energy-efficient models that can accomplish the same tasks with reduced environmental impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-verdex-background">
        <div className="section-container text-center">
          <div className="glass p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Measure Your AI's Footprint?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Take the first step toward more sustainable AI practices with our analysis tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton to="/analyze" variant="primary">Start Analyzing</GlassButton>
              <GlassButton to="/models" variant="secondary">Explore Models</GlassButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
