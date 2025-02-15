import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      {/* Main content */}
      <main className="container mx-auto">
        {children}
      </main>
    </motion.div>
  );
}