import { categories } from "@/lib/tool-categories";
import { ToolCard } from "@/components/tool-card";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
          Developer Tools
        </h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive collection of tools for developers, designers and content creators.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="space-y-4">
          <div className="flex items-center space-x-2">
            <category.icon className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">{category.name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.tools.map((tool, index) => (
              <ToolCard key={tool.path} tool={tool} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
