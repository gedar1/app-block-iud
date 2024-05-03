import React, { FC } from 'react'
import { useBasicContext } from '@context/'
 
  import { ScreenLogin } from '@screens/'
import { GlobalNavigation } from './GlobalNavigation'

// export const HandlerNavigation = () => {
//   const { user } = useUserDataContext()

//   if (!user?.data) return <ScreenLogin />

//   return <GlobalNavigation />
// }
export const HandlerNavigation : FC= () => {
  const {user} = useBasicContext()
console.log(user)
  if (!user) return <ScreenLogin />
 return <GlobalNavigation />

}
