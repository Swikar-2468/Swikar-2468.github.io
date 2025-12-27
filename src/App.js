import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Award, Code, Database, Brain, TrendingUp } from 'lucide-react';

// ============================================================================
// DATA FILES - In a real project, these would be separate JSON files
// ============================================================================

const profileData = {
  name: "Swikar Basnet",
  role: "Computer Engineering Student enthusiastic about AI, Machine Learning and Data Analytics",
  // tagline: "Transforming data into actionable insights through machine learning and advanced analytics",
  email: "swikarbasnet30@gmail.com",
  github: "https://github.com/Swikar-2468",
  linkedin: "https://www.linkedin.com/in/swikar-basnet-548516330/",
  bio: "I'm a passionate computer engineering student with a strong foundation in machine learning, AI and data analysis. I am interested on solving complex problems using data-driven approaches that create real-world impact.",
  education: "Bachelors in Computer Engineering with AI specialization | Expected 2026",
  location: "Kathmandu, Nepal"
};

export const skillsData = {
  aiml: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Neural Networks"],
  data: ["Data Analysis", "Statistical Modeling", "Data Visualization"],
  programming: ["Python", "SQL", "JavaScript", "C++", "C"],
  tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Power BI"]
};

export const projectsData = [
  {
    id: "Nepali Text Based Hate Content Classification",

    name: "Nepali Text Based Hate Content Classification",

    shortDescription: "NLP-based system for detecting and classifying hate and offensive content in Nepali text from social media and online platforms.",

    featured: true,

    problem: "Online platforms in Nepal face increasing challenges in moderating hate speech and offensive language due to the lack of automated tools for Nepali text, making manual moderation slow, inconsistent, and ineffective at scale.",

    dataset: "10000+ Nepali text samples collected from social media platforms, labeled as hate, offensive, or non offensive with multiclass calssification in offensive categorized as offensive-sexist, offensive-racist, offensive-racist or other offensive.",

    approach: "Developed a multi-stage NLP pipeline including Nepali text normalization, tokenization, and stopword removal....",

    models: ["XLM-RoBERTa (fine-tuned for Nepali)", "GRU", "Random Forest", "SVM", "Logistic Regression", "Naive Bayes"],

    tools: ["Python", "TensorFlow", "Hugging Face Transformers", "NLTK", "Pandas", "NumPy"],

    results: "Achieved high classification performance with reliable detection of hate and offensive content. The system significantly reduced manual moderation effort and improved content monitoring efficiency for Nepali-language platforms.",

    metrics:
    {
    // accuracy: "94.2%",
    // f1Score: "0.93",
    // processingSpeed: "1000 texts/min"
    },

    github: "https://github.com/Swikar-2468/major-project",

    image: null
  }
  // {
  //   id: "stock-predictor",
  //   name: "Stock Price Prediction Model",
  //   shortDescription: "Time series forecasting model for predicting stock market trends",
  //   featured: true,
  //   problem: "Individual investors lack sophisticated tools for predicting short-term stock price movements based on historical patterns and market indicators.",
  //   dataset: "10 years of historical data for S&P 500 stocks, including OHLCV data, technical indicators, and sentiment scores from financial news",
  //   approach: "Developed a hybrid model combining LSTM networks for sequence learning with technical indicators and sentiment analysis. Used sliding window approach for time series.",
  //   models: ["LSTM Neural Network", "GRU", "ARIMA (baseline)", "XGBoost"],
  //   tools: ["Python", "Keras", "TensorFlow", "yFinance", "Plotly", "Streamlit"],
  //   results: "Outperformed baseline ARIMA model by 23% on RMSE. Achieved 67% directional accuracy for 5-day predictions. Deployed interactive dashboard for real-time predictions.",
  //   metrics: {
  //     rmse: "2.34",
  //     directionalAccuracy: "67%",
  //     sharpeRatio: "1.45"
  //   },
  //   github: "https://github.com/alexchen/stock-predictor",
  //   image: null
  // },
  // {
  //   id: "healthcare-diagnosis",
  //   name: "Medical Image Classification",
  //   shortDescription: "CNN-based system for detecting pneumonia from chest X-rays",
  //   featured: true,
  //   problem: "Early detection of pneumonia from chest X-rays requires expert radiologists, leading to delays in diagnosis, especially in resource-constrained settings.",
  //   dataset: "5,863 chest X-ray images (JPEG) from Guangzhou Women and Children's Medical Center, labeled as Normal or Pneumonia",
  //   approach: "Fine-tuned pre-trained ResNet50 model using transfer learning. Applied data augmentation (rotation, zoom, flip) to prevent overfitting. Used class weights to handle imbalanced dataset.",
  //   models: ["ResNet50 (transfer learning)", "DenseNet121", "Custom CNN", "Ensemble"],
  //   tools: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "Google Colab"],
  //   results: "Achieved 96.8% accuracy and 97.2% recall (crucial for medical diagnosis). Model processes images in under 2 seconds. Published findings in university research journal.",
  //   metrics: {
  //     accuracy: "96.8%",
  //     precision: "95.1%",
  //     recall: "97.2%"
  //   },
  //   github: "https://github.com/alexchen/medical-imaging",
  //   image: null
  // },
  // {
  //   id: "recommendation-engine",
  //   name: "Personalized Content Recommendation System",
  //   shortDescription: "Collaborative filtering system for personalized content suggestions",
  //   featured: true,
  //   problem: "Content platforms need to deliver personalized recommendations to increase user engagement and retention in a highly competitive market.",
  //   dataset: "2 million user-item interactions from a streaming platform, including ratings, watch history, and user demographics",
  //   approach: "Built a hybrid recommendation system combining collaborative filtering (matrix factorization) with content-based filtering using item features. Implemented cold start solutions.",
  //   models: ["Matrix Factorization (SVD)", "Neural Collaborative Filtering", "Content-Based Filtering", "Hybrid Ensemble"],
  //   tools: ["Python", "Surprise", "TensorFlow", "Spark MLlib", "Redis", "PostgreSQL"],
  //   results: "Improved click-through rate by 34% and average session duration by 28%. Reduced cold start issues for new users by 45%. System handles 10,000 requests/second.",
  //   metrics: {
  //     precision: "0.82",
  //     recall: "0.76",
  //     ndcg: "0.89"
  //   },
  //   github: "https://github.com/alexchen/recommendation-engine",
  //   image: null
  // },
  // {
  //   id: "fraud-detection",
  //   name: "Credit Card Fraud Detection",
  //   shortDescription: "Real-time anomaly detection system for fraudulent transactions",
  //   featured: false,
  //   problem: "Financial institutions lose billions annually to credit card fraud. Traditional rule-based systems have high false positive rates.",
  //   dataset: "284,807 credit card transactions with 492 frauds (highly imbalanced dataset, 0.172% fraud rate)",
  //   approach: "Implemented anomaly detection using isolation forests and autoencoders. Used SMOTE for handling class imbalance. Created real-time scoring API.",
  //   models: ["Isolation Forest", "Autoencoder", "XGBoost", "Random Forest"],
  //   tools: ["Python", "Scikit-learn", "TensorFlow", "FastAPI", "Docker", "Prometheus"],
  //   results: "Achieved 99.8% accuracy with 0.02% false positive rate. Detected 96% of fraudulent transactions. Reduced investigation time by 60%.",
  //   metrics: {
  //     accuracy: "99.8%",
  //     precision: "0.94",
  //     recall: "0.96"
  //   },
  //   github: "https://github.com/alexchen/fraud-detection",
  //   image: null
  // },
  // {
  //   id: "chatbot-assistant",
  //   name: "AI-Powered Customer Service Chatbot",
  //   shortDescription: "NLP chatbot for automated customer support with 24/7 availability",
  //   featured: false,
  //   problem: "Customer service teams are overwhelmed with repetitive queries, leading to long wait times and reduced customer satisfaction.",
  //   dataset: "50,000 customer service conversations across multiple channels, annotated with intent labels and entity tags",
  //   approach: "Developed intent classification system using BERT. Implemented dialogue management with state tracking. Integrated with knowledge base for accurate responses.",
  //   models: ["BERT (intent classification)", "Named Entity Recognition", "Seq2Seq with Attention", "Retrieval-based QA"],
  //   tools: ["Python", "Rasa", "Hugging Face", "FastAPI", "MongoDB", "React"],
  //   results: "Automated 73% of customer inquiries. Reduced average response time from 12 minutes to 8 seconds. Achieved 88% customer satisfaction rating.",
  //   metrics: {
  //     intentAccuracy: "91%",
  //     automationRate: "73%",
  //     csat: "88%"
  //   },
  //   github: "https://github.com/alexchen/chatbot-assistant",
  //   image: null
  // }
];

export const certificationsData = [
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage",
    year: "2025",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6926ae0f4afd99a1b958ae4b_1765035897183_completion_certificate.pdf"
  },
  {
    title: "Natural Language Processing (NLP) in Python",
    issuer: "DataCamp",
    year: 2025,
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/53393799610c1742ae78051c939fd7e0ae4bc15d"
  },
  {
    title: "Introduction to Statistics in Python",
    issuer: "DataCamp",
    year: 2025,
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9c5c8152d84cc559483ef165c792a5c6d5b6a246"
  },

  {
    title: "Data Science with Python",
    issuer: "Khwopa College of Engineering",
    year: 2024,
    // paste an image in here
    

  },
  {
    title: "Professional Data Engineer",
    issuer: "Google Cloud",
    year: 2023,
    credentialUrl: "https://cloud.google.com/certification"
  }
];

export const experienceData = [
  {
    title: "Machine Learning Intern",
    company: "Tech Innovations Inc.",
    period: "Summer 2024",
    description: "Developed predictive models for customer churn, improving retention by 15%. Worked with cross-functional teams to deploy ML solutions to production."
  },
  {
    title: "Data Science Research Assistant",
    company: "University AI Lab",
    period: "2023 - Present",
    description: "Conducting research on neural network optimization techniques. Published 2 papers on efficient training methods for large language models."
  },
  {
    title: "Analytics Intern",
    company: "DataDriven Solutions",
    period: "Summer 2023",
    description: "Built ETL pipelines processing 10M+ records daily. Created interactive dashboards using Tableau, enabling data-driven decision making across departments."
  }
];

// ============================================================================
// COMPONENTS
// ============================================================================

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = ['Home', 'Projects', 'Skills & Experience', 'Certifications', 'About', 'Contact'];
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('Home')}
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition"
          >
            {profileData.name}
          </button>
          <div className="hidden md:flex gap-6">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`transition ${
                  currentPage === item 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <select 
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              className="px-3 py-2 border rounded-lg"
            >
              {navItems.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = ({ setCurrentPage, setSelectedProject }) => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {profileData.name}
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-6">
              {profileData.role}
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {profileData.tagline}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => setCurrentPage('Projects')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                View My Work <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage('Contact')}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills Snapshot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard icon={<Brain />} title="AI & Machine Learning" skills={skillsData.aiml} />
            <SkillCard icon={<Database />} title="Data Analytics" skills={skillsData.data} />
            <SkillCard icon={<Code />} title="Programming" skills={skillsData.programming} />
            <SkillCard icon={<TrendingUp />} title="Tools & Platforms" skills={skillsData.tools} />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                setCurrentPage={setCurrentPage}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('Projects')}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {certificationsData.slice(0, 3).map((cert, idx) => (
              <CertificationCard key={idx} cert={cert} />
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('Certifications')}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              View All Certifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
    <div className="text-blue-600 mb-3">{icon}</div>
    <h3 className="font-semibold text-lg text-gray-900 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project, setCurrentPage, setSelectedProject }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
    <button 
      onClick={() => {
        setSelectedProject(project);
        setCurrentPage('ProjectDetail');
      }}
      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
    >
      View Details <ChevronRight size={16} />
    </button>
  </div>
);

const ProjectsPage = ({ setCurrentPage, setSelectedProject }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
      <p className="text-gray-600 mb-12">A collection of my AI and data analytics projects</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4 text-sm">{project.shortDescription}</p>
            <button 
              onClick={() => {
                setSelectedProject(project);
                setCurrentPage('ProjectDetail');
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View Project <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectDetailPage = ({ project, setCurrentPage }) => {
  if (!project) return null;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button 
        onClick={() => setCurrentPage('Projects')}
        className="text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-2"
      >
        ← Back to Projects
      </button>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>
      <p className="text-xl text-gray-600 mb-8">{project.shortDescription}</p>
      
      <div className="space-y-8">
        <Section title="Problem Statement" content={project.problem} />
        <Section title="Dataset" content={project.dataset} />
        <Section title="Approach" content={project.approach} />
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Models & Algorithms</h2>
          <div className="flex flex-wrap gap-2">
            {project.models.map((model, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {model}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <Section title="Results & Impact" content={project.results} />
        
        {project.metrics && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-gray-600 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-2xl font-bold text-green-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <Github size={20} />
            View on GitHub
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{content}</p>
  </div>
);

const SkillsExperiencePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Skills & Experience</h1>
      
      {/* Technical Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="AI & Machine Learning" skills={skillsData.aiml} />
          <SkillCategory title="Data Analytics" skills={skillsData.data} />
          <SkillCategory title="Programming Languages" skills={skillsData.programming} />
          <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
        </div>
      </section>
      
      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceCard = ({ experience }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-start justify-between mb-2">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
        <p className="text-blue-600 font-semibold">{experience.company}</p>
      </div>
      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{experience.period}</span>
    </div>
    <p className="text-gray-700 mt-3">{experience.description}</p>
  </div>
);

const CertificationsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h1>
      <p className="text-gray-600 mb-12">Professional certifications and credentials</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, idx) => (
          <CertificationCard key={idx} cert={cert} />
        ))}
      </div>
    </div>
  );
};

const CertificationCard = ({ cert }) => (
  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
    <Award className="text-blue-600 mb-3" size={32} />
    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
    <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
    <p className="text-gray-500 text-sm mb-4">{cert.year}</p>
    <a 
      href={cert.credentialUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
    >
      View Credential <ExternalLink size={14} />
    </a>
  </div>
);

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {profileData.bio}
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-700">{profileData.education}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">{profileData.location}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What I'm Looking For</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'm actively seeking opportunities in machine learning engineering, data science, and AI research where I can apply my skills to solve real-world problems and continue learning from experienced professionals.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I'm particularly interested in roles that involve building intelligent systems, working with large-scale datasets, and collaborating with cross-functional teams to drive data-driven decision making.
        </p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-12">I'd love to hear from you! Feel free to reach out for opportunities, collaborations, or just to chat about AI and data.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <Mail className="text-blue-600" size={24} />
              <span>{profileData.email}</span>
            </a>
            
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <Linkedin className="text-blue-600" size={24} />
              <span>LinkedIn Profile</span>
            </a>
            
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
              <Github className="text-blue-600" size={24} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-700 mb-2">
              <strong>Best way to reach me:</strong>
            </p>
            <p className="text-gray-600">
              Send me an email at <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline font-semibold">{profileData.email}</a> or connect with me on LinkedIn. I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'Home' && (
        <HomePage setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} />
      )}
      {currentPage === 'Projects' && (
        <ProjectsPage setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} />
      )}
      {currentPage === 'ProjectDetail' && (
        <ProjectDetailPage project={selectedProject} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'Skills & Experience' && <SkillsExperiencePage />}
      {currentPage === 'Certifications' && <CertificationsPage />}
      {currentPage === 'About' && <AboutPage />}
      {currentPage === 'Contact' && <ContactPage />}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 {profileData.name}. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App