export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL || 'https://dtcxamijbjwmzxhsdure.supabase.co';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3hhbWlqYmp3bXp4aHNkdXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjIxNzUsImV4cCI6MjA2Njg5ODE3NX0.VcmdWARRkBBv5zg2QaWKOwfkFNKNfYCvGNUoEglSqGs';
    
    console.log("🧪 Testando conexão com Supabase...");
    
    const response = await fetch(`${supabaseUrl}/rest/v1/free_analysis_requests?select=id&limit=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    
    console.log("🧪 Status da resposta:", response.status);
    const data = await response.text();
    console.log("🧪 Resposta:", data);
    
    return res.json({
      success: response.ok,
      status: response.status,
      data: data
    });
  } catch (error) {
    console.error("🧪 Erro no teste:", error);
    return res.status(500).json({ success: false, error: String(error) });
  }
} 