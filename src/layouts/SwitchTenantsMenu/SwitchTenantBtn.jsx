import React from 'react'

const SwitchTenantBtn = () => {
  return (
    <div className="inline-flex h-full items-center pr-2 gap-1 text-frontegg-dark hover:text-frontegg-accent
            hover:bg-frontegg-accent/10 bg-gradient-to-r">
        <span className="text-2xl">|</span>
        Switch Tenant
        <svg className="flex fill-frontegg-dark ml-1 hover:fill-frontegg-accent" width="10px" height="10px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="m.08 568.063 176.13-176.13 783.988 783.864 783.74-783.864 176.129 176.13-959.87 960.118z" fill-rule="evenodd"/>
        </svg>
    </div>
  )
}

export default SwitchTenantBtn