
import { Download, FileText, Building, GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const resumeData = {
    experience: [
      {
        title: "AI Engineer",
        company: "ING Group",
        period: "Jun 2023 - Present",
        responsibilities: [
          "Developing and deploying NLP models for sentiment analysis and entity recognition",
          "Building real-time data processing pipelines using WebSockets and Redis",
          "Integrating machine learning models into Django applications for business intelligence",
          "Collaborating with product teams to define AI features and requirements"
        ]
      },
      {
        title: "Backend Developer Intern",
        company: "Routine of Nepal Banda",
        period: "Jan 2023 - May 2023",
        responsibilities: [
          "Implemented RESTful APIs using Django REST Framework",
          "Developed data processing modules for PostgreSQL databases",
          "Assisted in creating CI/CD pipelines with Docker and Jenkins",
          "Documented code and contributed to technical documentation"
        ]
      }
    ],
    education: [
      {
        degree: "BE Electronics Engineer",
        institution: "Tribhuvan University",
        period: "2019 - 2023",
        details: "Focus on Artificial Intelligence and Machine Learning"
      }
    ],
    certifications: [
      {
        name: "Machine Learning Engineering",
        issuer: "Coursera",
        date: "Dec 2022"
      },
      {
        name: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "Mar 2023"
      },
      {
        name: "Django for Web Development",
        issuer: "Udemy",
        date: "Aug 2022"
      }
    ]
  };

  return (
    <section id="resume" className="section bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Resume</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg mb-6">
            My professional journey and qualifications
          </p>
          <a
            href="/resume.pdf"
            download
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                    <div className="flex items-center gap-2 mb-3 text-foreground/70">
                      <Building size={16} />
                      <span>{job.company}</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg shadow-sm border border-border">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-foreground/70">{edu.institution}</p>
                    <div className="text-sm text-foreground/60 mt-1 flex justify-between">
                      <span>{edu.period}</span>
                    </div>
                    <p className="mt-2 text-foreground/80">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="bg-card p-3 rounded-lg shadow-sm border border-border">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <div className="flex justify-between text-sm text-foreground/70">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
