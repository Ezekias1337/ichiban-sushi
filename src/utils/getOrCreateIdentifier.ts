// Functions, Helpers, Utils, and Hooks
import generateRandomId from "./generateRandomId";

const getOrCreateIdentifier = (hasGlobalPrivacyControl: boolean, hasCookieConsent: boolean): string | null => {
    let identifier = localStorage.getItem("userIdentifier");

    if (hasGlobalPrivacyControl || !hasCookieConsent) {
        return null;
    }

    if (!identifier) {
        identifier = generateRandomId();
        localStorage.setItem("userIdentifier", identifier);
    }

    return identifier;
};

export default getOrCreateIdentifier;