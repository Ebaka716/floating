'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Menu as MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingLayerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  optionsContent?: React.ReactNode;
}

export default function FloatingLayer({
  isOpen,
  onClose,
  title = 'Floating Layer',
  children,
  optionsContent = 'Layer Options',
}: FloatingLayerProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <Card
      className="fixed top-16 right-4 bottom-6 z-40 w-[450px] border bg-background shadow-lg flex flex-col"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b px-4 py-2 flex-shrink-0">
        {/* Group 1: Menu button and Title */}
        <div className="flex items-center space-x-2">
          <Button
            size="icon"
            className="h-6 w-6 bg-orange-400 text-white hover:bg-orange-500"
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          >
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle Options</span>
          </Button>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </div>

        {/* Element 2: Close button */}
        <Button
          size="icon"
          className="h-6 w-6 bg-red-500 text-white hover:bg-red-600"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>

      {/* Container for the sliding views */}
      <div className="relative flex-grow overflow-hidden">
        {/* Options View */}
        <CardContent
          className={cn(
            'absolute inset-0 overflow-y-auto bg-muted/20 px-4',
            'transition-transform duration-300 ease-in-out',
            isOptionsOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {optionsContent}
        </CardContent>

        {/* Main Content (Children) View */}
        <CardContent
          className={cn(
            'absolute inset-0 p-4 overflow-y-auto',
            'transition-transform duration-300 ease-in-out',
            isOptionsOpen ? 'translate-x-full' : 'translate-x-0',
            !children ? 'hidden' : ''
          )}
        >
          {children}
        </CardContent>
      </div>
    </Card>
  );
} 