// Library Imports
import { useEffect, useMemo } from "react";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../functions/network/fetchData";
import useDeviceInfo from "./useDeviceInfo";
import generateRandomId from "../utils/generateRandomId";
// Constants
const ANALYTICS_SERVER_URL = import.meta.env.VITE_ANALYTICS_SERVER_URL;


const useAnalytics = () => {
    const userAgentInfo = useDeviceInfo();

    const getOrCreateIdentifier = () => {
        let identifier = localStorage.getItem("userIdentifier");
        if (!identifier) {
            identifier = generateRandomId();
            localStorage.setItem("userIdentifier", identifier);
        }
        return identifier;
    };

    const userIdentifier = useMemo(getOrCreateIdentifier, []);

    const sendAnalytics = useMemo(() => {
        return () => {
            const pageVisits = JSON.parse(localStorage.getItem("pageVisits") || "[]");

            if (pageVisits.length > 0) {
                const payload = {
                    userIdentifier,
                    userAgentInfo,
                    pageVisits,
                    baseUrl: "https://ezekias1337.github.io/ichiban-sushi/",
                };

                console.log(payload);

                fetchData("", {
                    method: "POST",
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }, ANALYTICS_SERVER_URL);
            }
        };
    }, [userIdentifier, userAgentInfo]);

    useEffect(() => {
        const numberOfMinutes = 1;
        const intervalId = setInterval(sendAnalytics, numberOfMinutes * 60 * 1000);
        window.addEventListener("beforeunload", sendAnalytics);

        return () => {
            localStorage.removeItem("pageVisits");
            clearInterval(intervalId);
            window.removeEventListener("beforeunload", sendAnalytics);
        };
    }, [sendAnalytics]);
};

export default useAnalytics;