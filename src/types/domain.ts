/**
 * Shared domain unions for SentinelDesk.
 *
 * These are string unions, not TypeScript enums. The project compiles with
 * `erasableSyntaxOnly`, which rejects enums because they emit runtime code.
 */
export const SEVERITIES = ["critical", "high", "medium", "low"] as const
export type Severity = (typeof SEVERITIES)[number]

export const ALERT_STATUSES = [
  "new",
  "investigating",
  "resolved",
  "false_positive",
] as const
export type AlertStatus = (typeof ALERT_STATUSES)[number]

export type ThemeName = "dark" | "light"
