import "../styles/globals.css";
import LayoutProps from "@/types/layout.type";
import SessionProvider from "@/providers/SessionProvider";

const RootLayout = (props: LayoutProps) => {

  return (
    <html>
    <body>
    <SessionProvider>
      {props.children}
    </SessionProvider>
    </body>
    </html>
  )

}

export default RootLayout;