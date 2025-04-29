"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the shape of our data for table rows
export type TopicData = {
  id: string // Added an ID for potential key prop usage
  topic: string
  description: string
}

export const columns: ColumnDef<TopicData>[] = [
  {
    accessorKey: "topic",
    header: "Topic",
    // Make topic cell bold
    cell: ({ row }) => <div className="font-bold align-top">{row.getValue("topic")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    // Add styling for description cell
    cell: ({ row }) => <div className="align-top whitespace-normal">{row.getValue("description")}</div>,
  },
] 