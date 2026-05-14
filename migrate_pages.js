const fs = require('fs');
const path = require('path');

const srcRoutes = '../wealthconomy-legacy-blueprint/src/routes';
const destApp = './app';

const files = fs.readdirSync(srcRoutes);

files.forEach(file => {
  if (file === '__root.tsx') return;

  const content = fs.readFileSync(path.join(srcRoutes, file), 'utf-8');
  const isIndex = file === 'index.tsx';
  const routeName = file.replace('.tsx', '');
  const dirPath = isIndex ? destApp : path.join(destApp, routeName);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Extract meta
  let title = 'Wealthconomy';
  let description = 'Wealthconomy';
  const titleMatch = content.match(/{ title: "(.*?)" }/);
  if (titleMatch) title = titleMatch[1];
  const descMatch = content.match(/{ name: "description", content: "(.*?)" }/);
  if (descMatch) description = descMatch[1];

  // Extract component name
  const compMatch = content.match(/function ([A-Za-z0-9_]+)\(\) {/);
  const compName = compMatch ? compMatch[1] : 'Page';

  // Extract imports
  const imports = content.match(/^import .*? from .*?;/gm) || [];
  const cleanImports = imports.filter(i => 
    !i.includes('@tanstack/react-router') && 
    !i.includes('site-header') && 
    !i.includes('site-footer')
  );

  // Extract main content
  const mainMatch = content.match(/<main(?: className=".*?")?>([\s\S]*?)<\/main>/);
  const mainContent = mainMatch ? mainMatch[1] : '';

  // If there's no main, let's just grab the inside of the outer div except headers
  let finalContent = mainContent;
  if (!mainContent) {
     const divMatch = content.match(/<div className="min-h-screen.*?">([\s\S]*?)<\/div>/);
     if (divMatch) {
       finalContent = divMatch[1].replace(/<SiteHeader \/>/g, '').replace(/<SiteFooter \/>/g, '');
     }
  }

  const nextJsPage = `import type { Metadata } from "next";
${cleanImports.join('\n')}

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
};

export default function ${compName}() {
  return (
    <>
      ${finalContent.trim()}
    </>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), nextJsPage);
  console.log(`Created ${path.join(dirPath, 'page.tsx')}`);
});
