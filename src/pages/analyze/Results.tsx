import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Layout from "../../components/Layout";
import GlassButton from "../../components/GlassButton";
import {
  BarChart,
  Car,
  Lightbulb,
  Leaf,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AnalysisPayload {
  model: string;
  task: string;
  file?: string;
  text?: string;
  prompt?: string;
}

// Mock data for AI models
const aiModels = [
  {
    id: "openrouter/optimus-alpha",
    name: "Optimus Alpha",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0078, // Updated: Optimus Alpha: 0.0078 kWh
  },
  {
    id: "nvidia/llama-3.1-nemotron-nano-8b-v1:free",
    name: "NVIDIA Llama 3.1 Nemotron Nano 8B v1",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0025, // Updated: NVIDIA Llama 3.1 Nemotron Nano 8B v1: 0.0025 kWh
  },
  {
    id: "nvidia/llama-3.3-nemotron-super-49b-v1:free",
    name: "NVIDIA Llama 3.3 Nemotron Super 49B v1",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0039, // Updated: NVIDIA Llama 3.3 Nemotron Super 49B v1: 0.0039 kWh
  },
  {
    id: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
    name: "NVIDIA Llama 3.1 Nemotron Ultra 253B v1",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0311, // Updated: NVIDIA Llama 3.1 Nemotron Ultra 253B v1: 0.0311 kWh
  },
  {
    id: "meta-llama/llama-3.3-70b-instruct:free",
    name: "Meta: Llama 3.3 70B Instruct",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0078, // Updated: Meta Llama 3.3 70B Instruct: 0.0078 kWh
  },
  {
    id: "meta-llama/llama-4-scout:free",
    name: "Llama 4 Scout",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0039, // Updated: Llama 4 Scout: 0.0039 kWh
  },
  {
    id: "meta-llama/llama-4-maverick:free",
    name: "Llama 4 Maverick",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0078, // Updated: Llama 4 Maverick: 0.0078 kWh
  },
  {
    id: "meta-llama/llama-3.1-8b-instruct:free",
    name: "Meta Llama 3.1 8B Instruct",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0039, // Updated: Meta Llama 3.1 8B Instruct: 0.0039 kWh
  },
  {
    id: "google/gemma-3-27b-it:free",
    name: "Google Gemma 3 27B",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0078, // Updated: Google Gemma 3 27B: 0.0078 kWh
  },
  {
    id: "google/gemini-2.0-flash-thinking-exp:free",
    name: "Google Gemini 2.0 Flash Experimental",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0028, // Updated: Google Gemini 2.0 Flash Experimental: 0.0028 kWh
  },
  {
    id: "google/learnlm-1.5-pro-experimental:free",
    name: "Google LearnLM 1.5 Pro Experimental",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: "~0.0028 - 0.0111", // Updated: Google LearnLM 1.5 Pro Experimental: ~0.0028 – 0.0111 kWh
  },
  {
    id: "google/gemini-2.5-pro-exp-03-25:free",
    name: "Google Gemini 2.5 Pro Experimental (03-25)",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0111, // Updated: Google Gemini 2.5 Pro Experimental: 0.0111 kWh
  },
  {
    id: "qwen/qwq-32b:free",
    name: "Qwen QWQ 32B",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0044, // Updated: Qwen QWQ 32B: 0.0044 kWh
  },
  {
    id: "qwen/qwen2.5-vl-72b-instruct:free",
    name: "Qwen 2.5 VL 72B Instruct",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0156, // Updated: Qwen 2.5 VL 72B Instruct: 0.0156 kWh
  },
  {
    id: "deepseek/deepseek-chat-v3-0324:free",
    name: "Deepseek Chat V3 (0324)",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0078, // Updated: Deepseek Chat V3 (0324): 0.0078 kWh
  },
  {
    id: "deepseek/deepseek-r1:free",
    name: "Deepseek R1",
    efficiency: "Medium",
    energyPerInference: 0.025,
    co2PerInference: 11.3,
    energyPerUnitkWh: 0.0117, // Updated: Deepseek R1: 0.0117 kWh
  }
  
];

// Helper function to get task name from ID
const getTaskName = (taskId: string) => {
  const taskNames: { [key: string]: string } = {
    "creative-writing": "Creative Writing",
    "content-completion": "Content Completion",
    "code-generation": "Code Generation",
    "language-translation": "Language Translation",
    "technical-translation": "Technical Translation",
    "object-detection": "Object Detection",
    "image-classification": "Image Classification",
    "facial-recognition": "Facial Recognition",
    chatbot: "Chatbot",
    "question-answering": "Question Answering",
    "speech-to-text": "Speech to Text",
    "audio-classification": "Audio Classification",
  };

  return taskNames[taskId] || "Unknown Task";
};

const Results = () => {
  // Call all hooks at the top level
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modelId = queryParams.get("model") || "";
  const taskId = queryParams.get("task") || "";
  const { model, task, prompt, text, base64Image } = (location.state ||
    {}) as any;

  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [comparisonData, setComparisonData] = useState<any[]>([]);
  const [alternativeModels, setAlternativeModels] = useState<any[]>([]);
  const [apiOutput, setApiOutput] = useState<string>("");
  const [outputTokenCount, setOutputTokenCount] = useState(0);
  const [energyConsumption, setEnergyConsumption] = useState(0);

  // Hook to find the selected model and prepare comparison data
  useEffect(() => {
    const model = aiModels.find((m) => m.id === modelId);
    if (model) {
      setSelectedModel(model);

      // Prepare comparison data
      const otherModels = aiModels
        .filter((m) => m.id !== modelId)
        .sort((a, b) => a.energyPerInference - b.energyPerInference)
        .slice(0, 2);

      const chartData = [
        {
          name: model.name,
          energy: model.energyPerUnitkWh,
          co2: model.co2PerInference,
          current: true,
        },
        ...otherModels.map((m) => ({
          name: m.name,
          energy: m.energyPerUnitkWh,
          co2: m.co2PerInference,
          current: false,
        })),
      ];
      setComparisonData(chartData);

      // Find alternative models with better efficiency
      const betterModels = aiModels
        .filter(
          (m) =>
            m.id !== modelId && m.energyPerInference < model.energyPerInference
        )
        .sort((a, b) => a.energyPerInference - b.energyPerInference)
        .slice(0, 2);
      setAlternativeModels(betterModels);
    }
  }, [modelId]);



  // Hook to fetch API output, conditional logic inside the hook callback
  // CHANGE: Modified to calculate API response time and log it to console
  // - Added async function inside useEffect to handle async/await
  // - Recorded start time before API call and end time after
  // - Calculated duration in seconds and logged to console
  // - Added try-catch for error handling (improves robustness)
  useEffect(() => {
    if (model && prompt && selectedModel) {
      const fetchOutput = async () => {
        const startTime = Date.now(); // Record start time before API call
        try {
          const data = await outputFromSelectedModel();
          const endTime = Date.now(); // Record end time after API call
          const duration = (endTime - startTime) / 1000; // Calculate duration in seconds
          console.log(`API response time: ${duration.toFixed(2)} seconds`); // Log to console only
          const output =
            data.choices?.[0]?.message?.content || "No output received from API.";
          setApiOutput(output);
        } catch (error) {
          console.error("Error fetching output:", error);
          setApiOutput("Failed to fetch output. Please try again.");
        }
      };
      fetchOutput();
    }
  }, [model, prompt, selectedModel]);

  useEffect(() => {
    const trimmedOutput = apiOutput.trim();
    const tokens = trimmedOutput ? trimmedOutput.split(/\s+/) : [];
    setOutputTokenCount(tokens.length);
  }, [apiOutput]);

  useEffect(() => {
    if (selectedModel) {
      // Calculate tokens from the user input
      const inputTokenCount = text ? text.trim().split(/\s+/).length : 0;
      // Total tokens is the sum of input tokens and output tokens
      const totalTokens = inputTokenCount + outputTokenCount;
  
      // Only proceed if energy per unit is defined
      if (selectedModel.energyPerUnitkWh !== null) {
        const energy = selectedModel.energyPerUnitkWh * totalTokens;
        setEnergyConsumption(energy);
      } else {
        setEnergyConsumption(0);
      }
    }
  }, [selectedModel, outputTokenCount, text]);

  useEffect(() => {
    const inputTokenCount = text ? text.trim().split(/\s+/).length : 0;
  
    // Avoid running if outputTokenCount is not set yet
    if (!outputTokenCount || outputTokenCount === 0) return;
  
    const totalTokens = inputTokenCount + outputTokenCount;
  
    console.log("Total tokens used:", totalTokens);
  
    const currentLog = {
      timestamp: Date.now(),
      modelId,
      taskId,
      totalTokens,
    };
  
    localStorage.setItem("tokenLog", JSON.stringify(currentLog));
  }, [outputTokenCount]);


  async function outputFromSelectedModel() {
    const apiKey = import.meta.env.VITE_OPEN_ROUTER_API_KEY;
    const instruction = `
You are a detail-oriented assistant. 
1. Structure the output clearly in plain text.
2. Avoid unnecessary markdown formatting and star marks
3. Explain stuff in detail yet concise way
4. Explain logically and clearly.
`.trim();

    const content: any[] = [
      {
        type: "text",
        text: `${instruction}\n\n${prompt}\n\nUser Input: ${
          text || "Attached image"
        }`,
      },
    ];
    if (base64Image) {
      content.push({ type: "image_url", image_url: { url: base64Image } });
    }

    const payload = {
      model,
      messages: [
        {
          role: "user",
          content,
        },
      ],
    };

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  }
console.log(energyConsumption);
  // Calculate relatable metrics
  const milesDriven = selectedModel
    ? (energyConsumption/1).toFixed(2)
    : "0.0000";
  const treesNeeded = selectedModel
    ? ((energyConsumption *0.775)/21 ) .toFixed(2)
    : "0.00000";
  const lightbulbHours = selectedModel
    ? (energyConsumption /5).toFixed(2)
    : "0.00";

  // Now, after calling all hooks, you can conditionally render
  if (!selectedModel) {
    return (
      <Layout>
        <div className="section-container text-center py-20">
          <div className="glass p-8">
            <h2 className="text-2xl font-bold mb-4">Loading Results...</h2>
            <p>
              If the results don't load, there might be an issue with the
              analysis parameters.
            </p>
            <Link to="/analyze" className="btn-primary inline-block mt-6">
              Return to Analyze
            </Link>
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
              <pre className="whitespace-pre-wrap font-mono text-gray-300">
                {apiOutput}
              </pre>
            </div>
            {/* <-- CHANGE: Display the token count underneath the output display */}
            <div className="mt-2 text-sm text-gray-400">
              Estimated Tokens:{" "}
              <span className="text-white font-semibold">{outputTokenCount}</span>
            </div>
            {/* <-- END OF TOKEN DISPLAY SECTION */}
          </div>
          
          {/* Conditional Rendering for Environmental Metrics and Below */}
        {apiOutput !== "" ? (
          <>
            {/* Environmental Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card">
                <div className="text-center">
                  <div className="p-3 rounded-full bg-verdex-accent/20 inline-flex mb-4">
                    <BarChart className="h-8 w-8 text-verdex-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Energy Consumption
                  </h3>
                  <p className="text-3xl font-bold text-verdex-accent mb-2">
                    {energyConsumption.toFixed(2)} kWh
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
                    {(energyConsumption*400).toFixed(2)} gCO2e
                  </p>
                  <p className="text-gray-400 text-sm">Per inference</p>
                </div>
              </div>

              <div className="glass-card">
                <div className="text-center">
                  <div className="p-3 rounded-full bg-verdex-accent/20 inline-flex mb-4">
                    <Leaf className="h-8 w-8 text-verdex-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Efficiency Rating
                  </h3>
                  <p className="text-3xl font-bold text-verdex-accent mb-2">
                    {selectedModel.efficiency}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Performance/impact ratio
                  </p>
                </div>
              </div>
            </div>

            {/* Relatable Visualizations */}
            <div className="glass p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                What Does This Mean?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass bg-white/5 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-verdex-accent/20 mr-4">
                      <Car className="h-6 w-6 text-verdex-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Car Travel</h3>
                  </div>
                  <p className="text-gray-300">
                    Equivalent to driving{" "}
                    <span className="text-verdex-accent font-semibold">
                      {milesDriven} miles
                    </span>{" "}
                    in an average passenger vehicle.
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
                    Requires{" "}
                    <span className="text-verdex-accent font-semibold">
                      {treesNeeded} trees
                    </span>{" "}
                    growing for a day to offset these carbon emissions.
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
                    Could power an LED lightbulb for{" "}
                    <span className="text-verdex-accent font-semibold">
                      {lightbulbHours} hours
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Comparative Analysis */}
            <div className="glass p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                Compare with Other Models
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={comparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.1)"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#fff" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                    />
                    <YAxis
                      yAxisId="left"
                      label={{
                        value: "Energy (kWh)",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#fff",
                        style: { textAnchor: "middle" },
                      }}
                      tick={{ fill: "#fff" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      label={{
                        value: "CO2 (gCO2e)",
                        angle: -90,
                        position: "insideRight",
                        fill: "#fff",
                        style: { textAnchor: "middle" },
                      }}
                      tick={{ fill: "#fff" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        color: "#fff",
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

            {/* Alternative

 Recommendations */}
            {alternativeModels.length > 0 && (
              <div className="glass p-6 md:p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-6">
                  More Efficient Alternatives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {alternativeModels.map((model) => (
                    <div
                      key={model.id}
                      className="glass bg-white/5 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold flex items-center mb-2">
                        {model.name}
                        <span className="ml-2 px-2 py-1 bg-verdex-accent/20 text-verdex-accent text-xs rounded-full">
                          {model.efficiency} Efficiency
                        </span>
                      </h3>
                      <div className="text-gray-300 space-y-2">
                        <p>
                          Energy:{" "}
                          <span className="text-verdex-accent font-semibold">
                            {model.energyPerInference} kWh
                          </span>{" "}
                          (saves{" "}
                          {(
                            ((selectedModel.energyPerInference -
                              model.energyPerInference) /
                              selectedModel.energyPerInference) *
                            100
                          ).toFixed(0)}
                          %)
                        </p>
                        <p>
                          CO2:{" "}
                          <span className="text-verdex-accent font-semibold">
                            {model.co2PerInference} gCO2e
                          </span>
                        </p>
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
              <GlassButton
                to={`/analyze/configure?task=${taskId}`}
                variant="secondary"
              >
                Run Again with Different Model
              </GlassButton>
              <GlassButton to="/analyze/select-task" variant="primary">
                Start New Analysis
              </GlassButton>
            </div>
          </>
        ) : (
          <div className="glass p-6 md:p-8 mb-12 text-center">
            <p className="text-gray-300">Processing results, please wait...</p>
          </div>
        )}
      </div>
    </section>
  </Layout>
);
};

export default Results;
