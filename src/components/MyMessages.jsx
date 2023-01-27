import "./MyMessages.css"
import DashboardMenu from "./DashboardMenu";

function MyMessages() {
    return(
        <>
            <div className="myMessagesContainer">
                <DashboardMenu />
                <div className="messages">
                    <h3>پیام های من</h3>
                    <div className="message">
                        <div className="messageTitle">
                            <h4>عنوان پیام</h4>
                        </div>
                        <div className="messageContent">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="messageTitle">
                            <h4>عنوان پیام</h4>
                        </div>
                        <div className="messageContent">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyMessages;