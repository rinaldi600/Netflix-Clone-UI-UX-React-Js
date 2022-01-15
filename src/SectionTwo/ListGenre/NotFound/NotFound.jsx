import "./NotFound.css"

export default function NotFound() {
    return (
        <div className={"flex h-72 bg-black"}>
            <div className="text-error w-full grid justify-center content-center">
                <div className="detail text-white sm:ml-14 md:ml-14">
                    <h1 className={"text-font sm:text-lg md:text-xl text-5xl font-bold leading-tight"}>Something Went
                        <br/> Wrong</h1>
                    <p className={"mt-4 text-font leading-7 sm:text-sm"}>Sorry, we couldn't find page you were looking for <br/>
                    To return to the Netflix homepage.
                    </p>
                </div>
            </div>
            <div className="icons-error w-full grid justify-center content-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
        </div>
    );
}