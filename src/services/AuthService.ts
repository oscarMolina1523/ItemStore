import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "./firebase";

export const AuthService = {

  async LoginService(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch(error) {
      console.error('Error in login service:', error);
      throw error;
    }
  },
  
  async RegisterService(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; 
    } catch (error) {
      console.error('Error in register service:', error);
      throw error; 
    }
  },

  async LogoutService() {
    try {
      await auth.signOut();
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error in logout service:', error);
      throw error;
    }
  },

  async GetCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe(); 
        resolve(user);
      });
    });
  },

  async ResetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Error in reset password service:', error);
      throw error;
    }
  },
  
}