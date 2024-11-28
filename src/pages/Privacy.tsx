import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Privacy Policy - Mythic Mind Labs</title>
        <meta name="description" content="Privacy Policy for Mythic Mind Labs" />
      </Helmet>
      
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including but not limited to:
          personal information, usage data, and communication preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services,
          to communicate with you, and to develop new features.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Information Sharing</h2>
        <p className="mb-4">
          We do not sell or share your personal information with third parties except
          as described in this policy or with your consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect
          your personal information against unauthorized access or disclosure.
        </p>
      </div>
    </div>
  );
};

export default Privacy;