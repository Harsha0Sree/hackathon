
import React from 'react';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import GlassButton from '../../components/GlassButton';
import { BarChart3, Database, LineChart, PlugZap } from 'lucide-react';

const Methodology = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="How Verdex Measures AI Impact" 
            subtitle="A transparent look at our methodology for quantifying AI's environmental footprint"
          />
          
          {/* Main Content */}
          <div className="glass p-8 mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                At Verdex, we believe that transparency in measurement is essential for meaningful progress toward sustainable AI. 
                Our methodology combines industry-standard tools, academic research, and proprietary algorithms to provide 
                accurate estimates of AI models' environmental impact.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach to Measurement</h2>
              
              <p className="text-gray-300 mb-6">
                Measuring the environmental impact of AI systems involves tracking several key metrics across the AI lifecycle. 
                Our methodology focuses on providing actionable insights rather than just raw numbers, helping users make 
                informed decisions about their AI usage.
              </p>
            </div>
          </div>
          
          {/* Methodology Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                    <PlugZap className="h-7 w-7 text-verdex-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Tools Used</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Our measurement infrastructure utilizes a combination of specialized tools that track resource utilization at different levels:
                </p>
                
                <ul className="space-y-4 text-gray-300">
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Hardware Monitoring</span>
                    Tools like pyJoules for tracking GPU and CPU energy consumption at the hardware level
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Carbon Tracking</span>
                    Integration with frameworks like CodeCarbon to convert energy usage to carbon emissions
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Grid Intensity Data</span>
                    Real-time data on regional electricity carbon intensity for location-aware impact calculations
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                    <Database className="h-7 w-7 text-verdex-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Data Sources</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Our measurements and calculations are informed by diverse data sources that provide the necessary context for accurate environmental impact assessment:
                </p>
                
                <ul className="space-y-4 text-gray-300">
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Energy Grid Data</span>
                    Regional information about the carbon intensity of electricity production
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Model Benchmarks</span>
                    Performance and efficiency data from standardized testing of AI models
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Academic Research</span>
                    Findings from peer-reviewed studies on AI energy consumption
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Hardware Specifications</span>
                    Energy profiles of different GPUs, CPUs, and other AI hardware
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                    <LineChart className="h-7 w-7 text-verdex-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Calculation Approach</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Our methodology translates raw measurements into meaningful environmental metrics through a series of calculations:
                </p>
                
                <ul className="space-y-4 text-gray-300">
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Energy to Carbon Conversion</span>
                    Multiplying energy consumption (kWh) by the carbon intensity factor (gCO2e/kWh) for the relevant energy grid
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Regional Adjustments</span>
                    Accounting for location-specific differences in energy sources and their carbon intensity
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Relatability Metrics</span>
                    Converting abstract measurements (kWh, gCO2e) into tangible equivalents like miles driven or trees needed
                  </li>
                  <li className="glass bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold block mb-1">Uncertainty Handling</span>
                    Transparent communication of confidence intervals for estimates where precise measurement isn't possible
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Visualization Example */}
          <div className="glass p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">From Measurement to Insight</h3>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <p className="text-gray-300 mb-4">
                  Our methodology doesn't stop at collecting raw numbers. We transform these measurements into actionable insights 
                  through visualization and comparative analysis. This allows users to:
                </p>
                
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Compare the efficiency of different models for the same task
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Understand their AI usage in familiar, tangible terms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Identify opportunities for reducing environmental impact
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Track improvements over time as they implement more sustainable practices
                    </span>
                  </li>
                </ul>
                
                <p className="text-gray-300">
                  This transformation of raw data into meaningful context is central to our mission of making AI's environmental 
                  impact transparent and actionable.
                </p>
              </div>
              
              <div className="lg:w-1/2">
                <div className="glass bg-white/5 p-6 rounded-lg h-full">
                  <h4 className="text-lg font-semibold mb-4">Visualization Example</h4>
                  
                  <div className="flex items-center justify-center p-4 mb-4 bg-black/30 rounded-lg">
                    <BarChart3 className="h-24 w-24 text-verdex-accent opacity-75" />
                  </div>
                  
                  <p className="text-gray-300 text-sm">
                    Sample visualization showing how raw energy measurements (kWh) are converted into carbon emissions (gCO2e) and then 
                    transformed into relatable metrics like "equivalent miles driven" or "trees needed to offset." These visualizations 
                    make complex environmental data accessible and actionable for users without specialized knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Continuous Improvement Section */}
          <div className="glass p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4">Continuous Methodology Improvement</h3>
            
            <p className="text-gray-300 mb-6">
              Our measurement methodology is constantly evolving as new research, tools, and data become available. We are committed to:
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Incorporating the latest academic research on AI environmental impact
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Refining our models based on feedback and validation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Expanding our measurements to include additional environmental factors
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Increasing the granularity and accuracy of our estimates
                </span>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <GlassButton to="/about" variant="primary">
              Contact Us for More Details
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Methodology;
