// utils/stripe.ts
import axios from 'axios';

interface PaymentLink {
    id: string;
    url: string;
    // Add more properties as needed
}

export async function fetchPaymentLinks(): Promise<PaymentLink[]> {
    const response = await axios.get('https://api.stripe.com/v1/payment_links', {
        headers: {
            'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
        }
    });
    return response.data.data;
}
