
import classes from "./profileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.imageTop}>
            </div>
            <div className={classes.infoUser}>
                <div className={classes.avatar}> <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" alt="" /></div>
                <div className={classes.description}>
                    <div>Avatar A.</div>
                    <div>Date of Birth: 23 July</div>
                    <div>City: Dubassary</div>
                    <div>Education: Samurai</div>
                    <div>Website: nope)</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;