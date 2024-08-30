import { useState, useEffect } from 'react';
import { main } from '../../wailsjs/go/models';
import { SignIn, CreateUser, ResetPw, SignOut } from '../../wailsjs/go/main/App';

export function useAuth() {
  const [user, setUser] = useState<main.User | null>(null);

  const login = (email: string, password: string): void => {
    SignIn(email, password)
      .then(function(user) {
        setUser(user);
      });
  }

  const logout = async () => {
    if (user) {
      await SignOut(user.email);
    }
    setUser(null);
  }

  const createAcct = async (email: string, password: string, name: string): Promise<main.User> => {
    const userCred = await CreateUser(email, password, name);
    return userCred;
  }

  const resetPw = async (email: string): Promise<void> => {
    return await ResetPw(email);
  }

  return {
    user,
    login,
    logout,
    createAcct,
    resetPw,
  };
}
