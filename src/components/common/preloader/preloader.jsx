import preloader from "../../../assets/images/Spinner@1x-1.3s-200px-200px.svg"

<preloader />

let Preloader = () => {
    return (
        <div>
            <img src={preloader} className="imgPreloader" />
        </div>
    )
}

export default Preloader;