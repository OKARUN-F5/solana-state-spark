import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Users, Lightbulb, ChartBar, MessageSquare, Rocket } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("team");
  
  const sections = [
    { id: "team", title: "Team Background", icon: <Users className="h-5 w-5" /> },
    { id: "why", title: "Why We Started", icon: <Lightbulb className="h-5 w-5" /> },
    { id: "market", title: "Market Size", icon: <ChartBar className="h-5 w-5" /> },
    { id: "feedback", title: "Feedback", icon: <MessageSquare className="h-5 w-5" /> },
    { id: "vision", title: "Big Vision", icon: <Rocket className="h-5 w-5" /> },
  ];
  
  const currentIndex = sections.findIndex(section => section.id === activeSection);
  
  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About cToken POP</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating verifiable proof-of-participation tokens for events using Solana's ZK Compression
          </p>
        </div>
        
        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs 
            value={activeSection}
            onValueChange={setActiveSection}
            className="w-full"
          >
            <TabsList className="grid grid-cols-5 mb-8">
              {sections.map((section) => (
                <TabsTrigger 
                  key={section.id}
                  value={section.id}
                  className="flex items-center gap-2"
                >
                  {section.icon}
                  <span>{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="relative min-h-[400px] md:min-h-[500px]">
              <AnimatePresence mode="wait">
                <TabsContent key="team-content" value="team" className="absolute w-full mt-0">
                  <SlideContent>
                    <Card className="glass-card border-none shadow-lg">
                      <CardHeader className="text-center">
                        <CardTitle className="text-3xl gradient-text">Our Team</CardTitle>
                        <CardDescription className="text-lg">Meet the builder behind cToken POP</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center">
                          <div className="w-full max-w-md">
                            <TeamMember 
                              name="AYEDUN TENIOLA" 
                              role="Creator & Developer"
                              background="Blockchain enthusiast with a passion for creating practical solutions using Solana's innovative technologies. Focused on making ZK Compression accessible for real-world use cases."
                            />
                          </div>
                        </div>
                      </CardContent>
                      <SlideNavigation 
                        currentIndex={currentIndex}
                        totalSlides={sections.length}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    </Card>
                  </SlideContent>
                </TabsContent>
                
                <TabsContent key="why-content" value="why" className="absolute w-full mt-0">
                  <SlideContent>
                    <Card className="glass-card border-none shadow-lg">
                      <CardHeader className="text-center">
                        <CardTitle className="text-3xl gradient-text">Why We Started Building</CardTitle>
                        <CardDescription className="text-lg">Solving the friction in event credentialing</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">The Problem</h3>
                          <p className="text-muted-foreground">
                            Traditional event credentialing is cumbersome, expensive, and lacks verifiability. 
                            Physical badges get lost, paper certificates are easily forged, and digital badges often live 
                            in isolated platforms without interoperability.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Our Solution</h3>
                          <p className="text-muted-foreground">
                            Blockchain technology offers powerful verification and ownership features, but traditional 
                            NFTs are too expensive for mass-event usage. That's why we leverage Solana's ZK Compression, 
                            reducing the cost of minting by up to 5000x while maintaining all the benefits of on-chain verification.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">The Innovation</h3>
                          <p className="text-muted-foreground">
                            cToken POP brings the power of compressed NFTs to event organizers through an intuitive platform 
                            that requires no blockchain knowledge to use. Just create an event, scan attendees, and let them 
                            collect verifiable credentials they actually own.
                          </p>
                        </div>
                      </CardContent>
                      <SlideNavigation 
                        currentIndex={currentIndex}
                        totalSlides={sections.length}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    </Card>
                  </SlideContent>
                </TabsContent>
                
                <TabsContent key="market-content" value="market" className="absolute w-full mt-0">
                  <SlideContent>
                    <Card className="glass-card border-none shadow-lg">
                      <CardHeader className="text-center">
                        <CardTitle className="text-3xl gradient-text">Market Size & Opportunity</CardTitle>
                        <CardDescription className="text-lg">The growing demand for verifiable event attendance</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Market Segments</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <MarketSegment
                              title="Tech Conferences"
                              description="Over 10,000 tech conferences annually with 50M+ attendees worldwide seeking to showcase their participation."
                            />
                            <MarketSegment
                              title="Hackathons"
                              description="5,000+ hackathons yearly with participants wanting verifiable proof of their involvement and achievements."
                            />
                            <MarketSegment
                              title="Education & Certification"
                              description="Billions in educational certifications that could benefit from tamper-proof, portable verification."
                            />
                            <MarketSegment
                              title="Cultural & Fan Events"
                              description="Concerts, sports events, and fan meetups where attendees value proof of attendance."
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Adoption Path</h3>
                          <p className="text-muted-foreground">
                            We're starting with tech conferences and hackathons in the blockchain ecosystem, 
                            where understanding of the technology is highest. From there, we'll expand to 
                            mainstream tech events, educational institutions, and eventually entertainment 
                            and cultural events.
                          </p>
                        </div>
                      </CardContent>
                      <SlideNavigation 
                        currentIndex={currentIndex}
                        totalSlides={sections.length}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    </Card>
                  </SlideContent>
                </TabsContent>
                
                <TabsContent key="feedback-content" value="feedback" className="absolute w-full mt-0">
                  <SlideContent>
                    <Card className="glass-card border-none shadow-lg">
                      <CardHeader className="text-center">
                        <CardTitle className="text-3xl gradient-text">Initial Feedback</CardTitle>
                        <CardDescription className="text-lg">Early impressions of our first prototype</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Early Impressions</h3>
                            <p className="text-muted-foreground">
                              This is our first prototype, and we've received initial feedback from two early viewers to help guide our development.
                            </p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <FeedbackCard
                              type="Crypto Enthusiast"
                              quote="The concept is exciting - proof-of-participation tokens could be huge for the Solana ecosystem. I'd love to see more examples of real use cases on the landing page."
                              source="Anonymous Reviewer"
                            />
                            <FeedbackCard
                              type="Software Engineer"
                              quote="The UI is clean and intuitive. Consider adding more visual cues for the QR scanning process to make it even more user-friendly for non-crypto users."
                              source="Technical Reviewer"
                            />
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Next Steps</h3>
                            <p className="text-muted-foreground">
                              We're planning more comprehensive user research and testing as we move beyond this initial prototype stage. We welcome feedback from the community as we refine our product.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <SlideNavigation 
                        currentIndex={currentIndex}
                        totalSlides={sections.length}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    </Card>
                  </SlideContent>
                </TabsContent>
                
                <TabsContent key="vision-content" value="vision" className="absolute w-full mt-0">
                  <SlideContent>
                    <Card className="glass-card border-none shadow-lg">
                      <CardHeader className="text-center">
                        <CardTitle className="text-3xl gradient-text">Our Big Vision</CardTitle>
                        <CardDescription className="text-lg">Building the LinkedIn for IRL experiences</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4 text-center mb-8">
                          <p className="text-xl font-medium">
                            We're building a scalable, affordable infrastructure for proof-of-participation
                            that will become the standard for verifiable event credentials.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <VisionCard
                            title="Short Term"
                            description="Become the go-to platform for proof-of-participation in the Solana ecosystem, focusing on tech events and hackathons."
                          />
                          <VisionCard
                            title="Medium Term"
                            description="Expand beyond crypto-native events to mainstream conferences, education platforms, and certification programs."
                          />
                          <VisionCard
                            title="Long Term"
                            description="Create the LinkedIn for IRL experiences - a comprehensive platform where your attendance and participation across all types of events forms your verifiable experience graph."
                          />
                        </div>
                        
                        <div className="mt-8 text-center">
                          <p className="text-lg font-medium gradient-text">
                            Join us in building the future of verifiable credentials!
                          </p>
                        </div>
                      </CardContent>
                      <SlideNavigation 
                        currentIndex={currentIndex}
                        totalSlides={sections.length}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                      />
                    </Card>
                  </SlideContent>
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
        
        {/* Mobile View - Collapsed Accordion-like experience */}
        <div className="md:hidden">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full p-4 text-left flex items-center gap-3 ${
                    activeSection === section.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-card hover:bg-accent"
                  }`}
                >
                  {section.icon}
                  <span className="font-medium">{section.title}</span>
                </button>
                
                {activeSection === section.id && (
                  <div className="bg-background p-4 border border-border rounded-b-lg">
                    {section.id === "team" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Our Team</h3>
                        <div className="space-y-4">
                          <TeamMember 
                            name="AYEDUN TENIOLA" 
                            role="Creator & Developer"
                            background="Blockchain enthusiast with a passion for creating practical solutions using Solana's innovative technologies. Focused on making ZK Compression accessible for real-world use cases."
                          />
                        </div>
                      </div>
                    )}
                    
                    {section.id === "why" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Why We Started Building</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Traditional event credentialing is cumbersome, expensive, and lacks verifiability. 
                            Blockchain offers powerful verification, but traditional NFTs are too expensive for mass events.
                          </p>
                          <p className="text-muted-foreground">
                            We leverage Solana's ZK Compression to reduce minting costs by up to 5000x while maintaining 
                            all the benefits of on-chain verification.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {section.id === "market" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Market Size & Opportunity</h3>
                        <div className="space-y-4">
                          <MarketSegment
                            title="Tech Conferences"
                            description="Over 10,000 tech conferences annually with 50M+ attendees worldwide."
                          />
                          <MarketSegment
                            title="Hackathons"
                            description="5,000+ hackathons yearly with participants wanting verifiable proof."
                          />
                          <p className="text-muted-foreground">
                            We're starting with tech events and expanding to education, certification, 
                            and cultural events over time.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {section.id === "feedback" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Initial Feedback</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            This is our first prototype, and we've received initial impressions from two early viewers.
                          </p>
                          <FeedbackCard
                            type="Crypto Enthusiast"
                            quote="The concept is exciting - proof-of-participation tokens could be huge for the Solana ecosystem. I'd love to see more examples of real use cases."
                            source="Anonymous Reviewer"
                          />
                          <FeedbackCard
                            type="Software Engineer"
                            quote="The UI is clean and intuitive. Consider adding more visual cues for the QR scanning process for non-crypto users."
                            source="Technical Reviewer"
                          />
                        </div>
                      </div>
                    )}
                    
                    {section.id === "vision" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Our Big Vision</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            We're building a scalable, affordable infrastructure for proof-of-participation
                            that will become the standard for verifiable event credentials.
                          </p>
                          <p className="font-medium">
                            Long-term: "The LinkedIn for IRL experiences" - where your attendance across all types 
                            of events forms your verifiable experience graph.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Helper Components
const TeamMember = ({ name, role, background }) => (
  <div className="p-4 rounded-lg bg-white/50 shadow-sm">
    <h4 className="font-semibold text-lg">{name}</h4>
    <p className="text-primary font-medium">{role}</p>
    <p className="text-muted-foreground mt-2 text-sm">{background}</p>
  </div>
);

const MarketSegment = ({ title, description }) => (
  <div className="p-4 rounded-lg bg-white/50 shadow-sm">
    <h4 className="font-semibold">{title}</h4>
    <p className="text-muted-foreground text-sm mt-1">{description}</p>
  </div>
);

const FeedbackCard = ({ type, quote, source }) => (
  <div className="p-4 rounded-lg bg-white/50 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{type}</span>
    </div>
    <p className="italic text-muted-foreground">"{quote}"</p>
    <p className="text-right text-sm font-medium mt-2">— {source}</p>
  </div>
);

const VisionCard = ({ title, description }) => (
  <div className="p-4 rounded-lg bg-white/50 shadow-sm text-center">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const SlideContent = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const SlideNavigation = ({ currentIndex, totalSlides, handleNext, handlePrev }) => (
  <CardFooter className="flex justify-between pt-4">
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handlePrev} 
      disabled={currentIndex === 0}
    >
      <ArrowLeft className="mr-1 h-4 w-4" /> Previous
    </Button>
    <span className="text-sm text-muted-foreground">
      {currentIndex + 1} of {totalSlides}
    </span>
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleNext} 
      disabled={currentIndex === totalSlides - 1}
    >
      Next <ArrowRight className="ml-1 h-4 w-4" />
    </Button>
  </CardFooter>
);

export default AboutPage;
