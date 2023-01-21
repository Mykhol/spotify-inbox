import "../styles/globals.css";
import LayoutProps from "@/types/layout.type";

const RootLayout = (props: LayoutProps) => {

  return (
    <html>
    <body>
    {props.children}
    </body>
    </html>
  )

}

export default RootLayout;