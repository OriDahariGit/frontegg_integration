import React from 'react'
import { ContextHolder } from '@frontegg/react';

const LogOutBtn = () => {

    const logout = () => {
        const baseUrl = ContextHolder.for().getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
    };

    return (
        <div className='log-btn rounded-btn dark-btn'
                onClick={() => logout()}>
            Log Out
        </div>
    )
}

export default LogOutBtn