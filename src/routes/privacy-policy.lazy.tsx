// Library Imports
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
// CSS
import "../css/page-specific/privacy-policy.scss";

const PrivacyPolicy = () => (
  <div className="privacy-policy">
    <HelmetProvider>
      <Helmet>
        <title>Ichiban Sushi | Privacy Policy</title>
      </Helmet>
    </HelmetProvider>

    <PageHeader title="Privacy Policy" />
    <div className="privacy-policy-wrapper padding-left-and-right">
      <p>
        At Ichiban Sushi, we are committed to protecting your privacy. This
        Privacy Policy outlines how we collect, use, and protect your
        information when you visit our website.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        1. Information We Collect
      </h2>
      <p>
        <strong>a. Device and Browser Information:</strong> We may collect
        technical data about your device and browser—such as your IP address,
        browser type, operating system, and unique device identifiers—to improve
        your browsing experience and enhance our services.
      </p>
      <p>
        <strong>b. Cookies:</strong> We use cookies to gather information about
        your interactions with our website, including pages visited, time spent
        on each page, and other browsing behaviors. Cookies help us personalize
        your experience, analyze trends, and optimize site functionality.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        2. How We Use Your Information
      </h2>
      <p>
        <strong>a. Improving User Experience:</strong> We use collected
        information to operate, maintain, and enhance our website, services, and
        overall user experience.
      </p>
      <p>
        <strong>b. Analytics:</strong> We analyze website usage data to better
        understand user behavior and preferences, which helps us tailor content
        and make informed decisions.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        3. Information Sharing and Disclosure
      </h2>
      <p>
        <strong>a. Third-Party Service Providers:</strong> We may share your
        information with trusted third parties who help us operate our website,
        manage business activities, or provide services to you. These parties
        are contractually obligated to protect your data.
      </p>
      <p>
        <strong>b. Legal Compliance:</strong> We may disclose your information
        when required by law, legal proceedings, or to protect the rights,
        property, or safety of Ichiban Sushi or others.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        4. Your Choices and Controls
      </h2>
      <p>
        <strong>a. Cookie Preferences:</strong> You may adjust your browser
        settings to refuse or delete cookies. However, some features of our
        website may not function correctly if cookies are disabled.
      </p>
      <p>
        <strong>b. Opt-Out:</strong> You may opt out of receiving promotional
        emails from us. To unsubscribe, follow the instructions in our emails or
        contact us directly.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">5. Data Security</h2>
      <p>
        We implement reasonable measures to protect your personal information
        from unauthorized access, disclosure, alteration, or destruction.
        However, no internet transmission or electronic storage method is 100%
        secure. While we strive to protect your data, we cannot guarantee
        absolute security.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">
        6. Updates to this Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page, and we encourage you to review it periodically.
      </p>

      <h2 className="padding-top-40 padding-bottom-20">7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at{" "}
        <GeneralLink
          text="placeholder@gmail.com"
          url="mailto:placeholder@gmail.com"
          openInNewTab={false}
        />
        .
      </p>
      <p>
        By using our website, you consent to the collection, use, and disclosure
        of your information as described in this Privacy Policy.
      </p>
    </div>
  </div>
);

export const Route = createLazyFileRoute("/privacy-policy" as never)({
  component: PrivacyPolicy,
});
