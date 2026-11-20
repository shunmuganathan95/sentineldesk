import { cn } from "@/lib/utils"
import { severityTokens } from "@/lib/design-tokens"
import type { Severity } from "@/types/domain"
import { Badge } from "@/components/ui/badge"

type SeverityBadgeProps = {
  severity: Severity
  className?: string
}

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const token = severityTokens[severity]

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5", token.badgeClassName, className)}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 rounded-full", token.dotClassName)}
      />
      {token.label}
    </Badge>
  )
}
