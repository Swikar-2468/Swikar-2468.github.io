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
  linkedin: "https://www.linkedin.com/in/swikar-basnet/",
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
    id: "nepali-hate-speech-classification",

    name: "Nepali Text Based Hate Content Classification",

    shortDescription:
      "NLP-based system for detecting and classifying hate and offensive content in Nepali social media text.",

    featured: true,

    problem:
      "Online platforms in Nepal face increasing challenges in moderating hate speech and offensive language due to the lack of automated tools for Nepali text. Manual moderation is slow, inconsistent, and difficult to scale.",

    dataset:
      "10,000+ Nepali text samples collected from social media platforms. The dataset was labeled into multiple classes: hate speech, offensive (sexist, racist, or other offensive), and non-offensive.",

    approach:
      "Developed a multi-stage NLP pipeline including Nepali text normalization, tokenization, stopword removal, and feature representation. Implemented multiple baseline models including Logistic Regression, SVM, Random Forest, and Naive Bayes. Additionally fine-tuned XLM-RoBERTa to better capture contextual semantics in Nepali language.",

    models: [
      "XLM-RoBERTa (fine-tuned)",
      "GRU",
      "Random Forest",
      "SVM",
      "Logistic Regression",
      "Naive Bayes"
    ],

    tools: [
      "Python",
      "TensorFlow",
      "Hugging Face Transformers",
      "NLTK",
      "Pandas",
      "NumPy"
    ],

    results:
      "The system successfully classified hate and offensive content in Nepali text with strong predictive performance, demonstrating the feasibility of automated moderation tools for Nepali-language platforms.",

    metrics: {
      accuracy: "92%",
      f1Score: "0.90",
      recall: "0.88"
    },

    github: "https://github.com/Swikar-2468/major-project",

    image: null
  },

  {
    id: "movie-recommendation-system",

    name: "Movie Recommendation System",

    shortDescription:
      "Personalized movie recommendation system using collaborative filtering techniques.",

    featured: true,

    problem:
    "With thousands of movies available on streaming platforms, users often struggle to discover movies similar to the ones they enjoy. A recommendation system helps users find relevant content quickly.",

    dataset:
    "IMDb 5000+ Movies dataset combined with a movie credits dataset containing cast and crew information. The datasets were merged to enrich movie metadata for better similarity analysis.",

    approach:
    "Built a content-based recommendation system by combining movie metadata such as genres, keywords, cast, and crew into a unified feature representation. Applied text preprocessing and vectorization techniques to transform movie features into numerical vectors, and used cosine similarity to compute similarity scores between movies.",

    models: [
      "Content-Based Filtering",
      "Cosine Similarity"
    ],

    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter Notebook"
    ],

    results:
    "The system successfully recommends movies similar to a selected title based on feature similarity. The recommendation engine was deployed using Streamlit, allowing users to interactively search for movies and receive real-time recommendations.",

    // metrics: {
    //   rmse: "0.87",
    //   precisionAtK: "0.81",
    //   recallAtK: "0.76"
    // },

    github: "https://github.com/Swikar-2468/Movie-Recommender-System",

    image: null
  },

  {
    id: "upper-body-posture-correction",

    name: "Upper Body Posture Correction for Fitness",

    shortDescription:
      "Computer vision based system that detects and corrects upper body posture during exercises.",

    featured: true,

    problem:
      "Incorrect posture during workouts can lead to injuries and ineffective training. Many beginners lack proper guidance when exercising without a trainer.",

    dataset:
      "Real-time webcam video input processed using pose estimation models to detect body keypoints and analyze posture.",

    approach:
      "Used computer vision techniques to detect human body landmarks and analyze upper body posture. Implemented pose estimation to track shoulders, elbows, and spine alignment during exercises. The system provides real-time feedback to help users correct their posture.",

    models: [
      "Pose Estimation",
      "MediaPipe Pose",
      "Computer Vision Keypoint Detection"
    ],

    tools: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy"
    ],

    results:
      "The system was able to detect incorrect upper body posture in real time and provide visual feedback to guide users toward correct form during workouts.",

    metrics: {
      detectionAccuracy: "90%",
      realTimeProcessing: "25 FPS"
    },

    // github: "https://github.com/Swikar-2468",

    // image: null
  }
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
    title: "Data Science with Python",
    issuer: "Khwopa College of Engineering",
    year: 2024,
  },
  
  {
    title: "Introduction to Statistics in Python",
    issuer: "DataCamp",
    year: 2025,
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9c5c8152d84cc559483ef165c792a5c6d5b6a246"
  },

  {
    title: "Hugging Face AI Agents Course",
    issuer: "Hugging Face",
    year: 2025,
    credentialUrl: "https://cdn-uploads.huggingface.co/production/uploads/noauth/Z4qmohQVIpQvD6i3wnMQU.webp"
  }
];

export const experienceData = [
  {
  //   title: "Machine Learning Intern",
  //   company: "Tech Innovations Inc.",
  //   period: "Summer 2024",
  //   description: "Developed predictive models for customer churn, improving retention by 15%. Worked with cross-functional teams to deploy ML solutions to production."
  // },
  // {
  //   title: "Data Science Research Assistant",
  //   company: "University AI Lab",
  //   period: "2023 - Present",
  //   description: "Conducting research on neural network optimization techniques. Published 2 papers on efficient training methods for large language models."
  // },
  // {
  //   title: "Analytics Intern",
  //   company: "DataDriven Solutions",
  //   period: "Summer 2023",
  //   description: "Built ETL pipelines processing 10M+ records daily. Created interactive dashboards using Tableau, enabling data-driven decision making across departments."
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
            {featuredProjects.slice(0, 2).map(project => (
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
      {/* <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </section> */}
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
            © 2026 {profileData.name}. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App