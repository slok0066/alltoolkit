import { motion } from "framer-motion";
import { categories } from "@/lib/tool-categories";
import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 bg-sidebar border-r border-sidebar-border hidden md:block p-4"
      >
        <Link href="/">
          <a className="flex items-center space-x-2 mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              DevTools
            </span>
          </a>
        </Link>

        <nav className="space-y-4">
          {categories.map((category) => (
            <div key={category.name}>
              <h2 className="text-sidebar-foreground font-semibold mb-2 flex items-center space-x-2">
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </h2>
              <ul className="space-y-1">
                {category.tools.map((tool) => (
                  <li key={tool.path}>
                    <Link href={tool.path}>
                      <a className={`block px-3 py-2 rounded-md text-sm ${
                        location === tool.path 
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      }`}>
                        {tool.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
