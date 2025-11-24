import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardContent className="pt-12 pb-12 px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Looking for someone to take the admin stress off your plate? Someone reliable, smart, and 
                ready to support you and your team? I'm available and ready to help you achieve more with less effort.
              </p>
              <p className="text-muted-foreground">
                Whether you need procurement support, executive assistance, or project management expertise, 
                I'm here to deliver results that matter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                asChild
              >
                <a href="mailto:annwambuiVA@email.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send a Message
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold"
                asChild
              >
                <a href="mailto:annwambuiVA@email.com?subject=Discovery Call Request&body=Hi Ann,%0D%0A%0D%0AI would like to schedule a discovery call to discuss how you can help with my business needs.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Discovery Call
                </a>
              </Button>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:annwambuiVA@email.com" className="hover:underline">
                  annwambuiVA@email.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/annwambui-va" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/annwambui-va
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+254790929283" className="hover:underline">
                  +254 790 929 283
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
