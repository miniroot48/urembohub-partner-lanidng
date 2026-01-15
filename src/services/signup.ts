import { SignUpData } from "@/types/general";

export const signUp = async (email: string, password: string, userData: Partial<SignUpData> = {}) => {
    try {
      const signUpData = {
        email,
        password,
        fullName: userData.fullName || '',
        role: userData.role,
        businessName: userData.role === 'vendor' || userData.role === 'retailer' || userData.role === 'manufacturer' ? userData.fullName + "'s Business" : undefined,
        businessPhone: userData.role === 'vendor' || userData.role === 'retailer' || userData.role === 'manufacturer' ? userData.businessPhone : undefined,
      };

    //   api expects a POST request to /api/auth/register with the json format like this
    // {
        // "email": "user@example.com",
        // "password": "securePassword123",
        // "fullName": "John Doe",
        // "role": "vendor",
        // "businessName": "My Business",
        // "businessDescription": "Business description",
        // "businessAddress": "123 Main St, City",
        // "businessPhone": "+254712345678"
    // }
    // i'll use fetch to make the request
      return await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      }).then(res => res.json());
    } catch (error) {
      console.error('Sign-up error:', error);
      return { error: 'Sign-up failed. Please try again.' };
    }
  };