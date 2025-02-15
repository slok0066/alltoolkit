import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function ToolLayout({ children, title, description }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <Link href="/">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-accent">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        {children}
      </motion.div>
    </div>
  );
}
