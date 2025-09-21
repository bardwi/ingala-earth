import s from './GlobalCTA.module.scss';

export default function GlobalCTA() {
  return (
    <div className={s.bar}>
      <div className={`container ${s.inner}`}>
        <div className={s.title}>Ready to begin your regenerative journey?</div>
        <div className={s.actions}>
          <a className={s.btn} href="/contact">
            Contact Us
          </a>
          <a className={s.btnAlt} href="/projects">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}
