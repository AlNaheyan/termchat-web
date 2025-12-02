import Link from "next/link"
import { AlertTriangle, ArrowLeft, Bug, HelpCircle, Network, RefreshCw, ShieldOff, Wrench } from "lucide-react"
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

export default function TroubleshootingPage() {
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
              <Badge variant="secondary">Troubleshooting</Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Install · Update · Chat</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Fix common Termchat issues</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Guidance lifted from the user guide for installation problems, updates, connectivity, chat, uploads, and
              accounts. Follow the steps below or jump to GitHub support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/docs/installation">Install guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs/usage">Usage guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Installation issues</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Permission denied</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <CodeBlock>chmod +x termchat</CodeBlock>
                <p>Ensure the binary is executable before moving it.</p>
                <div className="text-xs">Still blocked? Check <code className="font-mono text-xs">ls -l $(which termchat)</code> for executable bits.</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Command not found</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Confirm Termchat is on PATH (e.g., <code className="font-mono text-xs">/usr/local/bin</code>).</p>
                <p>Add PATH entries per the installation guide if missing.</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">macOS blocked app</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <CodeBlock>xattr -d com.apple.quarantine /usr/local/bin/termchat</CodeBlock>
                <p>Or allow the binary in System Settings → Privacy & Security.</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Wrong architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Run <code className="font-mono text-xs">uname -m</code> and download the matching build (AMD64 vs ARM64).</p>
                <p>Errors like "cannot execute binary file" usually mean the architecture is incorrect.</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Can't write to /usr/local/bin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Use user paths instead:</p>
                <CodeBlock>
                  {`mkdir -p ~/bin
mv termchat ~/bin/
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc`}
                </CodeBlock>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Update issues</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Update notification missing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Requires v1.3.0 or later.</li>
                  <li>Notifications are silent when offline.</li>
                  <li>Check manually with <code className="font-mono text-xs">termchat --update</code>.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Updater fails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Run with sudo if Termchat is in <code className="font-mono text-xs">/usr/local/bin</code>.</li>
                  <li>If a release exists but you see "You're already on the latest version", re-run the install script.</li>
                  <li>Compare <code className="font-mono text-xs">termchat --version</code> with GitHub releases.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Connection and chat</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Stuck connecting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Verify your internet connection and server status.</li>
                  <li>Close and reopen Termchat; log in again if the session expired.</li>
                  <li>Reconnect by leaving and rejoining the room if needed.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Messages not appearing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Check the status line for connection state.</li>
                  <li>If disconnected, Termchat auto-retries; you can also rejoin the room manually.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">File upload issues</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">File not found</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Confirm the file path; use absolute paths or <code className="font-mono text-xs">~</code> for home.</li>
                  <li>Ensure the file still exists and is readable.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">File too large or failed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Uploads are limited to 10 MB.</li>
                  <li>Compress or split large files; retry with a smaller file to confirm connectivity.</li>
                  <li>Check your connection if uploads consistently fail.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldOff className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Account issues</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Invalid credentials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Re-enter your username/password or create a new account if you can't recover the password.</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Username problems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>"User already exists": pick a different username.</li>
                  <li>"Username must be at least 4 characters long": choose a longer name.</li>
                  <li>"Username can only contain letters and numbers": avoid spaces, symbols, or emojis.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Bug className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">General tips</h2>
          </div>
          <Card className="border-border">
            <CardContent className="space-y-2 text-sm text-muted-foreground p-6">
              <ul className="list-disc list-inside space-y-1">
                <li>Force quit with <code className="font-mono text-xs">Ctrl+C</code> if a session is stuck, then relaunch.</li>
                <li>Run <code className="font-mono text-xs">termchat --help</code> for built-in shortcuts and commands.</li>
                <li>Use a modern terminal (iTerm2, Alacritty, Windows Terminal) if you see strange characters or no colors.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Get more help</h2>
          </div>
          <Card className="border-border">
            <CardContent className="space-y-2 text-sm text-muted-foreground p-6">
              <p>
                Open an issue on{" "}
                <a
                  href="https://github.com/AlNaheyan/termchat/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>{" "}
                for bugs, or start a discussion for feature requests and questions.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
