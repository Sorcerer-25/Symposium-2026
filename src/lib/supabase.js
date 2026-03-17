import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isPlaceholder = !supabaseUrl || !supabaseKey || supabaseUrl.includes('placeholder')

if (isPlaceholder) {
  console.warn('Supabase credentials not found or are placeholders. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder-please-update-env.supabase.co', 
  supabaseKey || 'no-key-found'
)

