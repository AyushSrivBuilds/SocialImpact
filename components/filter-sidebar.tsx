"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"

// Sample filter options
const filterOptions = {
  cause: ["Environment", "Education", "Health", "Hunger", "Poverty"],
  community: ["IIFT, Delhi", "IIFT, Mumbai", "IIFT, Bangalore", "IIFT, Chennai"],
  context: ["Environment Campaign", "Education Campaign", "Health Campaign", "Food Campaign", "Technology Campaign"],
}

export default function FilterSidebar() {
  const [openSections, setOpenSections] = useState({
    cause: true,
    community: true,
    context: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    })
  }

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700">
          Clear All
        </Button>
      </div>

      {/* Cause Filter */}
      <Collapsible open={openSections.cause} onOpenChange={() => toggleSection("cause")} className="mb-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left font-medium">
          Cause
          <ChevronDown className={`h-5 w-5 transition-transform ${openSections.cause ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {filterOptions.cause.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={`cause-${option}`} />
              <Label htmlFor={`cause-${option}`} className="text-sm font-normal">
                {option}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Community Filter */}
      <Collapsible open={openSections.community} onOpenChange={() => toggleSection("community")} className="mb-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left font-medium">
          Community
          <ChevronDown className={`h-5 w-5 transition-transform ${openSections.community ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {filterOptions.community.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={`community-${option}`} />
              <Label htmlFor={`community-${option}`} className="text-sm font-normal">
                {option}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Context Filter */}
      <Collapsible open={openSections.context} onOpenChange={() => toggleSection("context")} className="mb-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left font-medium">
          Context
          <ChevronDown className={`h-5 w-5 transition-transform ${openSections.context ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {filterOptions.context.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={`context-${option}`} />
              <Label htmlFor={`context-${option}`} className="text-sm font-normal">
                {option}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Button className="mt-4 w-full">Apply Filters</Button>
    </div>
  )
}
