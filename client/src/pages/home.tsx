import { motion } from "framer-motion";
import { categories } from "@/lib/tool-categories";
import { ToolCard } from "@/components/tool-card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="p-6 space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Developer Tools
        </h1>
        <p className="text-muted-foreground text-xl">
          A comprehensive collection of tools for developers, designers and content creators.
        </p>
      </motion.div>

      {categories.map((category, categoryIndex) => (
        <motion.div 
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3">
            <category.icon className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-semibold">{category.name}</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {category.tools.map((tool, index) => (
              <ToolCard key={tool.path} tool={tool} index={index} />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}