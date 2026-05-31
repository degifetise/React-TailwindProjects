import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image:
        "https://www.bing.com/th/id/OIP.2LJRoc4GpdQcnq6jv4jg5AHaMW?w=193&h=322&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      quote: "This AI platform helped me debug faster and learn smarter!",
    },
    {
      name: "Michael Lee",
      role: "IT Student",
      image:
        "https://www.bing.com/th/id/OIP.yIp_paUbbiTE3LCiU6Xh7QHaD4?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      quote: "The real-time AI guidance is a game changer for my studies.",
    },
    {
      name: "Amina Yusuf",
      role: "Freelancer",
      image:
        "https://www.bing.com/th/id/OIP.5uhpHVHG9xsuJHndCZTZ0wHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      quote: "Clean UI + powerful AI = productivity boost!",
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-20 bg-slate-900  flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-[clamp(1.75rem,4vw,2rem)] font-semibold  sm:mb-6 animate-in slide-in-from-bottom duration-900 leading-tight italic tracking-wide text-center mb-4">
          What people
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Say
          </span>
        </h2>
        <Swiper
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ type: "progressbar", clickable: true }}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          className="p-10 overflow-hidden"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-950 p-6 sm:p-8 md:p-10  backdrop-blur-2xl rounded-xl text-center hover:scale-105 transform transition-all duration-500 ease-in-out">
                <Quote className="w-8 h-8 text-blue-500 mx-auto mb-4 absolute top-2 left-4" />
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 sm:w-32 sm:h-32 md:h-44 md:w-44 rounded-full mx-auto mb-4  border-4 border-blue-500"
                />
                <p className="text-lg font-semibold text-gray-300 italic mb-4">
                  {t.quote}
                </p>
                <h4 className="text-blue-500 tex-lg font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
