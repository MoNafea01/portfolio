export const PROFILE = {
    name: "Mohamed K. Nafea",
    title: "AI Engineer",
    email: "monafe301@gmail.com",
    phone: "+20 1129330746",
    location: "Zagazig, Egypt",
    github: "https://github.com/MoNafea01",
    linkedin: "https://linkedin.com/in/monafea01",
    kaggle: "https://kaggle.com/mohamednafea01",
    summary: "Result-oriented AI Engineer specialized in Generative AI systems. Proven expertise in designing production-ready AI solutions with FastAPI, Docker, MLOps tools, and Microsoft Cloud solutions. Proficient in Python, TensorFlow, PyTorch, LangChain, and related technologies.",
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
        role: "AI & Backend Engineer",
        company: "MMIT",
        period: "Dec 2025 – Present",
        type: "Full-time | Remote",
        description: [
            "Built the backend of an AI system using FastAPI, Pydantic, and SQLAlchemy with a layered architecture for scalability and maintainability.",
            "Deployed an AI-powered Smart Archive using LangGraph, LlamaIndex, and DSPy with Qdrant and PostgreSQL.",
            "Containerized and orchestrated services with Docker and Docker Compose, deployed behind Nginx for request routing."
        ]
    },
    {
        role: "Research Assistant",
        company: "Brownian Labs",
        period: "Dec 2024 – Nov 2025",
        type: "Part-time | Remote",
        description: [
            "Preprocessed input data with spatio-temporal cropping and segmentation to prepare robust flow-field training data.",
            "Implemented a Physics-Informed DDIM for enhancing low-resolution flow field by using PDE-guided constraints.",
            "Designed a hybrid loss function combining MSE and PDE residual constraints to enforce Navier-Stokes consistency."
        ]
    },
    {
        role: "AI Engineer",
        company: "IDentFace",
        period: "Aug 2024 – Nov 2024",
        type: "Part-time | Remote",
        description: [
            "Developed a Face Recognition system with human feedback and version-controlled embeddings.",
            "Designed system logic enabling multiple embedding approaches and adaptive user updates.",
            "Achieved 87.2% accuracy on the LFW dataset using deep learning and computer vision techniques."
        ]
    }
];

export const PROJECTS = [
    {
        title: "Mini-RAG",
        subtitle: "A minimal production-grade RAG system",
        period: "Nov 2025 – Feb 2026",
        links: {
            code: "https://github.com/MoNafea01/mini-rag",
            demo: "https://github.com/MoNafea01/mini-rag"
        },
        description: [
            "Built a RAG system with FastAPI and LangChain, supporting dynamic switching between Postgres and MongoDB with multiple LLM providers and vector stores.",
            "Optimized high-volume ingestion using asynchronous parsing and embedding tasks with Celery, RabbitMQ, and Redis.",
            "Deployed robust infrastructure with Docker Compose and Nginx and added observability using Prometheus and Grafana."
        ],
        stack: ["FastAPI", "LangChain", "Postgres", "MongoDB", "Qdrant", "Docker", "Celery", "Redis", "Prometheus", "Grafana", "Nginx", "RabbitMQ"]
    },
    {
        title: "AINO",
        subtitle: "No Code Platform for AI Development",
        period: "Nov 2024 – Aug 2025",
        award: "Top 10 at Egypt IOT & AI Challenge",
        links: {
            code: "https://github.com/MoNafea01/AI-NO",
            demo: "https://www.youtube.com/watch?v=el-Ggeef4ZM"
        },
        description: [
            "Designed the system architecture (Service and Repository layers) for modular AI node interaction using DRF.",
            "Created a file conversion script for AINOPRJ format.",
            "Developed a multi-Agent AI solution capable of interacting with user & pipelines execution via a CLI tool.",
            "Implemented a custom CLI tool supporting full CRUD operations that communicates with backend server.",
            "Led the team as Project Leader, managing development progress and task distribution."
            ],
        stack: ["Django", "REST API", "PostgreSQL", "FastAPI", "Uvicorn", "Pydantic", "LangChain", "Gradio", "Scikit-Learn", "NumPy", "Pandas", "TensorFlow", "Keras", "OpenCV"]
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
        title: "LiveKit Saudi End-of-Utterance Detector",
        subtitle: "EOU detection for Saudi Arabic",
        period: "Oct 2025 – Dec 2025",
        links: {
            code: "https://github.com/MoNafea01",
            demo: "https://huggingface.co/spaces/MoNafea01/Saudi-Eou-AraBERT"
        },
        description: [
            "Engineered an end-of-utterance detector optimized for Saudi Arabic and fine-tuned AraBERT with LoRA for efficient sequence classification.",
            "Developed a custom LiveKit turn detector plugin that infers EOU probabilities from conversation context.",
            "Curated a custom Saudi EOU dataset, tracked experiments with Weights and Biases, and shipped an interactive Gradio demo."
        ],
        stack: ["LiveKit", "Hugging Face", "PyTorch", "AraBERT", "Gradio", "Wandb", "pytest"]
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
    "SWE": ["OS", "SQL", "Algorithms", "Data Structures", "Computer Networks", "Computer Organization", "OOP", "Python", "Java", "C", "MATLAB"],
    "DS & ML": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow", "PyTorch", "Keras"],
    "AI & LLM Frameworks": ["LangChain", "LangGraph", "DSPy", "LlamaIndex", "Hugging Face", "LLaMA-Factory", "OpenCV", "YOLO"],
    "Backend & Databases": ["FastAPI", "Django", "PostgreSQL", "MongoDB", "Qdrant", "Redis"],
    "MLOps & Infrastructure": ["Azure AI Foundry", "Docker", "RabbitMQ", "Nginx", "MLflow", "Gradio", "Prometheus", "Wandb"],
    "Tools": ["Microsoft Azure", "VS Code", "Postman", "Git", "GitHub", "Google Colab"],
    "Soft Skills": ["Research", "Leadership", "Problem Solving", "Communication", "Time Management", "Critical Thinking"],
    "Languages": ["Arabic (Native)", "English (Fluent)"]
};

export const CERTIFICATES = [
    { name: "Microsoft Certified: Azure AI Engineer Associate", date: "Dec 2025 - Dec 2026", link: "https://learn.microsoft.com/api/credentials/share/en-us/MohamedKamalHosniNafea/828B411E89303CD5?sharingId=2880F06DA7588263" },
    { name: "Deep Learning with PyTorch, Keras and TensorFlow | IBM", date: "Feb 2026", link: "https://www.coursera.org/account/accomplishments/badge/3nnHyPZvTC65x8j2bzwuvQ" },
    { name: "Generative AI Specialist | DEPI", date: "Oct 2024", link: "https://drive.google.com/file/d/1-neR1ttcKSpuLF-93OO0uVTMUWNsUfNv" },
    { name: "Machine Learning | NTI", date: "Jul 2024", link: "https://drive.google.com/file/d/19Ac0qndmPRCPjriHbQ4eugyEBfrcNMDZ" },
    { name: "Supervised Machine Learning | DeepLearning.AI", date: "Aug 2023", link: "https://www.coursera.org/account/accomplishments/certificate/5Q24UMGEYFN2" }
];
