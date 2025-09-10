import Link from 'next/link'

export default function Privacy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: September 9, 2025</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Sunbreak is a bedtime app blocker that helps you build better sleep habits by restricting distracting apps during bedtime hours. We believe in complete transparency and want you to know that we prioritize your privacy above all else.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Collection</h2>
          <p className="text-gray-700 mb-4">Our app:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Does not collect personal information</li>
            <li>Does not require user registration or accounts</li>
            <li>Does not track user activity</li>
            <li>Does not use cookies</li>
            <li>Does not store any user data on external servers</li>
            <li>Does not use third-party analytics or tracking services</li>
            <li>Does not contain advertisements</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Local Data Storage</h2>
          <p className="text-gray-700 mb-4">
            All your preferences, including bedtime schedules, app selections, and wake buffer settings, are stored locally on your device using Apple's secure storage systems. This data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Never leaves your device</li>
            <li>Is not accessible to us or any third parties</li>
            <li>Is automatically deleted when you remove the app</li>
            <li>Can be reset at any time through the app settings</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Screen Time Integration</h2>
          <p className="text-gray-700 mb-4">
            Sunbreak uses Apple's Screen Time framework to block selected apps. All Screen Time data remains on your device. We cannot see which apps you use, how often you use them, or any usage statistics.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Location Services</h2>
          <p className="text-gray-700 mb-4">
            If you grant location permission, we use your location only to calculate local sunrise and sunset times for automatic wake scheduling. This location data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Is processed entirely on your device</li>
            <li>Is never transmitted anywhere</li>
            <li>Is never stored permanently</li>
            <li>Is used only for sunrise/sunset calculations</li>
            <li>Can be revoked at any time through iOS settings</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">App Updates</h2>
          <p className="text-gray-700 mb-4">
            All app functionality and updates are delivered through the App Store update process. We do not push any data or configuration changes to your device outside of official app updates.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Deletion</h2>
          <p className="text-gray-700 mb-4">
            Since all data is stored locally on your device, you can completely remove all Sunbreak data by:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Deleting the app from your device</li>
            <li>Using the "Reset All Settings" option in the app</li>
            <li>Revoking Screen Time permissions in iOS Settings</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            If we make changes to this privacy policy, we will update the date at the top of this page and notify users through an app update.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Questions about this privacy policy? Contact us on <a href="https://x.com/WilsonLimSet" target="_blank" rel="noopener noreferrer" className="text-sunbreak-orange hover:underline">Twitter @WilsonLimSet</a>
          </p>
        </div>
      </div>
    </div>
  )
}