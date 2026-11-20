import type { AlertStatus, Severity } from "@/types/domain"

type SemanticToken = {
  label: string
  badgeClassName: string
  dotClassName: string
}

/**
 * Class maps for severity and status. UI components read these instead of
 * hard-coding colours, so a token change in index.css updates every badge.
 */
export const severityTokens: Record<Severity, SemanticToken> = {
  critical: {
    label: "Critical",
    badgeClassName:
      "border-severity-critical/30 bg-severity-critical/15 text-severity-critical",
    dotClassName: "bg-severity-critical",
  },
  high: {
    label: "High",
    badgeClassName:
      "border-severity-high/30 bg-severity-high/15 text-severity-high",
    dotClassName: "bg-severity-high",
  },
  medium: {
    label: "Medium",
    badgeClassName:
      "border-severity-medium/30 bg-severity-medium/15 text-severity-medium",
    dotClassName: "bg-severity-medium",
  },
  low: {
    label: "Low",
    badgeClassName:
      "border-severity-low/30 bg-severity-low/15 text-severity-low",
    dotClassName: "bg-severity-low",
  },
}

export const statusTokens: Record<AlertStatus, SemanticToken> = {
  new: {
    label: "New",
    badgeClassName: "border-status-new/30 bg-status-new/15 text-status-new",
    dotClassName: "bg-status-new",
  },
  investigating: {
    label: "Investigating",
    badgeClassName:
      "border-status-investigating/30 bg-status-investigating/15 text-status-investigating",
    dotClassName: "bg-status-investigating",
  },
  resolved: {
    label: "Resolved",
    badgeClassName:
      "border-status-resolved/30 bg-status-resolved/15 text-status-resolved",
    dotClassName: "bg-status-resolved",
  },
  false_positive: {
    label: "False positive",
    badgeClassName:
      "border-status-false-positive/30 bg-status-false-positive/15 text-status-false-positive",
    dotClassName: "bg-status-false-positive",
  },
}

/** Spacing the product actually uses. Tailwind's scale stays unchanged. */
export const layoutSpace = {
  page: "1.5rem",
  section: "1.5rem",
  card: "1rem",
  control: "2rem",
} as const
