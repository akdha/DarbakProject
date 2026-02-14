import { Search, List, Bell, Smartphone, ExternalLink, UserCheck } from "lucide-react";

const features = [
  {
    id: 1,
    titleEn: "Search by Specialization",
    titleAr: "البحث حسب التخصص",
    descriptionEn: "Search for companies accepting interns based on your specific field of study and academic specialization.",
    descriptionAr: "ابحث عن الشركات التي تقبل المتدربين بناءً على مجال دراستك وتخصصك الأكاديمي.",
    icon: Search,
    color: "#2563eb",
    bgGradient: "from-[#2563eb]/10 to-[#2563eb]/5"
  },
  {
    id: 2,
    titleEn: "Curated Company Lists",
    titleAr: "قوائم شركات مخصصة",
    descriptionEn: "Get a personalized, curated list of companies that are most relevant to your field and career goals.",
    descriptionAr: "احصل على قائمة مخصصة من الشركات الأكثر صلة بمجالك وأهدافك المهنية.",
    icon: List,
    color: "#10b981",
    bgGradient: "from-[#10b981]/10 to-[#10b981]/5"
  },
  {
    id: 3,
    titleEn: "Real-Time Notifications",
    titleAr: "إشعارات فورية",
    descriptionEn: "Stay updated with instant notifications about new internship opportunities matching your profile.",
    descriptionAr: "ابقَ على اطلاع مع الإشعارات الفورية حول فرص التدريب الجديدة التي تتناسب مع ملفك الشخصي.",
    icon: Bell,
    color: "#f97316",
    bgGradient: "from-[#f97316]/10 to-[#f97316]/5"
  },
  {
    id: 4,
    titleEn: "Easy-to-Use Interface",
    titleAr: "واجهة سهلة الاستخدام",
    descriptionEn: "Discover companies effortlessly through our intuitive, user-friendly platform designed for students.",
    descriptionAr: "اكتشف الشركات بسهولة من خلال منصتنا البديهية وسهلة الاستخدام المصممة للطلاب.",
    icon: Smartphone,
    color: "#8b5cf6",
    bgGradient: "from-[#8b5cf6]/10 to-[#8b5cf6]/5"
  },
  {
    id: 5,
    titleEn: "Direct Company Connection",
    titleAr: "تواصل مباشر مع الشركات",
    descriptionEn: "Connect directly with companies outside the platform by yourself using our comprehensive company information.",
    descriptionAr: "تواصل مباشرة مع الشركات خارج المنصة بنفسك باستخدام معلومات الشركات الشاملة لدينا.",
    icon: ExternalLink,
    color: "#ec4899",
    bgGradient: "from-[#ec4899]/10 to-[#ec4899]/5"
  },
  {
    id: 6,
    titleEn: "Verified Companies",
    titleAr: "شركات موثقة",
    descriptionEn: "Access verified and trusted companies to ensure legitimate and quality internship opportunities.",
    descriptionAr: "احصل على شركات موثقة وموثوقة لضمان فرص تدريب حقيقية وعالية الجودة.",
    icon: UserCheck,
    color: "#06b6d4",
    bgGradient: "from-[#06b6d4]/10 to-[#06b6d4]/5"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bilingual Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Platform Features
          </h2>
          <p className="text-3xl font-bold text-gray-600" dir="rtl">
            مميزات المنصة
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover what makes TrainLink the best platform for finding your perfect internship
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <IconComponent
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: feature.color }}
                    />
                  </div>

                  {/* English Title & Description */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2563eb] transition-colors">
                    {feature.titleEn}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.descriptionEn}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-200 to-transparent mb-4 group-hover:w-full group-hover:from-[#2563eb] transition-all duration-300" />

                  {/* Arabic Title & Description */}
                  <div dir="rtl">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.titleAr}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.descriptionAr}
                    </p>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] text-white font-bold rounded-full hover:shadow-2xl transition-all duration-200 hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}