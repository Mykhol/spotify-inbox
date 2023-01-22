"use client";

import ComponentProps from "@/types/Component.type";
import {signIn} from "next-auth/react";
import classNames from "classnames";

const LogInButton = (props: ComponentProps) => {

  return (
    <button className={classNames(props.className, "aspect-[392/92] w-[200px] bg-[url('/sign_in_with_google.png')] hover:bg-[url('/sign_in_with_google_hover.png')] transition-all bg-cover")}
            onClick={() => signIn(
              "google",
              {
                callbackUrl: "/"
              }
            )}>
    </button>
  )

}

export default LogInButton;