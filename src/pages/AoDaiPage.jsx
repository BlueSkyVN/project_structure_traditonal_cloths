import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const AoDaiPage = () => {
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
        <title>Áo Dài - Biểu Tượng Trang Phục Truyền Thống Việt Nam</title>
        <meta name="description" content="Tìm hiểu về Áo Dài - biểu tượng của phụ nữ Việt Nam, lịch sử phát triển và ý nghĩa văn hóa sâu sắc của trang phục truyền thống này." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-800 to-red-900 text-white">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                  Áo Dài
                  <span className="block text-3xl md:text-4xl opacity-80 mt-2">
                    Biểu tượng của phụ nữ Việt Nam
                  </span>
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Áo dài là trang phục truyền thống đặc trưng nhất của Việt Nam, 
                  thể hiện vẻ đẹp duyên dáng, thanh lịch của phụ nữ Việt qua nhiều thế kỷ.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 glass-effect rounded-full px-4 py-2">
                    <Calendar className="w-4 h-4" />
                    <span>Thế kỷ 18</span>
                  </div>
                  <div className="flex items-center space-x-2 glass-effect rounded-full px-4 py-2">
                    <MapPin className="w-4 h-4" />
                    <span>Toàn quốc</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden glass-effect p-4">
                  <img 
                    className="w-full h-96 object-cover rounded-xl" 
                    alt="Phụ nữ Việt Nam mặc áo dài truyền thống"
                   src="https://images.unsplash.com/photo-1616584211051-611278c01355" />
                  <div className="absolute top-8 right-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-6 bg-black bg-opacity-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Lịch Sử Phát Triển</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Áo dài đã trải qua nhiều giai đoạn biến đổi, từ trang phục cung đình đến biểu tượng văn hóa hiện đại
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-center">Thế kỷ 18</h3>
                <p className="opacity-90 text-center">
                  Xuất hiện từ thời Nguyễn Phúc Khoát, ban đầu là trang phục của cung đình và quý tộc
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-center">Thế kỷ 20</h3>
                <p className="opacity-90 text-center">
                  Được cải tiến bởi họa sĩ Cát Tường và Lê Mur, trở thành trang phục phổ biến của phụ nữ Việt
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="glass-effect rounded-2xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-center">Hiện đại</h3>
                <p className="opacity-90 text-center">
                  Trở thành biểu tượng văn hóa Việt Nam, được yêu thích và mặc trong các dịp đặc biệt
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Bộ Sưu Tập Hình Ảnh</h2>
              <p className="text-xl opacity-90">
                Khám phá vẻ đẹp đa dạng của áo dài qua các phong cách và màu sắc khác nhau
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img 
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
                  alt="Áo dài trắng truyền thống"
                 src="https://images.unsplash.com/photo-1677138165978-203f1994be54" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold">Áo dài trắng</h3>
                    <p className="text-white opacity-80 text-sm">Tinh khôi và thanh lịch</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img 
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
                  alt="Áo dài hoa văn hiện đại"
                 src="https://images.unsplash.com/photo-1615561077098-98bc02c24ede" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold">Áo dài hoa văn</h3>
                    <p className="text-white opacity-80 text-sm">Hiện đại và sáng tạo</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img 
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
                  alt="Áo dài cưới màu đỏ"
                 src="https://images.unsplash.com/photo-1674407405533-db5750cc32e0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold">Áo dài cưới</h3>
                    <p className="text-white opacity-80 text-sm">Trang trọng và may mắn</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-6 bg-black bg-opacity-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Video Giới Thiệu</h2>
              <p className="text-xl opacity-90 mb-8">
                Xem video để hiểu rõ hơn về cách mặc và ý nghĩa của áo dài
              </p>
              <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden glass-effect p-2">
                <div className="aspect-video bg-gradient-to-r from-pink-600 to-red-600 rounded-xl flex items-center justify-center">
                  <img 
                    className="w-full h-full object-cover rounded-xl" 
                    alt="Video hướng dẫn mặc áo dài"
                   src="https://images.unsplash.com/photo-1615561077098-98bc02c24ede" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold"
                      onClick={handleVideoPlay}
                    >
                      ▶ Xem Video
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Ý Nghĩa Văn Hóa</h2>
              <div className="glass-effect rounded-2xl p-8">
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Áo dài không chỉ là một trang phục, mà còn là biểu tượng của sự duyên dáng, 
                  thanh lịch và nét đẹp truyền thống của phụ nữ Việt Nam. Với thiết kế ôm sát 
                  cơ thể nhưng vẫn kín đáo, áo dài thể hiện triết lý "hòa hợp" trong văn hóa Á Đông.
                </p>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Màu sắc của áo dài cũng mang ý nghĩa đặc biệt: màu trắng tượng trưng cho sự 
                  tinh khôi, màu đỏ biểu thị may mắn và hạnh phúc, màu vàng thể hiện sự sang trọng 
                  và quyền quý.
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  Ngày nay, áo dài được mặc trong nhiều dịp quan trọng như lễ cưới, tết Nguyên Đán, 
                  các sự kiện văn hóa, và đã trở thành niềm tự hào của dân tộc Việt Nam trên trường quốc tế.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation to other costumes */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-8">Khám Phá Thêm</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/ao-tu-than">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Tứ Thân
                  </Button>
                </Link>
                <Link to="/ao-ba-ba">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Bà Ba
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

export default AoDaiPage;