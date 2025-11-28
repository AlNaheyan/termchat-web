import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const guides = [
  {
    title: "Installation",
    description: "Install via script or manual steps, set PATH, and fix common issues.",
    href: "/docs/installation",
    badge: "Start here",
  },
  {
    title: "First launch",
    description: "Log in, sign up, and understand the home screen.",
    href: "/docs/installation#first-launch",
  },
  {
    title: "Keyboard shortcuts",
    description: "Move fast with navigation and chat shortcuts.",
    href: "/docs/installation#keyboard-shortcuts",
  },
  {
    title: "Troubleshooting",
    description: "Fix common install and connection issues quickly.",
    href: "/docs/installation#troubleshooting",
  },
]

export default function DocsHome() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 w-fit rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
            Documentation
          </div>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Termchat Docs</h1>
            <p className="text-lg text-muted-foreground">
              Setup guides, shortcuts, and troubleshooting collected from the Termchat user guide. Start with installation
              or jump to the section you need.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/docs/installation">
                  View installation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Back to site</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Card key={guide.href} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  {guide.badge ? <Badge variant="secondary">{guide.badge}</Badge> : null}
                </div>
                <p className="text-sm text-muted-foreground">{guide.description}</p>
              </CardHeader>
              <CardContent>
                <Link
                  href={guide.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Read guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl">Quick start summary</CardTitle>
            <p className="text-sm text-muted-foreground">
              Install the latest build and launch Termchat in minutes.
            </p>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm bg-muted rounded-lg p-4">
            <code className="block">curl -fsSL https://raw.githubusercontent.com/AlNaheyan/termchat/main/install.sh | sh</code>
            <code className="block">termchat</code>
            <div className="text-xs text-muted-foreground">
              Need more detail? Start with the installation guide for macOS, Linux, and Windows steps.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
