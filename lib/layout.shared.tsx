import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { appName, gitConfig } from "./shared"
import { Logo } from "@/components/logo"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <>
          <Logo size={24} />
          <p className="text-sm font-medium">
            <span>blueward</span>
            <span className="opacity-70">.dev</span>
          </p>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  }
}
