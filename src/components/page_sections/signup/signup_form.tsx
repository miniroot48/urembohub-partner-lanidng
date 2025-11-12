"use client"
import CustomLinkBtn from '@/components/UI/custom_cta_button';
import CustomInput from '@/components/UI/custom_input';
import CustomSelect from '@/components/UI/custom_select';
import React, { useState } from 'react'
type FormType ={
    fullname: string,
    dob: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string,
    paternAs: string | number
}
export default function SignUpForm() {
    const [formData, setFormData] = useState<FormType>({
        fullname: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        paternAs: ""
    });

    const paterners =[
        "Vendor (Offer Beauty Service)",
        "Retailers (Sale Tangible Beauty products)",
        "Manufacturers (Produce Beauty Products)"
    ]
  return (
    <form method="post" className="bg-[#C9D1E685] backdrop-blur-xl flex flex-col items-start justify-start gap-3 p-8 md:p-10">
        <div className="flex items-start flex-col gap-5">
            <img src="/header-logo.png" height={84} className="" />
            <h2 className="text-black text-4xl font-bold">
                Sign Up
            </h2>            
        </div>
        <div className="grid grid-cols-1 gap-3 w-full">
            <CustomInput
                id='fullname'
                type='text'
                placeholder='Enter your Fullname'
                name='fullname'
                label='Full Name'
                value={formData.fullname}
                onChange={(e) => setFormData({...formData, fullname: e.target.value})}
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
                id='phone'
                type='tel'
                placeholder='Enter the phone number'
                name='phone'
                label='Business Phone Number'
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />

            <CustomSelect
                label="Select Option"
                name="mySelect"
                value={formData.paternAs}
                onChange={(val) => setFormData({...formData, paternAs: val})}
                options={paterners}
                placeholder="Search or select..."
            />
            
            <div className="grid grid-cols-1 pt-5">
                <CustomLinkBtn
                    type='submit'
                >
                    Create Account
                </CustomLinkBtn>
            </div>
        </div>
    </form>
  )
}
