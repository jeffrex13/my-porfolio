'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const fieldClassName =
  'w-full rounded-lg border border-white/10 bg-black px-4 py-3 font-medium text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/60 focus:ring-2 focus:ring-black/25';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/jepcureg@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error('Unable to send message');

      const result = await response.json();
      if (result.success !== true && result.success !== 'true') {
        throw new Error('Unable to send message');
      }

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full max-w-xl space-y-4">
      <input type="hidden" name="_subject" value="New portfolio inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="min-w-0 space-y-2 text-sm font-bold">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder="Your name"
          />
        </label>
        <label className="min-w-0 space-y-2 text-sm font-bold">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-bold">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${fieldClassName} resize-y`}
          placeholder="Tell me about your project"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition-transform hover:scale-105 active:scale-95 disabled:cursor-wait disabled:opacity-60"
        >
          <Send size={18} />
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>

        <p className="text-sm font-semibold" aria-live="polite">
          {status === 'sent' ? (
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} /> Message sent.
            </span>
          ) : null}
          {status === 'error'
            ? 'Message could not be sent. Please try again.'
            : null}
        </p>
      </div>
    </form>
  );
}
