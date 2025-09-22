document.addEventListener("DOMContentLoaded", function () {
  try {
    window.silktideCookieBannerManager.updateCookieBannerConfig({
      background: {
        showBackground: true,
      },
      cookieIcon: {
        position: "bottomLeft",
      },
      cookieTypes: [
        {
          id: "necessary",
          name: "Necessary",
          description:
            "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.</p>",
          required: true,
          onAccept: function () {
            console.log("Add logic for the required Necessary here");
          },
        },
        {
          id: "analytics",
          name: "Analytics",
          description:
            "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p>",
          defaultValue: true,
          onAccept: function () {
            if (typeof window.gtag === "function") {
              window.gtag("consent", "update", {
                analytics_storage: "granted",
              });
            }
            if (typeof window.dataLayer !== "undefined") {
              window.dataLayer.push({
                event: "consent_accepted_analytics",
              });
            }

            if (typeof window.clarity === "function") {
              window.clarity("consent", true);
              window.clarity("consentv2", {
                ad_storage: "granted",
                analytics_Storage: "granted",
              });
            }
          },
          onReject: function () {
            if (typeof window.gtag === "function") {
              window.gtag("consent", "update", {
                analytics_storage: "denied",
              });
            }

            if (typeof window.clarity === "function") {
              window.clarity("consent", false);
              window.clarity("consentv2", {
                ad_storage: "denied",
                analytics_storage: "denied",
              });
            }
          },
        },
        {
          id: "advertising",
          name: "Advertising",
          description:
            "<p>These cookies provide extra features and personalization to improve your experience. They may be set by us or by partners whose services we use.</p>",
          onAccept: function () {
            if (typeof window.gtag === "function") {
              window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
              });
            }
            if (typeof window.dataLayer !== "undefined") {
              window.dataLayer.push({
                event: "consent_accepted_advertising",
              });
            }

            if (typeof window.clarity === "function") {
              window.clarity("consent", true);
              window.clarity("consentv2", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
              });
            }
          },
          onReject: function () {
            if (typeof window.gtag === "function") {
              window.gtag("consent", "update", {
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
              });
            }

            if (typeof window.clarity === "function") {
              window.clarity("consent", false);
              window.clarity("consentv2", {
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
              });
            }
          },
        },
      ],
      text: {
        banner: {
          description:
            "<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic. ",
          acceptAllButtonText: "Accept all",
          acceptAllButtonAccessibleLabel: "Accept all cookies",
          rejectNonEssentialButtonText: "Reject non-essential",
          rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
          preferencesButtonText: "Preferences",
          preferencesButtonAccessibleLabel: "Toggle preferences",
        },
        preferences: {
          title: "Customize your cookie preferences",
          description:
            "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
          creditLinkText: "Get this banner for free",
          creditLinkAccessibleLabel: "Get this banner for free",
        },
      },
    });
  } catch (error) {
    console.error("Error loading Silktide Consent Manager", error);
  }
});
