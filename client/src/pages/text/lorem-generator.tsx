import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua"
];

export default function LoremGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [generated, setGenerated] = useState("");

  const generateLorem = () => {
    const result = Array(paragraphs).fill(0).map(() => {
      const sentenceCount = 3 + Math.floor(Math.random() * 3);
      return Array(sentenceCount).fill(0).map(() => {
        const wordCount = 6 + Math.floor(Math.random() * 8);
        return Array(wordCount)
          .fill(0)
          .map(() => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)])
          .join(" ") + ".";
      }).join(" ");
    }).join("\n\n");

    setGenerated(result);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Lorem Ipsum Generator</h1>
        <p className="text-muted-foreground">
          Generate Lorem Ipsum placeholder text for your designs.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <Label htmlFor="paragraphs">Number of paragraphs</Label>
              <Input
                id="paragraphs"
                type="number"
                min="1"
                max="10"
                value={paragraphs}
                onChange={(e) => setParagraphs(parseInt(e.target.value))}
              />
            </div>
            <Button onClick={generateLorem}>Generate</Button>
          </div>
        </CardContent>
      </Card>

      {generated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {generated.split("\n\n").map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>
      )}
    </div>
  );
}
