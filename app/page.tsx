import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Users, MessageCircle, Lock, Upload, Zap, Github, ArrowRight } from "lucide-react"
import { TerminalDemo } from "@/components/terminal-demo"
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-mono text-xl font-bold">termchat</span>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://github.com/AlNaheyan/termchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors"
                >
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm">
                <Link href="/docs">Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
        <InteractiveGridPattern
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "opacity-30 text-muted-foreground",
          )}
          width={40}
          height={40}
          squaresClassName="fill-primary/5 hover:fill-primary/20 transition-colors duration-300"
        />
        <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
          <Badge variant="secondary" className="font-mono">
            v1.0 Now Available
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Chat in your <span className="text-primary">terminal</span>.
            <br />
            Stay in your flow.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A lightweight, real-time chat application built for developers who live in the terminal. Ephemeral rooms,
            file sharing, and instant messaging without leaving your workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-mono group">
              <Link href="/docs/installation">
                Install Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-mono gap-2 bg-transparent">
              <a
                href="https://github.com/AlNaheyan/termchat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <TerminalDemo />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for <span className="text-primary">productivity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for team communication, right in your terminal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ephemeral Rooms</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Create or join chat rooms on the fly. Rooms are automatically deleted when empty - no cleanup needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Friend System</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Add friends, manage friend requests, and see who's online with real-time presence tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Private Messaging</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Send direct messages to any user. Secure, encrypted sessions keep your conversations private.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">File Sharing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Upload and download files directly in chat rooms. Share code, docs, and assets with your team
                  instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Updates</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  WebSocket-powered instant messaging. See messages as they arrive with zero delay.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Beautiful TUI</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clean, responsive terminal interface built with Bubble Tea. Works seamlessly on any platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built with modern tech</h2>
            <p className="text-muted-foreground mb-12">Powered by Go, WebSockets, and battle-tested libraries</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Go", desc: "Backend" },
                { name: "Gorilla WebSocket", desc: "Real-time" },
                { name: "Bubble Tea", desc: "TUI Framework" },
                { name: "Lip Gloss", desc: "Styling" },
                { name: "SQLite", desc: "Database" },
                { name: "Fly.io", desc: "Deployment" },
                { name: "Docker", desc: "Container" },
                { name: "GitHub Actions", desc: "CI/CD" },
              ].map((tech) => (
                <Card key={tech.name} className="border-border">
                  <CardContent className="p-4 text-center">
                    <p className="font-mono font-semibold text-sm mb-1">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to chat in your terminal?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join developers who've streamlined their workflow with termchat
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="font-mono">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-mono font-semibold">termchat</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/AlNaheyan/termchat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://alnaheyan.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </a>
              <a
                href="https://x.com/0a1n1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
