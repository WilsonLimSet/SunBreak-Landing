import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center text-sunbreak-orange hover:text-orange-600 mb-8 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: September 9, 2025</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By downloading, installing, or using Sunbreak ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Sunbreak is a free iOS application that helps users establish bedtime routines by using Apple's built-in Screen Time framework to restrict access to selected apps during user-defined bedtime hours. The App may request location permission to calculate local sunrise times for automatic scheduling, but this is optional.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Important:</strong> The App does not collect, store, or transmit any personal data. It works entirely through Apple's existing iOS systems and stores all preferences locally on your device.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Free Service</h2>
          <p className="text-gray-700 mb-4">
            Sunbreak is provided completely free of charge. There are no subscriptions, in-app purchases, advertisements, or hidden costs. The App will remain free for all users.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">You are responsible for:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Setting appropriate bedtime schedules for your needs</li>
            <li>Selecting which apps to block during bedtime hours</li>
            <li>Using emergency unlock features responsibly (limited to once per week)</li>
            <li>Granting necessary permissions (Screen Time, Location) for the App to function</li>
            <li>Understanding that the App is a tool to assist with sleep habits, not a medical device</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. App Functionality</h2>
          <p className="text-gray-700 mb-4">The App provides the following features:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Bedtime scheduling with automatic app blocking</li>
            <li>Location-based sunrise wake times</li>
            <li>Configurable wake buffer time (0-120 minutes after sunrise)</li>
            <li>Weekly emergency unlock (15 minutes maximum)</li>
            <li>Local data storage with no external servers</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitations and Disclaimers</h2>
          <p className="text-gray-700 mb-4">
            <strong>No Medical Claims:</strong> Sunbreak is not a medical device and is not intended to diagnose, treat, cure, or prevent any sleep disorder or medical condition.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Effectiveness:</strong> The App is designed to assist with building better sleep habits by blocking selected apps during bedtime hours. Individual results may vary and we cannot guarantee specific outcomes.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Device Dependency:</strong> The App's functionality depends on iOS Screen Time framework and device permissions. Changes to iOS or revoked permissions may affect functionality.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. No Warranty</h2>
          <p className="text-gray-700 mb-4">
            Sunbreak is provided "as is" without warranty of any kind, either express or implied. We do not guarantee that the App will:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Meet your specific requirements</li>
            <li>Be uninterrupted or error-free</li>
            <li>Be compatible with all iOS versions or devices</li>
            <li>Remain available indefinitely on the App Store</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            Since Sunbreak is provided free of charge and works through Apple's existing systems, the developer's liability is limited to the fullest extent permitted by law. The developer shall not be liable for any indirect, incidental, or consequential damages arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>The App not functioning as expected due to iOS system changes</li>
            <li>User's inability to access blocked apps when needed</li>
            <li>Scheduling conflicts or missed wake times</li>
            <li>Any technical issues with Apple's Screen Time framework</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. User Conduct</h2>
          <p className="text-gray-700 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Attempt to reverse engineer, decompile, or hack the App</li>
            <li>Use the App for any illegal or unauthorized purpose</li>
            <li>Circumvent the App's intended functionality</li>
            <li>Share your device access in ways that compromise the App's effectiveness</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Privacy</h2>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. Please review our <a href="/privacy" className="text-sunbreak-orange hover:underline">Privacy Policy</a> to understand how we handle your information (spoiler: we don't collect any).
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these terms at any time. When we do, we will update the date at the top of this page and notify users through an App Store update. Continued use of the App after changes constitutes acceptance of the new terms.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Termination</h2>
          <p className="text-gray-700 mb-4">
            You may stop using the App at any time by deleting it from your device. We may discontinue the App at any time, though we will make reasonable efforts to provide notice through the App Store.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These terms shall be governed by and construed in accordance with the laws applicable in your jurisdiction, without regard to conflict of law principles.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Contact</h2>
          <p className="text-gray-700 mb-4">
            For questions about these terms, contact us on <a href="https://x.com/WilsonLimSet" target="_blank" rel="noopener noreferrer" className="text-sunbreak-orange hover:underline">Twitter @WilsonLimSet</a>
          </p>
        </div>
      </div>
    </div>
  )
}