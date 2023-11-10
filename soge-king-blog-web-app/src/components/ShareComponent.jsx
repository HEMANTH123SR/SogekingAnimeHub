import sogekingGif from "../../assets/sogeking-one-piece-gif.gif"

const ShareComponent=()=>{
    return(
        <div className="bg-[#121315] h-28 w-full flex space-x-11 items-center px-6">
<img src={sogekingGif} alt="sogeking gif" className="w-20 h-20 rounded-full"/>
<div className="">
    <h3 className="text-xl text-[#FFDD95]">Share SogeKing.Blog</h3>
    <h4 className="text-lg text-white">to your friend </h4>

</div>
        </div>
    )

}

export default ShareComponent;