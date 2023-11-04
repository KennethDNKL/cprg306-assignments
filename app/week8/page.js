"use client"
import Link from 'next/link'
import { useUserAuth } from "./_utils/auth-context";
 


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    function handleSignIn() {
        gitHubSignIn();
    }

    function handleSignOut() {
        firebaseSignOut();
    }
    return (
      <main>
        <div>
          <p>Welcome, please authenticate before going to my shopping list </p>
          {user ? (
            <button
              className="bg-purple-300  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={firebaseSignOut}>
              Sign Out
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={gitHubSignIn}>
              Sign In
            </button>
           
            
          )}
          {user && (
                    <p>
                        <Link href="/week8/shopping-list" 
                        className="px-fit py-fit text-black bg-red-300 rounded hover:bg-brown-700 ">
                        Welcome to my shopping list
                        </Link>
                    </p>
                )}
        </div>
        <Link
          href="/"
          className="px-4 py-2 text-white bg-orange-300 rounded hover:bg-orange-700 ">
          Back Home
        </Link>
      </main>
    );
}
