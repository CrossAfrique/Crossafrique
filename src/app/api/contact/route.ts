
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // WordPress API endpoint - replace with your WordPress site URL
    const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/contact/v1/submit';
    
    const response = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WORDPRESS_API_TOKEN}` // Optional if you need authentication
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        organization: formData.organization || '',
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString()
      })
    });

    if (response.ok) {
      const result = await response.json();
      return NextResponse.json({ success: true, data: result });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to submit to WordPress' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
