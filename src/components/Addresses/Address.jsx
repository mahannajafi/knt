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
                    <div className="addressLocation">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Address;