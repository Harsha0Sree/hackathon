import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import GlassButton from '../../components/GlassButton';
import { Leaf, Search, SlidersHorizontal, FileText, ImageIcon, Mic, Languages } from 'lucide-react';

// Mock data for AI models
const allModels = [
  { 
    id: 'model-1', 
    name: 'NVIDIA Llama 3.1 Nemotron Nano 8B v1',
    description: 'Small, efficient transformer model for basic text generation and completion tasks',
    efficiency: 'High',
    tasks: ['Text Generation', 'Translation'],
    type: 'text',
  },
  { 
    id: 'model-2', 
    name: 'NVIDIA Llama 3.3 Nemotron Super 49B v1',
    description: 'Medium-sized transformer with balanced performance and efficiency',
    efficiency: 'Medium',
    tasks: ['Text Generation', 'Translation', 'Conversation'],
    type: 'text',
  },
  { 
    id: 'model-3', 
    name: 'NVIDIA Llama 3.1 Nemotron Ultra 253B v1L',
    description: 'Large transformer with advanced capabilities for complex text tasks',
    efficiency: 'Low',
    tasks: ['Text Generation', 'Translation', 'Conversation'],
    type: 'text',
  },
  { 
    id: 'model-4', 
    name: 'NVIDIA Llama 3.1 Nemotron 70B Instruct',
    description: 'Efficient vision model optimized for basic image classification and object detection',
    efficiency: 'High',
    tasks: ['Image Recognition'],
    type: 'vision',
  },
  { 
    id: 'model-5', 
    name: 'Llama 4 Scout',
    description: 'Advanced vision model with comprehensive recognition capabilities',
    efficiency: 'Medium',
    tasks: ['Image Recognition'],
    type: 'vision',
  },
  { 
    id: 'model-6', 
    name: 'Llama 4 Maverick',
    description: 'Efficient audio processing model for speech-to-text and classification',
    efficiency: 'Medium',
    tasks: ['Audio Processing'],
    type: 'audio',
  },
  { 
    id: 'model-7', 
    name: 'Meta Llama 3.1 8B Instruct',
    description: 'Specialized model for efficient translation across multiple languages',
    efficiency: 'High',
    tasks: ['Translation'],
    type: 'text',
  },
  { 
    id: 'model-8', 
    name: 'Meta Llama 3.3 70B Instruct',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'Medium',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-9', 
    name: 'Google Gemma 3 27B',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'Medium',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-10', 
    name: 'Google Gemini 2.0 Flash Experimental',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'Medium',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-11', 
    name: 'Google LearnLM 1.5 Pro Experimental',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'Medium',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-12', 
    name: 'Google Gemini 2.5 Pro Experimental (03-25)',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-13', 
    name: 'Qwen QWQ 32B',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-14', 
    name: 'Qwen 2.5 VL 72B Instruct',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-15', 
    name: 'Deepseek Chat V3 (0324)',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-16', 
    name: 'Deepseek R1',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-17', 
    name: 'Optimus Alpha',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-18', 
    name: 'GPT-4o',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-19', 
    name: 'GPT-4o-mini',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-20', 
    name: 'GPT-o3-mini',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  },
  { 
    id: 'model-21', 
    name: 'GPT-4.5',
    description: 'Optimized model for conversational AI with reduced environmental impact',
    efficiency: 'High',
    tasks: ['Conversation'],
    type: 'text',
  }
];

const ModelsDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTaskFilter, setSelectedTaskFilter] = useState<string>('');
  const [selectedEfficiencyFilter, setSelectedEfficiencyFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('efficiency');
  
  // Filter and sort models
  const filteredModels = allModels.filter(model => {
    // Search by name
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           model.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by task
    const matchesTask = selectedTaskFilter === '' || model.tasks.includes(selectedTaskFilter);
    
    // Filter by efficiency
    const matchesEfficiency = selectedEfficiencyFilter === '' || model.efficiency === selectedEfficiencyFilter;
    
    return matchesSearch && matchesTask && matchesEfficiency;
  });
  
  // Sort the filtered models
  const sortedModels = [...filteredModels].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'efficiency') {
      const efficiencyOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
      return efficiencyOrder[a.efficiency as keyof typeof efficiencyOrder] - 
             efficiencyOrder[b.efficiency as keyof typeof efficiencyOrder];
    }
    return 0;
  });
  
  // Reset all filters
  const handleReset = () => {
    setSearchQuery('');
    setSelectedTaskFilter('');
    setSelectedEfficiencyFilter('');
    setSortBy('efficiency');
  };
  
  // Get icon based on model type
  const getModelIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <FileText className="h-8 w-8 text-verdex-accent" />;
      case 'vision':
        return <ImageIcon className="h-8 w-8 text-verdex-accent" />;
      case 'audio':
        return <Mic className="h-8 w-8 text-verdex-accent" />;
      default:
        return <FileText className="h-8 w-8 text-verdex-accent" />;
    }
  };
  
  // Render efficiency indicator
  const EfficiencyIndicator = ({ rating }: { rating: string }) => {
    const count = rating === 'High' ? 3 : rating === 'Medium' ? 2 : 1;
    
    return (
      <div className="flex">
        {[...Array(count)].map((_, i) => (
          <Leaf key={i} className="h-4 w-4 text-verdex-accent" />
        ))}
        {[...Array(3 - count)].map((_, i) => (
          <Leaf key={i + count} className="h-4 w-4 text-gray-500" />
        ))}
      </div>
    );
  };
  
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Explore Our Library of AI Models" 
            subtitle="Discover and compare AI models based on their capabilities and environmental efficiency"
          />
          
          {/* Search and Filters */}
          <div className="glass p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-gray-300 mb-2">Search Models</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    type="text"
                    className="glass bg-white/5 w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-verdex-accent"
                    placeholder="Search by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Filters */}
              <div>
                <label className="block text-gray-300 mb-2">Filter Options</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <select
                      className="glass bg-verdex-background border border-verdex-accent/30 text-white w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-verdex-accent"
                      value={selectedTaskFilter}
                      onChange={(e) => setSelectedTaskFilter(e.target.value)}
                    >
                      <option value="">All Tasks</option>
                      <option value="Text Generation">Text Generation</option>
                      <option value="Translation">Translation</option>
                      <option value="Conversation">Conversation</option>
                      <option value="Image Recognition">Image Recognition</option>
                      <option value="Audio Processing">Audio Processing</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="glass bg-verdex-background border border-verdex-accent/30 text-white w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-verdex-accent"
                      value={selectedEfficiencyFilter}
                      onChange={(e) => setSelectedEfficiencyFilter(e.target.value)}
                    >
                      <option value="">All Efficiencies</option>
                      <option value="High">High Efficiency</option>
                      <option value="Medium">Medium Efficiency</option>
                      <option value="Low">Low Efficiency</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Sort and Reset */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="sort" className="block text-gray-300">Sort Models</label>
                  <button 
                    onClick={handleReset}
                    className="text-verdex-accent hover:underline text-sm flex items-center"
                  >
                    <SlidersHorizontal className="h-3 w-3 mr-1" />
                    Reset Filters
                  </button>
                </div>
                <select
                  id="sort"
                  className="glass bg-verdex-background border border-verdex-accent/30 text-white w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-verdex-accent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="efficiency">Sort by Efficiency</option>
                  <option value="name">Sort by Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Model Listing */}
          {sortedModels.length === 0 ? (
            <div className="glass text-center p-12 mb-12">
              <div className="mb-4">
                <Search className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Models Found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={handleReset}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sortedModels.map(model => (
                <Link
                  key={model.id}
                  to={`/models/${model.id}`}
                  className="glass-card flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-verdex-accent/20 mr-3">
                      {getModelIcon(model.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{model.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-400 text-sm mr-2">Efficiency:</span>
                        <EfficiencyIndicator rating={model.efficiency} />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 flex-grow">{model.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {model.tasks.map(task => (
                      <span key={task} className="glass bg-white/10 px-3 py-1 rounded-full text-xs">
                        {task}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {/* CTA */}
          <div className="text-center">
            <GlassButton to="/analyze" variant="primary">
              Analyze a Task Now
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModelsDirectory;
