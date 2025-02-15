import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ToolLayout } from "@/components/tool-layout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [memory, setMemory] = useState(0);
  const { toast } = useToast();

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === "0" ? num : prev + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const handleFunction = (func: string) => {
    try {
      let result = 0;
      const num = parseFloat(display);

      switch (func) {
        case 'sin':
          result = Math.sin(num * Math.PI / 180);
          break;
        case 'cos':
          result = Math.cos(num * Math.PI / 180);
          break;
        case 'tan':
          result = Math.tan(num * Math.PI / 180);
          break;
        case 'sqrt':
          result = Math.sqrt(num);
          break;
        case 'log':
          result = Math.log10(num);
          break;
        case 'ln':
          result = Math.log(num);
          break;
        case 'exp':
          result = Math.exp(num);
          break;
      }

      setDisplay(result.toFixed(8));
      setEquation("");
      
      toast({
        title: "Calculation complete",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Invalid calculation",
        description: "Please check your input",
        variant: "destructive",
      });
    }
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation("");
      toast({
        title: "Calculation complete",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Invalid calculation",
        description: "Please check your input",
        variant: "destructive",
      });
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  const memoryAdd = () => {
    setMemory(memory + parseFloat(display));
    toast({
      title: "Added to memory",
      variant: "default",
    });
  };

  const memoryRecall = () => {
    setDisplay(memory.toString());
  };

  const memoryClear = () => {
    setMemory(0);
    toast({
      title: "Memory cleared",
      variant: "default",
    });
  };

  return (
    <ToolLayout
      title="Scientific Calculator"
      description="Advanced scientific calculations with trigonometric and logarithmic functions"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">{equation}</div>
                <div className="text-3xl font-mono">{display}</div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                <Button variant="outline" onClick={() => handleFunction('sin')}>sin</Button>
                <Button variant="outline" onClick={() => handleFunction('cos')}>cos</Button>
                <Button variant="outline" onClick={() => handleFunction('tan')}>tan</Button>
                <Button variant="outline" onClick={() => handleFunction('sqrt')}>√</Button>
                <Button variant="outline" onClick={clear}>C</Button>

                <Button variant="outline" onClick={() => handleFunction('log')}>log</Button>
                <Button variant="outline" onClick={() => handleFunction('ln')}>ln</Button>
                <Button variant="outline" onClick={() => handleFunction('exp')}>exp</Button>
                <Button onClick={() => handleOperator('/')}>/</Button>
                <Button onClick={() => handleOperator('*')}>×</Button>

                <Button variant="outline" onClick={() => handleNumber('7')}>7</Button>
                <Button variant="outline" onClick={() => handleNumber('8')}>8</Button>
                <Button variant="outline" onClick={() => handleNumber('9')}>9</Button>
                <Button onClick={() => handleOperator('-')}>-</Button>
                <Button onClick={memoryAdd}>M+</Button>

                <Button variant="outline" onClick={() => handleNumber('4')}>4</Button>
                <Button variant="outline" onClick={() => handleNumber('5')}>5</Button>
                <Button variant="outline" onClick={() => handleNumber('6')}>6</Button>
                <Button onClick={() => handleOperator('+')}>+</Button>
                <Button onClick={memoryRecall}>MR</Button>

                <Button variant="outline" onClick={() => handleNumber('1')}>1</Button>
                <Button variant="outline" onClick={() => handleNumber('2')}>2</Button>
                <Button variant="outline" onClick={() => handleNumber('3')}>3</Button>
                <Button onClick={() => handleNumber('.')} className="col-span-1">.</Button>
                <Button onClick={memoryClear}>MC</Button>

                <Button variant="outline" onClick={() => handleNumber('0')} className="col-span-2">0</Button>
                <Button variant="outline" onClick={() => handleNumber('π')}>π</Button>
                <Button onClick={calculate} className="col-span-2 bg-primary">=</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ToolLayout>
  );
}
