import logo from './logo.jpg';
function Head(){
    return(
        <div>
        <h1 title="Header" class="centre red"> <img src={logo} alt="logo" width="30" height="30" />International conference on World Peace</h1>
        <h3 class='centre' title="Greetings">Welcome to International confernce on world peace...</h3>
        </div>
    );
}

export default Head;