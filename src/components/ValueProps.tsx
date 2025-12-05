import { Card, CardContent } from "@/components/ui/card";
import { Laptop, TrendingUp, Users, Zap, Heart } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const values = [
  {
    icon: Laptop,
    title: "Tech-Savvy & Organized",
    description: "I stay current with the latest tools and systems to maximize productivity and streamline your operations effortlessly."
  },
  {
    icon: TrendingUp,
    title: "Open to Learning & Highly Adaptable",
    description: "Every business is unique. I quickly adapt to your processes, preferences, and tools to deliver seamless support."
  },
  {
    icon: Users,
    title: "Professional, Respectful & Detail-Oriented",
    description: "I bring a meticulous approach to every task, ensuring accuracy, professionalism, and respect in all interactions."
  },
  {
    icon: Zap,
    title: "Strong Communication & Fast Turnaround",
    description: "Clear communication and timely delivery are my priorities. You'll always know where things stand and when to expect results."
  },
  {
    icon: Heart,
    title: "Treat Each Task with Ownership & Care",
    description: "Your business goals are my goals. I approach every project with dedication, accountability, and genuine commitment to your success."
  }
];

const ValueProps = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Increase Efficiency & Add Value</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering exceptional support with professionalism and dedication
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedItem key={index} index={index}>
                <Card className="card-hover-effect h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
