import { TooltipProvider } from "@/components/ui/tooltip"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { DesignSystemPage } from "@/pages/DesignSystemPage"

export default function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <DesignSystemPage />
      </TooltipProvider>
    </ErrorBoundary>
  )
}
