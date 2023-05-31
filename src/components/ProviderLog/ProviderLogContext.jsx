import "./ProviderLogContext.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function ProviderLoginContext() {
    return (
        <div className="providerLogContainer">
            <div className="providerLogSection">
                <h1>برای همکاری با ما تماس بگیرید.</h1>
                <div className="providerLogText"><p>{"09100000000"}</p>&nbsp;<div><WhatsAppIcon /></div></div>
                <div className="providerLogText"><p>{"@pichIcon"}</p>&nbsp;<div><InstagramIcon /></div></div>
            </div>
        </div>
    )
}

export default ProviderLoginContext;