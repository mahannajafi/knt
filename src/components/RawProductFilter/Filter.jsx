import React , {useState} from "react";
import "./Filter.css"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function Filter() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='filter'>
                <p className="filterTitle">فیلتر ها</p>
                <div className="filterTitles" onClick={()=>setOpen(!open)}><p>مدل کیف</p>
                    {open ? <ExpandLess className="filterIcons" /> : <ExpandMore className="filterIcons" />}</div>
                <div className="filterItems" style={{display: !open && "none"}}>
                    <input type="checkbox" /><p>کیف دستی</p></div>
                <div className="filterItems" style={{display: !open && "none"}}><input type="checkbox" /><p>کوله پشتی</p></div>
                <div className="filterTitles" onClick={()=>setOpen(!open)}><p>مدل کیف</p></div>
            </div>
        </>
    )
}

export default Filter;