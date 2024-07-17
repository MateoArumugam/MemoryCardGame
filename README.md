<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diamond Mind Memory Game</title>
    <link rel="stylesheet" href="style.css">
    <audio id="clickSound">
        <source src="click_sound.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</head>
<body>
    <header>
        <h1 class="title">Diamond Mind Memory Game</h1>
    </header>

    <main>
        <section class="game-container">
            <div class="memory-cards">
                <!-- Memory cards -->
                <div class="memory-card" data-framework="GreenGem">
                    <img class="front-face" src="GreenGem.png" alt="GreenGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="GreenGem">
                    <img class="front-face" src="GreenGem.png" alt="GreenGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="BlueGem">
                    <img class="front-face" src="BlueGem.png" alt="BlueGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="BlueGem">
                    <img class="front-face" src="BlueGem.png" alt="BlueGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="PurpleGem">
                    <img class="front-face" src="PurpleGem.png" alt="PurpleGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="PurpleGem">
                    <img class="front-face" src="PurpleGem.png" alt="PurpleGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="OrangeGem">
                    <img class="front-face" src="OrangeGem.png" alt="OrangeGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="OrangeGem">
                    <img class="front-face" src="OrangeGem.png" alt="OrangeGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="WhiteGem">
                    <img class="front-face" src="WhiteGem.png" alt="WhiteGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="WhiteGem">
                    <img class="front-face" src="WhiteGem.png" alt="WhiteGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="PinkGem">
                    <img class="front-face" src="PinkGem.png" alt="PinkGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <div class="memory-card" data-framework="PinkGem">
                    <img class="front-face" src="PinkGem.png" alt="PinkGem">
                    <img class="back-face" src="Logo.png" alt="Logo">
                </div>
                <!-- End of memory cards -->
            </div>
        </section>

       

        <!-- Play Again Button outside the popup -->
        <button class="playAgainButton">Play Again</button>

        <!-- Background music -->
        <audio id="bgMusic" loop>
            <source src="background_music.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

        <!-- Sound effect for popup -->
        <audio id="popupSound">
            <source src="popup-sound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>


         <!-- Popup message -->
         <div class="popup" id="popup">
            <div class="popup-content">
                <h2>Congratulations!</h2>
                <p>You've completed the game.</p>
                <button class="playAgainButton">Play Again</button>
            </div>
        </div>

    </main>

    <script src="script.js"></script>
</body>
</html>
