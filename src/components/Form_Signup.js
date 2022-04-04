import React from "react"
import '../estilos/Form_Signup.css'

class Form_Signup extends React.Component {
    render() {
        return (
            <div className='FormLogin d-flex justify-content-center'>
                <form>
                    <div className='text-up'>
                        <p>Enter your data</p>
                    </div>
                    <label className='properties label'>
                        <div className='div-bottom'><input class='border-radius' type="text" name="name" placeholder='name' /></div>
                        <div class="mb-3">
                        <input className="div-bottom form-control rounded-pill border" type="file" id="formFile"></input>
                        </div>
                        <div className='div-bottom'><input class='border-radius' type="text" name="e-mail" placeholder='e-mail' /></div>
                        <div class='div-bottom'><input class='border-radius' type="Password" name="password" placeholder='password' /></div>
                    </label>
                    <button type="button" class="btn btn-primary form-control rounded-pill">Send</button>
                </form>
            </div>
        )
    }
}

export default Form_Signup