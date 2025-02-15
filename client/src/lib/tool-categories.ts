import { IconType } from "react-icons";
import { FiType, FiCode, FiDatabase, FiEye, FiPercent, FiClock, FiLock, FiGlobe, FiWifi, FiActivity } from "react-icons/fi";

export interface Tool {
  name: string;
  description: string;
  path: string;
  icon?: IconType;
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
        path: "/text/word-counter",
        icon: FiType
      },
      {
        name: "Lorem Generator",
        description: "Generate Lorem Ipsum placeholder text",
        path: "/text/lorem-generator",
        icon: FiType
      },
      {
        name: "Markdown Preview",
        description: "Live preview of Markdown text",
        path: "/text/markdown-preview",
        icon: FiType
      },
      {
        name: "Text Diff",
        description: "Compare and find differences in text",
        path: "/text/diff",
        icon: FiType
      },
      {
        name: "Quote Generator",
        description: "Generate random quotes and citations",
        path: "/text/quotes",
        icon: FiType
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
        path: "/dev/json-formatter",
        icon: FiCode
      },
      {
        name: "HTML Formatter",
        description: "Format and prettify HTML code",
        path: "/dev/html-formatter",
        icon: FiCode
      },
      {
        name: "Code Beautifier",
        description: "Format and beautify code in various languages",
        path: "/dev/code-beautifier",
        icon: FiCode
      },
      {
        name: "Regex Tester",
        description: "Test and validate regular expressions",
        path: "/dev/regex",
        icon: FiCode
      },
      {
        name: "Git Command Helper",
        description: "Common git commands and usage",
        path: "/dev/git-helper",
        icon: FiCode
      },
      {
        name: "Code Snippet Manager",
        description: "Store and organize code snippets",
        path: "/dev/snippets",
        icon: FiCode
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
        path: "/data/base64",
        icon: FiDatabase
      },
      {
        name: "CSV to JSON",
        description: "Convert CSV files to JSON format",
        path: "/data/csv-json",
        icon: FiDatabase
      },
      {
        name: "URL Tools",
        description: "Encode, decode and parse URLs",
        path: "/data/url-tools",
        icon: FiDatabase
      },
      {
        name: "Hash Generator",
        description: "Generate MD5, SHA-1, SHA-256 hashes",
        path: "/data/hash",
        icon: FiDatabase
      },
      {
        name: "Data Format Converter",
        description: "Convert between XML, YAML, and more",
        path: "/data/format-converter",
        icon: FiDatabase
      },
      {
        name: "Number Base Converter",
        description: "Convert between decimal, binary, hex",
        path: "/data/number-base",
        icon: FiDatabase
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
        path: "/visual/color-picker",
        icon: FiEye
      },
      {
        name: "Image Tools",
        description: "Base64 encode/decode images",
        path: "/visual/image-tools",
        icon: FiEye
      },
      {
        name: "QR Code Generator",
        description: "Create QR codes for text and URLs",
        path: "/visual/qr-code",
        icon: FiEye
      },
      {
        name: "SVG Editor",
        description: "Create and edit SVG graphics",
        path: "/visual/svg-editor",
        icon: FiEye
      },
      {
        name: "CSS Gradient Generator",
        description: "Create beautiful CSS gradients",
        path: "/visual/gradient",
        icon: FiEye
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
        path: "/math/calculator",
        icon: FiPercent
      },
      {
        name: "Unit Converter",
        description: "Convert between different units of measurement",
        path: "/math/unit-converter",
        icon: FiPercent
      },
      {
        name: "Random Generator",
        description: "Generate random numbers and strings",
        path: "/math/random",
        icon: FiPercent
      },
      {
        name: "Statistical Calculator",
        description: "Calculate mean, median, mode, and more",
        path: "/math/stats",
        icon: FiPercent
      },
      {
        name: "Probability Calculator",
        description: "Calculate odds and probabilities",
        path: "/math/probability",
        icon: FiPercent
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
        path: "/time/converter",
        icon: FiClock
      },
      {
        name: "Date Calculator",
        description: "Calculate time between dates",
        path: "/time/calculator",
        icon: FiClock
      },
      {
        name: "Countdown Timer",
        description: "Create countdown timers",
        path: "/time/countdown",
        icon: FiClock
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
        path: "/security/password",
        icon: FiLock
      },
      {
        name: "Encryption Tools",
        description: "Encrypt and decrypt text",
        path: "/security/encryption",
        icon: FiLock
      },
      {
        name: "JWT Debugger",
        description: "Debug and verify JWT tokens",
        path: "/security/jwt",
        icon: FiLock
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
        path: "/network/http-status",
        icon: FiWifi
      },
      {
        name: "Network Tools",
        description: "Ping, DNS lookup, and more",
        path: "/network/tools",
        icon: FiWifi
      },
      {
        name: "API Tester",
        description: "Test API endpoints",
        path: "/network/api-tester",
        icon: FiWifi
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
        path: "/science/calculator",
        icon: FiActivity
      },
      {
        name: "Formula Reference",
        description: "Common scientific formulas",
        path: "/science/formulas",
        icon: FiActivity
      },
      {
        name: "Unit Conversions",
        description: "Scientific unit conversions",
        path: "/science/units",
        icon: FiActivity
      }
    ]
  }
];