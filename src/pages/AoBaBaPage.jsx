import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Waves, Sun, Leaf } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const AoBaBaPage = () => {
    const { toast } = useToast();

    const handleVideoPlay = () => {
        toast({
            title: "Tính năng chưa hoàn thiện! 🚧",
            description: "Tính năng này chưa được phát triển—nhưng đừng lo! Bạn có thể yêu cầu trong lần nhắc tiếp theo! 🚀",
            variant: "destructive"
        });
    };

  return (
    <>
      <Helmet>
        <title>Áo Bà Ba - Trang Phục Miền Nam Đặc Trưng Việt Nam</title>
        <meta name="description" content="Tìm hiểu về Áo Bà Ba - trang phục đặc trưng của miền Nam Việt Nam, gắn liền với cuộc sống nông thôn và văn hóa sông nước." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">

        {/* Hero Section with Creative Layout */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-400 transform rotate-12 scale-150"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <Waves className="w-8 h-8 text-blue-400" />
                  <span className="text-lg opacity-80">Miền Nam sông nước</span>
                </div>
                
                <h1 className="text-7xl md:text-8xl font-playfair font-bold leading-none">
                  <span className="block text-green-300">Áo</span>
                  <span className="block text-white">Bà</span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Ba</span>
                </h1>
                
                <p className="text-2xl opacity-90 leading-relaxed">
                  Trang phục đặc trưng của miền Nam, gắn liền với cuộc sống 
                  nông thôn và văn hóa sông nước mênh mông
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="glass-effect rounded-full px-6 py-3 flex items-center space-x-2">
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <span>Miền Nam</span>
                  </div>
                  <div className="glass-effect rounded-full px-6 py-3 flex items-center space-x-2">
                    <Leaf className="w-5 h-5 text-green-400" />
                    <span>Nông thôn</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative transform rotate-3">
                  <div className="absolute -inset-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-30"></div>
                  <div className="relative glass-effect rounded-3xl p-6 transform -rotate-3">
                    <img 
                      className="w-full h-96 object-cover rounded-2xl" 
                      alt="Phụ nữ miền Nam mặc áo bà ba"
                     src="https://images.unsplash.com/photo-1616584211051-611278c01355" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Characteristics Section with Cards */}
        <section className="py-20 px-6 bg-black bg-opacity-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-playfair font-bold mb-6">Đặc Trưng Nổi Bật</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Áo bà ba được thiết kế đơn giản nhưng tiện dụng, phù hợp với khí hậu nhiệt đới và công việc nông nghiệp
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group"
              >
                <div className="glass-effect rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-center text-green-300">Chất Liệu Tự Nhiên</h3>
                  <p className="opacity-90 text-center leading-relaxed">
                    Được may từ vải cotton, lụa tơ tằm hoặc vải thô, 
                    thoáng mát và thấm hút mồ hôi tốt trong khí hậu nhiệt đới
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="group"
              >
                <div className="glass-effect rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-center text-blue-300">Thiết Kế Đơn Giản</h3>
                  <p className="opacity-90 text-center leading-relaxed">
                    Áo cổ tròn, tay ngắn, quần ống rộng, 
                    tạo sự thoải mái khi làm việc và sinh hoạt hàng ngày
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="group"
              >
                <div className="glass-effect rounded-2xl p-8 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-center text-yellow-300">Màu Sắc Đa Dạng</h3>
                  <p className="opacity-90 text-center leading-relaxed">
                    Từ màu trắng tinh khôi, xanh lá mát mẻ đến nâu đất ấm áp, 
                    phản ánh sự gần gũi với thiên nhiên
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cultural Context with Mosaic Layout */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Bối Cảnh Văn Hóa</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Áo bà ba gắn liền với đời sống nông thôn miền Nam, từ ruộng lúa đến chợ nổi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="md:col-span-2 md:row-span-2"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    alt="Phụ nữ mặc áo bà ba trên chợ nổi"
                   src="https://images.unsplash.com/photo-1677128824414-0b70dff42bc1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-playfair font-bold text-white mb-2">Chợ Nổi Miền Tây</h3>
                      <p className="text-white opacity-90">Nơi áo bà ba trở thành biểu tượng của người phụ nữ miền Nam</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="md:col-span-2"
              >
                <div className="relative h-44 rounded-2xl overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    alt="Cánh đồng lúa miền Nam"
                   src="https://images.unsplash.com/photo-1685503951590-a46e8aec623a" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-xl font-playfair font-bold text-white text-center">Cánh Đồng Lúa</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="md:col-span-1"
              >
                <div className="relative h-44 rounded-2xl overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    alt="Làng nghề truyền thống"
                   src="https://images.unsplash.com/photo-1522859939385-20fca3560d57" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-lg font-playfair font-bold text-white text-center">Làng Nghề</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="md:col-span-1"
              >
                <div className="relative h-44 rounded-2xl overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    alt="Sông nước miền Tây"
                   src="https://images.unsplash.com/photo-1519458498024-9448c70cbae7" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-lg font-playfair font-bold text-white text-center">Sông Nước</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-emerald-900 to-green-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="text-center"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8">Cuộc Sống Miền Tây</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Khám phá cuộc sống đời thường của người dân miền Tây với trang phục áo bà ba
              </p>
              
              <div className="relative max-w-5xl mx-auto">
                <div className="aspect-video bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover rounded-3xl" 
                    alt="Video cuộc sống miền Tây với áo bà ba"
                   src="https://images.unsplash.com/photo-1519458498024-9448c70cbae7" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl"
                      onClick={handleVideoPlay}
                    >
                      ▶ Xem Cuộc Sống Miền Tây
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modern Relevance */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Ý Nghĩa Hiện Đại</h2>
              <div className="glass-effect rounded-3xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-green-300">Biểu Tượng Văn Hóa</h3>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      Áo bà ba đã trở thành biểu tượng của sự giản dị, chân thật và gần gũi 
                      với thiên nhiên. Nó thể hiện tinh thần lao động chăm chỉ và lối sống 
                      hài hòa với môi trường của người dân miền Nam.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-blue-300">Ứng Dụng Hiện Tại</h3>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      Ngày nay, áo bà ba không chỉ được mặc trong sinh hoạt hàng ngày mà còn 
                      xuất hiện trong các chương trình văn nghệ, du lịch văn hóa và được 
                      cải tiến thành thời trang hiện đại.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl">
                  <p className="text-lg text-white leading-relaxed text-center">
                    "Áo bà ba không chỉ là trang phục, mà là câu chuyện về một miền đất và con người, 
                    về sự bình dị nhưng đầy tình người của vùng sông nước miền Nam."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-900 to-emerald-900">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-8">Khám Phá Thêm</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/ao-dai">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Dài
                  </Button>
                </Link>
                <Link to="/ao-tu-than">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Tứ Thân
                  </Button>
                </Link>
                <Link to="/ao-gam">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Gấm
                  </Button>
                </Link>
                <Link to="/ao-nhat-binh">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Nhật Bình
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AoBaBaPage;