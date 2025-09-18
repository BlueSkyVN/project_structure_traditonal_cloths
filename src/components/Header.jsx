import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Heart, ChevronDown } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu';
    
    const Header = () => {
      const location = useLocation();
    
      const costumes = [
        { name: 'Áo Dài', path: '/ao-dai' },
        { name: 'Áo Tứ Thân', path: '/ao-tu-than' },
        { name: 'Áo Bà Ba', path: '/ao-ba-ba' },
        { name: 'Áo Gấm', path: '/ao-gam' },
        { name: 'Áo Nhật Bình', path: '/ao-nhat-binh' },
      ];
    
      const handleContactClick = (e) => {
        if (location.pathname === '/') {
          e.preventDefault();
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    
      return (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-50 glass-effect"
        >
          <div className="container mx-auto flex items-center justify-between p-4 text-white">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-playfair font-bold">Trang Phục Việt</span>
            </Link>
    
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:text-red-300 transition-colors">
                Trang chủ
              </Link>
    
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-white hover:bg-white/10 hover:text-white">
                    <span>Trang phục</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/50 backdrop-blur-lg border-white/20 text-white">
                  {costumes.map((costume) => (
                    <DropdownMenuItem key={costume.path} asChild>
                      <Link to={costume.path} className="focus:bg-white/20">
                        {costume.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
    
              <a href="/#contact" onClick={handleContactClick} className="hover:text-red-300 transition-colors">
                Liên hệ
              </a>
            </nav>
    
            <div className="md:hidden">
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black/50 backdrop-blur-lg border-white/20 text-white w-56 mr-4">
                        <DropdownMenuItem asChild><Link to="/" className="focus:bg-white/20">Trang chủ</Link></DropdownMenuItem>
                         {costumes.map((costume) => (
                            <DropdownMenuItem key={costume.path} asChild>
                            <Link to={costume.path} className="focus:bg-white/20">
                                {costume.name}
                            </Link>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuItem asChild>
                            <a href="/#contact" onClick={handleContactClick} className="focus:bg-white/20 w-full">Liên hệ</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
        </motion.header>
      );
    };
    
    export default Header;