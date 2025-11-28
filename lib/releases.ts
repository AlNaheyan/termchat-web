const RELEASE_API = "https://api.github.com/repos/AlNaheyan/termchat/releases/latest"
const FALLBACK_BASE = "https://github.com/AlNaheyan/termchat/releases/latest/download/"

type ReleaseAsset = {
  name?: string
  browser_download_url?: string
}

type ReleaseResponse = {
  tag_name?: string
  assets?: ReleaseAsset[]
}

export type ReleaseDownloadUrls = {
  macAmd64: string
  macArm64: string
  linuxAmd64: string
  linuxArm64: string
  windowsAmd64: string
}

export type ReleaseInfo = {
  tag: string
  downloads: ReleaseDownloadUrls
}

function findAsset(assets: ReleaseAsset[] | undefined, name: string, fallback: string) {
  const match = assets?.find((asset) => asset.name === name)
  return match?.browser_download_url || `${FALLBACK_BASE}${fallback}`
}

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`)
    }

    const data = (await res.json()) as ReleaseResponse
    const tag = data.tag_name || "Latest release"

    return {
      tag,
      downloads: {
        macAmd64: findAsset(data.assets, "termchat-macos-amd64", "termchat-macos-amd64"),
        macArm64: findAsset(data.assets, "termchat-macos-arm64", "termchat-macos-arm64"),
        linuxAmd64: findAsset(data.assets, "termchat-linux-amd64", "termchat-linux-amd64"),
        linuxArm64: findAsset(data.assets, "termchat-linux-arm64", "termchat-linux-arm64"),
        windowsAmd64: findAsset(data.assets, "termchat-windows-amd64.exe", "termchat-windows-amd64.exe"),
      },
    }
  } catch (error) {
    console.error("[getLatestRelease] falling back to latest download URLs", error)
    return {
      tag: "Latest release",
      downloads: {
        macAmd64: `${FALLBACK_BASE}termchat-macos-amd64`,
        macArm64: `${FALLBACK_BASE}termchat-macos-arm64`,
        linuxAmd64: `${FALLBACK_BASE}termchat-linux-amd64`,
        linuxArm64: `${FALLBACK_BASE}termchat-linux-arm64`,
        windowsAmd64: `${FALLBACK_BASE}termchat-windows-amd64.exe`,
      },
    }
  }
}
