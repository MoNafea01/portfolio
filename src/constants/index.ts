export const PROFILE = {
    name: "Mohamed K. Nafea",
    title: "Backend & AI Engineer",
    email: "monafe301@gmail.com",
    phone: "+20 1129330746",
    location: "Cairo, Egypt",
    github: "https://github.com/MoNafea01",
    linkedin: "https://linkedin.com/in/monafea01",
    kaggle: "https://kaggle.com/mohamednafea01",
    summary: "Backend & AI Engineer with ~2 years building and deploying end-to-end Generative-AI systems: agentic RAG, LLM fine-tuning (LoRA/QLoRA), and the FastAPI / Celery / Docker infrastructure to serve them. Built an Arabic-first real-estate search engine across 12+ containerized services and led a 3-engineer team delivering a SaaS EdTech platform. Top 10 of 200+ at the Egypt IoT & AI Challenge. Microsoft Certified: Azure AI Engineer Associate.",
    resumeLink: "/portfolio/Mohamed_Nafea.pdf"
};

export const EDUCATION = [
    {
        degree: "B.Eng. Computer & Systems Engineering",
        school: "Zagazig University",
        period: "Oct 2020 – Jul 2025",
        gpa: "3.0/4.0"
    }
];

export const EXPERIENCE = [
    {
        role: "Software Engineer",
        company: "Rashdan Information Technology",
        period: "Apr 2026 – Sep 2026",
        type: "Full-time | On-site",
        description: [
            "Led a 3-engineer team delivering a SaaS EdTech platform for live student–instructor tutoring; owned task breakdown, code review, and the full SDLC from stakeholder requirements gathering through design, development, testing, and production deployment.",
            "Designed the ERD and relational data model (MSSQL, EF6, ~30 entities) and evolved the schema as the business model changed, replacing enum constants with lookup tables to enforce referential integrity.",
            "Re-architected the application into a layered design with validation/DTO and dedicated data-access layers, lifting business and query logic out of UI code-behind onto a shared per-request DB context.",
            "Built the live-session video pipeline on the Zoom API with event-driven ZAK token generation at join time and an admin-managed pool of licensed accounts.",
            "Developed the booking, cancellation, and refund engine: tiered >24h vs. <24h cancellation rules with a 20% platform commission, late-join handling, a dispute-management workflow, and instructor payout capture."
        ]
    },
    {
        role: "AI & Backend Engineer",
        company: "Masarat Almustakshef",
        period: "Dec 2025 – Jun 2026",
        type: "Part-time | Remote",
        description: [
            "Architected the backend of Nawafiz AI, an Arabic-first real-estate knowledge & smart search engine, using FastAPI, Pydantic, and SQLAlchemy with a clean layered architecture.",
            "Designed and implemented a Celery, RabbitMQ, and Redis task-queue system for heavy background workflows.",
            "Developed an Agentic RAG pipeline with LangGraph and DSPy, using Qdrant for dense vector retrieval and PostgreSQL for structured data and document storage.",
            "Built an Arabic-first entity resolution system using LLM-generated aliases stored in PostgreSQL, with Redis for fuzzy matching of compound names and cities.",
            "Designed the observability stack (Langfuse for LLM tracing, Prometheus and Grafana for system metrics) and containerized 12+ services with Docker Compose behind an Nginx reverse proxy."
        ]
    },
    {
        role: "Research Assistant",
        company: "Brownian Labs",
        period: "Dec 2024 – Nov 2025",
        type: "Research Group | Remote",
        description: [
            "Preprocessed input data with spatio-temporal cropping to prepare it for the deep learning model.",
            "Implemented a Physics-Informed DDIM for enhancing low-resolution flow fields using PDE-guided constraints.",
            "Designed a hybrid loss function combining MSE with a PDE residual to keep the model consistent with Navier-Stokes physics."
        ]
    },
    {
        role: "AI Engineer",
        company: "IDentFace",
        period: "Aug 2024 – Nov 2024",
        type: "Freelance | Remote",
        description: [
            "Developed a face recognition system with human-in-the-loop feedback and version-controlled embeddings.",
            "Designed system logic enabling multiple embedding approaches and adaptive user updates; achieved 87.2% accuracy on the LFW dataset."
        ]
    }
];

export const PROJECTS = [
    {
        title: "AINO",
        subtitle: "Node-Based Machine Learning Workflow Platform",
        period: "Nov 2024 – Present",
        award: "Top 10 at Egypt IoT & AI Challenge",
        links: {
            code: "https://github.com/MoNafea01/AI-NO",
            demo: "https://www.youtube.com/watch?v=el-Ggeef4ZM"
        },
        description: [
            "Architected a decoupled, high-performance execution engine using FastAPI for CRUD operations and Celery/RabbitMQ for heavy background computation, reducing main API thread blocking to 0%.",
            "Engineered an optimized DAG executor that resolves node dependencies via topological sorting, with concurrent execution of nodes within the same topological level.",
            "Developed a custom state-hashing execution cache for incremental workflow resumption, plus a version-control system supporting undo/redo and restore.",
            "Created a proprietary encrypted project format (.ainoprj) to secure and commercialize workflow distribution.",
            "Engineered a multi-agent system integrated with the backend APIs via an MCP tool to build pipelines and execute tasks."
        ],
        stack: ["FastAPI", "Celery", "RabbitMQ", "Redis", "PostgreSQL", "SQLAlchemy", "Docker Compose", "Nginx", "Scikit-Learn", "Keras", "TensorFlow"]
    },
    {
        title: "LiveKit Saudi End-of-Utterance Detector",
        subtitle: "EOU detection for Saudi Arabic",
        period: "Oct 2025 – Dec 2025",
        links: {
            code: "https://github.com/MoNafea01",
            demo: "https://huggingface.co/spaces/MoNafea01/Saudi-Eou-AraBERT"
        },
        description: [
            "Engineered an end-of-utterance detection system optimized for the Saudi Arabic dialect; fine-tuned AraBERT with LoRA for efficient, accurate sequence classification.",
            "Developed a custom LiveKit turn-detector plugin that infers EOU probabilities from conversation context.",
            "Curated a custom Saudi EOU dataset, tracked training experiments with Weights & Biases, and deployed an interactive Gradio demo on Hugging Face Spaces."
        ],
        stack: ["LiveKit", "Hugging Face", "PyTorch", "AraBERT", "Groq", "Cartesia", "Gradio", "Wandb", "pytest"]
    },
    {
        title: "Backend-Agnostic RAG System",
        subtitle: "Pluggable Storage & LLM Providers",
        period: "Nov 2025 – Feb 2026",
        links: {
            code: "https://github.com/MoNafea01/mini-rag",
            demo: "https://github.com/MoNafea01/mini-rag"
        },
        description: [
            "Refactored a fixed RAG stack into a fully backend-agnostic design: abstracted the document store (MongoDB / PostgreSQL) and vector store (Qdrant / pgvector) behind independent interfaces, making all four combinations switchable from one config file with zero code change.",
            "Extended the LLM-provider abstraction with a Groq adapter alongside OpenAI / Ollama / Cohere, keeping a single call interface across all four.",
            "Deployed with Docker Compose, using Celery, Redis, and RabbitMQ for asynchronous parsing and embedding."
        ],
        stack: ["FastAPI", "Postgres", "MongoDB", "Qdrant", "pgvector", "Docker", "Celery", "Redis", "RabbitMQ"]
    },
    {
        title: "LLM Fine-tuning",
        subtitle: "Structured Metadata Extraction",
        period: "Nov 2025 – Dec 2025",
        links: {
            code: "https://colab.research.google.com/drive/171LmPJCTPSa7UmZrZLci1z3u1AWjByJ8#scrollTo=Wkigp2KPVgqU",
            demo: "https://huggingface.co/spaces/MoNafea01/news-analyzer"
        },
        description: [
            "Fine-Tuned Qwen2.5:1.5b using QLoRA via LLaMA-Factory to extract metadata from news articles.",
            "Deployed model using vLLM on a Linux server, maximizing inference speed.",
            "Validated system performance with Locust stress tests."
        ],
        stack: ["LLaMA-Factory", "vLLM", "PyTorch", "Wandb", "Qwen", "Locust"]
    },
    {
        title: "Garbage Classifier",
        subtitle: "CNN & Random Forest Hybrid",
        period: "Jul 2024 – Aug 2024",
        links: {
            code: "https://www.kaggle.com/code/mohamednafea01/garbage-classification-cnn-rf-accuracy-74/"
        },
        description: [
            "Achieved 74% accuracy without data augmentation on Garbage Classification dataset.",
            "Concluded that CNN as a feature extractor with RF generalizes best."
        ],
        stack: ["TensorFlow", "Keras", "Scikit-Learn", "Matplotlib"]
    },
    {
        title: "Weather Prediction",
        subtitle: "Australian Weather ML Model",
        period: "Apr 2025 – May 2025",
        links: {
            code: "https://colab.research.google.com/drive/13tMNZEl5n93IAGyVlVYomby9WseMWmJN"
        },
        description: [
            "Implemented ML algorithms (Logistic Regression, Random Forest) achieving 85% accuracy.",
            "Applied data cleaning and feature engineering."
        ],
        stack: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
    },
    {
        title: "Victoris2",
        subtitle: "Product Price Prediction",
        period: "Aug 2023 – Sep 2023",
        links: {
            code: "https://github.com/MoNafea01/Victoris2-IEEE_Competition-Product_Price_Prediction-2023"
        },
        description: [
            "Engineered 12+ features impacting price.",
            "Improved RMSE by 79% through feature scaling and tuning using Random Forest/KNN."
        ],
        stack: ["Python", "Pandas", "Scikit-Learn"]
    }
];

export const SKILLS = {
    "Programming Languages": ["Python", "C#", "SQL"],
    "AI & LLM": ["LangGraph", "LangChain", "DSPy", "RAG & Agentic RAG", "Multi-Agent Systems", "MCP", "Hugging Face", "LLaMA-Factory", "Fine-tuning (LoRA/QLoRA)", "Prompt Engineering", "vLLM"],
    "Machine Learning": ["PyTorch", "TensorFlow/Keras", "Scikit-Learn", "NumPy", "Pandas", "Diffusion Models"],
    "Backend & Data": ["FastAPI", "REST API Design", "SQLAlchemy", "Pydantic", "Celery", "PostgreSQL", "MongoDB", "Redis", "Qdrant/pgvector", "MSSQL", ".NET/EF6"],
    "Infra & MLOps": ["Docker & Compose", "Nginx", "RabbitMQ", "CI/CD (GitHub Actions)", "Prometheus", "Grafana", "Langfuse", "Wandb", "Azure"],
    "Practices": ["System Design", "Git", "Testing (pytest)", "Agile", "Code Review", "Team Leadership"],
    "Languages": ["Arabic (Native)", "English (Fluent)"]
};

export const CERTIFICATES = [
    { name: "Microsoft Certified: Azure AI Engineer Associate", date: "Dec 2025 – Dec 2026", link: "https://learn.microsoft.com/api/credentials/share/en-us/MohamedKamalHosniNafea/828B411E89303CD5?sharingId=2880F06DA7588263" },
    { name: "AI Engineer Path | IBM", date: "Jan 2026", link: "https://www.coursera.org/account/accomplishments/badge/3nnHyPZvTC65x8j2bzwuvQ" },
    { name: "Generative AI Specialist | DEPI", date: "Oct 2024", link: "https://drive.google.com/file/d/1-neR1ttcKSpuLF-93OO0uVTMUWNsUfNv" },
    { name: "ML Engineer | NTI", date: "Sep 2024", link: "https://drive.google.com/file/d/19Ac0qndmPRCPjriHbQ4eugyEBfrcNMDZ" },
    { name: "Supervised Machine Learning | DeepLearning.AI", date: "Aug 2023", link: "https://www.coursera.org/account/accomplishments/certificate/5Q24UMGEYFN2" }
];
