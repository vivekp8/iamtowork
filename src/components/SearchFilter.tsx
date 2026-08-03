'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
      <input 
        type="text" 
        placeholder="Search by name, email, or company..." 
        defaultValue={searchParams.get('search')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem 0.75rem 2.5rem',
          borderRadius: '25px',
          background: '#1a1a1a',
          border: 'none',
          boxShadow: 'inset 5px 5px 10px #121212, inset -5px -5px 10px #222222',
          color: 'white',
          fontSize: '0.9rem',
          outline: 'none',
          transition: 'box-shadow 0.2s',
        }}
        onFocus={(e) => e.target.style.boxShadow = 'inset 7px 7px 14px #121212, inset -7px -7px 14px #222222'}
        onBlur={(e) => e.target.style.boxShadow = 'inset 5px 5px 10px #121212, inset -5px -5px 10px #222222'}
      />
      <svg 
        style={{ 
          position: 'absolute', 
          left: '12px', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          color: '#9ca3af' 
        }} 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      {isPending && (
        <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>...</span>
        </div>
      )}
    </div>
  );
}
