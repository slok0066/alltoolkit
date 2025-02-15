import { IconType } from "react-icons";
import { FiTool, FiCode, FiKey, FiGlobe } from "react-icons/fi";

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
    name: "Developer Tools",
    icon: FiCode,
    tools: [
      {
        name: "API Explorer",
        description: "Test and document API endpoints",
        path: "/tools/api-explorer"
      },
      {
        name: "Code Formatter",
        description: "Format and beautify your code",
        path: "/tools/code-formatter"
      },
      {
        name: "JSON Validator",
        description: "Validate and format JSON data",
        path: "/tools/json-validator"
      }
    ]
  },
  {
    name: "Utilities",
    icon: FiTool,
    tools: [
      {
        name: "File Converter",
        description: "Convert between different file formats",
        path: "/tools/file-converter"
      },
      {
        name: "Image Tools",
        description: "Optimize and convert images",
        path: "/tools/image-tools"
      },
      {
        name: "Color Tools",
        description: "Color picker and palette generator",
        path: "/tools/color-tools"
      }
    ]
  },
  {
    name: "Security",
    icon: FiKey,
    tools: [
      {
        name: "Password Generator",
        description: "Generate secure passwords",
        path: "/tools/password-generator"
      },
      {
        name: "Hash Generator",
        description: "Generate file and text hashes",
        path: "/tools/hash-generator"
      }
    ]
  },
  {
    name: "Network",
    icon: FiGlobe,
    tools: [
      {
        name: "DNS Lookup",
        description: "Query DNS records",
        path: "/tools/dns-lookup"
      },
      {
        name: "Port Scanner",
        description: "Scan open ports",
        path: "/tools/port-scanner"
      }
    ]
  }
];