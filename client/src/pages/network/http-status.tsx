
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToolLayout } from "@/components/tool-layout";

const HTTP_CODES = {
  "200": "OK",
  "201": "Created",
  "400": "Bad Request",
  "401": "Unauthorized",
  "403": "Forbidden",
  "404": "Not Found",
  "500": "Internal Server Error",
  "502": "Bad Gateway",
  "503": "Service Unavailable"
};

export default function HttpStatusCodes() {
  const [search, setSearch] = useState("");

  const filteredCodes = Object.entries(HTTP_CODES).filter(
    ([code, desc]) => 
      code.includes(search) || 
      desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ToolLayout
      title="HTTP Status Codes"
      description="Reference for common HTTP status codes and their meanings"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardContent className="pt-6">
            <Input
              placeholder="Search status codes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {filteredCodes.map(([code, desc]) => (
            <Card key={code}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-lg">{code}</span>
                  <span className="text-muted-foreground">{desc}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}
