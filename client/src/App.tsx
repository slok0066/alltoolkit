import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import WordCounter from "@/pages/text/word-counter";
import LoremGenerator from "@/pages/text/lorem-generator";
import JsonFormatter from "@/pages/dev/json-formatter";
import Base64Tool from "@/pages/data/base64";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/text/word-counter" component={WordCounter} />
        <Route path="/text/lorem-generator" component={LoremGenerator} />
        <Route path="/dev/json-formatter" component={JsonFormatter} />
        <Route path="/data/base64" component={Base64Tool} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
