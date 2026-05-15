import { useRef, useState, type FormEvent } from 'react';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: '', email: '', message: '' };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'tell me who you are';
  if (!values.email.trim()) errors.email = 'where should I write back?';
  else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "that doesn't look like an email";
  if (!values.message.trim()) errors.message = 'a few words?';
  return errors;
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const flyRef = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function flyAndReset() {
    const fly = flyRef.current;
    if (!fly) return;
    fly.classList.add('show');
    window.setTimeout(() => {
      fly.classList.remove('show');
      fly.classList.add('fly-out');
    }, 1400);
    window.setTimeout(() => {
      fly.classList.remove('fly-out');
    }, 2400);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    // No backend here — replace with a fetch() to your form endpoint
    // (Formspree, Resend, your own API, etc.) when wiring it up.
    flyAndReset();
    setValues(initial);
    window.setTimeout(() => setSubmitting(false), 1400);
  }

  return (
    <section id="contact">
      <SectionHeader
        number="05"
        label="Contact"
        hint="I write back ✦"
        title={
          <>
            Send a <em>postcard</em>.
          </>
        }
      />
      <div className="postcard reveal" ref={ref}>
        <div className="left-side">
          <h3>Hello, friend.</h3>
          <div className="greeting">it's good to meet you ✦</div>
          <p>
            Got a project? A weird idea? A long shot? Drop me a few lines — I read everything that lands here and reply within two days.
          </p>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className={`field${errors.name ? ' invalid' : ''}`}>
              <label className="label" htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="a reader, a recruiter, a friend"
                value={values.name}
                onChange={(e) => update('name', e.target.value)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="err">{errors.name}</span>}
            </div>
            <div className={`field${errors.email ? ' invalid' : ''}`}>
              <label className="label" htmlFor="contact-email">Reply to</label>
              <input
                id="contact-email"
                type="email"
                placeholder="where should I write back?"
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>
            <div className={`field${errors.message ? ' invalid' : ''}`}>
              <label className="label" htmlFor="contact-message">A few words</label>
              <textarea
                id="contact-message"
                rows={3}
                placeholder="what brings you here?"
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="err">{errors.message}</span>}
            </div>
            <button className="send" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send the note ✦'}
            </button>
          </form>
        </div>
        <div className="right-side">
          <div className="stamp-area">
            <div className="stamp" aria-hidden="true">
              <div className="big">{profile.initials.primary}{profile.initials.secondary}</div>
              <div className="lab">Metgher · NC</div>
            </div>
          </div>
          <div className="write-line">To: Andrei,</div>
          <div className="write-line">From: a friendly</div>
          <div className="write-line">internet visitor.</div>
          <div className="info-list">
            <div className="info-row">
              <span className="k">Direct</span>
              <span className="v">
                <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
              </span>
            </div>
            <div className="info-row">
              <span className="k">LinkedIn</span>
              <span className="v">
                <a href={`https://www.${profile.contact.linkedin}`} target="_blank" rel="noreferrer noopener">
                  {profile.contact.linkedin}
                </a>
              </span>
            </div>
            <div className="info-row">
              <span className="k">Reply in</span>
              <span className="v">{profile.contact.replyIn}</span>
            </div>
            <div className="info-row">
              <span className="k">Timezone</span>
              <span className="v">{profile.contact.timezone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="postcard-fly" ref={flyRef} role="status" aria-live="polite">
        ✦ Sent with care ✦
        <div className="sub">I'll write back soon.</div>
      </div>
    </section>
  );
}
