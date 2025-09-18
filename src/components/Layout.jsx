import React from 'react';
    import { Outlet } from 'react-router-dom';
    import Header from '@/components/Header';
    import ScrollToTop from '@/components/ScrollToTop';
    
    const Layout = () => {
      return (
        <div className="min-h-screen">
          <ScrollToTop />
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      );
    };
    
    export default Layout;