import fetch from 'node-fetch';

async function clearVercelCache() {
  const VERCEL_DEPLOY_HOOK = process.env.VERCEL_DEPLOY_HOOK;
  
  if (!VERCEL_DEPLOY_HOOK) {
    console.error('Error: VERCEL_DEPLOY_HOOK environment variable is not set');
    process.exit(1);
  }

  try {
    console.log('🔄 Triggering cache clear...');
    
    const response = await fetch(VERCEL_DEPLOY_HOOK, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('✅ Cache clear triggered successfully!');
    console.log('Note: It may take a few minutes for changes to propagate');
  } catch (error) {
    console.error('❌ Failed to clear cache:', error.message);
    process.exit(1);
  }
}

clearVercelCache();