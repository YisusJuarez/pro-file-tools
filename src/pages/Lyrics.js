import { useEffect, useState } from "react"
import { SongTextArea } from "../components/SongTextArea";

const SuccessMessage = () => {
    return (
        <div class="bg-blue-100 border-t-1 border-blue-500 rounded text-teal-900 px-2 py-1 shadow-md mb-2" role="alert">
            <div class="flex items-center">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>

                <p class="text-sm">Done! Go to ExportedSongs directory on your Documents OS.</p>

            </div>
        </div>
    )
}

export const Lyrics = () => {
    const [song, setSong] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [saveResponse, setSaveResponse] = useState(null)

    useEffect(() => {
        if (saveResponse === true) {
            setTimeout(() => {
                setSaveResponse(false)
            }, 4000)
        }

    }, [saveResponse])

    const onSubmitForm = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        const data = {
            song: song,
            name: name
        }
        const { status, message } = await window.proApi.generateSongs(data)

        if (status === 200) {
            setSaveResponse(true)
        } else {
            setSaveResponse(false)
        }

        setIsLoading(false)

    }
    return (
        <>
            {saveResponse === true && <SuccessMessage></SuccessMessage>}
            <form onSubmit={onSubmitForm}>
                <label for="message" className="block text-left mb-2 text-md font-medium text-gray-900 dark:text-white">Lyrics to Pro</label>
                <label for="message" className="block text-sm text-left mb-2 text-md font-normal text-gray-900 dark:text-white">Title</label>
                <input name="songname" type="text" className=" mb-2 block p-2.5 w-full text-sm
             text-white bg-neutral-800 rounded border  border-neutral-800
               placeholder-gray-400  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" value={name} onChange={(e) => setName(e.target.value)} />
                <label for="message" className="block text-sm text-left mb-2 text-md font-normal text-gray-900 dark:text-white">Song</label>

                <SongTextArea song={song} setSong={setSong} />
                {/* <label for="message" className="block text-left mb-2 text-md font-medium text-white">Export to:</label> */}
                {/*                 
                <input
                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-800 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-200  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-blue-500  file:px-3 file:py-[0.32rem] file:text-white  file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px]  focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                    type="file"
                    id="formFileMultiple"
                    directory="" webkitdirectory=""  /> */}

                <button className="block bg-blue-500 text-white px-2 py-1 mt-3 rounded text-xs font-medium" type={"submit"}>{!isLoading ? "Generate lyrics" : "Creating..."}</button>
            </form>
        </>

    )
}