
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassButton from '../../components/GlassButton';
import { Leaf, Server, Cpu, CheckCircle2, AlertTriangle, Database } from 'lucide-react';

// Mock data for AI models
const aiModels = [
  { 
    id: 'model-1', 
    name: 'EcoTransformer-S',
    description: 'A small, efficient transformer model optimized for basic text generation and completion tasks.',
    longDescription: 'EcoTransformer-S is designed with efficiency as a priority, offering a balance of performance and minimal environmental impact. With a significantly reduced parameter count compared to larger models, it delivers excellent results for common text generation tasks while maintaining a small carbon footprint.',
    efficiency: 'High',
    tasks: ['Text Generation', 'Translation'],
    type: 'text',
    energyPerInference: 0.012,
    co2PerInference: 5.4,
    parameters: '125M',
    trainingEmissions: 'Estimate: 8.5 tons CO2e',
    hardware: {
      recommended: 'CPU or Single GPU',
      minimumMemory: '4GB RAM',
      optimizedFor: 'Energy-efficient inference on everyday hardware'
    },
    capabilities: [
      'Creative writing for short to medium content',
      'Completion of prompted text',
      'Basic translation between common languages',
      'Summarization of short documents',
      'Question answering for factual queries'
    ]
  },
  { 
    id: 'model-2', 
    name: 'EcoTransformer-M',
    description: 'Medium-sized transformer with balanced performance and efficiency.',
    longDescription: 'EcoTransformer-M represents the middle ground in our efficiency-focused model lineup. It offers enhanced capabilities and deeper understanding compared to smaller models, while still maintaining reasonable energy requirements. This model is ideal for users who need more advanced language capabilities but remain conscious of environmental impact.',
    efficiency: 'Medium',
    tasks: ['Text Generation', 'Translation', 'Conversation'],
    type: 'text',
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    parameters: '750M',
    trainingEmissions: 'Estimate: 24.2 tons CO2e',
    hardware: {
      recommended: 'Single GPU',
      minimumMemory: '8GB RAM',
      optimizedFor: 'Balance of performance and efficiency'
    },
    capabilities: [
      'Advanced text generation with improved coherence',
      'Higher quality translations across more language pairs',
      'Conversational AI with context maintenance',
      'Document summarization with better detail preservation',
      'More nuanced question answering with improved reasoning'
    ]
  },
  { 
    id: 'model-3', 
    name: 'EcoTransformer-L',
    description: 'Large transformer with advanced capabilities for complex text tasks.',
    longDescription: 'EcoTransformer-L is our most capable text model, designed for users who require top-tier performance for complex language tasks. While this model consumes more energy than smaller alternatives, it has been optimized to be more efficient than comparable models in its class, providing a more environmentally conscious choice for demanding applications.',
    efficiency: 'Low',
    tasks: ['Text Generation', 'Translation', 'Conversation'],
    type: 'text',
    energyPerInference: 0.065,
    co2PerInference: 29.3,
    parameters: '3B',
    trainingEmissions: 'Estimate: 85.6 tons CO2e',
    hardware: {
      recommended: 'Dedicated GPU',
      minimumMemory: '16GB RAM',
      optimizedFor: 'High-performance applications'
    },
    capabilities: [
      'High-quality long-form content generation',
      'Precise translations with nuanced understanding',
      'Sophisticated conversational abilities with long-term context',
      'Comprehensive document summarization',
      'Detailed question answering with complex reasoning',
      'Creative problem-solving and coding assistance'
    ]
  },
  { 
    id: 'model-4', 
    name: 'Vision-ECO-1',
    description: 'Efficient vision model optimized for basic image classification and object detection.',
    longDescription: 'Vision-ECO-1 offers energy-efficient image recognition capabilities designed for common computer vision tasks. The model implements architecture optimizations that reduce computational requirements while maintaining strong performance on everyday image analysis needs.',
    efficiency: 'High',
    tasks: ['Image Recognition'],
    type: 'vision',
    energyPerInference: 0.018,
    co2PerInference: 8.1,
    parameters: '65M',
    trainingEmissions: 'Estimate: 12.3 tons CO2e',
    hardware: {
      recommended: 'CPU or Entry-level GPU',
      minimumMemory: '4GB RAM',
      optimizedFor: 'Edge devices and energy-constrained environments'
    },
    capabilities: [
      'Image classification across common categories',
      'Basic object detection',
      'Scene recognition',
      'Simple content filtering',
      'Visual attribute detection'
    ]
  },
  { 
    id: 'model-5', 
    name: 'Vision-ECO-2',
    description: 'Advanced vision model with comprehensive recognition capabilities.',
    longDescription: 'Vision-ECO-2 extends the capabilities of our vision model family with improved accuracy and a broader range of supported tasks. While requiring more energy than Vision-ECO-1, it delivers substantially enhanced performance for applications that demand higher precision and more detailed analysis.',
    efficiency: 'Medium',
    tasks: ['Image Recognition'],
    type: 'vision',
    energyPerInference: 0.035,
    co2PerInference: 15.8,
    parameters: '250M',
    trainingEmissions: 'Estimate: 29.7 tons CO2e',
    hardware: {
      recommended: 'Dedicated GPU',
      minimumMemory: '8GB RAM',
      optimizedFor: 'Balance of accuracy and inference speed'
    },
    capabilities: [
      'High-accuracy image classification',
      'Detailed object detection and counting',
      'Facial recognition and attribute analysis',
      'Image segmentation',
      'Visual relationship detection',
      'Fine-grained recognition'
    ]
  },
  { 
    id: 'model-6', 
    name: 'Audio-ECO-1',
    description: 'Efficient audio processing model for speech-to-text and classification.',
    longDescription: 'Audio-ECO-1 provides energy-efficient processing of audio data, optimized particularly for speech recognition and audio classification. The model architecture has been specifically designed to minimize computation while maintaining high accuracy for common audio processing tasks.',
    efficiency: 'Medium',
    tasks: ['Audio Processing'],
    type: 'audio',
    energyPerInference: 0.028,
    co2PerInference: 12.6,
    parameters: '85M',
    trainingEmissions: 'Estimate: 16.8 tons CO2e',
    hardware: {
      recommended: 'CPU or Entry-level GPU',
      minimumMemory: '6GB RAM',
      optimizedFor: 'Real-time audio processing with minimal energy usage'
    },
    capabilities: [
      'Speech-to-text transcription',
      'Audio classification and tagging',
      'Speaker identification',
      'Emotion detection from voice',
      'Noise classification',
      'Music genre recognition'
    ]
  },
  { 
    id: 'model-7', 
    name: 'Multilingual-ECO',
    description: 'Specialized model for efficient translation across multiple languages.',
    longDescription: 'Multilingual-ECO is specifically designed for high-quality translations while maintaining energy efficiency. It supports over 100 languages and uses innovative techniques to reduce the computational requirements typically associated with multilingual models.',
    efficiency: 'High',
    tasks: ['Translation'],
    type: 'text',
    energyPerInference: 0.016,
    co2PerInference: 7.2,
    parameters: '450M',
    trainingEmissions: 'Estimate: 22.5 tons CO2e',
    hardware: {
      recommended: 'CPU or Single GPU',
      minimumMemory: '6GB RAM',
      optimizedFor: 'Efficient multilingual processing'
    },
    capabilities: [
      'High-quality translation between 100+ languages',
      'Context-aware translation',
      'Preservation of tone and style',
      'Technical and domain-specific translation',
      'Document-level translation coherence'
    ]
  },
  { 
    id: 'model-8', 
    name: 'ChatECO',
    description: 'Optimized model for conversational AI with reduced environmental impact.',
    longDescription: 'ChatECO is specifically designed for conversational applications, offering natural dialogue capabilities while maintaining energy efficiency. Through focused architecture optimization for dialogue tasks, this model provides responsive, context-aware interactions without the energy demands of larger general-purpose models.',
    efficiency: 'Medium',
    tasks: ['Conversation'],
    type: 'text',
    energyPerInference: 0.022,
    co2PerInference: 9.9,
    parameters: '550M',
    trainingEmissions: 'Estimate: 18.9 tons CO2e',
    hardware: {
      recommended: 'Single GPU',
      minimumMemory: '8GB RAM',
      optimizedFor: 'Responsive conversation with balanced efficiency'
    },
    capabilities: [
      'Natural conversational flow',
      'Context maintenance across multiple turns',
      'Personality consistency',
      'Task-oriented dialogue',
      'FAQ handling and information retrieval',
      'Emotional intelligence in responses'
    ]
  }
];
interface AIModel {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  efficiency: string;
  tasks: string[];
  type: string;
  energyPerInference: number;
  co2PerInference: number;
  parameters: string;
  trainingEmissions: string;
  
  capabilities: string[];
}

const ModelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<AIModel | null>(null);
  
  useEffect(() => {
    // Find the model by ID
    const foundModel = aiModels.find(m => m.id === id);
    if (foundModel) {
      setModel(foundModel);
    }
  }, [id]);
  
  if (!model) {
    return (
      <Layout>
        <div className="section-container text-center py-20">
          <div className="glass p-8">
            <h2 className="text-2xl font-bold mb-4">Model Not Found</h2>
            <p>We couldn't find the model you're looking for.</p>
            <Link to="/models" className="btn-primary inline-block mt-6">Browse All Models</Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Get efficiency rating display
  const EfficiencyRating = ({ rating }: { rating: string }) => {
    const count = rating === 'High' ? 3 : rating === 'Medium' ? 2 : 1;
    const color = rating === 'High' ? 'text-green-400' : rating === 'Medium' ? 'text-yellow-400' : 'text-red-400';
    
    return (
      <div>
        <div className="flex">
          {[...Array(count)].map((_, i) => (
            <Leaf key={i} className={`h-5 w-5 ${color}`} />
          ))}
          {[...Array(3 - count)].map((_, i) => (
            <Leaf key={i + count} className="h-5 w-5 text-gray-500" />
          ))}
        </div>
        <span className={`text-sm ${color} font-medium`}>{rating} Efficiency</span>
      </div>
    );
  };
  
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          {/* Header */}
          <div className="glass p-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{model.name}</h1>
            <p className="text-xl text-gray-300 mb-6">{model.description}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {model.tasks.map((task: string) => (
                <span key={task} className="glass bg-white/10 px-4 py-1 rounded-full text-sm">
                  {task}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300">{model.longDescription}</p>
          </div>
          
          {/* Efficiency Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-6">
              <h2 className="text-2xl font-semibold mb-6">Efficiency Profile</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Efficiency Rating:</span>
                  <EfficiencyRating rating={model.efficiency} />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Energy Per Inference:</span>
                  <span className="text-verdex-accent font-semibold">{model.energyPerInference} kWh</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">CO2 Per Inference:</span>
                  <span className="text-verdex-accent font-semibold">{model.co2PerInference} gCO2e</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Model Size:</span>
                  <span className="text-verdex-accent font-semibold">{model.parameters} parameters</span>
                </div>
              </div>
            </div>
            
            <div className="glass p-6">
              <h2 className="text-2xl font-semibold mb-6">Training Footprint</h2>
              
              <div className="flex items-start mb-6">
                <Database className="h-6 w-6 text-verdex-accent mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Training Emissions</h3>
                  <p className="text-gray-300">{model.trainingEmissions}</p>
                </div>
              </div>
              
              <div className="p-4 glass bg-white/5 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Important Context</h3>
                    <p className="text-gray-300 text-sm">
                      Training a model is a one-time energy cost, while inference costs occur each time the model is used. 
                      For frequently used models, the cumulative inference footprint eventually exceeds the training footprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hardware and Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-6">
              <div className="flex items-center mb-6">
                <Server className="h-6 w-6 text-verdex-accent mr-3" />
                <h2 className="text-2xl font-semibold">Hardware Considerations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Cpu className="h-5 w-5 text-verdex-accent mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Recommended Hardware</h3>
                    </div>
                  </div>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Database className="h-5 w-5 text-verdex-accent mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Minimum Memory</h3>
                    </div>
                  </div>
                </div>
                
                <div className="glass bg-white/5 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Leaf className="h-5 w-5 text-verdex-accent mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Optimization Focus</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-6">
              <div className="flex items-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-verdex-accent mr-3" />
                <h2 className="text-2xl font-semibold">Key Capabilities</h2>
              </div>
              
              <ul className="space-y-3">
                {model.capabilities.map((capability: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-verdex-accent mr-3 mt-0.5" />
                    <span className="text-gray-300">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GlassButton to={`/analyze/configure?task=${model.tasks[0].toLowerCase().replace(' ', '-')}`} variant="primary">
              Use This Model in Analysis
            </GlassButton>
            <GlassButton to="/models" variant="secondary">
              Explore Other Models
            </GlassButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModelDetail;
