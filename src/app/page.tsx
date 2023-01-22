import LogInButton from "@/ui/auth/LogInButton";
import Page from "@/ui/page/Page";

const AppPage = async () => {
  return (
    <Page>
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="text-white text-5xl mb-4">Welcome to Spotify<span className="text-[#ED7D3A]">Inbox</span></p>
        <LogInButton/>
      </div>

    </Page>
  )

}

export default AppPage;