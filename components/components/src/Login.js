import React from 'react';


class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <div>
                <form>
                    username:  <input type='text' name='username' onChange={(event) => {
                        this.setState({ username: event.target.value })


                    }}></input>
password :  <input type='password' name='password' onChange={(event) => {
                        this.setState({ password: event.target.value })


                    }}></input>

                    <button>  Submit</button>


                </form>

             username :{this.state.username} <br></br>

              password:{  this.state.password}



            </div>





        )


    }


}

export default Login;