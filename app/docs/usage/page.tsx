import Link from "next/link"
import { ArrowLeft, Command, MessageSquare, ShieldCheck, Users, Waypoints } from "lucide-react"
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

const commandFlags = [
  { flag: "--help", desc: "Show help and keyboard shortcuts", example: "termchat --help" },
  { flag: "--version", desc: "Show version information", example: "termchat --version" },
  { flag: "--update", desc: "Update to the latest version", example: "termchat --update" },
  { flag: "--server <url>", desc: "Connect to a custom server", example: "termchat --server ws://localhost:8080/join" },
  { flag: "--user <username>", desc: "Pre-fill username for login", example: "termchat --user alice" },
]

const chatCommands = [
  { command: "/upload", desc: "Open file picker to select and upload a file", example: "/upload" },
  { command: "/upload <path>", desc: "Upload a specific file by path", example: "/upload ~/file.txt" },
  { command: "/download <filename>", desc: "Download a file shared in the room", example: "/download report.pdf" },
  { command: "/leave", desc: "Exit the current chat room", example: "/leave" },
]

export default function UsagePage() {
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
              <Badge variant="secondary">Workflow</Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Auth · Friends · Chat</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Using Termchat day-to-day</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Detailed steps from the user guide for authenticating, managing friends and rooms, chatting, and using
              commands. Start here after installation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/docs/getting-started">View quick start</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs/files-and-privacy">File sharing & privacy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Authentication</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Username rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Minimum 4 characters.</li>
                  <li>Letters and numbers only (a-z, A-Z, 0-9).</li>
                  <li>No spaces, special characters, or emojis.</li>
                </ul>
                <div className="text-xs">Validation applies to new signups; existing shorter names can still log in.</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Session behavior</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Sessions save locally so you remain signed in after closing Termchat.</li>
                  <li>Logout anytime from the Friends screen with <code className="font-mono text-xs">L</code>.</li>
                  <li>Forgot password? Create a new account—there is no password recovery yet.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Sign up</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ol className="list-decimal list-inside space-y-1">
                  <li>Launch Termchat: <code className="font-mono text-xs">termchat</code>.</li>
                  <li>Press <code className="font-mono text-xs">2</code> or <code className="font-mono text-xs">S</code> for Sign up.</li>
                  <li>Enter a username that meets the rules above.</li>
                  <li>Enter a password (input is hidden).</li>
                  <li>Your account is created and you are logged in.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Log in</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ol className="list-decimal list-inside space-y-1">
                  <li>Launch Termchat.</li>
                  <li>Press <code className="font-mono text-xs">1</code> or <code className="font-mono text-xs">L</code> for Log in.</li>
                  <li>Enter your username.</li>
                  <li>Enter your password to reach the Friends screen.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Friends and rooms</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Add and manage friends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Send a request</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>From the Friends screen, press <code className="font-mono text-xs">A</code>.</li>
                  <li>Type the username and press Enter to send.</li>
                </ol>
                <div className="font-semibold text-foreground pt-2">Incoming requests</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Press <code className="font-mono text-xs">I</code>.</li>
                  <li>Select with ↑/↓, Enter to accept, <code className="font-mono text-xs">D</code> to decline.</li>
                </ol>
                <div className="font-semibold text-foreground pt-2">Outgoing requests</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Press <code className="font-mono text-xs">O</code>.</li>
                  <li>Select with ↑/↓, <code className="font-mono text-xs">D</code> to cancel.</li>
                </ol>
                <div className="text-xs pt-2">Online friends show a green dot; offline friends are gray.</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Start or join rooms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Direct message</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Highlight a friend with ↑/↓.</li>
                  <li>Press Enter to open a private room.</li>
                </ol>
                <div className="font-semibold text-foreground pt-2">Join existing room</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Press <code className="font-mono text-xs">M</code> on the Friends screen.</li>
                  <li>Enter the room code and press Enter.</li>
                </ol>
                <div className="font-semibold text-foreground pt-2">Create new room</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Press <code className="font-mono text-xs">N</code>.</li>
                  <li>Share the generated room code with others.</li>
                </ol>
                <div className="font-semibold text-foreground pt-2">Quick join from CLI</div>
                <CodeBlock>termchat myroom</CodeBlock>
                <div className="text-xs">Rooms self-destruct when empty for privacy.</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Chat flow and commands</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Chat interface</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Header shows room name, your username, and server info.</li>
                  <li>Status line reflects connection state (Connected/Connecting).</li>
                  <li>Messages stream in with timestamps and colors; history is scrollable.</li>
                  <li>Footer lists available commands and shortcuts.</li>
                  <li>Leave a room with Esc or <code className="font-mono text-xs">/leave</code>.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Command reference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-sm">Command-line flags</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="text-left text-muted-foreground">
                          <th className="py-2 pr-4 font-medium">Flag</th>
                          <th className="py-2 pr-4 font-medium">Description</th>
                          <th className="py-2 font-medium">Example</th>
                        </tr>
                      </thead>
                      <tbody className="align-top text-muted-foreground">
                        {commandFlags.map((item) => (
                          <tr key={item.flag} className="border-t border-border">
                            <td className="py-2 pr-4 font-mono text-xs text-foreground">{item.flag}</td>
                            <td className="py-2 pr-4">{item.desc}</td>
                            <td className="py-2 font-mono text-xs text-foreground">{item.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm">In-chat commands</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="text-left text-muted-foreground">
                          <th className="py-2 pr-4 font-medium">Command</th>
                          <th className="py-2 pr-4 font-medium">Description</th>
                          <th className="py-2 font-medium">Example</th>
                        </tr>
                      </thead>
                      <tbody className="align-top text-muted-foreground">
                        {chatCommands.map((item) => (
                          <tr key={item.command} className="border-t border-border">
                            <td className="py-2 pr-4 font-mono text-xs text-foreground">{item.command}</td>
                            <td className="py-2 pr-4">{item.desc}</td>
                            <td className="py-2 font-mono text-xs text-foreground">{item.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Command className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Keyboard shortcuts</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Authentication screens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div>1 or L — Log in</div>
                <div>2 or S — Sign up</div>
                <div>Q — Quit</div>
                <div>Esc — Back</div>
                <div>Enter — Submit</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Friends screen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div>↑ / ↓ — Navigate friends</div>
                <div>Enter — Start chat</div>
                <div>A — Add friend</div>
                <div>I — Incoming requests</div>
                <div>O — Outgoing requests</div>
                <div>M — Join room by code</div>
                <div>N — Create new room</div>
                <div>R — Refresh list</div>
                <div>L — Logout</div>
                <div>Q — Quit</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Friend requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div>↑ / ↓ — Navigate requests</div>
                <div>Enter — Accept (incoming)</div>
                <div>D — Decline or cancel</div>
                <div>Esc — Back</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Chat screen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div>Enter — Send message / run command</div>
                <div>Esc — Leave room</div>
                <div>Ctrl+C — Force quit</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">File picker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div>↑ / ↓ — Navigate files</div>
                <div>Enter — Select file to upload</div>
                <div>Esc — Cancel selection</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Waypoints className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Tips for faster workflows</h2>
          </div>
          <Card className="border-border">
            <CardContent className="space-y-2 text-sm text-muted-foreground p-6">
              <ul className="list-disc list-inside space-y-1">
                <li>Keep the Friends screen open as your hub to add friends, accept requests, and jump between rooms.</li>
                <li>Lean on shortcuts—most actions are quicker with single-key navigation.</li>
                <li>Use the file picker via <code className="font-mono text-xs">/upload</code> for paths you don't remember.</li>
                <li>Create descriptive room names when inviting others; room codes are case-sensitive.</li>
                <li>Refresh with <code className="font-mono text-xs">R</code> to update online status and requests.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
