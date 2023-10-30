async function login() {
  try {
    const response = await fetch('http://localhost:8080/api/emply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ regId, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Assuming that you receive some data when the login is successful
      // Handle successful login here
    } else if (response.status === 401) {
      // Unauthorized: Handle authentication failure
      console.error('Authentication failed');
    } else {
      // Handle other HTTP status codes as needed
      console.error('Login failed with status code: ' + response.status);
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
