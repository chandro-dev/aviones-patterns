type FlowStageProps = {
  title: string;
  detail: string;
};

export function FlowStage({ title, detail }: FlowStageProps) {
  return (
    <article className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
      <p className="terminal-title text-[11px] text-cyan-300">{title}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
    </article>
  );
}
