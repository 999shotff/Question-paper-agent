import React, { useState, useEffect } from 'react';

// --- SVG VECTOR ICONS (SF Symbols / Lucide Style - Monochromatic, No Emojis) ---
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UploadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const LogOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ShieldAlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

// --- MAIN APPLICATION COMPONENT ---
export default function MatrAIxQuestionPaperMaker() {
  // Session & Auth State
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [userSession, setUserSession] = useState<{ name: string; isGuest: boolean } | null>(null);
  
  // UI Panels State
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Workflow State
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [sources, setSources] = useState<Array<{ id: string; name: string; type: 'web' | 'file' }>>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [syllabusText, setSyllabusText] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [patternFile, setPatternFile] = useState<string | null>(null);
  const [teacherBehavior, setTeacherBehavior] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // NVIDIA NIM / Custom AI Config State (Saved in Local Memory Cache)
  const [aiConfig, setAiConfig] = useState({
    baseUrl: 'https://integrate.api.nvidia.com/v1',
    apiKey: '',
    model: 'matraix-persona-8b',
  });

  // Simulated Initial Auth Check with Backdrop Blur Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check cached session
      const cachedSession = localStorage.getItem('matraix_session');
      if (cachedSession) {
        setUserSession(JSON.parse(cachedSession));
      }
      setIsCheckingAuth(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleGuestLogin = () => {
    const guestData = { name: 'Guest User (Local Device)', isGuest: true };
    setUserSession(guestData);
    localStorage.setItem('matraix_session', JSON.stringify(guestData));
  };

  const handleSignOut = () => {
    setUserSession(null);
    localStorage.removeItem('matraix_session');
    setDrawerOpen(false);
  };

  const handleAddWebSource = () => {
    if (!searchQuery.trim()) return;
    setSources([...sources, { id: Date.now().toString(), name: searchQuery, type: 'web' }]);
    setSearchQuery('');
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setActiveStep(5);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E5E5EA] font-sans antialiased relative selection:bg-[#2C2C2E] selection:text-white">
      {/* Texture Noise Overlay (No Gradients, Apple HIG Tactile Dark) */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.025] z-50" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* --- STARTUP BLUR-OUT AUTH LOADER --- */}
      {isCheckingAuth && (
        <div className="fixed inset-0 bg-[#0A0A0C]/80 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-opacity duration-500">
          <div className="w-8 h-8 border-2 border-[#2C2C2E] border-t-white rounded-md animate-spin mb-4" />
          <p className="text-xs text-[#8E8E93] tracking-widest uppercase font-mono">Initializing Security & Persona Engine...</p>
        </div>
      )}

      {/* --- SIGN-IN / GUEST GATEWAY (If not authenticated) --- */}
      {!isCheckingAuth && !userSession && (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0A0C]">
          <div className="w-full max-w-md bg-[#121214] border border-[#2C2C2E] shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-xl font-semibold text-white tracking-tight mb-2">MatrAIx Question Paper Maker</h1>
              <p className="text-xs text-[#8E8E93]">Persona-driven examination synthesis based on student physiology & historical patterns.</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleGuestLogin}
                className="w-full bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white text-sm font-medium py-3 rounded-md transition-all flex items-center justify-center gap-2"
              >
                <UserIcon /> Continue as Guest (Device Session)
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1C1C1E] text-center">
              <p className="text-[11px] text-[#636366]">
                All guest session data and uploaded documents remain strictly stored within local memory cache.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN LANDING WORKSPACE (When Signed In) --- */}
      {!isCheckingAuth && userSession && (
        <div className="min-h-screen flex flex-col">
          {/* Header Navigation */}
          <header className="h-14 border-b border-[#2C2C2E] bg-[#121214] px-6 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-sm" />
              <span className="text-sm font-medium text-white tracking-tight">MatrAIx Persona-8B Paper Agent</span>
              <span className="text-xs font-mono text-[#8E8E93] bg-[#1C1C1E] border border-[#2C2C2E] px-2 py-0.5 rounded-md">Class 9+ Scope</span>
            </div>

            {/* Corner Drawer Trigger Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white rounded-md transition-all flex items-center gap-2 text-xs"
            >
              <MenuIcon />
              <span>Sessions & Config</span>
            </button>
          </header>

          {/* Main Layout Body */}
          <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10 space-y-8">
            
            {/* Step Navigation Progress */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { step: 1, label: '1. Ingest Sources' },
                { step: 2, label: '2. Syllabus & Scope' },
                { step: 3, label: '3. Exam Pattern' },
                { step: 4, label: '4. Teacher Behavior' },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step as any)}
                  className={`text-left p-3 rounded-md border transition-all text-xs font-medium ${
                    activeStep === s.step
                      ? 'bg-[#1C1C1E] border-[#48484A] text-white'
                      : 'bg-[#121214] border-[#2C2C2E] text-[#8E8E93] hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* --- STEP 1: SOURCES INGESTION --- */}
            {activeStep === 1 && (
              <div className="bg-[#121214] border border-[#2C2C2E] rounded-lg p-6 space-y-6">
                <div>
                  <h2 className="text-base font-semibold text-white mb-1">Add Course Material & Reference Books</h2>
                  <p className="text-xs text-[#8E8E93]">Import web sources or upload textbooks, chapter PDFs, and class notes.</p>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search book or reference topic online..."
                      className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md px-3 py-2 pl-9 text-xs text-white placeholder-[#636366] focus:outline-none focus:border-[#48484A]"
                    />
                    <div className="absolute left-3 top-2.5 text-[#636366]">
                      <SearchIcon />
                    </div>
                  </div>
                  <button
                    onClick={handleAddWebSource}
                    className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white px-4 py-2 rounded-md text-xs font-medium transition-all"
                  >
                    Add Search Source
                  </button>
                </div>

                <div className="border-2 border-dashed border-[#2C2C2E] rounded-lg p-8 text-center bg-[#0A0A0C]/50 hover:bg-[#0A0A0C] transition-all">
                  <div className="flex justify-center mb-3 text-[#8E8E93]"><UploadIcon /></div>
                  <p className="text-xs font-medium text-white mb-1">Drop Syllabus Books, Chapter PDFs or Images here</p>
                  <p className="text-[11px] text-[#636366]">Supports PDF, PNG, JPG (OCR layout extraction enabled)</p>
                </div>

                {/* Sources List */}
                {sources.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[#8E8E93] uppercase tracking-wider">Active Ingested Sources ({sources.length})</p>
                    <div className="space-y-1.5">
                      {sources.map((src) => (
                        <div key={src.id} className="flex items-center justify-between p-2.5 bg-[#0A0A0C] border border-[#2C2C2E] rounded-md text-xs">
                          <div className="flex items-center gap-2">
                            <FileIcon />
                            <span className="text-white font-medium">{src.name}</span>
                          </div>
                          <span className="text-[10px] uppercase font-mono text-[#8E8E93]">{src.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white text-xs font-medium px-5 py-2.5 rounded-md transition-all"
                  >
                    Next: Syllabus & Scope →
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 2: SYLLABUS & SCOPE --- */}
            {activeStep === 2 && (
              <div className="bg-[#121214] border border-[#2C2C2E] rounded-lg p-6 space-y-6">
                <div>
                  <h2 className="text-base font-semibold text-white mb-1">Define Syllabus & Grade Level</h2>
                  <p className="text-xs text-[#8E8E93]">Specify class level (Class 9 and above) and exact chapters or topics included.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8E8E93] mb-2">Target Academic Grade</label>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-2.5 text-xs text-white focus:outline-none focus:border-[#48484A]"
                    >
                      <option value="Class 9">Class 9 (High School Baseline)</option>
                      <option value="Class 10">Class 10 (Secondary Board Standard)</option>
                      <option value="Class 11">Class 11 (Senior Secondary Focus)</option>
                      <option value="Class 12">Class 12 (Advanced Board Standard)</option>
                      <option value="Undergraduate">Undergraduate / College</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#8E8E93] mb-2">Syllabus Scope & Chapter Specifications</label>
                    <textarea
                      rows={5}
                      value={syllabusText}
                      onChange={(e) => setSyllabusText(e.target.value)}
                      placeholder="e.g. Chapter 4: Chemical Bonding, Chapter 5: Thermodynamics (Exclude Carnot Cycle)..."
                      className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-3 text-xs text-white placeholder-[#636366] focus:outline-none focus:border-[#48484A]"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="bg-[#0A0A0C] hover:bg-[#1C1C1E] border border-[#2C2C2E] text-[#8E8E93] text-xs font-medium px-4 py-2 rounded-md transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white text-xs font-medium px-5 py-2.5 rounded-md transition-all"
                  >
                    Next: Exam Pattern Format →
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 3: EXAM PATTERN --- */}
            {activeStep === 3 && (
              <div className="bg-[#121214] border border-[#2C2C2E] rounded-lg p-6 space-y-6">
                <div>
                  <h2 className="text-base font-semibold text-white mb-1">Upload Question Paper Format / Previous Paper</h2>
                  <p className="text-xs text-[#8E8E93]">MatrAIx will extract section structure, mark distribution, and formatting layout from your template.</p>
                </div>

                <div className="border-2 border-dashed border-[#2C2C2E] rounded-lg p-8 text-center bg-[#0A0A0C]/50">
                  <div className="flex justify-center mb-3 text-[#8E8E93]"><FileIcon /></div>
                  <p className="text-xs font-medium text-white mb-1">Upload Sample / Past Exam Paper PDF or Image</p>
                  <p className="text-[11px] text-[#636366]">Extracts Section A (MCQs), Section B (Short Answer), Section C (Long Form)</p>
                  <input
                    type="file"
                    onChange={(e) => setPatternFile(e.target.files?.[0]?.name || 'Past_Paper_2025.pdf')}
                    className="mt-4 text-xs text-[#8E8E93] file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-[#1C1C1E] file:text-white hover:file:bg-[#2C2C2E]"
                  />
                </div>

                {patternFile && (
                  <div className="p-3 bg-[#0A0A0C] border border-[#2C2C2E] rounded-md flex items-center justify-between text-xs">
                    <span className="text-white font-medium">Selected Format: {patternFile}</span>
                    <span className="text-emerald-400 text-[11px] font-mono">Format Schema Verified</span>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="bg-[#0A0A0C] hover:bg-[#1C1C1E] border border-[#2C2C2E] text-[#8E8E93] text-xs font-medium px-4 py-2 rounded-md transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white text-xs font-medium px-5 py-2.5 rounded-md transition-all"
                  >
                    Next: Teacher Psychology (Optional) →
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 4: TEACHER BEHAVIOR (OPTIONAL) --- */}
            {activeStep === 4 && (
              <div className="bg-[#121214] border border-[#2C2C2E] rounded-lg p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-white">Teacher Psychology & Behavior Profile</h2>
                    <span className="text-[10px] font-mono uppercase bg-[#1C1C1E] border border-[#2C2C2E] text-[#8E8E93] px-2 py-0.5 rounded-md">Optional</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] mt-1">If students know the teacher's habits (e.g. strictness, favorite chapters, tricky framing), input details here.</p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8E8E93] mb-2">Behavior & Assessment Tendencies</label>
                  <textarea
                    rows={4}
                    value={teacherBehavior}
                    onChange={(e) => setTeacherBehavior(e.target.value)}
                    placeholder="e.g. Very strict with numerical derivations, prefers conceptual questions from end-of-chapter exercises, heavily tests diagram labels..."
                    className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-3 text-xs text-white placeholder-[#636366] focus:outline-none focus:border-[#48484A]"
                  />
                </div>

                <div className="p-4 bg-[#0A0A0C] border border-[#2C2C2E] rounded-md space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-medium">
                    <ShieldAlertIcon />
                    <span>Syllabus Safety Guardrail Active</span>
                  </div>
                  <p className="text-[11px] text-[#8E8E93] leading-relaxed">
                    Teacher persona influences question framing, strictness, and weightage—but cannot force questions outside the verified syllabus.
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="bg-[#0A0A0C] hover:bg-[#1C1C1E] border border-[#2C2C2E] text-[#8E8E93] text-xs font-medium px-4 py-2 rounded-md transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="bg-[#2C2C2E] hover:bg-[#3A3A3C] border border-[#48484A] text-white text-xs font-semibold px-6 py-2.5 rounded-md transition-all flex items-center gap-2"
                  >
                    Generate Question Paper PDF
                  </button>
                </div>
              </div>
            )}

            {/* --- STEP 5: GENERATED OUTPUT VIEW --- */}
            {activeStep === 5 && (
              <div className="bg-[#121214] border border-[#2C2C2E] rounded-lg p-6 space-y-6">
                {isGenerating ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-8 h-8 border-2 border-[#2C2C2E] border-t-white rounded-md animate-spin mx-auto" />
                    <p className="text-xs text-white font-medium">MatrAIx-Persona-8B Comparing Documents & Verifying Guardrails...</p>
                    <p className="text-[11px] text-[#636366]">Evaluating question importance probabilities & mark distribution schemas</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Probability Badge & Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-[#0A0A0C] border border-[#2C2C2E] rounded-md">
                      <div>
                        <h3 className="text-sm font-semibold text-white">{selectedClass} Sample Question Paper</h3>
                        <p className="text-xs text-[#8E8E93]">Synthesized via MatrAIx Persona Engine & NVIDIA NIM API</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="bg-[#1C1C1E] border border-[#2C2C2E] px-3 py-1.5 rounded-md text-right">
                          <p className="text-[10px] text-[#8E8E93] uppercase font-mono">Exam Probability Match</p>
                          <p className="text-sm font-bold text-emerald-400 font-mono">89.4% Match Rate</p>
                        </div>

                        <button className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 transition-all">
                          <DownloadIcon /> Download PDF
                        </button>
                      </div>
                    </div>

                    {/* PDF Mock Preview */}
                    <div className="bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-6 font-serif text-xs space-y-4 text-[#D1D1D6] max-h-[400px] overflow-y-auto">
                      <div className="text-center border-b border-[#2C2C2E] pb-4 space-y-1">
                        <h4 className="font-bold text-sm text-white uppercase tracking-wider">MODEL EXAMINATION PAPER 2026</h4>
                        <p className="text-[11px] text-[#8E8E93]">Grade: {selectedClass} | Maximum Marks: 80 | Time: 3 Hours</p>
                      </div>

                      <div className="space-y-3 font-sans text-xs">
                        <p className="font-semibold text-white">SECTION A: Conceptual MCQs (10 Marks)</p>
                        <p className="pl-3 text-[#A1A1A6]">1. Which of the following statements correctly describes thermodynamic equilibrium? [1 Mark]</p>
                        <p className="pl-3 text-[#A1A1A6]">2. Identify the oxidation state change in the given redox system. [1 Mark]</p>

                        <p className="font-semibold text-white pt-2">SECTION B: Short Answer Questions (30 Marks)</p>
                        <p className="pl-3 text-[#A1A1A6]">3. Derive the relationship between pressure and volume under adiabatic expansion. [3 Marks]</p>
                        <p className="pl-3 text-[#A1A1A6]">4. Explain why transition metals exhibit variable oxidation states with relevant examples. [3 Marks]</p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <button
                        onClick={() => setActiveStep(1)}
                        className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white text-xs font-medium px-4 py-2 rounded-md transition-all"
                      >
                        ← Start New Paper Session
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>

          {/* Footer Legal Terms & Disclaimers */}
          <footer className="border-t border-[#2C2C2E] bg-[#121214] py-6 px-6 mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#636366]">
              <div className="flex items-center gap-4">
                <button className="hover:text-[#8E8E93]">Privacy Policy</button>
                <span>•</span>
                <button className="hover:text-[#8E8E93]">Terms & Conditions</button>
                <span>•</span>
                <button className="hover:text-[#8E8E93]">Exam Warning & Disclaimers</button>
              </div>
              <p>© 2026 MatrAIx Persona Systems. Educational Revision Utility.</p>
            </div>
          </footer>
        </div>
      )}

      {/* --- CORNER SLIDING SESSION DRAWER --- */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs bg-[#121214] border-l border-[#2C2C2E] h-full flex flex-col z-10">
            <div className="p-4 border-b border-[#2C2C2E] flex items-center justify-between">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">User Sessions & History</span>
              <button onClick={() => setDrawerOpen(false)} className="text-[#8E8E93] hover:text-white">
                <CloseIcon />
              </button>
            </div>

            {/* Sessions List */}
            <div className="flex-1 p-4 space-y-2 overflow-y-auto">
              <div className="p-3 bg-[#1C1C1E] border border-[#2C2C2E] rounded-md text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Class 10 Chemistry</span>
                  <span className="text-[10px] text-emerald-400 font-mono">89% Match</span>
                </div>
                <p className="text-[10px] text-[#636366]">Created 10 mins ago • 80 Marks</p>
              </div>
            </div>

            {/* Bottom User Info Profile */}
            <div className="p-4 border-t border-[#2C2C2E] bg-[#0A0A0C] space-y-2">
              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2">
                  <UserIcon />
                  <span className="font-medium truncate max-w-[140px]">{userSession?.name}</span>
                </div>
                <button onClick={() => setSettingsOpen(true)} className="p-1.5 text-[#8E8E93] hover:text-white bg-[#1C1C1E] border border-[#2C2C2E] rounded-md">
                  <SettingsIcon />
                </button>
              </div>

              <button
                onClick={handleSignOut}
                className="w-full bg-[#1C1C1E] hover:bg-rose-950/30 hover:border-rose-900 border border-[#2C2C2E] text-rose-400 text-xs py-2 rounded-md transition-all flex items-center justify-center gap-2"
              >
                <LogOutIcon /> Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- SETTINGS MODAL (NVIDIA NIM / AI CONFIG) --- */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSettingsOpen(false)} />
          <div className="relative w-full max-w-md bg-[#121214] border border-[#2C2C2E] rounded-lg p-6 space-y-6 z-10">
            <div className="flex items-center justify-between border-b border-[#2C2C2E] pb-3">
              <h3 className="text-sm font-semibold text-white">AI Engine Settings</h3>
              <button onClick={() => setSettingsOpen(false)} className="text-[#8E8E93] hover:text-white">
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#8E8E93] mb-1">API Base URL (OpenAI Spec)</label>
                <input
                  type="text"
                  value={aiConfig.baseUrl}
                  onChange={(e) => setAiConfig({ ...aiConfig, baseUrl: e.target.value })}
                  className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-2 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#8E8E93] mb-1">NVIDIA NIM / API Key</label>
                <input
                  type="password"
                  value={aiConfig.apiKey}
                  onChange={(e) => setAiConfig({ ...aiConfig, apiKey: e.target.value })}
                  placeholder="nvapi-..."
                  className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-2 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#8E8E93] mb-1">Model Name</label>
                <input
                  type="text"
                  value={aiConfig.model}
                  onChange={(e) => setAiConfig({ ...aiConfig, model: e.target.value })}
                  className="w-full bg-[#0A0A0C] border border-[#2C2C2E] rounded-md p-2 text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSettingsOpen(false)}
                className="bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] text-white text-xs px-4 py-2 rounded-md transition-all"
              >
                Save to Cache
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
