import { Clock, Radio } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CodeBlock } from '@/components/code-block';
import { validateCron, formatCron, humanizeCron } from 'soff-cron';
import { CronFormatter } from './cron-formatter';
import { getVersion } from '@/lib/versions';
import { JsonLd } from '@/components/json-ld';

export const metadata = {
  title: 'soff-cron - Cron Expression Parser',
};

function getCronExamples() {
  return {
    examples: [
      { expr: '0 9 * * 1-5', locale: 'en' as const },
      { expr: '*/15 * * * *', locale: 'en' as const },
      { expr: '0 0 * * *', locale: 'es' as const },
      { expr: '0 9-17 * * 1-5', locale: 'en' as const },
      { expr: '@daily', locale: 'es' as const },
      { expr: '0 0 1 * *', locale: 'en' as const },
    ].map((ex) => ({
      ...ex,
      formatted: formatCron(ex.expr, { locale: ex.locale }),
      isValid: validateCron(ex.expr).isValid,
    })),
    humanizeExamples: [
      { text: 'every 5 minutes', locale: 'en' as const },
      { text: 'todos los días a las 2 am', locale: 'es' as const },
      { text: 'weekdays at 9am', locale: 'en' as const },
      { text: 'cada lunes a las 10am', locale: 'es' as const },
      { text: 'every monday', locale: 'en' as const },
      { text: 'fines de semana a las 10am', locale: 'es' as const },
    ].map((ex) => ({
      ...ex,
      result: humanizeCron(ex.text, { locale: ex.locale }),
    })),
  };
}

export default function SoffCronPage() {
  const { examples, humanizeExamples } = getCronExamples();
  const version = getVersion('soff-cron');

  return (
    <article className="space-y-8">
      <JsonLd
        name="soff-cron"
        description="Lightweight, tree-shakeable cron expression parser and human-readable formatter."
        package="soff-cron"
      />
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-soff-cron/10 p-2">
            <Clock size={36} className="text-soff-cron" />
          </div>
          <h1 className="bg-linear-to-r from-soff-cron to-soff-cron/70 bg-clip-text text-3xl font-bold text-transparent">
            soff-cron
          </h1>
          <Badge className="bg-soff-cron/20 text-soff-cron">v{version}</Badge>
          <Badge variant="outline">~2KB Core</Badge>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          Lightweight, tree-shakeable cron expression parser and human-readable formatter. Convert
          between cron expressions and natural language - perfect for non-technical users!
        </p>
      </div>

      {/* Live Demo */}
      <Card className="border-soff-cron/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radio size={18} className="text-red-500" /> Live Demo - Cron Formatter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CronFormatter />
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Natural Language → Cron</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {humanizeExamples.map((ex, idx) => (
                <div key={idx} className="rounded-lg border bg-card p-3">
                  <p className="text-sm text-muted-foreground">&quot;{ex.text}&quot;</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xl">→</span>
                    {ex.result.success ? (
                      <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
                        {ex.result.cronExpression}
                      </code>
                    ) : (
                      <span className="text-sm text-destructive">Failed</span>
                    )}
                  </div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {ex.locale}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cron → Human Readable</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {examples.map((ex, idx) => (
                <div key={idx} className="rounded-lg border bg-card p-3">
                  <code className="text-sm font-mono text-muted-foreground">{ex.expr}</code>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xl">→</span>
                    <p className="text-sm font-semibold">{ex.formatted}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {ex.locale}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Installation */}
      <section id="installation">
        <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
        <CodeBlock code="npm install soff-cron">npm install soff-cron</CodeBlock>
      </section>

      {/* Quick Start */}
      <section id="quick-start">
        <h2 className="mb-4 text-2xl font-semibold">Quick Start</h2>
        <Tabs defaultValue="humanize" className="w-full">
          <TabsList>
            <TabsTrigger value="humanize">Humanize</TabsTrigger>
            <TabsTrigger value="format">Format</TabsTrigger>
            <TabsTrigger value="validate">Validate</TabsTrigger>
            <TabsTrigger value="parse">Parse</TabsTrigger>
          </TabsList>
          <TabsContent value="humanize">
            <CodeBlock
              code={`import { humanizeCron } from 'soff-cron';

// Convert natural language to cron expressions
humanizeCron('every 5 minutes', { locale: 'en' });
// → { success: true, cronExpression: "*/5 * * * *" }

humanizeCron('todos los días a las 2 am', { locale: 'es' });
// → { success: true, cronExpression: "0 2 * * *" }

humanizeCron('every monday at 10am', { locale: 'en' });
// → { success: true, cronExpression: "0 10 * * 1" }

humanizeCron('días de semana a las 9am', { locale: 'es' });
// → { success: true, cronExpression: "0 9 * * 1-5" }

// Error handling with suggestions
humanizeCron('invalid text', { locale: 'en' });
// → {
//   success: false,
//   error: "Could not parse...",
//   suggestions: ["every 5 minutes", "every day at 9 am"]
// }`}
            >
              {`import { humanizeCron } from 'soff-cron';

// Convert natural language to cron expressions
humanizeCron('every 5 minutes', { locale: 'en' });
// → { success: true, cronExpression: "*/5 * * * *" }

humanizeCron('todos los días a las 2 am', { locale: 'es' });
// → { success: true, cronExpression: "0 2 * * *" }

humanizeCron('every monday at 10am', { locale: 'en' });
// → { success: true, cronExpression: "0 10 * * 1" }

humanizeCron('días de semana a las 9am', { locale: 'es' });
// → { success: true, cronExpression: "0 9 * * 1-5" }

// Error handling with suggestions
humanizeCron('invalid text', { locale: 'en' });
// → {
//   success: false,
//   error: "Could not parse...",
//   suggestions: ["every 5 minutes", "every day at 9 am"]
// }`}
            </CodeBlock>
          </TabsContent>
          <TabsContent value="format">
            <CodeBlock
              code={`import { formatCron } from 'soff-cron';

// Format cron expressions to human-readable text
formatCron('0 9 * * 1-5', { locale: 'en' });
// → "At 09:00, Monday through Friday"

formatCron('*/15 * * * *', { locale: 'es' });
// → "Cada 15 minutos"

formatCron('0 9-17 * * *', { locale: 'en', use24HourFormat: false });
// → "Between 9:00 AM and 5:00 PM, every day"

// Support for special keywords
formatCron('@daily', { locale: 'en' });
// → "At midnight"`}
            >
              {`import { formatCron } from 'soff-cron';

// Format cron expressions to human-readable text
formatCron('0 9 * * 1-5', { locale: 'en' });
// → "At 09:00, Monday through Friday"

formatCron('*/15 * * * *', { locale: 'es' });
// → "Cada 15 minutos"

formatCron('0 9-17 * * *', { locale: 'en', use24HourFormat: false });
// → "Between 9:00 AM and 5:00 PM, every day"

// Support for special keywords
formatCron('@daily', { locale: 'en' });
// → "At midnight"`}
            </CodeBlock>
          </TabsContent>
          <TabsContent value="validate">
            <CodeBlock
              code={`import { validateCron } from 'soff-cron';

// Validate cron expressions
validateCron('0 9 * * 1-5');
// → { isValid: true }

validateCron('invalid cron');
// → { isValid: false, error: 'Expected 5 fields, got 2' }

// Support for 6-field expressions (with seconds)
validateCron('0 0 9 * * *', true);
// → { isValid: true }

// Named values
validateCron('0 9 * JAN MON');
// → { isValid: true }`}
            >
              {`import { validateCron } from 'soff-cron';

// Validate cron expressions
validateCron('0 9 * * 1-5');
// → { isValid: true }

validateCron('invalid cron');
// → { isValid: false, error: 'Expected 5 fields, got 2' }

// Support for 6-field expressions (with seconds)
validateCron('0 0 9 * * *', true);
// → { isValid: true }

// Named values
validateCron('0 9 * JAN MON');
// → { isValid: true }`}
            </CodeBlock>
          </TabsContent>
          <TabsContent value="parse">
            <CodeBlock
              code={`import { parseCron } from 'soff-cron';

// Parse cron to structured data
const parsed = parseCron('0 9-17 * * 1-5');

console.log(parsed.minute.values);  // [0]
console.log(parsed.hour.values);    // [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(parsed.hour.isRange);   // true
console.log(parsed.dayOfWeek.values); // [1, 2, 3, 4, 5]

// Parse special keywords
const special = parseCron('@hourly');
console.log(special.isSpecial);     // true
console.log(special.specialKeyword); // '@hourly'`}
            >
              {`import { parseCron } from 'soff-cron';

// Parse cron to structured data
const parsed = parseCron('0 9-17 * * 1-5');

console.log(parsed.minute.values);  // [0]
console.log(parsed.hour.values);    // [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(parsed.hour.isRange);   // true
console.log(parsed.dayOfWeek.values); // [1, 2, 3, 4, 5]

// Parse special keywords
const special = parseCron('@hourly');
console.log(special.isSpecial);     // true
console.log(special.specialKeyword); // '@hourly'`}
            </CodeBlock>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features */}
      <section id="features">
        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🗣️ Natural Language</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Convert human-readable text like &quot;every 5 minutes&quot; to cron expressions.
                Perfect for non-technical users!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🌍 Internationalization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built-in support for English and Spanish with extensible i18n system.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">✅ Full Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Validates standard 5-field and 6-field (with seconds) cron expressions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📅 Named Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Support for month names (JAN, FEB) and day names (MON, TUE).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔖 Special Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                @yearly, @monthly, @weekly, @daily, @hourly, @midnight shortcuts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">💡 Smart Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get helpful suggestions when natural language text cannot be parsed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Cron Syntax Reference */}
      <section id="syntax">
        <h2 className="mb-4 text-2xl font-semibold">Cron Syntax Reference</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Standard Format (5 fields)</h3>
                <pre className="mt-2 rounded-md bg-muted p-3 text-sm">
                  * * * * *{'\n'}│ │ │ │ │{'\n'}│ │ │ │ └─ Day of week (0-7, SUN-SAT){'\n'}│ │ │
                  └─── Month (1-12, JAN-DEC){'\n'}│ │ └───── Day of month (1-31){'\n'}│ └───────
                  Hour (0-23){'\n'}└───────── Minute (0-59)
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">With Seconds (6 fields)</h3>
                <pre className="mt-2 rounded-md bg-muted p-3 text-sm">
                  * * * * * *{'\n'}│ │ │ │ │ │{'\n'}│ │ │ │ │ └─ Day of week (0-7){'\n'}│ │ │ │ └───
                  Month (1-12){'\n'}│ │ │ └───── Day of month (1-31){'\n'}│ │ └─────── Hour (0-23)
                  {'\n'}│ └───────── Minute (0-59){'\n'}
                  └─────────── Second (0-59)
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Special Characters</h3>
                <div className="mt-2 space-y-2">
                  <div className="rounded-md bg-muted p-3">
                    <code className="font-mono">*</code>
                    <span className="ml-2 text-sm text-muted-foreground">Any value (wildcard)</span>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <code className="font-mono">,</code>
                    <span className="ml-2 text-sm text-muted-foreground">
                      List separator (e.g., 1,3,5)
                    </span>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <code className="font-mono">-</code>
                    <span className="ml-2 text-sm text-muted-foreground">Range (e.g., 1-5)</span>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <code className="font-mono">/</code>
                    <span className="ml-2 text-sm text-muted-foreground">
                      Step values (e.g., */15)
                    </span>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <code className="font-mono">?</code>
                    <span className="ml-2 text-sm text-muted-foreground">
                      No specific value (day fields only)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* API Reference */}
      <section id="api">
        <h2 className="mb-4 text-2xl font-semibold">API Reference</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg">humanizeCron() ✨ NEW</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code={`humanizeCron(text: string, options?: HumanizerOptions): HumanizerResult

interface HumanizerOptions {
  locale?: 'en' | 'es';           // Default: 'en'
}

interface HumanizerResult {
  success: boolean;
  cronExpression?: string;
  error?: string;
  suggestions?: string[];
}

// Supported patterns (English):
// - Time intervals: "every minute", "every 5 minutes", "every 2 hours"
// - Daily: "every day", "every day at 2am", "at 14:30"
// - Weekly: "every week", "every monday", "every monday at 10am"
// - Monthly: "every month", "on the 1st of every month"
// - Weekdays: "weekdays at 9am", "weekends at 10am"

// Patrones soportados (Español):
// - Intervalos: "cada minuto", "cada 5 minutos", "cada 2 horas"
// - Diario: "todos los días", "todos los días a las 2am", "a las 14:30"
// - Semanal: "cada semana", "todos los lunes", "cada lunes a las 10am"
// - Mensual: "cada mes", "el día 1 de cada mes"
// - Días laborales: "días de semana a las 9am", "fines de semana a las 10am"`}
              >
                {`humanizeCron(text: string, options?: HumanizerOptions): HumanizerResult

interface HumanizerOptions {
  locale?: 'en' | 'es';           // Default: 'en'
}

interface HumanizerResult {
  success: boolean;
  cronExpression?: string;
  error?: string;
  suggestions?: string[];
}

// Supported patterns (English):
// - Time intervals: "every minute", "every 5 minutes", "every 2 hours"
// - Daily: "every day", "every day at 2am", "at 14:30"
// - Weekly: "every week", "every monday", "every monday at 10am"
// - Monthly: "every month", "on the 1st of every month"
// - Weekdays: "weekdays at 9am", "weekends at 10am"

// Patrones soportados (Español):
// - Intervalos: "cada minuto", "cada 5 minutos", "cada 2 horas"
// - Diario: "todos los días", "todos los días a las 2am", "a las 14:30"
// - Semanal: "cada semana", "todos los lunes", "cada lunes a las 10am"
// - Mensual: "cada mes", "el día 1 de cada mes"
// - Días laborales: "días de semana a las 9am", "fines de semana a las 10am"`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg">formatCron()</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code={`formatCron(expression: string, options?: FormatterOptions): string

interface FormatterOptions {
  locale?: 'en' | 'es';           // Default: 'en'
  use24HourFormat?: boolean;       // Default: true
  includeSeconds?: boolean;        // Default: false
  verbose?: boolean;               // Default: false
}`}
              >
                {`formatCron(expression: string, options?: FormatterOptions): string

interface FormatterOptions {
  locale?: 'en' | 'es';           // Default: 'en'
  use24HourFormat?: boolean;       // Default: true
  includeSeconds?: boolean;        // Default: false
  verbose?: boolean;               // Default: false
}`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg">validateCron()</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code={`validateCron(expression: string, allowSeconds?: boolean): ValidationResult

interface ValidationResult {
  isValid: boolean;
  error?: string;
  field?: 'second' | 'minute' | 'hour' | 'dayOfMonth' | 'month' | 'dayOfWeek';
}`}
              >
                {`validateCron(expression: string, allowSeconds?: boolean): ValidationResult

interface ValidationResult {
  isValid: boolean;
  error?: string;
  field?: 'second' | 'minute' | 'hour' | 'dayOfMonth' | 'month' | 'dayOfWeek';
}`}
              </CodeBlock>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg">parseCron()</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code={`parseCron(expression: string, allowSeconds?: boolean): ParsedCron

interface ParsedCron {
  isSpecial: boolean;
  specialKeyword?: string;
  second?: CronField;
  minute: CronField;
  hour: CronField;
  dayOfMonth: CronField;
  month: CronField;
  dayOfWeek: CronField;
}

interface CronField {
  raw: string;
  values: number[];
  isWildcard: boolean;
  isRange: boolean;
  isStep: boolean;
  isList: boolean;
}`}
              >
                {`parseCron(expression: string, allowSeconds?: boolean): ParsedCron

interface ParsedCron {
  isSpecial: boolean;
  specialKeyword?: string;
  second?: CronField;
  minute: CronField;
  hour: CronField;
  dayOfMonth: CronField;
  month: CronField;
  dayOfWeek: CronField;
}

interface CronField {
  raw: string;
  values: number[];
  isWildcard: boolean;
  isRange: boolean;
  isStep: boolean;
  isList: boolean;
}`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Tree-shaking */}
      <section id="tree-shaking">
        <h2 className="mb-4 text-2xl font-semibold">Tree-shaking</h2>
        <p className="mb-4 text-muted-foreground">
          Import only what you need for optimal bundle size:
        </p>
        <CodeBlock
          code={`// Import core functions (without i18n)
import { validateCron, parseCron } from 'soff-cron';

// Import specific i18n
import { es } from 'soff-cron/i18n/es';
import { en } from 'soff-cron/i18n/en';

// Import types
import type { ParsedCron, FormatterOptions } from 'soff-cron';`}
        >
          {`// Import core functions (without i18n)
import { validateCron, parseCron } from 'soff-cron';

// Import specific i18n
import { es } from 'soff-cron/i18n/es';
import { en } from 'soff-cron/i18n/en';

// Import types
import type { ParsedCron, FormatterOptions } from 'soff-cron';`}
        </CodeBlock>
      </section>
    </article>
  );
}
