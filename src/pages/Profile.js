import UserDashboard from "../components/UserDashboard";
import ProgressBar from "../components/ProgressBar";

const Profile = () => {
    return ( 
        <main className="flex md:flex-row flex-col bg-zinc-300 flex-1 h-screen text-gray-700 relative">
            <UserDashboard />
            <ProgressBar />
        </main>
     );
}
 
export default Profile;
