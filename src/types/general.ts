export interface SignUpData {
  email: string
  password: string
  fullName: string
  role: "client" | "vendor" | "retailer" | "manufacturer" | ""
  businessName?: string
  businessPhone?: string
}