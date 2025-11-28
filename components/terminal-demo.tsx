import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"

export function TerminalDemo() {
  return (
    <Terminal className="mx-auto">
      <TypingAnimation>&gt; termchat dev-team</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-primary">
        <span>Welcome, developer</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-accent">
        <span>Friends online: 3 | Incoming requests: 1 | Outgoing requests: 0</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-muted-foreground">
        <span>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-accent">
        <span>&gt; alice</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3200} className="text-accent">
        <span> bob</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3400} className="text-accent">
        <span> charlie</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-muted-foreground">
        <span>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-muted-foreground">
        <span>↑/↓ select • Enter chat • A add friend • M join room • N new room</span>
      </AnimatedSpan>

      <TypingAnimation delay={5000} className="text-muted-foreground">
        &gt; _
      </TypingAnimation>
    </Terminal>
  )
}
