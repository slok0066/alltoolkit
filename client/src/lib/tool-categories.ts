import { IconType } from "react-icons";
import { FiType, FiCode, FiDatabase, FiEye, FiPercent, FiClock, FiLock, FiGlobe, FiWifi, FiActivity } from "react-icons/fi";

export interface Tool {
  name: string;
  description: string;
  path: string;
}

export interface Category {
  name: string;
  icon: IconType;
  tools: Tool[];
}

export const categories: Category[] = [
  {
    name: "Text & Content",
    icon: FiType,
    tools: [
      {
        name: "Word Counter",
        description: "Count words, characters, and paragraphs",
        path: "/text/word-counter"
      },
      {
        name: "Lorem Generator",
        description: "Generate Lorem Ipsum placeholder text",
        path: "/text/lorem-generator"
      },
      {
        name: "Markdown Preview",
        description: "Live preview of Markdown text",
        path: "/text/markdown-preview"
      },
      {
        name: "Text Diff",
        description: "Compare and find differences in text",
        path: "/text/diff"
      },
      {
        name: "Quote Generator",
        description: "Generate random quotes and citations",
        path: "/text/quotes"
      }
    ]
  },
  {
    name: "Development Tools",
    icon: FiCode,
    tools: [
      {
        name: "JSON Tools",
        description: "Format, validate and convert JSON data",
        path: "/dev/json-formatter"
      },
      {
        name: "HTML Formatter",
        description: "Format and prettify HTML code",
        path: "/dev/html-formatter"
      },
      {
        name: "Code Beautifier",
        description: "Format and beautify code in various languages",
        path: "/dev/code-beautifier"
      },
      {
        name: "Regex Tester",
        description: "Test and validate regular expressions",
        path: "/dev/regex"
      },
      {
        name: "Git Command Helper",
        description: "Common git commands and usage",
        path: "/dev/git-helper"
      },
      {
        name: "Code Snippet Manager",
        description: "Store and organize code snippets",
        path: "/dev/snippets"
      }
    ]
  },
  {
    name: "Data & Conversion",
    icon: FiDatabase,
    tools: [
      {
        name: "Base64 Tools",
        description: "Encode and decode Base64 strings",
        path: "/data/base64"
      },
      {
        name: "CSV to JSON",
        description: "Convert CSV files to JSON format",
        path: "/data/csv-json"
      },
      {
        name: "URL Tools",
        description: "Encode, decode and parse URLs",
        path: "/data/url-tools"
      },
      {
        name: "Hash Generator",
        description: "Generate MD5, SHA-1, SHA-256 hashes",
        path: "/data/hash"
      },
      {
        name: "Data Format Converter",
        description: "Convert between XML, YAML, and more",
        path: "/data/format-converter"
      },
      {
        name: "Number Base Converter",
        description: "Convert between decimal, binary, hex",
        path: "/data/number-base"
      }
    ]
  },
  {
    name: "Visual & Media",
    icon: FiEye,
    tools: [
      {
        name: "Color Picker",
        description: "Pick, convert and generate color palettes",
        path: "/visual/color-picker"
      },
      {
        name: "Image Tools",
        description: "Base64 encode/decode images",
        path: "/visual/image-tools"
      },
      {
        name: "QR Code Generator",
        description: "Create QR codes for text and URLs",
        path: "/visual/qr-code"
      },
      {
        name: "SVG Editor",
        description: "Create and edit SVG graphics",
        path: "/visual/svg-editor"
      },
      {
        name: "CSS Gradient Generator",
        description: "Create beautiful CSS gradients",
        path: "/visual/gradient"
      }
    ]
  },
  {
    name: "Math & Statistics",
    icon: FiPercent,
    tools: [
      {
        name: "Calculator",
        description: "Basic and scientific calculator functions",
        path: "/math/calculator"
      },
      {
        name: "Unit Converter",
        description: "Convert between different units of measurement",
        path: "/math/unit-converter"
      },
      {
        name: "Random Generator",
        description: "Generate random numbers and strings",
        path: "/math/random"
      },
      {
        name: "Statistical Calculator",
        description: "Calculate mean, median, mode, and more",
        path: "/math/stats"
      },
      {
        name: "Probability Calculator",
        description: "Calculate odds and probabilities",
        path: "/math/probability"
      }
    ]
  },
  {
    name: "Time & Date",
    icon: FiClock,
    tools: [
      {
        name: "Time Converter",
        description: "Convert between timezones and formats",
        path: "/time/converter"
      },
      {
        name: "Date Calculator",
        description: "Calculate time between dates",
        path: "/time/calculator"
      },
      {
        name: "Countdown Timer",
        description: "Create countdown timers",
        path: "/time/countdown"
      }
    ]
  },
  {
    name: "Security & Encryption",
    icon: FiLock,
    tools: [
      {
        name: "Password Generator",
        description: "Generate secure random passwords",
        path: "/security/password"
      },
      {
        name: "Encryption Tools",
        description: "Encrypt and decrypt text",
        path: "/security/encryption"
      },
      {
        name: "JWT Debugger",
        description: "Debug and verify JWT tokens",
        path: "/security/jwt"
      }
    ]
  },
  {
    name: "Network & Web",
    icon: FiWifi,
    tools: [
      {
        name: "HTTP Status Codes",
        description: "Reference for HTTP status codes",
        path: "/network/http-status"
      },
      {
        name: "Network Tools",
        description: "Ping, DNS lookup, and more",
        path: "/network/tools"
      },
      {
        name: "API Tester",
        description: "Test API endpoints",
        path: "/network/api-tester"
      }
    ]
  },
  {
    name: "Science & Engineering",
    icon: FiActivity,
    tools: [
      {
        name: "Scientific Calculator",
        description: "Advanced scientific calculations",
        path: "/science/calculator"
      },
      {
        name: "Formula Reference",
        description: "Common scientific formulas",
        path: "/science/formulas"
      },
      {
        name: "Unit Conversions",
        description: "Scientific unit conversions",
        path: "/science/units"
      }
    ]
  }
];