'use client'; // Needed for useState

import { useState } from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import FloatingLayer from '@/components/FloatingLayer/FloatingLayer';
import { Button } from '@/components/ui/button'; // Import Button
import { Search, History, Settings } from 'lucide-react'; // Import Icons
// Import the new DataTable components
import { DataTable } from '@/components/DataTable/DataTable';
import { columns, type TopicData } from '@/components/DataTable/columns';

// Define the data matching the TopicData type
const data: TopicData[] = [
  {
    id: "1",
    topic: "AI - Page interaction binding",
    description: "There is no expectation that iterations within the AI container will be reflected on the parent page. The parent page is unaware of the AI container's existence.",
  },
  {
    id: "2",
    topic: "Design system",
    description: "Owns design of the AI container wrapper, elevation, and the parent page.",
  },
];

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
      <h1>Parent Page Content</h1>
      {/* Replace the old table with the DataTable component */}
      <div className="py-4"> {/* Keep the container div for padding */}
        <DataTable columns={columns} data={data} />
      </div>

      <FloatingLayer
        isOpen={isFloatingLayerOpen} // Pass state
        onClose={() => setIsFloatingLayerOpen(false)} // Pass function to close layer
        title="Floating Layer"
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
            <div className="pt-2">
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