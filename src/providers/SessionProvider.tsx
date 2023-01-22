"use client";

import {SessionProvider as NextAuthSessionProvider} from "next-auth/react"
import ComponentProps from "@/types/Component.type";
import {Session} from "next-auth";

type SessionProviderProps = {
  // session: Session
} & ComponentProps
const SessionProvider = (props: SessionProviderProps) => {

  return (
    <NextAuthSessionProvider
      // session={props.session}
    >
      {props.children}
    </NextAuthSessionProvider>
  )

}

export default SessionProvider;