import { ExamplesSidebar, type ExampleSlug } from "@/components/examples/ExamplesSidebar";
import { ConsolePanel } from "@/components/examples/ConsolePanel";

interface ExamplesShellProps {
  active?: ExampleSlug | "parkour-boy" | "zombie-hunter";
  children: React.ReactNode;
}

export function ExamplesShell({ active, children }: ExamplesShellProps) {
  return (
    <div className="flex h-full flex-col lg:flex-row">
      <ExamplesSidebar active={active} />
      <main className="flex-1 flex flex-col overflow-hidden">{children}</main>
      <ConsolePanel />
    </div>
  );
}
