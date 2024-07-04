async function getResponse() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');
    const apiKey = 'sk-proj-xKxmfQ0ONDu9QkUXgn8QT3BlbkFJrk1QwedNFw3T2GlPRKpD';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": userInput}
            ]
        })
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);
        const data = await response.json();
        const message = data.choices[0].message.content;
        responseDiv.innerText = message;
    } catch (error) {
        responseDiv.innerText = 'Error: ' + error.message;
    }
}
