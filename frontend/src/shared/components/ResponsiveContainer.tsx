import React from 'react';

export const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto transition-all duration-300 ease-in-out">
      {children}
    </main>
  );
};
