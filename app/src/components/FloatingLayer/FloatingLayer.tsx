'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Menu as MenuIcon, Send } from 'lucide-react';
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
  const [width, setWidth] = useState(450); // initial width in px
  const [isDragging, setIsDragging] = useState(false);

  React.useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      const right = window.innerWidth - 16; // right-4 = 16px
      let newWidth = right - e.clientX;
      const min = 450;
      const max = window.innerWidth * 0.8;
      newWidth = Math.max(min, Math.min(max, newWidth));
      setWidth(newWidth);
    }
    function onMouseUp() {
      setIsDragging(false);
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'ew-resize';
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
    };
  }, [isDragging]);

  if (!isOpen) {
    return null;
  }

  return (
    <Card
      style={{ width: width, maxWidth: '80vw', minWidth: 450 }}
      className="fixed top-16 right-4 bottom-6 z-40 border bg-background shadow-lg flex flex-col !py-4"
    >
      {/* Resize handle on the left edge */}
      <div
        style={{ left: 0 }}
        className="absolute top-0 bottom-0 w-2 cursor-ew-resize z-50 select-none bg-transparent"
        onMouseDown={() => setIsDragging(true)}
        aria-label="Resize Floating Layer"
      />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 !pb-4 border-b px-4 py-2 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Button
            size="icon"
            className="h-6 w-6 bg-orange-400 text-white hover:bg-orange-500"
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          >
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle Options</span>
          </Button>
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
        </div>
        <Button
          size="icon"
          className="h-6 w-6 bg-red-500 text-white hover:bg-red-600"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <div className="relative flex-grow overflow-hidden">
        {/* Options View overlays main content, only it animates */}
        <CardContent
          className={cn(
            'absolute inset-0 overflow-y-auto bg-background px-4 z-10',
            'transition-transform duration-300 ease-in-out',
            isOptionsOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          {optionsContent}
        </CardContent>
        {/* Main Content (Children) View is static, not animated */}
        <CardContent
          className={cn(
            'absolute inset-0 py-4 px-6 overflow-y-auto',
            !children ? 'hidden' : ''
          )}
        >
          {children}
        </CardContent>
      </div>
      <div className={cn(
        "pt-4 pb-2 px-6 flex-shrink-0",
        isOptionsOpen && "hidden"
      )}>
        <div className="relative flex w-full items-center">
          <Input
            type="text"
            placeholder="Type your message..."
            className="flex-grow pr-10 h-14"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </Card>
  );
} 