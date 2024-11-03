
export const goalsy = {
    id: 'goalsy',
    title: "Goalsy",
    mainImage: "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/goalsy/goalsMain.jpg",
    images: ["https://lisaportfolio2024.s3.us-west-1.amazonaws.com/goalsy/goalsyDesktop.jpg", "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/goalsy/goalsySliderFeatures.jpg"],
    techStack: ["React", "Node", "Auth0", "Express", "PostgreSQL"],
    details: `Goalsy is a user-friendly web app for setting and tracking goals. 
     This was my first every full stack project. I started working on a mobile version 
    that included Lottie for animation.`,
    features: `Create goals, add tasks to those goals, 
    track progress with percentage tracking and data charts.`,
    date: "January 2018",
    links: {
      github: "https://github.com/Lisamarie73187/goalsy",
    }
}

export const gyft = {
    id: 'gyft',
    title: "GYFT",
    mainImage: "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/gyft/GyftHomeSlider.jpg",
    images: ["https://lisaportfolio2024.s3.us-west-1.amazonaws.com/gyft/gyftpage2.jpg"],
    techStack: ["React-Native", "Typescript", "MobX", "Node.js", "Photoshop", "Illustrator"],
    details: `Gyft is a health app I worked on at Styr Labs, designed to support pregnant 
    women by helping them track their pregnancy progress and 
    overall health. It included a bluetooth-connected pendant 
    that monitored steps, encouraging users to stay active. This project was 
    built from the ground up with a team of four and successfully launched
    to the app store. Unfortunately, that app is no longer available.`,
    features:`Features include a nutrition tracker that ensures users are 
    getting adequate nutrition and highlights the essential 
    nutrients needed during pregnancy. We developed an "AI" chat using Google\'s 
    Dialogflow to allow users to log food, search for recipes, find nearby restaurants, 
    add fitness activities and more.`,
    date: "June 2018",
}

export const sudoku = {
    id: 'sudoku',
    title: "Sudoku",
    mainImage: "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/sudoku/sudokuThumbnail.jpg",
    images: ["https://lisaportfolio2024.s3.us-west-1.amazonaws.com/sudoku/SudokuSlideOne.jpg", "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/sudoku/SudokuSlideTwo.jpg"],
    techStack: ["react"],
    details: `Simple sudoku game built with React.`,
    features:`Choose your difficulty level, add notes, and check your answers.`,
    date: "Sept 2019",
    links: {
        github: "https://github.com/Lisamarie73187/sudoku/tree/master",
        live: "https://the-greatest-sudoku.surge.sh/"
      }
}

export const mealLogger = {
    id: 'mealLogger',
    title: "Meal Logger",
    mainImage: "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/meal+logger/mealLoggerThumbnail.jpg",
    images: ["https://lisaportfolio2024.s3.us-west-1.amazonaws.com/meal+logger/mealLogggerSlideOne.jpg"],
    techStack: ["React-native", "react hooks", "Nutritionix API"],
    details: `I developed a simple nutrition tracking app that integrates with API. 
    I designed the logo and interface, but the project isn't fully completed due to life. `,
    features:`Nutritionix API integration, search for food, add to meal, and track your daily intake.`,
    date: "July 2019",
    links: {
        github: "https://github.com/Lisamarie73187/meal-logger",
      }
}

export const openMindChat = {
    id: 'openMindChat',
    title: "Open Mind Chat",
    mainImage: "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/OpenMindChatMain.gif",
    images: ["https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/OPCMobileView.gif", "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/chatConversations.gif", "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/OpenMindChat/realLogin.gif"],
    techStack: ["React", "Next.js", "Typescript", "Tailwind.css", "Open AI","Firebase", "MongoDB"],
    details: `Open Mind Chat is a mental wellness platform designed as both a website and mobile app, 
    developed with Next.js for a seamless experience across platforms. Users can 
    chat with an AI-powered assistant to talk through both good and bad days, 
    providing a supportive space for reflection and conversation. Chatbot 
    is still in training to enhance its support capabilities.`,
    features:`AI-powered chatbot, user authentication(Web Only), stores user data with MongoDB, Future Features: chat history, journaling feature.`,
    date: "October 2024",
    links: {
        github: "https://github.com/Lisamarie73187/open-mind-chat",
        githubMobile: "https://github.com/Lisamarie73187/open-mind-chat-mobile",
      }
}

export const whatsForDinner = {
    id: 'whatsForDinner',
    title: "What's For Dinner",
    mainImage: "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/whatsForDinner/main.png",
    images: ["https://lisaportfolio2024.s3.us-west-1.amazonaws.com/whatsForDinner/REcipes.png", "https://lisaportfolio2024.s3.us-west-1.amazonaws.com/whatsForDinner/Beef.png","https://lisaportfolio2024.s3.us-west-1.amazonaws.com/whatsForDinner/whatsForDinnerFeatures.gif"],
    techStack: ["React",  "Framer Motion", "Node.js", "Express", "OpenAI"],
    details: `"WTF Should I Make for Dinner?" is a unique AI-powered recipe generator that adds a 
    playful touch to meal planning. It not only helps users find dinner ideas 
    tailored to their preferences but also entertains them with funny, snarky 
    comments as they filter their options.`,
    features:`AI-powered chatbot, filter dietary preferences and whats in your fridge. It also generates random buttons to filter out a specific ingredient and/or cuisine.`,
    date: "October 2024",
    links: {
        github: "https://github.com/Lisamarie73187/whats-for-dinner",
      }
}

export const projectsData = [
    goalsy, gyft, sudoku, mealLogger, openMindChat, whatsForDinner
]