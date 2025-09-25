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
            I'm Lemesa Yadeta, an IT professional with a B.Sc. in Computer Science from Dire Dawa University and over five years of experience in academia, government, and the private sector. My expertise includes hardware/software support, network management, ICT systems administration, and data handling. I'm a problem-solver who enjoys teamwork and applying technology to practical challenges.
          </p>
        </div>
        
        <div className="flex justify-center">
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
      </div>
    </section>
  );
};

export default AboutSection;