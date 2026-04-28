/* ============================================================
   BLOG COMMON - Shared JS for all case-study pages.
   Reads a JSON config from the page, injects consistent
   header, metadata, TOC, skills, related articles, and footer.
   ============================================================ */

(function () {
  'use strict';

  /* ── PROJECT CATALOG ──
     Central metadata for all 76 case studies.
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
      whyMatters: "Demonstrates ability to build constraint-driven optimization systems for physical operations - a skill valued in logistics, supply chain, and operations engineering roles.",
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
      whyMatters: "Shows end-to-end mobile AI deployment - from model optimization to camera integration to field-ready UX - relevant for computer vision and mobile engineering roles.",
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
      whyMatters: "Demonstrates practical LLM deployment with brand constraints - a growing requirement for customer-facing AI systems in e-commerce and support operations.",
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
      whyMatters: "Shows rigorous data analysis methodology on real-world mobility data - the kind of structured EDA that informs product and operations decisions.",
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
      whyMatters: "Demonstrates responsible ML modeling on sensitive social data - balancing predictive accuracy with fairness and interpretability.",
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
      whyMatters: "Shows full computer vision deployment lifecycle - from model training through edge optimization to production monitoring - in a demanding physical environment.",
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
      whyMatters: "Demonstrates systematic engineering evaluation methodology - the kind of disciplined analysis that prevents costly deployment mistakes in production ML systems.",
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
      whyMatters: "Shows event-driven architecture applied to business outcomes - combining backend engineering with marketing domain knowledge for measurable impact.",
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
      whyMatters: "Demonstrates enterprise integration engineering - handling the complexity of connecting legacy systems with modern operations, a critical skill in logistics and supply chain technology.",
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
      whyMatters: "Shows product execution from zero to launch - combining technical implementation with product thinking, relevant for full-stack and product engineering roles.",
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
      whyMatters: "Shows ability to translate complex financial modeling into accessible tools - combining analytics depth with practical business value.",
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
      whyMatters: "Demonstrates full-stack dashboard engineering - from data aggregation to visualization to real-time updates - a core skill for analytics and platform roles.",
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
      whyMatters: "Medical AI demands higher retrieval discipline than typical search. This system demonstrates safety-constrained RAG with evidence-grounding and refusal boundaries - critical for regulated domains.",
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
      whyMatters: "Demonstrates algorithmic problem-solving without defaulting to ML - choosing the right tool for the constraint. Valued in environments where model deployment overhead is prohibitive.",
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
      whyMatters: "Shows product thinking combined with technical execution - building internal tools that reduce engineering dependency and improve operational velocity.",
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
      whyMatters: "Demonstrates regulated-domain ML - balancing predictive performance with interpretability and compliance requirements that banking and financial roles demand.",
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
      whyMatters: "Demonstrates offline-first engineering - a critical capability for logistics, field operations, and any environment where network reliability cannot be assumed.",
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
      whyMatters: "Shows NLP deployment under infrastructure constraints - relevant for regulated industries where data cannot leave premises.",
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
      whyMatters: "Demonstrates production ML infrastructure - the deployment and operations layer that determines whether models actually deliver value in production.",
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
      whyMatters: "Demonstrates search engineering combined with privacy constraints - building systems that provide value while respecting data boundaries.",
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
      whyMatters: "Demonstrates production engineering mindset applied to LLM systems - the quality infrastructure that separates demos from deployed products.",
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
      whyMatters: "Shows real-time systems engineering applied to business outcomes - the intersection of stream processing, decision logic, and marketing domain expertise.",
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
      whyMatters: "Demonstrates real-time full-stack engineering - combining WebSocket data delivery, multi-source aggregation, and scoring into a production dashboard.",
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
      whyMatters: "Demonstrates real-time systems engineering with hard latency constraints - the kind of performance-critical work demanded by voice AI and real-time communication roles.",
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
      whyMatters: "Shows client-side ML deployment - running inference in the browser opens use cases where server latency or connectivity is prohibitive.",
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
      whyMatters: "Demonstrates real-time communication engineering - handling the messy reality of WebRTC in production where network conditions are unpredictable.",
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
      whyMatters: "Demonstrates agentic AI architecture - the multi-step orchestration, safety boundaries, and tool management that define production-grade AI agents.",
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
      whyMatters: "Demonstrates video infrastructure engineering - the transcoding, protocol bridging, and latency optimization that video and surveillance systems require.",
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
      whyMatters: "Demonstrates backend API engineering - queue design, async processing, and scalability patterns that apply across many production systems.",
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
      problem: "Small team lacked deployment discipline - releases were manual, rollbacks were ad-hoc, and failures were slow to detect.",
      systemBuilt: "A pragmatic CI/CD pipeline with automated testing, staged deployment, health checks, and one-click rollback.",
      technicalChallenge: "Building production-grade deployment infrastructure without the overhead of enterprise-scale DevOps tooling.",
      outcome: "Production delivery pipeline enabling fast, reliable deployments with systematic rollback capability.",
      whyMatters: "Demonstrates pragmatic DevOps - building exactly enough deployment infrastructure for the team size, without over-engineering. Relevant for startups and small team environments.",
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
      whyMatters: "Shows full-stack product execution on a two-sided marketplace - one of the more complex product patterns, requiring design for both supply and demand dynamics.",
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
      whyMatters: "Demonstrates practical copilot architecture - augmenting human workflows rather than replacing them, with the quality controls that production support systems require.",
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
      whyMatters: "Demonstrates compliance-driven engineering in logistics - building systems where regulatory requirements shape architecture decisions.",
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
      whyMatters: "Demonstrates data integration engineering - unifying messy real-world data sources into coherent analytics, a core challenge in growth and marketing technology.",
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
      whyMatters: "Shows full-stack product engineering in EdTech - building a complete platform that serves multiple user types with different workflow needs.",
      related: ["sponsorsync-influencer-marketplace", "lead-management-product-launch", "reliable-browser-video-calling"]
    },
    "airline-passenger-forecasting": {
      title: "What I Trust in an Airline Passenger Forecast",
      summary: "A forecast postmortem on monthly airline passenger demand: decomposition, stationarity, seasonality, backtesting, and why exogenous promotion signals changed the result.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Aviation / Forecasting",
      type: "Data Case Study",
      bestFor: ["Data roles", "Forecasting roles", "Analytics roles"],
      skills: ["Time-Series Forecasting", "ARIMA", "SARIMA", "SARIMAX", "Seasonality Analysis", "Backtesting"],
      problem: "Airline planning needed a passenger forecast that could be trusted for route, staffing, and inventory decisions rather than admired as a chart.",
      systemBuilt: "A time-series forecasting workflow comparing seasonal baselines, ARIMA-family models, and exogenous promotion-aware variants.",
      technicalChallenge: "Separating real seasonal structure from drift and proving that extra model complexity genuinely improved rolling forecast quality.",
      outcome: "A defendable forecasting approach showing when seasonal baselines were enough and when promotion-aware modeling added usable signal.",
      whyMatters: "Shows disciplined forecasting judgment - not just fitting models, but deciding what evidence is strong enough to influence operational planning.",
      related: ["digital-media-view-prediction", "linear-regression-cross-validation", "local-business-profit-planning"]
    },
    "co2-emissions-prediction": {
      title: "What This CO2 Model Can Say, and What It Cannot",
      summary: "A cautious policy-analysis brief on country-level CO2 emissions modeling: what the notebook measures, where inference must stop, and how regulation can use the output without pretending it is causal.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Climate / Policy",
      type: "Data Case Study",
      bestFor: ["Data roles", "Policy analytics roles", "Research roles"],
      skills: ["Regression Modeling", "Lasso", "Policy Analytics", "Feature Selection", "Emissions Analysis", "Model Interpretation"],
      problem: "Policy teams needed a structured way to analyze cross-country emissions drivers without overclaiming that a regression could settle regulation questions on its own.",
      systemBuilt: "A country-level emissions modeling workflow combining merged panel features, regression analysis, and regularization for signal review.",
      technicalChallenge: "Keeping predictive analysis useful while enforcing a hard boundary between statistical association and policy causality.",
      outcome: "A decision-support analysis that helps frame climate-policy investigation without pretending the notebook itself is the policy answer.",
      whyMatters: "Demonstrates analytical restraint - one of the most important skills in policy-facing data work where the risk is often overinterpretation, not underfitting.",
      related: ["india-budget-2020-economic-analysis", "ngo-resource-allocation-model", "data-driven-aid-allocation-model"]
    },
    "digital-media-view-prediction": {
      title: "Forecasting an Audience Before the Launch Window Closes",
      summary: "A case study on forecasting show views for a digital media company: launch timing, weekend lift, promo pressure, and which variables actually help editorial planning.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Media / Forecasting",
      type: "Data Case Study",
      bestFor: ["Data roles", "Forecasting roles", "Media analytics roles"],
      skills: ["Forecasting", "Feature Analysis", "Media Analytics", "Time-Series Analysis", "EDA", "Planning Models"],
      problem: "Editorial and launch planning needed a view forecast early enough to influence scheduling, promotion, and release timing decisions.",
      systemBuilt: "A forecasting analysis combining calendar effects, visitor traffic, and promotion signals to estimate digital content view performance.",
      technicalChallenge: "Distinguishing durable planning signals from noisy storytelling variables in a small, timing-sensitive media dataset.",
      outcome: "A forecast framework showing which launch and promotion variables were genuinely useful for editorial planning.",
      whyMatters: "Shows the practical side of forecasting in business settings where the value lies in earlier planning decisions, not just better postmortem accuracy.",
      related: ["airline-passenger-forecasting", "marketing-process-analytics-dashboard", "x-education-lead-prioritization"]
    },
    "housing-pca-case-study": {
      title: "Does PCA Actually Help a Housing Model?",
      summary: "A comparative analysis of PCA in housing-price prediction: cleaner geometry, weaker interpretability, and only a marginal change in model performance.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Real Estate / ML",
      type: "Data Case Study",
      bestFor: ["ML roles", "Data science roles", "Analytics roles"],
      skills: ["PCA", "Regression Modeling", "Feature Engineering", "Dimensionality Reduction", "Model Comparison", "Interpretability"],
      problem: "The housing model had correlated features, raising the question of whether PCA improved the model enough to justify the lost feature-level explanation.",
      systemBuilt: "A side-by-side PCA versus non-PCA housing prediction analysis comparing geometry cleanup, interpretability, and fit quality.",
      technicalChallenge: "Balancing decorrelated feature space against the business cost of replacing understandable housing attributes with unnamed components.",
      outcome: "A clear tradeoff analysis showing PCA as defensible in some contexts but not an automatic improvement.",
      whyMatters: "Demonstrates mature ML judgment: sometimes the right decision is not whether a method works, but whether it is worth its explanation cost.",
      related: ["housing-price-prediction", "iris-pca-analysis", "property-valuation-model"]
    },
    "housing-price-prediction": {
      title: "What a Housing Regression Can and Cannot Tell You About Price",
      summary: "A practical valuation guide: what the Delhi housing regression model reveals about feature elasticity, where its predictions drift from market reality, and when an appraiser's judgment outperforms the equation.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Real Estate / Analytics",
      type: "Data Case Study",
      bestFor: ["Data roles", "Analytics roles", "Real estate roles"],
      skills: ["Regression", "Price Modeling", "Residual Analysis", "Feature Elasticity", "Model Interpretation", "Valuation"],
      problem: "Property valuation needed a model that could explain price pressure while acknowledging where market judgment still outruns the regression.",
      systemBuilt: "A housing regression analysis translating property attributes into price estimates, coefficient interpretation, and valuation caveats.",
      technicalChallenge: "Keeping coefficient narratives honest in the presence of correlated housing features and locality effects the dataset could not fully capture.",
      outcome: "A useful valuation-support model with clear boundaries on when to trust it and when to defer to domain judgment.",
      whyMatters: "Shows how to turn a regression into a practical decision tool without confusing statistical fit for market truth.",
      related: ["housing-pca-case-study", "property-valuation-model", "used-car-price-prediction"]
    },
    "india-budget-2020-economic-analysis": {
      title: "Reading the Economy Before Budget 2020: A Policy Briefing",
      summary: "A policy-style analytical briefing for decision-makers preparing for India's Union Budget 2020. Growth slowdown, inflation, sectoral stress, and fiscal room - ranked by urgency.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Economic Analysis",
      type: "Data Case Study",
      bestFor: ["Analytics roles", "Research roles", "Policy roles"],
      skills: ["Economic Analysis", "Policy Briefing", "Macroeconomics", "Sector Analysis", "Data Interpretation", "Presentation Synthesis"],
      problem: "Pre-budget analysis needed to compress many macroeconomic signals into a briefing that ranked what mattered most for actual policy discussion.",
      systemBuilt: "A policy-style analytical memo covering growth, inflation, sector stress, and fiscal headroom before Budget 2020.",
      technicalChallenge: "Turning broad economic indicators into a prioritized argument instead of an unfocused collection of charts and statistics.",
      outcome: "A readable economic briefing that framed urgency and tradeoffs for decision-makers preparing for budget conversations.",
      whyMatters: "Demonstrates communication-heavy analytics where the structure of the argument matters as much as the data behind it.",
      related: ["co2-emissions-prediction", "ngo-resource-allocation-model", "local-business-profit-planning"]
    },
    "iris-pca-analysis": {
      title: "The Geometry of Less - PCA from First Principles",
      summary: "Why principal component analysis rotates axes rather than drops columns and what survives the compression.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "ML Foundations",
      type: "Data Case Study",
      bestFor: ["ML roles", "Data science roles", "Teaching-oriented roles"],
      skills: ["PCA", "Dimensionality Reduction", "Iris Dataset", "Standardization", "Explained Variance", "ML Education"],
      problem: "PCA is often taught as a function call, when the real need is understanding the geometric problem it is actually solving.",
      systemBuilt: "A first-principles PCA walkthrough using Iris to explain correlation, rotation, variance capture, and reconstruction tradeoffs.",
      technicalChallenge: "Explaining dimensionality reduction rigorously while keeping the method interpretable to readers beyond textbook notation.",
      outcome: "A conceptually clear PCA teaching piece connecting component math to concrete structure in a familiar dataset.",
      whyMatters: "Shows the ability to explain ML methods at the mechanism level - a strong signal for engineering maturity, mentoring, and technical writing.",
      related: ["housing-pca-case-study", "linear-regression-cross-validation", "online-retail-customer-clustering"]
    },
    "linear-regression-cross-validation": {
      title: "Cross-Validation Does Not Guarantee a Honest Model",
      summary: "A myth-busting explainer on cross-validation: what k-fold actually measures, the three ways practitioners break it quietly, and a checklist for when CV scores are actually informative.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Model Evaluation",
      type: "Data Case Study",
      bestFor: ["ML roles", "Data science roles", "MLOps roles"],
      skills: ["Cross-Validation", "Model Evaluation", "Data Leakage", "Regression", "Validation Strategy", "ML Reliability"],
      problem: "Teams often treat k-fold cross-validation as proof of model honesty even when the evaluation setup is quietly broken.",
      systemBuilt: "A model-evaluation critique showing how leakage, temporal contamination, and threshold shopping distort CV scores.",
      technicalChallenge: "Making evaluation failure modes concrete enough that readers can recognize them in their own workflows.",
      outcome: "A practical validation checklist that turns cross-validation from ritual into a defensible evaluation practice.",
      whyMatters: "Demonstrates the kind of reliability thinking that prevents models from looking strong offline and failing the moment they hit reality.",
      related: ["airline-passenger-forecasting", "loan-default-risk-prediction", "telecom-churn-prediction"]
    },
    "loan-default-risk-prediction": {
      title: "Lending Into the Unknown: A Credit-Risk Decision System for NPA Reduction",
      summary: "How a classification model built on the Home Credit dataset becomes a scoreband-driven approval policy - and why the model's value only becomes legible once it's embedded in a lending decision chain.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Banking / Credit Risk",
      type: "Data Case Study",
      bestFor: ["ML roles", "Risk roles", "Banking analytics roles"],
      skills: ["Credit Risk Modeling", "Classification", "Scorecards", "Class Imbalance", "Feature Engineering", "Banking Analytics"],
      problem: "Lenders needed a better way to estimate default risk for applicants whose repayment behavior was not directly observable in advance.",
      systemBuilt: "A credit-risk classification and scorebanding workflow that turns borrower signals into approval-oriented risk tiers.",
      technicalChallenge: "Making class-imbalanced model output operationally useful inside an approval policy rather than leaving it as a probability score alone.",
      outcome: "A risk decision framework connecting model evidence to lending action, cutoff logic, and NPA reduction goals.",
      whyMatters: "Shows how to connect predictive modeling to real business policy - the difference between a notebook artifact and an actual decision system.",
      related: ["npa-risk-prediction", "telecom-churn-prediction", "x-education-lead-prioritization"]
    },
    "marriage-age-prediction-flask-app": {
      title: "An Honest Retrofit: Cleaning Up a Rough ML Deployment",
      summary: "A critical walkthrough of a rough Flask-based ML deployment, focusing on editorial cleanup, input contracts, model boundaries, and responsible presentation of outputs.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Full-Stack / ML Deployment",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "ML deployment roles", "Backend roles"],
      skills: ["Flask", "ML Deployment", "Form Handling", "Model Serialization", "Python", "Application Cleanup"],
      problem: "A toy ML deployment existed, but it lacked the cleanup, input discipline, and ethical framing needed to be a credible engineering artifact.",
      systemBuilt: "A reviewed Flask-based prediction flow centered on route handling, model loading, form contracts, and explicit deployment boundaries.",
      technicalChallenge: "Turning a rough notebook-derived app into something coherent without pretending the underlying model is more trustworthy than it is.",
      outcome: "A cleaner, more responsible ML deployment narrative that exposes limitations instead of hiding them behind a web form.",
      whyMatters: "Shows practical engineering judgment on weak inherited systems - a very real skill in production work where cleanup matters as much as greenfield builds.",
      related: ["salary-estimation-flask-app", "lead-management-product-launch", "support-inbox-copilot"]
    },
    "ngo-resource-allocation-model": {
      title: "Allocating Under Scarcity: An Ethics-Aware Resource Memo",
      summary: "How an international NGO translates socioeconomic indicators into ranked country allocations - the indicators, the weights, the constraints, and the tradeoffs that scoring cannot hide.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Social Impact / Analytics",
      type: "Data Case Study",
      bestFor: ["Data roles", "Social impact roles", "Research roles"],
      skills: ["Resource Allocation", "Clustering", "Weighted Scoring", "Decision Modeling", "Social Impact Analytics", "Ethics-Aware Analysis"],
      problem: "Aid allocation decisions needed more structure, but the scoring logic also had to expose the ethical tradeoffs that quantitative ranking tends to hide.",
      systemBuilt: "A country-prioritization analysis using need indicators, clustering logic, and explicit discussion of weighting and constraint choices.",
      technicalChallenge: "Preventing the scoring framework from appearing morally neutral when every indicator and weight embeds a value judgment.",
      outcome: "An allocation memo that makes resource prioritization more consistent while keeping its ethical assumptions visible.",
      whyMatters: "Demonstrates responsible analytics in high-stakes allocation settings where transparency matters as much as model structure.",
      related: ["data-driven-aid-allocation-model", "co2-emissions-prediction", "india-budget-2020-economic-analysis"]
    },
    "online-retail-customer-clustering": {
      title: "Who Actually Shops Here: Five Customer Archetypes from a UK Retail Dataset",
      summary: "How RFM features and K-means clustering turn 541,000 transactions into five recognizable customer types - and what each archetype tells the merchandising and CRM team.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "E-commerce / Segmentation",
      type: "Data Case Study",
      bestFor: ["ML roles", "Analytics roles", "Growth roles"],
      skills: ["Customer Segmentation", "K-Means", "RFM Analysis", "E-commerce Analytics", "Unsupervised Learning", "CRM Strategy"],
      problem: "Transaction logs were too granular to act on directly, making it difficult to reason about meaningful customer segments for CRM and merchandising.",
      systemBuilt: "A segmentation workflow converting raw transactions into RFM-style customer features and K-means-based archetypes.",
      technicalChallenge: "Turning receipt-level data into stable customer-level structure that business teams could actually understand and act on.",
      outcome: "Five interpretable customer archetypes that support merchandising, retention, and lifecycle strategy discussions.",
      whyMatters: "Shows how unsupervised learning becomes valuable only when the clusters are translated into operational customer narratives.",
      related: ["power-user-curve-analysis", "unified-analytics-lead-growth", "marketing-process-analytics-dashboard"]
    },
    "power-user-curve-analysis": {
      title: "Reading the Power User Curve",
      summary: "A product-analytics essay on moving beyond DAU/MAU averages to read user engagement as a behavioral distribution with different strategic meanings.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Product Analytics",
      type: "Data Case Study",
      bestFor: ["Analytics roles", "Growth roles", "Product roles"],
      skills: ["Product Analytics", "Retention Analysis", "DAU/MAU", "Behavioral Segmentation", "Data Visualization", "Growth Metrics"],
      problem: "Teams were relying on DAU/MAU as a blunt engagement metric that hid the shape of user behavior and weakened retention strategy.",
      systemBuilt: "An interpretive analytics framework using the power user curve to distinguish casual users, emerging regulars, and deeply engaged cohorts.",
      technicalChallenge: "Turning a distribution view into actionable product strategy instead of leaving it as a more elegant descriptive chart.",
      outcome: "A clearer retention analysis lens that maps engagement shape to different intervention strategies.",
      whyMatters: "Demonstrates product analytics that changes decisions, not just dashboards - especially valuable for growth, lifecycle, and engagement work.",
      related: ["online-retail-customer-clustering", "unified-analytics-lead-growth", "marketing-process-analytics-dashboard"]
    },
    "property-valuation-model": {
      title: "Investment Committee Memo: Property Valuation Model",
      summary: "A property investment memo connecting price estimation to cashflow logic, scenario pressure, and downside discipline rather than stopping at model accuracy.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Real Estate / Investment",
      type: "Data Case Study",
      bestFor: ["Analytics roles", "Finance roles", "Real estate roles"],
      skills: ["Property Valuation", "Investment Analysis", "Cashflow Modeling", "Scenario Analysis", "IRR", "Real Estate Analytics"],
      problem: "Acquisition decisions needed more than a predicted market price; they needed underwriting logic tied to cashflow and downside risk.",
      systemBuilt: "A valuation memo combining a pricing model with cashflow ladders, return metrics, and scenario-based investment discipline.",
      technicalChallenge: "Keeping the price model in service of investment judgment instead of allowing accuracy metrics to dominate the decision conversation.",
      outcome: "A more complete valuation framework that treats predicted price as one input inside a broader investment memo.",
      whyMatters: "Shows the difference between building a model and building a decision framework - a key distinction in finance and investment analytics.",
      related: ["housing-price-prediction", "housing-pca-case-study", "used-car-price-prediction"]
    },
    "salary-estimation-flask-app": {
      title: "The Interesting Part Starts After model.fit()",
      summary: "A notebook-to-tool walkthrough showing how a simple salary model becomes a Flask interface, and why deployment work begins after the estimator is trained.",
      category: "Full-Stack / SaaS",
      categorySlug: "fullstack",
      domain: "Full-Stack / ML Deployment",
      type: "Build Breakdown",
      bestFor: ["Full-Stack roles", "ML deployment roles", "Backend roles"],
      skills: ["Flask", "API Design", "Model Serialization", "Python", "Deployment Readiness", "Form UX"],
      problem: "A trained model alone was not enough; the project needed a usable interface, route contract, and deployment story beyond notebook output.",
      systemBuilt: "A Flask-based salary estimation interface translating a small model into a browser-facing tool with explicit input and response flow.",
      technicalChallenge: "Making a tiny model usable without overstating its maturity, coverage, or production readiness.",
      outcome: "A clean notebook-to-tool example that highlights the practical engineering work around lightweight ML deployment.",
      whyMatters: "Demonstrates that deployment is a software problem as much as a modeling problem - a useful pattern for junior-to-mid ML product work.",
      related: ["marriage-age-prediction-flask-app", "lead-management-product-launch", "reliable-browser-video-calling"]
    },
    "telecom-churn-prediction": {
      title: "The Churn Retention Playbook: From Signal to Save Offer",
      summary: "A telecom churn-retention playbook: how a classification model connects to a tiered intervention strategy, what a false positive costs, and which signals actually predict who is about to leave.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Telecom / Retention",
      type: "Data Case Study",
      bestFor: ["ML roles", "Analytics roles", "Customer strategy roles"],
      skills: ["Churn Prediction", "Classification", "Retention Strategy", "Customer Analytics", "Model Evaluation", "Telecom Analytics"],
      problem: "A churn model was only valuable if it could drive save-offer strategy rather than sit as an isolated prediction exercise.",
      systemBuilt: "A customer-retention analysis connecting churn classification output to tiered intervention logic and the economics of false positives.",
      technicalChallenge: "Balancing predictive performance with the operational cost of saving the wrong customers or missing the right ones.",
      outcome: "A churn playbook that ties model evidence to customer action strategy instead of stopping at model metrics.",
      whyMatters: "Shows how predictive modeling becomes operational policy in customer retention systems - a useful pattern across subscription and service businesses.",
      related: ["loan-default-risk-prediction", "x-education-lead-prioritization", "realtime-sales-signal-dashboard"]
    },
    "used-car-price-prediction": {
      title: "What Actually Moves a Used Car's Price",
      summary: "A market-translation article: what regression reveals about used-car pricing pressure, which signals matter, and where the model becomes a poor guide to real negotiation.",
      category: "Data / Analytics",
      categorySlug: "data",
      domain: "Automotive / Analytics",
      type: "Data Case Study",
      bestFor: ["Analytics roles", "ML roles", "Pricing roles"],
      skills: ["Regression", "Price Modeling", "Residual Analysis", "Automotive Analytics", "Feature Interpretation", "Market Analysis"],
      problem: "Used-car pricing needed a model that surfaced signal honestly without pretending historical regression could replace live market negotiation.",
      systemBuilt: "A pricing analysis translating vehicle attributes into price pressure, coefficient caution, and residual-based caveats.",
      technicalChallenge: "Interpreting noisy, correlated automotive features without overpromising coefficient precision or local-market generality.",
      outcome: "A practical pricing guide that explains what the regression can reveal and where dealer judgment still dominates.",
      whyMatters: "Shows strong model-interpretation discipline in a pricing context where the wrong explanation can be more dangerous than a slightly wrong estimate.",
      related: ["housing-price-prediction", "property-valuation-model", "carsharing-availability-eda"]
    },
    "x-education-lead-prioritization": {
      title: "Revenue Operations Brief: Lead Prioritization at X Education",
      summary: "A revenue-operations case study on lead classification, strict cutoff selection, and routing policy designed to protect sales-team bandwidth.",
      category: "AI / ML Systems",
      categorySlug: "ai-ml",
      domain: "Sales / RevOps",
      type: "Data Case Study",
      bestFor: ["ML roles", "Sales ops roles", "Growth roles"],
      skills: ["Lead Scoring", "Classification", "Revenue Operations", "Cutoff Calibration", "Sales Analytics", "Routing Logic"],
      problem: "Sales teams were losing velocity because too many weak leads reached human reps instead of being filtered by intent and capacity-aware scoring.",
      systemBuilt: "A lead-prioritization workflow that scores inbound leads, enforces strict cutoffs, and routes only high-intent records to SDRs.",
      technicalChallenge: "Choosing thresholds that optimize human bandwidth rather than maximizing a generic model metric divorced from staffing limits.",
      outcome: "A lead-routing policy that protects SDR capacity and improves attention on the most conversion-likely prospects.",
      whyMatters: "Demonstrates the operational side of classification systems - the real value often comes from routing and cutoff policy, not the model alone.",
      related: ["loan-default-risk-prediction", "telecom-churn-prediction", "lead-management-product-launch"]
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
      whyMatters: "Demonstrates the full constraint spectrum of edge AI deployment - model optimization, hardware limitations, offline operation, and field reliability.",
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
      problem: "Yard operations lacked digital visibility - trailer locations, dock status, and schedules were tracked manually.",
      systemBuilt: "A full-stack platform providing real-time trailer tracking, dock scheduling, and operational dashboards for yard managers.",
      technicalChallenge: "Building real-time operational visibility while handling the data complexity of multi-dock, multi-trailer yard operations.",
      outcome: "Production yard management platform providing real-time operational visibility and scheduling for logistics yards.",
      whyMatters: "Shows full-stack platform engineering in logistics - building operational tools that replace manual processes with real-time digital visibility.",
      related: ["enterprise-yms-integration", "adaptive-yard-routing", "nocode-logistics-form-builder"]
    },
"transformerjs-local-retail-copilot": {
  title: "Transformer.js Local Retail Copilot",
  summary: "Browser-based retail copilot running Transformers.js locally for product search, FAQ answering, recommendations, and privacy-first support flows.",
  category: "LLM / RAG / Agentic Systems",
  categorySlug: "llm-rag",
  domain: "Retail / Browser AI",
  type: "Build Breakdown",
  bestFor: ["Frontend AI roles", "E-commerce roles", "Product engineering roles"],
  skills: ["Transformers.js", "Browser Inference", "Local RAG", "Shopify Integration", "Algolia", "PII Redaction"],
  problem: "Retail teams want AI conversion help, but server-side inference on every query increases cost, latency, and data exposure.",
  systemBuilt: "A browser-native assistant using Transformers.js for local understanding plus retrieval-backed support and commerce actions.",
  technicalChallenge: "Keeping the browser experience fast enough while separating safe local reasoning from higher-trust commerce actions.",
  outcome: "A deployable AI widget pattern that keeps the first layer of support and product guidance on the client.",
  whyMatters: "Shows how to turn local inference into a commercial product, not just a demo: model packaging, retrieval, security controls, and operational integrations all have to line up.",
  related: ["brand-tuned-support-assistant", "support-inbox-copilot", "retrieval-tool-use-assistant"]
},
"secure-ai-compliance-control-plane": {
  title: "Secure AI Compliance Control Plane",
  summary: "Governance platform for secure AI delivery, mapping engineering work to NIST SSDF, OWASP practices, and NIST AI RMF controls.",
  category: "DevOps / Infrastructure",
  categorySlug: "devops",
  domain: "AI Security / Governance",
  type: "Architecture Review",
  bestFor: ["Platform security roles", "MLOps roles", "Governance roles"],
  skills: ["NIST SSDF", "NIST AI RMF", "OWASP ASVS", "Threat Modeling", "Security Controls", "Kubernetes Governance"],
  problem: "AI teams often ship prompts, data pipelines, and model endpoints faster than their controls, leaving governance fragmented and hard to prove.",
  systemBuilt: "A control plane that treats AI governance as an engineering workflow with approvals, test evidence, and runtime monitoring.",
  technicalChallenge: "Connecting secure software controls and AI-specific evaluation signals into one approval path without creating pure compliance theatre.",
  outcome: "A defensible operating model for secure AI delivery with auditable artifacts from design through production.",
  whyMatters: "This is the difference between AI governance slides and a real control system engineers can operate every day.",
  related: ["prompt-reliability-workflow", "onprem-comment-intelligence-engine", "openrouter-model-gateway-for-ai-apps"]
},
"gemma-4-macbook-pro-private-knowledge-agent": {
  title: "Gemma 4 MacBook Pro Private Knowledge Agent",
  summary: "Local-first Gemma 4 desktop knowledge agent for sensitive documents, code, and meeting notes with no telemetry by default.",
  category: "LLM / RAG / Agentic Systems",
  categorySlug: "llm-rag",
  domain: "Local AI / Knowledge Work",
  type: "Product Case Study",
  bestFor: ["Applied AI roles", "Desktop product roles", "Private AI roles"],
  skills: ["Gemma 4", "Ollama", "LM Studio", "Local Embeddings", "Document Retrieval", "macOS Keychain"],
  problem: "Knowledge workers want AI acceleration, but hosted model APIs are not acceptable for many private document workflows.",
  systemBuilt: "A local MacBook knowledge agent using Gemma 4, local retrieval, and citation-backed answer generation for sensitive work.",
  technicalChallenge: "Balancing local runtime limits against the expectation that the assistant still feels useful on real private documents and codebases.",
  outcome: "A credible offline AI assistant pattern for professionals who need privacy, citations, and exportable outputs.",
  whyMatters: "Local AI only becomes useful when packaging, permissions, retrieval quality, and export workflows are treated as product concerns, not side notes.",
  related: ["private-search-research-assistant", "windows-offline-ai-app", "retrieval-tool-use-assistant"]
},
"stt-viseme-avatar-sales-trainer": {
  title: "STT + Viseme Avatar Sales Trainer",
  summary: "Interactive avatar coach using STT, TTS, and viseme events to simulate sales conversations and score performance.",
  category: "Real-Time Systems",
  categorySlug: "realtime",
  domain: "Voice AI / Training",
  type: "Build Breakdown",
  bestFor: ["Voice AI roles", "Real-time systems roles", "EdTech roles"],
  skills: ["Speech-to-Text", "Viseme Streaming", "Avatar Animation", "Azure Speech", "Whisper", "TTS Orchestration"],
  problem: "Teams want realistic practice environments, but static lessons and text-only bots do not expose timing, tone, and conversational recovery.",
  systemBuilt: "A real-time coaching loop combining STT, evaluation, TTS, viseme animation, and training analytics.",
  technicalChallenge: "Keeping transcript latency, avatar lip-sync, and coaching usefulness aligned closely enough that the simulation feels believable.",
  outcome: "An avatar-led training product pattern that is measurable, coachable, and reusable across conversation-heavy roles.",
  whyMatters: "This is a good example of multimodal system design where the value comes from coordination between media pipelines, not any one model alone.",
  related: ["realtime-voice-agent", "llm-sales-assistant", "sadtalker-ai-video-presenter"]
},
"agi-case-study-simulator": {
  title: "AGI Case Study Simulator",
  summary: "Scenario-based AGI learning platform that teaches governance tradeoffs, uncertainty, and strategic choices without pretending AGI exists today.",
  category: "AI / ML Systems",
  categorySlug: "ai-ml",
  domain: "AI Education / Governance",
  type: "Product Case Study",
  bestFor: ["AI strategy roles", "EdTech roles", "Policy and governance roles"],
  skills: ["Educational Product Design", "Scenario Modeling", "AI Governance", "Interactive Content Systems", "Assessment Design", "LMS Integration"],
  problem: "AGI discussion is usually either abstract speculation or shallow marketing, which makes it hard for serious learners to build decision literacy.",
  systemBuilt: "A scenario-driven simulator that teaches AGI tradeoffs through decisions, consequences, and structured reporting.",
  technicalChallenge: "Keeping the experience rigorous and engaging without turning uncertain topics into false precision.",
  outcome: "A reusable education product for governance-oriented AGI literacy.",
  whyMatters: "Strong AI communication work is not only about model building. It is also about structuring uncertainty so decisions improve instead of becoming noisier.",
  related: ["agi-vs-ai-interactive-learning-platform", "prompt-reliability-workflow", "secure-ai-compliance-control-plane"]
},
"agi-vs-ai-interactive-learning-platform": {
  title: "AGI vs AI Interactive Learning Platform",
  summary: "A role-based learning platform clarifying the difference between AI, agents, LLMs, and AGI for non-technical decision-makers.",
  category: "AI / ML Systems",
  categorySlug: "ai-ml",
  domain: "AI Education",
  type: "Product Case Study",
  bestFor: ["EdTech roles", "Product roles", "AI strategy roles"],
  skills: ["Curriculum Design", "Interactive Learning", "Product Strategy", "Assessment Logic", "Content Design", "Analytics"],
  problem: "Many decision-makers talk about AI with blurred category boundaries, leading to poor buying, hiring, and strategy decisions.",
  systemBuilt: "A structured interactive curriculum that explains the AI stack through roles, cases, and quizzes.",
  technicalChallenge: "Reducing conceptual confusion without collapsing nuance or overclaiming what current systems can actually do.",
  outcome: "A practical educational product that improves AI vocabulary and planning literacy.",
  whyMatters: "Communication clarity around AI categories is increasingly a product and strategy skill, not just an educational nicety.",
  related: ["agi-case-study-simulator", "unified-course-management-platform", "prompt-reliability-workflow"]
},
"vision-model-quality-inspection-suite": {
  title: "Vision Model Quality Inspection Suite",
  summary: "A multi-surface vision inspection platform for defects, counting, safety events, and visual question answering across industrial environments.",
  category: "Computer Vision / Edge AI",
  categorySlug: "cv",
  domain: "Computer Vision / Operations",
  type: "Architecture Review",
  bestFor: ["Computer vision roles", "MLOps roles", "Industrial AI roles"],
  skills: ["Computer Vision Platforms", "Object Detection", "Segmentation", "Visual QA", "RTSP Pipelines", "Alerting Systems"],
  problem: "Many vision projects stop at detection demos and never become operational systems with severity rules, alert routing, and usable reporting.",
  systemBuilt: "A production inspection suite that connects vision outputs to actioning, dashboards, and cross-site business visibility.",
  technicalChallenge: "Making varied vision tasks consistent enough to fit one operational control plane across different environments and camera qualities.",
  outcome: "A reusable quality and safety inspection platform with clear integration paths into business systems.",
  whyMatters: "This is the systems side of vision work: detection quality matters, but deployment, alert logic, and operator trust matter just as much.",
  related: ["edge-ai-container-trailer-detection", "onprem-vision-inference-pipeline", "fastvlm-edge-visual-assistant"]
},
"fastvlm-edge-visual-assistant": {
  title: "FastVLM Edge Visual Assistant",
  summary: "Low-latency edge visual assistant for technicians who point a device at equipment and get repair guidance plus manual retrieval.",
  category: "Computer Vision / Edge AI",
  categorySlug: "cv",
  domain: "Edge Vision / Field Service",
  type: "Build Breakdown",
  bestFor: ["Computer vision roles", "Edge product roles", "Field service roles"],
  skills: ["On-Device Vision", "Manual Retrieval", "Field Service UX", "Vector Search", "Inventory Integration", "Edge Deployment"],
  problem: "Technicians lose time moving between equipment, manuals, tickets, and parts systems when diagnosis is slow or network-dependent.",
  systemBuilt: "An edge visual assistant that pairs image understanding with manual retrieval and service workflow updates.",
  technicalChallenge: "Delivering fast enough multimodal behavior on-device while keeping retrieval grounded in service documentation.",
  outcome: "A field-ready assistant pattern for visually grounded support workflows.",
  whyMatters: "It demonstrates that multimodal assistants become valuable when attached to a narrow, high-friction operational loop instead of open-ended chat.",
  related: ["panasonic-toughpad-field-ai-inspector", "vision-model-quality-inspection-suite", "windows-offline-ai-app"]
},
"panasonic-toughpad-field-ai-inspector": {
  title: "Panasonic Toughpad Field AI Inspector",
  summary: "Rugged-device inspection platform for Toughpad and Toughbook deployments with offline AI, GPS capture, and supervisor reporting.",
  category: "Full-Stack / SaaS",
  categorySlug: "fullstack",
  domain: "Field Operations / Rugged Edge",
  type: "Product Case Study",
  bestFor: ["Field systems roles", "Enterprise mobility roles", "Edge AI roles"],
  skills: ["Offline-First Systems", "Rugged Device UX", "GPS Integration", "Barcode and RFID", "Field Inspections", "MDM Readiness"],
  problem: "Rugged field environments need durable AI workflows, but most software assumes always-on connectivity and consumer-device ergonomics.",
  systemBuilt: "A rugged inspection platform that combines offline capture, on-device assistance, and secure supervisor reporting.",
  technicalChallenge: "Bridging rugged hardware constraints with modern AI assistance without making the field workflow fragile.",
  outcome: "A practical enterprise design for rugged AI-assisted inspections.",
  whyMatters: "This is applied edge software: hardware assumptions, sync behavior, and security posture matter more than demo polish.",
  related: ["offline-inspection-capture-platform", "fastvlm-edge-visual-assistant", "windows-offline-ai-app"]
},
"axis-artpec-smart-surveillance-analytics": {
  title: "Axis ARTPEC Smart Surveillance Analytics",
  summary: "Surveillance analytics stack for Axis ARTPEC camera fleets using edge events, VMS workflows, and secure-device assumptions.",
  category: "Computer Vision / Edge AI",
  categorySlug: "cv",
  domain: "Video Analytics / Edge Security",
  type: "Architecture Review",
  bestFor: ["Security platform roles", "Edge analytics roles", "Computer vision roles"],
  skills: ["Video Analytics", "VMS Integration", "MQTT", "ONVIF", "Incident Workflows", "Device Security"],
  problem: "Surveillance systems often treat analytics and device security as separate concerns, even though compromised edge devices break the whole trust model.",
  systemBuilt: "A secure edge-to-incident surveillance architecture for Axis camera fleets.",
  technicalChallenge: "Getting reliable event verification and workflow automation without losing the performance and trust benefits of edge analytics.",
  outcome: "A reference analytics platform that respects both operations needs and device-rooted security constraints.",
  whyMatters: "It shows how camera analytics should be designed as a security system, not just a computer vision pipeline.",
  related: ["hikvision-aiot-camera-intelligence-platform", "rtsp-camera-browser-streaming", "vision-model-quality-inspection-suite"]
},
"hikvision-aiot-camera-intelligence-platform": {
  title: "Hikvision AIoT Camera Intelligence Platform",
  summary: "Hikvision-centric event intelligence platform using ISAPI, enrichment services, dashboards, and site security controls.",
  category: "Computer Vision / Edge AI",
  categorySlug: "cv",
  domain: "Video Analytics / AIoT",
  type: "Architecture Review",
  bestFor: ["Security engineering roles", "AIoT roles", "Computer vision roles"],
  skills: ["ISAPI", "NVR Integration", "Event Enrichment", "Security Hardening", "Dashboard Design", "POS Correlation"],
  problem: "Camera environments produce large event streams, but without enrichment and hardening they become noisy, brittle, and risky to operate.",
  systemBuilt: "A Hikvision-focused AIoT event platform connecting ISAPI metadata to business and security workflows.",
  technicalChallenge: "Merging camera events with business context while keeping the site security posture disciplined enough for enterprise use.",
  outcome: "A more operationally meaningful and defensible analytics layer on top of Hikvision infrastructure.",
  whyMatters: "The interesting work here is not just computer vision. It is how event systems, business context, and security posture are combined into something operators can trust.",
  related: ["axis-artpec-smart-surveillance-analytics", "rtsp-camera-browser-streaming", "openrouter-model-gateway-for-ai-apps"]
},
"openclaw-personal-operations-agent": {
  title: "OpenClaw Personal Operations Agent",
  summary: "Action-oriented personal operations agent that works through chat channels while enforcing permissions and human approval.",
  category: "LLM / RAG / Agentic Systems",
  categorySlug: "llm-rag",
  domain: "Personal AI / Automation",
  type: "Product Case Study",
  bestFor: ["Agent platform roles", "Product roles", "Automation roles"],
  skills: ["Agentic Systems", "Approval Gates", "Calendar Automation", "Email Workflows", "Permission Models", "Audit Trails"],
  problem: "Many assistants can draft or suggest, but fewer can safely execute across personal systems without becoming too risky to trust.",
  systemBuilt: "A chat-native operations agent that takes tool actions under strict permission and approval policy.",
  technicalChallenge: "Making execution convenient enough to be valuable while keeping the action model tight enough to be safe.",
  outcome: "A disciplined personal automation product pattern for high-trust users.",
  whyMatters: "Agent products live or die on action boundaries. This project makes those boundaries the center of the design.",
  related: ["paperclip-ai-company-orchestrator", "n8n-ai-workflow-automation-hub", "retrieval-tool-use-assistant"]
},
"secure-ai-soc-reference-platform": {
  title: "Secure AI SoC Reference Platform",
  summary: "Secure reference platform for edge AI devices spanning secure boot, trusted runtime, encrypted model delivery, OTA, and fleet governance.",
  category: "DevOps / Infrastructure",
  categorySlug: "devops",
  domain: "Edge Security / Embedded AI",
  type: "Architecture Review",
  bestFor: ["Embedded security roles", "Edge platform roles", "Device engineering roles"],
  skills: ["Secure Boot", "Trusted Execution Environments", "SBOM", "OTA Security", "Device Attestation", "Yocto Linux"],
  problem: "Edge AI devices are often designed for capability first and security second, which is costly to fix once hardware ships.",
  systemBuilt: "A secure SoC reference architecture covering trust chain, AI runtime, updates, and fleet operations.",
  technicalChallenge: "Linking embedded security primitives to the realities of model delivery, OTA reliability, and AI application lifecycle.",
  outcome: "A practical blueprint for secure AI device manufacturing and fleet operation.",
  whyMatters: "This is the security discipline that lets edge AI products survive contact with manufacturing, operations, and auditors.",
  related: ["axis-artpec-smart-surveillance-analytics", "secure-ai-compliance-control-plane", "windows-offline-ai-app"]
},
"paperclip-ai-company-orchestrator": {
  title: "Paperclip AI Company Orchestrator",
  summary: "Company-style orchestration layer for AI agents with departments, tickets, budgets, tool calls, reviews, and governance.",
  category: "LLM / RAG / Agentic Systems",
  categorySlug: "llm-rag",
  domain: "Multi-Agent Operations",
  type: "Product Case Study",
  bestFor: ["Agent platform roles", "Operations roles", "Product roles"],
  skills: ["Agent Orchestration", "Multi-Agent Systems", "Budget Governance", "Workflow Design", "Tool Integrations", "Workspace Isolation"],
  problem: "Teams experimenting with agents need coordination and governance once multiple roles, tools, and business outcomes are involved.",
  systemBuilt: "An organization-style operating system for agent teams with goals, tickets, tools, governance, and reporting.",
  technicalChallenge: "Turning multi-agent coordination into something observable, budgeted, and reviewable instead of brittle prompt choreography.",
  outcome: "A serious orchestration pattern for agent-driven operations businesses.",
  whyMatters: "It demonstrates that agent systems need management structures and financial controls when they move beyond toy examples.",
  related: ["openclaw-personal-operations-agent", "n8n-ai-workflow-automation-hub", "openrouter-model-gateway-for-ai-apps"]
},
"asr-meeting-intelligence-platform": {
  title: "ASR Meeting Intelligence Platform",
  summary: "Speech recognition platform for meetings and calls with diarization, summaries, action extraction, CRM sync, and searchable transcripts.",
  category: "Real-Time Systems",
  categorySlug: "realtime",
  domain: "Speech AI / Productivity",
  type: "Build Breakdown",
  bestFor: ["Speech AI roles", "Productivity platform roles", "Applied AI roles"],
  skills: ["Whisper", "Speaker Diarization", "Speech-to-Text", "Summarization", "Action Extraction", "CRM Integration"],
  problem: "Audio is abundant in business, but useful structured memory from that audio is still fragmented across notes, tasks, and CRM systems.",
  systemBuilt: "An ASR intelligence platform that converts meetings into searchable, actionable records.",
  technicalChallenge: "Maintaining transcript utility while handling diarization errors, privacy constraints, and high-risk-domain accuracy expectations.",
  outcome: "A production-ready pattern for turning speech into operational memory.",
  whyMatters: "Speech systems create value when transcription, summarization, search, and follow-up actions are designed as one chain.",
  related: ["realtime-voice-agent", "stt-viseme-avatar-sales-trainer", "openclaw-personal-operations-agent"]
},
"slm-edge-support-agent-why-slm-not-llm": {
  title: "SLM Edge Support Agent - Why SLM, Not LLM",
  summary: "Edge support agent explaining when a small language model is the correct choice over a larger hosted model.",
  category: "LLM / RAG / Agentic Systems",
  categorySlug: "llm-rag",
  domain: "Edge AI / Support",
  type: "Systems Analysis",
  bestFor: ["Edge AI roles", "LLM systems roles", "Platform roles"],
  skills: ["Small Language Models", "Edge Inference", "Confidence Thresholding", "llama.cpp", "ONNX Runtime", "Local RAG"],
  problem: "Teams often default to large hosted models even when the problem is narrow and the cost, privacy, or latency profile clearly argues for a smaller local model.",
  systemBuilt: "A small-model-first support agent with explicit confidence routing and controlled fallback to larger models.",
  technicalChallenge: "Choosing the right model boundary and keeping fallback rare enough that the economics and privacy story still hold.",
  outcome: "A practical architecture for disciplined SLM deployment at the edge.",
  whyMatters: "This project is a useful argument that model choice is a system-design problem, not a popularity contest.",
  related: ["windows-offline-ai-app", "gemma-4-macbook-pro-private-knowledge-agent", "openrouter-model-gateway-for-ai-apps"]
},
"openrouter-model-gateway-for-ai-apps": {
  title: "OpenRouter Model Gateway for AI Apps",
  summary: "Unified model gateway that routes AI requests across providers with policy control, fallback, logging, and budget enforcement.",
  category: "DevOps / Infrastructure",
  categorySlug: "devops",
  domain: "AI Infrastructure",
  type: "Architecture Review",
  bestFor: ["AI infra roles", "Platform roles", "Applied AI roles"],
  skills: ["Model Routing", "OpenRouter", "Policy Engines", "Budget Controls", "Observability", "Fallback Design"],
  problem: "AI products want model choice and reliability, but provider-specific integrations make switching, fallback, and observability expensive to manage.",
  systemBuilt: "A policy-driven model gateway for routing AI requests across providers with one operational layer.",
  technicalChallenge: "Optimizing for cost and reliability without turning the gateway into a black box that teams cannot reason about.",
  outcome: "A flexible infrastructure pattern for multi-model AI applications.",
  whyMatters: "As model ecosystems fragment, routing and governance become competitive engineering capabilities in their own right.",
  related: ["paperclip-ai-company-orchestrator", "secure-ai-compliance-control-plane", "openclaw-personal-operations-agent"]
},
"sadtalker-ai-video-presenter": {
  title: "SadTalker AI Video Presenter",
  summary: "Single-image talking-head video generator for training, explainers, and onboarding content with consent and deepfake controls.",
  category: "Real-Time Systems",
  categorySlug: "realtime",
  domain: "Video AI / Media Automation",
  type: "Build Breakdown",
  bestFor: ["Media AI roles", "Applied AI roles", "EdTech roles"],
  skills: ["SadTalker", "TTS Pipelines", "Subtitle Generation", "Video Post-Processing", "Branding Automation", "Consent Controls"],
  problem: "Video production is slow and expensive for repetitive training or explainer content, but synthetic media products also create misuse risk.",
  systemBuilt: "A talking-head video production pipeline with safety controls, branding, and export automation.",
  technicalChallenge: "Balancing usable synthetic media production with strong enough safety boundaries to prevent obvious abuse paths.",
  outcome: "A practical video automation product pattern for internal and external communications.",
  whyMatters: "It demonstrates how media generation becomes product infrastructure only when safety, review, and publishing workflow are designed in from the start.",
  related: ["stt-viseme-avatar-sales-trainer", "realtime-voice-agent", "paperclip-ai-company-orchestrator"]
},
"n8n-ai-workflow-automation-hub": {
  title: "n8n AI Workflow Automation Hub",
  summary: "Self-hosted workflow automation hub built on n8n for AI-enabled business processes, credential control, and audit visibility.",
  category: "Full-Stack / SaaS",
  categorySlug: "fullstack",
  domain: "Automation / AI Ops",
  type: "Architecture Review",
  bestFor: ["Automation roles", "Platform roles", "Applied AI roles"],
  skills: ["n8n", "Workflow Automation", "Webhook Security", "Credential Management", "AI Node Design", "Business Systems Integration"],
  problem: "Teams want to automate business operations with AI, but they often rebuild workflow plumbing or run insecure self-hosted automation setups.",
  systemBuilt: "A hardened self-hosted workflow hub where AI nodes operate inside real business processes.",
  technicalChallenge: "Combining fast workflow iteration with the security and reliability expectations of production business automation.",
  outcome: "A practical platform pattern for AI-enhanced operations automation.",
  whyMatters: "Automation products succeed when AI is integrated into workflow discipline, not layered on top of broken process design.",
  related: ["openclaw-personal-operations-agent", "paperclip-ai-company-orchestrator", "engagement-triggered-followup-automation"]
},
"chrome-extension-web-scraping-intelligence-agent": {
  title: "Chrome Extension Web Scraping Intelligence Agent",
  summary: "Manifest V3 scraping assistant that extracts structured web data, cleans it with AI, and exports it through controlled integrations.",
  category: "Full-Stack / SaaS",
  categorySlug: "fullstack",
  domain: "Browser Automation / Data Intelligence",
  type: "Build Breakdown",
  bestFor: ["Browser engineering roles", "Growth tooling roles", "Full-stack roles"],
  skills: ["Chrome Extension MV3", "Content Scripts", "Service Workers", "Structured Data Extraction", "Data Cleaning", "AI Classification"],
  problem: "Teams often need structured data from the web, but extension products become risky fast when permissions, transparency, and export handling are sloppy.",
  systemBuilt: "A user-driven scraping extension that extracts, cleans, classifies, and exports web data under constrained permissions.",
  technicalChallenge: "Balancing flexibility in extraction with Chrome extension security boundaries and marketplace trust requirements.",
  outcome: "A practical browser-data intelligence product pattern that can scale into team workflows.",
  whyMatters: "Browser automation is a product surface where engineering quality and trust boundaries are inseparable.",
  related: ["transformerjs-local-retail-copilot", "n8n-ai-workflow-automation-hub", "openclaw-personal-operations-agent"]
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

  function injectLayoutShift() {
    return;
  }

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
    var R = '../../index.html';
    var RESUME = 'http://drive.google.com/file/d/1jET0PqPdHKjui3PRrpxlMgI0cNJIRpjj/view';

    var header = document.createElement('header');
    header.className = 'bc-header';
    header.setAttribute('role', 'banner');
    header.innerHTML =
      '<div class="bc-header-inner">' +
        '<a class="bc-logo" href="' + R + '">Harshit Paunikar</a>' +
        '<nav class="bc-nav" aria-label="Main navigation">' +
          '<a href="' + R + '#about">About</a>' +
          '<a href="' + R + '#projects">Projects</a>' +
          '<a href="' + R + '#skills">Skills</a>' +
          '<a href="' + R + '#education">Education</a>' +
          '<a href="../index.html" class="bc-nav-active">Case Studies</a>' +
          '<a href="' + R + '#contact">Contact</a>' +
        '</nav>' +
        '<a class="bc-header-cta" href="' + RESUME + '" target="_blank" rel="noopener">View Resume</a>' +
        '<button class="bc-nav-toggle" id="bcMenuToggle" aria-label="Toggle navigation" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    var mobileNav = document.createElement('nav');
    mobileNav.className = 'bc-mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    mobileNav.innerHTML =
      '<a href="' + R + '#about">About</a>' +
      '<a href="' + R + '#projects">Projects</a>' +
      '<a href="' + R + '#skills">Skills</a>' +
      '<a href="' + R + '#education">Education</a>' +
      '<a href="../index.html">Case Studies</a>' +
      '<a href="' + R + '#contact">Contact</a>' +
      '<a class="bc-mobile-cta" href="' + RESUME + '" target="_blank" rel="noopener">View Resume</a>';

    document.body.insertBefore(mobileNav, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    var toggle = header.querySelector('.bc-nav-toggle');
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('bc-open');
      toggle.classList.toggle('bc-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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
    var R = '../../index.html';
    var RESUME = 'http://drive.google.com/file/d/1jET0PqPdHKjui3PRrpxlMgI0cNJIRpjj/view';

    var footer = document.createElement('footer');
    footer.className = 'bc-footer';
    footer.setAttribute('role', 'contentinfo');
    footer.innerHTML =
      '<div class="bc-footer-inner">' +
        '<div class="bc-footer-brand">' +
          '<span class="bc-footer-name">Harshit Paunikar</span> - AI/ML Engineer &amp; Full-Stack AI Builder' +
        '</div>' +
        '<div class="bc-footer-links">' +
          '<a href="mailto:paunikarharshit1995@gmail.com">Email</a>' +
          '<a href="tel:+917503217372">Phone</a>' +
          '<a href="https://www.linkedin.com/in/harsh2025" target="_blank" rel="noopener">LinkedIn</a>' +
          '<a href="https://github.com/harshitpaunikar1" target="_blank" rel="noopener">GitHub</a>' +
          '<a href="' + RESUME + '" target="_blank" rel="noopener">Resume</a>' +
        '</div>' +
        '<a class="bc-footer-top" href="#">\u2191 Back to top</a>' +
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
    document.documentElement.classList.add('bc-blog-page');
    document.body.classList.add('bc-blog-page', 'bc-page-' + slugToId(slug));

    // Add main-content id for skip link
    var firstContentEl =
      document.querySelector('.page, .viewport, .console, .article-shell, .grid-container, .article-body, .main-content, body > main') ||
      document.querySelector('header:not(.bc-header)') ||
      document.querySelector('body > div:not(.bc-header):not(.bc-mobile-nav)');
    if (firstContentEl) {
      firstContentEl.id = firstContentEl.id || 'main-content';
      firstContentEl.classList.add('bc-main-shell');
    }

    injectLayoutShift();
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
