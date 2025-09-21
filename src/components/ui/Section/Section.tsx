import s from './Section.module.scss';
export default function Section({
  children,
  narrow = false,
}: {
  children: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <section className={`${s.section} ${narrow ? s.narrow : ''}`}>
      <div className="container">{children}</div>
    </section>
  );
}
