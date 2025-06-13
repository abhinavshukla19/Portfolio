import "./skillballon.css"

export let Skillballoon = ({ skillname, skillemoji, skilcolor }) => {
    return (
        <div
            className="skillballonbox"
            style={{ background: skilcolor }}
        >
            <div className="skillballontext">
                {skillname}
            </div>
            <div className="skillballonemoji">
                {skillemoji}
            </div>
        </div>
    )
}