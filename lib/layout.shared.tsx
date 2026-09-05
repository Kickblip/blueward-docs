import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { appName, gitConfig } from "./shared"
import { Logo } from "@/components/logo"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <>
          <Logo size={32} />
          <span className="rounded-full border-blue-800 bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white uppercase">
            Developers
          </span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  }
}
