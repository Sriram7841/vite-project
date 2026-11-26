import React, { useState } from "react";

const featuredProjects = [
  {
    title: "NeuroReport: Brain MRI Report Generation with 3D ViT & MedGemma LoRA",
    domain: "Medical Imaging · Vision-Language Models · Generative AI",
    github: "https://github.com/Sriram7841/Brain-MRI",
    stack: ["Python", "PyTorch", "3D ViT", "MedGemma-4B", "LoRA/PEFT", "Hugging Face Datasets", "Django", "SQLite", "NIfTI", "DICOM"],
    points: [
      "End-to-end radiology report generator on BraTS 2020 (208 patients, four MRI modalities: T1, T1ce, T2, FLAIR), converting each patient into a 4 × 10 × 224 × 224 volume.",
      "Designed a 3D ViT encoder, MLP projector and cross-attention decoder, with an optional MedGemma-4B LoRA fine-tuning path on GPU; kept the checkpoint with the lowest validation loss.",
      "Evaluated reports with ROUGE-1/2/L and BLEU-4 per patient, plus a doctor-approval workflow because lexical metrics miss clinically serious errors such as the wrong hemisphere.",
      "Django app covering Hugging Face/Parquet import with patient-level leakage checks, preprocessing, PCA feature extraction, training with live loss curves and evaluation; accepts NIfTI, DICOM or PNG scans. Covered by end-to-end automated tests.",
    ],
  },
  {
    title: "GraphRAG Scientific Research Assistant",
    domain: "GraphRAG · LLMs · Knowledge Graphs · NLP",
    github: "https://github.com/Sriram7841/Scientific-RAG",
    stack: ["Python", "Django REST Framework", "FAISS", "NetworkX", "Sentence-Transformers", "Mistral-7B-Instruct", "Scikit-learn", "JWT"],
    points: [
      "GraphRAG question answering over 206,489 arXiv papers in 25 categories, combining FAISS cosine retrieval (all-MiniLM-L6-v2, 400-word chunks, 50-word overlap) with a NetworkX knowledge graph of models, methods and domains.",
      "TF-IDF (30K features, unigrams + bigrams) LinearSVC and Complement Naive Bayes classifiers on a stratified 80/20 split route each query to its research category.",
      "Grounded answers from Mistral-7B-Instruct via the Hugging Face Inference API, with retries, a Flan-T5 fallback, an extractive fallback and response caching.",
      "JWT-secured REST APIs for chat and classification, plus an admin dashboard for EDA, background training jobs and knowledge-graph visualization, with chat history and PDF export.",
    ],
  },
  {
    title: "MediVision: Multi-Modal Disease Prediction from Symptoms & Medical Images",
    domain: "Healthcare AI · Semantic Search · Computer Vision",
    github: "https://github.com/Sriram7841/Medivision",
    stack: ["Python", "Flask", "FAISS", "Sentence-Transformers", "Scikit-learn", "XGBoost", "OpenCV", "scikit-image"],
    points: [
      "Symptom-to-disease prediction using sentence-transformer embeddings and FAISS nearest-neighbour search over the Symptom2Disease dataset.",
      "Image-based screening across five body systems (brain, eye, lung, bone, skin) using HOG features and Random Forest; compared Decision Tree, Random Forest and XGBoost on accuracy, precision, recall and F1.",
      "Flask web app with user and admin dashboards, prediction history, model retraining and performance reporting.",
    ],
  },
  {
    title: "Liver Disease Prediction Using Neural Networks",
    domain: "Deep Learning · Healthcare AI · Web Apps",
    github: "https://github.com/Sriram7841/liver-disease-django",
    stack: ["Python", "TensorFlow", "Keras", "Django"],
    points: [
      "Trained a Keras neural network classifier for liver disease and served it through a Django web app with user registration, login and a prediction interface.",
    ],
  },
];

export default function Projects() {
  const allProjects = [
    // ==== 100 PROJECTS ====
     { title: "Intelligent Recognition of Multimodal Human Activities for Personal Healthcare", domain: "ML" },
    { title: "Blockchain-Powered Charity NFT Auctions", domain: "BC" },
    { title: "Cybersecurity: Data Protection Using Hybrid Encryption & Steganography", domain: "CS" },
    { title: "SEC-Health: A Blockchain-Based Protocol for Safeguarding Health Records", domain: "BC" },
    { title: "Student Portal", domain: "Django" },
    { title: "Predict Blood Group Using Fingerprint Map Reading", domain: "DL" },
    { title: "Customer Churn Prediction in Telecom Industry", domain: "ML" },
    { title: "Blockchain Based Crime Evidence System", domain: "BC" },
    { title: "DeepDiabetic – Eye Disease Detection Using DNN", domain: "DNN" },
    { title: "Deep Learning for Edge Computing in Smart Cities", domain: "DL" },

    { title: "Graph Neural Networks for Social Network Analysis", domain: "GNN" },
    { title: "Person Re-Identification for Public Safety in Railways", domain: "DL" },
    { title: "Myocardial Infarction Detection Using ECG Features and ML", domain: "CS" },
    { title: "CryptoProctor: Blockchain Proctored Exam System", domain: "BC" },
    { title: "DeepFake Audio Detection", domain: "DL" },
    { title: "PADAAV: Blockchain-Based Parking Price Prediction", domain: "BC" },
    { title: "Document Retrieval System Using RAG", domain: "NLP" },
    { title: "Explainable AI for Intrusion Detection (LIME & SHAP)", domain: "AI" },
    { title: "Prediction of Hypertension Using ML", domain: "ML" },
    { title: "GreenLand: Secure Blockchain Land Registration", domain: "BC" },

    { title: "Content-Based Image Retrieval with Deep Feature Fusion", domain: "DL" },
    { title: "RANK: AI for Detecting Persistent Enterprise Attacks", domain: "AI" },
    { title: "ML in OCD Medication Predictions", domain: "ML" },
    { title: "Open-Set Recognition in DDoS Detection", domain: "CS" },
    { title: "Blockchain + ML Privacy-Preserved Fraud Detection", domain: "BC" },
    { title: "Enhancing Data Transmission Security Using ML", domain: "CS" },
    { title: "AgriGenius: Smart Farming App", domain: "AI" },
    { title: "Pharma: AI-Driven Drug Repurposing Platform", domain: "AI" },
    { title: "Improving Open-Source Software Security Using Fuzzing", domain: "ML" },
    { title: "Travel Plan Itinerary Generator", domain: "Django" },

    { title: "News Recommendation Using Graph Convolution Networks", domain: "NLP" },
    { title: "Hospital Management System", domain: "Django" },
    { title: "Decentralized Research Funding Platform", domain: "BC" },
    { title: "Vulnerability Assessment & Penetration Testing", domain: "CS" },
    { title: "Alumni Association Portal", domain: "Django" },
    { title: "Blockchain-Based Attendance Cost Optimization", domain: "BC" },
    { title: "Demand Forecasting Using ML", domain: "ML" },
    { title: "Federated Learning-Based 3D Medical Image Compression", domain: "FL" },
    { title: "DL Model for House Price Prediction with Attention Networks", domain: "DL" },
    { title: "Hybrid ML Model for Botnet Detection", domain: "ML" },

    { title: "DDoS Attack Detection & Mitigation", domain: "CS" },
    { title: "Online Vehicle Parking Reservation System", domain: "Django" },
    { title: "Secure File Storage with Role-Based Access", domain: "Django" },
    { title: "Multilingual Story Generation & Speech System", domain: "AI" },
    { title: "Automated Video Generator", domain: "DL" },
    { title: "Blockchain-Based Water Management Systems", domain: "BC" },
    { title: "Blockchain-Based ZTNA System", domain: "BC" },
    { title: "Blockchain E-Voting System with Aadhaar Verification", domain: "BC" },
    { title: "Alzheimer Detection Using Cognitive Features & ML", domain: "DL" },
    { title: "BRSR Reporting for Department of Posts", domain: "ML" },

    { title: "Personalized E-Learning Course Recommendation", domain: "AI" },
    { title: "Criminal Evidence Management Using Blockchain", domain: "BC" },
    { title: "Customer Behaviour Analysis Using AI", domain: "AI" },
    { title: "Fake News Detection Using Optimized MSVM", domain: "NLP" },
    { title: "AI-Based Financial Identification System", domain: "AI" },
    { title: "Application-Aware Firewall", domain: "DL" },
    { title: "Hybrid AI for Stock Market (Transformers + QINN)", domain: "AI" },
    { title: "Anonymous Identity-Based Network Authentication", domain: "Networking" },
    { title: "AI-Based Paper Evaluation System", domain: "AI" },
    { title: "Quantum-Resistant Blockchain for Health Data", domain: "BC" },

    { title: "Sanskrit Word Recognition Using DL", domain: "DL" },
    { title: "Decentralized Secure Examination Platform", domain: "DL" },
    { title: "SMS Spam Detection & Malicious URL Classification", domain: "ML" },
    { title: "Deep Learning-Based Spectrum Sensing", domain: "DL" },
    { title: "Multi-Modal Speech Transformer Decoder", domain: "ML" },
    { title: "Stock Market Prediction Using Multi-Source MIL", domain: "ML" },
    { title: "Explainable AI for Military Supply Chains Using SAR", domain: "AI" },
    { title: "SymptoTrackAI – Hybrid RAG Chatbot", domain: "AI" },
    { title: "Telugu Text Summarization using Extractive Methods", domain: "NLP" },
    { title: "Water Scarcity Management System", domain: "ML" },

    { title: "Smart Campus Placement System", domain: "Django" },
    { title: "Protein Family Classification Using DL", domain: "DL" },
    { title: "AI & ML-Based Pet Feeding System", domain: "AI" },
    { title: "Detecting AI-Generated Images Using CNN + XAI", domain: "DL" },
    { title: "Colorectal Cancer Detection Using Pre-Trained Models", domain: "ML" },
    { title: "AI-Based Personal Finance Manager", domain: "AI" },
    { title: "Homomorphic Encryption-Based Video Copy Detection", domain: "DL" },
    { title: "Women Safety System Using ML", domain: "ML" },
    { title: "Threat Intelligence Sharing Platform (MISP)", domain: "ML" },
    { title: "Startup Success Rate Prediction Using ML", domain: "ML" },

    { title: "Intelligent Attack Detection in ROS Systems", domain: "ML" },
    { title: "SAR Image Colorization Using DL", domain: "DL" },
    { title: "AI-Based Disease Outbreak Prediction", domain: "AI" },
    { title: "Decentralized Cloud Storage with Deduplication", domain: "BC" },
    { title: "Human Face Generation Using DCGAN", domain: "DL" },
    { title: "Chatbot Emotion Recognition & Music Recommendation", domain: "DL" },
    { title: "Real-Time Fraud Detection Using Kafka & ML", domain: "ML" },
    { title: "Web Pattern Navigation Profiling", domain: "Django" },
    { title: "RIFD-Net: Robust Image Forgery Detection", domain: "DL" },
    { title: "SignNet II — Two-Way Sign Language Transformer", domain: "NLP" },

    { title: "AI-Powered Fitness Coach", domain: "AI" },
    { title: "Cricket Shot Captioning System", domain: "ML" },
    { title: "Banana Leaf Disease Detection Using CV", domain: "DL" },
    { title: "Incident Response Automation", domain: "Networking" },
    { title: "AI Blood Group Prediction Using Image Processing", domain: "AI" },
    { title: "ML-Based Epilepsy Image Diagnosis Software", domain: "ML" },
    { title: "Scraping Google Maps Data Using Python", domain: "ML" },
    { title: "Online Fraud Payment Detection Using Balanced ML", domain: "ML" },
    { title: "Spondylitis Detection Using DL", domain: "DL" },
    { title: "Multi-Label Image Classification Using SGD", domain: "DL" }
  ];

  // Extract unique domains dynamically
  const domains = ["All", ...new Set(allProjects.map((p) => p.domain))];

  // States
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Filter logic
  const filteredProjects = allProjects.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.domain.toLowerCase().includes(search.toLowerCase());

    const matchDomain = selectedDomain === "All" || p.domain === selectedDomain;
    return matchSearch && matchDomain;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <section id="projects" className="section section--light">
      <div className="section-header">
        <p className="eyebrow">Portfolio</p>
        <h2 className="section-title">
          Key <span>Projects</span>
        </h2>
        <p className="section-desc">
          Production-focused AI systems — from GraphRAG assistants to brain MRI report generation
        </p>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((fp, i) => (
          <article className="featured-card" key={fp.title}>
            <span className="featured-num">0{i + 1}</span>
            <h3 className="featured-title">{fp.title}</h3>
            <p className="featured-domain">{fp.domain}</p>
            <ul className="featured-list">
              {fp.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
            <div className="featured-stack">
              {fp.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              className="featured-link"
              href={fp.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>

      <h3 className="catalog-title">More Projects I've Built</h3>

      {/* 🔍 SEARCH BAR */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search projects by title or domain..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="search-bar"
        />
      </div>

      {/* 🧪 DOMAIN FILTER CHIPS */}
      <div className="domain-filter-container">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => {
              setSelectedDomain(d);
              setCurrentPage(1);
            }}
            className={`domain-chip ${
              selectedDomain === d ? "chip-active" : "chip-inactive"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {currentProjects.map((p, index) => (
          <div key={index} className="project-card project-hover">
            <h3 className="project-card-title">{p.title}</h3>
            <p className="project-card-desc">
              <span className="project-domain">{p.domain}</span>
            </p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination-controls">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>

        <span className="pagination-info">
          Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
        </span>

        <button
          onClick={goNext}
          disabled={currentPage >= totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </section>
  );
}
