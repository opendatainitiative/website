import React from 'react';
import SocialButtons from './components/SocialButtons';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <SocialButtons />
      
      <div className="max-w-3/4 mx-auto space-y-12">
        <section className="text-center space-y-6">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering citizens with data-driven insights into government operations, 
            focusing on Northern California's regulatory landscape and policy implementation.
          </p>
        </section>
        
        {/* New Goals Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Goals</h2>
          <ul className="text-xl text-gray-600 max-w-2xl mx-auto list-disc list-inside">
            <li>Continue to publish a few blog posts every week that cali_doge will tweet on.</li>
            <li>The cali-doge front page showing latest tweets and join pages are finished.</li>
            <li>The bones of a workforce page shortly.</li>
            <li>As research develops, it will show on the cali-doge spend page.</li>
            <li>Development of an AI research bot soon, followed by refinement, publish, marketing bots. We will oversee instructions and outputs.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}