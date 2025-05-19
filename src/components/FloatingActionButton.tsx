
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble */}
      <div
        className={`bg-card rounded-lg shadow-lg p-4 mb-4 w-72 transform transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-primary">Quick Message</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded-md bg-background mb-3 text-sm resize-none"
            rows={4}
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button type="submit" className="w-full" size="sm">
            Send Message
          </Button>
        </form>
      </div>

      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`rounded-full shadow-lg h-14 w-14 transition-all duration-300 ${
          isOpen ? "rotate-90 bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 animate-pulse" />
        )}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
