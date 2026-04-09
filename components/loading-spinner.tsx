export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground/30 border-t-primary" />
    </div>
  )
}
