import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { useParallax } from "@/hooks/use-parallax";
import profileImage from "@/assets/ann-profile.jpg";

const Hero = () => {
  const parallaxOffset = useParallax(0.4);

  return (
    <section className="relative overflow-hidden">
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 gradient-hero"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Decorative Floating Elements */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative py-20 px-4 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in-up text-center text-primary-foreground">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <LazyImage 
                  src={profileImage} 
                  alt="Ann Wambui - Procurement Virtual Assistant" 
                  className="w-full h-full rounded-full object-cover border-4 border-primary-foreground/20 shadow-2xl"
                  loaderSize="lg"
                  loaderClassName="rounded-full"
                />
              </div>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Hi, I'm Ann Wambui
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl lg:text-2xl opacity-95">
              I'm a <span className="font-semibold">Procurement Virtual Assistant</span> from Kenya, 
              helping entrepreneurs and CEOs handle the backend tasks that keep businesses running smoothly—vendor 
              sourcing, purchase order management, inventory tracking, and procurement reporting—without the 
              overhead of a full-time hire.
            </p>
            <p className="mx-auto mb-10 max-w-3xl text-base md:text-lg opacity-90">
              I'm also a CRM and work management expert, skilled in platforms like Trello, Odoo, Canva, 
              Airtable, Monday.com, Booking.com, and QuickBooks. I set up procurement workflows, manage 
              supplier timelines, and ensure smooth communication, efficient scheduling, and streamlined 
              project tracking from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 shadow-lg border-2 border-primary-foreground/20"
                asChild
              >
                <a href="/MaryAnn_Wambui_Resume.pdf" download="MaryAnn_Wambui_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
