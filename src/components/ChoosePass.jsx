import React, {useState} from "react";
import "./Register.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function ChoosePass() {
    let checkPass = false
    let checkRepeatPass = false
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const CheckPass = (event) => {
        setPass(event.target.value);
        document.getElementsByClassName('error')[0].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        document.getElementsByClassName('closeIcon')[0].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[0].style.visibility = 'hidden'
        checkPass = false

        if (event.target.value.length < 8){
            document.getElementsByClassName('error')[0].innerHTML = "حداقل 8 کاراکتر وارد کنید"
        }
        else {
            document.getElementsByClassName('error')[0].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[0].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[0].style.visibility = 'hidden'
            checkPass = true
        }
        Check()
    };

    const CheckRepeatPass = (event) => {
        setRepeatPass(event.target.value);
        document.getElementsByClassName('error')[1].innerHTML = "تکرار رمز و رمز مطابقت ندارند"
        document.getElementsByClassName('closeIcon')[1].style.visibility = 'visible'
        document.getElementsByClassName('checkIcon')[1].style.visibility = 'hidden'
        checkRepeatPass = false

        if (pass !==  event.target.value) {
            document.getElementsByClassName('error')[1].innerHTML = "تکرار رمز و رمز مطابقت ندارند"
        } else {
            document.getElementsByClassName('error')[1].innerHTML = "&nbsp;"
            document.getElementsByClassName('checkIcon')[1].style.visibility = 'visible'
            document.getElementsByClassName('closeIcon')[1].style.visibility = 'hidden'
            checkRepeatPass = true
        }
        Check()
    }
    const Check = () => {
        if (document.getElementsByClassName('checkIcon')[0].style.visibility === 'visible' &&
        document.getElementsByClassName('checkIcon')[1].style.visibility === 'visible') {
            document.getElementsByClassName('btn')[0].style.background = '#234E70FF'
            document.getElementsByClassName('btn')[0].style.cursor = 'pointer'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = ""
            document.getElementsByClassName('disableLink')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.disabled = false
        }
        else {
            document.getElementsByClassName('btn')[0].style.background = 'grey'
            document.getElementsByClassName('btn')[0].style.cursor = 'auto'
            document.getElementsByClassName('goAhead')[0].style.pointerEvents = "none"
            document.getElementsByClassName('disableLink')[0].style.display = 'inline'
            document.getElementsByClassName('goAhead')[0].style.display = 'none'
            document.getElementsByClassName('goAhead')[0].style.disabled = true
        }
    }

    return (
        <>
            <div className='registerContainer'>
                <div className='registerText'>
                    <div>
                        <p>ثبت نام کرده اید؟</p>
                        <Link to="/Login" className="log"><button>ورود</button></Link>
                    </div>
                </div>
                <div className='registerForm'>
                    <div>
                        <p>ثبت نام</p>
                        <form>
                            <input placeholder='رمز خود را وارد کنید' type="password" value={pass} onChange={CheckPass}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon1" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon1" />
                            <p className="error">&nbsp;</p>
                            <input placeholder='تکرار رمز خود را وارد کنید' type="password" value={repeatPass} onChange={CheckRepeatPass}/>
                            <CheckIcon sx={{ fontSize: 16 }} className="checkIcon checkIcon2" />
                            <CloseIcon sx={{ fontSize: 16 }} className="closeIcon closeIcon2" />
                            <p className="error">&nbsp;</p>
                            <button disabled={true} type='submit' className='btn'>
                                <span className='disableLink'>ثبت نام</span>
                                <Link to='/' className="goAhead">ثبت نام</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChoosePass;