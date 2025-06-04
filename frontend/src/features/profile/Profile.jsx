import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="bg-gray-100 min-h-screen p-4">
        <header className=" text-black py-4 px-6">
          <h1 className="text-2xl font-bold">Your Profile</h1>
        </header>
        <main className="container mx-auto py-8 px-4">
          <div className="rounded-lg p-6">
            <div className="flex items-center">
              <img src={user.picture} alt={user.name} className="rounded-full w-24 h-24 border-2 border-gray-300" />
              <div className="ml-6">
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <p className="text-lg text-gray-700">{user.email}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Account Details</h3>
              <p className="text-lg">Name: {user.name}</p>
              <p className="text-lg">Email: {user.email}</p>
            </div>
          </div>
        </main>
      </div>
    )
  );
};

export default Profile;