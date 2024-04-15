import React, { createContext, ReactNode, useContext} from 'react'
import {useBasicHook} from '@hooks/';


export interface BasicProviderType {
  message: string;
  setMessage:React.Dispatch<React.SetStateAction<string>>
}

const BasicContext = createContext<BasicProviderType>({} as BasicProviderType)

export const useBasicContext = () => useContext(BasicContext)

export const BasicProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  
  const context = useBasicHook()
  

  return <BasicContext.Provider value={context}>{children}</BasicContext.Provider>
}
