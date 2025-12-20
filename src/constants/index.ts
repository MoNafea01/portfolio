export const PROFILE = {
    name: "Mohamed K. Nafea",
    title: "AI Engineer",
    email: "monafe301@gmail.com",
    phone: "+20 1129330746",
    location: "Zagazig, Egypt",
    github: "https://github.com/MoNafea01",
    linkedin: "https://linkedin.com/in/monafea01",
    kaggle: "https://kaggle.com/mohamednafea01",
    summary: "Result-oriented AI Engineer specializing in Generative AI and complex Computer Vision systems. Proven expertise in architecting production-ready, event-driven solutions with FastAPI, Docker, MLOps tools, and Cloud Solutions. Proficient in Python, TensorFlow, PyTorch, LangChain, and other relevant technologies.",
    resumeLink: "/Mohamed_Nafea.pdf"
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
        role: "Research Assistant",
        company: "Remote (UTD PhD supervision)",
        period: "Dec 2024 – Nov 2025",
        type: "Part-time",
        description: [
            "Implemented a Physics-Informed DDIM for enhancing low-resolution flow field by using PDE-guided constraints.",
            "Designed a hybrid loss function combining MSE for the denoising objective with a PDE Residual Loss term.",
            "Preprocessed the input data by applying spatio-temporal segmentation, cropping, and resizing of flow field videos."
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
            "Built robust registration and verification pipelines, improving handling of uncentered, multiple, or missing faces.",
            "Achieved 87.2% accuracy score on LFW dataset using deep learning and computer vision techniques."
        ]
    }
];

export const PROJECTS = [
    {
        title: "Mini-RAG",
        subtitle: "Production-Grade RAG System",
        period: "Nov 2025 – Dec 2025",
        links: {
            code: "https://github.com/MoNafea01/mini-rag",
            demo: "https://github.com/MoNafea01/mini-rag"
        },
        description: [
            "Built a RAG system integrating FastAPI, LangChain, and multiple Vector DBs (Qdrant, PGVector).",
            "Designed an event-driven architecture using RabbitMQ and Celery for large-scale document parsing."
        ],
        stack: ["FastAPI", "LangChain", "Postgres", "MongoDB", "Qdrant", "Docker", "Redis", "Celery"]
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
            "Designed the Overall Software Architecture (Service & Repository Layers).",
            "Implemented Backend using Django RESTful framework.",
            "Created a file conversion script for AINOPRJ format."
        ],
        stack: ["Django", "PostgreSQL", "FastAPI", "Uvicorn", "Pydantic"]
    },
    {
        title: "LLM Fine-tuning",
        subtitle: "Structured Metadata Extraction",
        period: "Nov 2025 – Dec 2025",
        links: {
            code: "https://colab.research.google.com/drive/171LmPJCTPSa7UmZrZLci1z3u1AWjByJ8#scrollTo=Wkigp2KPVgqU"
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
    "Languages": ["Python", "Java", "C", "MATLAB", "SQL"],
    "Core CS": ["Data Structures", "OOP", "Design Patterns"],
    "Data & Viz": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
    "ML/DL": ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn"],
    "AI Libraries": ["OpenCV", "YOLO", "NLTK", "Hugging Face", "LangChain"],
    "MLOps": ["Docker", "RabbitMQ", "MLflow", "Prometheus", "Azure AI"],
    "Backend": ["FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"]
};

export const CERTIFICATES = [
    { name: "Microsoft Certified: Azure AI Engineer Associate", date: "Dec 2025 - Dec 2026", link: "https://learn.microsoft.com/api/credentials/share/en-us/MohamedKamalHosniNafea/828B411E89303CD5?sharingId=2880F06DA7588263" },
    { name: "IBM Artificial Intelligence Engineer Path", date: "May 2025", link: "https://www.coursera.org/account/accomplishments/badge/3nnHyPZvTC65x8j2bzwuvQ" },
    { name: "Generative AI Specialist | DEPI", date: "Oct 2024", link: "https://drive.google.com/file/d/1-neR1ttcKSpuLF-93OO0uVTMUWNsUfNv" },
    { name: "Supervised Machine Learning | DeepLearning.AI", date: "Aug 2023", link: "https://www.coursera.org/account/accomplishments/certificate/5Q24UMGEYFN2" },
    { name: "Machine Learning for Data Analysis | NTI", date: "Jul 2024", link: "https://drive.google.com/file/d/19Ac0qndmPRCPjriHbQ4eugyEBfrcNMDZ" }
];
