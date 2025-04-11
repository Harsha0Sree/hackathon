
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import GlassSectionTitle from '../../components/GlassSectionTitle';
import { FileText, ImageIcon, MessageSquare, Mic, Languages } from 'lucide-react';

const taskCategories = [
  {
    id: 'text-generation',
    name: 'Text Generation',
    icon: FileText,
    description: 'Generate creative text, complete prompts, or create content',
    tasks: [
      { id: 'creative-writing', name: 'Creative Writing' },
      { id: 'content-completion', name: 'Content Completion' },
      { id: 'code-generation', name: 'Code Generation' }
    ]
  },
  {
    id: 'translation',
    name: 'Translation',
    icon: Languages,
    description: 'Translate text between different languages',
    tasks: [
      { id: 'language-translation', name: 'Language Translation' },
      { id: 'technical-translation', name: 'Technical Translation' }
    ]
  },
  {
    id: 'image-recognition',
    name: 'Image Recognition',
    icon: ImageIcon,
    description: 'Identify and classify content within images',
    tasks: [
      { id: 'object-detection', name: 'Object Detection' },
      { id: 'image-classification', name: 'Image Classification' },
      { id: 'facial-recognition', name: 'Facial Recognition' }
    ]
  },
  {
    id: 'conversation',
    name: 'Conversation',
    icon: MessageSquare,
    description: 'Engage in dialogue-based interactions',
    tasks: [
      { id: 'chatbot', name: 'Chatbot' },
      { id: 'question-answering', name: 'Question Answering' }
    ]
  },
  {
    id: 'audio-processing',
    name: 'Audio Processing',
    icon: Mic,
    description: 'Convert speech to text and analyze audio content',
    tasks: [
      { id: 'speech-to-text', name: 'Speech to Text' },
      { id: 'audio-classification', name: 'Audio Classification' }
    ]
  }
];

const SelectTask = () => {
  const navigate = useNavigate();
  
  const handleTaskSelect = (taskId: string) => {
    // Simulate passing the selected task as a parameter
    navigate(`/analyze/configure?task=${taskId}`);
  };
  
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-black/30">
        <div className="section-container">
          <GlassSectionTitle 
            title="Choose a Task Type" 
            subtitle="Select the type of AI task you want to analyze for environmental impact"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {taskCategories.map((category) => (
              <div key={category.id} className="glass-card">
                <div className="mb-6">
                  <div className="p-3 inline-flex rounded-full bg-verdex-accent/20 mb-4">
                    <category.icon className="h-7 w-7 text-verdex-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.tasks.map((task) => (
                      <button
                        key={task.id}
                        onClick={() => handleTaskSelect(task.id)}
                        className="w-full glass bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300"
                      >
                        <span>{task.name}</span>
                        <svg className="h-5 w-5 text-verdex-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SelectTask;
