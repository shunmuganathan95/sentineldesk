import { Component, type ErrorInfo, type ReactNode } from "react"

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  error: Error | null
}

/**
 * Class component on purpose. React still exposes component error boundaries
 * through getDerivedStateFromError, which function components cannot implement.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("SentinelDesk render error", error, info.componentStack)
  }

  private handleReset = (): void => {
    this.setState({ error: null })
  }

  render(): ReactNode {
    const { error } = this.state
    if (!error) {
      return this.props.children
    }

    return (
      <main className="flex min-h-svh items-center justify-center bg-background px-6 text-foreground">
        <section className="w-full max-w-md rounded-xl bg-card p-6 shadow-card ring-1 ring-foreground/10">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            SentinelDesk
          </p>
          <h1 className="mt-2 text-lg font-medium tracking-tight">
            This screen could not be rendered
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The interface hit an unexpected error. The rest of the application
            was left in place. Retry the screen, and check the browser console
            if it fails again.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="mt-5 inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
        </section>
      </main>
    )
  }
}
