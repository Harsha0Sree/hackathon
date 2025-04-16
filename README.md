# 🌿 Verdex – AI Energy Transparency Platform
#SUSHACKS 2024

*Verdex* is a web-based transparency tool that helps users understand the *energy consumption* and *environmental impact* of AI models. Built entirely with *React, **TypeScript, **HTML, and **CSS*, it empowers users to make greener AI choices through real-time insights and comparisons.

---

## 🎯 Project Goals

- Visualize energy usage and carbon footprint of AI models
- Help users pick more efficient models for various AI tasks
- Make AI’s environmental impact easy to understand through simple visuals
- Promote sustainable practices in AI development

---

## 🚀 Tech Stack

| Layer        | Technology               |
|-------------|---------------------------|
| Framework   | React + TypeScript        |
| Styling     | CSS, Tailwind (optional)  |
| Markup      | HTML5                     |
| APIs Used   | Model APIs from OpenAI, Meta, Google, NVIDIA, etc. |
| Tools Used  | OCR, Text-to-Speech, Visualization APIs |

---

## 🤖 AI Models Integrated

Verdex currently integrates with the following models via API:

### NVIDIA
- Llama 3.1 Nemotron Nano 8B v1
- Llama 3.3 Nemotron Super 49B v1
- Llama 3.1 Nemotron Ultra 253B v1L
- Llama 3.1 Nemotron 70B Instruct

### Meta
- Llama 4 Scout
- Llama 4 Maverick
- Meta Llama 3.1 8B Instruct
- Meta Llama 3.3 70B Instruct

### Google
- Gemini 2.0 Flash (Experimental)
- Gemini 2.5 Pro (03-25)
- Gemma 3 27B
- LearnLM 1.5 Pro

### Qwen
- Qwen QWQ 32B
- Qwen 2.5 VL 72B Instruct

### Deepseek
- Deepseek Chat V3 (0324)
- Deepseek R1

---

## 🖥 Website Features

- 🌱 *AI Model Energy Tracker*  
  See how much energy your selected model consumes.

- 📉 *Carbon Impact Estimator*  
  Convert AI energy into CO2 emissions.

- 📊 *Visualizations*  
  View results in intuitive forms like lightbulb hours, car miles, trees needed to offset, etc.

- 🧠 *Model Comparison*  
  Choose between high-performance or energy-efficient models.

- 🧾 *Text-to-Voice for Visually Impaired*  
  OCR + TTS integration to narrate content from uploaded posters.

---

## 📁 Folder Structure (Frontend)

verdex/ ├── public/ │ └── logo.png # Website logo ├── src/ │ ├── components/ # Reusable UI components │ ├── pages/ # Main views (Home, Dashboard, etc.) │ ├── App.tsx # Main app wrapper │ └── index.tsx # Entry point ├── .env # API keys stored here ├── tailwind.config.ts # Tailwind config (if used) ├── package.json └── README.md

yaml
Copy
Edit

---

## ⚙ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/verdex.git
cd verdex
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create Environment File
Make a .env file in the root folder and add your API keys:

env
Copy
Edit
VITE_OPENAI_API_KEY=your_openai_key_here
VITE_GOOGLE_API_KEY=your_google_key_here
VITE_META_API_KEY=your_meta_key_here
VITE_NVIDIA_API_KEY=your_nvidia_key_here
4. Run the App
bash
Copy
Edit
npm run dev
Now visit http://localhost:5173 in your browser.

🔑 How to Connect API Keys
Go to the official developer portal of each model provider (OpenAI, Meta, Google, NVIDIA, etc.)

Generate an API key

Add them to .env as shown above

Access keys in your app using import.meta.env.VITE_API_KEY_NAME

⚠ Never expose your API keys in public repositories.

💡 Future Enhancements
Backend layer for model routing and advanced analytics

User authentication and saved model comparisons

Historical tracking and usage trends

PWA support for mobile accessibility

🤝 Support & Contact
For questions, suggestions, or collaboration:

📧 Email: harshaskavish@gmail.com

👨‍💻 Maintainer: Harsha Kavish
