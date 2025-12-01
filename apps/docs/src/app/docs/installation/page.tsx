import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';

export const metadata = {
  title: 'Installation - Soff Libraries',
};

export default function InstallationPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Installation</h1>

      <p className="lead text-xl text-muted-foreground">
        Each Soff library can be installed independently. Install only what you need.
      </p>

      <h2>Package Managers</h2>

      <Tabs defaultValue="npm" className="not-prose">
        <TabsList>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
          <TabsTrigger value="bun">bun</TabsTrigger>
        </TabsList>

        <TabsContent value="npm" className="mt-4">
          <CodeBlock
            code={`# Holiday calculator
npm install soff-date

# Document validation
npm install soff-id

# Input masking
npm install soff-mask

# Currency formatting
npm install soff-money`}
          >{`# Holiday calculator
npm install soff-date

# Document validation
npm install soff-id

# Input masking
npm install soff-mask

# Currency formatting
npm install soff-money`}</CodeBlock>
        </TabsContent>

        <TabsContent value="pnpm" className="mt-4">
          <CodeBlock
            code={`# Holiday calculator
pnpm add soff-date

# Document validation
pnpm add soff-id

# Input masking
pnpm add soff-mask

# Currency formatting
pnpm add soff-money`}
          >{`# Holiday calculator
pnpm add soff-date

# Document validation
pnpm add soff-id

# Input masking
pnpm add soff-mask

# Currency formatting
pnpm add soff-money`}</CodeBlock>
        </TabsContent>

        <TabsContent value="yarn" className="mt-4">
          <CodeBlock
            code={`# Holiday calculator
yarn add soff-date

# Document validation
yarn add soff-id

# Input masking
yarn add soff-mask

# Currency formatting
yarn add soff-money`}
          >{`# Holiday calculator
yarn add soff-date

# Document validation
yarn add soff-id

# Input masking
yarn add soff-mask

# Currency formatting
yarn add soff-money`}</CodeBlock>
        </TabsContent>

        <TabsContent value="bun" className="mt-4">
          <CodeBlock
            code={`# Holiday calculator
bun add soff-date

# Document validation
bun add soff-id

# Input masking
bun add soff-mask

# Currency formatting
bun add soff-money`}
          >{`# Holiday calculator
bun add soff-date

# Document validation
bun add soff-id

# Input masking
bun add soff-mask

# Currency formatting
bun add soff-money`}</CodeBlock>
        </TabsContent>
      </Tabs>

      <h2>Requirements</h2>

      <ul>
        <li>Node.js 20 or higher</li>
        <li>TypeScript 5.0+ (optional, but recommended)</li>
      </ul>

      <h2>Tree-shaking</h2>

      <p>
        All libraries support tree-shaking. Import only the locales you need to minimize bundle
        size:
      </p>

      <div className="not-prose">
        <CodeBlock
          code={`// ✅ Good - only Colombia is bundled (~3KB)
import { getHolidays } from 'soff-date/locales/co';

// ❌ Avoid - imports all locales
import { getHolidays } from 'soff-date';`}
        >{`// ✅ Good - only Colombia is bundled (~3KB)
import { getHolidays } from 'soff-date/locales/co';

// ❌ Avoid - imports all locales
import { getHolidays } from 'soff-date';`}</CodeBlock>
      </div>

      <h2>ESM & CommonJS</h2>

      <p>All libraries ship both ESM and CommonJS builds:</p>

      <div className="not-prose">
        <CodeBlock
          code={`// ESM
import { validateNIT } from 'soff-id/locales/co';

// CommonJS
const { validateNIT } = require('soff-id/locales/co');`}
        >{`// ESM
import { validateNIT } from 'soff-id/locales/co';

// CommonJS
const { validateNIT } = require('soff-id/locales/co');`}</CodeBlock>
      </div>
    </article>
  );
}
