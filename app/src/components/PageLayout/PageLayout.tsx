import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  onToggleFloatingLayerClick?: () => void;
  isLayerOpen?: boolean;
}

export default function PageLayout({
  children,
  onToggleFloatingLayerClick,
  isLayerOpen = false,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-blue-100">
        <div className="flex h-14 items-center justify-between px-6">
          <span className="font-bold">Floating UI</span>
          <div className="flex items-center space-x-2">
            {onToggleFloatingLayerClick && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleFloatingLayerClick}
                className={cn(
                  'h-8 w-8 rounded-full',
                  isLayerOpen ? 'bg-blue-300/70' : 'hover:bg-blue-300/50'
                )}
              >
                <Plus className="h-5 w-5" />
                <span className="sr-only">Toggle Layer</span>
              </Button>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6 px-4">
        {children}
      </main>
    </div>
  );
} 