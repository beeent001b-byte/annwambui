import { Card, CardContent } from "@/components/ui/card";
import { LazyImage } from "@/components/ui/lazy-image";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Business Trip Itinerary",
    description: "Comprehensive travel planning and scheduling for annual tech conference",
    image: project1,
    category: "Executive Assistance"
  },
  {
    title: "Inbox Management System",
    description: "Organized email categorization and response tracking for virtual assistant operations",
    image: project2,
    category: "Admin Support"
  },
  {
    title: "Monthly Expense Tracker",
    description: "Budget analysis and expense categorization dashboard with visual reporting",
    image: project3,
    category: "Finance & Reporting"
  },
  {
    title: "Client Onboarding Workflow",
    description: "Streamlined project management board for client onboarding and task tracking",
    image: project4,
    category: "Project Management"
  }
];

const PastProjects = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Examples of templates, systems, and deliverables that showcase quality and attention to detail
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover-effect overflow-hidden group">
              <div className="relative overflow-hidden h-64">
                <LazyImage 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loaderSize="md"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
