# MatrAIx: Persona-Driven Question Paper Maker AI Agent

A cross-platform AI agent leveraging **MatrAIx-Persona-8B** and **NVIDIA NIM API** to synthesize academic question papers grounded in syllabus boundaries, historical exam patterns, and teacher behavior profiles. Designed following **Apple HIG Obsidian Dark UI/UX** principles.

## Features
- **Apple HIG Obsidian Dark Aesthetics**: `#0A0A0C` background, 1px metallic bevel borders, zero gradients, 6px soft rectangular buttons, micro-noise texture, genuine vector icons.
- **Blur-In Startup Screen**: Smooth auth verification with guest device session caching.
- **Multi-Source Context Fusion**: Ingest textbooks, PDFs, notes, or web search queries.
- **Question Paper Pattern Extraction**: Ingest past exam papers to extract section structures, question types, and mark distribution.
- **Teacher Behavioral Conditioning**: Adjust difficulty, framing style, and chapter preferences through MatrAIx 1,290 persona dimensions.
- **Syllabus Guardrail & Verifier Agent**: Ensures 0% out-of-syllabus leakage and calculates an **Importance Probability Percentage Score**.
- **Sliding Session Drawer & AI Settings**: Quick switching between user sessions with bottom profile drawer, sign out, and custom NVIDIA NIM API / Base URL settings.

## Quickstart

### 1. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

export NVIDIA_NIM_API_KEY="nvapi-YOUR_KEY"
uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup
```bash
# From root directory
npm install
npm run dev
```
