
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with drag-and-drop functionality.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "#",
      reversed: true
    },
    {
      title: "AI Image Generator",
      description: "An application that uses machine learning models to generate unique images based on text prompts provided by users.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      githubUrl: "#",
      demoUrl: "#"
    }
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
