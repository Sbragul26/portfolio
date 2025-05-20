
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "TradeGuard - AI-Powered Perpetuals Trading DApp on Aptos",
      description: "TradeGuard is an AI-powered decentralized trading platform built on the Aptos blockchain. It enables traders to manage risk effectively by automatically adjusting leverage, hedging positions, and preventing liquidation. The platform leverages real-time market data and AI-driven predictions to execute smart trades, minimizing losses and enhancing profitability. \nBuilt with Move smart contracts, TradeGuard ensures fast, secure, and transparent transactions. The platform integrates seamlessly with Martian Wallet, providing users with an effortless trading experience. By automating trading decisions, traders can avoid emotional biases and optimize their strategies in highly volatile markets.",
      technologies: ["React", "Python", "JavaScript", "Move"],
      githubUrl: "https://github.com/Sbragul26/wqi.dev",
      demoUrl: "https://smartrx.vercel.app/",
      image: "/project.png",
    },
    {
      title: "SmartRx",
      description: "SmartRx is an AI-powered health companion that simplifies and secures medication management. It allows users to analyze prescriptions, track medications, receive timely refill and appointment reminders, and access nearby hospitals or pharmacies through map-based directions. The platform ensures user safety by detecting drug interactions, providing personalized health tips, and maintaining a digital history with emergency QR access for critical situations.",
      technologies: ["React", "Python", "Tailwind CSS"],
      githubUrl: "https://github.com/kanishkhaa/smartrx",
      demoUrl: "https://tradeguard-wqi.vercel.app/",
      image: "/project2.png",
      reversed: true
    },
    {
      title: "SMS Spam Classifier",
      description: "I developed an ML-based SMS spam classifier using Python and scikit-learn, leveraging Natural Language Processing (NLP) techniques to preprocess and categorize messages as either spam or ham. The model was trained on a labeled dataset using supervised learning to enhance its accuracy in detecting spam. To make the solution interactive and accessible, I deployed it using Flask, enabling real-time SMS classification through a user-friendly web interface.",
      technologies: ["React", "Python", "Tailwind CSS"],
      githubUrl: "https://github.com/Sbragul26/SMS-Spam-classifier",
      //demoUrl: "#",
      image: "/project.3.png",
      reversed: true
    },
  ];

  return (
    <Section id="projects">
      <div className="container mx-auto">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work"
        />
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
