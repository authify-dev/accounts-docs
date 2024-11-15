import { useState, useMemo } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { ChevronRight } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  seedColor?: string;
  initState?: boolean;
}

function hexToRGBA(hex: string, alpha: number = 1) {
  // Remover el # si existe
  hex = hex.replace('#', '');
  
  // Convertir shorthand hex (3 dígitos) a full hex (6 dígitos)
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Accordion({ title, children, seedColor, initState = true }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(initState);
  
  const backgroundColor = useMemo(() => {
    if (!seedColor) return undefined;
    return hexToRGBA(seedColor, 0.5); // Usamos 0.1 para un fondo muy sutil
  }, [seedColor]);

  return (
    <Card 
      className="py-4" 
      style={{ 
        marginTop: "20px",
        backgroundColor: seedColor,
        transition: 'background-color 0.2s ease'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-none cursor-pointer"
      >
        <CardHeader className="flex gap-3">
          <div className="flex items-center gap-3">
            <ChevronRight
              size={20}
              className={`transition-transform duration-200 ${
                isOpen ? 'rotate-90' : ''
              }`}
              
            />
            <span 
              className="text-2xl"
              
            >
              {title}
            </span>
          </div>
        </CardHeader>
      </button>
      
      <div
        className={`transition-all duration-200 ${
          isOpen ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <CardBody>
          {children}
        </CardBody>
      </div>
    </Card>
  );
}