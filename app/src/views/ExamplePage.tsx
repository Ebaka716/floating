'use client'; // Needed for useState

import { useState } from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import FloatingLayer from '@/components/FloatingLayer/FloatingLayer';
import { Button } from '@/components/ui/button'; // Import Button
import { Search, History, Settings } from 'lucide-react'; // Import Icons
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table" // Add Table imports

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
      {/* Insert the table here */}
      <div className="w-1/2 py-4"> {/* Container div with width and padding */}
        <Table>
          <TableCaption>A list of topics.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Topic</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Add table rows here as needed */}
            <TableRow>
              <TableCell className="font-bold align-top">AI - Page interaction binding</TableCell>
              <TableCell className="align-top whitespace-normal">There is no expectation that interations within the AI container will be reflected on the parent page. The parent page is unaware of the AI container's existence.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold align-top">Design system</TableCell>
              <TableCell className="align-top whitespace-normal">Owns design of the AI container wrapper, elevation, and the parent page.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {/* End of inserted table */}

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