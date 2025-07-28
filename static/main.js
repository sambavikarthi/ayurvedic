const tips = {
    "Reduce portion sizes": [
        "Drink a large glass of water 10 minutes before your meal to feel less hungry.",
        "Keep meat, chicken, turkey and fish portions to about 3 ounces.",
        "Share one dessert.",
        "Use teaspoons, salad forks, or child-size forks to help you take smaller bites.",
        "Make less food look like more by serving your meal on a salad or breakfast plate.",
        "Eat slowly. It takes 20 minutes for your stomach to signal your brain that you are full.",
        "Listen to music while you eat instead of watching TV."
    ],
    "Be physically active": [
        "Turn up the music and jam while doing household chores.",
        "Work out with a video that shows you how to get active.",
        "Deliver a message in person to a co-worker instead of sending an e-mail.",
        "Walking is one of the best ways to increase your activity level.",
        "Show your kids the dances you used to do when you were their age."
    ],
    "Make healthy food choices": [
        "Buy a mix of vegetables when you go food shopping.",
        "Choose veggie toppings like spinach, broccoli, and peppers for your pizza.",
        "Eat a variety of colorful fruits and vegetables every day.",
        "Stir fry, boil, or bake with non-stick spray or low-salt broth.",
        "Cook with a mix of spices instead of salt to add flavor."
    ],
    "Stress reduction/ mental health": [
        "Find ways to relax. Try deep breathing, taking a walk, yoga, or listening to your favorite music.",
        "Pamper yourself. Read a book, take a long bath, or meditate.",
        "Think before you eat. Try not to eat when you are bored, upset, or unhappy."
    ],
    "Prevention programs": [
        "Consider registering for a diabetes prevention program in your area to help you make healthy lifestyle choices."
    ]
};

document.getElementById("chatForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const category = document.getElementById("category").value;
    const chatArea = document.getElementById("chatArea");

    if (category) {
        const tipsForCategory = tips[category];
        chatArea.innerHTML += `<div class="msg left-msg"><div class="msg-bubble"><div class="msg-text">Here are some tips for ${category}:</div></div></div>`;
        
        tipsForCategory.forEach(tip => {
            chatArea.innerHTML += `<div class="msg left-msg"><div class="msg-bubble"><div class="msg-text">${tip}</div></div></div>`;
        });

        // Scroll to the bottom of the chat area
        chatArea.scrollTop = chatArea.scrollHeight;
        // Reset the selection
        document.getElementById("category").selectedIndex = 0;
    } else {
        chatArea.innerHTML += `<div class="msg left-msg"><div class="msg-bubble"><div class="msg-text">Please select a category.</div></div></div>`;
    }
});
