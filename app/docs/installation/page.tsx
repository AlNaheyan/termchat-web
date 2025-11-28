import Link from "next/link"
import { ArrowLeft, CheckCircle2, Download, Laptop, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getLatestRelease } from "@/lib/releases"

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto border border-border">
      <code className="leading-relaxed">{children}</code>
    </pre>
  )
}

export default async function InstallationPage() {
  const release = await getLatestRelease()
  const { downloads } = release

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
              <Badge variant="secondary">Installation</Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">macOS · Linux · Windows</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Install Termchat</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Follow these steps to install Termchat across platforms. Start with the one-line script or pick a manual
              download for your OS. Content pulled from the Termchat user guide.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
              Latest release: <span className="font-mono text-foreground">{release.tag}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#quick-install">Jump to quick install</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#troubleshooting">Skip to troubleshooting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section id="quick-install" className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Quick install script (recommended)</h2>
          </div>
          <p className="text-muted-foreground">
            One command to detect your platform, download the correct binary, install to{" "}
            <code className="font-mono text-sm">/usr/local/bin/termchat</code>, and verify it works.
          </p>
          <CodeBlock>curl -fsSL https://raw.githubusercontent.com/AlNaheyan/termchat/main/install.sh | sh</CodeBlock>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <a href={downloads.macAmd64} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                macOS Intel
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <a href={downloads.macArm64} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                macOS Apple Silicon
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <a href={downloads.linuxAmd64} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Linux AMD64
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <a href={downloads.linuxArm64} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Linux ARM64
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="gap-2">
              <a href={downloads.windowsAmd64} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Windows
              </a>
            </Button>
          </div>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Auto-detects Intel/ARM on macOS/Linux.</li>
            <li>Downloads the latest release and makes it executable.</li>
            <li>Adds to PATH and verifies installation.</li>
            <li>May prompt for sudo to write to <code className="font-mono text-xs">/usr/local/bin</code>.</li>
          </ul>
        </section>

        <section id="manual-install" className="space-y-6">
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Manual installation</h2>
          </div>
          <p className="text-muted-foreground">
            Prefer a direct download? Choose your OS and architecture. Commands mirror the user guide instructions and
            include PATH-friendly options.
          </p>

          <Tabs defaultValue="macos" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="linux">Linux</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>

            <TabsContent value="macos">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Intel Mac (AMD64)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CodeBlock>
                      {`curl -L ${downloads.macAmd64} -o termchat
chmod +x termchat
sudo mv termchat /usr/local/bin/`}
                    </CodeBlock>
                    <div className="text-xs text-muted-foreground">
                      Check architecture with <code className="font-mono">uname -m</code>. <code>x86_64</code> → AMD64.
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Apple Silicon (ARM64)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CodeBlock>
                      {`curl -L ${downloads.macArm64} -o termchat
chmod +x termchat
sudo mv termchat /usr/local/bin/`}
                    </CodeBlock>
                    <div className="text-xs text-muted-foreground">
                      <code>arm64</code> → Apple Silicon (M1/M2/M3/M4).
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">No sudo?</div>
                  <CodeBlock>
                    {`mkdir -p ~/bin
mv termchat ~/bin/
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc`}
                  </CodeBlock>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">Gatekeeper blocked?</div>
                  <CodeBlock>xattr -d com.apple.quarantine /usr/local/bin/termchat</CodeBlock>
                  <div className="text-xs">Or allow from Privacy & Security.</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="linux">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Linux (AMD64 / ARM64)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CodeBlock>
                    {`# AMD64
curl -L ${downloads.linuxAmd64} -o termchat

# ARM64 (e.g., Raspberry Pi)
curl -L ${downloads.linuxArm64} -o termchat
chmod +x termchat
sudo mv termchat /usr/local/bin/`}
                  </CodeBlock>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <div className="font-semibold text-foreground">No sudo?</div>
                      <CodeBlock>
                        {`mkdir -p ~/.local/bin
mv termchat ~/.local/bin/
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc`}
                      </CodeBlock>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-foreground">Wrong architecture?</div>
                      <CodeBlock>
                        {`uname -m  # check
# re-download matching binary if needed`}
                      </CodeBlock>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="windows">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Windows (AMD64)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>
                      Download{" "}
                      <a
                        href="https://github.com/AlNaheyan/termchat/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        termchat-windows-amd64.exe
                      </a>{" "}
                      and rename to <code className="font-mono text-xs">termchat.exe</code>.
                    </li>
                    <li>Move to a permanent folder (e.g., C:\Program Files\termchat\).</li>
                    <li>Add that folder to your PATH (see below) or run from the directory.</li>
                  </ol>
                  <CodeBlock>
                    {`# PowerShell download
Invoke-WebRequest -Uri "${downloads.windowsAmd64}" -OutFile "termchat.exe"

# Move with admin rights
Move-Item termchat.exe "C:\\Program Files\\termchat\\termchat.exe"

# Or move to user directory (no admin)
$userBin = "$env:USERPROFILE\\bin"
New-Item -ItemType Directory -Force -Path $userBin
Move-Item termchat.exe "$userBin\\termchat.exe"`}
                  </CodeBlock>
                  <CodeBlock>
                    {`# Optional curl download
curl -L ${downloads.windowsAmd64} -o termchat.exe`}
                  </CodeBlock>
                  <div className="text-xs text-muted-foreground">
                    Defender warning? Choose "More info" → "Run anyway" or add an exception.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="path-setup" className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">PATH setup</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">macOS / Linux</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="font-semibold text-foreground">Zsh (macOS default)</div>
                <CodeBlock>
                  {`echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc`}
                </CodeBlock>
                <div className="font-semibold text-foreground">Bash</div>
                <CodeBlock>
                  {`echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile`}
                </CodeBlock>
                <div className="text-xs">
                  Custom install? Point PATH to <code className="font-mono">~/bin</code> or{" "}
                  <code className="font-mono">~/.local/bin</code>.
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Windows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="font-semibold text-foreground">GUI</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Search "Environment Variables".</li>
                  <li>Edit Path under User variables.</li>
                  <li>Add your termchat folder (e.g., C:\Program Files\termchat).</li>
                  <li>Save and restart the terminal.</li>
                </ol>
                <div className="font-semibold text-foreground">PowerShell</div>
                <CodeBlock>
                  {`[Environment]::SetEnvironmentVariable("Path", "$env:Path;C:\\Program Files\\termchat", "User")`}
                </CodeBlock>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="verify-installation" className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Verify installation</h2>
          </div>
          <p className="text-muted-foreground">Confirm the binary is available on your PATH.</p>
          <CodeBlock>
            {`which termchat    # macOS/Linux
where termchat    # Windows

termchat --version
termchat          # launch and see the auth menu`}
          </CodeBlock>
        </section>

        <section id="first-launch" className="space-y-3">
          <div className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">First launch</h2>
          </div>
          <p className="text-muted-foreground">Open Termchat and pick an option from the authentication menu.</p>
          <CodeBlock>termchat</CodeBlock>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Log in with an existing account.</li>
            <li>Sign up to create a new account.</li>
            <li>Quit to exit the app.</li>
          </ul>
        </section>

        <section id="keyboard-shortcuts" className="space-y-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Keyboard shortcuts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-muted-foreground">
                <div>1 or L — Log in</div>
                <div>2 or S — Sign up</div>
                <div>Q — Quit</div>
                <div>Esc — Back</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Friends screen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-muted-foreground">
                <div>Arrow keys — Navigate friends</div>
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
              <CardContent className="space-y-1 text-muted-foreground">
                <div>Arrow keys — Navigate requests</div>
                <div>Enter — Accept (incoming)</div>
                <div>D — Decline or cancel</div>
                <div>Esc — Back</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Chat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-muted-foreground">
                <div>Enter — Send message</div>
                <div>Esc — Leave room</div>
                <div>Ctrl+C — Force quit</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Troubleshooting</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Permission denied</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>Run <code className="font-mono text-xs">chmod +x termchat</code> before moving it.</div>
                <div>
                  Still blocked? Check <code className="font-mono text-xs">ls -l $(which termchat)</code> for executable
                  bits.
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Command not found</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>
                  Ensure the binary lives in PATH: <code className="font-mono text-xs">/usr/local/bin</code> or{" "}
                  <code className="font-mono text-xs">~/bin</code>.
                </div>
                <div>Add PATH entries (see PATH setup above).</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">macOS blocked app</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>
                  Run <code className="font-mono text-xs">xattr -d com.apple.quarantine /usr/local/bin/termchat</code>.
                </div>
                <div>Or allow from Privacy & Security → Security.</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Wrong architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>Check <code className="font-mono text-xs">uname -m</code> and re-download matching binary.</div>
                <div>
                  Errors like "cannot execute binary file" usually mean the architecture is incorrect.
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Can't write to /usr/local/bin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>
                  Use a user path: <code className="font-mono text-xs">~/bin</code> or{" "}
                  <code className="font-mono text-xs">~/.local/bin</code> and add to PATH.
                </div>
                <div>Create the directory if missing: <code className="font-mono text-xs">mkdir -p</code>.</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Windows Defender blocked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>Select "More info" → "Run anyway" or add an exception in Windows Security.</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Connection issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>Check internet and server status.</div>
                <div>Restart Termchat if stuck connecting; log in again if session expired.</div>
              </CardContent>
            </Card>
          </div>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base">Alternative installs & maintenance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground">From source (developers)</div>
              <CodeBlock>
                {`git clone https://github.com/AlNaheyan/termchat.git
cd termchat
go build -o termchat cmd/client/main.go
sudo mv termchat /usr/local/bin/`}
              </CodeBlock>
              <div className="font-semibold text-foreground">Update to latest</div>
              <CodeBlock>curl -fsSL https://raw.githubusercontent.com/AlNaheyan/termchat/main/install.sh | sh</CodeBlock>
              <div className="font-semibold text-foreground">Uninstall</div>
              <CodeBlock>
                {`sudo rm /usr/local/bin/termchat
rm -rf ~/.termchat/   # session data`}
              </CodeBlock>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Need more help? Open an issue on{" "}
            <a
              href="https://github.com/AlNaheyan/termchat/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
