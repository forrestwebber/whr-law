'use client';

import { useState, useRef, useEffect } from 'react';

const FOREST = '#1a3c34';
const CREAM = '#FAF8F5';
const WARM = '#8b6f47';
const WARM_LIGHT = '#a68960';
const FOREST_DARK = '#112822';

const PRACTICE_AREAS = [
  'Probate',
  'Estate Planning',
  'Family Law',
  'Criminal Defense',
  'Other',
];

export function WHRChatBot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('whr-open-chat', handler);
    return () => window.removeEventListener('whr-open-chat', handler);
  }, []);
  const [step, setStep] = useState(0);
  const [practiceArea, setPracticeArea] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isValidName = (v: string) => v.trim().split(/\s+/).length >= 2 && v.trim().length >= 4;
  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const isValidPhone = (v: string) => v.replace(/\D/g, '').length >= 10;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const submit = async (submittedPhone: string) => {
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: submittedPhone,
          practiceArea,
          description: `Chatbot inquiry — ${practiceArea}`,
          client: 'whr-law',
        }),
      });
      setStep(5);
    } catch {
      setStep(6);
    } finally {
      setLoading(false);
    }
  };

  const advance = () => {
    const val = inputVal.trim();
    if (!val) return;
    if (step === 1) {
      if (!isValidName(val)) { setInputError('Please enter your full name (first and last).'); return; }
      setName(val); setInputVal(''); setInputError(''); setStep(2);
    } else if (step === 2) {
      if (!isValidEmail(val)) { setInputError("That doesn't look like a valid email. Try again?"); return; }
      setEmail(val); setInputVal(''); setInputError(''); setStep(3);
    } else if (step === 3) {
      if (!isValidPhone(val)) { setInputError('Please enter a 10-digit phone number.'); return; }
      setPhone(val); setInputVal(''); setInputError(''); submit(val);
    }
  };

  const btn: React.CSSProperties = {
    background: 'none', border: `1.5px solid ${FOREST}`, borderRadius: 20,
    padding: '6px 13px', color: FOREST, fontSize: '0.78rem', fontWeight: 600,
    cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Free consultation"
          style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
            width: 60, height: 60, borderRadius: '50%',
            background: `linear-gradient(135deg, ${FOREST}, ${FOREST_DARK})`,
            border: `2px solid ${WARM}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 30px rgba(26,60,52,0.45)`, transition: 'transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={WARM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </button>
      )}

      {open && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, left: 24, zIndex: 9999,
          maxWidth: 360, marginLeft: 'auto',
          height: 500, maxHeight: 'calc(100dvh - 48px)',
          borderRadius: 16, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          background: CREAM,
          border: '1px solid #e0d8ce',
          boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          animation: 'whrChatUp 0.25s ease-out',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '13px 16px',
            background: `linear-gradient(135deg, ${FOREST}, ${FOREST_DARK})`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={WARM} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: CREAM, lineHeight: 1.2 }}>WHR Law</div>
                <div style={{ fontSize: '0.68rem', color: `${CREAM}99`, lineHeight: 1.2 }}>William H. Russell, Attorney</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close"
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '1rem' }}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
              Hi — I&apos;m here to help connect you with <strong style={{ color: WARM_LIGHT }}>William</strong> for a free consultation. What brings you in today?
            </div>

            {step === 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 2 }}>
                {PRACTICE_AREAS.map(area => (
                  <button key={area} onClick={() => { setPracticeArea(area); setStep(1); }}
                    style={btn}
                    onMouseEnter={e => { e.currentTarget.style.background = FOREST; e.currentTarget.style.color = WARM_LIGHT; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = FOREST; }}
                  >{area}</button>
                ))}
              </div>
            )}

            {step >= 1 && practiceArea && (
              <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{practiceArea}</div>
            )}
            {step >= 1 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
                Understood. What&apos;s your <strong style={{ color: WARM_LIGHT }}>full name</strong>?
              </div>
            )}

            {step >= 2 && name && (
              <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{name}</div>
            )}
            {step >= 2 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
                Thank you, {name.split(' ')[0]}. What&apos;s your <strong style={{ color: WARM_LIGHT }}>email address</strong>?
              </div>
            )}

            {step >= 3 && email && (
              <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{email}</div>
            )}
            {step >= 3 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
                And the best <strong style={{ color: WARM_LIGHT }}>phone number</strong> to reach you?
              </div>
            )}

            {step === 5 && (
              <>
                <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{phone}</div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '92%', padding: '12px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.6 }}>
                  Thank you, {name.split(' ')[0]}. William will personally review your situation and reach out within one business day.<br /><br />
                  Need to speak sooner? Call <a href="tel:+15122194053" style={{ color: WARM_LIGHT, fontWeight: 700 }}>512-219-4053</a>.
                </div>
              </>
            )}

            {step === 6 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '92%', padding: '12px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem' }}>
                Something went wrong. Please call William directly at <a href="tel:+15122194053" style={{ color: WARM_LIGHT, fontWeight: 700 }}>512-219-4053</a>.
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {(step === 1 || step === 2 || step === 3) && (
            <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px', borderTop: '1px solid #e0d8ce', background: '#fff', gap: 6 }}>
              {inputError && <div style={{ fontSize: '0.73rem', color: '#b91c1c', paddingLeft: 2 }}>{inputError}</div>}
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') advance(); }}
                  placeholder={step === 1 ? 'Your full name...' : step === 2 ? 'Your email address...' : 'Your phone number...'}
                  type={step === 2 ? 'email' : step === 3 ? 'tel' : 'text'}
                  autoFocus
                  style={{ flex: 1, background: CREAM, border: `1.5px solid #d0c8bc`, borderRadius: 10, padding: '10px 14px', color: FOREST, fontSize: '0.84rem', outline: 'none' }}
                />
                <button
                  disabled={loading || !inputVal.trim()}
                  onClick={advance}
                  style={{ background: loading || !inputVal.trim() ? '#ccc' : `linear-gradient(135deg, ${FOREST}, ${FOREST_DARK})`, border: 'none', borderRadius: 10, padding: '0 14px', cursor: loading || !inputVal.trim() ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={WARM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes whrChatUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
