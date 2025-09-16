import TiltedCard from '@/components/ui/tilted-card';
import lemesaPhoto from '@/assets/lemesa-photo.jpg';

const AboutSection = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced IT professional with expertise in system administration, network management, and technical support
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TiltedCard */}
          <div className="flex justify-center">
            <TiltedCard
              imageSrc={lemesaPhoto}
              altText="Lemesa Nagari - IT Professional"
              captionText="Lemesa Nagari"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>

          {/* Personal Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Education & Experience</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Bachelor of Science in Computer Science</strong> — Dire Dawa University</span>
                </p>
                <p className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Over <strong>5 years of IT experience</strong> across academic institutions, government, and private sector</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Personal Traits & Approach</h3>
              <p className="text-muted-foreground">
                Problem-solver, committed to excellence, good in teams. Interested in technology and its use in solving real-world challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Core Services & Skills</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Hardware & Software Installation",
                  "Network Configuration & Maintenance", 
                  "Technical Support & Troubleshooting",
                  "ICT Systems Management",
                  "Data Management & Analysis"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Professional Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-foreground">Dire Dawa University</h4>
                  <p className="text-sm text-muted-foreground">Chief Technical Assistant I / Senior Technical Assistant</p>
                  <p className="text-xs text-muted-foreground mt-1">Installing/configuring systems, maintaining campus networks, teaching IT modules</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-foreground">National Election Board of Ethiopia</h4>
                  <p className="text-sm text-muted-foreground">IT Supervisor (2021 Elections)</p>
                  <p className="text-xs text-muted-foreground mt-1">Ensuring system stability and security during national elections</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-foreground">Moti Engineering PLC</h4>
                  <p className="text-sm text-muted-foreground">ICT Technician Analyst II</p>
                  <p className="text-xs text-muted-foreground mt-1">Maintaining office systems, deploying solutions, solving IT challenges</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Phone:</strong> +251 915 764 334 / +251 927 874 515</p>
                <p><strong>Email:</strong> Lemu4515@gmail.com</p>
                <p><strong>Location:</strong> Dire Dawa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;