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

// Math & Statistics
import Calculator from "@/pages/math/calculator";
import UnitConverter from "@/pages/math/unit-converter";
import RandomGenerator from "@/pages/math/random";
import StatisticalCalculator from "@/pages/math/stats";
import ProbabilityCalculator from "@/pages/math/probability";

// Time & Date
import TimeConverter from "@/pages/time/converter";
import DateCalculator from "@/pages/time/calculator";
import CountdownTimer from "@/pages/time/countdown";

// Security & Encryption
import PasswordGenerator from "@/pages/security/password";
import EncryptionTools from "@/pages/security/encryption";
import JwtDebugger from "@/pages/security/jwt";

// Network & Web
import HttpStatusCodes from "@/pages/network/http-status";
import NetworkTools from "@/pages/network/tools";
import ApiTester from "@/pages/network/api-tester";

// Science & Engineering
import ScientificCalculator from "@/pages/science/calculator";
import FormulaReference from "@/pages/science/formulas";
import UnitConversions from "@/pages/science/units";

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

        {/* Math & Statistics */}
        <Route path="/math/calculator" component={Calculator} />
        <Route path="/math/unit-converter" component={UnitConverter} />
        <Route path="/math/random" component={RandomGenerator} />
        <Route path="/math/stats" component={StatisticalCalculator} />
        <Route path="/math/probability" component={ProbabilityCalculator} />

        {/* Time & Date */}
        <Route path="/time/converter" component={TimeConverter} />
        <Route path="/time/calculator" component={DateCalculator} />
        <Route path="/time/countdown" component={CountdownTimer} />

        {/* Security & Encryption */}
        <Route path="/security/password" component={PasswordGenerator} />
        <Route path="/security/encryption" component={EncryptionTools} />
        <Route path="/security/jwt" component={JwtDebugger} />

        {/* Network & Web */}
        <Route path="/network/http-status" component={HttpStatusCodes} />
        <Route path="/network/tools" component={NetworkTools} />
        <Route path="/network/api-tester" component={ApiTester} />

        {/* Science & Engineering */}
        <Route path="/science/calculator" component={ScientificCalculator} />
        <Route path="/science/formulas" component={FormulaReference} />
        <Route path="/science/units" component={UnitConversions} />

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