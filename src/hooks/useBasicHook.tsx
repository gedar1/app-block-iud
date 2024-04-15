import React, { useState } from 'react'

export const useBasicHook = () => {
  const [message,setMessage] = useState('BasicHook')
  return {
    message,
    setMessage,
  }
}

export default useBasicHook