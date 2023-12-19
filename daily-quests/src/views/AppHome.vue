<!-- src/views/AppHome.vue -->
<template>
    <div>
        <h1 id="h1">Your Daily Quest</h1>
        <div id="category-buttons">
            <button @click="generateRandomQuest('do')">Do</button>
            <button @click="generateRandomQuest('create')">Create</button>
            <button @click="generateRandomQuest('nurture')">Nurture</button>
            <button @click="generateRandomQuest('learn')">Learn</button>
        </div>

        <div v-if="currentQuest" class="quest-container">
            <p class="quest-text">{{ currentQuest }}</p>
            <button ref="completeButton" @click="completeQuest" class="complete-button">Complete Quest</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questCategories: {
                do: ['Stretch for 10 minutes', 'Go on a walk around your neighborhood', 'Make progress towards decluttering a space in your home', 'Visit a local attraction (park, zoo, etc)', 'Purge your closet and donate the clothes', 'Call someone you haven\'t talked to in a while', 'Go to a farmers market', 'Go to a place that means a lot to you', 'Go to a restaurant you haven\'t tried but always wanted to', 'Go to bed early and get an early start to the day', 'Go to a local coffee shop', 'Do a load of laundry', 'Go to a dog park, with or without a dog'],
                create: ['Make something with your hands', 'Bake something from scratch', 'Brew a special drink', 'Write a story for 5 minutes', 'Draw a fictional character', 'Color for 10 minutes', 'Take a picture of something in your home from a new perspective', 'Make up a fictional character with a backstory', 'Write down your favorite quote backwards and look at it in the mirror', 'Draw or paint something that reminds you of your favorite person', 'Put on your favorite outfit', 'Write a poem/song about something you experience today', 'Dance like no one is watching'],
                nurture: ['Light a candle', 'Warm up a blanket in the dryer and get cozy', 'Pause and take 10 deep breaths', 'Get a new plant for your living space', 'Relax your shoulders, unclench your jaw, take a deep breath', 'Say the ABCs backwards', 'Do a power pose for 1 minute: stand up tall and lift your chin with your arms out', 'Spend 5 minutes alone', 'Watch or read something that makes you laugh', 'Watch a video of someone painting or creating something', 'Go see a movie or watch one of your favorites at home', 'Put your phone away and spend an hour with no internet', 'Have some tea or a warm drink'],
                learn: ['Visit a local museum or take a virtual tour', 'Learn and play a new board game', 'Learn a new word', 'Read or listen to a book for 15 minutes', 'Learn how to say "hello" in a different language', 'Learn something new about your town\'s history', 'Learn how to make a better paper airplane', 'Learn a card or magic trick', 'Learn how to make something or origami', 'Practice an impression of a celebrity or character', 'Learn a new recipe and try to make it', 'Memorize a new quote', 'Learn a life skill you\'ve wanted to learn (changing a tire, CPR, etc)']
            },
            currentQuest: null
        };
    },
    methods: {
        generateRandomQuest(category) {
            const quests = this.questCategories[category];
            const randomIndex = Math.floor(Math.random() * quests.length);
            this.currentQuest = quests[randomIndex];
        },
        completeQuest() {
            const buttonPosition = this.$refs.completeButton.getBoundingClientRect();
            const gradientStart = `${buttonPosition.left}px ${buttonPosition.top}px`;
            document.body.classList.add('rainbow-overlay');
            document.documentElement.style.setProperty('--gradient-start', gradientStart);
            document.getElementById("h1").innerHTML = 'Completed!';
            document.getElementById("category-buttons").style.display = "none";
            this.currentQuest = null;

            setTimeout(() => {
                document.body.classList.remove('rainbow-overlay');
                document.getElementById("h1").innerHTML = 'Your Daily Quest'
                document.getElementById("category-buttons").style.display = "flex";
            }, 5000);
        }
    }
};
</script>

<style scoped>
body {
    margin: 0;
    overflow: hidden;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

#category-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

#category-buttons button {
  margin: 0 10px;
  padding: 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#category-buttons button:hover {
  background-color: #0b7dda;
}

.quest-container {
  text-align: center;
  margin-top: 20px;
}

.quest-text {
  font-size: 18px;
  margin-bottom: 10px;
}

.complete-button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>

<style>

/* Rainbow background effect */
body.rainbow-overlay {
  background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
  background-size: 200% 200%;
  animation: rainbow 5s infinite;
  overflow: hidden;
  position: relative;
  z-index: 9999;
  color: white;
}

body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

</style>
