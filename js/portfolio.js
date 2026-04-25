var projects = [
  {
    repo: "windows-offline-ai-app",
    title: "Windows CPU-Only Offline AI Application",
    domain: "Logistics",
    desc: "Field teams needed reliable AI on standard Windows tablets where connectivity is patchy. Cloud-only inference caused delays, missed scans, and rising costs. The objective: run custom models locally on CPU, keep work moving without internet, and synchronise structured results securely when connectivity returned.",
    approach: [
      "Mapped field workflows and device limits; prioritised image capture, cropping, OCR, offline storage, background synchronisation",
      "Developed Windows tablet app in .NET with Python micro-services; packaged CPU-tuned models for on-device inference",
      "Optimised models via quantisation, operator fusion, minimal batching to meet accuracy/latency on mid-range CPUs",
      "Implemented preprocessing (crop, contrast, denoise) and local OCR; persisted structured results in SQLite",
      "Built resilient sync: detect connectivity, queue events, deduplicate, encrypt payloads, push automatically when online",
      "Validated through test harnesses and field pilots; tracked throughput, accuracy, power draw; delivered in 2-week increments"
    ],
    skills: [".NET", "Python", "ONNX Runtime", "Tesseract OCR", "SQLite", "Model Quantization", "Edge AI Deployment", "Background Sync Design"]
  },
  {
    repo: "android-edge-vision-logistics",
    title: "Android Edge Vision for Logistics",
    domain: "Logistics",
    desc: "On-device mobile solution for inspections using TensorFlow Lite models optimised for mid-range Android phones, supporting container IDs, PPE compliance, and vehicle defect detection. Teams needed reliable offline detection without specialist hardware.",
    approach: [
      "Aligned with yard teams to prioritise use cases (container IDs, PPE, defects, vehicle details); set acceptance thresholds",
      "Built data pipeline: image collection/annotation, EDA for class balance, augmentation for glare/low-light/occlusion",
      "Trained and exported to TensorFlow Lite with 32/16/8-bit quantisation; added on-device pre/post-processing",
      "Raised precision/recall by tuning IoU and NMS, pruning, threshold calibration; profiled CPU/memory for FPS targets",
      "Set up evaluation harness, telemetry, retraining loop; partnered with Android engineers for offline-first UX"
    ],
    skills: ["TensorFlow Lite", "Model Quantization", "Object Detection", "Non-Maximum Suppression", "Android SDK", "OCR", "Data Annotation", "On-Device Deployment"]
  },
  {
    repo: "adaptive-yard-routing",
    title: "Adaptive Yard Routing",
    domain: "Logistics",
    desc: "Decision engine recommending nearest empty docking spaces and optimal jockey assignment through geofencing, live yard mapping, and business rule optimisation. Reduced dwell times and improved dock utilisation across large logistics sites.",
    approach: [
      "Mapped as-is yard flows with supervisors and drivers; defined SLAs and baseline metrics for dwell, move time, dock utilisation",
      "Consolidated yard state into live map: docks, trailers, jockeys, queues; normalised geofences and check-in events",
      "Built decision engine to find nearest empty docks and assign moves using distance, trailer compatibility, business rules",
      "Delivered guidance UIs for gate, control room, jockey handhelds with one-tap accept/decline, ETA updates, exception capture",
      "Ran shadow pilots and replay tests on historical data; tuned thresholds; instrumented alerts, audit logs, fallbacks",
      "Integrated with TMS/WMS and gate systems; shipped iteratively in 2-week sprints with training and change management"
    ],
    skills: ["Process Mapping", "Routing & Assignment Algorithms", "Geofencing", "Event-Driven Architecture", "API Integration", "Mobile UX Design", "SQL Data Modeling", "Operational Dashboards"]
  },
  {
    repo: "realtime-web-object-detection",
    title: "Real-Time Web Object Detection",
    domain: "Logistics",
    desc: "Browser-based detection application enabling operators to identify objects in real-time with instant bounding boxes and audit-ready evidence capture for supervisors. Eliminates the need for native apps while providing production-grade detection.",
    approach: [
      "Ran discovery with operations to define object classes, camera angles, alert thresholds, and user journeys",
      "Prepared training dataset; applied augmentation; trained custom detection model tuned for commodity cameras",
      "Built Python Flask backend with SQLite for lightweight persistence of detections, crops, timestamps, user actions",
      "Implemented secure HTML5 camera access to stream video, perform inference, draw bounding boxes in-browser",
      "Validated with held-out test set and field trials; measured precision/recall and false positive rates",
      "Delivered in sprints with weekly demos; added role-based access, analytics, export for detection review"
    ],
    skills: ["Python", "Flask", "SQLite", "OpenCV", "Object Detection", "Model Training", "HTML5 Camera APIs", "REST API Design"]
  },
  {
    repo: "yard-management-platform",
    title: "Yard Management Platform",
    domain: "Logistics",
    desc: "Configurable workflow system providing real-time yard visibility across arrival, departure, dispatch, and inspection processes with live dashboards and compliance audit trails. Designed for multi-client deployment with per-site customisation.",
    approach: [
      "Mapped end-to-end yard processes (arrival, departure, dispatch, checks, inspections) with operations; defined KPIs",
      "Captured data scope from gate logs, checklists, system events; standardized entities (trailer, dock, move, exception)",
      "Customized workflows and user stories per client to mirror real-world roles, SLAs, and approval paths",
      "Designed real-time updates and live dashboards to surface queue lengths, turn times, exceptions with drill-downs",
      "Implemented validation and reconciliation rules to reduce data gaps; added audit trails for compliance reviews",
      "Delivered iteratively with sprint demos, UAT, user training and continuous improvement reporting"
    ],
    skills: ["Process Mapping", "User Story Mapping", "Workflow Customization", "Data Modeling", "SQL", "Python", "ETL Development", "Real-Time Dashboards"]
  },
  {
    repo: "edge-ai-container-trailer-detection",
    title: "Edge AI Container & Trailer Detection",
    domain: "Logistics",
    desc: "Automated detection system for yard operations using computer vision, processing edge camera feeds to identify containers and trailers without expanding network infrastructure. Reduced manual yard checks and improved turnaround times.",
    approach: [
      "Clarified stakeholder goals; defined detection targets (container presence, trailer status, lane/zone context) and acceptance criteria",
      "Built representative dataset from wall-mounted cameras; curated scenes across day/night, weather, and occlusion",
      "Trained object-detection model and optimised for camera hardware; applied quantisation to meet latency and power limits",
      "Validated with hold-out data and live pilots; monitored precision/recall, tuned thresholds, hardened edge cases",
      "Engineered edge pipeline to extract events, cache locally, transmit derived data with retries and health checks",
      "Delivered in agile sprints with demos; documented results; managed tasks across internal and client teams"
    ],
    skills: ["Computer Vision", "Edge AI Deployment", "Object Detection", "Model Quantization", "Data Annotation", "Model Evaluation", "Event-Driven Integration", "Agile Task Management"]
  },
  {
    repo: "enterprise-yms-integration",
    title: "Enterprise YMS Integration for Logistics",
    domain: "Logistics",
    desc: "Secure, scalable integration backbone synchronising the yard management platform with ERP, WMS, finance, and recognition systems in real-time. Reduced manual data entry and enabled plug-and-play onboarding for enterprise clients.",
    approach: [
      "Ran discovery with operations and IT to map events (arrival, gate-in, dock assignment, yard move) and define data contracts",
      "Designed canonical data model for orders, loads, assets; defined idempotent APIs, webhooks, event streaming",
      "Built connectors to ERP, WMS, recognition systems via REST/JSON, SFTP, queues with transformation and dead-letter handling",
      "Strengthened security: SSO/OAuth2, role-based access, encryption, audit logging, tenant isolation for SaaS deployment",
      "Proved reliability with load/stress tests, failover drills, UAT; instrumented tracing/metrics/alerts",
      "Delivered in sprints with CI/CD, canary releases, rollback; set SLAs for latency and uptime"
    ],
    skills: ["Enterprise System Integration", "REST APIs & Webhooks", "Data Mapping & ETL", "Event-Driven Architecture", "OAuth2/SSO & RBAC", "SaaS Multi-Tenancy", "Performance Testing", "CI/CD & Observability"]
  },
  {
    repo: "nocode-logistics-form-builder",
    title: "No-Code Logistics Form Builder",
    domain: "Logistics",
    desc: "Self-serve platform for operations teams to design and deploy forms, task bundles, and scheduled checks without developer involvement. Cut form deployment time from days to hours and standardised data capture across sites.",
    approach: [
      "Conducted discovery with operations to map form use-cases, roles, and approval paths",
      "Designed schema-driven engine to render dynamic fields, validations, and conditional logic",
      "Enabled task templates by grouping forms with due dates, dependencies, and assignees",
      "Implemented scheduling with recurring jobs and notifications for time-bound activities",
      "Built audit trails and analytics for completion rates, turnaround time, and data quality",
      "Delivered iteratively with UAT cycles, refining UX for faster authoring and reuse"
    ],
    skills: ["Product Discovery", "Schema-Driven Form Design", "UX Wireframing", "Workflow Orchestration", "Role-Based Access Control", "REST API Design", "Job Scheduling", "Data Validation & Auditing"]
  },
  {
    repo: "offline-inspection-capture-platform",
    title: "Offline Inspection Capture Platform",
    domain: "Logistics",
    desc: "Offline-first Android app for field inspections with structured evidence capture, mandatory checklists, and background sync. Works on low-spec devices and ensures zero data loss across patchy connectivity environments.",
    approach: [
      "Interviewed field inspectors and supervisors; mapped inspection types, mandatory fields, and photo requirements",
      "Defined data model and offline-first architecture with local storage and background sync design",
      "Built lightweight Android app with in-app camera and streamlined, validated input fields",
      "Configured predefined checklists and form templates; enforced required fields and timestamps",
      "Implemented queued uploads, retry logic, and conflict resolution when connectivity returns",
      "Ran field pilots on low-spec devices; optimised memory, battery, and startup time; iterated"
    ],
    skills: ["Android Development", "Offline-First Architecture", "SQLite Data Storage", "Background Sync", "Data Modeling", "Form Design & Validation", "Image Capture Pipeline", "Field Testing & QA"]
  },
  {
    repo: "scalable-image-processing-api",
    title: "Scalable Image Processing API",
    domain: "Logistics",
    desc: "Unified REST API for AI-led image processing with adaptive batching, async job queues, and observability. Standardised client integration, reduced latency spikes, and aligned cloud costs to actual throughput demand.",
    approach: [
      "Conducted discovery on image types, payload sizes, throughput targets, and acceptable latency/accuracy trade-offs",
      "Designed .NET Core REST gateway with authentication, request validation, and rate limits for safe client integration",
      "Implemented Python workers with batching, parallelism, and back-pressure via asynchronous job queue",
      "Optimised resource usage using concurrency controls, adaptive batching, and caching of intermediate transforms",
      "Built validation using golden image sets, threshold checks, and automated regression tests in CI",
      "Delivered in iterations with load testing, observability dashboards, and handover docs for operations"
    ],
    skills: [".NET Core", "Python", "REST API Design", "Microservices Architecture", "Async Processing", "Image Preprocessing", "Model Serving", "Performance Profiling", "Logging & Monitoring"]
  },
  {
    repo: "model-free-vertical-text-ocr",
    title: "Model-Free Vertical Text OCR",
    domain: "Logistics",
    desc: "Training-free OCR pipeline for vertically-stacked shipping labels and pallet stickers using adaptive thresholding, EMNIST character matching, and spatial heuristics. Eliminated missed scans caused by rotated text without model retraining.",
    approach: [
      "Audited large image inflow to map label styles, text orientations, and lighting variability across sites",
      "Normalised inputs by converting to monochrome; applied adaptive thresholding and morphological filters",
      "Detected candidate glyph regions; used EMNIST character references for lightweight matching without custom training",
      "Clustered and merged overlapping bounding boxes; grouped stacked lines into coherent blocks using spatial heuristics",
      "Re-ordered vertical characters into horizontal sequences; passed cleaned crops to Tesseract for final extraction",
      "Built validation loop with spot-checks, confusion analysis, error tagging; iterated until target quality was met"
    ],
    skills: ["OpenCV", "Image Preprocessing", "EMNIST Character Matching", "Tesseract OCR", "Bounding Box Clustering", "Morphological Operations", "Data Pipeline Design", "Error Analysis & QA"]
  },
  {
    repo: "ttil-barcode-coldchain-tracking",
    title: "TTIL Barcode Cold-Chain Tracking",
    domain: "Logistics / Cold Chain",
    desc: "Mobile-first barcode scanning system pairing Time Temperature Indicator Labels with Android app capture at each cold-chain checkpoint. Produced an auditable temperature trail and eliminated costly dedicated scanners for chemical shipments.",
    approach: [
      "Mapped shipment flows and defined scan checkpoints, acceptance thresholds, and exception paths aligned to SOPs",
      "Selected suitable TTIL labels and encoded item/lot IDs; standardised label placement and scan prompts",
      "Built Android app with in-app barcode scanning (no external hardware), stamping each scan with time, location, user",
      "Designed offline-first data model with local store, background sync, and export/API options for audits",
      "Ran controlled pilots to simulate excursions, validated data integrity, refined workflows and training materials",
      "Rolled out in phases; instrumented usage metrics; established cost model versus dedicated scanner approach"
    ],
    skills: ["Android Development", "Barcode Scanning", "Time-Temperature Indicator Integration", "Offline-First Architecture", "SQLite Data Modeling", "API Design", "Field UX Design", "QA & UAT"]
  },
  {
    repo: "onprem-vision-inference-pipeline",
    title: "On-Prem Vision Inference Pipeline",
    domain: "Manufacturing",
    desc: "Private, on-premises vision inference pipeline using Gemma 3 and Llama 3.1 for structured output extraction from images. Addressed strict data-privacy constraints while standardising outputs into JSON schema for downstream systems.",
    approach: [
      "Mapped image types, user goals, edge cases, and system interfaces through discovery workshops",
      "Hosted Gemma 3 and Llama 3.1 on secure on-prem servers for low-latency, private inference",
      "Built prompt pipeline with task-specific templates and guardrails to steer extraction accuracy",
      "Normalised outputs into predefined JSON schema; enforced validation rules and fallbacks",
      "Exposed ingestion via API gateway that buffered, authenticated, and pushed to database",
      "Enabled no-code prompt configuration, A/B tests, and monitoring; iterated weekly with test sets"
    ],
    skills: ["Gemma 3", "Llama 3.1", "Prompt Engineering", "Computer Vision Inference", "JSON Schema Design", "API Gateway Integration", "Python", "Data Privacy & Security"]
  },
  {
    repo: "npa-risk-prediction",
    title: "NPA Risk Prediction",
    domain: "Banking",
    desc: "Predictive default probability model for retail lending incorporating bureau history and delinquencies. Probabilities converted into risk-tiered scorecards enabling faster approvals with reduced credit loss exposure.",
    approach: [
      "Ran discovery with risk, underwriting, and collections teams to align default definitions and compliant variable use",
      "Unified datasets: bureau history, delinquencies, income/obligations, application attributes into a governed feature store",
      "Engineered features (DTI, utilisation, enquiry velocity, payment consistency); benchmarked logistic regression and ensembles",
      "Addressed class imbalance with stratified folds and cost-sensitive learning; validated via AUC, KS, lift charts, back-testing",
      "Converted probabilities into scorecard with risk tiers, cut-offs, policy overlays for approve/decline and pricing",
      "Deployed scoring API; established monitoring (PSI, drift, calibration), weekly refresh, and governance for re-training"
    ],
    skills: ["Credit Risk Modelling", "Feature Engineering", "Logistic Regression", "Gradient Boosting", "Imbalanced Learning", "Cross-Validation", "Scorecard Development", "Model Monitoring"]
  },
  {
    repo: "onprem-comment-intelligence-engine",
    title: "On-Prem Comment Intelligence Engine",
    domain: "Marketing / AdTech",
    desc: "Private, always-on assistant for comment streams using local Gemma-31B with retrieval-augmented generation for summarisation and Q&A. No data leaves the organisation; all inference runs on local infrastructure.",
    approach: [
      "Mapped comment sources, triage rules, and escalation paths with stakeholders; defined critical signals and SLAs",
      "Connected to internal database; indexed updates for retrieval so answers reflect most recent records",
      "Hosted Gemma-31B locally; built RAG pipeline to summarise threads and answer questions without data egress",
      "Implemented message-queue workflow to prioritise requests, stream responses, route negotiation items to humans",
      "Added proactive alerts: when critical details appear, prompt users to clarify, trigger follow-up actions; full audit trail",
      "Containerised services with Docker and deployed on Heroku; validated with golden sets, precision/recall, latency budgets"
    ],
    skills: ["Local LLM Hosting", "Retrieval-Augmented Generation", "Text Summarisation", "Intent Classification", "Message Queue Architecture", "Docker", "Heroku Deployment", "Data Privacy Controls"]
  },
  {
    repo: "llm-sales-assistant",
    title: "LLM Sales Assistant",
    domain: "SalesTech",
    desc: "On-premises language model automating discovery conversations with intent classification, template-driven dialogue flow, and human escalation for negotiation. Full traceable transcripts and on-prem deployment ensure data sovereignty.",
    approach: [
      "Mapped discovery steps and negotiation handoffs with sales ops; defined intents, entities, guardrails using real transcripts",
      "Built on-prem language stack with local embeddings and tokenization; implemented template-driven dialog flow",
      "Optimised models for CPU-only inference; set confidence thresholds; designed human escalation with traceable transcripts",
      "Validated in sandbox and pilot; measured intent accuracy and containment; tuned prompts and fallback behaviour",
      "Delivered in sprints; instrumented analytics for time-to-first-response, drop-offs, and handoff quality"
    ],
    skills: ["Embeddings", "Tokenization", "Intent Classification", "Dialogue Flow Design", "CPU Inference Optimization", "On-Prem Deployment", "Prompt Engineering", "Python", "Hugging Face Transformers"]
  },
  {
    repo: "realtime-marketing-decision-engine",
    title: "Real-Time Marketing Decision Engine",
    domain: "Marketing",
    desc: "Framework transforming weekly reporting into real-time evidence-based decisions through unified feedback collection, KPI taxonomy, and role-based dashboards with alerts. Delivered +56–82% revenue lift across client engagements.",
    approach: [
      "Ran stakeholder workshops to map decision moments, prioritise use-cases, inventory feedback sources (surveys, chat, social, CRM)",
      "Defined KPI taxonomy and lifecycle: clear formulas, owners, thresholds, and review cadence aligned to marketing funnel",
      "Modeled unified data; built near-real-time pipelines to merge feedback, channel performance, and spend",
      "Delivered role-based dashboards with alerts, drill-downs, cohorts, and scenario views to guide actions",
      "Instituted data quality checks, backtesting, A/B readouts to validate KPI stability and reproducibility",
      "Adopted sprint delivery, playbooks, and training; set governance for KPI changes and stewardship"
    ],
    skills: ["KPI Framework Design", "Customer Feedback Analytics", "Data Modeling", "ETL/ELT Pipelines", "Real-Time Dashboards", "A/B Testing", "Segmentation & Cohort Analysis", "Data Quality Assurance"]
  },
  {
    repo: "sponsorsync-influencer-marketplace",
    title: "SponsorSync Influencer Marketplace",
    domain: "Marketing / AdTech",
    desc: "Unified platform matching brands with creators through brief intake, search/filter, proposal submission, in-app negotiation, and LLM-powered Q&A summaries. Reduced time-to-deal and brought transparency to campaign negotiations.",
    approach: [
      "Conducted discovery workshops to map sponsor and influencer journeys, clarifying roles, workflows, and decision points",
      "Designed Vue.js single-page app with brief intake, search/filter, proposal, and negotiation messaging",
      "Built Flask REST API with SQLite for MVP speed; structured schemas for briefs, bids, chats, and audit trails",
      "Integrated LLM service to auto-summarise briefs and power Q&A bot so creators can query requirements",
      "Implemented notifications, rate cards, and dispute/flagging to keep negotiations transparent",
      "Performed usability tests and closed-loop fixes; staged rollout with instrumentation for activation and time-to-deal"
    ],
    skills: ["Product Discovery", "UX Wireframing", "Vue.js", "Flask REST APIs", "SQLite", "Data Modeling", "LLM Integration", "Agile Delivery"]
  },
  {
    repo: "engagement-triggered-followup-automation",
    title: "Engagement-Triggered Follow-Up Automation",
    domain: "Marketing / AdTech",
    desc: "Rules-driven automation system triggering personalised follow-up emails based on engagement signals: opens, clicks, page visits, or inactivity. Reduced manual workload and accelerated pipeline velocity for sales teams.",
    approach: [
      "Mapped buyer journey and defined follow-up SLAs by segment and stage",
      "Captured engagement signals (opens, clicks, visits, replies, inactivity) and built lightweight lead score",
      "Designed rules engine/state machine to pick templates and timing; added throttling, quiet hours, opt-outs",
      "Implemented Python workflows with scheduled jobs, CRM/API connectors, and dynamic HTML templates",
      "Ran QA with seed mailboxes, A/B tests, monitoring for bounces, spam indicators, and latency",
      "Phased rollout with training and performance dashboard for audits and continuous tuning"
    ],
    skills: ["Python Automation", "CRM Integration", "Email Template Design", "Rules Engine Design", "Workflow Orchestration", "A/B Testing", "SQL Data Handling", "Monitoring & Alerting"]
  },
  {
    repo: "realtime-sales-signal-dashboard",
    title: "Real-Time Sales Signal Dashboard",
    domain: "Marketing / AdTech",
    desc: "Live Tableau dashboard consolidating field rep inputs, territory heatmaps, and pipeline velocity into a single view for marketing leaders. Replaced delayed spreadsheets and enabled fast spend reallocation on high-intent leads.",
    approach: [
      "Aligned on KPIs with sales and marketing leaders; mapped data owners, cadence, and decision points",
      "Connected mobile sales inputs via secure APIs/webhooks; standardised payloads and identifiers across sources",
      "Built Python streaming layer to validate, deduplicate, and enrich events before storage",
      "Modeled Tableau dashboard for real-time views: territory heatmaps, pipeline velocity, and alert tiles",
      "Implemented data quality checks, timestamp drift monitoring, and audit logs; ran UAT with power users",
      "Delivered weekly increments; documented playbooks and onboarded users with role-based views"
    ],
    skills: ["Python", "Tableau", "Real-Time Data Ingestion", "API Integration", "Data Modeling", "Dashboard Design", "Event-Driven Architecture", "SQL"]
  },
  {
    repo: "marketing-process-analytics-dashboard",
    title: "Marketing Process Analytics Dashboard",
    domain: "Marketing / AdTech",
    desc: "Centralised analytics and automation platform for multi-step marketing campaigns with EOD/SOD summaries, RFM segmentation, and process throughput views. Replaced manual email handoffs and scattered tracking.",
    approach: [
      "Ran discovery with marketing and ops to map workflows, define EOD/SOD KPIs, align on DAU/MAU metrics",
      "Unified email activity data (opens, clicks, replies, bounces) and built governed pipeline with ID stitching",
      "Automated email flows using rules and triggers; logged every step for auditability and time-to-action measurement",
      "Implemented analytics: RFM segmentation, process throughput/latency views, conversion funnels, anomaly alerts",
      "Delivered role-based dashboard with drill-downs, self-serve filters, and scheduled EOD/SOD summaries",
      "Operated in iterative sprints with UAT, documentation, and enablement sessions for smooth adoption"
    ],
    skills: ["Marketing Automation", "Data Pipeline Design", "SQL Data Modeling", "RFM Segmentation", "Cohort Analysis", "Funnel Analytics", "Dashboard Design", "Stakeholder Training"]
  },
  {
    repo: "unified-analytics-lead-growth",
    title: "Unified Analytics & Lead Growth",
    domain: "Marketing / AdTech",
    desc: "End-to-end analytics backbone replacing scattered spreadsheets with a governed data warehouse, star-schema marts, and self-serve dashboards. Backtested and improved lead-scoring to diagnose and grow campaign performance.",
    approach: [
      "Audited existing databases and workflows; documented entities, lineage, and data owners to establish shared source of truth",
      "Redesigned data architecture (staging, warehouse, marts) with star schema for marketing, sales, and funnel analytics",
      "Built ELT/ETL pipelines from operational systems; standardised cleaning, enrichment, and slowly changing dimensions",
      "Orchestrated pipelines with scheduling, alerts, and data quality checks (freshness, completeness, reconciliation)",
      "Backtested and improved lead-scoring using previous-year data; added features and set thresholds for action",
      "Delivered self-serve dashboards for executives and operators; iterated in sprints with UAT and sign-offs"
    ],
    skills: ["Data Modeling", "ETL Development", "Data Warehousing", "SQL Optimization", "Python Scripting", "Dashboard Design", "Workflow Automation", "Stakeholder Workshops"]
  },
  {
    repo: "carsharing-availability-eda",
    title: "Car-Sharing Availability Uplift via EDA",
    domain: "Mobility / Transportation",
    desc: "Exploratory analysis of booking cancellations and supply-demand gaps on an online car-sharing platform. Identified root causes by hour, zone, and vehicle type, leading to actionable supply-rebalancing and pricing guardrails.",
    approach: [
      "Aligned on business questions with Ops, Supply, and Customer Care; defined cancellation types and service-level thresholds",
      "Audited data from bookings, driver logs, inventory, pricing, support tickets; reconciled IDs and timestamps",
      "Profiled data quality; fixed missing/duplicate rides, standardised geo and time zones",
      "Explored patterns by hour, zone, vehicle, promo using cohort/funnel views, seasonality charts, geospatial heatmaps",
      "Modeled predictors of cancellation (lead time, surge ratio, driver distance) and identified supply rebalancing tipping points",
      "Validated insights with back-tests; packaged actions (dynamic supply shifts, pricing guardrails) and KPI dashboard"
    ],
    skills: ["Exploratory Data Analysis", "SQL Data Modeling", "Python (Pandas)", "Time-Series Analysis", "Cohort & Funnel Analysis", "Geospatial Mapping", "Data Cleaning & Validation", "Hypothesis Testing"]
  },
  {
    repo: "data-driven-aid-allocation-model",
    title: "Data-Driven Aid Allocation Model",
    domain: "Financial Analysis",
    desc: "Transparent, evidence-led model for NGOs to allocate funds across countries using multi-criteria scoring, clustering, and linear programming under budget constraints. Replaced subjective spreadsheet decisions with auditable rationale.",
    approach: [
      "Ran discovery with program, finance, and M&E teams to define objectives, constraints, and ethical guardrails",
      "Built country-level dataset from public sources (World Bank, UN, WHO) spanning poverty, fragility, health access",
      "Normalised and imputed indicators; reduced redundancy via PCA; set participatory weights using AHP",
      "Scored and clustered countries into peer bands; stress-tested scenarios for disasters, conflict spikes, currency swings",
      "Optimised allocation using linear programming under budget and policy constraints; generated baseline and alternative splits",
      "Delivered dashboard with maps, factor-contribution explainability, sensitivity sliders; monthly refresh with back-testing"
    ],
    skills: ["Data Engineering", "Indicator Normalization", "Multi-Criteria Decision Analysis", "PCA", "Linear Programming", "Clustering Analysis", "Sensitivity Analysis", "Dashboard Design"]
  },
  {
    repo: "local-business-profit-planning",
    title: "Local Business Profit Planning",
    domain: "Business Analysis",
    desc: "Data-backed planning service for neighbourhood businesses, consolidating records, profiling seasonality, quantifying product and customer profitability, and building simple what-if planning models to improve margins and working capital.",
    approach: [
      "Engaged nearby organisations; mapped processes, objectives, constraints, and decision cadence via structured interviews",
      "Consolidated ledgers, invoices, POS exports, and surveys; cleaned and reconciled into analysis-ready dataset",
      "Assessed seasonality and cohorts; quantified product/customer profitability and drivers of margin leakage and stockouts",
      "Built planning model for pricing, promotions, reorder levels with what-if scenarios and playbooks",
      "Presented insights via brief reports and dashboards; set weekly reviews, owner approvals, and action trackers",
      "Monitored outcomes and captured feedback; iterated recommendations after validating results against targets"
    ],
    skills: ["Data Collection & Cleaning", "Exploratory Data Analysis", "Customer Segmentation", "Time-Series Forecasting", "KPI Design & Tracking", "Power BI/Tableau", "SQL & Python", "Stakeholder Facilitation"]
  },
  {
    repo: "lead-management-product-launch",
    title: "Lead Management Product Launch",
    domain: "Project Management",
    desc: "End-to-end productisation of an internal lead management tool, including cost modelling, MVP scoping, sprint delivery, and production deployment with analytics. Turned a working internal tool into a market-ready product.",
    approach: [
      "Conducted discovery interviews and mapped end-to-end lead workflows to define must-have outcomes and adoption blockers",
      "Built cost model (engineering, hosting, support) to set price floors and target margins with sensitivity scenarios",
      "Prioritised lean MVP and backlog; wrote acceptance criteria tied to user jobs and measurable outcomes",
      "Planned two-week sprints, ran demos, captured feedback for rapid iteration without derailing scope",
      "Set up staging to production pipeline; executed server deployment with configuration management and rollback playbooks",
      "Instrumented usage analytics and support KPIs to validate value, inform roadmap, and guide post-launch optimisation"
    ],
    skills: ["Agile Scrum", "Product Roadmapping", "Cost Modeling", "User Research", "Backlog Management", "Sprint Planning", "Server Deployment & CI/CD", "Analytics & Instrumentation"]
  },
  {
    repo: "unified-course-management-platform",
    title: "Unified Course Management Platform",
    domain: "EdTech",
    desc: "All-in-one learning platform for institutes and training businesses, covering enrolment, content authoring, scheduling, assessments, certifications, payments, and learner analytics. Replaced multiple disconnected tools with a single source of truth.",
    approach: [
      "Mapped workflows with admins, instructors, and learners; captured pain points; prioritised MVP aligned to business goals",
      "Designed scalable data model for courses, modules, users, enrolments, assessments, certifications, and payments",
      "Architected modular web app with role-based access, secure APIs, content authoring, and payment integration",
      "Built assessment engine (quizzes, assignments, rubrics), gradebook, attendance, and automated certificate issuance",
      "Instrumented analytics for engagement, completion, cohort health; added alerts for at-risk learners and A/B tests",
      "Executed QA with automated tests, accessibility checks, load testing; ran sprint demos, UAT, and phased rollout"
    ],
    skills: ["Product Discovery", "Requirements Elicitation", "Information Architecture", "UX/UI Design", "Relational Data Modeling", "API Design", "Role-Based Access Control", "Agile Delivery"]
  },
  {
    repo: "brand-tuned-support-assistant",
    title: "Brand-Tuned Support Assistant",
    domain: "E-commerce / Customer Support",
    desc: "Lightweight fine-tuning workflow for turning messy support conversations into a customer-support assistant that answers in the company's tone. Balanced local small-model adaptation with a hosted baseline so the team could compare control, cost, and response quality honestly.",
    approach: [
      "Audited support chats, FAQs, ticket labels, and tone inconsistencies to define what the assistant should learn and what data needed masking",
      "Built data-preparation flow to remove duplicates, strip sensitive content, and convert cleaned conversations into instruction-response examples",
      "Selected small-model path around TinyLlama and Qwen-class models with LoRA-style tuning to stay within limited hardware constraints",
      "Used Transformers, Datasets, and PEFT to fine-tune adapters, validate outputs, and compare behaviour against Gemini Flash as a baseline",
      "Focused evaluation on correctness, tone consistency, and domain fit so the client could decide whether local tuning was worth the effort",
      "Wrapped the tuned model path in a simple FastAPI service to make downstream integration realistic for future product use"
    ],
    skills: ["LLM Fine-Tuning", "Transformers", "PEFT / LoRA", "TinyLlama / Qwen", "Instruction Dataset Design", "Data Cleaning", "Gemini Flash Benchmarking", "FastAPI"]
  },
  {
    repo: "medical-evidence-qa-assistant",
    title: "Medical Evidence Q&A Assistant",
    domain: "Healthcare / MedTech",
    desc: "Safety-aware medical question-answering system that retrieves trusted evidence before responding, cites its sources, and refuses unsupported or risky questions. Designed as an education-focused assistant rather than a diagnosis engine.",
    approach: [
      "Defined trusted-source scope around medical PDFs, guidelines, and PubMed-style references so the system answered from controlled evidence only",
      "Built ingestion and parsing flow with PDF extraction, cleanup, chunking, embeddings, and Qdrant indexing for retrieval-ready medical content",
      "Added reranking so the strongest evidence surfaced first before answer generation, improving citation quality and grounding",
      "Constrained Gemini Flash to answer only from retrieved context and designed response patterns for citations, uncertainty, and disclaimers",
      "Treated refusal behaviour as a product feature by warning or declining when evidence was weak or the request moved into unsafe territory",
      "Exposed the pipeline through FastAPI so the assistant could be integrated into a lightweight healthcare education workflow"
    ],
    skills: ["RAG", "PyMuPDF", "MiniLM Embeddings", "Qdrant", "Reranking", "Gemini Flash", "Safety Guardrails", "FastAPI"]
  },
  {
    repo: "support-inbox-copilot",
    title: "Support Inbox Copilot",
    domain: "E-commerce / Support Ops",
    desc: "Human-in-the-loop email support workflow that reads incoming Gmail messages, classifies intent, drafts responses, and flags urgent cases before anything is sent. Reduced repetitive inbox work without giving up review control.",
    approach: [
      "Mapped common support cases such as order status, refunds, and shipping delays to decide which emails were safe to assist and which needed escalation",
      "Used n8n to orchestrate Gmail intake, message parsing, AI classification, reply drafting, and downstream review steps without a heavy custom backend",
      "Designed Gemini Flash prompts to separate intent detection from response drafting so the workflow stayed safer on messy customer messages",
      "Added urgency logic and Slack-style alerting for sensitive cases where fast human review mattered more than automation speed",
      "Kept a human approval step in the middle of the flow so the team could edit, approve, or stop replies before sending",
      "Logged outputs and decisions in Google Sheets to preserve an audit trail for missed priorities, bad drafts, and workflow tuning"
    ],
    skills: ["n8n", "Gmail Automation", "Gemini Flash", "Human-in-the-Loop Workflow Design", "Slack Alerting", "Google Sheets Logging", "Prompt Design", "Support Operations Automation"]
  },
  {
    repo: "reliable-browser-video-calling",
    title: "Reliable Browser Video Calling",
    domain: "EdTech / Real-Time Communication",
    desc: "One-to-one browser calling system built for networks where direct peer connections often fail. Used WebRTC for live media, room-based signaling for session setup, and TURN fallback so calls still connected on restrictive Wi-Fi or office networks.",
    approach: [
      "Framed the problem around one-to-one tutor and student calls, keeping the first version focused on dependable connection setup rather than feature sprawl",
      "Built signaling flow in Node.js and Socket.IO to handle room joins, offer-answer exchange, ICE candidate sharing, and connection-state visibility",
      "Configured STUN and Coturn-backed TURN support so browsers attempted direct media first and relayed only when network conditions required it",
      "Secured the call path behind HTTPS and Nginx because browser camera and microphone access depend on a trusted transport setup",
      "Added room-status feedback so users could understand whether they were connecting directly, waiting on negotiation, or falling back to relay",
      "Kept the architecture intentionally small and explainable, making NAT and firewall handling the core engineering story instead of hiding it"
    ],
    skills: ["WebRTC", "Node.js", "Socket.IO Signaling", "Coturn / TURN Infrastructure", "STUN / ICE", "Nginx", "HTTPS / TLS", "Real-Time Session Design"]
  },
  {
    repo: "rtsp-camera-browser-streaming",
    title: "RTSP Camera Browser Streaming",
    domain: "Video Infrastructure / Security",
    desc: "Low-latency camera-to-browser streaming pipeline for existing RTSP feeds, using GStreamer to ingest and adapt the media path before delivering it to a normal browser over WebRTC. Added optional recording without overloading the live path.",
    approach: [
      "Started from the client's existing RTSP camera setup and focused on fixing the last-mile browser experience rather than replacing the camera system",
      "Used GStreamer to ingest, decode, transform, and re-encode only when browser compatibility required it, keeping latency as low as practical",
      "Delivered the live stream through WebRTC so operators could open the feed in a browser instead of relying on specialist desktop viewers",
      "Coordinated browser connection setup through a lightweight Node.js signaling layer, with Coturn available for difficult network paths",
      "Included optional FFmpeg recording so the same pipeline could support demo playback or evidence capture without redefining the streaming flow",
      "Logged stream health and failure points to make camera disconnects, browser issues, and pipeline instability easier to diagnose"
    ],
    skills: ["RTSP", "GStreamer", "WebRTC", "Node.js", "Coturn", "FFmpeg Recording", "Low-Latency Streaming", "Stream Health Monitoring"]
  },
  {
    repo: "edge-ai-runtime-evaluation",
    title: "Edge AI Runtime Evaluation",
    domain: "Logistics / Edge AI",
    desc: "On-device AI evaluation project comparing practical deployment paths for Jetson- or Snapdragon-class hardware. Focused on runtime choice, model conversion, and measuring whether a small model could run smoothly within real device limits.",
    approach: [
      "Scoped the work around one target device at a time so runtime tuning and packaging stayed realistic instead of becoming an overly broad benchmark exercise",
      "Selected compact models and input paths that could support live demos while fitting tight memory and power budgets on edge hardware",
      "Prepared device-friendly model exports and compared runtime options such as ONNX Runtime, TensorRT, and TensorFlow Lite based on the chosen target",
      "Integrated OpenCV-driven live or sample input so the demo showed local inference behaviour rather than only offline benchmark numbers",
      "Measured latency, memory use, and power behaviour together because edge-readiness depends on the overall operating profile, not raw speed alone",
      "Documented the tradeoffs clearly so the client could choose a runtime and device path based on deployability rather than hype"
    ],
    skills: ["Edge AI Deployment", "ONNX Runtime", "TensorRT", "TensorFlow Lite", "OpenCV", "Model Conversion", "Latency / Power Profiling", "Runtime Optimization"]
  },
  {
    repo: "prompt-reliability-workflow",
    title: "Prompt Reliability Workflow",
    domain: "Operations / GenAI",
    desc: "Prompt testing project for repeated business tasks like summarization, extraction, and support drafting. Turned prompt writing into a repeatable evaluation process so teams could get more stable outputs instead of relying on one-off prompt experiments.",
    approach: [
      "Grouped business tasks by pattern such as summarize, extract, classify, and reply so each task type could use the right prompt structure",
      "Created baseline prompts and structured variations using role instructions, few-shot examples, formatting rules, and task-specific wording",
      "Built a lightweight Python test harness to run repeated examples through Gemini Flash and collect outputs across multiple prompt versions",
      "Scored results against simple checks for format stability, completeness, and usefulness instead of trusting a single impressive run",
      "Tracked prompt versions, notes, and scores in Google Sheets so the team could understand why a prompt was selected and reused later",
      "Packaged the best-performing prompts into a reusable library and handbook that made prompt engineering feel operational rather than ad hoc"
    ],
    skills: ["Prompt Engineering", "Prompt Evaluation", "Gemini Flash", "Python Automation", "Google Sheets", "Few-Shot Design", "Output Format Control", "Prompt Library Design"]
  },
  {
    repo: "retrieval-tool-use-assistant",
    title: "Retrieval & Tool-Use Assistant",
    domain: "Internal AI Systems",
    desc: "Assistant orchestration project that combined retrieval, tool calling, short-term memory, and trace logging into one maintainable backend. Designed to decide when each capability was actually needed instead of routing every request through every subsystem.",
    approach: [
      "Broke the assistant into routing, retrieval, tool use, memory, and response generation so the overall flow stayed understandable for a small team",
      "Used LangChain to connect direct-answer paths, Qdrant-backed retrieval, external tool invocation, and recent conversation context in one service",
      "Kept routing intentionally selective so simple questions could be answered directly while document-heavy or tool-dependent requests took richer paths",
      "Stored traces and logs in SQLite so debugging could show what the assistant retrieved, which tool it called, and how it reached an answer",
      "Used Gemini Flash for final reasoning and synthesis after retrieval or tool calls, keeping the answer path grounded but still responsive",
      "Exposed the orchestration through FastAPI so the system behaved like a practical internal service rather than a prototype notebook"
    ],
    skills: ["LangChain", "Gemini Flash", "Qdrant", "FastAPI", "SQLite", "Tool Calling", "Short-Term Memory Design", "Trace Logging"]
  },
  {
    repo: "realtime-voice-agent",
    title: "Real-Time Voice Agent",
    domain: "Voice AI / Real-Time Systems",
    desc: "Room-based voice AI system where a user speaks naturally, the system transcribes the audio, generates a response, and plays it back as speech. Designed to keep the full STT-LLM-TTS loop understandable and fast enough to feel conversational.",
    approach: [
      "Scoped the product to one user and one AI agent in one room so latency and turn-taking quality stayed visible from the beginning",
      "Used LiveKit for real-time room transport, keeping audio capture and playback reliable without building the media layer from scratch",
      "Connected faster-whisper for transcription, Gemini Flash for response generation, and Piper for lightweight speech synthesis",
      "Organized the backend around clear pipeline stages so delays in transcription, reasoning, or speech output could be traced separately",
      "Focused on cumulative latency because even small delays across each stage add up quickly and make voice interactions feel unnatural",
      "Logged room and pipeline events so session behaviour, response timing, and future tuning work had a concrete debugging trail"
    ],
    skills: ["LiveKit", "faster-whisper", "Gemini Flash", "Piper TTS", "FastAPI", "Voice Pipeline Orchestration", "Latency Optimization", "Session Logging"]
  },
  {
    repo: "private-search-research-assistant",
    title: "Private Search Research Assistant",
    domain: "Research / Search",
    desc: "Self-hosted search assistant that aggregates results through SearXNG, removes duplicate links, extracts useful page content, and returns short cited summaries. Built to reduce research friction without hiding the underlying sources.",
    approach: [
      "Started from the client's research workflow and targeted repeated pain points such as too many tabs, repeated links, and slow first-pass reading",
      "Used SearXNG to aggregate results from multiple search sources so the team was not tied to a single commercial search experience",
      "Added deduplication and candidate filtering before summarization so the assistant surfaced fewer but more useful links",
      "Extracted content from selected pages and asked Gemini Flash to write short summaries that still preserved source visibility",
      "Kept citations and links central to the output because the goal was to support research, not replace it with an opaque answer engine",
      "Introduced Redis caching so repeated or similar queries returned faster and felt more practical in day-to-day usage"
    ],
    skills: ["SearXNG", "Python", "Gemini Flash", "Redis", "FastAPI", "Content Extraction", "Deduplication", "Citation-Aware Summarization"]
  },
  {
    repo: "small-team-devops-delivery-pipeline",
    title: "Small-Team DevOps Delivery Pipeline",
    domain: "Platform Engineering / DevOps",
    desc: "Repeatable deployment pipeline for taking an application from developer laptop to a monitored running service. Combined container packaging, CI automation, security scanning, and rollback-aware operations without overengineering the infrastructure.",
    approach: [
      "Framed the deployment problem around small-team practicality, choosing Docker Compose over heavier orchestration because the system size did not justify Kubernetes",
      "Standardized runtime packaging with Docker so the app could move cleanly from local development into a consistent deployment environment",
      "Automated test, build, and release steps through Jenkins to remove fragile manual deployment work and make the process repeatable",
      "Integrated Trivy scanning before deployment so image security checks became part of the normal delivery path instead of an afterthought",
      "Added Prometheus and Grafana for health visibility, making release quality observable once the app was running in production-like conditions",
      "Designed the process with rollback and operational handover in mind so another teammate could run and recover the system later without guesswork"
    ],
    skills: ["Docker", "Docker Compose", "Jenkins", "Trivy", "Prometheus", "Grafana", "Deployment Automation", "Rollback Planning"]
  }
];

var referenceProjectOrder = [
  5, 3, 13, 1, 0, 10, 12, 16, 14, 15, 23, 22, 19, 21,
  20, 4, 2, 6, 11, 8, 9, 7, 26, 17, 18, 25, 24,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function orderedProjects() {
  return referenceProjectOrder.map(function(idx) {
    return projects[idx];
  }).filter(Boolean);
}

function projectId(index) {
  return 'project-' + (index + 1);
}

function renderProjectIndex() {
  var list = document.getElementById('projectsIndex');
  if (!list) return;

  list.innerHTML = orderedProjects().map(function(p, i) {
    return '<li><a href="#' + projectId(i) + '" data-project-idx="' + i + '">' +
      escapeHtml(p.title) + ' <span class="hp-domain-tag">' + escapeHtml(p.domain) + '</span>' +
    '</a></li>';
  }).join('');
}

function projectMarkup(p, i) {
  var approach = p.approach.map(function(item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');

  return '<article class="hp-project-entry" id="' + projectId(i) + '">' +
    '<h2>' + (i + 1) + '. ' + escapeHtml(p.title) + '</h2>' +
    '<p class="hp-project-domain-line"><span class="hp-domain-tag hp-domain-tag--detail">' + escapeHtml(p.domain) + '</span></p>' +
    '<p>' + escapeHtml(p.desc) + ' <button type="button" class="hp-project-readmore" aria-expanded="false">... click here to read more</button></p>' +
    '<div class="hp-project-rest">' +
      '<h3>Methodology</h3>' +
      '<ul>' + approach + '</ul>' +
      '<p><strong>Skills used:</strong> ' + escapeHtml(p.skills.join(', ')) + '</p>' +
    '</div>' +
  '</article>';
}

function renderProjectDetails(idx) {
  var detail = document.getElementById('projectsDetails');
  if (!detail) return;
  var list = orderedProjects();
  var safeIdx = Math.max(0, Math.min(idx || 0, list.length - 1));

  detail.innerHTML = projectMarkup(list[safeIdx], safeIdx);

  document.querySelectorAll('#projectsIndex a').forEach(function(anchor) {
    anchor.classList.toggle('active', Number(anchor.getAttribute('data-project-idx')) === safeIdx);
  });
}

function scrollProjectDetailsIntoView() {
  var detail = document.getElementById('projectsDetails');
  if (!detail) return;

  var header = document.querySelector('.hp-site-header');
  var tabs = document.querySelector('.hp-hero-tabs-bar');
  var headerHeight = header ? Math.ceil(header.offsetHeight) : 0;
  var tabsHeight = tabs ? Math.ceil(tabs.offsetHeight) : 0;
  var targetTop = detail.getBoundingClientRect().top + window.pageYOffset - headerHeight - tabsHeight - 12;

  if (window.jQuery) {
    window.jQuery('html, body').stop().animate({
      scrollTop: Math.max(0, targetTop)
    }, 650);
    return;
  }

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: 'smooth'
  });
}

function bindProjectIndex() {
  var list = document.getElementById('projectsIndex');
  if (!list) return;

  list.addEventListener('click', function(event) {
    var anchor = event.target.closest('a[data-project-idx]');
    if (!anchor) return;
    event.preventDefault();
    renderProjectDetails(Number(anchor.getAttribute('data-project-idx')));
    scrollProjectDetailsIntoView();
  });
}

function bindReadMoreToggle() {
  var details = document.getElementById('projectsDetails');
  if (!details) return;

  details.addEventListener('click', function(event) {
    var btn = event.target.closest('.hp-project-readmore');
    if (!btn) return;
    var entry = btn.closest('.hp-project-entry');
    if (!entry) return;
    var rest = entry.querySelector('.hp-project-rest');
    if (!rest) return;
    var isOpen = rest.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? 'Show less' : '... click here to read more';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderProjectIndex();
  bindProjectIndex();
  bindReadMoreToggle();
  renderProjectDetails(0);
});
