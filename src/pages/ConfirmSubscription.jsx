
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail } from "lucide-react";

const ConfirmSubscription = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState({ text: "", type: "" });
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle subscription confirmation on component mount
  useEffect(() => {
    const emailParam = searchParams.get("email");
    const token = searchParams.get("token");

    if (emailParam && token) {
      confirmSubscription(emailParam, token);
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const confirmSubscription = async (email, token) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/newsletter/confirm?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: data.message || "Your subscription has been successfully confirmed! Welcome to our newsletter.",
          type: "success",
        });
        setTimeout(() => setMessage({ text: "", type: "" }), 5000); // Clear message after 5 seconds
      } else {
        setMessage({
          text: data.message || "Failed to confirm subscription. Please try again or contact support.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error confirming subscription:", error);
      setMessage({
        text: "An error occurred while confirming your subscription. Please try again later.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = async () => {
    if (!email) {
      setMessage({ text: "Please provide an email to unsubscribe.", type: "error" });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/newsletter/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, token: searchParams.get("token") || "" }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: data.message || "You have been successfully unsubscribed from our newsletter.",
          type: "success",
        });
        setEmail("");
        setTimeout(() => setMessage({ text: "", type: "" }), 5000); // Clear message after 5 seconds
      } else {
        setMessage({
          text: data.message || "Failed to unsubscribe. Please try again or contact support.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error unsubscribing:", error);
      setMessage({
        text: "An error occurred while unsubscribing. Please try again later.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="font-heading font-semibold text-3xl text-primary tracking-tight">
            Manage Your Newsletter
          </h2>
          <p className="text-base leading-relaxed">
            Confirm or unsubscribe from Karman Singh's financial insights newsletter.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="flex justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-accent-dark shadow-md flex items-center justify-center z-10">
                  <span
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    SM
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-accent-dark border-t-transparent animate-spin"></div>
              </div>
            </div>
          ) : (
            <>
              {/* Message Display */}
              {message.text && (
                <div
                  className={`flex items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                    message.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  <p className="text-sm font-medium">{message.text}</p>
                </div>
              )}

              {/* Unsubscribe Form */}
              <div className="space-y-4">
                <h3 className="font-heading text-center font-semibold text-lg text-primary">
                  Unsubscribe from Newsletter
                </h3>
                <p className="text-sm  leading-relaxed">
                  Enter your email below to unsubscribe from our newsletter. You can resubscribe anytime on our website.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-6 py-3  rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <button
                    onClick={handleUnsubscribe}
                    className="bg-black px-6 py-3 ml-2 rounded-lg font-medium text-white hover:bg-accent-dark focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    Unsubscribe
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-sm  border-t border-primary-foreground/20 pt-6">
          <p className="leading-relaxed">
            Need help? Contact us at{" "}
            <a
              href="mailto:admin@singhkarman.com"
              className="text-black font-bold hover:underline transition-colors duration-200"
            >
              admin@singhkarman.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:206-801-0330"
              className="text-black font-bold hover:underline transition-colors duration-200"
            >
              (206) 801-0330
            </a>
          </p>
          <p className="mt-2">&copy; 2024 Empower Life. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSubscription;
