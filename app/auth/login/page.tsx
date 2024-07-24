"use client";
import Container from "@/components/general/container";
import InputContainer from "@/components/general/inputContainer";
import InputField from "@/components/general/inputField";
import Logo from "@/components/general/logo";
import { routes } from "@/components/routes";
import WithLocalStorage from "@/hook/withLocalStorage";
import WithoutLocalStorage from "@/hook/withoutLocalStorage";
import { setCredentials } from "@/redux/slices/authSlice";
import { useLoginMutation } from "@/redux/slices/userApiSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {
  const [signupData, setSignupData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange =
    (field: keyof SignUpFormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setSignupData({
        ...signupData,
        [field]: e.target.value,
      });
    };

  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const response = await login({
        email: signupData.email,
        password: signupData.password,
      }).unwrap();
      toast.success("Login successful! Welcome back.");
      dispatch(setCredentials(response));
      router.push(routes.dashboard);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <>
      <Container style="md:bg-[#F1EDE1]" innerStyle="h-auto">
        <div className="md:h-screen py-14 flex flex-col no-scrolling overflow-y-scroll h-auto w-full">
          <div className="flex md:justify-end md:items-end w-full mb-20 md:mb-[144px]">
            <Logo />
          </div>
          <div className="max-w-[520px] mx-auto my-auto h-auto w-full py-0 md:py-14 px-0 md:px-10 bg-white rounded-[10px] ">
            <div>
              <h2 className="text-[24px] leading-[29px] text-[#3E301C] font-semibold tracking-[-0.96px] ">
                Login
              </h2>
              <p className="mt-3 text-[#3E301CB2] leading-[148%] ">
                Welcome back! Sign in to your account below.
              </p>
            </div>

            <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-5">
              <InputContainer label="Email">
                <>
                  <InputField
                    type="email"
                    placeholder="Enter email"
                    value={signupData.email}
                    handleOnChange={handleInputChange("email")}
                  />
                </>
              </InputContainer>
              <InputContainer label="Password">
                <>
                  <InputField
                    type="password"
                    placeholder="********"
                    value={signupData.password}
                    handleOnChange={handleInputChange("password")}
                  />
                </>
              </InputContainer>

              <div className="w-full">
                <input
                  className="disabled:opacity-50 h-11 w-full bg-[#3E301C] rounded-[6px] font-medium text-[14px] text-white"
                  type="submit"
                  disabled={isLoading}
                  value={isLoading ? "Loading..." : "Login"}
                />

                <p className="mt-3 text-[14px] text-[#3E301CB2]">
                  Don&apos;t have an account?{" "}
                  <Link
                    className="text-[#3E301C] hover:underline font-medium"
                    href={"/auth/register"}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WithoutLocalStorage(Page);
