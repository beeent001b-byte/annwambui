import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    rating: 5,
    text: "Ann transformed our procurement process completely. Her attention to detail and ability to manage multiple vendors simultaneously saved us thousands in operational costs. She's not just a VA, she's a strategic partner.",
    logo: "🏢"
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Ventures Inc",
    rating: 5,
    text: "Working with Ann has been a game-changer for our supply chain management. Her expertise in Odoo and QuickBooks helped us streamline our entire purchasing workflow. Highly professional and always delivers on time.",
    logo: "🌐"
  },
  {
    name: "Jennifer Rodriguez",
    role: "Founder",
    company: "EcoStart Enterprises",
    rating: 5,
    text: "Ann's project management skills are exceptional. She set up our entire Trello workflow and managed supplier communications flawlessly. Her proactive approach and clear communication make her invaluable to our team.",
    logo: "🌱"
  },
  {
    name: "David Omondi",
    role: "Managing Partner",
    company: "Summit Trading Co",
    rating: 5,
    text: "The best procurement assistant we've ever worked with. Ann's supplier research and vendor coordination skills are top-notch. She anticipates needs before they arise and always maintains professional relationships.",
    logo: "📊"
  },
  {
    name: "Lisa Thompson",
    role: "COO",
    company: "Innovate Retail Group",
    rating: 5,
    text: "Ann's expertise in inventory tracking and reporting has given us complete visibility into our supply chain. Her monthly dashboards are clear, actionable, and have helped us make better business decisions.",
    logo: "🛍️"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by entrepreneurs and business leaders worldwide
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="card-hover-effect h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Company Logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{testimonial.logo}</div>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Client Info */}
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
