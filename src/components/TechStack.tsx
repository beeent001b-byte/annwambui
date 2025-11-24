import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techCategories = [
  {
    title: "Project Management",
    tools: ["Trello", "MS Project", "Notion"]
  },
  {
    title: "Procurement & Supply Chain",
    tools: ["Zoho Inventory", "Odoo", "Procurify", "SAP Ariba"]
  },
  {
    title: "Admin & Communication",
    tools: ["Google Workspace", "Microsoft Office", "Airtable", "Zoom", "Canva"]
  },
  {
    title: "Finance & Reporting",
    tools: ["QuickBooks", "Excel", "Sheets", "Spreadsheets Compare"]
  },
  {
    title: "AI-Powered Tools",
    tools: ["ChatGPT", "Gemini AI", "Gamma AI"]
  }
];

const TechStack = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I leverage powerful tools to deliver efficient, organized, and high-quality support for your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="card-hover-effect">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
