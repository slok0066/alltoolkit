import { FiType, FiCode, FiDatabase, FiEye, FiPercent, FiClock, FiLock, FiGlobe, FiWifi } from "react-icons/fi";
import { IconType } from "react-icons";

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
      }
    ]
  }
];
