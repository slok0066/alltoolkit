import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tool } from "@/lib/tool-categories";
import { Link } from "wouter";

export function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <Link href={tool.path}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="cursor-pointer"
        whileHover={{ scale: 1.02 }}
      >
        <Card className="h-full hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle>{tool.name}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
}
