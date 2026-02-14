export function PrivacyPolicy() {
  return (
    <div className="w-full">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#f97316] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: February 14, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-[#2563eb]/5 via-[#10b981]/5 to-[#f97316]/5 p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                TrainLink ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#2563eb]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Educational background and major</li>
                  <li>Resume and career information</li>
                  <li>Account credentials</li>
                  <li>Communications with us</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#10b981]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Match you with suitable internship opportunities</li>
                  <li>Communicate with you about your account and applications</li>
                  <li>Improve and personalize our services</li>
                  <li>Ensure the security and integrity of our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#f97316]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with companies offering internship positions that match your qualifications. We do not sell your personal information to third parties. We may also share information when required by law or to protect our rights.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#2563eb]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#10b981]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#f97316]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  <span className="font-semibold">Email:</span> privacy@trainlink.sa
                  <br />
                  <span className="font-semibold">Phone:</span> +966 11 234 5678
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#2563eb] to-[#10b981] rounded-2xl text-white text-center">
              <p className="text-lg">
                By using TrainLink, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
