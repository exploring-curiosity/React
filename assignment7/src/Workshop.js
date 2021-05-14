import yumika from './yumika.jpg';
import borris from './borris.jpg';
function Workshop(){
    return(
    <div>
    <br />
    <p><img src={yumika} alt="Yumika" height="300" width="300" /></p>
    <h1><strong>The Truth Behind a History</strong></h1>
    <h3>Elsa, Yumika and Nicolas</h3>
    <p>Have you ever found out that history is not what your textbook says?Have you ever found out that there is always something else to the “history” you are told?Have you ever doubted that?Sometimes you may find two documents talking about the same history, but with completely opposite perspectives.What is the truth then? Who should you believe? Why is it different?To what extent will history affect people’s opinions about the world now?You are the detective now. Come and find the truth.
    </p>
    <br />
    <br />
    <br />
    <p ><img src={borris} alt="Boris" height="300" width="300" /></p>
    <h1><strong>From Nationalism to Immigration</strong></h1><br />
    <h3>Boris</h3>
    <br />
    <p>Some argue that, in today’s globalized world, migration is causing an erosion of borders and sovereignty.
Some others thank this global phenomenon migration for connecting different societies and powering growth.Who is right and who is wrong, if anyone at all?</p>
    <br />
    <br />
    
        </div>
    );
}
export default Workshop;