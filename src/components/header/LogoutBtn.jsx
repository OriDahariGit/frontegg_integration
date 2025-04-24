import React from 'react'
import { ContextHolder } from '@frontegg/react';

const LogOutBtn = () => {

    const logout = () => {
        const baseUrl = ContextHolder.for().getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
    };

    return (
        <div className='flex h-full rounded-btn bg-frontegg-darkred text-white min-w-[120px] text-lg font-beauty cursor-alias'
                onClick={() => logout()}>
            Log out
        </div>
    )
}

export default LogOutBtn