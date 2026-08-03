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
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontSize: '0.9rem',
          backdropFilter: 'blur(10px)',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
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
