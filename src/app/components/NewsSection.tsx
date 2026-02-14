import { Calendar, ArrowRight, Building2, Users, Lightbulb } from "lucide-react";

const newsItems = [
  {
    id: 1,
    titleEn: "New Companies Accepting Interns in Riyadh & Jeddah",
    titleAr: "شركات جديدة تستقبل المتدربين في الرياض وجدة",
    descriptionEn: "Exciting news! 15 leading companies in Riyadh and Jeddah are now accepting internship applications across various sectors.",
    descriptionAr: "أخبار مثيرة! 15 شركة رائدة في الرياض وجدة تقبل الآن طلبات التدريب في مختلف القطاعات.",
    date: "February 12, 2026",
    image: "https://images.unsplash.com/photo-1768001863885-fd5bad96ebfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMG1vZGVybiUyMGNpdHl8ZW58MXx8fHwxNzcxMDYzNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Building2,
    color: "#2563eb"
  },
  {
    id: 2,
    titleEn: "Companies Seeking Computer Science & Engineering Students",
    titleAr: "شركات تبحث عن طلاب علوم الحاسب والهندسة",
    descriptionEn: "Tech and engineering firms are actively recruiting students in Computer Science, Software Engineering, and related fields. Check the latest opportunities!",
    descriptionAr: "شركات التقنية والهندسة تبحث بنشاط عن طلاب في علوم الحاسب وهندسة البرمجيات والمجالات ذات الصلة. تحقق من أحدث الفرص!",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTA2MzYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Users,
    color: "#10b981"
  },
  {
    id: 3,
    titleEn: "Tips: How to Approach Companies for Internships",
    titleAr: "نصائح: كيفية التواصل مع الشركات للحصول على تدريب",
    descriptionEn: "Learn proven strategies to effectively reach out to companies, make a great first impression, and secure your ideal internship position.",
    descriptionAr: "تعلم استراتيجيات مثبتة للتواصل الفعال مع الشركات، وترك انطباع أول رائع، وضمان الحصول على فرصة التدريب المثالية.",
    date: "February 7, 2026",
    image: "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzEwNjM2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Lightbulb,
    color: "#f97316"
  }
];

export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bilingual Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Latest News
          </h2>
          <p className="text-3xl font-bold text-gray-600" dir="rtl">
            آخر الأخبار
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  {/* English Title & Description */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2563eb] transition-colors">
                    {item.titleEn}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.descriptionEn}
                  </p>

                  {/* Arabic Title & Description */}
                  <div dir="rtl" className="border-t border-gray-100 pt-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.titleAr}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.descriptionAr}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <button className="flex items-center gap-2 text-[#2563eb] font-bold hover:gap-3 transition-all duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}