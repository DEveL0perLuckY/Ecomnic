import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { ShoppingCart, PackageCheck } from "lucide-react";

const CartPage = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setCart(data.cart || []);
        setTotal(data.totalAmount || 0);
      }
    };
    fetchCart();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-6 h-6 text-green-600" />
          <h1 className="text-2xl font-bold">Your Cart</h1>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center py-10">
            🛒 Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      Product ID:{" "}
                      <span className="text-gray-600">{item.productId}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold text-blue-600">
                    ${item.price}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right text-xl font-bold text-blue-700">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
