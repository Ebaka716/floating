'use client'; // Needed for useState

import { useState } from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import FloatingLayer from '@/components/FloatingLayer/FloatingLayer';
import { Button } from '@/components/ui/button'; // Import Button
import { Search, History, Settings } from 'lucide-react'; // Import Icons

export default function ExamplePage() {
  const [isFloatingLayerOpen, setIsFloatingLayerOpen] = useState(true); // Changed initial state to true

  const handleToggleLayer = () => {
    setIsFloatingLayerOpen(prev => !prev); // Toggle function
  };

  return (
    <PageLayout
      onToggleFloatingLayerClick={handleToggleLayer} // Pass toggle function
      isLayerOpen={isFloatingLayerOpen}
    >
      {/* Pass function to open layer */}
      <h1>Example Page Content</h1>
      <p>This is the main content area of the page.</p>
      <p>Below should be the floating layer component.</p>

      <FloatingLayer
        isOpen={isFloatingLayerOpen} // Pass state
        onClose={() => setIsFloatingLayerOpen(false)} // Pass function to close layer
        title="My Floating Layer"
        optionsContent={
          // Updated options content structure
          <div className="flex flex-col h-full">
            {/* Top Section: Stacked Buttons */}
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                New Search
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
            </div>

            {/* Spacer */} 
            <div className="flex-grow"></div>

            {/* Bottom Section: Single Button */}
            <div className="border-t pt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        }
      >
        <p>This is the inner content of the floating layer.</p>
      </FloatingLayer>
    </PageLayout>
  );
} 