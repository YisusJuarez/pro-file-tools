export const SongTextArea = ({ song, setSong }) => {
    const turnUpperCase = () => {
        setSong(song.toUpperCase());
    }
    return (
        <>
            <div className="flex flex-row">
                <button onClick={turnUpperCase} className={"p-2 bg-neutral-800 mb-2 text-neutral-300 font-mono text-xs w-7"}>A
                </button>
            </div>

            <textarea name="song" id="message" rows="10" className=" resize-none block p-2.5 w-full text-sm
        text-white bg-neutral-800 rounded-lg border  border-neutral-800
          placeholder-gray-400  focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Paste your lyrics here..." value={song} onChange={(e) => setSong(e.target.value)}>
            </textarea>
        </>

    )
}