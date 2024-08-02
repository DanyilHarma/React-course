
import Preloader from "../../common/preloader/preloader";
import classes from "./profileInfo.module.css"

const ProfileInfo = (props) => {

    if (!props.profile || !props.profile.photos) {
        return <Preloader />
    }

    return (
        <div>
            <div className={classes.imageTop}>
            </div>
            <div className={classes.infoUser}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div className={classes.description}>
                    <div className={classes.userInfo}>
                        <h3>About me</h3>
                        <div>{props.profile.fullName}</div>
                        <div>{props.profile.aboutMe}</div>
                        <div>{props.profile.lookingForAJobDescription}</div>
                        <div>Education: Samurai</div>
                        <div className={classes.lookingForAJobContainer}>
                            <input className={classes.lookingForAJob} type="checkbox" checked={props.profile.lookingForAJob} readOnly />
                            <span>Ищу работу</span>
                        </div>
                    </div>
                    <div className={classes.userContacts}>
                        <h3>Contacts</h3>
                        <div><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
                        <div><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                        <div><a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
                        <div><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
                        <div><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;