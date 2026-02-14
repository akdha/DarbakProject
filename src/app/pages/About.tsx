export function About() {
  return (
    <div className="w-full">
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] bg-clip-text text-transparent">
              About TrainLink
            </h1>
          </div>

          {/* Arabic Content */}
          <div 
            className="bg-gradient-to-br from-[#2563eb]/5 via-[#10b981]/5 to-[#f97316]/5 rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100"
            dir="rtl"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              عن TrainLink:
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 text-right">
              TrainLink هو منصة حديثة تهدف إلى مساعدة طلاب المملكة العربية السعودية في العثور على فرص تدريب مناسبة لإكمال متطلبات تخرجهم. يواجه كثير من الطلاب صعوبة في إيجاد الشركات التي تتناسب مع تخصصهم، وهنا يأتي دورنا. من خلال إدخال تخصصك، يقوم TrainLink بربطك بالشركات المناسبة، ليتيح لك طريقًا سلسًا من التعليم إلى الخبرة العملية. مهمتنا هي تمكين الطلاب بالأدوات والفرص الصحيحة لبدء مسيرتهم المهنية بثقة.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            

            
          </div>

          {/* Stats Section */}
          
        </div>
      </section>
    </div>
  );
}
