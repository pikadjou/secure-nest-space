import { cn } from "@/lib/utils";

interface RichContentProps {
  content: string;
  className?: string;
}

/**
 * Parse markdown-like content to HTML
 * Supports: headings (##, ###), bold (**), italic (*), underline (__u__), 
 * strikethrough (~~), bullet lists (-), numbered lists (1.), links [text](url)
 */
const parseRichContent = (content: string): string => {
  let html = content;

  // Escape HTML entities for security
  html = html.replace(/&/g, '&amp;');
  html = html.replace(/</g, '&lt;');
  html = html.replace(/>/g, '&gt;');

  // Headers (must be done before other replacements)
  html = html.replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-5 mb-2 text-foreground">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Bold text **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');

  // Underline text __u__text__u__ (using special marker to avoid conflict with bold)
  html = html.replace(/__u__([^_]+)__u__/g, '<u class="underline">$1</u>');

  // Strikethrough ~~text~~
  html = html.replace(/~~([^~]+)~~/g, '<del class="line-through">$1</del>');

  // Italic text *text* (single asterisk, after bold is processed)
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

  // Process lists
  const lines = html.split('\n');
  let inUnorderedList = false;
  let inOrderedList = false;
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const unorderedMatch = line.match(/^- (.+)$/);
    const orderedMatch = line.match(/^\d+\. (.+)$/);

    if (unorderedMatch) {
      if (!inUnorderedList) {
        if (inOrderedList) {
          processedLines.push('</ol>');
          inOrderedList = false;
        }
        processedLines.push('<ul class="list-disc pl-6 mb-4 space-y-2">');
        inUnorderedList = true;
      }
      processedLines.push(`<li class="text-muted-foreground">${unorderedMatch[1]}</li>`);
    } else if (orderedMatch) {
      if (!inOrderedList) {
        if (inUnorderedList) {
          processedLines.push('</ul>');
          inUnorderedList = false;
        }
        processedLines.push('<ol class="list-decimal pl-6 mb-4 space-y-2">');
        inOrderedList = true;
      }
      processedLines.push(`<li class="text-muted-foreground">${orderedMatch[1]}</li>`);
    } else {
      if (inUnorderedList) {
        processedLines.push('</ul>');
        inUnorderedList = false;
      }
      if (inOrderedList) {
        processedLines.push('</ol>');
        inOrderedList = false;
      }
      processedLines.push(line);
    }
  }

  // Close any remaining lists
  if (inUnorderedList) processedLines.push('</ul>');
  if (inOrderedList) processedLines.push('</ol>');

  html = processedLines.join('\n');

  // Paragraphs - split by double newlines
  const blocks = html.split(/\n\n+/);
  html = blocks.map(block => {
    const trimmed = block.trim();
    // Don't wrap if already wrapped in HTML tags
    if (trimmed.startsWith('<h') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('<li') ||
        trimmed.startsWith('<p')) {
      return trimmed;
    }
    // Wrap plain text in paragraph
    if (trimmed) {
      return `<p class="mb-4 text-muted-foreground leading-relaxed">${trimmed}</p>`;
    }
    return '';
  }).join('\n');

  // Clean up any remaining single newlines within paragraphs
  html = html.replace(/([^>])\n([^<])/g, '$1 $2');

  return html;
};

const RichContent = ({ content, className }: RichContentProps) => {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:text-foreground",
        "prose-p:text-muted-foreground",
        "prose-strong:text-foreground",
        "prose-li:text-muted-foreground",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        className
      )}
      dangerouslySetInnerHTML={{ __html: parseRichContent(content) }}
    />
  );
};

export default RichContent;
