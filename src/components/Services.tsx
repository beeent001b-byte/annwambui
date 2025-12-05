import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, BarChart3, Calendar, Workflow } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const services = [
  {
    icon: ShoppingCart,
    title: "Procurement Support",
    items: [
      "Vendor sourcing and supplier coordination",
      "Purchase order preparation and tracking",
      "Supplier performance research and reporting",
      "Procurement documentation and contract drafting support"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Operations & Reporting",
    items: [
      "Inventory and order tracking",
      "Procurement data entry and analysis",
      "Weekly and monthly reporting dashboards",
      "Expense and invoice management support"
    ]
  },
  {
    icon: Calendar,
    title: "Executive & Admin Assistance",
    items: [
      "Meeting scheduling and coordination (Calendly)",
      "File organization and document control (Google Drive, Dropbox)",
      "Professional templates and presentations (Canva)"
    ]
  },
  {
    icon: Workflow,
    title: "Project Management",
    items: [
      "Task setup and tracking in Trello and Asana",
      "Workflow automation",
      "Progress tracking and system updates",
      "Communication support"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's How I Support Your Business</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive services to streamline your operations and boost productivity
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedItem key={index} index={index}>
                <Card className="card-hover-effect border-border/50 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5 text-lg">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Services;
