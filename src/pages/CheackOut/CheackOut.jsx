import React from "react";
import { useAuth } from "../../context/AuthContext";
import { PackageCheck } from "lucide-react";

const CheackOut = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md text-center">
        <div className="flex justify-center mb-4">
          <PackageCheck className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Checkout</h2>
        {user ? (
          <>
            <p className="text-gray-700 mb-4">
              Thank you <strong>{user.email}</strong> for shopping with us!
            </p>
            <p className="text-gray-600 mb-2">
              This is a demo screen. You can integrate Razorpay / Stripe here.
            </p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
              Confirm Payment
            </button>
          </>
        ) : (
          <p className="text-red-500">
            You must be signed in to proceed with checkout.
          </p>
        )}
      </div>
    </div>
  );
};

export default CheackOut;
