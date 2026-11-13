export const PROFILE = {
    name: "Mohamed K. Nafea",
    title: "Backend & AI Engineer",
    email: "monafe301@gmail.com",
    phone: "+20 1129330746",
    location: "Cairo, Egypt",
    github: "https://github.com/MoNafea01",
    linkedin: "https://linkedin.com/in/monafea01",
    kaggle: "https://kaggle.com/mohamednafea01",
    summary: "Backend & AI Engineer with ~1 year of industry experience building Generative-AI and backend systems for startups, plus a year of applied deep-learning research. Hands-on with agentic RAG, LLM fine-tuning (LoRA/QLoRA), and Arabic NLP and voice, on FastAPI / Celery / RabbitMQ / Redis infrastructure. Built an Arabic-first real-estate search engine across 12+ containerized services and led a 3-engineer team delivering a SaaS EdTech platform. Top 10 finalist out of 200+ projects at the Egypt IoT & AI Challenge. Microsoft Certified: Azure AI Engineer Associate.",
    resumeLink: "/portfolio/Mohamed_Nafea.pdf"
};

export const EDUCATION = [
    {
        degree: "B.Eng. Computer & Systems Engineering",
        school: "Zagazig University",
        period: "Oct 2020 – Jul 2025"
    }
];

// Each description line is "Headline: sentence". The Experience section renders the headline in bold.
export const EXPERIENCE = [
    {
        role: "Software Engineer",
        company: "Rashdan Information Technology",
        period: "Apr 2026 – Sep 2026",
        type: "Full-time | On-site, Cairo",
        project: "RiseAcademy | EdTech SaaS platform for live student–instructor tutoring",
        description: [
            "Led End-to-End Platform Delivery: Headed a 3-engineer team; owned task breakdown, code review, and the full SDLC from requirements gathering to production deployment.",
            "Built the Platform Full-Stack: Developed the ASP.NET Web Forms front end (user-facing pages and admin screens) together with the backend, owning features from the UI to the database.",
            "Designed the Relational Data Model: Modeled ~30 entities (MSSQL, EF6) and evolved the schema with the business, replacing enum constants with lookup tables to enforce referential integrity.",
            "Re-Architected into a Layered Design: Added validation/DTO and data-access layers, lifting business and query logic out of UI code-behind onto a shared per-request DB context.",
            "Engineered the Live-Session Video Pipeline: Integrated the Zoom API with event-driven ZAK token generation at join time, resolving recurring meeting-creation failures.",
            "Developed the Booking & Refund Engine: Implemented tiered >24h vs. <24h cancellation rules with a 20% platform commission, dispute management, and instructor payout capture."
        ]
    },
    {
        role: "AI & Backend Engineer",
        company: "Masarat Almustakshef (MMIT)",
        period: "Jan 2026 – Apr 2026",
        type: "Contract | Remote (Saudi Arabia)",
        project: "Nawafiz AI | AI-Powered Real Estate Knowledge & Smart Search Engine",
        description: [
            "Architected the Backend & Task Queue: Built the FastAPI, Pydantic, and SQLAlchemy backend on a layered architecture, with a Celery, RabbitMQ, and Redis queue for heavy background workflows.",
            "Developed an Agentic RAG Pipeline: Combined LangGraph and DSPy with Qdrant for dense vector retrieval and PostgreSQL for structured data and document storage.",
            "Built Arabic-First Entity Resolution: Used LLM-generated aliases stored in PostgreSQL, with Redis for fuzzy matching of compound names and cities.",
            "Designed the Observability Stack: Langfuse for LLM tracing, Prometheus and Grafana for system metrics.",
            "Containerized the Platform: Ran 12+ services with Docker Compose behind an Nginx reverse proxy."
        ]
    },
    {
        role: "Research Assistant",
        company: "Brownian Labs",
        period: "Dec 2024 – Nov 2025",
        type: "Research Group | Remote",
        project: "Physics-informed diffusion models, under the supervision of a UT Dallas PhD researcher",
        description: [
            "Prepared the Training Data: Applied spatio-temporal cropping to the input data for the deep learning model.",
            "Implemented a Physics-Informed Diffusion Model: Built a Physics-Informed DDIM that enhances low-resolution flow fields using PDE-guided constraints.",
            "Implemented a Hybrid Physics Loss: Combined MSE with a PDE residual, keeping the model consistent with Navier-Stokes physics."
        ]
    },
    {
        role: "Software & AI Engineer",
        company: "Freelance",
        period: "Aug 2024 – Nov 2024",
        type: "Self-Employed | Remote",
        project: "IDentFace | Enterprise Face Recognition & Identity System",
        description: [
            "Developed a Face Recognition System: Built it with human-in-the-loop feedback and version-controlled embeddings.",
            "Designed Adaptive Embedding Logic: Enabled multiple embedding approaches and adaptive user updates; achieved 87.2% accuracy on the LFW dataset."
        ]
    }
];

export const PROJECTS = [
    {
        title: "AINO",
        subtitle: "Node-Based Machine Learning Workflow Platform",
        period: "Nov 2024 – Present",
        award: "Top 10 Finalist · Egypt IoT & AI Challenge",
        links: {
            code: "https://github.com/MoNafea01/AI-NO",
            demo: "https://www.youtube.com/watch?v=el-Ggeef4ZM"
        },
        description: [
            "Decoupled execution engine using FastAPI for CRUD operations and Celery/RabbitMQ for heavy background computations, reducing main API thread blocking to 0%. Selected among the Top 10 finalists out of 200+ graduation projects at the Egypt IoT & AI Challenge.",
            "Concurrent DAG executor that resolves node dependencies via Topological Sorting and runs nodes of the same topological level concurrently.",
            "Custom state-hashing execution cache that lets workflows resume incrementally, plus workflow version control with Undo/Redo and Restore.",
            "Proprietary encrypted project format (.ainoprj) to secure and commercialize workflow distribution.",
            "Multi-agent system whose agents call backend APIs through MCP tools to build pipelines and execute tasks."
        ],
        stack: ["FastAPI", "Celery", "RabbitMQ", "Redis", "PostgreSQL", "SQLAlchemy", "Docker Compose", "Nginx", "Scikit-Learn", "Keras", "TensorFlow"]
    },
    {
        title: "LiveKit Saudi End-of-Utterance Detector",
        subtitle: "EOU detection for Saudi Arabic",
        period: "Oct 2025 – Dec 2025",
        links: {
            code: "https://github.com/MoNafea01/Livekit-Saudi-EOU-Detector",
            demo: "https://huggingface.co/spaces/MoNafea01/Saudi-Eou-AraBERT"
        },
        description: [
            "End-of-utterance detection system for the Saudi Arabic dialect: collected and prepared a custom Saudi EOU dataset, then fine-tuned AraBERT with LoRA for efficient and accurate sequence classification.",
            "Custom LiveKit turn-detector plugin that infers EOU probabilities from conversation context.",
            "Tracked training experiments with Weights & Biases and deployed an interactive Gradio demo on Hugging Face Spaces."
        ],
        stack: ["LiveKit", "Hugging Face", "PyTorch", "AraBERT", "Groq", "Cartesia", "Gradio", "Wandb", "pytest"]
    },
    {
        title: "Backend-Agnostic RAG System",
        subtitle: "Pluggable Storage & LLM Providers",
        period: "Nov 2025 – Feb 2026",
        links: {
            code: "https://github.com/MoNafea01/BackendAgnosticRAG"
        },
        description: [
            "Refactored a fixed RAG stack into a fully backend-agnostic design: the document store (MongoDB / PostgreSQL) and vector store (Qdrant / pgvector) sit behind independent interfaces, so all 4 combinations switch from one config file with zero code change.",
            "Unified four LLM providers: added a Groq adapter alongside OpenAI / Ollama / Cohere behind a single call interface.",
            "Asynchronous document parsing and embedding on Celery, with RabbitMQ as a message broker and Redis as a result backend; deployed with Docker Compose and Nginx, monitored with Prometheus and Grafana."
        ],
        stack: ["FastAPI", "LangChain", "Postgres", "MongoDB", "Qdrant", "pgvector", "Docker", "Celery", "Redis", "RabbitMQ", "Prometheus", "Grafana"]
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
            "Fine-tuned Qwen2.5:1.5b with QLoRA via LLaMA-Factory to extract structured metadata (entities, titles, key phrases, and summary) from news articles.",
            "Served the model using vLLM on a Linux server, maximizing inference speed.",
            "Validated system performance and stability under load with a Locust stress test suite."
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
            "Achieved 74% accuracy without data augmentation on the Garbage Classification dataset.",
            "Concluded that CNN as a feature extractor with RF and Grid Search generalizes best."
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
            "Implemented and evaluated multiple ML algorithms (Logistic Regression, Decision Trees, Random Forest, XGBoost), achieving 85% accuracy on the test set.",
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
            "Engineered 12+ features (category embeddings, scaled numerical attributes) and compared multiple regression models, improving RMSE by 79% through feature scaling and tuning.",
            "Performed extensive EDA, correlation analysis, and statistical tests to identify key price-driving features."
        ],
        stack: ["Python", "Pandas", "Scikit-Learn"]
    }
];

export const SKILLS = {
    "Programming Languages": ["Python", "C#", "SQL"],
    "AI & LLM": ["LangGraph", "LangChain", "DSPy", "RAG & Agentic RAG", "Multi-Agent Systems", "MCP", "Hugging Face", "LLaMA-Factory", "Fine-tuning (LoRA/QLoRA)", "Prompt Engineering", "vLLM"],
    "Machine Learning": ["PyTorch", "TensorFlow/Keras", "Scikit-Learn", "NumPy", "Pandas", "Diffusion Models"],
    "Backend & Data": ["FastAPI", "REST API Design", "SQLAlchemy", "Pydantic", "Celery", "PostgreSQL", "MongoDB", "Redis", "Qdrant/pgvector", "MSSQL", ".NET/EF6", "ASP.NET Web Forms"],
    "Infra & MLOps": ["Docker & Compose", "Nginx", "RabbitMQ", "CI/CD (GitHub Actions)", "Prometheus", "Grafana", "Langfuse", "Wandb", "Azure"],
    "Practices": ["System Design", "Git", "Testing (pytest)", "Agile", "Code Review", "Team Leadership"],
    "Languages": ["Arabic (Native)", "English (Fluent)"]
};

export const CERTIFICATES = [
    { name: "Microsoft Certified: Azure AI Engineer Associate", date: "Dec 2025 – Dec 2026", link: "https://learn.microsoft.com/api/credentials/share/en-us/MohamedKamalHosniNafea/828B411E89303CD5?sharingId=2880F06DA7588263" },
    { name: "AI Engineer Path | IBM", date: "Jan 2026", link: "https://coursera.org/verify/professional-cert/PVZ6V9A28S8Y" },
    { name: "Generative AI Specialist | DEPI", date: "Oct 2024", link: "https://drive.google.com/file/d/1-neR1ttcKSpuLF-93OO0uVTMUWNsUfNv" },
    { name: "ML Engineer | NTI", date: "Sep 2024", link: "https://drive.google.com/file/d/19Ac0qndmPRCPjriHbQ4eugyEBfrcNMDZ" },
    { name: "Supervised Machine Learning | DeepLearning.AI", date: "Aug 2023", link: "https://www.coursera.org/account/accomplishments/certificate/5Q24UMGEYFN2" }
];
