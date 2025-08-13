import React, { useEffect, useState } from 'react';

interface Node {
  id: string;
  label: string;
  type: 'input' | 'process' | 'decision' | 'output';
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
  label?: string;
}

interface LogicDiagramProps {
  animate?: boolean;
}

const LogicDiagram: React.FC<LogicDiagramProps> = ({ animate = true }) => {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 'input', label: '用戶輸入', type: 'input', x: 150, y: 50 },
    { id: 'nlp', label: '自然語言處理', type: 'process', x: 150, y: 120 },
    { id: 'intent', label: '意圖識別', type: 'process', x: 150, y: 190 },
    { id: 'decision', label: '查詢類型?', type: 'decision', x: 150, y: 260 },
    { id: 'tech', label: '技術諮詢', type: 'process', x: 50, y: 330 },
    { id: 'quote', label: '報價估算', type: 'process', x: 150, y: 330 },
    { id: 'case', label: '案例調取', type: 'process', x: 250, y: 330 },
    { id: 'db', label: '知識庫搜尋', type: 'process', x: 150, y: 400 },
    { id: 'response', label: 'AI回應生成', type: 'process', x: 150, y: 470 },
    { id: 'output', label: '輸出結果', type: 'output', x: 150, y: 540 }
  ]);
  
  const [connections, setConnections] = useState<Connection[]>([
    { from: 'input', to: 'nlp' },
    { from: 'nlp', to: 'intent' },
    { from: 'intent', to: 'decision' },
    { from: 'decision', to: 'tech', label: '技術' },
    { from: 'decision', to: 'quote', label: '報價' },
    { from: 'decision', to: 'case', label: '案例' },
    { from: 'tech', to: 'db' },
    { from: 'quote', to: 'db' },
    { from: 'case', to: 'db' },
    { from: 'db', to: 'response' },
    { from: 'response', to: 'output' }
  ]);
  
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeConnection, setActiveConnection] = useState<Connection | null>(null);
  
  useEffect(() => {
    if (!animate) return;
    
    // Create animation sequence
    const sequence = [
      { node: 'input', connection: { from: 'input', to: 'nlp' } },
      { node: 'nlp', connection: { from: 'nlp', to: 'intent' } },
      { node: 'intent', connection: { from: 'intent', to: 'decision' } },
      { node: 'decision', connection: { from: 'decision', to: 'quote' } },
      { node: 'quote', connection: { from: 'quote', to: 'db' } },
      { node: 'db', connection: { from: 'db', to: 'response' } },
      { node: 'response', connection: { from: 'response', to: 'output' } },
      { node: 'output', connection: null }
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < sequence.length) {
        setActiveNode(sequence[index].node);
        setActiveConnection(sequence[index].connection as Connection);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setActiveNode(null);
          setActiveConnection(null);
        }, 1000);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, [animate]);
  
  const getNodeTypeStyles = (type: string) => {
    switch (type) {
      case 'input':
        return 'fill-blue-400 stroke-blue-500';
      case 'process':
        return 'fill-purple-400 stroke-purple-500';
      case 'decision':
        return 'fill-yellow-400 stroke-yellow-500';
      case 'output':
        return 'fill-green-400 stroke-green-500';
      default:
        return 'fill-gray-400 stroke-gray-500';
    }
  };
  
  const getNodeShape = (node: Node) => {
    const isActive = node.id === activeNode;
    const baseClasses = `${getNodeTypeStyles(node.type)} stroke-2 ${
      isActive ? 'filter drop-shadow-[0_0_8px_rgba(0,245,160,0.8)]' : ''
    }`;
    
    switch (node.type) {
      case 'decision':
        return (
          <polygon 
            points={`${node.x},${node.y-20} ${node.x+20},${node.y} ${node.x},${node.y+20} ${node.x-20},${node.y}`}
            className={baseClasses}
          />
        );
      case 'input':
      case 'output':
        return (
          <rect 
            x={node.x - 40} 
            y={node.y - 15} 
            width="80" 
            height="30" 
            rx="15"
            className={baseClasses}
          />
        );
      default:
        return (
          <rect 
            x={node.x - 40} 
            y={node.y - 15} 
            width="80" 
            height="30" 
            rx="2"
            className={baseClasses}
          />
        );
    }
  };
  
  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };
  
  const getPathBetweenNodes = (from: string, to: string) => {
    const fromNode = getNodePosition(from);
    const toNode = getNodePosition(to);
    
    // Calculate control points for curved paths
    const midY = (fromNode.y + toNode.y) / 2;
    
    let path = `M ${fromNode.x} ${fromNode.y + 15}`;

    // If this is a horizontal connection between decision and one of its outcomes
    if (from === 'decision' && (to === 'tech' || to === 'case')) {
      const fromY = fromNode.y;
      const controlY = (fromY + toNode.y) / 2;
      path = `M ${fromNode.x} ${fromNode.y + 20} C ${fromNode.x} ${controlY}, ${toNode.x} ${controlY}, ${toNode.x} ${toNode.y - 15}`;
    } 
    // For vertical connections
    else if (Math.abs(fromNode.x - toNode.x) < 10) {
      path = `M ${fromNode.x} ${fromNode.y + 15} L ${toNode.x} ${toNode.y - 15}`;
    } 
    // For other connections
    else {
      path = `M ${fromNode.x} ${fromNode.y + 15} C ${fromNode.x} ${midY}, ${toNode.x} ${midY}, ${toNode.x} ${toNode.y - 15}`;
    }
    
    return path;
  };
  
  return (
    <div className="w-full h-full glass-panel p-4 overflow-auto">
      <h3 className="font-orbitron font-semibold text-center text-neonTurquoise mb-4">對話邏輯視覺化</h3>
      <svg width="300" height="600" className="mx-auto">
        {/* Draw connections */}
        {connections.map((conn, index) => {
          const isActive = activeConnection && activeConnection.from === conn.from && activeConnection.to === conn.to;
          
          return (
            <g key={`conn-${index}`}>
              <path 
                d={getPathBetweenNodes(conn.from, conn.to)} 
                fill="none" 
                className={`${
                  isActive 
                    ? 'stroke-neonTurquoise stroke-[3px] filter drop-shadow-[0_0_3px_rgba(0,245,160,0.8)]' 
                    : 'stroke-gray-600'
                } transition-all duration-300`}
              />
              
              {conn.label && (
                <g>
                  {/* Background for better readability */}
                  <text 
                    x={(getNodePosition(conn.from).x + getNodePosition(conn.to).x) / 2}
                    y={(getNodePosition(conn.from).y + getNodePosition(conn.to).y) / 2 - 3}
                    textAnchor="middle"
                    className="text-[8px] font-semibold fill-deepBlue stroke-deepBlue stroke-[3px] paint-order-stroke"
                  >
                    {conn.label}
                  </text>
                  
                  {/* Actual text */}
                  <text 
                    x={(getNodePosition(conn.from).x + getNodePosition(conn.to).x) / 2}
                    y={(getNodePosition(conn.from).y + getNodePosition(conn.to).y) / 2 - 3}
                    textAnchor="middle"
                    className={`text-[8px] font-semibold ${
                      isActive ? 'fill-neonTurquoise' : 'fill-gray-400'
                    } transition-colors duration-300`}
                  >
                    {conn.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}
        
        {/* Draw nodes */}
        {nodes.map(node => (
          <g key={node.id}>
            {getNodeShape(node)}
            <text 
              x={node.x} 
              y={node.y + 4} 
              textAnchor="middle" 
              className={`text-[10px] font-semibold fill-deepBlue transition-colors duration-300 ${
                node.id === activeNode ? 'font-bold' : ''
              }`}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default LogicDiagram;