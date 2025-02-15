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
        className="cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary group-hover:bg-accent/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              {tool.icon && <tool.icon className="h-5 w-5 text-primary" />}
              <CardTitle className="text-xl">{tool.name}</CardTitle>
            </div>
            <CardDescription className="text-sm mt-2">{tool.description}</CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
}