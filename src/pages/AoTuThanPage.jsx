import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Star } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const AoTuThanPage = () => {
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
        <title>Áo Tứ Thân - Trang Phục Cung Đình Cổ Điển Việt Nam</title>
        <meta name="description" content="Khám phá Áo Tứ Thân - trang phục cung đình cổ điển của Việt Nam với thiết kế tinh xảo và ý nghĩa văn hóa sâu sắc." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        
        {/* Hero Section with Asymmetrical Layout */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 traditional-pattern opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Crown className="w-8 h-8 text-yellow-400" />
                  <span className="text-lg opacity-80">Trang phục hoàng gia</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                  Áo
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    Tứ Thân
                  </span>
                </h1>
                <p className="text-2xl opacity-90 mb-8 leading-relaxed">
                  Trang phục cung đình cổ điển với thiết kế bốn tà áo, 
                  thể hiện sự trang nghiêm và quyền quý của hoàng gia Việt Nam
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="glass-effect rounded-full px-6 py-3 flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Thế kỷ 15-19</span>
                  </div>
                  <div className="glass-effect rounded-full px-6 py-3 flex items-center space-x-2">
                    <Crown className="w-5 h-5 text-purple-400" />
                    <span>Cung đình Huế</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30"></div>
                  <div className="relative glass-effect rounded-3xl p-6">
                    <img 
                      className="w-full h-96 object-cover rounded-2xl" 
                      alt="Phụ nữ mặc áo tứ thân truyền thống"
                     src="https://images.unsplash.com/photo-1616584211051-611278c01355" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unique Features Section */}
        <section className="py-20 px-6 bg-black bg-opacity-30">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-playfair font-bold mb-6">Đặc Điểm Nổi Bật</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Áo tứ thân có cấu trúc độc đáo với bốn tà áo, tạo nên vẻ đẹp uyển chuyển và trang nghiêm
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-8"
              >
                <div className="glass-effect rounded-2xl p-6 border-l-4 border-purple-400">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-purple-300">Bốn Tà Áo</h3>
                  <p className="opacity-90">
                    Thiết kế đặc trưng với bốn tà áo tượng trưng cho bốn phương trời, 
                    thể hiện sự hài hòa giữa con người và vũ trụ
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-6 border-l-4 border-pink-400">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-pink-300">Thêu Hoa Văn</h3>
                  <p className="opacity-90">
                    Được trang trí bằng những họa tiết thêu tinh xảo như rồng, phượng, 
                    hoa sen, thể hiện địa vị và quyền quý
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-yellow-300">Màu Sắc Hoàng Gia</h3>
                  <p className="opacity-90">
                    Sử dụng các màu sắc trang trọng như tím, vàng, đỏ thẫm, 
                    thể hiện sự sang trọng và quyền uy của hoàng gia
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      className="w-full h-48 object-cover rounded-xl" 
                      alt="Chi tiết thêu hoa văn áo tứ thân"
                     src="https://images.unsplash.com/photo-1678536516364-7bf05c83d272" />
                    <img 
                      className="w-full h-32 object-cover rounded-xl" 
                      alt="Cấu trúc bốn tà áo"
                     src="https://images.unsplash.com/photo-1665495334685-601bc5ef330f" />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img 
                      className="w-full h-32 object-cover rounded-xl" 
                      alt="Phụ kiện đi kèm áo tứ thân"
                     src="https://images.unsplash.com/photo-1615561077098-98bc02c24ede" />
                    <img 
                      className="w-full h-48 object-cover rounded-xl" 
                      alt="Áo tứ thân trong lễ hội"
                     src="https://images.unsplash.com/photo-1615561077098-98bc02c24ede" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Dòng Thời Gian Lịch Sử</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
              
              <div className="space-y-16">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex items-center"
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className="glass-effect rounded-2xl p-6">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Thế kỷ 15</h3>
                      <p className="opacity-90">
                        Xuất hiện đầu tiên trong cung đình nhà Lê, 
                        được sử dụng làm trang phục chính thức của hoàng gia
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white flex-shrink-0 z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </motion.div>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="flex items-center"
                >
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full border-4 border-white flex-shrink-0 z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="glass-effect rounded-2xl p-6">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Thế kỷ 17-18</h3>
                      <p className="opacity-90">
                        Phát triển mạnh mẽ dưới triều Nguyễn, 
                        trở thành biểu tượng của văn hóa cung đình Huế
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="flex items-center"
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className="glass-effect rounded-2xl p-6">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Hiện đại</h3>
                      <p className="opacity-90">
                        Được bảo tồn và trưng bày tại các bảo tàng, 
                        trở thành di sản văn hóa quý báu của dân tộc
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white flex-shrink-0 z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="text-center"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8">Tái Hiện Lịch Sử</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Xem video tái hiện cách thức mặc áo tứ thân trong cung đình xưa
              </p>
              
              <div className="relative max-w-5xl mx-auto">
                <div className="aspect-video bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover rounded-3xl" 
                    alt="Video tái hiện lễ phục cung đình"
                   src="https://images.unsplash.com/photo-1649634170784-2e3f5d276e71" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl"
                      onClick={handleVideoPlay}
                    >
                      ▶ Xem Video Lịch Sử
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cultural Impact */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8">Tác Động Văn Hóa</h2>
              <div className="glass-effect rounded-3xl p-8 text-left">
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Áo tứ thân không chỉ là trang phục mà còn là biểu tượng của quyền lực và 
                  địa vị trong xã hội phong kiến Việt Nam. Thiết kế bốn tà áo thể hiện triết lý 
                  "tứ phương" - bốn hướng của không gian, tượng trưng cho sự bao trùm và toàn diện.
                </p>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Các họa tiết thêu trên áo tứ thân mang ý nghĩa phong thủy và tâm linh sâu sắc. 
                  Hình rồng tượng trưng cho hoàng đế, phượng hoàng đại diện cho hoàng hậu, 
                  hoa sen biểu thị sự thanh khiết và cao quý.
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  Ngày nay, áo tứ thân được bảo tồn tại các bảo tàng và được tái hiện trong 
                  các chương trình văn hóa, góp phần giữ gìn và phát huy di sản văn hóa dân tộc.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <h2 className="text-3xl font-playfair font-bold mb-8">Khám Phá Thêm</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/ao-dai">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Dài
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

export default AoTuThanPage;