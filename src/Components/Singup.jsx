export const Signup=()=>{
    return(
        <>
        <div className="container">
            <form action="#">
                <input type="text" placeholder="FirstName" name="fname"/>
                <span></span>
                <input type="text" placeholder="LastName" name="lname" />
                <span></span>
                <input type="password" placeholder="Enter password" name='password' />
                <span></span>
                <input type="password" placeholder="confirmpassword" name='cpassword'/>
                <span></span>
                <button type="submit">submit</button>
            </form>
        </div>
        </>
    )
}