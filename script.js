async function fetchUserData(userEmail) {
    // In the case that the API is down, we want to use a try catch
    try {
        const response = await fetch("https://event-api.tamuhack.org/user", {
            method: "POST", // We want to use POST in order to get the data, we want to "POST" the user email
            headers: {
                Authorization: "Bearer tamuhackisbest" // This is how we use our password with the API
            },
            body: JSON.stringify({
                email: userEmail // We send the email in the body of the request
            })
        })
        
        const data = await response.json()
        
        fillUserData(data)


    } catch (error) {
    }
}

// Fills
function fillUserData(data) {
    document.getElementById("name").innerText = data.first_name + " " + data.last_name
    document.getElementById("major").innerText = data.major
}


fetchUserData("Enter your email here")