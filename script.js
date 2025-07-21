<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="PhoneNumber" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" required>
            </div>
            <button type="submit">Login</button>
            <p id="error-message" class="error"></p>
        </form>
    </div>

    <div id="overlay" class="overlay">
        <div class="overlay-content">
            <span class="close-btn" id="closeBtn">×</span>
            
            <!-- Video container will be populated by JavaScript -->
            <div id="video-container"></div>

            <!-- Navigation for videos -->
            <div class="video-nav">
                <button id="video1Btn">Video 1</button>
                <button id="video2Btn">Video 2</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
