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
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:flex justify-center lg:justify-end">
            <TiltedCard
              imageSrc={lemesaPhoto}
              altText="Lemesa Yadeta - IT Professional"
              captionText="Lemesa Yadeta"
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
          
          <div className="lg:pl-8 lg:col-span-1 col-span-1">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm Lemesa Yadeta, an IT professional with a B.Sc. in Computer Science from Dire Dawa University and over five years of experience in academia, government, and the private sector. My expertise includes hardware/software support, network management, ICT systems administration, and data handling. I'm a problem-solver who enjoys teamwork and applying technology to practical challenges.
            </p>
            
            <a 
              href="/Lemesa_Yadeta_CV.pdf" 
              download="Lemesa_Yadeta_CV.pdf"
              className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;