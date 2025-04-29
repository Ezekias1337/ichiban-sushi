// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/terms-of-service.scss";

const TermsOfService = () => (
  <div className="terms-of-service">
    <HelmetProvider>
      <Helmet>
        <title>Ichiban Sushi | Terms of Service</title>
      </Helmet>
    </HelmetProvider>

    <PageHeader title="Terms Of Service" />
    <div className="terms-of-service-wrapper padding-left-and-right">
      <p>
        Welcome to Ichiban Sushi! These Terms of Service ("Terms") govern your
        use of our website. By accessing or using our website, you agree to comply
        with and be bound by these Terms. If you do not agree, please refrain from
        using our website.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">1. Website Usage</h2>
      <p>
        Our website is intended to provide general information about Ichiban Sushi,
        including our menu, business hours, location, and contact details. All
        content is for informational purposes only and may be updated without notice.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">2. User Conduct</h2>
      <p>
        When using our website, you agree to:
        <ul>
          <li>Use the site only for lawful purposes.</li>
          <li>Not attempt to gain unauthorized access to any part of the site.</li>
          <li>Respect all intellectual property rights related to the content provided.</li>
        </ul>
      </p>

      <h2 className="padding-top-40 padding-bottom-20">3. Intellectual Property</h2>
      <p>
        All content on this website—including text, images, logos, and layout—is
        the property of Ichiban Sushi and is protected by copyright and trademark
        laws. You may not reproduce or distribute any part of the website without
        our prior written consent.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">4. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites for your convenience
        (e.g., delivery services or review platforms). Ichiban Sushi is not
        responsible for the content or practices of those websites.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">5. Disclaimer</h2>
      <p>
        The information on this website is provided "as is" and without warranties
        of any kind. While we strive for accuracy, Ichiban Sushi does not guarantee
        the completeness, reliability, or timeliness of the information provided.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">6. Limitation of Liability</h2>
      <p>
        To the extent permitted by law, Ichiban Sushi shall not be liable for any
        damages arising out of or related to your use of our website, including but
        not limited to direct, indirect, incidental, or consequential damages.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">7. Modifications</h2>
      <p>
        Ichiban Sushi reserves the right to update or modify these Terms at any time
        without prior notice. Your continued use of the website after changes have
        been posted indicates your acceptance of the updated Terms.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">8. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding these Terms, please contact
        us at{" "}
        <GeneralLink
          text="placeholder@gmail.com"
          url="mailto:placeholder@gmail.com"
          openInNewTab={false}
        />
        .
      </p>

      <p>
        By using our website, you acknowledge that you have read, understood, and
        agree to be bound by these Terms of Service.
      </p>
    </div>
  </div>
);

export const Route = createLazyFileRoute("/terms-of-service" as never)({
  component: TermsOfService,
});
