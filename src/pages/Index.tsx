import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import PastProjects from "@/components/PastProjects";
import ValueProps from "@/components/ValueProps";
import Contact from "@/components/Contact";

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TechStack />
      <PastProjects />
      <ValueProps />
      <Contact />
      
      <footer className="py-8 px-4 bg-muted/30 text-center text-sm text-muted-foreground">
        <p>© {currentYear} Ann Wambui - Procurement Virtual Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
