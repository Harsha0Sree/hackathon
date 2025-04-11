import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassButton from '../../components/GlassButton';
import { BarChart, Car, Lightbulb, Leaf, BarChart3, ArrowRight } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for AI models
const aiModels = [
  { 
    id: 'openrouter/optimus-alpha', 
    name: 'Optimus-Alpha',
    efficiency: 'High',
    energyPerInference: 0.012,
    co2PerInference: 5.4,
  },
  { 
    id: 'model-2', 
    name: 'EcoTransformer-M',
    efficiency: 'Medium',
    energyPerInference: 0.025,
    co2PerInference: 11.3,
  },
  { 
    id: 'model-3', 
    name: 'EcoTransformer-L',
    efficiency: 'Low',
    energyPerInference: 0.065,
    co2PerInference: 29.3,
  },
  { 
    id: 'model-4', 
    name: 'Vision-ECO-1',
    efficiency: 'High',
    energyPerInference: 0.018,
    co2PerInference: 8.1,
  },
  { 
    id: 'model-5', 
    name: 'Vision-ECO-2',
    efficiency: 'Medium',
    energyPerInference: 0.035,
    co2PerInference: 15.8,
  },
  { 
    id: 'model-6', 
    name: 'Audio-ECO-1',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    co2PerInference: 12.6,
  }
];

// Helper function to get task name from ID
const getTaskName = (taskId: string) => {
  const taskNames: { [key: string]: string } = {
    'creative-writing': 'Creative Writing',
    'content-completion': 'Content Completion',
    'code-generation': 'Code Generation',
    'language-translation': 'Language Translation',
    'technical-translation': 'Technical Translation',
    'object-detection': 'Object Detection',
    'image-classification': 'Image Classification',
    'facial-recognition': 'Facial Recognition',
    'chatbot': 'Chatbot',
    'question-answering': 'Question Answering',
    'speech-to-text': 'Speech to Text',
    'audio-classification': 'Audio Classification'
  };
  
  return taskNames[taskId] || 'Unknown Task';
};

const Results = () => {
  // Call all hooks at the top level
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modelId = queryParams.get('model') || '';
  const taskId = queryParams.get('task') || '';
  const { textInput } = location.state || {};

  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [comparisonData, setComparisonData] = useState<any[]>([]);
  const [alternativeModels, setAlternativeModels] = useState<any[]>([]);
  const [apiOutput, setApiOutput] = useState<string>('');

  // Hook to find the selected model and prepare comparison data
  useEffect(() => {
    const model = aiModels.find(m => m.id === modelId);
    if (model) {
      setSelectedModel(model);
      
      // Prepare comparison data
      const otherModels = aiModels
        .filter(m => m.id !== modelId)
        .sort((a, b) => a.energyPerInference - b.energyPerInference)
        .slice(0, 2);
      
      const chartData = [
        { name: model.name, energy: model.energyPerInference, co2: model.co2PerInference, current: true },
        ...otherModels.map(m => ({ 
          name: m.name, 
          energy: m.energyPerInference, 
          co2: m.co2PerInference, 
          current: false 
        }))
      ];
      setComparisonData(chartData);
      
      // Find alternative models with better efficiency
      const betterModels = aiModels
        .filter(m => m.id !== modelId && m.energyPerInference < model.energyPerInference)
        .sort((a, b) => a.energyPerInference - b.energyPerInference)
        .slice(0, 2);
      setAlternativeModels(betterModels);
    }
  }, [modelId]);

  // Hook to fetch API output, conditional logic inside the hook callback
  useEffect(() => {
    if (textInput && selectedModel) {
      outputFromSelectedModel(textInput)
        .then((data) => {
          // Adjust extraction based on your API response structure
          const output = data.choices?.[0]?.message?.content || 'No output received from API.';
          setApiOutput(output);
        })
        .catch((err) => console.error(err));
    }
  }, [textInput, selectedModel]);

  async function outputFromSelectedModel(textInput: string) {
    try {
      const apiKey = import.meta.env.VITE_OPEN_ROUTER_API_KEY;
      const instruction = `
You are a concise and detail-oriented assistant. 
When providing responses, please:
1. Structure the output clearly in plain text.
2. Avoid unnecessary markdown formatting like extra asterisks.
3. Format your answer using simple bullet points or numbered lists when appropriate.
4. Provide logical and easy-to-understand explanations.
Please provide your response in plain text only.
      `.trim();
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Use the model's ID, not the entire object
          model: selectedModel ? selectedModel.id : '',
          messages: [
            {
              role: 'user',
              content: `${instruction}\n\nUser Input: ${textInput}`,
            },
          ],
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("Error During Fetching", err);
      throw new Error("Error During Fetching");
    }
  }

  // Calculate relatable metrics
  const milesDriven = selectedModel ? (selectedModel.co2PerInference * 0.0024).toFixed(4) : '0.0000';
  const treesNeeded = selectedModel ? (selectedModel.co2PerInference * 0.00002).toFixed(5) : '0.00000';
  const lightbulbHours = selectedModel ? (selectedModel.energyPerInference * 10).toFixed(2) : '0.00';

  // Now, after calling all hooks, you can conditionally render
  if (!selectedModel) {
    return (
      <Layout>
        <div className="section-container text-center py-20">
          <div className="glass p-8">
            <h2 className="text-2xl font-bold mb-4">Loading Results...</h2>
            <p>If the results don't load, there might be an issue with the analysis parameters.</p>
            <Link to="/analyze" className="btn-primary inline-block mt-6">Return to Analyze</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Analysis Results for {getTaskName(taskId)}
            </h1>
            <p className="text-xl text-gray-300">
              Task analyzed using {selectedModel.name}
            </p>
          </div>
          
          {/* Output Display */}
          <div className="glass p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Task Output</h2>
            <div className="glass bg-white/5 p-6 rounded-lg">
              <pre className="whitespace-pre-wrap font-mono text-gray-300">{apiOutput}</pre>
            </div>
          </div>
          
          {/* Environmental Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card">
              <div className="text-center">
                <div className="p-3 rounded-full bg-verdex-accent/20 inline-flex mb-4">
                  <BarChart className="h-8 w-8 text-verdex-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Energy Consumption</h3>
                <p className="text-3xl font-bold text-verdex-accent mb-2">
                  {selectedModel.energyPerInference} kWh
                </p>
                <p className="text-gray-400 text-sm">Per inference</p>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="text-center">
                <div className="p-3 rounded-full bg-verdex-accent/20 inline-flex mb-4">
                  <BarChart3 className="h-8 w-8 text-verdex-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Carbon Emissions</h3>
                <p className="text-3xl font-bold text-verdex-accent mb-2">
                  {selectedModel.co2PerInference} gCO2e
                </p>
                <p className="text-gray-400 text-sm">Per inference</p>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="text-center">
                <div className="p-3 rounded-full bg-verdex-accent/20 inline-flex mb-4">
                  <Leaf className="h-8 w-8 text-verdex-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Efficiency Rating</h3>
                <p className="text-3xl font-bold text-verdex-accent mb-2">
                  {selectedModel.efficiency}
                </p>
                <p className="text-gray-400 text-sm">Performance/impact ratio</p>
              </div>
            </div>
          </div>
          
          {/* Relatable Visualizations */}
          <div className="glass p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">What Does This Mean?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass bg-white/5 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-verdex-accent/20 mr-4">
                    <Car className="h-6 w-6 text-verdex-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Car Travel</h3>
                </div>
                <p className="text-gray-300">
                  Equivalent to driving <span className="text-verdex-accent font-semibold">{milesDriven} miles</span> in an average passenger vehicle.
                </p>
              </div>
              
              <div className="glass bg-white/5 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-verdex-accent/20 mr-4">
                    <Leaf className="h-6 w-6 text-verdex-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Tree Offset</h3>
                </div>
                <p className="text-gray-300">
                  Requires <span className="text-verdex-accent font-semibold">{treesNeeded} trees</span> growing for a day to offset these carbon emissions.
                </p>
              </div>
              
              <div className="glass bg-white/5 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-verdex-accent/20 mr-4">
                    <Lightbulb className="h-6 w-6 text-verdex-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Energy Usage</h3>
                </div>
                <p className="text-gray-300">
                  Could power an LED lightbulb for <span className="text-verdex-accent font-semibold">{lightbulbHours} hours</span>.
                </p>
              </div>
            </div>
          </div>
          
          {/* Comparative Analysis */}
          <div className="glass p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Compare with Other Models</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={comparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#fff' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                  />
                  <YAxis 
                    yAxisId="left"
                    label={{ 
                      value: 'Energy (kWh)', 
                      angle: -90, 
                      position: 'insideLeft',
                      fill: '#fff',
                      style: { textAnchor: 'middle' }
                    }}
                    tick={{ fill: '#fff' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right"
                    label={{ 
                      value: 'CO2 (gCO2e)', 
                      angle: -90, 
                      position: 'insideRight',
                      fill: '#fff',
                      style: { textAnchor: 'middle' }
                    }}
                    tick={{ fill: '#fff' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar 
                    yAxisId="left" 
                    dataKey="energy" 
                    name="Energy (kWh)" 
                    fill="#71DB77" 
                    radius={[4, 4, 0, 0]}
                    fillOpacity={0.8}
                  />
                  <Bar 
                    yAxisId="right" 
                    dataKey="co2" 
                    name="CO2 (gCO2e)" 
                    fill="#5D8BF4" 
                    radius={[4, 4, 0, 0]}
                    fillOpacity={0.8}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Alternative Recommendations */}
          {alternativeModels.length > 0 && (
            <div className="glass p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">More Efficient Alternatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {alternativeModels.map(model => (
                  <div key={model.id} className="glass bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold flex items-center mb-2">
                      {model.name}
                      <span className="ml-2 px-2 py-1 bg-verdex-accent/20 text-verdex-accent text-xs rounded-full">
                        {model.efficiency} Efficiency
                      </span>
                    </h3>
                    <div className="text-gray-300 space-y-2">
                      <p>Energy: <span className="text-verdex-accent font-semibold">{model.energyPerInference} kWh</span> (saves {((selectedModel.energyPerInference - model.energyPerInference) / selectedModel.energyPerInference * 100).toFixed(0)}%)</p>
                      <p>CO2: <span className="text-verdex-accent font-semibold">{model.co2PerInference} gCO2e</span></p>
                    </div>
                    <div className="mt-4">
                      <Link 
                        to={`/analyze/configure?task=${taskId}`}
                        className="flex items-center text-verdex-accent hover:underline"
                      >
                        Try this model <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GlassButton to={`/analyze/configure?task=${taskId}`} variant="secondary">
              Run Again with Different Model
            </GlassButton>
            <GlassButton to="/analyze/select-task" variant="primary">
              Start New Analysis
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
