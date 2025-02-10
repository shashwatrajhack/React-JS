import { networkAtom,jobAtom,notificationAtom,messagingAtom } from "./atoms";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return  <RecoilRoot>
      <MainApp />
    </RecoilRoot>
}

function MainApp() {
  console.log("render happening");
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  return (
    <>
      <button>Home</button>
      <button>My Network({networkNotificationCount>=100 ? "99+":networkNotificationCount})</button>
      <button>Jobs({jobNotificationCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Me</button>
    </>
  );
}
export default App;
