import logo from './logo.svg';
import './App.css';

function App() {

  //js for user data form starts
  return (
    <div class = "page">
    <head>
      <meta charset = "UTF-8"/>
      <meta http-equiv = "X-UA-Compatible" content = "IE=edge"/>
      <meta name="viewport" content = "width=device-width, initial-scale=1.0"/>
      <link rel = "stylesheet" href = "style.css"></link>
      <title>Nikki's ePortfolio</title>
    </head>
    <body>
    {/* nav bar starts*/}
    <header>
        <p class = "logo">DAMS</p>
        <nav class = "navBar">
            <ul class = "navLinks">
                <li><a href = "#about">About</a></li>
                <li><a href = "#userDataForm">User Data</a></li>
                <li><a href = "">Sensor Data</a></li>
                <li><a href = "#userFeedback">Feedback</a></li>
            </ul>
        </nav>
    </header>
    {/*nav bar ends*/}
    {/*hero starts*/}
    <div id = "hero" class = "hero">
            <div class = "heroText">
            <h1>DAMS IoT Comfort.</h1>
            </div>
        </div>
    {/*hero ends*/}
    {/*about starts*/}
    <div id = "about" class = "about">
            <div class = "aboutText">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  unt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    {/*about ends*/}
    {/*user form starts*/}
    <div id = "userDataForm" class = "userDataForm">
      <div class = "formBackground">
      <h1>What Are Your Comfort Preferences?</h1>
      <label for = "lighting">Lighting</label>
      <input type = "range" id = "lighting" min = "0" defaultValue = "250" max = "500" step = "100" class = "slider" list = "markers"/>
      <label for = "noise">Noise</label>


      <input type = "range" id = "noise" min = "0" defaultValue = "250" max = "500" step = "100" class = "slider" list = "markers"/>
      <label for = "temperature">Temperature</label>
      <input type = "range" id = "temperature" min = "0" defaultValue = "250" max = "500" step = "100" class = "slider" list = "markers"/>
      <datalist id = "markers">
        <option value="0"></option>
        <option value="100"></option>
        <option value="200"></option>
        <option value="300"></option>
        <option value="400"></option>
        <option value="500"></option>
      </datalist>
      </div>
    </div>
    {/* user form ends */}
    {/* user feedback starts */}
    <div id = "userFeedback" class = "userFeedback">
      <h1>We value your feedback.</h1>
      <h2>Please complete the following form to help us improve our service.</h2>
      <div class = "questions">
        {/* question 1 starts */}
        <p class = "ques ">How satisfied were you with the recommendations provided by our algorithms?</p>
        <div class = "answer">
          <div class = "answerLabels">
            <p class = "answerLabel">Not satisfied</p>
            <p class = "answerLabel">Somewhat satisfied</p>
            <p class = "answerLabel">Very satisfied</p>
          </div>
          <div class = "answerBtns">
            <div class = "ques1">
              <input type = "radio" name = "question1" value = "Not satisfied"/>
              <label for = "Not satisfied"></label>
            </div>
            <div class = "ques1">
              <input type = "radio" name = "question1" value = "Somewhat satisfied"/>
              <label for = "Somewhat satisfied"></label>
            </div>
            <div class = "ques1">
              <input type = "radio" name = "question1" value = "Extremely satisfied"/>
              <label for = "Extremely satisfied"></label>
            </div>
          </div>

        </div>
        {/* question 1 ends */}
        {/* question 2 starts */}
        <p class = "ques ">How accurate did our recommendations align with your preferences and expectations?</p>
        <div class = "answer">
          <div class = "answerLabels">
            <p class = "answerLabel">Not accurate</p>
            <p class = "answerLabel">Somewhat accurate</p>
            <p class = "answerLabel">Very accurate</p>
          </div>
          <div class = "answerBtns">
            <div class = "ques2">
              <input type = "radio" name = "question2" value = "Not satisfied"/>
              <label for = "Not satisfied"></label>
            </div>
            <div class = "ques2">
              <input type = "radio" name = "question2" value = "Somewhat satisfied"/>
              <label for = "Somewhat satisfied"></label>
            </div>
            <div class = "ques2">
              <input type = "radio" name = "question2" value = "Extremely satisfied"/>
              <label for = "Extremely satisfied"></label>
            </div>
          </div>
        </div>
        {/* question 2 ends */}

        {/* question 3 starts */}
        <p class = "ques ">How would you rate the overall usability of our website?</p>
        <div class = "answer">
          <div class = "answerLabels">
            <p class = "answerLabel">Not user-friendly</p>
            <p class = "answerLabel">Somewhat user-friendly</p>
            <p class = "answerLabel">Very user-friendly</p>
          </div>
          <div class = "answerBtns">
            <div class = "ques3">
              <input type = "radio" name = "question3" value = "Not satisfied"/>
              <label for = "Not satisfied"></label>
            </div>
            <div class = "ques3">
              <input type = "radio" name = "question3" value = "Somewhat satisfied"/>
              <label for = "Somewhat satisfied"></label>
            </div>
            <div class = "ques3">
              <input type = "radio" name = "question3" value = "Extremely satisfied"/>
              <label for = "Extremely satisfied"></label>
            </div>
          </div>
        </div>
        {/* question 3 ends */}

        {/* question 4 starts */}
        <p class = "ques ">How likely will you be using our services for future visits?</p>
        <div class = "answer">
          <div class = "answerLabels">
            <p class = "answerLabel">Not likely</p>
            <p class = "answerLabel">Somewhat likely</p>
            <p class = "answerLabel"> Very likely</p>
          </div>
          <div class = "answerBtns">
            <div class = "ques4">
              <input type = "radio" name = "question4" value = "Not satisfied"/>
              <label for = "Not satisfied"></label>
            </div>
            <div class = "ques4">
              <input type = "radio" name = "question4" value = "Somewhat satisfied"/>
              <label for = "Somewhat satisfied"></label>
            </div>
            <div class = "ques4">
              <input type = "radio" name = "question4" value = "Extremely satisfied"/>
              <label for = "Extremely satisfied"></label>
            </div>
          </div>
        </div>
        {/* question 4 ends */}

        {/* question 5 starts */}
        <p class = "ques ">How likely are you to recommend this website to others?</p>
        <div class = "answer">
          <div class = "answerLabels">
            <p class = "answerLabel">Not likely</p>
            <p class = "answerLabel">Somewhat likely</p>
            <p class = "answerLabel"> Very likely</p>
          </div>
          <div class = "answerBtns">
            <div class = "ques5">
              <input type = "radio" name = "question5" value = "Not satisfied"/>
              <label for = "Not satisfied"></label>
            </div>
            <div class = "ques5">
              <input type = "radio" name = "question5" value = "Somewhat satisfied"/>
              <label for = "Somewhat satisfied"></label>
            </div>
            <div class = "ques5">
              <input type = "radio" name = "question5" value = "Extremely satisfied"/>
              <label for = "Extremely satisfied"></label>
            </div>
          </div>
        </div>
        {/* question 5 ends */}


      </div>
      
    </div>
    {/* user feedback ends */}
    
</body>
</div>
  
  );
}

export default App;