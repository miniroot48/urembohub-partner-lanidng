"use client"
import CustomLinkBtn from '@/components/UI/custom_cta_button';
import CustomInput from '@/components/UI/custom_input';
import CustomSelect from '@/components/UI/custom_select';
import { signUp } from '@/services/signup';
import { SignUpData } from '@/types/general';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
type FormType ={
    fullName: string,
    dob: string,
    email: string,
    password: string,
    confirmPassword: string,
    businessPhone: string,
    role: "vendor" | "retailer" | "manufacturer" | ""
}
// export interface SignUpData {
//   email: string
//   password: string
//   fullName: string
//   role: "client" | "vendor" | "retailer" | "manufacturer"
//   businessName?: string
//   businessbusinessPhone?: string
// }
export default function SignUpForm() {
    const [formData, setFormData] = useState<FormType>({
        fullName: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: "",
        businessPhone: "",
        role: "",

    });

    // const paterners =[
    //     {title: "Vendor (Offer Beauty Service)", role: "vendor"},
    //     {title: "Retailers (Sale Tangible Beauty products)", role: "retailer"},
    //     {title: "Manufacturers (Produce Beauty Products)", role: "manufacturer"}
    // ];
    const [loading, setLoading] = useState(false);
    const handleSubmit =    async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate business fields for business roles
        if (['vendor', 'retailer', 'manufacturer'].includes(formData.role)) {
        if (!formData.fullName.trim() || !formData.businessPhone.trim()) {
            return; // Form validation will show required field error
        }
        }
        
        setLoading(true);

        try {
            const userData: Partial<SignUpData> = {
                fullName: formData.fullName,
                role: formData.role
            };
            
            // Add business data for business roles
            if (['vendor', 'retailer', 'manufacturer'].includes(formData.role)) {
                if (formData.fullName) {
                    userData.fullName = formData.fullName;
                }
                if (formData.businessPhone) {
                    userData.businessPhone = formData.businessPhone;
                }
            }
        
            const response = await signUp(formData.email, formData.password, userData);
            console.log('response',response);

            const success = await response.user;

            if (success) {
                toast.success("Account created successfully! Please check your email!.");
                setFormData({
                    fullName: "",
                    dob: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    businessPhone: "",
                    role: "",

                });
            } else {
                toast.error(`Error: ${response.message}` || "Sign-up failed. Please try again.");
                console.log('response',response);
            }            
        } catch(err){
            console.error("UnExpected Error Occured:", err);
            toast.error("Unexpected Error!");
        }finally {            
            setLoading(false);
        }
    };

  return (
    <form
        method="post"
        onSubmit={handleSubmit}
        className="bg-[#C9D1E685] backdrop-blur-xl flex flex-col items-start justify-start gap-3 p-8 md:p-10"
    >
        <div className="flex items-start flex-col gap-5">
            <img src="/header-logo.png" height={84} className="" />
            <h2 className="text-black text-4xl font-bold">
                Sign Up
            </h2>            
        </div>
        <div className="grid grid-cols-1 gap-3 w-full">
            <CustomInput
                id='fullName'
                type='text'
                placeholder='Enter your fullName'
                name='fullName'
                label='Full Name'
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            <CustomInput
                id='dob'
                type='date'
                placeholder='Enter your Date of Birth'
                name='dob'
                label='Date Of Birth'
                value={formData.dob}
                onChange={(e) => setFormData({...formData, dob: e.target.value})}
            />
            <CustomInput
                id='email'
                type='email'
                placeholder='Enter your Email Address'
                name='email'
                label='Email Addrress'
                value={formData.email}
                onChange={(e) => setFormData({...formData,email: e.target.value})}
            />
            <CustomInput
                id='password'
                type='password'
                placeholder='Enter Password'
                name='password'
                label='Password'
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <CustomInput
                id='re-enter-password'
                type='password'
                placeholder='Re-enter yur password'
                name='re-enter-password'
                label='Confirm Password'
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            <CustomInput
                id='businessPhone'
                type='tel'
                placeholder='Enter the phone number'
                name='businessPhone'
                label='Business Phone Number'
                value={formData.businessPhone}
                onChange={(e) => setFormData({...formData, businessPhone: e.target.value})}
            />

            <CustomSelect
                label="Select Option"
                name="mySelect"
                value={formData.role}
                onChange={(val) => setFormData({...formData, role: val as "vendor" | "retailer" | "manufacturer" | ""})}
                options={["vendor", "retailer", "manufacturer"]}
                placeholder="Search or select..."
            />
            
            <div className="grid grid-cols-1 pt-5">
                <CustomLinkBtn
                    loading={loading}
                    type='submit'
                >
                    Create Account
                </CustomLinkBtn>
            </div>
        </div>
    </form>
  )
}
