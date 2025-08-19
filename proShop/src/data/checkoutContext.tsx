import { createContext, useContext, useState, type FormEvent, type ReactNode,  } from "react";

interface Shipping {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

interface Payment {
  nameOnCard: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

interface CheckoutContextType {
  handleSubmit: (e: FormEvent) => void;
  shipping: Shipping;
  setShipping: (data: Shipping) => void;
  payment: Payment;
  setPayment: (data: Payment) => void;
}

// create context
const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [shipping, setShipping] = useState<Shipping>({
    street: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const [payment, setPayment] = useState<Payment>({
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <CheckoutContext.Provider value={{ handleSubmit , shipping, setShipping, payment, setPayment }}>
      {children}
    </CheckoutContext.Provider>
  );
};


export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used inside a CheckoutProvider");
  }
  return context;
};
