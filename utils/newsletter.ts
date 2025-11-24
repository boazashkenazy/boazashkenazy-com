// Utility functions for newsletter subscription

export interface SubscriptionResponse {
  success: boolean;
  message: string;
}

/**
 * Subscribe user to Substack newsletter using the unofficial API
 * @param email - User's email address
 * @param substackUsername - Substack username (e.g., 'boazashkenazy')
 * @returns Promise with subscription result
 */
export async function subscribeToNewsletter(
  email: string, 
  substackUsername: string = 'boazashkenazy'
): Promise<SubscriptionResponse> {
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    };
  }

  try {
    // Substack's internal API endpoint
    const response = await fetch(`https://${substackUsername}.substack.com/api/v1/free`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'email': email,
        'first_url': window.location.href,
        'first_referrer': document.referrer || '',
        'current_url': window.location.href,
        'current_referrer': document.referrer || '',
        'referral_code': '',
        'source': 'embed'
      })
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Thanks for subscribing! Check your email to confirm your subscription.'
      };
    } else {
      // Handle different error responses
      const errorText = await response.text();
      
      if (response.status === 409 || errorText.includes('already subscribed')) {
        return {
          success: false,
          message: 'This email is already subscribed to the newsletter.'
        };
      }
      
      return {
        success: false,
        message: 'Something went wrong. Please try again or visit our Substack page directly.'
      };
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

/**
 * Handle form submission for newsletter subscription
 * @param email - Email from form input
 * @param onSuccess - Callback for successful subscription
 * @param onError - Callback for subscription error
 */
export async function handleNewsletterSubmission(
  email: string,
  onSuccess: (message: string) => void,
  onError: (message: string) => void,
  onLoading?: (loading: boolean) => void
) {
  if (onLoading) onLoading(true);
  
  const result = await subscribeToNewsletter(email);
  
  if (onLoading) onLoading(false);
  
  if (result.success) {
    onSuccess(result.message);
  } else {
    onError(result.message);
  }
}