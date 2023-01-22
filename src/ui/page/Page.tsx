import ComponentProps from "@/types/Component.type";

const Page = (props: ComponentProps) => {

  return (
    <div className="min-h-screen w-full bg-black text-3xl font-bold">
      {props.children}
    </div>
  )

}

export default Page;