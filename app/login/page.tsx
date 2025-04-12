import React from "react";
import { redirect } from "next/navigation";
import { api } from "../utils/api";
import { setToken } from "../actions/auth";

const LoginPage = ({ searchParams }: { searchParams: { redirect?: string } }) => {
  const handleLogin = async (formData: FormData) => {
    "use server";

    try {
      const data = await api.post('/Sign/Login', {
        phoneOrGmail: formData.get('phoneOrGmail'),
        password: formData.get('password'),
        rememberMe: formData.get('rememberMe') === 'true',
      });
      
      if (data.token) {
        setToken(data.token);
        const redirectPath = searchParams.redirect || '/dashboard';
        redirect(redirectPath);
      }
    } catch (error) {
      console.error('خطا در ورود:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ورود به حساب کاربری
          </h2>
        </div>
        <form className="mt-8 space-y-6" action={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="phoneOrGmail" className="sr-only">
                ایمیل یا شماره تلفن
              </label>
              <input
                id="phoneOrGmail"
                name="phoneOrGmail"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="ایمیل یا شماره تلفن"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                رمز عبور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="رمز عبور"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                value="true"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="mr-2 block text-sm text-gray-900">
                مرا به خاطر بسپار
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage; 