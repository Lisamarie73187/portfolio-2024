
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

export const projectsData = [
    goalsy, gyft, sudoku
]