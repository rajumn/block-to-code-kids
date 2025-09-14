import { useState } from "react";
import { PlayfulButton } from "@/components/ui/playful-button";
import { Play, Square, RotateCcw, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CodeBlock {
  id: string;
  text: string;
  color: "primary" | "secondary" | "accent";
  indent: number;
}

export const SimpleIDE = () => {
  const [mode, setMode] = useState<"blocks" | "text">("blocks");
  const [isRunning, setIsRunning] = useState(false);
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null);
  const [output, setOutput] = useState<string[]>([]);
  const [points, setPoints] = useState(0);
  const [blocks, setBlocks] = useState<CodeBlock[]>([
    { id: "1", text: "🚀 When start button clicked", color: "primary", indent: 0 },
    { id: "2", text: "📱 Say \"Hello, World!\"", color: "secondary", indent: 1 },
    { id: "3", text: "⭐ Add 10 points", color: "accent", indent: 1 }
  ]);

  const handleRun = () => {
    setIsRunning(true);
    setOutput([]);
    
    // Simulate code execution with actual output
    setTimeout(() => {
      const newOutput: string[] = [];
      let currentPoints = points;
      
      blocks.forEach((block) => {
        if (block.text.includes("When start button clicked")) {
          newOutput.push("🚀 Program started!");
        } else if (block.text.includes("Say")) {
          newOutput.push("📱 Hello, World!");
        } else if (block.text.includes("Add") && block.text.includes("points")) {
          const pointsToAdd = parseInt(block.text.match(/\d+/)?.[0] || "10");
          currentPoints += pointsToAdd;
          newOutput.push(`⭐ Added ${pointsToAdd} points! Total: ${currentPoints}`);
        }
      });
      
      if (newOutput.length === 0) {
        newOutput.push("✨ Code executed successfully!");
      }
      
      setOutput(newOutput);
      setPoints(currentPoints);
      setIsRunning(false);
    }, 2000);
  };

  const handleReset = () => {
    setOutput([]);
    setPoints(0);
  };

  const handleDragStart = (e: React.DragEvent, blockId: string) => {
    setDraggedBlock(blockId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (!draggedBlock) return;

    const draggedIndex = blocks.findIndex(block => block.id === draggedBlock);
    if (draggedIndex === -1) return;

    const newBlocks = [...blocks];
    const [draggedItem] = newBlocks.splice(draggedIndex, 1);
    newBlocks.splice(targetIndex, 0, draggedItem);

    setBlocks(newBlocks);
    setDraggedBlock(null);
  };

  const getColorClasses = (color: CodeBlock["color"]) => {
    switch (color) {
      case "primary":
        return "bg-primary text-primary-foreground";
      case "secondary":
        return "bg-secondary text-secondary-foreground";
      case "accent":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-section text-foreground mb-4">
            Try Our Coding Environment
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Switch between drag-and-drop blocks or text coding. Your choice!
          </p>
          
          <div className="flex justify-center gap-2 mb-8">
            <PlayfulButton 
              variant={mode === "blocks" ? "primary" : "ghost"}
              onClick={() => setMode("blocks")}
            >
              🧩 Blocks Mode
            </PlayfulButton>
            <PlayfulButton 
              variant={mode === "text" ? "secondary" : "ghost"}
              onClick={() => setMode("text")}
            >
              💻 Text Mode
            </PlayfulButton>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-6 rounded-super shadow-medium">
            <div className="grid lg:grid-cols-2 gap-6 h-96">
              {/* Coding Area */}
              <div className="bg-muted rounded-playful p-4 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">
                    {mode === "blocks" ? "🧩 Drag & Drop Blocks" : "💻 Code Editor"}
                  </h3>
                  <PlayfulButton variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </PlayfulButton>
                </div>
                
                {mode === "blocks" ? (
                  <div className="space-y-3" onDragOver={handleDragOver}>
                    {blocks.map((block, index) => (
                      <div
                        key={block.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, block.id)}
                        onDrop={(e) => handleDrop(e, index)}
                        className={`${getColorClasses(block.color)} p-3 rounded-lg cursor-move hover-lift transition-transform duration-200 ${
                          draggedBlock === block.id ? 'opacity-50 scale-95' : ''
                        } ${block.indent > 0 ? `ml-${block.indent * 4}` : ''}`}
                        style={{ marginLeft: block.indent * 16 }}
                      >
                        {block.text}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-card p-4 rounded-lg font-mono text-sm">
                    <div className="text-muted-foreground">1</div>
                    <div className="text-muted-foreground">2</div>
                    <div className="text-muted-foreground">3</div>
                    <div className="text-primary">function</div>
                    <div className="ml-4 text-foreground">console.log("Hello, CodePlayground!");</div>
                    <div className="ml-4 text-success">// Your code here! 🎉</div>
                  </div>
                )}
              </div>

              {/* Output Area */}
              <div className="bg-card rounded-playful p-4 border-2 border-dashed border-muted">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">🎯 Output</h3>
                  <div className="flex gap-2">
                    <PlayfulButton 
                      variant="success" 
                      size="sm"
                      onClick={handleRun}
                      disabled={isRunning}
                    >
                      {isRunning ? (
                        <Square className="w-4 h-4 animate-pulse" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                      {isRunning ? "Running..." : "Run"}
                    </PlayfulButton>
                    <PlayfulButton variant="ghost" size="sm" onClick={handleReset}>
                      <RotateCcw className="w-4 h-4" />
                    </PlayfulButton>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4 h-48 overflow-auto">
                  {isRunning ? (
                    <div className="flex items-center gap-2 text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <span className="ml-2">Running your awesome code...</span>
                    </div>
                  ) : output.length > 0 ? (
                    <div className="space-y-2">
                      {output.map((line, index) => (
                        <div key={index} className="text-foreground font-mono text-sm">
                          {line}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground py-8">
                      <div className="text-4xl mb-2">🎉</div>
                      <div>Click "Run" to see the magic happen!</div>
                      <div className="text-sm mt-2">Your output will appear here</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};