import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Terms of Service - Mythic Mind Labs</title>
        <meta name="description" content="Terms of Service for Mythic Mind Labs" />
      </Helmet>
      
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using this website, you accept and agree to be bound by the terms
          and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the materials for personal,
          non-commercial transitory viewing only.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on Mythic Mind Labs' website are provided on an 'as is' basis.
          Mythic Mind Labs makes no warranties, expressed or implied, and hereby disclaims
          and negates all other warranties including, without limitation, implied warranties
          or conditions of merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall Mythic Mind Labs or its suppliers be liable for any damages
          arising out of the use or inability to use the materials on Mythic Mind Labs' website.
        </p>
      </div>
    </div>
  );
};

export default Terms;