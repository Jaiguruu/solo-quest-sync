
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';

// Get environment variables or use fallbacks for development
// You'll need to set these in your Supabase project settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if supabase credentials exist
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials not found. Make sure to set environment variables in your Supabase project settings.');
  
  // Show a toast notification to alert users about the missing configuration
  if (typeof window !== 'undefined') {
    toast.error(
      'Supabase connection failed. Please check your environment variables in the Supabase project settings.',
      {
        duration: 5000,
      }
    );
  }
}

// Create a supabase client instance with error handling
// This will work when proper env variables are set, and provide a clear error when they're not
const createSupabaseClient = () => {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      // Return a mock client that doesn't actually connect to Supabase
      // This prevents the app from crashing immediately, allowing error handling to display
      return {
        auth: {
          getSession: async () => ({ data: { session: null } }),
          signInWithPassword: async () => ({ error: { message: 'Supabase not configured' } }),
          signInWithOAuth: async () => ({ error: { message: 'Supabase not configured' } }),
          signOut: async () => ({}),
        },
        from: () => ({
          select: () => ({ eq: () => ({ single: async () => ({ error: { message: 'Supabase not configured' } }) }) }),
          insert: () => ({ select: async () => ({ error: { message: 'Supabase not configured' } }) }),
          update: () => ({ eq: async () => ({ error: { message: 'Supabase not configured' } }) }),
        }),
      };
    }
    
    // Create and return the actual Supabase client when credentials are available
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    
    // Return the mock client on error
    return {
      auth: {
        getSession: async () => ({ data: { session: null } }),
        signInWithPassword: async () => ({ error: { message: 'Supabase connection error' } }),
        signInWithOAuth: async () => ({ error: { message: 'Supabase connection error' } }),
        signOut: async () => ({}),
      },
      from: () => ({
        select: () => ({ eq: () => ({ single: async () => ({ error: { message: 'Supabase connection error' } }) }) }),
        insert: () => ({ select: async () => ({ error: { message: 'Supabase connection error' } }) }),
        update: () => ({ eq: async () => ({ error: { message: 'Supabase connection error' } }) }),
      }),
    };
  }
};

export const supabase = createSupabaseClient();
