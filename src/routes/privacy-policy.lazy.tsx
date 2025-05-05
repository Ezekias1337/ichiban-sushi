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

      <p>
        Some analytics data on this site is collected and processed by our web
        development partner, <strong>Your Company Name</strong>, who may use
        this data to analyze visitor behavior across multiple client websites
        they maintain. No personally identifiable information is shared between
        client websites.
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
        <strong>b. Cookies:</strong> We use cookies to track your session and to
        store your preferences (such as dismissing cookie banners). Cookies help
        us personalize your experience, analyze trends, and optimize site
        functionality.
      </p>
      <p>
        <strong>c. Usage Data:</strong> We collect information about the pages
        you visit, the order in which you visit them, and how long you stay on
        each page. We may also log timestamps and detect the device type, OS,
        and browser version.
      </p>
      <p>
        <strong>d. Cross-Site Analytics:</strong> Our development partner may
        use anonymized or pseudonymized identifiers to analyze user behavior
        across multiple websites they manage. This helps them improve the
        functionality and design of the websites they build.
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
        <strong>b. Analytics:</strong> Usage data is analyzed to better
        understand user behavior and preferences. Our development partner may
        aggregate anonymous analytics data to inform broader performance and
        compatibility improvements across client sites.
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
        <strong>b. Web Development Partner:</strong> Anonymized analytics data
        may be shared with and stored by our development partner for performance
        tracking and website optimization across multiple projects. This data
        does not include personally identifiable information.
      </p>
      <p>
        <strong>c. Legal Compliance:</strong> We may disclose your information
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
        <strong>b. Promotional Emails:</strong> You may opt out of receiving
        promotional emails from us. To unsubscribe, follow the instructions in
        our emails or contact us directly.
      </p>
      <p>
        <strong>c. Do Not Sell or Share My Personal Information:</strong> If you
        are a California resident, you have the right to opt out of the "sale"
        or "sharing" of your personal information (as defined by the California
        Consumer Privacy Act and California Privacy Rights Act). You may
        exercise this right by visiting our{" "}
        <GeneralLink
          text="Do Not Sell or Share My Info"
          url="/do-not-sell"
          openInNewTab={false}
        />{" "}
        page.
      </p>
      <p>
        <strong>d. Global Privacy Control (GPC):</strong> We honor browser-based
        opt-out signals sent using the Global Privacy Control standard. If your
        browser is configured to send a GPC signal, we will treat it as a valid
        opt-out request.
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
