export const SongTextArea = ({ song, setSong }) => {
    const turnUpperCase = (e) => {
        e.preventDefault();
        setSong(song.toUpperCase());
    }
    const clear = (e) => {
        e.preventDefault();
        setSong("")
    }
    return (
        <>
            <div className="flex flex-row gap-2">
                <button onClick={turnUpperCase} className={"flex rounded justify-center align-middle p-2 bg-neutral-800 mb-2 text-neutral-300 font-mono text-xs hover:bg-neutral-700"}><h1>A</h1><svg className="text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                </svg>
                </button>

                <button onClick={clear} className={"flex rounded justify-center align-middle p-2 bg-neutral-800 mb-2 text-neutral-300 font-mono text-xs hover:bg-neutral-700"}><svg className="text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

                </button>
            </div>

            <textarea name="song" id="message" rows="10" className=" resize-none block p-2.5 w-full text-sm
        text-white bg-neutral-800 rounded border  border-neutral-800
          placeholder-gray-400  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Paste your lyrics here..." value={song} onChange={(e) => setSong(e.target.value)}>
            </textarea>
        </>

    )
}