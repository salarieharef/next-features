import React from 'react'
import { api } from '../utils/api'

const UserInfo = async () => {
    try {
        const user = await api.get('/SharePanel/GetProfileInfo')
        return (
            <div>
                email : {user?.email}
            </div>
        )
    } catch (error) {
        return <div>خطا در دریافت اطلاعات کاربر</div>
    }
}

export default UserInfo