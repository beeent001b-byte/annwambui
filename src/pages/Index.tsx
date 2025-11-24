import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ValueProps from "@/components/ValueProps";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <TechStack />
      <ValueProps />
      <Contact />
      
      <footer className="py-8 px-4 bg-muted/30 text-center text-sm text-muted-foreground">
        <p>© 2024 Ann Wambui - Procurement Virtual Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
