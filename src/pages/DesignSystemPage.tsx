import { useEffect, useState, type ReactNode } from "react"
import { ChevronDown, Moon, Shield, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SeverityBadge } from "@/components/common/SeverityBadge"
import { StatusBadge } from "@/components/common/StatusBadge"
import { ALERT_STATUSES, SEVERITIES, type ThemeName } from "@/types/domain"

const sections = [
  { id: "color", label: "Color" },
  { id: "type", label: "Type" },
  { id: "space", label: "Space" },
  { id: "controls", label: "Controls" },
  { id: "data", label: "Data" },
  { id: "overlays", label: "Overlays" },
] as const

const surfaces = [
  { name: "Background", utility: "bg-background", className: "bg-background" },
  { name: "Card", utility: "bg-card", className: "bg-card" },
  { name: "Popover", utility: "bg-popover", className: "bg-popover" },
  { name: "Muted", utility: "bg-muted", className: "bg-muted" },
  { name: "Primary", utility: "bg-primary", className: "bg-primary" },
  { name: "Secondary", utility: "bg-secondary", className: "bg-secondary" },
  { name: "Sidebar", utility: "bg-sidebar", className: "bg-sidebar" },
] as const

const signals = [
  { name: "Critical", utility: "text-severity-critical", className: "bg-severity-critical" },
  { name: "High", utility: "text-severity-high", className: "bg-severity-high" },
  { name: "Medium", utility: "text-severity-medium", className: "bg-severity-medium" },
  { name: "Low", utility: "text-severity-low", className: "bg-severity-low" },
  { name: "Success", utility: "text-success", className: "bg-success" },
  { name: "Warning", utility: "text-warning", className: "bg-warning" },
  { name: "Info", utility: "text-info", className: "bg-info" },
] as const

const spaces = [
  { token: "1", pixels: 4 },
  { token: "2", pixels: 8 },
  { token: "3", pixels: 12 },
  { token: "4", pixels: 16 },
  { token: "6", pixels: 24 },
  { token: "8", pixels: 32 },
] as const

const radii = [
  { name: "sm", className: "rounded-sm" },
  { name: "md", className: "rounded-md" },
  { name: "lg", className: "rounded-lg" },
  { name: "xl", className: "rounded-xl" },
] as const

const queues = ["Tier 1 queue", "Tier 2 queue", "Threat hunting"] as const

const sampleRows = [
  {
    id: "ALT-20481",
    title: "Impossible travel sign-in",
    severity: "critical",
    status: "new",
  },
  {
    id: "ALT-20466",
    title: "Unusual outbound DNS volume",
    severity: "high",
    status: "investigating",
  },
  {
    id: "ALT-20412",
    title: "Failed admin authentication burst",
    severity: "medium",
    status: "resolved",
  },
] as const

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <h2 id={`${id}-title`} className="text-base font-medium tracking-tight">
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      {children}
    </section>
  )
}

export function DesignSystemPage() {
  const [theme, setTheme] = useState<ThemeName>("dark")
  const [query, setQuery] = useState("")
  const [queue, setQueue] = useState<(typeof queues)[number]>("Tier 1 queue")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary uppercase">
              <Shield className="size-3.5" aria-hidden="true" />
              SentinelDesk
            </p>
            <h1 className="text-2xl font-medium tracking-tight">
              Design system
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Foundation for the security operations dashboard. This screen
              checks colors, type, and the primitives later pages will share.
              It is not connected to a monitoring system, and the rows below
              are static samples.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            aria-pressed={theme === "light"}
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <Sun data-icon="inline-start" aria-hidden="true" />
            ) : (
              <Moon data-icon="inline-start" aria-hidden="true" />
            )}
            {theme === "dark" ? "Preview light theme" : "Preview dark theme"}
          </Button>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6">
        <nav aria-label="Design system sections">
          <ul className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex h-7 items-center rounded-lg border border-border px-2.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Section
          id="color"
          title="Color"
          description="Navy and charcoal surfaces, a single steel-blue accent, and semantic colors for severity and status. Borders do most of the separation. Shadows stay low."
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {surfaces.map((surface) => (
              <div
                key={surface.name}
                className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
              >
                <div
                  className={`h-14 border-b border-border ${surface.className}`}
                />
                <div className="px-3 py-2">
                  <p className="text-sm font-medium">{surface.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {surface.utility}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {signals.map((signal) => (
              <div
                key={signal.name}
                className="flex items-center gap-2 rounded-lg bg-card px-3 py-2 ring-1 ring-foreground/10"
              >
                <span
                  aria-hidden="true"
                  className={`size-2.5 shrink-0 rounded-full ${signal.className}`}
                />
                <div>
                  <p className="text-sm font-medium">{signal.name}</p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {signal.utility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        <Section
          id="type"
          title="Typography"
          description="Geist for interface text. Geist Mono for identifiers, addresses, and metrics. Body copy stays at 14px inside dense operational screens."
        >
          <Card>
            <CardContent className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Page title</p>
                <p className="text-2xl font-medium tracking-tight">
                  Security operations
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Section</p>
                <p className="text-base font-medium tracking-tight">
                  Active investigations
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Body</p>
                <p className="max-w-2xl text-sm leading-relaxed">
                  An analyst reviews evidence, updates status, and records a
                  note. Supporting text uses muted foreground so the metric or
                  identifier stays primary.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Mono</p>
                <p className="font-mono text-sm">ALT-20481 · 10.4.12.88</p>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Separator />

        <Section
          id="space"
          title="Spacing, radius, and elevation"
          description="The 4px scale is unchanged. Product screens use 16px inside cards, 24px between sections, and 32px controls. Radius is 8px at the base so panels stay compact."
        >
          <Card>
            <CardHeader>
              <CardTitle>Spacing</CardTitle>
              <CardDescription>
                Token width in pixels. Page padding is 24px (space 6). Card
                padding is 16px (space 4).
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {spaces.map((space) => (
                <div key={space.token} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">
                    {space.token} · {space.pixels}px
                  </span>
                  <span
                    className="h-2 rounded-full bg-primary"
                    style={{ width: space.pixels * 4 }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Radius</CardTitle>
                <CardDescription>
                  Derived from --radius (0.5rem).
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {radii.map((radius) => (
                  <div key={radius.name} className="flex flex-col items-center gap-2">
                    <div
                      className={`size-14 border border-border bg-muted ${radius.className}`}
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      {radius.name}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Elevation</CardTitle>
                <CardDescription>
                  Cards use a hairline ring plus shadow-card. Menus use
                  shadow-popover.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <div className="rounded-xl bg-card px-4 py-6 text-sm shadow-card ring-1 ring-foreground/10">
                  shadow-card
                </div>
                <div className="rounded-lg bg-popover px-4 py-6 text-sm shadow-popover ring-1 ring-foreground/10">
                  shadow-popover
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Separator />

        <Section
          id="controls"
          title="Buttons, badges, and inputs"
          description="Controls are 32px tall by default. Every example here is interactive: the theme button, the field, and the menu all update this page."
        >
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Default, outline, secondary, ghost, destructive, and link.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button type="button">
                <Shield data-icon="inline-start" aria-hidden="true" />
                Primary
              </Button>
              <Button type="button" variant="outline">
                Outline
              </Button>
              <Button type="button" variant="secondary">
                Secondary
              </Button>
              <Button type="button" variant="ghost">
                Ghost
              </Button>
              <Button type="button" variant="destructive">
                Destructive
              </Button>
              <Button type="button" variant="link">
                Link
              </Button>
              <Button type="button" disabled>
                Disabled
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Severity and status</CardTitle>
              <CardDescription>
                These badges are the ones alert screens will reuse. Color
                comes from design-tokens.ts, not from the badge variant.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {SEVERITIES.map((severity) => (
                  <SeverityBadge key={severity} severity={severity} />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {ALERT_STATUSES.map((status) => (
                  <StatusBadge key={status} status={status} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>
                Labels are tied to fields with htmlFor. The invalid field sets
                aria-invalid so the destructive ring is exposed to assistive
                tech.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="sample-search">Search sample</Label>
                <Input
                  id="sample-search"
                  value={query}
                  placeholder="Alert title or ID"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Current value:{" "}
                  <span className="font-mono text-foreground">
                    {query.length > 0 ? query : "empty"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="sample-invalid">Invalid address</Label>
                <Input
                  id="sample-invalid"
                  defaultValue="999.1.1.1"
                  aria-invalid="true"
                  aria-describedby="sample-invalid-hint"
                />
                <p id="sample-invalid-hint" className="text-xs text-destructive">
                  Enter a valid IPv4 address.
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Separator />

        <Section
          id="data"
          title="Table density"
          description="Compact rows, mono identifiers, and the shared badges. Sorting, filtering, and pagination are a later milestone. These three rows do not change."
        >
          <Card className="py-0">
            <CardContent className="px-0">
              <Table>
                <TableCaption className="px-4 pb-4 text-left">
                  Static samples for density only. Not live alerts.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-mono text-xs">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>
                        <SeverityBadge severity={row.severity} />
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Section>

        <Separator />

        <Section
          id="overlays"
          title="Dialog and dropdown"
          description="Both overlays trap or restore focus through Radix. The menu selection is local state so you can confirm the control works."
        >
          <Card>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button type="button" variant="outline">
                    Open sample dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sample confirmation</DialogTitle>
                    <DialogDescription>
                      This dialog only checks layout, focus, and the close
                      control. It does not update an alert.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter showCloseButton>
                    <DialogClose asChild>
                      <Button type="button">Acknowledged</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <div className="flex flex-col gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button type="button" variant="outline">
                      {queue}
                      <ChevronDown data-icon="inline-end" aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuLabel>Route sample</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {queues.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        onSelect={() => setQueue(item)}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <p className="text-xs text-muted-foreground">
                  Selected queue:{" "}
                  <span className="text-foreground">{queue}</span>
                </p>
              </div>
            </CardContent>
            <CardFooter>
              Tab through this page. Focus rings use the steel-blue ring token.
            </CardFooter>
          </Card>
        </Section>
      </div>
    </div>
  )
}
