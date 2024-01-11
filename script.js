window.onload = function() {
    // Call generateParagraph on page load to show the default image and paragraph
    generateParagraph();
};

function generateParagraph() {
    var moodSelect = document.getElementById("moodSelect");
    var selectedMood = moodSelect.value || "default"; // Use "default" if no mood is selected

    var resultParagraph = document.getElementById("resultParagraph");
    var paragraphElement = document.getElementById("paragraph");
    var moodImageElement = document.getElementById("moodImage");

    var paragraph = getParagraphByMood(selectedMood);
    var moodImageSrc = getImageByMood(selectedMood);

    paragraphElement.textContent = paragraph;
    moodImageElement.src = moodImageSrc;
}

function getParagraphByMood(mood) {
    switch (mood) {
        case "Default":
            return "Hey there! Select a mood to get Started ♡";
        case "Neutral":
                return "Welcome! How are you feeling today? Sometimes, we experience moments where our emotions are in a state of balance, not particularly leaning towards happiness or sadness, excitement or worry. It's perfectly okay to feel neutral, as it allows us to take a pause and simply be present in the moment. Use this time to reflect on your thoughts, appreciate the stillness, and find comfort in the calm. Whether your day is filled with excitement or quiet simplicity, your emotions are valid. Embrace this neutral space as an opportunity to recharge and center yourself. If you ever need a mood boost or someone to talk to, I'm here for you. Take a deep breath, and let's navigate this moment together.";    
        case "happy":
            return "That's Great I'm really happy to hear this and wish this happiness stays forever with you, Take a moment to reflect on the things that bring you happiness, whether it's spending time with loved ones, achieving a personal goal, or simply enjoying the beauty of the present moment. Remember, happiness is a precious gift you give to yourself, and you deserve every bit of it. So, keep smiling and continue spreading those positive vibes to make the world a brighter place!";
        case "sad":
            return "I'm sorry to hear that you're feeling sad. It's okay not to be okay. Sadness is a natural emotion that comes and goes, and it's important to acknowledge and honor your feelings. During these moments, be gentle with yourself and allow the emotions to flow. Remember all the things you have done, even achiving a small goal is an event to be celebrated so cheer up so that I can see that lovely smile on your face.";
        case "anxious":
            return "Feeling anxious is tough, but you're not alone. Take a deep breath, focus on the present moment, and I am here to listen you so, never hesitate opening up to me.Sharing feelings with right people feels like having a warm blanket in a Snowstorm so go ahead express yourself and I'll be always there for you.";
        case "worried":
            return "Worry and frustration can sometimes weigh heavily on our minds. If you're feeling worried or frustrated, it's completely normal, and you're not alone. Take a deep breath and try to identify the specific thoughts or situations causing these emotions. Consider breaking down the challenges into smaller, more manageable tasks. Remember, it's okay not to have all the answers right away.Sharing your concerns can provide a fresh perspective and help lighten the load. Additionally, focus on the aspects of the situation that you can control, and let go of those beyond your control.You have the strength to overcome obstacles, and with patience, things will get better.You got This!";
        case "lonely":
            return "Oh it seemes you are feeling Lonely, Not a problem just reach out to shreyanssatpute@gmail.com you will surely get an instant reply from the other side. And don't ever worry you aren't lonely you are the most beautiful human I know and I'll be here to listen you all the time. <3 ";
       
        case "Angry":
                return "Oh we were just informed that you are Angry, is it true? well it's understandable anger is one of the most common human emotion and each person has a different way to express it. Your feelings matter, and I'm here to support you in any way you need. If you're ready to talk about what's going on, I'm here to listen without judgment.If you need some space, that's completely fine too. Just know that I care about you deeply, and my priority is to see you happy. We all have our tough moments, but I believe in our strength to overcome any challenges that come our way. Take the time you need, and when you're ready, I'll be here with open arms.";    
        default:
            return "Oops! Something went wrong. Please try again.";
    }
}

function getImageByMood(mood) {
    switch (mood) {
        case "happy":
            return "happy.jpg"; // Replace with the actual file name/path for the happy mood image
        case "sad":
            return "sad.jpg"; // Replace with the actual file name/path for the sad mood image
        case "anxious":
            return "anxious.jpg copy.png"; // Replace with the actual file name/path for the anxious mood image
        case "worried":
            return "worried.jpg.png"; // Replace with the actual file name/path for the worried mood image
        case "lonely":
            return "lonely1.png"; // Replace with the actual file name/path for the lonely mood image
        case "Default":
            return "default.png"; // Replace with the actual file name/path for the default image
        case "Angry":
            return "angry.png"; // Replace with the actual file name/path for the default image    
        case "Neutral":
                return "neutral.png";    
        default:
            return ""; // No image for unknown mood
    }
}
