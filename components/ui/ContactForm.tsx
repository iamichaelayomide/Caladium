"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site-data";

const inputClass =
  "w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

export function ContactForm({ includeService = false }: { includeService?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="First Name" />
        <input className={inputClass} placeholder="Last Name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="Email Address" type="email" />
        <input className={inputClass} placeholder="Phone Number" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} placeholder="Company Name" />
        <input className={inputClass} placeholder="Job Title" />
      </div>
      {includeService ? (
        <select className={inputClass} defaultValue="Service of Interest">
          <option>Service of Interest</option>
          {services.map((service) => (
            <option key={service.slug}>{service.name}</option>
          ))}
          <option>General Inquiry</option>
        </select>
      ) : null}
      <textarea className={inputClass} placeholder="Message" rows={5} />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
      <p className="text-xs leading-6 text-muted">
        By submitting this form, you agree to our Privacy Policy. Caladium may contact you via email or phone for scheduling purposes.
      </p>
      {submitted ? <p className="text-sm font-medium text-accent">Thanks. This demo form has captured your message locally.</p> : null}
    </form>
  );
}
