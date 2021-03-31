


function Toogle({id}) {
    return (
        <label htmlFor={id}
        className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input id={id} type="checkbox" className="hidden" />
                            <div
                                className="toggle__line w-10 h-4 bg-gray-300 rounded-full shadow-inner"
                            ></div>

                            <div
                                className="toggle__dot absolute w-6 h-6 bg-gray-400 rounded-full shadow inset-y-0 left-0"
                            ></div>
                        </div>
                    </label>
    )
}


export default Toogle