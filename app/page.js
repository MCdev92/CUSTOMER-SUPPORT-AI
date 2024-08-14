import { redirect } from "next/navigation";
import ChatPage from "./ui/ChatPage/ChatPage";
import { cookies } from "next/headers";


export default function Home() {
  const cookieStore = cookies()
  const isAuth = cookieStore.get("auth-token")
  if(!isAuth){
    redirect("/signin")
  }else{
    return <ChatPage />
  }
}
