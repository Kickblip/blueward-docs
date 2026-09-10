import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      tabs={{
        transform: (option, node) => ({
          ...option,
          icon: (
            <div
              className="size-full [&_svg]:size-full"
              style={{
                color: option.url === "/draft" ? "#a78bfa" : "#60a5fa",
              }}
            >
              {node.icon}
            </div>
          ),
        }),
      }}
    >
      {children}
    </DocsLayout>
  )
}
