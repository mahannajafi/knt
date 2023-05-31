import "./MessagesSection.css"
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Message from "../Message/Message";

function MessagesSection() {
    return(
        <>
            <div className="myMessagesContainer">
                <DashboardMenu />
                <div className="messages">
                    <h3>پیام های من</h3>
                    <Message
                        title={"عنوان پیام"}
                        desc={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد." +
                            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد."}
                    />
                    <Message
                        title={"عنوان پیام"}
                        desc={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد." +
                            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد."}
                    />
                </div>
            </div>
        </>
    )
}

export default MessagesSection;