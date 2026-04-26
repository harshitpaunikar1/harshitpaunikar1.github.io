/* ============================================================
   BLOG COMMON — Shared JS for all case-study pages.
   Reads a JSON config from the page, injects consistent
   header, metadata, TOC, skills, related articles, and footer.
   ============================================================ */

(function () {
  'use strict';

  /* ── PROJECT CATALOG ──
     Central metadata for all 38 case studies.
     Each blog page only needs { "slug": "..." } in its config.
  ================================================================ */
  var CATALOG = {
    "adaptive-yard-routing": {
      title: "Adaptive Yard Routing System",
      summary: "Dynamic routing algorithm for yard operations, optimizing trailer movement and dock assignment under real-time constraints.",
      category: "Logistics / Operations",
      categorySlug: "logistics",
      domain: "Logistics",
      type: "Systems Analysis",
      bestFor: ["Backend roles", "Logistics roles", "Operations roles"],
      skills: ["Routing Algorithms", "Optimization", "Python", "Backend APIs", "Logistics Domain"],
      problem: "Yard operations required dynamic routing to handle unpredictable trailer arrivals and dock availability.",
      systemBuilt: "An adaptive routing system that assigns trailers to docks based on real-time yard state, priority rules, and constraint satisfaction.",
      technicalChallenge: "Balancing routing optimality with real-time responsiveness under constantly changing yard conditions.",
      outcome: "Production routing system handling real-time dock assignment with constraint-aware optimization.",
      whyMatters: "Demonstrates ability to build constraint-driven optimization systems for physical operations — a skill valued in logistics, supply chain, and operations engineering roles.",
      related: ["yard-management-platform", "enterprise-yms-integration", "android-edge-vision-logistics"]
    },
    "android-edge-vision-logistics": {
      title: "Android Edge Vision for Logistics",
      summary: "On-device computer vision for logistics asset identification, running inference on Android hardware in field conditions.",
      category: "Computer Vision / Edge AI",
      categorySlug: "cv",
      domain: "Logistics",
      type: "Build Breakdown",
      bestFor: ["CV roles", "Mobile roles", "Edge AI roles"],
      skills: ["Android", "Computer Vision", "TensorFlow Lite", "Edge Inference", "Mobile Development", "Camera Integration"],
      problem: "Field logistics operators needed real-time asset identification without reliable network connectivity.",
      systemBuilt: "An Android application performing on-device computer vision inference for logistics asset recognition in field environments.",
      technicalChallenge: "Running performant CV inference on constrained Android hardware while handling camera variability and outdoor lighting.",
      outcome: "Deployed on-device vision system enabling field operations without network dependency.",
      whyMatters: "Shows end-to-end mobile AI deployment — from model optimization to camera integration to field-ready UX — relevant for computer vision and mobile engineering roles.",
      related: ["edge-ai-container-trailer-detection", "windows-offline-ai-app", "realtime-web-object-detection"]
    },
    "brand-tuned-support-assistant": {
      title: "Brand-Tuned Support Assistant",
      summary: "LLM-powered support assistant calibrated for brand voice consistency across real customer interactions.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "E-commerce / Support",
      type: "Build Breakdown",
      bestFor: ["AI/ML roles", "LLM roles", "Full-Stack roles"],
      skills: ["LLM Integration", "Prompt Engineering", "Brand Voice Tuning", "RAG", "Customer Support Automation"],
      problem: "Customer support responses lacked brand voice consistency and required manual oversight for every interaction.",
      systemBuilt: "A support assistant using LLM with brand-specific prompt tuning and retrieval to generate consistent, on-brand responses.",
      technicalChallenge: "Maintaining brand voice fidelity while handling diverse customer queries without hallucinating policy details.",
      outcome: "Production support assistant delivering brand-consistent responses with retrieval-grounded accuracy.",
      whyMatters: "Demonstrates practical LLM deployment with brand constraints — a growing requirement for customer-facing AI systems in e-commerce and support operations.",
      related: ["support-inbox-copilot", "llm-sales-assistant", "onprem-comment-intelligence-engine"]
    },
    "carsharing-availability-eda": {
      title: "Car-Sharing Availability EDA",
      summary: "Exploratory data analysis of car-sharing availability patterns, identifying demand-supply gaps and usage optimization opportunities.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Mobility / Transportation",
      type: "Data Case Study",
      bestFor: ["Data roles", "Analytics roles", "ML roles"],
      skills: ["EDA", "Python", "Pandas", "Data Visualization", "Statistical Analysis", "Geospatial Analysis"],
      problem: "Car-sharing operators lacked visibility into availability patterns, leading to suboptimal fleet utilization.",
      systemBuilt: "A comprehensive exploratory analysis pipeline identifying availability gaps, demand hotspots, and temporal usage patterns.",
      technicalChallenge: "Handling messy real-world mobility data with geographic, temporal, and categorical dimensions for actionable insights.",
      outcome: "Actionable analysis revealing usage patterns and optimization opportunities for fleet management.",
      whyMatters: "Shows rigorous data analysis methodology on real-world mobility data — the kind of structured EDA that informs product and operations decisions.",
      related: ["npa-risk-prediction", "data-driven-aid-allocation-model", "local-business-profit-planning"]
    },
    "data-driven-aid-allocation-model": {
      title: "Data-Driven Aid Allocation Model",
      summary: "Predictive model for humanitarian aid distribution using historical allocation data and need indicators.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Financial Analysis",
      type: "Data Case Study",
      bestFor: ["ML roles", "Data Science roles", "Social Impact roles"],
      skills: ["ML Modeling", "Feature Engineering", "Classification", "Python", "Scikit-learn", "Impact Analysis"],
      problem: "Aid allocation decisions were manual and inconsistent, lacking data-driven prioritization of recipients.",
      systemBuilt: "A predictive model scoring aid allocation priorities using historical data, need indicators, and outcome features.",
      technicalChallenge: "Building fair, interpretable models on limited and potentially biased humanitarian datasets.",
      outcome: "Data-driven allocation framework improving consistency and transparency of aid distribution decisions.",
      whyMatters: "Demonstrates responsible ML modeling on sensitive social data — balancing predictive accuracy with fairness and interpretability.",
      related: ["npa-risk-prediction", "carsharing-availability-eda", "local-business-profit-planning"]
    },
    "edge-ai-container-trailer-detection": {
      title: "Edge AI Container & Trailer Detection",
      summary: "Computer vision system for detecting and classifying containers and trailers in logistics yards using edge-deployed models.",
      category: "Computer Vision / Edge AI",
      categorySlug: "cv",
      domain: "Logistics",
      type: "Architecture Review",
      bestFor: ["CV roles", "Edge AI roles", "ML Engineering roles"],
      skills: ["Object Detection", "YOLO", "Edge Deployment", "Model Optimization", "Computer Vision", "Logistics Domain"],
      problem: "Manual container and trailer identification in logistics yards was slow, error-prone, and couldn't scale.",
      systemBuilt: "An edge-deployed computer vision pipeline detecting and classifying containers and trailers from camera feeds in real-time.",
      technicalChallenge: "Achieving reliable detection accuracy in variable outdoor conditions while maintaining real-time inference on edge hardware.",
      outcome: "Production vision system handling real-time container and trailer detection in logistics yard environments.",
      whyMatters: "Shows full computer vision deployment lifecycle — from model training through edge optimization to production monitoring — in a demanding physical environment.",
      related: ["android-edge-vision-logistics", "onprem-vision-inference-pipeline", "windows-offline-ai-app"]
    },
    "edge-ai-runtime-evaluation": {
      title: "Edge AI Runtime Evaluation",
      summary: "Systematic benchmarking of edge AI inference runtimes across ONNX, TFLite, and native frameworks on target hardware.",
      category: "DevOps / Infrastructure",
      categorySlug: "devops",
      domain: "Logistics / Edge AI",
      type: "Systems Analysis",
      bestFor: ["MLOps roles", "Edge AI roles", "Infrastructure roles"],
      skills: ["ONNX Runtime", "TFLite", "Benchmarking", "Performance Profiling", "Edge Hardware", "Model Optimization"],
      problem: "No systematic comparison existed for inference runtime performance across edge hardware targets.",
      systemBuilt: "A benchmarking framework evaluating ONNX, TFLite, and native runtimes across latency, throughput, memory, and accuracy metrics.",
      technicalChallenge: "Creating reproducible, fair comparisons across runtimes with different optimization paths and hardware constraints.",
      outcome: "Quantified runtime comparison informing deployment decisions for edge AI systems.",
      whyMatters: "Demonstrates systematic engineering evaluation methodology — the kind of disciplined analysis that prevents costly deployment mistakes in production ML systems.",
      related: ["windows-offline-ai-app", "onprem-vision-inference-pipeline", "android-edge-vision-logistics"]
    },
    "engagement-triggered-followup-automation": {
      title: "Engagement-Triggered Follow-Up Automation",
      summary: "Marketing automation system triggering personalized follow-ups based on engagement signals and behavioral scoring.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Marketing / AdTech",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "Marketing Tech roles", "Backend roles"],
      skills: ["Event Processing", "Automation", "Backend APIs", "Behavioral Scoring", "Marketing Tech", "Workflow Design"],
      problem: "Marketing follow-ups were generic and poorly timed, missing engagement windows for high-intent prospects.",
      systemBuilt: "An event-driven automation system that scores engagement signals and triggers personalized follow-ups at optimal timing.",
      technicalChallenge: "Processing real-time engagement events, computing behavioral scores, and triggering actions within engagement windows.",
      outcome: "Production automation pipeline improving follow-up relevance and timing based on behavioral signals.",
      whyMatters: "Shows event-driven architecture applied to business outcomes — combining backend engineering with marketing domain knowledge for measurable impact.",
      related: ["realtime-marketing-decision-engine", "unified-analytics-lead-growth", "lead-management-product-launch"]
    },
    "enterprise-yms-integration": {
      title: "Enterprise Yard Management System Integration",
      summary: "Integration layer connecting enterprise YMS with logistics operations through real-time data sync and workflow orchestration.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Logistics",
      type: "Architecture Review",
      bestFor: ["Backend roles", "Integration roles", "Enterprise roles"],
      skills: ["System Integration", "REST APIs", "Enterprise Software", "Real-Time Sync", "Data Mapping", "Workflow Orchestration"],
      problem: "Enterprise YMS operated in isolation from day-to-day logistics operations, creating data silos and manual handoffs.",
      systemBuilt: "An integration layer syncing enterprise YMS data with operational systems through event-driven APIs and workflow orchestration.",
      technicalChallenge: "Handling schema mismatches, sync conflicts, and real-time consistency across enterprise and operational systems.",
      outcome: "Production integration eliminating data silos between enterprise YMS and logistics operations.",
      whyMatters: "Demonstrates enterprise integration engineering — handling the complexity of connecting legacy systems with modern operations, a critical skill in logistics and supply chain technology.",
      related: ["yard-management-platform", "adaptive-yard-routing", "nocode-logistics-form-builder"]
    },
    "lead-management-product-launch": {
      title: "Lead Management Product Launch",
      summary: "End-to-end lead management platform from product conception to launch, with pipeline tracking, scoring, and conversion analytics.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Project Management",
      type: "Product Case Study",
      bestFor: ["Product roles", "Full-Stack roles", "Growth roles"],
      skills: ["Product Execution", "Full-Stack Development", "CRM Design", "Analytics", "Launch Strategy", "Pipeline Management"],
      problem: "Lead management was fragmented across tools with no unified view of pipeline health or conversion performance.",
      systemBuilt: "A full-stack lead management platform with pipeline tracking, lead scoring, conversion analytics, and launch workflow.",
      technicalChallenge: "Building a cohesive product experience while integrating scoring models, analytics, and workflow automation.",
      outcome: "Production platform providing unified lead management from capture through conversion.",
      whyMatters: "Shows product execution from zero to launch — combining technical implementation with product thinking, relevant for full-stack and product engineering roles.",
      related: ["unified-analytics-lead-growth", "engagement-triggered-followup-automation", "marketing-process-analytics-dashboard"]
    },
    "llm-sales-assistant": {
      title: "LLM Sales Assistant",
      summary: "LLM-powered sales assistant with product knowledge retrieval, objection handling, and contextual response generation.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "SalesTech",
      type: "Build Breakdown",
      bestFor: ["AI/ML roles", "LLM roles", "SalesTech roles"],
      skills: ["LLM Integration", "RAG", "Prompt Engineering", "FastAPI", "Sales Domain", "Knowledge Retrieval"],
      problem: "Sales teams spent excessive time searching product knowledge and crafting responses to common objections.",
      systemBuilt: "A retrieval-augmented LLM assistant that surfaces product knowledge, generates objection responses, and maintains conversation context.",
      technicalChallenge: "Ensuring factual accuracy in sales contexts where hallucinated features or pricing could create liability.",
      outcome: "Production sales assistant reducing response time while maintaining factual accuracy through retrieval grounding.",
      whyMatters: "Demonstrates practical RAG deployment in a business-critical context where accuracy directly impacts revenue and trust.",
      related: ["brand-tuned-support-assistant", "support-inbox-copilot", "retrieval-tool-use-assistant"]
    },
    "local-business-profit-planning": {
      title: "Local Business Profit Planning",
      summary: "Financial planning tool for local businesses combining revenue forecasting, cost modeling, and profit optimization scenarios.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Business Analysis",
      type: "Data Case Study",
      bestFor: ["Data roles", "Analytics roles", "Business Intelligence roles"],
      skills: ["Financial Modeling", "Forecasting", "Data Visualization", "Python", "Scenario Analysis", "Business Analytics"],
      problem: "Local businesses lacked accessible tools for data-driven profit planning and scenario analysis.",
      systemBuilt: "A financial planning tool with revenue forecasting, cost modeling, and interactive profit optimization scenarios.",
      technicalChallenge: "Building useful forecasting models with limited historical data typical of small businesses.",
      outcome: "Practical profit planning tool enabling data-driven financial decisions for local business operators.",
      whyMatters: "Shows ability to translate complex financial modeling into accessible tools — combining analytics depth with practical business value.",
      related: ["npa-risk-prediction", "data-driven-aid-allocation-model", "unified-analytics-lead-growth"]
    },
    "marketing-process-analytics-dashboard": {
      title: "Marketing Process Analytics Dashboard",
      summary: "Full-stack analytics dashboard providing marketing process visibility with campaign flow tracking, bottleneck identification, and conversion metrics.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Marketing / AdTech",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "Analytics roles", "Dashboard roles"],
      skills: ["Dashboard Design", "Analytics", "Full-Stack", "Data Visualization", "React", "API Design"],
      problem: "Marketing teams had no unified view of process performance, making bottleneck identification manual and delayed.",
      systemBuilt: "A full-stack analytics dashboard tracking marketing process flow, identifying bottlenecks, and surfacing conversion metrics.",
      technicalChallenge: "Aggregating data from multiple marketing systems into a real-time, actionable dashboard without excessive query latency.",
      outcome: "Production dashboard providing real-time marketing process visibility and bottleneck identification.",
      whyMatters: "Demonstrates full-stack dashboard engineering — from data aggregation to visualization to real-time updates — a core skill for analytics and platform roles.",
      related: ["realtime-sales-signal-dashboard", "unified-analytics-lead-growth", "realtime-marketing-decision-engine"]
    },
    "medical-evidence-qa-assistant": {
      title: "Medical Evidence Q&A Assistant",
      summary: "Safety-aware RAG architecture for medical evidence retrieval, citation-grounded answers, and refusal behavior.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "Healthcare / MedTech",
      type: "Architecture Review",
      bestFor: ["AI/ML roles", "RAG roles", "Backend roles"],
      skills: ["RAG Pipeline Design", "FastAPI", "Qdrant Vector Search", "Retrieval Ranking", "Refusal Logic", "Safety Boundary Design", "Citation-Grounded Generation"],
      problem: "Medical teams needed to query evidence from approved documents without risk of hallucinated or unsupported answers.",
      systemBuilt: "A citation-grounded medical evidence assistant that retrieves from approved documents, reranks evidence, constrains generation to retrieved context, and refuses unsafe requests.",
      technicalChallenge: "Ensuring answer generation stays within retrieved evidence boundaries with reliable refusal logic for unsupported queries.",
      outcome: "Production-ready medical QA system with retrieval discipline, refusal behavior, and citation-grounded answers.",
      whyMatters: "Medical AI demands higher retrieval discipline than typical search. This system demonstrates safety-constrained RAG with evidence-grounding and refusal boundaries — critical for regulated domains.",
      related: ["retrieval-tool-use-assistant", "private-search-research-assistant", "prompt-reliability-workflow", "support-inbox-copilot"]
    },
    "model-free-vertical-text-ocr": {
      title: "Model-Free Vertical Text OCR",
      summary: "OCR system for vertical text recognition without ML model dependency, using geometric analysis and rule-based character segmentation.",
      category: "Computer Vision / OCR",
      categorySlug: "cv",
      domain: "Logistics",
      type: "Build Breakdown",
      bestFor: ["CV roles", "Algorithm roles", "Backend roles"],
      skills: ["OCR", "Image Processing", "Algorithm Design", "Geometric Analysis", "Python", "Character Segmentation"],
      problem: "Standard OCR models failed on vertically-oriented text common in logistics labeling and signage.",
      systemBuilt: "A model-free OCR pipeline using geometric analysis and rule-based segmentation to read vertical text without ML dependencies.",
      technicalChallenge: "Achieving reliable character segmentation on vertical text with variable spacing, fonts, and image quality.",
      outcome: "Production OCR system reading vertical text with zero ML model dependency, reducing infrastructure requirements.",
      whyMatters: "Demonstrates algorithmic problem-solving without defaulting to ML — choosing the right tool for the constraint. Valued in environments where model deployment overhead is prohibitive.",
      related: ["android-edge-vision-logistics", "edge-ai-container-trailer-detection", "onprem-vision-inference-pipeline"]
    },
    "nocode-logistics-form-builder": {
      title: "No-Code Logistics Form Builder",
      summary: "No-code platform for building logistics data capture forms with validation rules, offline support, and workflow integration.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Logistics",
      type: "Product Case Study",
      bestFor: ["Full-Stack roles", "Product roles", "Logistics roles"],
      skills: ["No-Code Platform", "Form Builder", "Full-Stack", "Offline Support", "Workflow Integration", "UX Design"],
      problem: "Logistics teams depended on engineering for every new data capture form, creating bottlenecks and deployment delays.",
      systemBuilt: "A no-code form builder enabling logistics operators to create custom data capture forms with validation, offline capability, and workflow triggers.",
      technicalChallenge: "Building a flexible form engine that supports offline data capture, custom validation rules, and enterprise workflow integration.",
      outcome: "Production no-code platform reducing form creation from engineering sprints to operator self-service.",
      whyMatters: "Shows product thinking combined with technical execution — building internal tools that reduce engineering dependency and improve operational velocity.",
      related: ["offline-inspection-capture-platform", "yard-management-platform", "enterprise-yms-integration"]
    },
    "npa-risk-prediction": {
      title: "NPA Risk Prediction Model",
      summary: "ML model predicting Non-Performing Asset risk in banking portfolios using borrower features and repayment signals.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Banking",
      type: "Data Case Study",
      bestFor: ["ML roles", "Data Science roles", "FinTech roles"],
      skills: ["ML Modeling", "Classification", "Feature Engineering", "Risk Modeling", "Python", "Banking Domain"],
      problem: "Banks needed early warning signals for potential non-performing assets to manage portfolio risk proactively.",
      systemBuilt: "A classification model scoring NPA risk using borrower demographics, repayment history, and macroeconomic features.",
      technicalChallenge: "Handling class imbalance in NPA datasets while maintaining interpretability required by banking regulators.",
      outcome: "Risk prediction model enabling proactive portfolio management with interpretable scoring.",
      whyMatters: "Demonstrates regulated-domain ML — balancing predictive performance with interpretability and compliance requirements that banking and financial roles demand.",
      related: ["data-driven-aid-allocation-model", "carsharing-availability-eda", "local-business-profit-planning"]
    },
    "offline-inspection-capture-platform": {
      title: "Offline Inspection Capture Platform",
      summary: "Field inspection platform with offline-first data capture, photo documentation, and deferred sync for unreliable network environments.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Logistics",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "Mobile roles", "Logistics roles"],
      skills: ["Offline-First Architecture", "IndexedDB", "Service Workers", "Photo Capture", "Deferred Sync", "Field Operations"],
      problem: "Field inspections in logistics yards had no reliable network, making cloud-dependent tools unusable.",
      systemBuilt: "An offline-first inspection platform capturing structured data and photos locally, syncing when connectivity returns.",
      technicalChallenge: "Ensuring data integrity during offline capture and handling conflict resolution during deferred sync.",
      outcome: "Production inspection platform operating reliably in disconnected field environments.",
      whyMatters: "Demonstrates offline-first engineering — a critical capability for logistics, field operations, and any environment where network reliability cannot be assumed.",
      related: ["windows-offline-ai-app", "nocode-logistics-form-builder", "android-edge-vision-logistics"]
    },
    "onprem-comment-intelligence-engine": {
      title: "On-Prem Comment Intelligence Engine",
      summary: "On-premises NLP engine extracting sentiment, topics, and actionable insights from unstructured customer feedback.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "Marketing / AdTech",
      type: "Architecture Review",
      bestFor: ["NLP roles", "ML roles", "On-Prem roles"],
      skills: ["NLP", "Sentiment Analysis", "Topic Extraction", "On-Prem Deployment", "Text Classification", "Python"],
      problem: "Customer feedback data sat unanalyzed because cloud NLP services couldn't be used due to data residency requirements.",
      systemBuilt: "An on-premises NLP pipeline extracting sentiment, topics, and actionable signals from customer comments with zero cloud dependency.",
      technicalChallenge: "Achieving production NLP quality within on-premises compute constraints and without cloud API access.",
      outcome: "Production on-prem intelligence engine processing customer feedback with data residency compliance.",
      whyMatters: "Shows NLP deployment under infrastructure constraints — relevant for regulated industries where data cannot leave premises.",
      related: ["brand-tuned-support-assistant", "support-inbox-copilot", "llm-sales-assistant"]
    },
    "onprem-vision-inference-pipeline": {
      title: "On-Prem Vision Inference Pipeline",
      summary: "Production inference pipeline for computer vision models running on-premises with batch and real-time processing and monitoring.",
      category: "Computer Vision / Edge AI",
      categorySlug: "cv",
      domain: "Manufacturing",
      type: "Architecture Review",
      bestFor: ["MLOps roles", "CV roles", "Infrastructure roles"],
      skills: ["Inference Pipeline", "Computer Vision", "On-Prem Deployment", "GPU Management", "Monitoring", "Batch Processing"],
      problem: "Computer vision models needed reliable on-premises inference with monitoring, scaling, and failure recovery.",
      systemBuilt: "A production inference pipeline handling batch and real-time CV workloads on on-premises GPU infrastructure with health monitoring.",
      technicalChallenge: "Managing GPU utilization, inference queue prioritization, and failure recovery without cloud orchestration services.",
      outcome: "Production on-prem inference pipeline serving CV models with monitoring and reliability guarantees.",
      whyMatters: "Demonstrates production ML infrastructure — the deployment and operations layer that determines whether models actually deliver value in production.",
      related: ["edge-ai-container-trailer-detection", "android-edge-vision-logistics", "edge-ai-runtime-evaluation"]
    },
    "private-search-research-assistant": {
      title: "Private Search Research Assistant",
      summary: "Source-backed research assistant with search aggregation, deduplication, and structured summary workflow for privacy-conscious research.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "Research / Search",
      type: "Build Breakdown",
      bestFor: ["AI/ML roles", "RAG roles", "Search roles"],
      skills: ["Search Aggregation", "RAG", "Deduplication", "Summary Generation", "Source Attribution", "Privacy Design"],
      problem: "Research workflows required querying multiple sources with deduplication and traceable citations without exposing queries to external services.",
      systemBuilt: "A privacy-aware research assistant aggregating search results, deduplicating content, and generating source-backed summaries.",
      technicalChallenge: "Aggregating and deduplicating across heterogeneous sources while maintaining citation chains and query privacy.",
      outcome: "Production research assistant delivering source-backed answers with privacy-preserving search architecture.",
      whyMatters: "Demonstrates search engineering combined with privacy constraints — building systems that provide value while respecting data boundaries.",
      related: ["medical-evidence-qa-assistant", "retrieval-tool-use-assistant", "prompt-reliability-workflow"]
    },
    "prompt-reliability-workflow": {
      title: "Prompt Reliability Workflow",
      summary: "Systematic framework for testing, evaluating, and improving LLM prompt reliability across edge cases and failure modes.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "Operations / GenAI",
      type: "Systems Analysis",
      bestFor: ["AI/ML roles", "LLM roles", "QA roles"],
      skills: ["Prompt Engineering", "LLM Evaluation", "Testing Frameworks", "Reliability Engineering", "Edge Case Analysis", "Metrics Design"],
      problem: "LLM-powered features shipped without systematic reliability testing, leading to unpredictable failures in production.",
      systemBuilt: "A workflow framework for evaluating prompt reliability through structured test suites, edge case generation, and regression tracking.",
      technicalChallenge: "Defining meaningful reliability metrics for non-deterministic LLM outputs and building reproducible test harnesses.",
      outcome: "Production reliability workflow reducing prompt-related failures through systematic evaluation and regression testing.",
      whyMatters: "Demonstrates production engineering mindset applied to LLM systems — the quality infrastructure that separates demos from deployed products.",
      related: ["medical-evidence-qa-assistant", "retrieval-tool-use-assistant", "llm-sales-assistant"]
    },
    "realtime-marketing-decision-engine": {
      title: "Real-Time Marketing Decision Engine",
      summary: "Event-driven decision engine processing behavioral signals and triggering personalized marketing interventions in real time.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Marketing",
      type: "Architecture Review",
      bestFor: ["Backend roles", "Data Engineering roles", "Marketing Tech roles"],
      skills: ["Event-Driven Architecture", "Real-Time Processing", "Decision Logic", "Marketing Tech", "Stream Processing", "API Design"],
      problem: "Marketing decisions were batch-oriented and missed real-time engagement windows.",
      systemBuilt: "An event-driven decision engine processing behavioral signals in real time and triggering personalized marketing actions.",
      technicalChallenge: "Processing high-volume event streams with low latency while applying complex decision rules and personalization logic.",
      outcome: "Production real-time decision engine enabling instant marketing responses to behavioral signals.",
      whyMatters: "Shows real-time systems engineering applied to business outcomes — the intersection of stream processing, decision logic, and marketing domain expertise.",
      related: ["realtime-sales-signal-dashboard", "engagement-triggered-followup-automation", "unified-analytics-lead-growth"]
    },
    "realtime-sales-signal-dashboard": {
      title: "Real-Time Sales Signal Dashboard",
      summary: "Live dashboard surfacing sales signals from CRM, email, and engagement data with real-time scoring and alert routing.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Marketing / AdTech",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "Dashboard roles", "Real-Time roles"],
      skills: ["Real-Time Data Processing", "Dashboard Design", "WebSocket", "Sales Analytics", "Full-Stack", "Alert Systems"],
      problem: "Sales teams operated on stale data, missing time-sensitive signals from CRM, email, and engagement sources.",
      systemBuilt: "A real-time dashboard aggregating signals from multiple sales data sources with live scoring and intelligent alert routing.",
      technicalChallenge: "Maintaining low-latency data freshness across multiple source systems while avoiding alert fatigue.",
      outcome: "Production dashboard delivering real-time sales intelligence with actionable alert routing.",
      whyMatters: "Demonstrates real-time full-stack engineering — combining WebSocket data delivery, multi-source aggregation, and scoring into a production dashboard.",
      related: ["marketing-process-analytics-dashboard", "realtime-marketing-decision-engine", "unified-analytics-lead-growth"]
    },
    "realtime-voice-agent": {
      title: "Real-Time Voice Agent",
      summary: "Latency-first voice pipeline using LiveKit, faster-whisper, Gemini Flash, Piper TTS, turn tracing, and interruption handling.",
      category: "Real-Time / Voice",
      categorySlug: "realtime",
      domain: "Voice AI / Real-Time Systems",
      type: "Architecture Review",
      bestFor: ["AI/ML roles", "Voice AI roles", "Real-Time roles"],
      skills: ["Voice AI", "LiveKit", "STT (faster-whisper)", "TTS (Piper)", "LLM Integration", "Latency Optimization", "Interruption Handling", "Turn Tracing"],
      problem: "Building a conversational voice agent where dead air and interruption failures break the user experience.",
      systemBuilt: "A latency-budgeted real-time voice pipeline with STT, LLM reasoning, TTS, interruption handling, and turn-level tracing.",
      technicalChallenge: "Achieving 866ms clean-turn latency and sub-150ms interruption response while maintaining conversation quality.",
      outcome: "Production voice pipeline with measured latency budgets, interruption handling, and diagnosable turn-level tracing.",
      whyMatters: "Demonstrates real-time systems engineering with hard latency constraints — the kind of performance-critical work demanded by voice AI and real-time communication roles.",
      related: ["reliable-browser-video-calling", "rtsp-camera-browser-streaming", "realtime-web-object-detection"]
    },
    "realtime-web-object-detection": {
      title: "Real-Time Web Object Detection",
      summary: "Browser-based real-time object detection with WebGL-accelerated inference, camera streaming, and responsive overlay rendering.",
      category: "Computer Vision / Edge AI",
      categorySlug: "cv",
      domain: "Logistics",
      type: "Build Breakdown",
      bestFor: ["CV roles", "Frontend roles", "AI roles"],
      skills: ["Browser AI", "WebGL", "Computer Vision", "Real-Time Inference", "JavaScript", "Canvas Rendering"],
      problem: "Object detection required server roundtrips, adding latency and network dependency for real-time use cases.",
      systemBuilt: "A browser-native object detection system running WebGL-accelerated inference on camera streams with overlay rendering.",
      technicalChallenge: "Achieving real-time inference performance in the browser while maintaining detection accuracy and responsive rendering.",
      outcome: "Production browser-based detection system eliminating server dependency for real-time computer vision.",
      whyMatters: "Shows client-side ML deployment — running inference in the browser opens use cases where server latency or connectivity is prohibitive.",
      related: ["edge-ai-container-trailer-detection", "android-edge-vision-logistics", "realtime-voice-agent"]
    },
    "reliable-browser-video-calling": {
      title: "Reliable Browser Video Calling",
      summary: "Browser-based video calling designed around WebRTC reliability, TURN/STUN fallback, and real-world network constraints.",
      category: "Real-Time / Video",
      categorySlug: "realtime",
      domain: "EdTech / Real-Time Communication",
      type: "Architecture Review",
      bestFor: ["Backend roles", "Real-Time roles", "Infrastructure roles"],
      skills: ["WebRTC", "TURN/STUN", "Real-Time Communication", "Browser APIs", "Network Reliability", "Media Handling"],
      problem: "Browser video calls failed unpredictably across network conditions, firewall configurations, and browser implementations.",
      systemBuilt: "A video calling system with WebRTC connection management, TURN/STUN fallback, and reliability monitoring for real-world networks.",
      technicalChallenge: "Handling the combinatorial complexity of browser differences, NAT traversal failures, and degraded network conditions.",
      outcome: "Production video calling with systematic reliability across diverse network and browser environments.",
      whyMatters: "Demonstrates real-time communication engineering — handling the messy reality of WebRTC in production where network conditions are unpredictable.",
      related: ["rtsp-camera-browser-streaming", "realtime-voice-agent", "realtime-web-object-detection"]
    },
    "retrieval-tool-use-assistant": {
      title: "Retrieval Tool-Use Assistant",
      summary: "Agentic assistant combining retrieval-augmented generation with tool-use capabilities for multi-step task execution.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "Internal AI Systems",
      type: "Architecture Review",
      bestFor: ["AI/ML roles", "LLM roles", "Agentic AI roles"],
      skills: ["LLM Agents", "RAG", "Tool Use / Function Calling", "Orchestration", "Multi-Step Reasoning", "Safety Guards"],
      problem: "Single-turn RAG was insufficient for tasks requiring multi-step reasoning, tool access, and iterative retrieval.",
      systemBuilt: "An agentic assistant orchestrating retrieval, tool execution, and multi-step reasoning with safety boundaries.",
      technicalChallenge: "Managing agent reliability across multi-step execution while preventing unsafe tool invocations and reasoning loops.",
      outcome: "Production agentic assistant handling multi-step tasks with tool use, retrieval, and safety constraints.",
      whyMatters: "Demonstrates agentic AI architecture — the multi-step orchestration, safety boundaries, and tool management that define production-grade AI agents.",
      related: ["medical-evidence-qa-assistant", "private-search-research-assistant", "llm-sales-assistant"]
    },
    "rtsp-camera-browser-streaming": {
      title: "RTSP Camera Browser Streaming",
      summary: "System for streaming RTSP camera feeds to browsers with transcoding, adaptive bitrate, and low-latency delivery.",
      category: "Real-Time / Video",
      categorySlug: "realtime",
      domain: "Video Infrastructure / Security",
      type: "Build Breakdown",
      bestFor: ["Backend roles", "Video roles", "Infrastructure roles"],
      skills: ["RTSP", "Video Transcoding", "Adaptive Bitrate", "WebSocket", "Low-Latency Streaming", "FFmpeg"],
      problem: "Browsers cannot natively consume RTSP streams, requiring a transcoding and delivery layer for camera monitoring.",
      systemBuilt: "A streaming bridge converting RTSP camera feeds to browser-compatible formats with adaptive bitrate and low-latency delivery.",
      technicalChallenge: "Minimizing transcoding latency while supporting adaptive bitrate for varying client bandwidth conditions.",
      outcome: "Production streaming system delivering RTSP camera feeds to browsers with low-latency adaptive delivery.",
      whyMatters: "Demonstrates video infrastructure engineering — the transcoding, protocol bridging, and latency optimization that video and surveillance systems require.",
      related: ["reliable-browser-video-calling", "realtime-voice-agent", "realtime-web-object-detection"]
    },
    "scalable-image-processing-api": {
      title: "Scalable Image Processing API",
      summary: "Backend image-processing service designed for throughput, queue management, API ergonomics, and production delivery.",
      category: "DevOps / Infrastructure",
      categorySlug: "devops",
      domain: "Logistics",
      type: "Build Breakdown",
      bestFor: ["Backend roles", "API roles", "Infrastructure roles"],
      skills: ["API Design", "Queue Management", "Image Processing", "Scalability", "Backend Engineering", "Performance Optimization"],
      problem: "Image processing workloads were handled synchronously, creating bottlenecks and timeout failures under load.",
      systemBuilt: "An async image processing API with queue-based workload management, progress tracking, and throughput optimization.",
      technicalChallenge: "Designing an API that handles variable processing times gracefully while maintaining throughput under concurrent load.",
      outcome: "Production API serving image processing workloads with queue management and predictable throughput.",
      whyMatters: "Demonstrates backend API engineering — queue design, async processing, and scalability patterns that apply across many production systems.",
      related: ["onprem-vision-inference-pipeline", "small-team-devops-delivery-pipeline", "edge-ai-container-trailer-detection"]
    },
    "small-team-devops-delivery-pipeline": {
      title: "Small-Team DevOps Delivery Pipeline",
      summary: "Practical CI/CD and delivery workflow for small teams balancing deployment speed, reliability, and rollback discipline.",
      category: "DevOps / Infrastructure",
      categorySlug: "devops",
      domain: "Platform Engineering / DevOps",
      type: "Systems Analysis",
      bestFor: ["DevOps roles", "Platform roles", "Backend roles"],
      skills: ["CI/CD", "DevOps", "Docker", "GitLab", "Deployment Strategy", "Rollback Design", "Monitoring"],
      problem: "Small team lacked deployment discipline — releases were manual, rollbacks were ad-hoc, and failures were slow to detect.",
      systemBuilt: "A pragmatic CI/CD pipeline with automated testing, staged deployment, health checks, and one-click rollback.",
      technicalChallenge: "Building production-grade deployment infrastructure without the overhead of enterprise-scale DevOps tooling.",
      outcome: "Production delivery pipeline enabling fast, reliable deployments with systematic rollback capability.",
      whyMatters: "Demonstrates pragmatic DevOps — building exactly enough deployment infrastructure for the team size, without over-engineering. Relevant for startups and small team environments.",
      related: ["scalable-image-processing-api", "onprem-vision-inference-pipeline", "edge-ai-runtime-evaluation"]
    },
    "sponsorsync-influencer-marketplace": {
      title: "SponsorSync Influencer Marketplace",
      summary: "Two-sided marketplace connecting sponsors with influencers through matching algorithms, campaign tracking, and payment workflow.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Marketing / AdTech",
      type: "Product Case Study",
      bestFor: ["Full-Stack roles", "Product roles", "Marketplace roles"],
      skills: ["Marketplace Design", "Full-Stack", "Matching Algorithms", "Payment Integration", "Campaign Tracking", "React"],
      problem: "Sponsors and influencers had no efficient way to discover, negotiate, and manage collaborations.",
      systemBuilt: "A two-sided marketplace with discovery, matching, campaign management, and payment workflow for sponsor-influencer collaborations.",
      technicalChallenge: "Balancing marketplace liquidity, matching quality, and trust mechanisms across two distinct user types.",
      outcome: "Production marketplace platform facilitating sponsor-influencer collaboration from discovery to payment.",
      whyMatters: "Shows full-stack product execution on a two-sided marketplace — one of the more complex product patterns, requiring design for both supply and demand dynamics.",
      related: ["lead-management-product-launch", "unified-course-management-platform", "engagement-triggered-followup-automation"]
    },
    "support-inbox-copilot": {
      title: "Support Inbox Copilot",
      summary: "AI copilot for support inboxes drafting responses, classifying tickets, and suggesting actions from knowledge base retrieval.",
      category: "LLM / RAG / Agentic Systems",
      categorySlug: "llm-rag",
      domain: "E-commerce / Support Ops",
      type: "Build Breakdown",
      bestFor: ["AI/ML roles", "LLM roles", "Support Tech roles"],
      skills: ["LLM Integration", "RAG", "Ticket Classification", "Knowledge Base Retrieval", "Email Processing", "Support Ops"],
      problem: "Support teams manually drafted repetitive responses and triaged tickets without AI assistance.",
      systemBuilt: "An inbox copilot that classifies incoming tickets, retrieves relevant knowledge, and drafts contextual response suggestions.",
      technicalChallenge: "Generating accurate draft responses while handling diverse ticket types and avoiding confidently wrong suggestions.",
      outcome: "Production copilot reducing response drafting time while maintaining accuracy through retrieval grounding.",
      whyMatters: "Demonstrates practical copilot architecture — augmenting human workflows rather than replacing them, with the quality controls that production support systems require.",
      related: ["brand-tuned-support-assistant", "llm-sales-assistant", "medical-evidence-qa-assistant"]
    },
    "ttil-barcode-coldchain-tracking": {
      title: "TTIL Barcode Cold-Chain Tracking",
      summary: "Cold-chain tracking system using barcode scanning with temperature compliance monitoring and alert workflows.",
      category: "Logistics / Operations",
      categorySlug: "logistics",
      domain: "Logistics / Cold Chain",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "Logistics roles", "IoT roles"],
      skills: ["Barcode Scanning", "Cold Chain Monitoring", "Compliance Tracking", "Alert Systems", "Mobile Development", "Logistics Domain"],
      problem: "Cold-chain compliance relied on manual logging, creating gaps in temperature accountability.",
      systemBuilt: "A barcode-driven cold-chain tracking system with scan-based checkpoints, temperature compliance monitoring, and automated alerts.",
      technicalChallenge: "Ensuring continuous compliance tracking across scan points with reliable alert escalation for temperature excursions.",
      outcome: "Production cold-chain tracking system enforcing compliance through barcode-driven checkpoints and automated monitoring.",
      whyMatters: "Demonstrates compliance-driven engineering in logistics — building systems where regulatory requirements shape architecture decisions.",
      related: ["android-edge-vision-logistics", "offline-inspection-capture-platform", "yard-management-platform"]
    },
    "unified-analytics-lead-growth": {
      title: "Unified Analytics for Lead Growth",
      summary: "Consolidated analytics platform unifying lead tracking, growth metrics, and conversion analysis across marketing channels.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Marketing / AdTech",
      type: "Build Breakdown",
      bestFor: ["Analytics roles", "Full-Stack roles", "Growth roles"],
      skills: ["Analytics Platform", "Data Integration", "Growth Metrics", "Dashboard Design", "Full-Stack", "Channel Attribution"],
      problem: "Lead and growth data was scattered across tools with no unified view of channel performance or conversion attribution.",
      systemBuilt: "A unified analytics platform consolidating lead tracking, growth metrics, and conversion analysis across all marketing channels.",
      technicalChallenge: "Integrating data from disparate marketing tools with different schemas, update frequencies, and attribution models.",
      outcome: "Production analytics platform providing unified growth visibility across all marketing channels.",
      whyMatters: "Demonstrates data integration engineering — unifying messy real-world data sources into coherent analytics, a core challenge in growth and marketing technology.",
      related: ["marketing-process-analytics-dashboard", "realtime-sales-signal-dashboard", "lead-management-product-launch"]
    },
    "unified-course-management-platform": {
      title: "Unified Course Management Platform",
      summary: "Full-stack course management system with enrollment, content delivery, assessments, and instructor workflows.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "EdTech",
      type: "Product Case Study",
      bestFor: ["Full-Stack roles", "Product roles", "EdTech roles"],
      skills: ["Full-Stack Development", "EdTech Domain", "React", "API Design", "Database Design", "User Workflow"],
      problem: "Course management was fragmented across tools with no unified platform for enrollment, content, and assessments.",
      systemBuilt: "A unified platform managing course enrollment, content delivery, student assessments, and instructor workflows in a single interface.",
      technicalChallenge: "Designing a flexible data model supporting diverse course structures, assessment types, and instructor workflow patterns.",
      outcome: "Production course management platform unifying enrollment, content, and assessment workflows.",
      whyMatters: "Shows full-stack product engineering in EdTech — building a complete platform that serves multiple user types with different workflow needs.",
      related: ["sponsorsync-influencer-marketplace", "lead-management-product-launch", "reliable-browser-video-calling"]
    },
    "windows-offline-ai-app": {
      title: "Windows Offline AI Application",
      summary: "CPU-only offline edge AI system using ONNX INT8 quantization, local SQLite persistence, and deferred sync for unreliable field environments.",
      category: "Computer Vision / Edge AI",
      categorySlug: "cv",
      domain: "Logistics",
      type: "Architecture Review",
      bestFor: ["Edge AI roles", "CV roles", "Deployment roles"],
      skills: ["Edge AI", "ONNX Runtime", "INT8 Quantization", "Offline-First", "SQLite", "Windows Deployment", "CPU Inference"],
      problem: "Field operators needed AI-powered inspections on low-end Windows tablets without network connectivity or GPU hardware.",
      systemBuilt: "A CPU-only offline computer vision application using ONNX INT8 quantization, local persistence, and deferred sync.",
      technicalChallenge: "Reducing model from 148MB to 37MB via INT8 quantization while maintaining accuracy, achieving ~320ms/frame on CPU.",
      outcome: "Production edge AI app running on CPU-only Windows tablets in disconnected field environments.",
      whyMatters: "Demonstrates the full constraint spectrum of edge AI deployment — model optimization, hardware limitations, offline operation, and field reliability.",
      related: ["edge-ai-runtime-evaluation", "android-edge-vision-logistics", "onprem-vision-inference-pipeline"]
    },
    "yard-management-platform": {
      title: "Yard Management Platform",
      summary: "Full-stack yard management platform handling trailer tracking, dock scheduling, and operational visibility for logistics operations.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Logistics",
      type: "Product Case Study",
      bestFor: ["Full-Stack roles", "Product roles", "Logistics roles"],
      skills: ["Full-Stack Development", "Real-Time Dashboard", "Logistics Domain", "API Design", "Database Design", "Operational Visibility"],
      problem: "Yard operations lacked digital visibility — trailer locations, dock status, and schedules were tracked manually.",
      systemBuilt: "A full-stack platform providing real-time trailer tracking, dock scheduling, and operational dashboards for yard managers.",
      technicalChallenge: "Building real-time operational visibility while handling the data complexity of multi-dock, multi-trailer yard operations.",
      outcome: "Production yard management platform providing real-time operational visibility and scheduling for logistics yards.",
      whyMatters: "Shows full-stack platform engineering in logistics — building operational tools that replace manual processes with real-time digital visibility.",
      related: ["enterprise-yms-integration", "adaptive-yard-routing", "nocode-logistics-form-builder"]
    }
  };

  /* ── CATEGORY DISPLAY NAMES ── */
  var CATEGORY_NAMES = {
    "ai-ml": "AI / ML",
    "llm-rag": "LLM / RAG",
    "cv": "Computer Vision",
    "realtime": "Real-Time Systems",
    "fullstack": "Full-Stack / SaaS",
    "data": "Data / Analytics",
    "logistics": "Logistics / Operations",
    "devops": "DevOps / Infrastructure"
  };

  /* ── HELPERS ── */
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  function slugToId(s) { return s.replace(/[^a-z0-9-]/g, ''); }

  /* ── INJECT SKIP LINK ── */
  function injectSkipLink() {
    var link = document.createElement('a');
    link.className = 'bc-skip';
    link.href = '#main-content';
    link.textContent = 'Skip to content';
    document.body.insertBefore(link, document.body.firstChild);
  }

  /* ── INJECT HEADER ── */
  function injectHeader() {
    var header = document.createElement('header');
    header.className = 'bc-header';
    header.setAttribute('role', 'banner');
    header.innerHTML =
      '<div class="bc-header-inner">' +
        '<a class="bc-logo" href="../index.html">Harshit Paunikar</a>' +
        '<nav class="bc-nav" aria-label="Main navigation">' +
          '<a href="../../index.html">Home</a>' +
          '<a href="../index.html" class="bc-nav-active">Case Studies</a>' +
          '<a href="../../index.html#contact">Contact</a>' +
        '</nav>' +
        '<button class="bc-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button>' +
      '</div>';

    var mobileNav = document.createElement('nav');
    mobileNav.className = 'bc-mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    mobileNav.innerHTML =
      '<a href="../../index.html">Home</a>' +
      '<a href="../index.html">Case Studies</a>' +
      '<a href="../../index.html#contact">Contact</a>';

    document.body.insertBefore(mobileNav, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    var toggle = header.querySelector('.bc-nav-toggle');
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('bc-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });
  }

  /* ── INJECT ARTICLE META ── */
  function injectArticleMeta(project) {
    var meta = document.createElement('div');
    meta.className = 'bc-article-meta';

    var badges = '<div class="bc-badges">';
    badges += '<span class="bc-badge bc-badge-category">' + esc(project.category) + '</span>';
    badges += '<span class="bc-badge">' + esc(project.domain) + '</span>';
    badges += '<span class="bc-badge bc-badge-type">' + esc(project.type) + '</span>';
    badges += '</div>';

    var bestFor = '';
    if (project.bestFor && project.bestFor.length) {
      bestFor = '<div class="bc-best-for">Best for: ' + project.bestFor.map(esc).join(', ') + '</div>';
    }

    meta.innerHTML = badges + bestFor;

    // Insert after the first header or h1
    var anchor = document.querySelector('header:not(.bc-header)') || document.querySelector('h1');
    if (anchor && anchor.parentNode) {
      var ref = anchor.tagName === 'HEADER' ? anchor : anchor.parentNode;
      if (ref.nextSibling) {
        ref.parentNode.insertBefore(meta, ref.nextSibling);
      } else {
        ref.parentNode.appendChild(meta);
      }
    }
  }

  /* ── INJECT EXECUTIVE SUMMARY ── */
  function injectSummary(project) {
    var box = document.createElement('div');
    box.className = 'bc-summary-box';
    box.innerHTML =
      '<h2>Executive Summary</h2>' +
      '<div class="bc-summary-grid">' +
        '<div class="bc-summary-item"><strong>Problem</strong><p>' + esc(project.problem) + '</p></div>' +
        '<div class="bc-summary-item"><strong>System Built</strong><p>' + esc(project.systemBuilt) + '</p></div>' +
        '<div class="bc-summary-item"><strong>Technical Challenge</strong><p>' + esc(project.technicalChallenge) + '</p></div>' +
        '<div class="bc-summary-item"><strong>Outcome</strong><p>' + esc(project.outcome) + '</p></div>' +
      '</div>';

    var meta = document.querySelector('.bc-article-meta');
    if (meta && meta.nextSibling) {
      meta.parentNode.insertBefore(box, meta.nextSibling);
    } else if (meta) {
      meta.parentNode.appendChild(box);
    }
  }

  /* ── INJECT TOC ── */
  function injectTOC() {
    var headings = document.querySelectorAll('h2:not(.bc-summary-box h2):not(.bc-section h2)');
    if (headings.length < 3) return; // Not enough headings to warrant a TOC

    var details = document.createElement('details');
    details.className = 'bc-toc';
    var summary = document.createElement('summary');
    summary.textContent = 'On this page';
    details.appendChild(summary);

    var nav = document.createElement('nav');
    for (var i = 0; i < headings.length; i++) {
      var h = headings[i];
      if (!h.id) {
        h.id = 'section-' + slugToId(h.textContent.toLowerCase().replace(/\s+/g, '-').substring(0, 50));
      }
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      nav.appendChild(a);
    }
    details.appendChild(nav);

    var summaryBox = document.querySelector('.bc-summary-box');
    if (summaryBox && summaryBox.nextSibling) {
      summaryBox.parentNode.insertBefore(details, summaryBox.nextSibling);
    } else if (summaryBox) {
      summaryBox.parentNode.appendChild(details);
    }
  }

  /* ── INJECT SKILLS SECTION ── */
  function injectSkills(project) {
    if (!project.skills || !project.skills.length) return;

    var section = document.createElement('section');
    section.className = 'bc-section';
    section.innerHTML =
      '<h2>Skills Demonstrated</h2>' +
      '<div class="bc-skill-chips">' +
        project.skills.map(function (s) { return '<span class="bc-skill-chip">' + esc(s) + '</span>'; }).join('') +
      '</div>';

    document.body.appendChild(section);
  }

  /* ── INJECT WHY THIS MATTERS ── */
  function injectWhyMatters(project) {
    if (!project.whyMatters) return;

    var section = document.createElement('section');
    section.className = 'bc-section';
    section.innerHTML =
      '<h2>Why This Matters</h2>' +
      '<p class="bc-why-text">' + esc(project.whyMatters) + '</p>';

    document.body.appendChild(section);
  }

  /* ── INJECT RELATED CASE STUDIES ── */
  function injectRelated(project) {
    if (!project.related || !project.related.length) return;

    var cards = '';
    for (var i = 0; i < project.related.length; i++) {
      var slug = project.related[i];
      var rel = CATALOG[slug];
      if (!rel) continue;
      cards +=
        '<a class="bc-related-card" href="../' + slug + '/index.html">' +
          '<span class="bc-related-category">' + esc(rel.category) + '</span>' +
          '<span class="bc-related-title">' + esc(rel.title) + '</span>' +
          '<span class="bc-related-summary">' + esc(rel.summary) + '</span>' +
        '</a>';
    }

    if (!cards) return;

    var section = document.createElement('section');
    section.className = 'bc-section';
    section.innerHTML =
      '<h2>Related Case Studies</h2>' +
      '<div class="bc-related-grid">' + cards + '</div>';

    document.body.appendChild(section);
  }

  /* ── INJECT FOOTER CTA ── */
  function injectFooter() {
    var footer = document.createElement('footer');
    footer.className = 'bc-footer';
    footer.setAttribute('role', 'contentinfo');
    footer.innerHTML =
      '<p>Want to discuss this kind of system?</p>' +
      '<div class="bc-footer-actions">' +
        '<a class="bc-btn bc-btn-primary" href="../../index.html#contact">Contact Me</a>' +
        '<a class="bc-btn bc-btn-secondary" href="../index.html">Explore More Case Studies</a>' +
      '</div>';

    document.body.appendChild(footer);
  }

  /* ── MAIN ENTRY ── */
  function init() {
    var configEl = document.getElementById('blog-config');
    if (!configEl) return;

    var config;
    try {
      config = JSON.parse(configEl.textContent);
    } catch (e) {
      return;
    }

    var slug = config.slug;
    if (!slug || !CATALOG[slug]) return;

    var project = CATALOG[slug];

    // Add main-content id for skip link
    var firstContentEl = document.querySelector('.page, .viewport, .console, .article-shell, .container, body > div:not(.bc-header):not(.bc-mobile-nav), body > main');
    if (firstContentEl) {
      firstContentEl.id = firstContentEl.id || 'main-content';
    }

    injectSkipLink();
    injectHeader();
    injectArticleMeta(project);
    injectSummary(project);
    injectTOC();
    injectSkills(project);
    injectWhyMatters(project);
    injectRelated(project);
    injectFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
