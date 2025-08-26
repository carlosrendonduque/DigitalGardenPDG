import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

type GiscusOpts = {
  repo: string
  repoId: string
  category: string
  categoryId: string
  mapping?: "pathname" | "url" | "title"
  theme?: string
  lang?: string
}

export default ((opts?: GiscusOpts): QuartzComponent => {
  if (!opts) {
    throw new Error("Giscus: faltan opciones de configuración")
  }

  const {
    repo,
    repoId,
    category,
    categoryId,
    mapping = "pathname",
    theme = "preferred_color_scheme",
    lang = "es",
  } = opts

  return (_props: QuartzComponentProps) => `
<section id="comments" class="giscus">
  <script src="https://giscus.app/client.js"
    data-repo="${repo}"
    data-repo-id="${repoId}"
    data-category="${category}"
    data-category-id="${categoryId}"
    data-mapping="${mapping}"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="${theme}"
    data-lang="${lang}"
    crossorigin="anonymous"
    async>
  </script>
</section>
`
}) satisfies QuartzComponentConstructor
