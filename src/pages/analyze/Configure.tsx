import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import { Leaf, Upload, Mic } from 'lucide-react';

// Mock data for AI models
const aiModels = [
  { 
    id: 'openrouter/optimus-alpha', 
    name: 'Optimus-Alpha',
    description: 'Small, efficient transformer for basic tasks',
    efficiency: 'High',
    energyPerInference: 0.012,
    supportedTasks: ['creative-writing', 'content-completion', 'language-translation', 'chatbot', 'question-answering'] 
  },
  { 
    id: 'nvidia/llama-3.1-nemotron-nano-8b-v1:free', 
    name: 'NVIDIA Llama 3.1 Nemotron Nano 8B v1',
    description: 'Medium-sized transformer with balanced performance',
    efficiency: 'Medium',
    energyPerInference: 0.025,
    supportedTasks: ['creative-writing', 'content-completion', 'code-generation', 'language-translation', 'technical-translation', 'chatbot', 'question-answering'] 
  },
  { 
    id: 'nvidia/llama-3.3-nemotron-super-49b-v1:free', 
    name: 'NVIDIA Llama 3.3 Nemotron Super 49B v1',
    description: 'Large transformer with advanced capabilities',
    efficiency: 'Low',
    energyPerInference: 0.065,
    supportedTasks: ['creative-writing', 'content-completion', 'code-generation', 'language-translation', 'technical-translation', 'chatbot', 'question-answering'] 
  },
  { 
    id: 'nvidia/llama-3.1-nemotron-ultra-253b-v1:free', 
    name: 'NVIDIA Llama 3.1 Nemotron Ultra 253B v1',
    description: 'Efficient vision model for basic classification',
    efficiency: 'High',
    energyPerInference: 0.018,
    supportedTasks: ['image-classification', 'object-detection'] 
  },
  { 
    id: 'meta-llama/llama-3.3-70b-instruct:free', 
    name: 'Meta: Llama 3.3 70B Instruct ',
    description: 'Advanced vision model with detailed recognition',
    efficiency: 'Medium',
    energyPerInference: 0.035,
    supportedTasks: ['image-classification', 'object-detection', 'facial-recognition'] 
  },
  { 
    id: 'meta-llama/llama-4-scout:free', 
    name: 'Llama 4 Scout',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'meta-llama/llama-4-maverick:free', 
    name: 'Llama 4 Maverick',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'meta-llama/llama-3.1-8b-instruct:free', 
    name: 'Meta Llama 3.1 8B Instruct',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'google/gemma-3-27b-it:free', 
    name: 'Google Gemma 3 27B',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'google/gemini-2.0-flash-thinking-exp:free', 
    name: 'Google Gemini 2.0 Flash Experimental',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'google/learnlm-1.5-pro-experimental:free', 
    name: 'Google LearnLM 1.5 Pro Experimental',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'google/gemini-2.5-pro-exp-03-25:free', 
    name: 'Google Gemini 2.5 Pro Experimental (03-25)',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'qwen/qwq-32b:free', 
    name: 'Qwen QWQ 32B',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'qwen/qwen2.5-vl-72b-instruct:free', 
    name: 'Qwen 2.5 VL 72B Instruct',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'deepseek/deepseek-chat-v3-0324:free', 
    name: 'Deepseek Chat V3 (0324)',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'deepseek/deepseek-r1:free', 
    name: 'Deepseek R1',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'model-6', 
    name: 'GPT-4o',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'model-6', 
    name: 'GPT-4.5',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'model-6', 
    name: 'GPT-4o-mini',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  },
  { 
    id: 'model-6', 
    name: 'GPT-o3-mini',
    description: 'Efficient audio processing model',
    efficiency: 'Medium',
    energyPerInference: 0.028,
    supportedTasks: ['speech-to-text', 'audio-classification'] 
  }
];

// Helper function to get task name from ID
const getTaskName = (taskId: string) => {
  const taskNames: {[key: string]: string} = {
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

// Helper to check if a task requires image input
const isImageTask = (taskId: string) => {
  return ['object-detection', 'image-classification', 'facial-recognition'].includes(taskId);
};

// Helper to check if a task requires audio input
const isAudioTask = (taskId: string) => {
  return ['speech-to-text', 'audio-classification'].includes(taskId);
};

const Configure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get('task') || '';
  
  const [textInput, setTextInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [sortBy, setSortBy] = useState('efficiency');
  const [filteredModels, setFilteredModels] = useState<typeof aiModels>([]);
  
  useEffect(() => {
    // Filter models that support the selected task
    const supportingModels = aiModels.filter(model => 
      model.supportedTasks.includes(taskId)
    );
    
    // Sort the filtered models
    const sortedModels = [...supportingModels];
    if (sortBy === 'efficiency') {
      sortedModels.sort((a, b) => {
        const efficiencyOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
        return efficiencyOrder[a.efficiency as keyof typeof efficiencyOrder] - 
               efficiencyOrder[b.efficiency as keyof typeof efficiencyOrder];
      });
    } else if (sortBy === 'name') {
      sortedModels.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setFilteredModels(sortedModels);
    
    // Select the first model by default if none is selected
    if (sortedModels.length > 0 && !selectedModel) {
      setSelectedModel(sortedModels[0].id);
    }
  }, [taskId, sortBy, selectedModel]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique analysis ID (in a real app, this would be from the server)
    const analysisId = `analysis-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // Redirect to results page with the analysis ID
    navigate(`/analyze/results/${analysisId}?model=${selectedModel}&task=${taskId}`,{
      state: {textInput}
    });
  };
  
  // Get EfficencyIcon based on the rating
  const EfficiencyIcon = ({ rating }: { rating: string }) => {
    const count = rating === 'High' ? 3 : rating === 'Medium' ? 2 : 1;
    
    return (
      <div className="flex">
        {[...Array(count)].map((_, i) => (
          <Leaf key={i} className="h-5 w-5 text-verdex-accent mr-1" />
        ))}
        {[...Array(3 - count)].map((_, i) => (
          <Leaf key={i + count} className="h-5 w-5 text-gray-500 mr-1" />
        ))}
      </div>
    );
  };
  
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title={`Configure: ${getTaskName(taskId)}`}
            subtitle="Set up your task parameters and select an AI model"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="glass p-6">
                <h3 className="text-xl font-semibold mb-4">Input Parameters</h3>
                
                <form onSubmit={handleSubmit}>
                  {isImageTask(taskId) ? (
                    <div className="mb-6">
                      <label className="block text-gray-300 mb-2">Upload Image</label>
                      <div className="glass bg-white/5 border-2 border-dashed border-gray-500 rounded-lg p-8 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400 mb-2">Drag & drop an image or click to browse</p>
                        <button type="button" className="btn-secondary text-sm py-2">Browse Files</button>
                      </div>
                    </div>
                  ) : isAudioTask(taskId) ? (
                    <div className="mb-6">
                      <label className="block text-gray-300 mb-2">Upload Audio File</label>
                      <div className="glass bg-white/5 border-2 border-dashed border-gray-500 rounded-lg p-8 text-center">
                        <Mic className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400 mb-2">Drag & drop an audio file or click to browse</p>
                        <button type="button" className="btn-secondary text-sm py-2">Browse Files</button>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <label htmlFor="textInput" className="block text-gray-300 mb-2">Text Input</label>
                      <textarea
                        id="textInput"
                        className="glass bg-white/5 w-full p-4 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-verdex-accent"
                        placeholder="Enter your text here..."
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                      ></textarea>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full mt-4"
                    disabled={!selectedModel}
                  >
                    Analyze Impact
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="glass p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <h3 className="text-xl font-semibold">Select AI Model</h3>
                  
                  <div className="mt-3 sm:mt-0">
                    <label htmlFor="sortBy" className="text-gray-300 mr-2 text-sm">Sort by:</label>
                    <select 
                      id="sortBy"
                      className="glass bg-white/5 p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-verdex-accent"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="efficiency">Efficiency (High to Low)</option>
                      <option value="name">Name (A-Z)</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {filteredModels.map((model) => (
                    <div 
                      key={model.id}
                      className={`glass p-4 rounded-lg transition-all duration-300 cursor-pointer 
                        ${selectedModel === model.id ? 'bg-verdex-accent/20 border-verdex-accent' : 'bg-white/5 hover:bg-white/10'}`}
                      onClick={() => setSelectedModel(model.id)}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={model.id}
                          name="model"
                          checked={selectedModel === model.id}
                          onChange={() => setSelectedModel(model.id)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full mr-3 flex-shrink-0 
                          ${selectedModel === model.id ? 'bg-verdex-accent' : 'bg-white/20'}`}>
                          {selectedModel === model.id && (
                            <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <h4 className="font-semibold">{model.name}</h4>
                          <p className="text-gray-300 text-sm">{model.description}</p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-sm gap-2 sm:gap-6">
                            <div className="flex items-center">
                              <span className="text-gray-400 mr-2">Efficiency:</span>
                              <EfficiencyIcon rating={model.efficiency} />
                            </div>
                            <div>
                              <span className="text-gray-400 mr-2">Energy:</span>
                              <span>{model.energyPerInference} kWh/inference</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Configure;
