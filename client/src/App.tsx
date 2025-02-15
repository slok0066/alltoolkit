import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Text & Content
import WordCounter from "@/pages/text/word-counter";
import LoremGenerator from "@/pages/text/lorem-generator";
import MarkdownPreview from "@/pages/text/markdown-preview";
import TextDiff from "@/pages/text/diff";
import QuoteGenerator from "@/pages/text/quotes";

// Development Tools
import JsonFormatter from "@/pages/dev/json-formatter";
import HtmlFormatter from "@/pages/dev/html-formatter";
import CodeBeautifier from "@/pages/dev/code-beautifier";
import RegexTester from "@/pages/dev/regex";
import GitHelper from "@/pages/dev/git-helper";
import SnippetManager from "@/pages/dev/snippets";

// Data & Conversion
import Base64Tool from "@/pages/data/base64";
import CsvToJson from "@/pages/data/csv-json";
import UrlTools from "@/pages/data/url-tools";
import HashGenerator from "@/pages/data/hash";
import FormatConverter from "@/pages/data/format-converter";
import NumberBase from "@/pages/data/number-base";

// Visual & Media
import ColorPicker from "@/pages/visual/color-picker";
import ImageTools from "@/pages/visual/image-tools";
import QrCode from "@/pages/visual/qr-code";
import SvgEditor from "@/pages/visual/svg-editor";
import GradientGenerator from "@/pages/visual/gradient";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />

        {/* Text & Content */}
        <Route path="/text/word-counter" component={WordCounter} />
        <Route path="/text/lorem-generator" component={LoremGenerator} />
        <Route path="/text/markdown-preview" component={MarkdownPreview} />
        <Route path="/text/diff" component={TextDiff} />
        <Route path="/text/quotes" component={QuoteGenerator} />

        {/* Development Tools */}
        <Route path="/dev/json-formatter" component={JsonFormatter} />
        <Route path="/dev/html-formatter" component={HtmlFormatter} />
        <Route path="/dev/code-beautifier" component={CodeBeautifier} />
        <Route path="/dev/regex" component={RegexTester} />
        <Route path="/dev/git-helper" component={GitHelper} />
        <Route path="/dev/snippets" component={SnippetManager} />

        {/* Data & Conversion */}
        <Route path="/data/base64" component={Base64Tool} />
        <Route path="/data/csv-json" component={CsvToJson} />
        <Route path="/data/url-tools" component={UrlTools} />
        <Route path="/data/hash" component={HashGenerator} />
        <Route path="/data/format-converter" component={FormatConverter} />
        <Route path="/data/number-base" component={NumberBase} />

        {/* Visual & Media */}
        <Route path="/visual/color-picker" component={ColorPicker} />
        <Route path="/visual/image-tools" component={ImageTools} />
        <Route path="/visual/qr-code" component={QrCode} />
        <Route path="/visual/svg-editor" component={SvgEditor} />
        <Route path="/visual/gradient" component={GradientGenerator} />

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