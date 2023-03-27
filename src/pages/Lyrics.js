export const Lyrics = () => {
    const onSubmitForm = (e) => {
        e.preventDefault()
        const data = {
            song: e.target.song.value,
            name: e.target.songname.value
        }
        window.proApi.generateSongs(data)
    }
    return (
        <>
            <form onSubmit={onSubmitForm}>
                <label for="message" className="block text-left mb-2 text-md font-medium text-gray-900 dark:text-white">Lyrics to Pro</label>
                <label for="message" className="block text-sm text-left mb-2 text-md font-normal text-gray-900 dark:text-white">Title</label>
                <input name="songname" type="text" className=" mb-2 block p-2.5 w-full text-sm
             text-white bg-neutral-800 rounded-lg border  border-neutral-800
               placeholder-gray-400  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"/>
                 <label for="message" className="block text-sm text-left mb-2 text-md font-normal text-gray-900 dark:text-white">Song</label>
                <textarea name="song" id="message" rows="10" className=" resize-none block p-2.5 w-full text-sm
             text-white bg-neutral-800 rounded-lg border  border-neutral-800
               placeholder-gray-400  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Paste your lyrics here...">
                </textarea>
                {/* <label for="message" className="block text-left mb-2 text-md font-medium text-white">Export to:</label> */}
                {/*                 
                <input
                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-800 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-200  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-blue-500  file:px-3 file:py-[0.32rem] file:text-white  file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px]  focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                    type="file"
                    id="formFileMultiple"
                    directory="" webkitdirectory=""  /> */}

                <button className="block bg-blue-500 text-white px-2 py-1 mt-3 rounded" type={"submit"}>Generate lyrics</button>
            </form>
        </>

    )
}