import { FaRegUser } from "react-icons/fa";
import { auth, signIn, signOut } from "../../../auth";

const Login = async () => {
    const session = await auth();

    const handleSignIn = async () => {
        "use server";
        await signIn("google");
    };

    const handleSignOut = async () => {
        "use server";
        await signOut();
    };

    return (
        <>
            {session?.user ? (
                <div className="content">
                    <div className="content cursor-pointer flex items-center gap-2">
                        <div className="logo rounded-full h-[45px] w-[45px] flex justify-center items-center border-2">
                            <img className="rounded-full" src={session?.user?.image} alt="img" />
                        </div>
                        <div className="text">
                            <p className="text-[12px]">{session?.user?.name}</p>
                            <p className="text-[14px] font-semibold">View profile</p>
                        </div>
                    </div>
                    <div className="uswe-area">
                        <form action={handleSignOut}>
                            <button type="submit">Log Out</button>
                        </form>
                    </div>
                </div>
            ) : (
                <form action={handleSignIn}>
                    <button type="submit">
                        <div className="content cursor-pointer flex items-center gap-2">
                            <div className="logo rounded-full h-[45px] w-[45px] flex justify-center items-center border-2">
                                <FaRegUser className="text-xl text-[#87898b]" />
                            </div>
                            <div className="text">
                                <p className="text-[12px]">Hello ' Sign in</p>
                                <p className="text-[14px] font-semibold">Your Account</p>
                            </div>
                        </div>
                    </button>
                </form>
            )}
        </>
    );
};

export default Login;
