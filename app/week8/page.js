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
                        className="px-fit py-fit text-black bg-red-300 rounded hover:bg-brown-700 ">Welcome to my shopping list</Link>
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
    /**return (
        <div>
            <h1>Week 8</h1>
            <h2>shopping-list</h2>
            <p>Current user: {user?.displayName}</p>

            <button onClick={handleSignIn}>Sign in with GitHub</button>

            <button onClick={handleSignOut}>Sign out</button>

        
            <Link href="/week8">week 8</Link> 
        </div>
    );*/
}


/**export default function Page()  {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    function handleSignIn() {
        gitHubSignIn();
    }

    function handleSignOut(){
        firebaseSignOut();
    }

    return(
        <div>
            <h1>Week 8</h1>
            <h2>shopping-list</h2>
            <p>Current user: {user?.displayName}</p>
            
            <button onClick={handleSignIn}>Sign in with GitHub</button>

            
            <button onClick={handleSignOut}>Sign out</button>
        </div>
        
    )

}*/

/*function ShoppingList() {
    const { user, firebaseSignOut } = useUserAuth();
  
    // Define the URL for the login page
    const loginPageURL = 'http://localhost:3000/week8/login'; // Replace with the actual URL
  
    // Check if the user is authenticated
    if (!user) {
      // If the user is not authenticated, you can handle it here
      // Display a message for unauthenticated users with a link to the login page
      return (
        <div>
          <p>You need to be logged in to access the shopping list.</p>
          <p>Access the login page: <a href={loginPageURL}>Login Page</a></p>
        </div>
      );
    }
  
    // If the user is authenticated, you can render the shopping list content
    return (
      <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        {Add your shopping list content here }
        <button onClick={firebaseSignOut}>Sign out</button>
      </div>
    );
  }
  
  export default ShoppingList;*/
