import { createMarkdownProcessor, type MarkdownProcessor } from "@astrojs/markdown-remark";

let markdownProcessorPromise: Promise<MarkdownProcessor> | undefined;

const getMarkdownProcessor = () => {
  markdownProcessorPromise ??= createMarkdownProcessor();
  return markdownProcessorPromise;
};

export const renderMarkdown = async (content?: string) => {
  if (!content) {
    return "";
  }

  const processor = await getMarkdownProcessor();
  const { code } = await processor.render(content);
  return code;
};

