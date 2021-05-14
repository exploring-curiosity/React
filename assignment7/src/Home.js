import dove from './dove.jpg';
function Home(){
    return(
    <div>
    <br />
    <figure>
    <img src= {dove} alt="dove" width="400" height="400" />
    </figure>
    <h2>INTERNATIONAL PEACE CONFERENCE 2020: THE EYELAND</h2><br /><br />
    <div class="centre double">The sixth annual International Peace Conference is fast approaching and will be taking place from Feb 13th-15th in Maastricht, Netherlands<br />​Explore and learn more about the conference and our upcoming theme: "The Eyeland"</div>
    <details>
      <summary title="click to expand">About</summary>
      <p>
       Within the global spectrum, there are different spheres in which the realization of peace is determined by our choices. On the international level, choices made by global leaders and organizations have an immediate impact on ordinary citizens
        unrepresented in the decision making. On the national and community level, choices and actions made by citizens bear responsibility, and shape the course that countries and communities take. On the personal level, choices affect
        our well-being, inner peace, and relationship with others.
      </p>
    </details>
    <details>
      <summary title="click to expand">Our Philosophy</summary>
      <p>
      We firmly believe that there lies enormous potential for conflict resolution through unmediated dialogue and discussion, viewing it as a force to spread the profound possibility of global harmony. The conference is idealistic. This is what gives it its power.  We aim to spark activism and initiative among  youth.
      </p>
      <p>
        With enormous commitment, hard work and perseverance; with cooperation, collaboration and understanding; by recognizing the barriers and obstacles that lie ahead, yet not merely accepting them, peace can be a reality.
      </p>
    </details>
    <details>
      <summary title="click to expand">The Conference</summary>
      <p>
     During a three-day conference, 400 participants of over 105 nationalities, take part in a wide variety of engagements. Workshops led by youth, who have either experienced the absence of peace or with personal ties to various forms of conflict, offer unique insights and solution-based discussions. Peacemakers, challengers, advocates, and experts from around the world share their knowledge and inspire through lectures and leaded debates. The intercultural evenings and performances add a sense of optimism and understanding, a sense of hope and purpose.
      </p>
    </details>
        </div>
    );
}
export default Home;