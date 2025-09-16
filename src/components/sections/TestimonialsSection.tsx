import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

// Professional testimonials for Lemesa Yadeta
const testimonials = [
  {
    name: 'Dr. Ahmed Hassan',
    username: '@drahmed',
    body: 'Lemesa has been a key member of our technical support team. His problem-solving and professionalism have had significant impact.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    country: '🇪🇹 Ethiopia',
  },
  {
    name: 'Sarah Johnson',
    username: '@sarah_j',
    body: 'Reliable and technically capable under pressure. Important for maintaining system stability in our organization.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Mohammed Ali',
    username: '@mo_ali',
    body: 'Excellent technical support during the 2021 elections. Ensured system stability and security throughout.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇪🇹 Ethiopia',
  },
  {
    name: 'Dr. Fatima Omar',
    username: '@dr_fatima',
    body: 'Outstanding work during COVID-19 data management. Professional and dedicated to accurate reporting.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇪🇹 Ethiopia',
  },
  {
    name: 'James Wilson',
    username: '@jwilson',
    body: 'Minimized system delays and kept workflows running smoothly. Great dedication to student learning.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇬🇧 UK',
  },
  {
    name: 'Aisha Kebede',
    username: '@aisha_k',
    body: 'Professional approach to network configuration and maintenance. Highly recommended for ICT projects.',
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
    country: '🇪🇹 Ethiopia',
  },
  {
    name: 'David Chen',
    username: '@david_c',
    body: 'Impressive technical skills in hardware and software installation. Very responsive support.',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇨🇳 China',
  },
  {
    name: 'Maria Rodriguez',
    username: '@maria_r',
    body: 'Excellent troubleshooting skills and user-friendly approach. Makes complex IT issues simple.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇪🇸 Spain',
  },
  {
    name: 'Robert Taylor',
    username: '@rob_t',
    body: 'Great team player with commitment to excellence. Technology solutions that solve real-world challenges.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇦🇺 Australia',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-50">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="border border-border rounded-lg relative flex h-96 w-full max-w-[800px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
            <div
              className="flex flex-row items-center gap-4"
              style={{
                transform:
                  'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
              }}
            >
              {/* Vertical Marquee (downwards) */}
              <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Vertical Marquee (upwards) */}
              <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Vertical Marquee (upwards) */}
              <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Vertical Marquee (upwards) */}
              <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              {/* Gradient overlays for vertical marquee */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;