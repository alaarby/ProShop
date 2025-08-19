
export interface ShippingData {
  country: string;
  city: string;
  zipCode: string;
  street: string;
}

export interface PaymentData {
  nameOnCard: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export interface CheckoutContextType {
  shipping: ShippingData;
  setShipping: (data: ShippingData) => void;
  payment: PaymentData;
  setPayment: (data: PaymentData) => void;
}