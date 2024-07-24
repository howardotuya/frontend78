"use client";
import MultipartUploads from "@/components/dashboard/multipartUploads";
import InputContainer from "@/components/general/inputContainer";
import InputField from "@/components/general/inputField";
import WithLocalStorage from "@/hook/withLocalStorage";
import { setCredentials } from "@/redux/slices/authSlice";
import { useUpdateUserMutation } from "@/redux/slices/userApiSlice";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Page() {
  const { userInfo } = useSelector((state: any) => state.auth);

  const [signupData, setSignupData] = useState<any>({
    name: userInfo?.name,
    email: userInfo?.email,
    businessLicense: userInfo?.businessLicense,
    taxId: userInfo?.taxId,
  });

  const handleInputChange =
    (field: keyof SignUpFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setSignupData({
        ...signupData,
        [field]: e.target.value,
      });
    };

  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await updateProfile({
        id: userInfo.id,
        name: signupData.name,
        email: signupData.email,
        businessLicense: signupData.businessLicense,
        taxId: signupData.taxId,
      }).unwrap();

      dispatch(setCredentials(response));
      toast.success("Profile updated successfully");
    } catch (err: any) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-[20px] text-[#1D2739] font-medium tracking-[-0.8px]">
          Profile settings
        </h1>
        <p className="mt-2 text-[12px] text-[#525866] leading-5">
          View your summary for all your business Information
        </p>
      </div>

      <form onSubmit={submitHandler} className="mt-14 grid gap-6 md:gap-14">
        <InputContainer label="Business name">
          <InputField
            type="text"
            placeholder="Enter business name"
            value={signupData.name}
            handleOnChange={handleInputChange("name")}
          />
        </InputContainer>
        <InputContainer label="Email">
          <InputField
            type="email"
            placeholder="Enter business email"
            value={signupData.email}
            handleOnChange={handleInputChange("email")}
          />
        </InputContainer>
        <InputContainer label="Business License ID">
          <>
            <input
              className="border border-[#D6D6D6] rounded-[6px] h-11 px-3 flex items-center w-full"
              type={"text"}
              placeholder={""}
              value={signupData.businessLicense}
              required
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  ["businessLicense"]: e.target.value,
                })
              }
            />
          </>
        </InputContainer>
        <InputContainer label="Tax ID">
          <>
            <input
              className="border border-[#D6D6D6] rounded-[6px] h-11 px-3 flex items-center w-full"
              type={"text"}
              placeholder={""}
              value={signupData.taxId}
              required
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  ["taxId"]: e.target.value,
                })
              }
            />
          </>
        </InputContainer>
        {/* <MultipartUploads /> */}
        <input
          className="disabled:opacity-50 h-11 w-full bg-[#3E301C] rounded-[6px] font-medium text-[14px] text-white"
          type="submit"
          disabled={isLoading}
          value={isLoading ? "Loading..." : "Update Profile"}
        />
      </form>
    </>
  );
}

export default WithLocalStorage(Page);
