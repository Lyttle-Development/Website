'use client'
import React from 'react'
import { useAuth } from '@payloadcms/ui'
import { Media } from '@/payload-types'
import { type ClientUser } from 'payload'

const ProfilePicture: React.FC = () => {
  const { user } = useAuth<ClientUser>()
  return (
    <img
      style={{
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      src={(user?.avatar as Media)?.url || '/images/default-profile.png'}
      alt="yas"
      width={25}
      height={25}
    />
  )
}

export default ProfilePicture
