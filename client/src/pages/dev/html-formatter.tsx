import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ToolLayout } from "@/components/tool-layout";

export default function HtmlFormatter() {
  const [input, setInput] = useState("");
  const [formatted, setFormatted] = useState("");
  const { toast } = useToast();

  const formatHtml = () => {
    try {
      // Basic HTML formatting for now
      const formatted = input
        .replace(/>\s+</g, ">\n<")
        .replace(/</g, "\n<")
        .replace(/>/g, ">\n")
        .split("\n")
        .filter(line => line.trim())
        .map(line => "  " + line.trim())
        .join("\n");

      setFormatted(formatted);
      toast({
        title: "HTML formatted successfully",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Formatting failed",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <ToolLayout
      title="HTML Formatter"
      description="Format and prettify HTML code with proper indentation."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <Card>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Paste your HTML here..."
              className="min-h-[400px] font-mono"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Textarea
              readOnly
              className="min-h-[400px] font-mono"
              value={formatted}
              placeholder="Formatted HTML will appear here..."
            />
          </CardContent>
        </Card>
      </motion.div>

      <div className="flex justify-center mt-4">
        <Button size="lg" onClick={formatHtml}>Format HTML</Button>
      </div>
    </ToolLayout>
  );
}
