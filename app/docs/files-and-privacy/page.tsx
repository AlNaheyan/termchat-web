import Link from "next/link"
import { ArrowLeft, Download, FileWarning, FolderInput, Lock, Shield, Upload } from "lucide-react"
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

export default function FilesAndPrivacyPage() {
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
              <Badge variant="secondary">Files & privacy</Badge>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Uploads · Limits · Data</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Share files safely in Termchat</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Full breakdown of the file picker, uploads/downloads, limits, and how Termchat handles privacy as described
              in the user guide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/docs/usage">Back to usage</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/docs/troubleshooting">Troubleshooting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Uploading files</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Interactive file picker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ol className="list-decimal list-inside space-y-1">
                  <li>In a chat room, type <code className="font-mono text-xs">/upload</code> with no filename.</li>
                  <li>Press Enter to open the picker (starts in your home directory).</li>
                  <li>Navigate with ↑/↓ and press Enter to upload.</li>
                  <li>Press Esc to cancel.</li>
                </ol>
                <ul className="list-disc list-inside space-y-1 pt-2">
                  <li>Shows files only (directories are disabled, hidden files are skipped).</li>
                  <li>Displays file sizes to help you choose quickly.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Direct path upload</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <CodeBlock>/upload ~/Documents/report.pdf</CodeBlock>
                <ul className="list-disc list-inside space-y-1">
                  <li>Supports <code className="font-mono text-xs">~</code> expansion for home directories.</li>
                  <li>Validates the file exists before uploading.</li>
                  <li>Tab completion works in most terminals if you prefer typing paths.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Downloading files</h2>
          </div>
          <Card className="border-border">
            <CardContent className="space-y-2 text-sm text-muted-foreground p-6">
              <p className="text-foreground">
                When someone uploads a file, Termchat shows a message like <span className="font-semibold">📎 alice
                uploaded: report.pdf (2.4 MB)</span>.
              </p>
              <CodeBlock>/download report.pdf</CodeBlock>
              <ul className="list-disc list-inside space-y-1">
                <li>Files save to <code className="font-mono text-xs">~/Downloads</code> by default, or the current directory if Downloads does not exist.</li>
                <li>Only people present in the room when the file was uploaded can download it.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="grid lg:grid-cols-3 gap-4">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">File size limits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <FileWarning className="h-4 w-4 text-primary" />
                <span>Maximum upload: 10 MB</span>
              </div>
              <p>Larger files are rejected. Compress or split large assets before uploading.</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Ephemeral storage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Files live only while the room is active.</li>
                <li>When the last participant leaves, files are automatically deleted.</li>
                <li>Chat messages and room history are not persisted.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Data handling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Stored: usernames, encrypted passwords, friends list, temporary session tokens.</li>
                <li>Not stored: chat messages, room history, uploaded files after rooms close.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Security practices</h2>
          </div>
          <Card className="border-border">
            <CardContent className="space-y-2 text-sm text-muted-foreground p-6">
              <ul className="list-disc list-inside space-y-1">
                <li>Use a unique password for Termchat and avoid sharing credentials.</li>
                <li>Add only people you trust; rooms are ephemeral but not end-to-end encrypted.</li>
                <li>Avoid uploading sensitive or confidential files—data is removed when rooms close.</li>
                <li>If you need to force quit a stuck session, use <code className="font-mono text-xs">Ctrl+C</code> and restart.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <FolderInput className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Troubleshooting uploads</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">File not found</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Confirm the path is correct; use absolute paths or <code className="font-mono text-xs">~</code>.</li>
                  <li>Ensure the file still exists and you have read permissions.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Upload failed or too large</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  <li>Keep uploads under 10 MB.</li>
                  <li>Test with a small file to confirm connectivity.</li>
                  <li>Check your internet connection if failures persist.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
