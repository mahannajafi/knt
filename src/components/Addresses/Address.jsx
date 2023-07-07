import "./Address.css"
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Address({productImage , providerName , salesNumber , productPrice}) {
    return (
        <>
            <div className="addresses">
                <div className="addressTitle">
                    <h4>عنوان ادرس: تهران, خیابان ولیعصر, کوچه ی بهاران</h4>
                    <div>
                        <button className="editAddress"><EditIcon />ویرایش ادرس</button>
                        <button className="deleteAddress"><DeleteIcon />حذف ادرس</button>
                    </div>
                </div>
                <div className="addressContent">
                    <div className="addressText">
                        <div>
                            <p>کد پستی</p>
                            <p>123456</p>
                        </div>
                        <div>
                            <p>شماره همراه گیرنده</p>
                            <p>09100134518</p>
                        </div>
                        <div>
                            <p>نام و نام خانوادگی گیرنده</p>
                            <p>الهام ظهیر</p>
                        </div>
                    </div>
                        <iframe className="addressLocation"
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.0223042248701!2d11.145848269494113!3d52.732572334659714!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2snl!4v1685549452683!5m2!1sfa!2snl"></iframe>
                </div>
            </div>
        </>
    )
}

export default Address;