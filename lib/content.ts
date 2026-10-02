// Practice areas mirror the five skill clusters in the founder's portfolio
// (gaping-infinity/website/lib/data.ts → skillClusters): same ids, colors and
// skills, reframed as services. Use cases and principles are drawn from the
// real systems and architecture decisions recorded there — no invented metrics.

export type Practice = {
  id: string;
  label: string;
  color: string;
  headline: string;
  description: string;
  skills: string[];
};

export const practices: Practice[] = [
  {
    id: "llm-agentic",
    label: "LLM & Agentic Systems",
    color: "#E8A33D",
    headline: "Agents and RAG that survive contact with real users.",
    description:
      "Retrieval pipelines, tool-using agents and MCP integrations — designed as explicit, testable state machines, with evaluation and tracing built in from day one.",
    skills: [
      "RAG Pipelines",
      "Vector DBs (pgvector / Chroma / Weaviate)",
      "Agent Orchestration (LangGraph)",
      "MCP",
      "LLM Observability (LangSmith / PostHog)",
      "LLM Eval Design (RAGAS / DeepEval)",
      "Prompt Engineering",
      "Fine-Tuning (unsloth) & RLHF",
      "LLM Serving (vLLM / AWS Bedrock)",
    ],
  },
  {
    id: "ml-production",
    label: "Applied ML & AI",
    color: "#5FA88F",
    headline: "Models that earn their place in production.",
    description:
      "Anomaly detection, NLP and recommender systems — chosen for the data you actually have, not the data you wish you had.",
    skills: [
      "PyTorch",
      "Keras",
      "scikit-learn",
      "Hugging Face Transformers",
      "spaCy",
      "Anomaly Detection",
      "NLP / NER",
      "Recommender Systems",
    ],
  },
  {
    id: "mlops",
    label: "MLOps & Data Engineering",
    color: "#8FA6E8",
    headline: "From notebook to pipeline to endpoint.",
    description:
      "Reproducible training, model registries, GPU serving and CI/CD for models — so shipping a new model is a pull request, not a project.",
    skills: [
      "AWS SageMaker",
      "AWS Bedrock",
      "vLLM",
      "MLflow",
      "Kubernetes",
      "Docker",
      "CI/CD for ML (GitHub Actions)",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    color: "#B98FE8",
    headline: "Infrastructure you can see into.",
    description:
      "AWS and Azure platforms defined as code, with metrics, logs and distributed traces wired end to end before the first incident.",
    skills: [
      "AWS (EKS, EC2, Lambda, SQS, SNS)",
      "Azure",
      "OpenTelemetry",
      "Grafana / Prometheus",
      "Terraform",
    ],
  },
  {
    id: "backend",
    label: "Backend & Architecture",
    color: "#E88F8F",
    headline: "The systems your AI features plug into.",
    description:
      "Event-driven microservices and APIs in Java, Go, Python and Node — the unglamorous backbone that decides whether AI features scale.",
    skills: [
      "Java",
      "Go",
      "Python",
      "NestJS / Node.js",
      "Spring Boot",
      "Microservices",
      "Event-Driven Architecture",
      "REST / GraphQL / gRPC",
      "PostgreSQL / MongoDB / Elasticsearch / Neo4j / Redis",
    ],
  },
];

export type UseCase = {
  id: string;
  title: string;
  practiceId: string; // must match a Practice id above
  summary: string;
  problem: string;
  solution: string[];
  stack: string[];
};

// Ordered by how promising the opportunity is for most teams right now.
export const useCases: UseCase[] = [
  {
    id: "knowledge-assistants",
    title: "Grounded knowledge assistants",
    practiceId: "llm-agentic",
    summary: "RAG over your documents, tickets and data — with citations, not guesses.",
    problem:
      "Years of knowledge live in wikis, PDFs, tickets and databases. Generic chatbots hallucinate, can't cite a source, and can't be trusted with tenant boundaries — so nobody uses them twice.",
    solution: [
      "Ingestion and chunking tuned to your corpus, with hybrid search and re-ranking for recall that holds up on real questions.",
      "Vector search inside the Postgres you already run (pgvector) before adding a new stateful dependency.",
      "Every answer cites its sources; a RAGAS evaluation set gates each change to prompts, chunking or models.",
    ],
    stack: ["RAG", "pgvector", "Chroma / Weaviate", "RAGAS", "LangSmith"],
  },
  {
    id: "agentic-workflows",
    title: "Agents that act — safely",
    practiceId: "llm-agentic",
    summary: "Multi-step agents that touch real systems, with a human in the loop where it matters.",
    problem:
      "Autonomous-agent demos fall apart the moment they write to a calendar, a ticket queue or a payment system. Nobody can say what the agent will do next — or prove it won't.",
    solution: [
      "Agents built as explicit LangGraph state graphs: one typed shared state, conditional branches, and interrupt nodes that pause for confirmation before any write.",
      "Every branch is unit-testable in isolation, and the graph doubles as living documentation of the decision logic.",
      "Your internal tools exposed through MCP servers with scoped permissions, so agents get capabilities — not credentials.",
    ],
    stack: ["LangGraph", "MCP", "Agent memory", "Human-in-the-loop", "Tool calling"],
  },
  {
    id: "evals-observability",
    title: "LLM evaluation & observability",
    practiceId: "llm-agentic",
    summary: "Know whether the last prompt change made things better — before your users do.",
    problem:
      "Prompt tweaks ship on vibes. Regressions are reported by customers, token costs are a monthly surprise, and a failing answer can't be traced back to the retrieval step that caused it.",
    solution: [
      "Golden datasets and RAGAS / DeepEval suites wired into CI, so model and prompt changes are measured like any other code change.",
      "End-to-end traces across retrieval, tools and generation with LangSmith or PostHog, joined to your OpenTelemetry spans.",
      "Latency, cost and quality dashboards in Grafana with alerts on drift.",
    ],
    stack: ["RAGAS", "DeepEval", "LangSmith", "OpenTelemetry", "GitHub Actions"],
  },
  {
    id: "own-your-model",
    title: "Own your model: fine-tuning & serving",
    practiceId: "mlops",
    summary: "Smaller, specialised models on your infrastructure — cheaper, faster, compliant.",
    problem:
      "Per-token API bills grow linearly with usage, data-residency rules block third-party endpoints, and a frontier model is overkill for a narrow, high-volume task.",
    solution: [
      "Fine-tune open models with unsloth (LoRA / QLoRA) and preference tuning on your own task data.",
      "Serve on vLLM inside your Kubernetes cluster, or on AWS Bedrock / SageMaker when managed is the better trade.",
      "Ship only after an evaluation-parity check against the model it replaces, tracked in MLflow.",
    ],
    stack: ["unsloth", "RLHF", "vLLM", "AWS Bedrock", "SageMaker", "MLflow"],
  },
  {
    id: "anomaly-detection",
    title: "Anomaly detection without labels",
    practiceId: "ml-production",
    summary: "Catch fraud, intrusions and outages when you have no labelled incidents yet.",
    problem:
      "The events that matter most — security breaches, fraud, outages — are rare. There is no labelled dataset to train a classifier on, and waiting to collect one delays detection by quarters.",
    solution: [
      "Behavioural features engineered from sessions, geography and usage patterns, scored with unsupervised outlier detection (K-means, DBSCAN, LOF).",
      "Deterministic rules for known policy violations alongside the statistical models.",
      "Analyst triage built in — which turns every reviewed alert into the labels a supervised model will need later.",
    ],
    stack: ["scikit-learn", "DBSCAN / LOF", "Feature engineering", "Streaming data"],
  },
  {
    id: "search-recommendations",
    title: "Semantic search & recommendations",
    practiceId: "ml-production",
    summary: "Search that understands intent; recommendations that improve as data arrives.",
    problem:
      "Keyword search misses what users mean, product data is unstructured, and recommenders can't start because there is no interaction history to learn from.",
    solution: [
      "Hybrid lexical + vector search on Elasticsearch or pgvector, with NER-driven attribute extraction (spaCy, Transformers) to structure messy catalogues.",
      "Recommenders that start as transparent rules, then graduate to learned and LLM-powered models as usage data accrues.",
      "Clean REST / GraphQL APIs so the intelligence is reusable across products.",
    ],
    stack: ["Elasticsearch", "pgvector", "spaCy", "Transformers", "Recommenders"],
  },
];

export type ProcessStep = {
  state: string;
  title: string;
  description: string;
  outputs: string[];
};

export const processSteps: ProcessStep[] = [
  {
    state: "S0",
    title: "Discover",
    description:
      "Map the problem, the data you actually have, and what “working” means — expressed as an evaluation set, not a slide.",
    outputs: ["Problem framing", "Data audit", "Eval set & success metrics"],
  },
  {
    state: "S1",
    title: "Prototype",
    description:
      "A thin vertical slice running against real data and scored against the eval set, so decisions are made on evidence.",
    outputs: ["Working slice", "Baseline scores", "Architecture decision records"],
  },
  {
    state: "S2",
    title: "Harden",
    description:
      "Guardrails, tests, tracing, CI gates and infrastructure as code — everything that separates a demo from a system.",
    outputs: ["CI eval gates", "Observability", "IaC & deployment"],
  },
  {
    state: "S3",
    title: "Operate",
    description:
      "Run it, measure it, hand it over. Production traffic feeds new eval data, and the loop starts again.",
    outputs: ["Dashboards & alerts", "Runbooks", "Knowledge transfer"],
  },
];

export type Principle = { title: string; body: string };

// Each principle is a real tradeoff from a shipped or in-progress system.
export const principles: Principle[] = [
  {
    title: "Boring infrastructure first",
    body: "pgvector in the Postgres you already run beats a new vector database for most workloads. We add stateful dependencies only when scale demands it — and write down the trigger for revisiting.",
  },
  {
    title: "Explicit over magical",
    body: "Agents as explicit state graphs, not opaque crews. Every branch and interrupt point is testable — which matters once an agent is allowed to write to a real system.",
  },
  {
    title: "Ship before the labels exist",
    body: "Unsupervised detection with humans triaging the output ships value now, and turns every review into the training data a better model needs later.",
  },
  {
    title: "Rules today, models tomorrow",
    body: "With no usage history, a deterministic baseline beats an uncalibrated model — and buys the time to collect the data that makes the model worth building.",
  },
  {
    title: "Measured, not vibed",
    body: "Evaluation sets gate every prompt, retrieval and model change in CI. If it can't be measured, it isn't done.",
  },
  {
    title: "Decisions are written down",
    body: "Each significant choice ships with an architecture decision record: context, decision, consequences, and when to revisit it.",
  },
];

export const founder = {
  name: "Nabeel Mukhtar",
  role: "Founder & Principal Engineer",
  bio: "Distinguished Software Engineer with 20+ years building enterprise systems and 10+ years shipping production ML — now focused on RAG pipelines, agent orchestration and LLM observability.",
  highlights: [
    { org: "Qlik", detail: "Architect, Catalog & Cognitive Data Services; Qlik Architecture Council" },
    { org: "Elastica", detail: "Principal Data Scientist; anomaly detection for CloudSOC" },
    { org: "Podium Data", detail: "Backend and data-flow engine across MapReduce, Spark and Tez" },
    { org: "Xymbia", detail: "Real-time SaaS on AWS EKS; RAG + LangGraph scheduling assistant" },
  ],
};

// Verbatim from public LinkedIn recommendations — do not edit the wording.
export const testimonials = [
  {
    quote:
      "…he is simply one of just a handful of technical implementors that I would put in a \"top 1%\" for quality of code, thoughtfulness with new compelling feature sets and timeliness in deliver.",
    name: "Bob Vecchione",
    role: "Colleague, Qlik",
  },
  {
    quote:
      "The best way to see the value he brings would be to give him a problem to be solved and you're guaranteed to be very pleasantly surprised.",
    name: "Aamir Baig",
    role: "Co-Founder & CEO, Article.com",
  },
];
