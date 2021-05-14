import { useState } from "react";

function Reg(){
    const [fname,setFname] =useState('');
    const [lname,setLname] =useState('');
    const [mail,setMail] =useState('');
    return (
        <div>
            <br />
            <form>
            <label for="fname">Name:</label><br /><br />
            <input type="text" id="fname" name="fname" placeholder="First" value={fname} onChange={(e) => setFname(e.target.value)} /><br />
            <input type="text" id="lname" name="lname" placeholder="Last"  value={lname} onChange={(e) => setLname(e.target.value)} /><br /><br />
            <label for="gender">Gender:</label><br /><br />
            <select id="gender" name="gender">
                <option value="Select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <br /><br />
            <label for="mail">Mail ID:</label><br /><br />
            <input type="text" id="mail" name="mail" placeholder='example@xyz.com'  value={mail} onChange={(e) => setMail(e.target.value)} /><br /><br />
            <label for="consent">Do you consent to having your pictures taken and published? </label><br /><br />
            <input type="radio" id="yes" name="consent" value="yes" />
            <label for="male">Yes</label><br />
            <input type="radio" id="no" name="consent" value="no" />
            <label for="female">No</label><br /><br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Reg;