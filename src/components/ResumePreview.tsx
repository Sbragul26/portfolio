
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, FileText } from "lucide-react";

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumePreview = ({ isOpen, onClose }: ResumePreviewProps) => {
  const [loading, setLoading] = useState(true);
  const resumePath = "/resume.pdf"; // This should be the path to your PDF file

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-1">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        <iframe
          src={resumePath}
          className="w-full h-full"
          onLoad={() => setLoading(false)}
          title="Resume Preview"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ResumePreview;
