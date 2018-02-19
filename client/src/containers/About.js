import React from 'react';

const About = ({ match }) =>

 (

            <div className="container" id="about">
              <h1> Math Facts App</h1>
              <div className="row">
                  <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <p> Math facts are important building blocks for young students trying to build fluency in mathematics.
                    Unfortunately, many students do not gain mastery of math facts at a young age, leaving gaps that build into
                    sink holes that make math tedious and difficult at higher levels. Those stumbling blocks can leave students with little
                    academic hope which can lead to failure to graduate from high school or obstacles to getting higher education - certificates or degrees.
                    </p>
                    </div>
                  <div className="col-md-2"></div>
                  Match Url{ match.url }
                  
              </div>
              <h2> Instructions </h2>
              <p> The math app has many different parameters so you can make the app work for you. These are only accessible if you <a href="./signup">sign up</a></p>
              <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                      <ul>
                        <li> Number of Questions - Increase the number of questions to increase the difficulty</li>
                        <li> Time Per Question - Decrease the time per question to increase the difficulty </li>
                        <li> Number Range - Pick numbers to test your specific needs </li>
                        <li> Operation - Switch between multiplication and addition </li>
                      </ul>
                  </div>
                  </div>
              <p> If you are not logged in then you will only have access to the default game which has the following parameters:</p>
              <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                      <ul>
                        <li> Number of Questions - 10</li>
                        <li> Time Per Question - 5 </li>
                        <li> Number Range - between 7 and 12, inclusive </li>
                        <li> Operation - multiplication </li>
                      </ul>
                  </div>
                  </div>
            </div>

    )

export default About;
