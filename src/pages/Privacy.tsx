
import { GlowingText } from "@/components/ui/glowing-text";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-solosync-black">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <GlowingText as="h1" className="text-3xl md:text-4xl font-bold mb-6">
              Privacy Policy
            </GlowingText>
            <p className="text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <GlowingText as="h2" className="text-2xl mb-4">
              1. Information We Collect
            </GlowingText>
            <p className="text-gray-300 mb-3">
              SoloSync collects the following types of information:
            </p>
            <ul className="text-gray-300 mb-6 list-disc pl-6">
              <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
              <li><strong>User Content:</strong> Tasks, goals, and progress data you input into the system</li>
              <li><strong>Usage Information:</strong> How you interact with our service, including features used and time spent</li>
              <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers</li>
            </ul>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              2. How We Use Your Information
            </GlowingText>
            <p className="text-gray-300 mb-3">
              We use your information to:
            </p>
            <ul className="text-gray-300 mb-6 list-disc pl-6">
              <li>Provide, maintain, and improve SoloSync's services</li>
              <li>Process and track your tasks and progress</li>
              <li>Personalize your experience and provide tailored content</li>
              <li>Communicate with you about service-related announcements</li>
              <li>Analyze usage patterns to enhance our service</li>
            </ul>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              3. Information Sharing and Disclosure
            </GlowingText>
            <p className="text-gray-300 mb-3">
              SoloSync does not sell or rent your personal information to third parties. We may share information:
            </p>
            <ul className="text-gray-300 mb-6 list-disc pl-6">
              <li>With service providers who help us operate SoloSync</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a merger, sale, or acquisition</li>
            </ul>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              4. Data Security
            </GlowingText>
            <p className="text-gray-300 mb-6">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              5. Your Choices
            </GlowingText>
            <p className="text-gray-300 mb-3">
              You can:
            </p>
            <ul className="text-gray-300 mb-6 list-disc pl-6">
              <li>Access, update, or delete your account information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Close your account at any time</li>
            </ul>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              6. Cookies and Similar Technologies
            </GlowingText>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              7. Children's Privacy
            </GlowingText>
            <p className="text-gray-300 mb-6">
              SoloSync is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              8. Changes to This Privacy Policy
            </GlowingText>
            <p className="text-gray-300 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <GlowingText as="h2" className="text-2xl mb-4">
              9. Contact Us
            </GlowingText>
            <p className="text-gray-300 mb-6">
              If you have questions about this Privacy Policy, please contact us at privacy@solosync.com.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
