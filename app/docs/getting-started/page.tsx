import Link from "next/link"
import { ArrowLeft, CheckCircle2, Info, Rocket, Sparkles, Timer, Wand2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto border border-border">
      <code className="leading-relaxed">{children}</code>
    </pre>
  )
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12 space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Back to docs
            </Link>
          </div>
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">User guide</Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Overview · Quick start</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get started with Termchat</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A concise tour of Termchat pulled from the latest user guide. See the new features, get installed in one
              line, and know what to expect on first launch before diving into deeper guides.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/docs/installation">Install Termchat</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs/usage">Learn the workflow</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Key features from the guide</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
                title: "Secure authentication",
                desc: "Password-protected accounts with encrypted sessions and saved logins.",
              },
              {
                icon: <Info className="h-5 w-5 text-primary" />,
                title: "Friends system",
                desc: "Add friends, review incoming/outgoing requests, and see online status at a glance.",
              },
              {
                icon: <Rocket className="h-5 w-5 text-primary" />,
                title: "Real-time chat",
                desc: "Instant messaging with WebSockets, private DMs, and ephemeral rooms that self-destruct when empty.",
              },
              {
                icon: <Wand2 className="h-5 w-5 text-primary" />,
                title: "File sharing",
                desc: "Upload with an interactive picker or a direct path, then download from the room feed.",
              },
              {
                icon: <Timer className="h-5 w-5 text-primary" />,
                title: "Auto-update support",
                desc: "Built-in update notifications and one-command upgrades with `termchat --update`.",
              },
              {
                icon: <Sparkles className="h-5 w-5 text-primary" />,
                title: "Built-in help",
                desc: "Keyboard shortcuts and commands available via `termchat --help` whenever you need them.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">Quick start summary</CardTitle>
              <p className="text-sm text-muted-foreground">
                Install, launch, and start chatting in under a minute.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <CodeBlock>
                {`curl -fsSL https://raw.githubusercontent.com/AlNaheyan/termchat/main/install.sh | sh
termchat                  # open the auth menu
# Add friend → press A
# Accept request → press I, Enter
# Start chat → pick friend, press Enter
# Upload → /upload (file picker)
# Download → /download filename.pdf`}
              </CodeBlock>
              <p className="text-xs text-muted-foreground">
                Need manual steps or PATH help? Jump to the installation guide for macOS, Linux, and Windows options.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">What you see on first launch</CardTitle>
              <p className="text-sm text-muted-foreground">The authentication menu mirrors the guide instructions.</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground">Options</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Log in with an existing account.</li>
                <li>Sign up to create a new account (usernames are 4+ characters, letters/numbers only).</li>
                <li>Quit to exit.</li>
              </ul>
              <div className="font-semibold text-foreground">Session behavior</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Sessions save locally so you stay logged in after closing the app.</li>
                <li>Logout anytime from the Friends screen with <code className="font-mono text-xs">L</code>.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Update notifications and one-command upgrades</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Auto-checks on launch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Starting with v1.3.0, Termchat checks for updates when you open the app. If a new release exists,
                  you'll see:
                </p>
                <CodeBlock>🚀 Update available! v1.3.0 → v1.3.1 - Run: termchat --update</CodeBlock>
                <ul className="list-disc list-inside space-y-1">
                  <li>Non-blocking: chat starts immediately.</li>
                  <li>Silent if offline: no error appears when you're disconnected.</li>
                  <li>Opt-in: you choose when to update.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Upgrade in one command</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <CodeBlock>termchat --update</CodeBlock>
                <p className="text-muted-foreground text-sm">
                  The built-in updater downloads the correct binary for your platform, replaces the existing install,
                  and verifies the result. If you're on an older build, re-run the install script instead.
                </p>
                <div className="text-xs">
                  Permission error while updating? Run with sudo if Termchat lives in{" "}
                  <code className="font-mono text-xs">/usr/local/bin</code>.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-primary rotate-180" />
            <h2 className="text-2xl font-semibold">Where to go next</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Installation</CardTitle>
                <p className="text-sm text-muted-foreground">Platform-specific commands and PATH setup.</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/docs/installation">Open installation</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Using Termchat</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Authentication rules, friends, chat commands, and shortcuts.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/docs/usage">Open usage guide</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Files & privacy</CardTitle>
                <p className="text-sm text-muted-foreground">Upload/download flow, limits, and data handling.</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/docs/files-and-privacy">Open files guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
