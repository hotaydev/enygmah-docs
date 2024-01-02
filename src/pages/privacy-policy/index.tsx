import React from "react";
import Head from "@docusaurus/Head";
import { MainFooter } from "@site/src/enygmah-theme/common-footer";
import { CommonHeader } from "@site/src/enygmah-theme/common-header";
import { CommonLayout } from "@site/src/enygmah-theme/common-layout";

const PrivacyPolicy: React.FC = () => {
  return (
    <CommonLayout>
      <Head title="Privacy Policy | enygmah">
        <html data-page="privacy_policy" data-customized="true" />
      </Head>
      <div className="enygmah-prose">
        <CommonHeader hasSticky={true} />

        <div className="flex-1 flex flex-col pt-8 lg:pt-16 pb-32 max-w-[800px] w-full mx-auto px-2">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 02, 2024</p>
          <p>
            At present, we don&apos;t have a Privacy Policy because we don&apos;t collect or use any of your personal information. Our website is free from trackers and cookies that store your data, ensuring complete anonymity for you.

            The only information we retain is your preference for the site theme (dark or light themes), nothing more.

          </p>

          <p>
            If you need to get in touch with the enygmah team or Hotay company, feel free to reach out to us via email at <a href="mailto:hi@enygmah.com" target="_self" rel="noopener noreferrer">hi@enygmah.com</a>.

          </p>

          <p>
            For any additional information, please visit our <a href="https://github.com/hotaydev/enygmah" target="_blank" rel="noopener noreferrer">GitHub page</a>.
          </p>
        </div>
        <MainFooter />
      </div>
    </CommonLayout>
  );
};

export default PrivacyPolicy;
