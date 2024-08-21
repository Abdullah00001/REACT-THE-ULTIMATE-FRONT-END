import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetail=useLoaderData()
    console.log(postDetail);
    const {body,title}=postDetail
    return (
        <>
        <div className="w-[1140px] mx-auto">
            <div className="flex flex-col min-h-96 justify-center items-center">
                <h1 className="text-6xl">{title}</h1>
                <h1 className="text-3xl">{body}</h1>
            </div>
        </div>
        </>
    );
};

export default PostDetails;