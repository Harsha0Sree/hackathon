
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassButton from '../../components/GlassButton';
import { Leaf, Server, Cpu, CheckCircle2, AlertTriangle, Database } from 'lucide-react';


  const aiModels = [
    { 
      id: 'model-1', 
      name: 'NVIDIA Llama 3.1 Nemotron Nano 8B v1',
      description: 'Compact, long-context language model optimized for single GPU use.',
      longDescription: 'NVIDIA s Llama-3.1-Nemotron-Nano-8B-v1 is a compact yet powerful large language model optimized for advanced reasoning, conversational AI, and tool integration, designed to run efficiently on a single RTX GPU with a context length of up to 128K tokens. :contentReference[oaicite:0]{index=0} ',
      efficiency: 'High',
      tasks: ['Text Generation', 'Translation'],
      type: 'text',
      energyPerInference: 0.012,  // Original value
      energyPerUnitkWh: 0.45,     // New value: 0.45 kWh/hour
      co2PerInference: 5.4,
      parameters: '8B',
      trainingEmissions: 'Estimate: 8.5 tons CO2e',
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
      name: 'NVIDIA Llama 3.3 Nemotron Super 49B v1',
      description: 'Medium-sized transformer with balanced performance and efficiency',
      longDescription: 'NVIDIA s Llama-3.3-Nemotron-Super-49B-v1 is a high-efficiency large language model (LLM) designed for advanced reasoning, conversational interactions, retrieval-augmented generation (RAG), and tool-calling tasks.',
      efficiency: 'Medium',
      tasks: ['Text Generation', 'Translation', 'Conversation'],
      type: 'text',
      energyPerInference: 0.7,  // Original value
      energyPerUnitkWh: 0.024,      // New value: 0.7 kWh/hour
      co2PerInference: 7.5,
      parameters: '49B',
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
      name: 'NVIDIA Llama 3.1 Nemotron Ultra 253B v1L',
      description: "NVIDIA’s Llama-3.1-Nemotron-Ultra-253B-v1L is a powerful, multi-GPU LLM for reasoning and agent-based AI, built on Meta’s Llama 3.1 405B.",
      longDescription: 'NVIDIA s Llama-3.1-Nemotron-Ultra-253B-v1L is a powerful language model optimized for reasoning and agent-based AI. It’s based on Meta’s Llama 3.1 405B and designed for multi-GPU deployment. Part of NVIDIA’s high-performance Nemotron family.',
      efficiency: 'Low',
      tasks: ['Text Generation', 'Translation', 'Conversation'],
      type: 'text',
      energyPerInference: 0.065,  // Original value
      energyPerUnitkWh: 5.6,      // New value: 5.6 kWh/hour
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
      name: 'NVIDIA Llama 3.1 Nemotron 70B Instruct',
      description: "NVIDIA's Llama 3.1 Nemotron 70B Instruct is an RLHF-tuned LLM for superior instruction-following, built on Meta’s Llama 3.1 70B.",
      longDescription: 'NVIDIA s Llama-3.1-Nemotron-70B-Instruct is a large language model fine-tuned for enhanced instruction-following capabilities. Built upon Meta\'s Llama 3.1 70B architecture, it employs Reinforcement Learning from Human Feedback (RLHF) to improve response helpfulness and alignment with user intent.',
      efficiency: 'High',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.018,  // Original value
      energyPerUnitkWh: 1.4,      // New value: 1.4 kWh/hour
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
      name: 'Llama 4 Scout',
      description: "Meta's Llama 4 Scout is a compact, multimodal AI with 17B active parameters and a 10M-token context, built for efficiency and versatility.",
      longDescription: 'Meta s Llama 4 Scout is a compact, multimodal AI model designed for high efficiency and versatility. It features 17 billion active parameters and 16 experts, totaling 109 billion parameters, and supports an extensive 10 million-token context window',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value
      energyPerUnitkWh: 0.7,      // New value: 0.7 kWh/hour
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
      name: 'Llama 4 Maverick',
      description: "Meta's Llama 4 Maverick is a 400B-parameter multimodal AI optimized for reasoning and coding, outperforming GPT-4o and Gemini 2.0 Flash.",
      longDescription: 'Meta s Llama 4 Maverick is a mid-sized, open-weight multimodal AI model featuring 17 billion active parameters and 128 experts, totaling 400 billion parameters. It excels in reasoning and coding tasks, outperforming models like GPT-4o and Gemini 2.0 Flash on various benchmarks',
      efficiency: 'Medium',
      tasks: ['Audio Processing'],
      type: 'audio',
      energyPerInference: 0.028,  // Original value
      energyPerUnitkWh: 1.4,      // New value: 1.4 kWh/hour
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
      name: 'Meta Llama 3.1 8B Instruct',
      description: "Meta's Llama 3.1 8B Instruct is a multilingual, instruction-tuned LLM with 8.03B parameters and a 128K-token context, optimized for safe, helpful dialogue.",
      longDescription: '​Metas Llama 3.1 8B Instruct is an instruction-tuned, multilingual language model featuring 8.03 billion parameters and a 128,000-token context window. Optimized for dialogue and text generation, it supports languages including English, German, French, Hindi, and Spanish. Trained using supervised fine-tuning and reinforcement learning with human feedback, it ensures alignment with human preferences for safety and helpfulness .​',
      efficiency: 'High',
      tasks: ['Translation'],
      type: 'text',
      energyPerInference: 0.016,  // Original value
      energyPerUnitkWh: 0.7,      // New value: 0.7 kWh/hour
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
      name: 'Meta Llama 3.3 70B Instruct\'',
      description: "Meta's Llama 3.3 70B Instruct is a 70B-parameter, multilingual LLM optimized for reasoning, code generation, and multilingual dialogue with a 128K-token context.",
      longDescription: 'Metas Llama 3.3 70B Instruct is a multilingual, instruction-tuned large language model featuring 70 billion parameters and a 128,000-token context window. Optimized for tasks like reasoning, code generation, and multilingual dialogue, it supports languages such as English, German, French, Hindi, and Spanish',
      efficiency: 'Medium',
      tasks: ['Conversation'],
      type: 'text',
      energyPerInference: 0.022,  // Original value
      energyPerUnitkWh: 1.4,      // New value: 1.4 kWh/hour
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
    },
    { 
      id: 'model-9', 
      name: 'Google Gemma 3 27B',
      description: "Google's Gemma 3 27B is a 27B-parameter, open-source multimodal AI model with 128K-token context, optimized for single-GPU/TPU use and multilingual support.",
      longDescription: 'Googles Gemma 3 27B is a state-of-the-art, open-source AI model featuring 27 billion parameters and a 128,000-token context window. Optimized for single-GPU or TPU deployment, it supports multimodal inputs (text, images, short videos) and over 140 languages, making it ideal for diverse applications.',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value
      energyPerUnitkWh: 1.4,      // New value: 1.4 kWh/hour
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
      id: 'model-10', 
      name: 'Google Gemini 2.0 Flash Experimental',
      description: "Google's Gemini 2.0 Flash Experimental is a fast, multimodal AI with 1M-token context, supporting advanced reasoning, tool use, and features like image generation and TTS.",
      longDescription: 'Googles Gemini 2.0 Flash Experimental is a multimodal AI model designed for high-speed performance and advanced reasoning tasks. It processes text, images, video, and audio inputs, supports native tool use, and offers experimental features like image generation and text-to-speech. With a 1 million-token context window, its optimized for developers building responsive, agentic applications',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value remains
      energyPerUnitkWh: 0.5,      // New value: 0.5 kWh/hour
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
      id: 'model-11', 
      name: 'Google LearnLM 1.5 Pro Experimental',
      description: "Google's LearnLM 1.5 Pro Experimental is a multimodal AI with a 2M-token context, optimized for teaching and learning based on learning science principles.",
      longDescription: 'oogles LearnLM 1.5 Pro Experimental is an AI model designed to enhance teaching and learning experiences by aligning with learning science principles. Built upon the Gemini 1.5 Pro foundation, it supports multimodal inputs (text, images, audio, video) and boasts a 2 million-token context window, enabling it to process extensive educational content.',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value remains
      // New energy field not specified in your list – using null to indicate the absence of a value
      energyPerUnitkWh: null,  
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
      id: 'model-12', 
      name: 'Google Gemini 2.5 Pro Experimental (03-25)',
      description: "An advanced AI with superior reasoning and coding, outperforming GPT-4.5 and Claude 3.7 Sonnet on benchmarks.",
      longDescription: '​Googles Gemini 2.5 Pro Experimental (03-25) is an advanced AI model designed for complex tasks, showcasing enhanced reasoning and coding capabilities. It leads on benchmarks like LMArena, surpassing competitors such as OpenAIs GPT-4.5 and Anthropics Claude 3.7 Sonnet.',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value remains
      energyPerUnitkWh: 2.0,      // New value: 2.0 kWh/hour
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
      id: 'model-13', 
      name: 'Qwen QWQ 32B',
      description: "Alibaba's Qwen QwQ-32B is a 32B-parameter reasoning model that excels in tasks like math, coding, and analysis, outperforming larger models like DeepSeek R1 and OpenAI's o1-mini.",
      longDescription: 'Alibabas Qwen QwQ-32B is a 32-billion-parameter reasoning model designed for advanced tasks like mathematical problem-solving, coding, and analytical reasoning. Despite its moderate size, it matches or surpasses larger models such as DeepSeek R1 (671B) and OpenAIs o1-mini in performance, offering a cost-effective alternative for high-level reasoning applications',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.023,  // Original value remains
      energyPerUnitkWh: 0.8,      // New value: 0.8 kWh/hour
      co2PerInference: 15.8,
      parameters: '32B',
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
      id: 'model-14', 
      name: 'Qwen 2.5 VL 72B Instruct',
      description: "Qwen 2.5 VL 72B Instruct is a 72B-parameter multimodal AI by Alibaba, optimized for advanced visual and textual tasks like document parsing, chart analysis, and video comprehension.",
      longDescription: 'Qwen 2.5 VL 72B Instruct is a 72-billion-parameter multimodal AI model developed by Alibabas Qwen team, designed for advanced visual and textual understanding. It excels in tasks such as document parsing, chart analysis, and long-form video comprehension, supporting inputs like text, images, and videos',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value remains
      energyPerUnitkWh: 2.8,      // New value: 2.8 kWh/hour
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
      id: 'model-15', 
      name: 'Deepseek Chat V3 (0324)',
      description: "DeepSeek Chat V3 (0324) is a 685B-parameter MoE model with enhanced reasoning and coding, showing significant benchmark gains over its predecessor.",
      longDescription: '​DeepSeek Chat V3 (0324) is a 685-billion-parameter Mixture-of-Experts (MoE) language model released in March 2025. It features significant improvements in reasoning and coding capabilities over its predecessor, with notable benchmark gains: MMLU-Pro (75.9 → 81.2), GPQA (59.1 → 68.4), AIME (39.6 → 59.4), and LiveCodeBench (39.2 → 49.2) .',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value remains
      energyPerUnitkWh: 1.4,      // New value: 1.4 kWh/hour
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
      id: 'model-16', 
      name: 'Deepseek R1',
      description: "DeepSeek R1 is an open-source language model optimized for advanced reasoning, problem-solving, and real-time decision-making tasks.",
      longDescription: '​DeepSeek R1 is an open-source language model developed by the Chinese AI startup DeepSeek, designed to perform advanced reasoning, problem-solving, and real-time decision-making tasks.',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.035,  // Original value remains
      energyPerUnitkWh: 2.1,      // New value: 2.1 kWh/hour
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
      id: 'model-17', 
      name: 'Optimus Alpha',
      description: 'Optimized model for conversational AI with reduced environmental impact',
      longDescription: 'Optimus Alpha is a high-performance AI model optimized for coding and technical tasks, featuring a substantial 1 million-token context window. It excels in generating executable code with lower error rates compared to OpenAIs models and integrates seamlessly with development tools like VS Code and n8n.',
      efficiency: 'Medium',
      tasks: ['Image Recognition'],
      type: 'vision',
      energyPerInference: 0.045,  // Original value remains
      energyPerUnitkWh: 1.4,      // New value: 1.4 kWh/hour
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
