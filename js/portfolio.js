/* ============================================================
   PROJECT DATA - 76 projects (do not remove any)
   ============================================================ */
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
    desc: "Framework transforming weekly reporting into real-time evidence-based decisions through unified feedback collection, KPI taxonomy, and role-based dashboards with alerts. Delivered +56\u201382% revenue lift across client engagements.",
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
    desc: "Lightweight fine-tuning workflow for turning messy support conversations into a customer-support assistant that answers in the company\u2019s tone. Balanced local small-model adaptation with a hosted baseline so the team could compare control, cost, and response quality honestly.",
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
      "Started from the client\u2019s existing RTSP camera setup and focused on fixing the last-mile browser experience rather than replacing the camera system",
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
      "Started from the client\u2019s research workflow and targeted repeated pain points such as too many tabs, repeated links, and slow first-pass reading",
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
  },
  {
    repo: "airline-passenger-forecasting",
    title: "What I Trust in an Airline Passenger Forecast",
    domain: "Aviation / Forecasting",
    desc: "A forecast postmortem on monthly airline passenger demand: decomposition, stationarity, seasonality, backtesting, and why exogenous promotion signals changed the result.",
    approach: [
      "Framed the problem around monthly airline passenger demand where seasonality, trend shifts, and planning lead times all affect forecast usefulness",
      "Prepared the series through decomposition, stationarity checks, calendar review, and train-test setup rather than treating it as a generic numeric column",
      "Compared baseline time-series methods across ARIMA-family variants so model choice could be justified through error behaviour, not naming prestige",
      "Tested whether promotion timing added signal only after the seasonal structure was already captured cleanly in the core forecast",
      "Evaluated outputs through backtesting and operational plausibility so the final recommendation could support scheduling and inventory conversations"
    ],
    skills: ["Time-Series Forecasting", "ARIMA", "SARIMA", "SARIMAX", "Seasonality Analysis", "Backtesting", "Stationarity Testing"]
  },
  {
    repo: "co2-emissions-prediction",
    title: "What This CO2 Model Can Say, and What It Cannot",
    domain: "Climate / Policy Analytics",
    desc: "A cautious policy-analysis brief on country-level CO2 emissions modeling: what the notebook measures, where inference must stop, and how regulation can use the output without pretending it is causal.",
    approach: [
      "Positioned the work as policy analysis first, separating predictive use from causal claims before discussing model quality",
      "Built a country-level emissions view with merged socioeconomic variables and explicit distinction between total and per-capita emissions",
      "Compared regression-style models including Lasso to understand fit quality and which features remained important under compression",
      "Read model outputs through policy guardrails so stakeholders could see where inference should stop and where evidence stayed usable",
      "Translated findings into regulation-oriented interpretation instead of overselling the notebook as a decision engine on its own"
    ],
    skills: ["Regression Modeling", "Lasso", "Policy Analytics", "Feature Selection", "Emissions Analysis", "Python", "Model Interpretation"]
  },
  {
    repo: "digital-media-view-prediction",
    title: "Forecasting an Audience Before the Launch Window Closes",
    domain: "Media / Forecasting",
    desc: "A case study on forecasting show views for a digital media company: launch timing, weekend lift, promo pressure, and which variables actually help editorial planning.",
    approach: [
      "Scoped the forecast around content-launch planning where timing and promotion pressure matter as much as raw historical views",
      "Used the available daily observations to inspect launch timing, weekend effects, visitor traffic, and supporting campaign signals",
      "Built forecasting logic that compared intuitive drivers against the variables that actually improved planning usefulness",
      "Tested media-side assumptions such as promo lift and event effects so the notebook could distinguish durable signal from post-hoc storytelling",
      "Turned the result into an editorial planning aid rather than a vanity prediction metric"
    ],
    skills: ["Forecasting", "Feature Analysis", "Media Analytics", "Time-Series Analysis", "Python", "EDA", "Planning Models"]
  },
  {
    repo: "housing-pca-case-study",
    title: "Does PCA Actually Help a Housing Model?",
    domain: "Real Estate / ML",
    desc: "A comparative analysis of PCA in housing-price prediction: cleaner geometry, weaker interpretability, and only a marginal change in model performance.",
    approach: [
      "Framed PCA as a modeling tradeoff problem rather than assuming dimensionality reduction is automatically beneficial",
      "Prepared the housing dataset with correlated numeric predictors and a clean train-test split to compare pre- and post-PCA behaviour",
      "Measured model performance with and without PCA so accuracy, geometry, and explanation cost could be examined together",
      "Read the transformed components in terms of decorrelation benefits versus lost feature-level interpretability",
      "Presented the outcome as a practical modeling judgment about whether compression is worth the communication cost"
    ],
    skills: ["PCA", "Regression Modeling", "Feature Engineering", "Dimensionality Reduction", "Model Comparison", "Python", "Interpretability"]
  },
  {
    repo: "housing-price-prediction",
    title: "What a Housing Regression Can and Cannot Tell You About Price",
    domain: "Real Estate / Analytics",
    desc: "A practical valuation guide: what the Delhi housing regression model reveals about feature elasticity, where its predictions drift from market reality, and when an appraiser's judgment outperforms the equation.",
    approach: [
      "Defined the project as valuation support rather than price truth, keeping market judgement and local context in scope from the start",
      "Used structured housing attributes such as area, rooms, amenities, and furnishing signals to model observable price pressure",
      "Fit a regression workflow to interpret which variables pushed expected price higher or lower across the sampled transactions",
      "Reviewed residual behaviour and market edge cases to identify where the model drifted away from real valuation practice",
      "Converted the result into guidance on when to trust the regression and when to override it with human appraisal judgement"
    ],
    skills: ["Regression", "Price Modeling", "Feature Elasticity", "Real Estate Analytics", "Model Interpretation", "Residual Analysis", "Python"]
  },
  {
    repo: "india-budget-2020-economic-analysis",
    title: "Reading the Economy Before Budget 2020: A Policy Briefing",
    domain: "Economic Analysis",
    desc: "A policy-style analytical briefing for decision-makers preparing for India's Union Budget 2020. Growth slowdown, inflation, sectoral stress, and fiscal room - ranked by urgency.",
    approach: [
      "Structured the work as a pre-budget policy briefing with ranked macro questions instead of an open-ended economic commentary",
      "Assembled the analysis around growth slowdown, inflation, sectoral stress, and fiscal space to reflect decision-maker priorities",
      "Synthesized the evidence into a readable narrative that separated immediate pressure points from secondary signals",
      "Used sector and macro comparisons to show where stress was concentrated rather than assuming the economy was moving uniformly",
      "Translated the notebook into a policy memo that could support pre-budget discussion and prioritization"
    ],
    skills: ["Economic Analysis", "Policy Briefing", "Macroeconomics", "Data Interpretation", "Sector Analysis", "Python", "Presentation Synthesis"]
  },
  {
    repo: "iris-pca-analysis",
    title: "The Geometry of Less - PCA from First Principles",
    domain: "ML Foundations",
    desc: "Why principal component analysis rotates axes rather than drops columns and what survives the compression.",
    approach: [
      "Treated PCA as a teaching problem first by explaining why dimensionality reduction changes geometry rather than simply deleting features",
      "Used the Iris dataset to walk through correlation structure, standardization, component construction, and variance capture",
      "Connected the scree plot and principal components back to the underlying feature relationships so the method stayed interpretable",
      "Focused on what information survives compression and what explanatory detail is lost after rotation",
      "Presented the notebook as a first-principles explanation of PCA rather than only a code demonstration"
    ],
    skills: ["PCA", "Dimensionality Reduction", "Iris Dataset", "Standardization", "Explained Variance", "Python", "ML Education"]
  },
  {
    repo: "linear-regression-cross-validation",
    title: "Cross-Validation Does Not Guarantee a Honest Model",
    domain: "Model Evaluation",
    desc: "A myth-busting explainer on cross-validation: what k-fold actually measures, the three ways practitioners break it quietly, and a checklist for when CV scores are actually informative.",
    approach: [
      "Positioned cross-validation as a validation-discipline problem instead of assuming k-fold scores are automatically trustworthy",
      "Explained what CV actually estimates and where random-split evaluation fails to reflect production behaviour",
      "Used common failure modes such as preprocessing leakage, temporal contamination, and score-based selection bias to stress-test the method",
      "Converted the critique into a checklist for when CV evidence is honest enough to report and act on",
      "Framed the project as practical model-evaluation literacy rather than benchmark chasing"
    ],
    skills: ["Cross-Validation", "Model Evaluation", "Data Leakage", "Regression", "Validation Strategy", "Python", "ML Reliability"]
  },
  {
    repo: "loan-default-risk-prediction",
    title: "Lending Into the Unknown: A Credit-Risk Decision System for NPA Reduction",
    domain: "Banking / Credit Risk",
    desc: "How a classification model built on the Home Credit dataset becomes a scoreband-driven approval policy - and why the model's value only becomes legible once it's embedded in a lending decision chain.",
    approach: [
      "Framed the problem around lending decisions for thin-file applicants where model output only matters if it maps to approval policy",
      "Worked from credit-risk features and Home Credit-style borrower data to engineer signals relevant to default propensity",
      "Built and validated a classification workflow with explicit attention to class imbalance, score separation, and operational metrics",
      "Translated predicted risk into scorebands and intervention logic so the model could influence approvals rather than sit as analysis only",
      "Kept evaluation tied to the lending decision chain, including the costs of bad approvals and missed good borrowers"
    ],
    skills: ["Credit Risk Modeling", "Classification", "Scorecards", "Class Imbalance", "Feature Engineering", "Banking Analytics", "Python"]
  },
  {
    repo: "marriage-age-prediction-flask-app",
    title: "An Honest Retrofit: Cleaning Up a Rough ML Deployment",
    domain: "Full-Stack / ML Deployment",
    desc: "When evaluating a rudimentary Flask deployment for a marriage age prediction model, simply hitting run is not enough. The artifact demands editorial cleanup, explicit boundary-setting, and an unsparing assessment of what the system can and cannot claim to accomplish.",
    approach: [
      "Started from an inherited Flask-based ML artifact and treated cleanup, boundary-setting, and artifact quality as the real engineering problem",
      "Reviewed the notebook, dependency sprawl, serialized model path, and browser form flow to define what the app actually shipped",
      "Stabilized the deployment story around input handling, model loading, route behaviour, and visible prediction boundaries",
      "Evaluated the application through usability and ethics, especially around claims the prediction should never make",
      "Reframed the project as a pragmatic retrofit of a rough ML deployment rather than a fresh greenfield build"
    ],
    skills: ["Flask", "ML Deployment", "Form Handling", "Model Serialization", "Python", "Application Cleanup", "Ethical Guardrails"]
  },
  {
    repo: "ngo-resource-allocation-model",
    title: "Allocating Under Scarcity: An Ethics-Aware Resource Memo",
    domain: "Social Impact / Analytics",
    desc: "How an international NGO translates socioeconomic indicators into ranked country allocations - the indicators, the weights, the constraints, and the tradeoffs that scoring cannot hide.",
    approach: [
      "Defined the task as resource allocation under structural scarcity where every scoring rule embeds tradeoffs that must be surfaced explicitly",
      "Worked from socioeconomic indicators and country-level signals to build a comparative need-ranking framework",
      "Used clustering and weighted scoring ideas to translate broad mission goals into an allocation-oriented analytic view",
      "Examined where real-world constraints and ethics override any clean ranking the model produces",
      "Presented the output as a decision memo that exposes value judgments instead of hiding them behind score precision"
    ],
    skills: ["Resource Allocation", "Clustering", "Social Impact Analytics", "Weighted Scoring", "Decision Modeling", "Python", "Ethics-Aware Analysis"]
  },
  {
    repo: "online-retail-customer-clustering",
    title: "Who Actually Shops Here: Five Customer Archetypes from a UK Retail Dataset",
    domain: "E-commerce / Segmentation",
    desc: "How RFM features and K-means clustering turn 541,000 transactions into five recognizable customer types - and what each archetype tells the merchandising and CRM team.",
    approach: [
      "Converted raw transaction lines into a customer-level feature table so segmentation could reflect behavior rather than receipts",
      "Engineered RFM-style inputs and related measures to capture recency, purchasing intensity, and monetary contribution",
      "Applied K-means clustering to identify stable customer archetypes that merchandising and CRM teams could recognize operationally",
      "Read cluster geometry and centroid patterns to understand separation quality and business meaning",
      "Turned the segmentation into action-oriented customer profiles rather than leaving it as unsituated unsupervised output"
    ],
    skills: ["Customer Segmentation", "K-Means", "RFM Analysis", "E-commerce Analytics", "Unsupervised Learning", "Python", "CRM Strategy"]
  },
  {
    repo: "power-user-curve-analysis",
    title: "Reading the Power User Curve",
    domain: "Product Analytics",
    desc: "DAU/MAU is a blunt instrument that collapses human behavior into a single ambiguous percentage. To understand whether a product actually commands attention, we must transition from stickiness shorthand to distributional thinking.",
    approach: [
      "Challenged DAU/MAU as a sufficient health metric and reframed product engagement analysis around user-activity distributions",
      "Used power-user-curve logic to separate casual, emerging, and highly engaged users instead of averaging them into one ratio",
      "Read the curve shape as evidence about retention quality, habit formation, and the presence of a devoted product core",
      "Connected the distribution back to concrete retention strategy questions rather than treating the visualization as descriptive only",
      "Positioned the analysis as product decision support for teams evaluating depth of engagement"
    ],
    skills: ["Product Analytics", "Retention Analysis", "DAU/MAU", "Behavioral Segmentation", "Data Visualization", "Growth Metrics", "Python"]
  },
  {
    repo: "property-valuation-model",
    title: "Investment Committee Memo: Property Valuation Model",
    domain: "Real Estate / Investment",
    desc: "This memorandum presents the underlying logic, assumptions, and scenario sensitivities for the proposed property investment model, shifting the discussion from model accuracy alone toward cashflow discipline and downside risk.",
    approach: [
      "Reframed property valuation as an investment-committee decision that should prioritize cashflow logic and downside protection over model accuracy alone",
      "Used standard housing and locality features to estimate acquisition pricing while keeping the model subordinate to underwriting discipline",
      "Extended the analysis into cashflow ladders, return metrics, and sensitivity pressure rather than stopping at predicted market value",
      "Tested recommendation quality through scenario analysis so pricing output could be judged against investor risk tolerance",
      "Positioned the project as valuation support inside a broader investment memo, not as an autonomous buy-sell engine"
    ],
    skills: ["Property Valuation", "Investment Analysis", "Cashflow Modeling", "Scenario Analysis", "IRR", "Real Estate Analytics", "Python"]
  },
  {
    repo: "salary-estimation-flask-app",
    title: "The Interesting Part Starts After model.fit()",
    domain: "Full-Stack / ML Deployment",
    desc: "An engineer's walkthrough of turning a tiny salary model into a usable Flask interface, and why that still does not count as production readiness.",
    approach: [
      "Used a simple salary estimator to show that deployment work begins after the model is trained, not when the notebook score is printed",
      "Defined the software surface through serialized artifacts, browser inputs, route handling, and a stable response contract",
      "Built a lightweight Flask interface and API layer so the model could be exercised as a tool rather than a notebook cell",
      "Reviewed the deployment for readiness gaps in validation, scale, and operational robustness instead of overstating production maturity",
      "Turned the project into a practical notebook-to-tool walkthrough for small ML applications"
    ],
    skills: ["Flask", "ML Deployment", "API Design", "Model Serialization", "Python", "Form UX", "Deployment Readiness"]
  },
  {
    repo: "telecom-churn-prediction",
    title: "The Churn Retention Playbook: From Signal to Save Offer",
    domain: "Telecom / Retention",
    desc: "A telecom churn-retention playbook: how a classification model connects to a tiered intervention strategy, what a false positive costs, and which signals actually predict who is about to leave.",
    approach: [
      "Framed churn prediction as a retention playbook problem where useful output must connect directly to save-offer strategy",
      "Prepared customer and service signals to model who was likely to leave and which behavioral patterns mattered most",
      "Compared classification evidence with business costs so false positives and missed saves were evaluated explicitly",
      "Mapped scores into intervention tiers that matched likely customer value and retention effort",
      "Presented the final model as an action system for telecom teams rather than a standalone prediction benchmark"
    ],
    skills: ["Churn Prediction", "Classification", "Retention Strategy", "Customer Analytics", "Model Evaluation", "Telecom Analytics", "Python"]
  },
  {
    repo: "used-car-price-prediction",
    title: "What Actually Moves a Used Car's Price",
    domain: "Automotive / Analytics",
    desc: "A market-translation article: what regression reveals about used-car pricing pressure, which signals matter, and where the model becomes a poor guide to real negotiation.",
    approach: [
      "Approached the problem as price-pressure analysis, distinguishing modelled valuation drivers from real negotiation outcomes in used-car markets",
      "Used structured vehicle and usage attributes to estimate which factors materially moved expected resale value",
      "Interpreted regression outputs in terms of influence direction, confidence, and residual trouble spots rather than just fit score",
      "Examined where intuitive pricing signals turned noisy and where model predictions stopped being trustworthy in practice",
      "Converted the analysis into a market-reading tool for pricing conversations rather than a final sale-price oracle"
    ],
    skills: ["Regression", "Price Modeling", "Automotive Analytics", "Feature Interpretation", "Residual Analysis", "Python", "Market Analysis"]
  },
  {
    repo: "x-education-lead-prioritization",
    title: "Revenue Operations Brief: Lead Prioritization at X Education",
    domain: "Sales / RevOps",
    desc: "Production-grade routing overriding CRM defaults, using prioritized lead scoring and cutoff calibration to improve close-rate-focused sales operations.",
    approach: [
      "Defined lead prioritization as a routing and staffing problem, not just a binary modeling exercise disconnected from sales operations",
      "Used lead attributes and funnel behaviour to build a scoring view that could surface high-intent prospects earlier",
      "Calibrated thresholds through precision, recall, and operational capacity so the system fit real sales-team throughput",
      "Evaluated the model through downstream action quality, especially routing usefulness and expected close-rate improvement",
      "Presented the project as a revenue-operations policy layer overriding weaker CRM defaults"
    ],
    skills: ["Lead Scoring", "Classification", "Revenue Operations", "Cutoff Calibration", "Sales Analytics", "Routing Logic", "Python"]
  },
{
      repo: "transformerjs-local-retail-copilot",
      title: "Transformer.js Local Retail Copilot",
      domain: "Retail / Browser AI",
      desc: "Browser-side shopping assistant using Transformers.js, local intent classification, and in-browser retrieval for product support without sending raw chat to a server.",
      approach: [
        "Mapped browsing, support, and checkout journeys to isolate which steps can run entirely in the browser and where server actions still require trust boundaries.",
"Designed the local inference path around Transformers.js with quantized models, intent classification, FAQ retrieval, and recommendation ranking.",
"Separated static knowledge from transactional actions so checkout, ticket creation, and CRM writes remain explicit post-answer events.",
"Added PII redaction, prompt-injection filtering, signed model delivery, and CSP guidance before analytics or support telemetry is emitted.",
"Positioned the system as a white-label widget with Shopify, WooCommerce, Algolia, Stripe, Supabase, and Zendesk integration points."
      ],
      skills: ["Transformers.js", "Browser Inference", "Local RAG", "Shopify Integration", "Algolia", "PII Redaction", "Prompt Injection Filtering", "Frontend Architecture"]
    },
{
      repo: "secure-ai-compliance-control-plane",
      title: "Secure AI Compliance Control Plane",
      domain: "AI Security / Governance",
      desc: "Compliance control plane for AI systems spanning project registration, threat modeling, secure coding, evaluations, deployment gates, and audit evidence.",
      approach: [
        "Structured the platform around secure software delivery rather than one-off compliance questionnaires, starting with project registration and data classification.",
"Mapped each workflow stage to NIST SSDF, OWASP Secure Coding, OWASP ASVS, and NIST AI RMF so controls can be defended during review.",
"Defined threat-model, model-test, and deployment-gate artifacts as first-class records with immutable evidence trails.",
"Connected code scanning, model evaluation, secret handling, and runtime monitoring into a single approval path instead of separate tools with weak traceability.",
"Positioned the product as B2B SaaS plus audit-readiness packaging for enterprises operating multi-model AI stacks."
      ],
      skills: ["NIST SSDF", "NIST AI RMF", "OWASP ASVS", "Threat Modeling", "Security Controls", "Kubernetes Governance", "SIEM Integration", "Audit Evidence Design"]
    },
{
      repo: "gemma-4-macbook-pro-private-knowledge-agent",
      title: "Gemma 4 MacBook Pro Private Knowledge Agent",
      domain: "Local AI / Knowledge Work",
      desc: "MacBook Pro private knowledge assistant running Gemma 4 locally for document Q&A, code review, summarization, and research with citations.",
      approach: [
        "Framed the product around local-first trust: import, index, query, review, and export all have to work without cloud dependence.",
"Built the architecture around Gemma 4 local runtime options plus a local embedding index and encrypted document store.",
"Defined answer generation with citation retrieval, approval checkpoints, and report export so the system behaves like a serious work tool.",
"Added macOS-specific controls such as Keychain-backed secrets, file access permissioning, and no-telemetry defaults.",
"Positioned the product as a paid desktop app plus enterprise offline licensing for legal and finance use cases."
      ],
      skills: ["Gemma 4", "Ollama", "LM Studio", "Local Embeddings", "Document Retrieval", "macOS Keychain", "Desktop Product Design", "Citation Grounding"]
    },
{
      repo: "stt-viseme-avatar-sales-trainer",
      title: "STT + Viseme Avatar Sales Trainer",
      domain: "Voice AI / Training",
      desc: "Voice-interactive sales trainer combining speech-to-text, coaching logic, TTS, and viseme-driven avatar animation for practice sessions and scorecards.",
      approach: [
        "Defined the trainer as a real-time conversation loop rather than a batch transcript analyzer so timing, interruption, and avatar feedback all matter.",
"Mapped the media chain across STT, response evaluation, TTS, viseme streaming, and scorecard generation.",
"Separated coaching logic from rendering logic so avatar surfaces can vary between Unity, WebGL, and browser-first deployments.",
"Added consent, retention controls, accent bias testing, and coach access boundaries because voice systems create immediate trust risk.",
"Positioned the product as per-seat training SaaS with LMS and CRM tie-ins rather than a pure media demo."
      ],
      skills: ["Speech-to-Text", "Viseme Streaming", "Avatar Animation", "Azure Speech", "Whisper", "TTS Orchestration", "Coaching Analytics", "Real-Time UX"]
    },
{
      repo: "agi-case-study-simulator",
      title: "AGI Case Study Simulator",
      domain: "AI Education / Governance",
      desc: "Interactive simulator for AGI governance, risk, and economic case studies with scenario branching, decision paths, and source-backed uncertainty framing.",
      approach: [
        "Defined the product as a decision simulator instead of a content library so users learn through tradeoffs and consequence framing.",
"Structured scenarios around governance choices, economic outcomes, safety concerns, and coordination failures with explicit uncertainty labeling.",
"Added report generation, certification hooks, LMS compatibility, and analytics to make the platform usable in formal learning contexts.",
"Applied strong editorial rules: no misleading claims that AGI exists today and no ungrounded certainty in future outcomes.",
"Positioned the offering as courseware, executive workshop material, and university licensing rather than consumer hype content."
      ],
      skills: ["Educational Product Design", "Scenario Modeling", "AI Governance", "Interactive Content Systems", "Assessment Design", "LMS Integration", "Analytics", "Source-Backed Writing"]
    },
{
      repo: "agi-vs-ai-interactive-learning-platform",
      title: "AGI vs AI Interactive Learning Platform",
      domain: "AI Education",
      desc: "Interactive learning product explaining AI, ML, LLMs, agents, and AGI with role-based pathways, quizzes, and personalized roadmaps.",
      approach: [
        "Organized the learning path around role-based entry points so the same concepts can be explained differently to founders, students, and business leaders.",
"Built comparisons between AI, ML, LLMs, agents, and AGI using examples, diagrams, quizzes, and applied case studies.",
"Added recommendation logic that turns quiz responses into project suggestions and roadmap downloads.",
"Kept the content explicitly anti-hype by labeling AGI as a separate concept rather than a marketing synonym for strong product capability.",
"Structured the monetization around course sales, cohorts, and corporate training bundles."
      ],
      skills: ["Curriculum Design", "Interactive Learning", "Product Strategy", "Assessment Logic", "Content Design", "Analytics", "Roadmap Generation", "Educational UX"]
    },
{
      repo: "vision-model-quality-inspection-suite",
      title: "Vision Model Quality Inspection Suite",
      domain: "Computer Vision / Operations",
      desc: "Computer vision quality inspection suite for defect detection, counting, safety monitoring, visual QA, alerts, dashboards, and business reporting.",
      approach: [
        "Scoped the platform around a layered pipeline: capture, inference, event rules, alerting, analytics, and business reporting.",
"Kept model choice flexible across YOLO-style local detection and API-backed multimodal analysis depending sensitivity and latency requirements.",
"Defined severity and event policies so detections become operational actions instead of noisy visual logs.",
"Added privacy controls such as face or plate blurring, edge inference modes, secure RTSP handling, and role-based dashboards.",
"Positioned the commercial model around per-camera licensing plus higher-margin analytics and defect-reduction services."
      ],
      skills: ["Computer Vision Platforms", "Object Detection", "Segmentation", "Visual QA", "RTSP Pipelines", "Alerting Systems", "Grafana", "Operational Dashboards"]
    },
{
      repo: "fastvlm-edge-visual-assistant",
      title: "FastVLM Edge Visual Assistant",
      domain: "Edge Vision / Field Service",
      desc: "On-device visual assistant using FastVLM-style efficient vision encoding for field technicians who need low-latency diagnosis and manual retrieval on edge devices.",
      approach: [
        "Designed the assistant around one decisive loop: capture, interpret, retrieve, recommend, confirm, and document.",
"Used the FastVLM positioning to emphasize low-latency visual understanding and fast time-to-first-token for field operators.",
"Connected image understanding to local manuals, parts data, and service-ticket updates so the answer can change the job state.",
"Added offline mode, signed builds, and photo retention policies because field operations frequently cross privacy and reliability constraints.",
"Positioned the product around per-technician SaaS plus maintenance upsell rather than generic AI assistant pricing."
      ],
      skills: ["On-Device Vision", "Manual Retrieval", "Field Service UX", "Vector Search", "Inventory Integration", "Edge Deployment", "Photo Workflow Design", "Service Operations"]
    },
{
      repo: "panasonic-toughpad-field-ai-inspector",
      title: "Panasonic Toughpad Field AI Inspector",
      domain: "Field Operations / Rugged Edge",
      desc: "Offline-capable field inspection system for Panasonic Toughpad and Toughbook devices combining camera, audio, GPS, checklists, AI review, and secure sync.",
      approach: [
        "Designed for the physical device first, including offline data capture, battery reality, camera workflow, and rugged field ergonomics.",
"Built the inspection flow around structured evidence capture plus optional local SLM support for checklist guidance and anomaly flagging.",
"Connected GPS, barcode, RFID, and asset metadata to create high-trust field reports for supervisors and downstream systems.",
"Added MDM readiness, device attestation, encrypted offline storage, and tamper-resistant logging for enterprise deployment.",
"Framed the commercial model as enterprise licensing plus rugged-device bundling and per-asset inspection fees."
      ],
      skills: ["Offline-First Systems", "Rugged Device UX", "GPS Integration", "Barcode and RFID", "Field Inspections", "MDM Readiness", "Secure Sync", "Supervisor Dashboards"]
    },
{
      repo: "axis-artpec-smart-surveillance-analytics",
      title: "Axis ARTPEC Smart Surveillance Analytics",
      domain: "Video Analytics / Edge Security",
      desc: "Edge surveillance analytics platform for Axis ARTPEC cameras combining edge metadata, VMS integration, AI verification, alert workflows, and strong device-security posture.",
      approach: [
        "Started from the camera edge rather than from the dashboard so event generation, metadata transport, and verification paths stay realistic.",
"Used ARTPEC event metadata as the first signal and kept heavier AI verification as a selective second pass.",
"Integrated video workflows with VMS, MQTT, ONVIF, webhooks, access-control systems, and SIEM tooling.",
"Made secure boot, signed OS assumptions, certificate lifecycle, and least-privilege VMS accounts explicit parts of the design.",
"Positioned the platform as per-camera analytics plus managed security operations and incident automation services."
      ],
      skills: ["Video Analytics", "VMS Integration", "MQTT", "ONVIF", "Incident Workflows", "Device Security", "Certificate Lifecycle", "SIEM Integration"]
    },
{
      repo: "hikvision-aiot-camera-intelligence-platform",
      title: "Hikvision AIoT Camera Intelligence Platform",
      domain: "Video Analytics / AIoT",
      desc: "AIoT analytics platform for Hikvision environments using ISAPI event pulls, enrichment services, POS and access correlations, and security hardening controls.",
      approach: [
        "Used ISAPI-driven event and metadata retrieval as the backbone rather than assuming raw stream processing everywhere.",
"Added enrichment layers that correlate events with POS, access-control, and site context to improve incident meaning.",
"Defined dashboards and ticketing flows so security and operations teams can act on correlated events instead of camera noise.",
"Made firmware patching, vault-backed credentials, VLAN isolation, MFA, and masking part of the operating model.",
"Positioned the business model around per-site deployment, monthly monitoring, and analytics licensing."
      ],
      skills: ["ISAPI", "NVR Integration", "Event Enrichment", "Security Hardening", "Dashboard Design", "POS Correlation", "Access Control Integration", "Operational Alerting"]
    },
{
      repo: "openclaw-personal-operations-agent",
      title: "OpenClaw Personal Operations Agent",
      domain: "Personal AI / Automation",
      desc: "Personal operations agent using OpenClaw-style local execution to manage email, calendar, reminders, and tool actions with approvals and audit trails.",
      approach: [
        "Defined the product around action execution, not general chat, with permissions and approvals as the core product surface.",
"Mapped familiar channels to a tool-runtime layer that can handle email, calendar, notes, reminders, GitHub, and browser tasks.",
"Separated safe low-risk actions from financial, external communication, and other steps that require explicit confirmation.",
"Added sandboxing, secret isolation, skill boundaries, and audit logging because assistant-side action risk is the entire trust problem.",
"Positioned the product as personal subscription, executive package, and self-hosted enterprise plan."
      ],
      skills: ["Agentic Systems", "Approval Gates", "Calendar Automation", "Email Workflows", "Permission Models", "Audit Trails", "Tool Execution", "Personal Productivity Systems"]
    },
{
      repo: "secure-ai-soc-reference-platform",
      title: "Secure AI SoC Reference Platform",
      domain: "Edge Security / Embedded AI",
      desc: "Security reference architecture for AI-enabled SoC devices covering boot chain, TEE, model protection, OTA updates, fleet control, and attestation.",
      approach: [
        "Defined the system from hardware requirements outward, starting with trust anchors, secure boot chain, and key storage.",
"Connected trusted runtime decisions to the AI application layer so model weights, debug ports, and update logic are protected coherently.",
"Added OTA, rollback protection, SBOM generation, attestation, and fuzz testing as lifecycle requirements rather than post-launch add-ons.",
"Mapped the platform to realistic embedded integrations such as Yocto Linux, TPM or secure element, MQTT, and edge fleet control plane.",
"Positioned the offer as reference design licensing plus certification and managed fleet services."
      ],
      skills: ["Secure Boot", "Trusted Execution Environments", "SBOM", "OTA Security", "Device Attestation", "Yocto Linux", "Embedded Systems", "Fleet Governance"]
    },
{
      repo: "paperclip-ai-company-orchestrator",
      title: "Paperclip AI Company Orchestrator",
      domain: "Multi-Agent Operations",
      desc: "Business operations platform orchestrating teams of AI agents with budgets, approvals, workspaces, cost tracking, and revenue reporting.",
      approach: [
        "Framed the system around organizational mechanics like goals, departments, tickets, budgets, and review instead of free-form agent swarms.",
"Separated company workspace boundaries, secret scopes, and approval rules so multiple agent teams can operate safely in parallel.",
"Connected external tools such as Gmail, GitHub, Slack, Notion, and Stripe to goal-oriented work queues rather than standalone prompts.",
"Added append-only logs, budget limits, approval gates, and cost reporting because orchestration without governance is not a product.",
"Positioned the business model around AI agency automation, per-agent seats, and managed operations services."
      ],
      skills: ["Agent Orchestration", "Multi-Agent Systems", "Budget Governance", "Workflow Design", "Tool Integrations", "Workspace Isolation", "Cost Tracking", "Operations Dashboards"]
    },
{
      repo: "asr-meeting-intelligence-platform",
      title: "ASR Meeting Intelligence Platform",
      domain: "Speech AI / Productivity",
      desc: "Meeting intelligence platform combining ASR, diarization, summary extraction, action-item sync, searchable archives, and privacy controls.",
      approach: [
        "Designed the pipeline from audio ingestion through transcript searchability instead of stopping at raw speech recognition.",
"Added diarization, summary extraction, and task or CRM sync so the system produces follow-through artifacts instead of passive text dumps.",
"Used a privacy and quality lens for high-risk environments with PII redaction and optional human verification paths.",
"Connected the product to meeting sources, CRMs, and task systems so the transcript becomes part of the workflow.",
"Structured monetization around usage pricing plus SaaS subscriptions and domain-specific compliance packages."
      ],
      skills: ["Whisper", "Speaker Diarization", "Speech-to-Text", "Summarization", "Action Extraction", "CRM Integration", "PII Redaction", "Searchable Archives"]
    },
{
      repo: "slm-edge-support-agent-why-slm-not-llm",
      title: "SLM Edge Support Agent - Why SLM, Not LLM",
      domain: "Edge AI / Support",
      desc: "Small-language-model support agent for private or edge environments with confidence thresholds, local inference, and LLM fallback only when needed.",
      approach: [
        "Positioned the product as an argument for design discipline: pick the smaller model when the domain supports it and the economics demand it.",
"Defined the support path around local docs, quantized deployment, confidence thresholds, and explicit fallback logic.",
"Kept fallback approval and prompt-injection controls central because escalation to a larger model changes the privacy and cost profile.",
"Connected the architecture to ONNX Runtime, llama.cpp, Ollama, small-model families, and local retrieval infrastructure.",
"Structured the business case around private per-device licensing and edge AI appliances."
      ],
      skills: ["Small Language Models", "Edge Inference", "Confidence Thresholding", "llama.cpp", "ONNX Runtime", "Local RAG", "Fallback Routing", "Cost-Performance Tradeoffs"]
    },
{
      repo: "openrouter-model-gateway-for-ai-apps",
      title: "OpenRouter Model Gateway for AI Apps",
      domain: "AI Infrastructure",
      desc: "Model routing gateway for AI applications using OpenRouter-compatible APIs, policy-based model selection, fallback, and cost/latency observability.",
      approach: [
        "Defined the gateway around policy and observability, not just provider multiplexing.",
"Separated request policy, provider routing, fallback behavior, and logging so teams can change strategy without rewriting apps.",
"Added key vaulting, allowlists, budget limits, prompt logging controls, and PII redaction as platform requirements.",
"Connected the design to OpenAI SDK compatibility, LangChain or LlamaIndex consumers, and internal billing systems.",
"Positioned the product for SaaS infrastructure sales, enterprise internal gateways, and optimization consulting."
      ],
      skills: ["Model Routing", "OpenRouter", "Policy Engines", "Budget Controls", "Observability", "Fallback Design", "API Gateways", "AI Infrastructure"]
    },
{
      repo: "sadtalker-ai-video-presenter",
      title: "SadTalker AI Video Presenter",
      domain: "Video AI / Media Automation",
      desc: "Talking-head video presenter using SadTalker plus TTS, subtitles, branding, translation, consent controls, and export automation.",
      approach: [
        "Defined the pipeline as content production rather than raw animation, connecting scripting, TTS, animation, subtitle, branding, and export.",
"Added consent, identity verification, watermarking, and blocked-use policies because synthetic face and voice products need explicit boundaries.",
"Connected the output to LMS, YouTube, marketing automation, and translation surfaces so the product fits real publishing workflows.",
"Structured the business model around per-video pricing, subscriptions, and enterprise training packages.",
"Positioned brand templates and subtitle automation as core product value instead of afterthoughts."
      ],
      skills: ["SadTalker", "TTS Pipelines", "Subtitle Generation", "Video Post-Processing", "Branding Automation", "Consent Controls", "Synthetic Media Safety", "FFmpeg"]
    },
{
      repo: "n8n-ai-workflow-automation-hub",
      title: "n8n AI Workflow Automation Hub",
      domain: "Automation / AI Ops",
      desc: "Self-hosted n8n automation hub connecting AI nodes to business systems for lead qualification, support, invoicing, and back-office workflows with hardening controls.",
      approach: [
        "Started from workflow operations rather than from chat, using n8n as the backbone for triggers, app connectors, retries, and notifications.",
"Positioned AI tasks as bounded workflow nodes for classification, extraction, summarization, and routing.",
"Added SSL, SSO, 2FA, credential encryption, webhook authentication, and execution-data redaction as deployment requirements.",
"Connected the hub to internal apps, databases, AI APIs, and reporting systems so workflows remain business-native.",
"Structured the commercial model around managed workflows, implementation services, and internal productivity deployments."
      ],
      skills: ["n8n", "Workflow Automation", "Webhook Security", "Credential Management", "AI Node Design", "Business Systems Integration", "Execution Observability", "Self-Hosted Platforms"]
    },
{
      repo: "chrome-extension-web-scraping-intelligence-agent",
      title: "Chrome Extension Web Scraping Intelligence Agent",
      domain: "Browser Automation / Data Intelligence",
      desc: "Chrome extension for user-initiated scraping, AI cleaning and classification, and export to Sheets, CRM, or databases with privacy and policy compliance controls.",
      approach: [
        "Defined the extension around explicit user consent and site context rather than background scraping or broad browsing permissions.",
"Used Manifest V3 service worker and content script boundaries to separate extraction, enrichment, and export cleanly.",
"Connected extracted content to optional AI cleaning or classification before export into Sheets, CRMs, or databases.",
"Applied policy and trust constraints: no credential theft, no session hijacking, no silent scraping, and HTTPS-only backend communication.",
"Positioned the business model around freemium usage, paid exports, team workspaces, and data-intelligence subscriptions."
      ],
      skills: ["Chrome Extension MV3", "Content Scripts", "Service Workers", "Structured Data Extraction", "Data Cleaning", "AI Classification", "Sheets and CRM Export", "Browser Security"]
    }
];

var referenceProjectOrder = [
  5, 3, 13, 1, 0, 10, 12, 16, 14, 15, 23, 22, 19, 21,
  20, 4, 2, 6, 11, 8, 9, 7, 26, 17, 18, 25, 24,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75
];

/* ============================================================
   HELPERS
   ============================================================ */
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

/* ============================================================
   FEATURED PROJECT CARDS (top 8)
   ============================================================ */
function renderFeaturedProjects() {
  var container = document.getElementById('featuredProjects');
  if (!container) return;

  var ordered = orderedProjects();
  var featured = ordered.slice(0, 8);

  container.innerHTML = featured.map(function(p) {
    var skillsHtml = p.skills.slice(0, 5).map(function(s) {
      return '<span class="project-card__skill">' + escapeHtml(s) + '</span>';
    }).join('');
    if (p.skills.length > 5) {
      skillsHtml += '<span class="project-card__skill">+' + (p.skills.length - 5) + ' more</span>';
    }

    return '<div class="project-card">' +
      '<span class="project-card__domain">' + escapeHtml(p.domain) + '</span>' +
      '<h3 class="project-card__title">' + escapeHtml(p.title) + '</h3>' +
      '<p class="project-card__desc">' + escapeHtml(p.desc) + '</p>' +
      '<div class="project-card__skills">' + skillsHtml + '</div>' +
      '<div class="project-card__actions">' +
        '<a class="project-card__link" href="Blogs/index.html#' + escapeHtml(p.repo) + '">Read Case Study <i class="bi bi-arrow-right"></i></a>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* ============================================================
   ALL PROJECTS BROWSER
   ============================================================ */
function renderProjectIndex() {
  var list = document.getElementById('projectsList');
  if (!list) return;

  list.innerHTML = orderedProjects().map(function(p, i) {
    return '<li><a href="#" data-project-idx="' + i + '">' +
      '<span class="project-num">' + (i + 1) + '.</span> ' +
      escapeHtml(p.title) +
      '<span class="project-domain">' + escapeHtml(p.domain) + '</span>' +
    '</a></li>';
  }).join('');
}

function renderProjectDetail(idx) {
  var detail = document.getElementById('projectDetail');
  if (!detail) return;

  var list = orderedProjects();
  var safeIdx = Math.max(0, Math.min(idx || 0, list.length - 1));
  var p = list[safeIdx];

  var approach = p.approach.map(function(item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');

  var skillChips = p.skills.map(function(s) {
    return '<span class="chip">' + escapeHtml(s) + '</span>';
  }).join('');

  detail.innerHTML =
    '<div class="project-detail">' +
      '<span class="project-detail__domain">' + escapeHtml(p.domain) + '</span>' +
      '<h3 class="project-detail__title">' + escapeHtml(p.title) + '</h3>' +
      '<p class="project-detail__desc">' + escapeHtml(p.desc) + '</p>' +
      '<p class="project-detail__section-title">Methodology</p>' +
      '<ul class="project-detail__approach">' + approach + '</ul>' +
      '<p class="project-detail__section-title">Skills Used</p>' +
      '<div class="project-detail__skills-list">' + skillChips + '</div>' +
      '<div class="project-detail__blog-link">' +
        '<a class="btn btn--ghost" href="Blogs/index.html#' + escapeHtml(p.repo) + '"><i class="bi bi-journal-text"></i> Read Full Case Study</a>' +
      '</div>' +
    '</div>';

  document.querySelectorAll('#projectsList a').forEach(function(anchor) {
    anchor.classList.toggle('active', Number(anchor.getAttribute('data-project-idx')) === safeIdx);
  });
}

function bindProjectBrowser() {
  var list = document.getElementById('projectsList');
  if (!list) return;

  list.addEventListener('click', function(event) {
    var anchor = event.target.closest('a[data-project-idx]');
    if (!anchor) return;
    event.preventDefault();
    renderProjectDetail(Number(anchor.getAttribute('data-project-idx')));
  });

  // Toggle browser
  var toggle = document.getElementById('allProjectsToggle');
  var content = document.getElementById('allProjectsContent');
  if (toggle && content) {
    toggle.addEventListener('click', function() {
      var isOpen = content.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);

      if (isOpen && !document.querySelector('#projectsList a.active')) {
        renderProjectDetail(0);
      }
    });
  }

  // Project search
  var search = document.getElementById('projectSearch');
  if (search) {
    search.addEventListener('input', function() {
      var query = this.value.toLowerCase().trim();
      document.querySelectorAll('#projectsList li').forEach(function(li) {
        var text = li.textContent.toLowerCase();
        li.classList.toggle('hidden', query !== '' && text.indexOf(query) === -1);
      });
    });
  }
}

/* ============================================================
   BLOG PREVIEW CARDS (6 diverse projects)
   ============================================================ */
var blogPreviewIndices = [5, 28, 12, 35, 13, 27];

function renderBlogPreview() {
  var container = document.getElementById('blogsPreview');
  if (!container) return;

  var categoryMap = {
    'Logistics': 'Computer Vision',
    'Healthcare / MedTech': 'RAG / Healthcare',
    'Manufacturing': 'LLM / Vision',
    'Voice AI / Real-Time Systems': 'Voice AI',
    'Banking': 'Machine Learning',
    'E-commerce / Customer Support': 'LLM Fine-tuning',
    'Marketing': 'Data / Analytics',
    'Marketing / AdTech': 'Marketing / AdTech',
    'SalesTech': 'LLM / Sales',
    'Internal AI Systems': 'AI Systems',
    'Research / Search': 'AI Search'
  };

  container.innerHTML = blogPreviewIndices.map(function(idx) {
    var p = projects[idx];
    if (!p) return '';
    var category = categoryMap[p.domain] || p.domain;

    return '<div class="blog-card">' +
      '<span class="blog-card__category">' + escapeHtml(category) + '</span>' +
      '<h3 class="blog-card__title">' + escapeHtml(p.title) + '</h3>' +
      '<p class="blog-card__desc">' + escapeHtml(p.desc) + '</p>' +
      '<a class="blog-card__link" href="Blogs/index.html#' + escapeHtml(p.repo) + '">Read Deep Dive <i class="bi bi-arrow-right"></i></a>' +
    '</div>';
  }).join('');
}

/* ============================================================
   SKILL CHIPS - convert paragraph text to chips
   ============================================================ */
function renderSkillChips() {
  document.querySelectorAll('.skill-text').forEach(function(p) {
    var skills = p.textContent.split(',').map(function(s) { return s.trim(); }).filter(Boolean);
    var html = '<div class="skill-category__chips">' +
      skills.map(function(s) { return '<span class="chip">' + escapeHtml(s) + '</span>'; }).join('') +
    '</div>';
    p.outerHTML = html;
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  renderFeaturedProjects();
  renderProjectIndex();
  bindProjectBrowser();
  renderBlogPreview();
  renderSkillChips();
});
