import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Gem, Star, Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const AoGamPage = () => {
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
        <title>Áo Gấm - Trang Phục Hoàng Gia Sang Trọng Việt Nam</title>
        <meta name="description" content="Khám phá Áo Gấm - trang phục hoàng gia sang trọng nhất của Việt Nam với chất liệu gấm quý và họa tiết thêu vàng tinh xảo." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900 text-white overflow-hidden">
        
        {/* Hero Section with Luxury Design */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-r from-yellow-600 to-orange-600 opacity-20 transform -skew-y-6 scale-110"></div>
            <div className="absolute inset-0 traditional-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-center items-center space-x-4 mb-8"
              >
                <Crown className="w-12 h-12 text-yellow-400" />
                <Gem className="w-10 h-10 text-orange-400" />
                <Crown className="w-12 h-12 text-yellow-400" />
              </motion.div>
              
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-8xl md:text-9xl font-playfair font-bold mb-6 leading-none"
              >
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  ÁO
                </span>
                <span className="block text-white text-6xl md:text-7xl">GẤM</span>
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Đỉnh cao của nghệ thuật may mặc hoàng gia, 
                nơi gặp gỡ giữa chất liệu gấm quý và tay nghề thêu vàng tinh xảo
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <div className="glass-effect rounded-full px-8 py-4 flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Hoàng Gia</span>
                </div>
                <div className="glass-effect rounded-full px-8 py-4 flex items-center space-x-3">
                  <Gem className="w-6 h-6 text-orange-400" />
                  <span className="text-lg">Gấm Quý</span>
                </div>
                <div className="glass-effect rounded-full px-8 py-4 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-red-400" />
                  <span className="text-lg">Thêu Vàng</span>
                </div>
              </motion.div>
            </div>

            {/* Luxury Image Display */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative glass-effect rounded-3xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <img 
                      className="w-full h-96 object-cover rounded-2xl" 
                      alt="Hoàng hậu mặc áo gấm hoàng gia"
                     src="https://images.unsplash.com/photo-1615561077098-98bc02c24ede" />
                  </div>
                  <div className="space-y-6">
                    <img 
                      className="w-full h-44 object-cover rounded-2xl" 
                      alt="Chi tiết thêu vàng trên áo gấm"
                     src="https://images.unsplash.com/photo-1561060511-dc6d28b71f8b" />
                    <img 
                      className="w-full h-44 object-cover rounded-2xl" 
                      alt="Họa tiết rồng phượng trên áo gấm"
                     src="https://images.unsplash.com/photo-1522628037257-f925ec1e03df" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Luxury Materials Section */}
        <section className="py-20 px-6 bg-black bg-opacity-30">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-playfair font-bold mb-6">Chất Liệu Hoàng Gia</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Áo gấm được chế tác từ những chất liệu quý hiếm nhất, thể hiện đẳng cấp và quyền uy tối cao
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-8 h-full text-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                    <Gem className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-yellow-300">Gấm Tơ Tằm</h3>
                  <p className="opacity-90 leading-relaxed">
                    Chất liệu gấm cao cấp được dệt từ tơ tằm tự nhiên, 
                    mang lại độ bóng và mềm mại đặc trưng
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-8 h-full text-center transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-orange-300">Chỉ Vàng</h3>
                  <p className="opacity-90 leading-relaxed">
                    Sử dụng chỉ vàng thật để thêu các họa tiết, 
                    tạo nên vẻ đẹp lộng lẫy và sang trọng tuyệt đối
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-8 h-full text-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                    <Crown className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-red-300">Ngọc Trai</h3>
                  <p className="opacity-90 leading-relaxed">
                    Điểm xuyết bằng ngọc trai và đá quý, 
                    làm tăng thêm giá trị và vẻ đẹp quý phái
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="group"
              >
                <div className="glass-effect rounded-3xl p-8 h-full text-center transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-purple-300">Họa Tiết Hoàng Gia</h3>
                  <p className="opacity-90 leading-relaxed">
                    Rồng, phượng, hoa sen và các biểu tượng hoàng gia 
                    được thêu tỉ mỉ bằng tay nghề cao
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symbolic Meanings with Hexagonal Layout */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-playfair font-bold mb-6">Ý Nghĩa Biểu Tượng</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Mỗi họa tiết trên áo gấm đều mang ý nghĩa phong thủy và tâm linh sâu sắc
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="relative"
                >
                  <div className="glass-effect rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 mx-auto mb-6 relative">
                      <img 
                        className="w-full h-full object-cover rounded-full border-4 border-yellow-400" 
                        alt="Họa tiết rồng trên áo gấm"
                       src="https://images.unsplash.com/photo-1522628037257-f925ec1e03df" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-yellow-300">Rồng Hoàng Gia</h3>
                    <p className="opacity-90">Biểu tượng của hoàng đế, quyền lực tối cao và sự thịnh vượng</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                  className="relative"
                >
                  <div className="glass-effect rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 mx-auto mb-6 relative">
                      <img 
                        className="w-full h-full object-cover rounded-full border-4 border-red-400" 
                        alt="Họa tiết phượng hoàng trên áo gấm"
                       src="https://images.unsplash.com/photo-1522628037257-f925ec1e03df" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-red-300">Phượng Hoàng</h3>
                    <p className="opacity-90">Tượng trưng cho hoàng hậu, sự cao quý và đức hạnh</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                  className="relative"
                >
                  <div className="glass-effect rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 mx-auto mb-6 relative">
                      <img 
                        className="w-full h-full object-cover rounded-full border-4 border-pink-400" 
                        alt="Họa tiết hoa sen trên áo gấm"
                       src="https://images.unsplash.com/photo-1681293487468-ee4b8ce81ee9" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-pink-300">Hoa Sen</h3>
                    <p className="opacity-90">Biểu hiện sự thanh khiết, giác ngộ và vẻ đẹp tâm hồn</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section with Luxury Frame */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-900 to-red-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="text-center"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8">Nghệ Thuật Thêu Gấm</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Khám phá quy trình chế tác áo gấm hoàng gia với kỹ thuật thêu vàng truyền thống
              </p>
              
              <div className="relative max-w-6xl mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative glass-effect rounded-3xl p-4">
                  <div className="aspect-video bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <img 
                      className="w-full h-full object-cover rounded-2xl" 
                      alt="Video quy trình thêu áo gấm hoàng gia"
                     src="https://images.unsplash.com/photo-1566205092354-2393343083ec" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl border-2 border-yellow-300"
                        onClick={handleVideoPlay}
                      >
                        ▶ Xem Nghệ Thuật Thêu Gấm
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Historical Significance */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Giá Trị Lịch Sử</h2>
              <div className="glass-effect rounded-3xl p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-playfair font-bold mb-6 text-yellow-300">Đỉnh Cao Nghệ Thuật</h3>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      Áo gấm đại diện cho đỉnh cao của nghệ thuật dệt may và thêu thùa Việt Nam. 
                      Mỗi chiếc áo gấm hoàng gia đều là một kiệt tác nghệ thuật, được chế tác 
                      bởi những nghệ nhân tài ba nhất trong cung đình.
                    </p>
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      Quy trình tạo ra một chiếc áo gấm hoàn chỉnh có thể mất đến vài năm, 
                      từ việc chọn lựa chất liệu, thiết kế họa tiết đến thêu thùa tỉ mỉ từng chi tiết.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-30"></div>
                    <img 
                      className="relative w-full h-80 object-cover rounded-2xl" 
                      alt="Bảo tàng trưng bày áo gấm hoàng gia"
                     src="https://images.unsplash.com/photo-1609731504418-7f91cd83426c" />
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl">
                  <blockquote className="text-xl text-white text-center leading-relaxed italic">
                    "Áo gấm không chỉ là trang phục hoàng gia, mà là biểu tượng của sự thịnh vượng, 
                    quyền uy và đẳng cấp tối cao trong xã hội phong kiến Việt Nam. 
                    Nó thể hiện sự tinh tế trong thẩm mỹ và trình độ nghề thủ công cao siêu của dân tộc."
                  </blockquote>
                  <p className="text-center text-yellow-200 mt-4 font-semibold">
                    - Nhà nghiên cứu văn hóa truyền thống
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 px-6 bg-gradient-to-r from-yellow-900 to-orange-900">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.4 }}
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
                <Link to="/ao-ba-ba">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Bà Ba
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

export default AoGamPage;