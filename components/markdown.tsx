import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Přizpůsobení pro shadcn/ui design system
          h1: ({ children }) => (
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-7">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic border-border bg-muted/50 py-2 rounded-r">
              {children}
            </blockquote>
          ),
          code: ({ inline, children, className, ...props }: any) => {
            if (inline) {
              return (
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  {children}
                </code>
              )
            }
            return (
              <code className="font-mono text-sm">
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 px-6 text-zinc-50 dark:bg-zinc-900">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-md my-6 w-full h-auto border"
            />
          ),
          table: ({ children }) => (
            <div className="my-6 w-full overflow-y-auto">
              <table className="w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2 [&[align=center]]:text-center [&[align=right]]:text-right">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-4 md:my-8 border-border" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold">
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}