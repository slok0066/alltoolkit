import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ToolLayout } from "@/components/tool-layout";
import { Copy } from "lucide-react";

export default function WordReplacer() {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [result, setResult] = useState("");
  const { toast } = useToast();

  const replaceWords = () => {
    try {
      if (!text) {
        throw new Error("Please enter text to process");
      }
      if (!findText) {
        throw new Error("Please enter text to find");
      }

      let flags = "g";
      if (!caseSensitive) flags += "i";
      
      let pattern = findText;
      if (wholeWord) pattern = `\\b${pattern}\\b`;
      
      const regex = new RegExp(pattern, flags);
      const replaced = text.replace(regex, replaceText);
      
      setResult(replaced);
      toast({
        title: "Text replaced successfully",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Replacement failed",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      toast({
        title: "Copied to clipboard",
        variant: "default",
      });
    });
  };

  return (
    <ToolLayout
      title="Word Replacer"
      description="Find and replace words in text"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label>Text</Label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here..."
                className="min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Find</Label>
                <Input
                  value={findText}
                  onChange={(e) => setFindText(e.target.value)}
                  placeholder="Text to find"
                />
              </div>

              <div className="space-y-2">
                <Label>Replace With</Label>
                <Input
                  value={replaceText}
                  onChange={(e) => setReplaceText(e.target.value)}
                  placeholder="Text to replace with"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="caseSensitive"
                  checked={caseSensitive}
                  onCheckedChange={(checked) => setCaseSensitive(checked as boolean)}
                />
                <Label htmlFor="caseSensitive">Case Sensitive</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="wholeWord"
                  checked={wholeWord}
                  onCheckedChange={(checked) => setWholeWord(checked as boolean)}
                />
                <Label htmlFor="wholeWord">Whole Words Only</Label>
              </div>
            </div>

            <Button onClick={replaceWords} className="w-full">
              Replace Text
            </Button>

            {result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <Label>Result</Label>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {result}
                  </pre>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </ToolLayout>
  );
}
