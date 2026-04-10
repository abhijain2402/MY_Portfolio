/** Public folder URLs (works with Vite `base` and filenames with spaces). */
export const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const projectImage = (filename) =>
  assetUrl(`assets/projects/${encodeURIComponent(filename)}`);

export const myProjects = [
  {
    id: 1,
    title: "Loan Risk Classifier using Machine Learning",
    description:
      "Developed an end-to-end machine learning system to predict loan approval and risk classification based on applicant data. The project includes data preprocessing, exploratory data analysis (EDA), feature engineering, and training multiple classification models to improve prediction accuracy.",
    subDescription: [
      "Built a scalable ML system with comprehensive data preprocessing and feature engineering",
      "Implemented multiple classification algorithms for optimal loan risk prediction",
      "Deployed as an interactive web application on Hugging Face Spaces for real-time predictions",
      "Demonstrates practical implementation of ML in financial risk assessment",
    ],
    href: "https://huggingface.co/spaces/abhijain2402/Loan_Risk_Classifier",
    logo: "",
    image: projectImage("loan risk classifier.png"),
    tags: [
      {
        id: 1,
        name: "Python",
        path: assetUrl("assets/logos/python-original.svg"),
      },
      {
        id: 2,
        name: "Machine Learning",
        path: assetUrl("assets/logos/tensorflow.svg"),
      },
      {
        id: 3,
        name: "Scikit-learn",
        path: assetUrl("assets/logos/scikitlearn-original.svg"),
      },
      {
        id: 4,
        name: "Streamlit",
        path: assetUrl("assets/logos/streamlit-original.svg"),
      },
    ],
  },
  {
    id: 2,
    title: "Market Segmentation using PCA and Clustering",
    description:
      "Developed an unsupervised machine learning project to segment customers based on behavioral and spending patterns. The workflow includes data preprocessing, feature scaling, and dimensionality reduction using Principal Component Analysis (PCA).",
    subDescription: [
      "Implemented unsupervised learning techniques for customer segmentation",
      "Applied PCA for dimensionality reduction and K-Means clustering for group identification",
      "Built interactive Streamlit web application for real-time cluster visualization",
      "Demonstrates practical use of ML in customer analytics and targeted marketing",
    ],
    href: "https://market-segmentation-pca-kuabxqmptlx5au69dkwshm.streamlit.app/",
    logo: "",
    image: projectImage("market segmentation.png"),
    tags: [
      {
        id: 1,
        name: "Python",
        path: assetUrl("assets/logos/python-original.svg"),
      },
      {
        id: 2,
        name: "PCA",
        path: assetUrl("assets/logos/numpy-original.svg"),
      },
      {
        id: 3,
        name: "K-Means",
        path: assetUrl("assets/logos/scikitlearn-original.svg"),
      },
      {
        id: 4,
        name: "Streamlit",
        path: assetUrl("assets/logos/streamlit-original.svg"),
      },
    ],
  },
  {
    id: 3,
    title: "Iris Species Classification using Machine Learning",
    description:
      "Developed a machine learning classification model to predict the species of iris flowers based on morphological features such as sepal length, sepal width, petal length, and petal width.",
    subDescription: [
      "Implemented complete ML workflow from data preprocessing to model evaluation",
      "Explored multiple classification algorithms for optimal performance",
      "Built comprehensive model evaluation and comparison system",
      "Demonstrates fundamental concepts of supervised learning and classification",
    ],
    href: "https://github.com/abhijain2402/iris-species-classifier-model",
    logo: "",
    image: projectImage("iris flower classifier.png"),
    tags: [
      {
        id: 1,
        name: "Python",
        path: assetUrl("assets/logos/python-original.svg"),
      },
      {
        id: 2,
        name: "Machine Learning",
        path: assetUrl("assets/logos/scikitlearn-original.svg"),
      },
      {
        id: 3,
        name: "NumPy",
        path: assetUrl("assets/logos/numpy-original.svg"),
      },
      {
        id: 4,
        name: "Pandas",
        path: assetUrl("assets/logos/pandas-original.svg"),
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhi-jain-901a42285",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/abhijain2402",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "BTech Student in AI/ML",
    job: "Sage University, Indore",
    date: "2024-2028",
    contents: [
      "Pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning",
      "Building strong foundation in machine learning algorithms and data science",
      "Developing practical projects using Python, ML libraries, and data analysis tools",
      "Learning advanced concepts in deep learning, computer vision, and NLP",
      "Actively participating in coding competitions and hackathons",
    ],
  },
  {
    title: "Self-Learning & Project Development",
    job: "Personal Projects",
    date: "2023-Present",
    contents: [
      "Developed end-to-end machine learning projects including loan risk classification and market segmentation",
      "Built interactive web applications using Streamlit for ML model deployment",
      "Implemented data preprocessing, feature engineering, and model evaluation techniques",
      "Created portfolio website showcasing technical skills and project work",
      "Continuously learning new technologies and frameworks in AI/ML domain",
    ],
  },
];
export const reviews = [
  {
    name: "Dr. Sharma",
    username: "@professor_sharma",
    body: "Excellent analytical skills and dedication to machine learning projects. Abhi shows great potential in AI research.",
    img: "https://robohash.org/professor",
  },
  {
    name: "Rahul K.",
    username: "@rahul_k",
    body: "Collaborated on ML projects. Abhi's problem-solving approach and coding skills are impressive for a student.",
    img: "https://robohash.org/rahul",
  },
  {
    name: "Priya M.",
    username: "@priya_m",
    body: "Great team player with strong Python and data science skills. Always eager to learn and implement new concepts.",
    img: "https://robohash.org/priya",
  },
  {
    name: "Mentor Guide",
    username: "@mentor_guide",
    body: "Abhi demonstrates excellent understanding of ML algorithms and practical implementation skills.",
    img: "https://robohash.org/mentor",
  },
  {
    name: "Project Partner",
    username: "@project_partner",
    body: "Outstanding work on collaborative ML projects. Abhi brings innovative solutions and clear thinking to every challenge.",
    img: "https://robohash.org/partner",
  },
  {
    name: "Study Group",
    username: "@study_group",
    body: "Abhi's explanations of complex ML concepts are incredibly clear. A valuable member of our learning community.",
    img: "https://robohash.org/study",
  },
  {
    name: "Hackathon Team",
    username: "@hackathon_team",
    body: "Brilliant problem-solving skills in competitive coding. Abhi consistently delivers high-quality solutions under pressure.",
    img: "https://robohash.org/hackathon",
  },
  {
    name: "Research Assistant",
    username: "@research_assistant",
    body: "Shows remarkable aptitude for research methodology and data-driven decision making.",
    img: "https://robohash.org/research",
  },
];
