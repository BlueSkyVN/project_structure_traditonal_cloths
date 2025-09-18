import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mountain, Home, Users, Flower } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const AoNhatBinhPage = () => {
  const { toast } = useToast();
  
  const handleNotImplemented = () => {
    toast({
      title: "Tính năng chưa hoàn thiện! 🚧",
      description: "Tính năng này chưa được phát triển—nhưng đừng lo! Bạn có thể yêu cầu trong lần nhắc tiếp theo! 🚀",
      variant: "destructive"
    });
  };

  return (
    <>
      <Helmet>
        <title>Áo Nhật Bình - Trang Phục Dân Gian Miền Bắc Việt Nam</title>
        <meta name="description" content="Khám phá Áo Nhật Bình - trang phục dân gian đặc trưng của miền Bắc Việt Nam, thể hiện nét đẹp giản dị và chân chất của người nông dân." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 text-white">

        {/* Hero Section with Folk Art Style */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 transform rotate-12 scale-150"></div>
            <div className={`absolute inset-0 opacity-10`} style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <Mountain className="w-8 h-8 text-blue-400" />
                  <span className="text-lg opacity-80">Miền Bắc núi rừng</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl font-playfair font-bold leading-tight">
                    <span className="block text-blue-300">Áo</span>
                    <span className="block text-cyan-300">Nhật</span>
                    <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Bình</span>
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>
                
                <p className="text-2xl opacity-90 leading-relaxed">
                  Trang phục dân gian đặc trưng của miền Bắc, 
                  thể hiện nét đẹp giản dị và chân chất của người nông dân Việt Nam
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-1 bg-white bg-opacity-10 rounded-2xl"><div className="bg-black bg-opacity-20 rounded-xl px-6 py-4 flex items-center space-x-3">
                    <Home className="w-5 h-5 text-cyan-400" />
                    <span>Dân gian</span>
                  </div></div>
                  <div className="p-1 bg-white bg-opacity-10 rounded-2xl"><div className="bg-black bg-opacity-20 rounded-xl px-6 py-4 flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Nông thôn</span>
                  </div></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:col-span-2 relative"
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-30"></div>
                  <div className="relative p-1 bg-white bg-opacity-10 rounded-3xl"><div className="relative bg-black bg-opacity-20 rounded-2xl p-4">
                    <img class="w-full h-96 object-cover rounded-xl" alt="Phụ nữ miền Bắc mặc áo nhật bình" src="https://images.unsplash.com/photo-1615561077098-98bc02c24ede" />
                    <div className="absolute top-6 right-6 p-1 bg-white bg-opacity-10 rounded-full"><div className="bg-black bg-opacity-20 rounded-full p-3">
                      <Flower className="w-6 h-6 text-white" />
                    </div></div>
                  </div></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Folk Characteristics with Staggered Layout */}
        <section className="py-20 px-6 bg-black bg-opacity-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-playfair font-bold mb-6">Nét Đẹp Dân Gian</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Áo nhật bình mang trong mình sự giản dị, chân chất và gần gũi với cuộc sống thường ngày
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* First Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="lg:col-span-2"
                >
                  <div className="p-1 bg-white bg-opacity-10 rounded-3xl"><div className="bg-black bg-opacity-20 rounded-2xl p-8">
                    <h3 className="text-3xl font-playfair font-bold mb-6 text-blue-300">Thiết Kế Đơn Giản</h3>
                    <p className="opacity-90 leading-relaxed">
                      Áo nhật bình có thiết kế rộng rãi, không bó sát, 
                      thường được làm từ vải thô, nhuộm chàm, 
                      thể hiện sự mộc mạc và chân chất.
                    </p>
                  </div></div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <img class="w-full h-80 object-cover rounded-3xl" alt="Chi tiết áo nhật bình" src="https://images.unsplash.com/photo-1678536514579-fbe81d1f25c8" />
                </motion.div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <img class="w-full h-80 object-cover rounded-3xl" alt="Người dân miền Bắc trong trang phục truyền thống" src="https://images.unsplash.com/photo-1690261149889-69a6ccf48343" />
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="lg:col-span-2"
                >
                  <div className="p-1 bg-white bg-opacity-10 rounded-3xl"><div className="bg-black bg-opacity-20 rounded-2xl p-8">
                    <h3 className="text-3xl font-playfair font-bold mb-6 text-cyan-300">Họa Tiết Thiên Nhiên</h3>
                    <p className="opacity-90 leading-relaxed">
                      Họa tiết trên áo nhật bình thường lấy cảm hứng từ thiên nhiên 
                      như hoa lá, chim muông, thể hiện sự hòa hợp giữa con người 
                      và môi trường sống.
                    </p>
                  </div></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Community and Lifestyle */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Đời Sống Cộng Đồng</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Áo nhật bình gắn liền với các lễ hội, sinh hoạt văn hóa và đời sống lao động của người dân miền Bắc
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="relative h-96 rounded-2xl overflow-hidden group"
              >
                <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Lễ hội mùa xuân ở miền Bắc" src="https://images.unsplash.com/photo-1568662112236-a52477ebfddf" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">Lễ Hội Mùa Xuân</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="relative h-96 rounded-2xl overflow-hidden group lg:mt-16"
              >
                <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Hát quan họ Bắc Ninh" src="https://images.unsplash.com/photo-1594109364401-25761dfc51b9" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">Hát Quan Họ</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="relative h-96 rounded-2xl overflow-hidden group"
              >
                <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Lao động trên đồng ruộng bậc thang" src="https://images.unsplash.com/photo-1673746759528-e48f0dce5896" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">Lao Động</h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="relative h-96 rounded-2xl overflow-hidden group lg:mt-16"
              >
                <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Phiên chợ vùng cao" src="https://images.unsplash.com/photo-1675106566017-e37b937eeedc" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">Chợ Phiên</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-900 to-blue-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8">Hồn Quê Miền Bắc</h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Xem video để cảm nhận vẻ đẹp và cuộc sống của người dân miền Bắc
              </p>
              
              <div className="relative max-w-5xl mx-auto">
                <div className="aspect-video bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <img class="w-full h-full object-cover" alt="Video phong cảnh và con người miền Bắc" src="https://images.unsplash.com/photo-1603779122613-e5ea6d1e7e73" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl"
                      onClick={handleNotImplemented}
                    >
                      ▶ Xem Hồn Quê
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cultural Value */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Giá Trị Văn Hóa</h2>
              <div className="p-1 bg-white bg-opacity-10 rounded-3xl"><div className="bg-black bg-opacity-20 rounded-2xl p-8">
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Áo nhật bình là biểu tượng của sự chân chất, mộc mạc và tinh thần lao động cần cù 
                  của người nông dân miền Bắc. Trang phục này không chỉ đáp ứng nhu cầu tiện dụng 
                  trong lao động mà còn thể hiện thẩm mỹ và tinh thần lạc quan, yêu đời.
                </p>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Họa tiết trên áo thường là những hình ảnh gần gũi với thiên nhiên như hoa lá, chim muông, 
                  phản ánh mối quan hệ mật thiết giữa con người và tự nhiên, đồng thời thể hiện 
                  ước mơ về một cuộc sống ấm no, hạnh phúc.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl">
                  <p className="text-lg text-white leading-relaxed text-center">
                    "Vẻ đẹp của áo nhật bình nằm ở sự giản dị, ở màu chàm của núi rừng và 
                    trong nụ cười hồn hậu của người dân miền Bắc."
                  </p>
                </div>
              </div></div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 }}
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
                <Link to="/ao-gam">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Áo Gấm
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

export default AoNhatBinhPage;