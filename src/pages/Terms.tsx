
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <GlowingText as="h1" className="text-3xl md:text-4xl font-bold mb-6">
              Terms of Service
            </GlowingText>
            <p className="text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <GlowingText as="h2" className="text-2xl mb-4">
              1. Acceptance of Terms
            </GlowingText>
            <p className="text-gray-300 mb-6">
              By accessing and using SoloSync, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              2. Description of Service
            </GlowingText>
            <p className="text-gray-300 mb-6">
              SoloSync is a gamified productivity platform designed to help users track and complete daily tasks through a leveling system inspired by gaming mechanics. Our service includes task tracking, progress monitoring, and motivational features.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              3. User Accounts
            </GlowingText>
            <p className="text-gray-300 mb-3">
              To use certain features of SoloSync, you may be required to create an account. You are responsible for:
            </p>
            <ul className="text-gray-300 mb-6 list-disc pl-6">
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              4. User Content
            </GlowingText>
            <p className="text-gray-300 mb-6">
              Users may create and store content on SoloSync, including tasks, goals, and personal information. While you retain ownership of your content, you grant SoloSync a license to use, store, and display your content in connection with providing our services.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              5. Privacy Policy
            </GlowingText>
            <p className="text-gray-300 mb-6">
              Our Privacy Policy, which explains how we collect, use, and protect your information, is incorporated into these Terms of Service. By using SoloSync, you agree to our Privacy Policy.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              6. Modifications to Service
            </GlowingText>
            <p className="text-gray-300 mb-6">
              SoloSync reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              7. Disclaimer of Warranties
            </GlowingText>
            <p className="text-gray-300 mb-6">
              SoloSync is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the reliability, availability, timeliness, suitability, accuracy, or completeness of the service or the content.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              8. Limitation of Liability
            </GlowingText>
            <p className="text-gray-300 mb-6">
              In no event shall SoloSync be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              9. Contact Information
            </GlowingText>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms, please contact us at support@solosync.com.
            </p>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
