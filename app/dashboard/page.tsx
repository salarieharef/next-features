import React from 'react'

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">داشبورد</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">آمار کلی</h2>
                    <p>اطلاعات آماری شما در اینجا نمایش داده می‌شود</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">آخرین فعالیت‌ها</h2>
                    <p>فعالیت‌های اخیر شما در اینجا نمایش داده می‌شود</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">اعلانات</h2>
                    <p>اعلانات جدید در اینجا نمایش داده می‌شود</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 