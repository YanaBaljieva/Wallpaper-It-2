function TextBody() {
    return (
        <div>
            <div className="px-5">
                <nav className="text-14 my-5">
                    <ol className="flex justify-start items-center text-s font-['avenir']">
                        <li>
                            <a href="/" className="underline">Home</a>
                        </li>
                        <span className="flex ml-1.5 mr-1.5">/</span>
                        <li>
                            <span className="underline">
                                <a className="ml-1" href="/">Wallpaper</a>
                            </span>
                        </li>
                        <span className="flex ml-1.5 mr-1.5">/</span>
                        <li>
                            <span className="underline">
                                <a className="ml-1" href="/">Shop By Design</a>
                            </span>
                        </li>
                        <span className="flex ml-1.5 mr-1.5">/</span>
                        <li>
                            <span className="underline">
                                <a className="ml-1" href="/">Animal</a>
                            </span>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="px-2.5 lg:px-4">
                <div className="pb-[1.25rem] text-center">
                    <h1 className="text-[2rem] font-black font-['serif'] pb-2">
                        Animal Wallpaper
                    </h1>
                    <div className="mx-auto max-w-[80%] text-xl font-['avenir'] ">
                    <div> When it comes to adding a dose of exotic chic to your home, you can't go wrong with our animal print wallpaper. From tiny critters to magnificent beasts, we've got an impressive selection of gorgeous animal wallpaper to complement every room in the house - including living rooms, <a href="/">dining rooms</a> and even your bedroom! Available in a wide range of colourways, our animal print wallpaper is the perfect way to create a feature wall or used to decorate the entire space to make a bold statement.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextBody;