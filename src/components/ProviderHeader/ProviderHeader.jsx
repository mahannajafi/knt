import "./ProviderHeader.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProviderHeader() {
    return (
        <div className="ProviderHeader">
            <div className="ProviderHeaderLogo"></div>
            <AccountCircleIcon sx={{fontSize:40}} />
        </div>
    )
}

export default ProviderHeader;