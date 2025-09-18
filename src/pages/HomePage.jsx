import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Heart, Star, Users } from 'lucide-react';
    import { useToast } from "@/components/ui/use-toast";
    
    const HomePage = () => {
      const { toast } = useToast();
    
      const costumes = [
        {
          name: 'Áo Dài',
          path: '/ao-dai',
          description: 'Biểu tượng của phụ nữ Việt Nam',
          color: 'from-pink-500 to-rose-600'
        },
        {
          name: 'Áo Tứ Thân',
          path: '/ao-tu-than',
          description: 'Trang phục cung đình cổ điển',
          color: 'from-purple-500 to-indigo-600'
        },
        {
          name: 'Áo Bà Ba',
          path: '/ao-ba-ba',
          description: 'Trang phục miền Nam đặc trưng',
          color: 'from-green-500 to-emerald-600'
        },
        {
          name: 'Áo Gấm',
          path: '/ao-gam',
          description: 'Trang phục hoàng gia sang trọng',
          color: 'from-yellow-500 to-orange-600'
        },
        {
          name: 'Áo Nhật Bình',
          path: '/ao-nhat-binh',
          description: 'Trang phục dân gian miền Bắc',
          color: 'from-blue-500 to-cyan-600'
        }
      ];
    
      const handleVideoPlay = () => {
        toast({
            title: "Tính năng chưa hoàn thiện! 🚧",
            description: "Tính năng này chưa được phát triển—nhưng đừng lo! Bạn có thể yêu cầu trong lần nhắc tiếp theo! 🚀",
            variant: "destructive"
        });
      }
    
      return (
        <>
          <Helmet>
            <title>Trang Phục Truyền Thống Việt Nam - Di Sản Văn Hóa Dân Tộc</title>
            <meta name="description" content="Khám phá vẻ đẹp của trang phục truyền thống Việt Nam qua các thế kỷ. Tìm hiểu về Áo Dài, Áo Tứ Thân, Áo Bà Ba và nhiều trang phục đặc trưng khác." />
          </Helmet>
    
          <div className="min-h-screen bg-gradient-to-br from-rose-900 via-red-900 to-red-800 text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 hero-pattern">
              <div className="container mx-auto text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-12"
                >
                  <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                    Vẻ Đẹp
                    <span className="block bg-gradient-to-r from-yellow-300 via-rose-400 to-red-400 bg-clip-text text-transparent">
                      Truyền Thống
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                    Khám phá những trang phục truyền thống Việt Nam qua các thế kỷ, 
                    nơi lưu giữ hồn cốt văn hóa và nghệ thuật dân tộc
                  </p>
                </motion.div>
    
                {/* Video Introduction */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-16"
                >
                  <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden glass-effect p-2">
                    <div className="aspect-video bg-gradient-to-r from-red-600 to-rose-600 rounded-xl flex items-center justify-center">
                      <img 
                        className="w-full h-full object-cover rounded-xl" 
                        alt="Video giới thiệu trang phục truyền thống Việt Nam"
                       src="https://images.unsplash.com/photo-1616584211051-611278c01355" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
                        <Button 
                          size="lg" 
                          className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold"
                          onClick={handleVideoPlay}
                        >
                          ▶ Xem Video Giới Thiệu
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
    
                {/* Stats */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                  <div className="glass-effect rounded-2xl p-6">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">5</h3>
                    <p className="opacity-80">Trang phục truyền thống</p>
                  </div>
                  <div className="glass-effect rounded-2xl p-6">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">1000+</h3>
                    <p className="opacity-80">Năm lịch sử</p>
                  </div>
                  <div className="glass-effect rounded-2xl p-6">
                    <Heart className="w-8 h-8 text-red-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">∞</h3>
                    <p className="opacity-80">Giá trị văn hóa</p>
                  </div>
                </motion.div>
              </div>
            </section>
    
            {/* Costume Navigation */}
            <section className="py-20 px-6 bg-black bg-opacity-20">
              <div className="container mx-auto">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                    Khám Phá Trang Phục
                  </h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Mỗi trang phục mang trong mình một câu chuyện riêng về lịch sử và văn hóa Việt Nam
                  </p>
                </motion.div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {costumes.map((costume, index) => (
                    <motion.div
                      key={costume.path}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="group"
                    >
                      <Link to={costume.path}>
                        <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                          <div className={`h-48 bg-gradient-to-br ${costume.color} relative overflow-hidden`}>
                            <div className="absolute inset-0 traditional-pattern"></div>
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                                {costume.name}
                              </h3>
                              <p className="text-white opacity-90 text-sm">
                                {costume.description}
                              </p>
                            </div>
                          </div>
                          <div className="p-6">
                            <Button 
                              variant="ghost" 
                              className="w-full justify-between text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                              Tìm hiểu thêm
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-gradient-to-r from-red-900 to-rose-900">
              <div className="container mx-auto text-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <h2 className="text-4xl font-playfair font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
                  <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Bạn có câu hỏi về trang phục truyền thống Việt Nam? Chúng tôi luôn sẵn sàng hỗ trợ!
                  </p>
                  <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div>
                        <h3 className="font-semibold mb-2">📧 Email</h3>
                        <p className="opacity-80">info@trangphucviet.com</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">📞 Điện thoại</h3>
                        <p className="opacity-80">+84 123 456 789</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">📍 Địa chỉ</h3>
                        <p className="opacity-80">Hà Nội, Việt Nam</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">🕒 Giờ làm việc</h3>
                        <p className="opacity-80">8:00 - 17:00 (T2-T6)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
    
            {/* Footer */}
            <footer className="py-12 px-6 bg-black bg-opacity-40">
              <div className="container mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-playfair font-bold">Trang Phục Việt</span>
                </div>
                <p className="opacity-80 mb-4">
                  Bảo tồn và phát huy giá trị văn hóa trang phục truyền thống Việt Nam
                </p>
                <p className="text-sm opacity-60">
                  © 2025 Trang Phục Việt. Tất cả quyền được bảo lưu.
                </p>
              </div>
            </footer>
          </div>
        </>
      );
    };
    
    export default HomePage;