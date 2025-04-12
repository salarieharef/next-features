import React from 'react'

const Settings = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">تنظیمات</h1>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">تنظیمات اعلانات</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="mr-2">اعلانات ایمیلی</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="mr-2">اعلانات پیامکی</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">تنظیمات حریم خصوصی</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="mr-2">نمایش پروفایل عمومی</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings 