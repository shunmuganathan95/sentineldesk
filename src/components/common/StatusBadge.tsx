import { cn } from "@/lib/utils"
import { statusTokens } from "@/lib/design-tokens"
import type { AlertStatus } from "@/types/domain"
import { Badge } from "@/components/ui/badge"

type StatusBadgeProps = {
  status: AlertStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const token = statusTokens[status]

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
