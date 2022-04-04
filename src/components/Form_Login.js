import React from 'react';

class FormLogin extends React.Component {
    render() {
        return (
            <div className='FormLogin d-flex justify-content-center'>
                <form>
                    <div className='text'>
                        <p>WELCOME</p>
                    </div>
                    <label className='properties'>
                        <div className='div-bottom'><input className='border-radius' type="text" name="name" placeholder='e-mail' /></div>
                        <div class='div-bottom div-input'><input className='border-radius' type="Password" name="password" placeholder='password' /></div>
                    </label>
                    <div className='text-password'>
                        <a href='/Fish_tanks' > <p>Forgot password?</p></a>
                    </div>
                    <a href='/Fish_tanks' >
                    <button type="button" className="btn btn-primary form-control rounded-pill">SIGN IN</button>
                    </a>
                </form>
            </div>
        )
    }
}

export default FormLogin