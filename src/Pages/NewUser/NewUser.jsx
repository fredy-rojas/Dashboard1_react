import "./NewUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
           
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="jhon"/>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Jhon Smith"/>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder="e-mail"/>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder="password"/>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="+1 123 456 78"/>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="New York | USA"/>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label for="other">Other</label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newUserBotton">Create</button>
        </div>
    )
}
