import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = {
    characters: text.length,
    words: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
    sentences: text.trim() === "" ? 0 : text.split(/[.!?]+/).length - 1,
    paragraphs: text.trim() === "" ? 0 : text.split(/\n\s*\n/).length,
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Word Counter</h1>
        <p className="text-muted-foreground">
          Count words, characters, sentences and paragraphs in your text.
        </p>
      </div>

      <Textarea
        placeholder="Type or paste your text here..."
        className="min-h-[200px]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">{key}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
